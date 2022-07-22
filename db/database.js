const knex = require("./knex");

let identity = (x) => x;

class Database {
  constructor({
    primaryKeyName,
    tableName,
    processor,
    beforeInsert,
    timestamps,
    itemName,
    sort,
  }) {
    this.primaryKeyName = primaryKeyName || "id";
    this.tableName = tableName;
    this.ProcessSingleResult = processor || identity;
    this.ProcessSingleInsert = beforeInsert || identity;
    this.timestamps = !!timestamps;
    this.itemName = itemName || tableName;
    this.sort = sort || [{ column: `${this.primaryKeyName}`, order: "asc" }];
  }

  GetAll = async (table = "", transaction = knex) => {
    return this.ProcessResults(
      await transaction.select("*").from(table || this.tableName)
    );
  };

  ProcessResults = (items) => {
    return items.map(this.ProcessSingleResult);
  };
}

module.exports = Database;
