const knex = require('./knex');

let identity = (x) => x;

class Database {
  constructor({ primaryKeyName, tableName, processor, beforeInsert, timestamps, itemName, sort }) {
    this.primaryKeyName = primaryKeyName || 'id';
    this.tableName = tableName;
    this.ProcessSingleResult = processor || identity;
    this.ProcessSingleInsert = beforeInsert || identity;
    this.timestamps = !!timestamps;
    this.itemName = itemName || tableName;
    this.sort = sort || [{ column: `${this.primaryKeyName}`, order: 'asc' }];
  }

  Create = async (item, transaction = knex) => {
    let id = this.primaryKeyName;
    try {
      await transaction(this.tableName).insert(item);
    } catch (e) {
      if (e.message.includes('unique constraint') && e.message.includes('violated')) {
        throw new DuplicateError(`New ${this.itemName} already exists`);
      } else {
        throw e;
      }
    }
  };

  GetAll = async (table = '', transaction = knex) => {
    return this.ProcessResults(await transaction.select('*').from(table || this.tableName));
  };

  GetLastEntries = async (entries = 1, table = '', transaction = knex) => {
    return this.ProcessResults(
      await transaction
        .select('*')
        .from(table || this.tableName)
        .orderBy('id', 'desc')
        .limit(entries)
    );
  };

  ProcessResults = (items) => {
    return items.map(this.ProcessSingleResult);
  };
}

module.exports = Database;
