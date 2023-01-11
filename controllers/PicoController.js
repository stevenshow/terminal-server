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

  InsertReading = async ({ temperature: temp, humidity }) => {
    console.log({ temp, humidity });
    return await this.database.Create({ temp, humidity });
  };
}

module.exports = PicoController;
