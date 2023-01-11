const Database = require('../db/database');

processResult = (datum) => ({ ...datum, boolean: !!datum.boolean });
processInsert = (datum) => prepareDatabaseDates(datum, ['date']);

class PicoController {
  constructor() {
    this.database = new Database({
      tableName: 'crawlspace',
      processor: this.processResult,
      beforeInsert: this.processInsert,
      timestamps: false,
      itemName: 'reading',
    });
  }

  InsertReading = async (reading) => {
    console.log(reading);
    return await this.database.Create(reading);
  };
}

module.exports = PicoController;
