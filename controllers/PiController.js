const Database = require('../db/database');
const si = require('systeminformation');

processResult = (datum) => ({ ...datum, boolean: !!datum.boolean });
processInsert = (datum) => prepareDatabaseDates(datum, ['date']);

class PiController {
  constructor() {
    this.database = new Database({});
  }

  GetStats = async () => {
    try {
      const data = await si.currentLoad();
      return data;
    } catch (err) {
      console.error(err);
    }
  };
}

module.exports = PiController;
