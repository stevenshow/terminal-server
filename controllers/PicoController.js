const Database = require('../db/database');

processResult = (datum) => ({ ...datum, boolean: !!datum.boolean });
processInsert = (datum) => prepareDatabaseDates(datum, ['date']);

class PicoController {
  constructor() {
    this.database = new Database({
      tableName: 'humidity',
      processor: this.processResult,
      beforeInsert: this.processInsert,
      timestamps: false,
      itemName: 'reading',
    });
  }

  InsertReading = async (reading) => {
    const date = new Date();
    console.log(reading);
    console.log(date);
    return 'hello';
    // return await this.database.Create({ time: date, ...reading });
  };
}

module.exports = PicoController;
