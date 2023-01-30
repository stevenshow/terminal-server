const Database = require('../db/database');
const PiStats = require('../utils/stats');

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
    return await this.database.Create({ temp: temp.toFixed(2), humidity: humidity.toFixed(2) });
  };

  GetLastReading = async () => {
    return await this.database.GetLastEntries(1);
  };

  GetStats = async () => {
    PiStats.printMemoryInfo();
    PiStats.printCPUInfo();
  };
}

module.exports = PicoController;
