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
    let itemToInsert = this.ProcessSingleInsert(this.AddTimestamps(item));
    let id = this.primaryKeyName;
    try {
      [id] = await transaction(this.tableName)
        .insert(itemToInsert)
        .returning(`${this.primaryKeyName}`);
    } catch (e) {
      if (e.message.includes('unique constraint') && e.message.includes('violated')) {
        throw new DuplicateError(`New ${this.itemName} already exists`);
      } else {
        throw e;
      }
    }
    let result = await this.GetByID(id, transaction);
    return this.ProcessSingleResult(result);
  };

  GetAll = async (table = '', transaction = knex) => {
    return this.ProcessResults(await transaction.select('*').from(table || this.tableName));
  };

  ProcessResults = (items) => {
    return items.map(this.ProcessSingleResult);
  };
}

module.exports = Database;
