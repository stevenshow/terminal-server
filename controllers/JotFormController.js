const Database = require('../db/database');

processResult = (datum) => ({ ...datum, boolean: !!datum.boolean });
processInsert = (datum) => prepareDatabaseDates(datum, ['date']);

class CardController {
  constructor() {
    this.database = new Database({
      tableName: 'jotform',
      processor: this.processResult,
      beforeInsert: this.processInsert,
      timestamps: false,
      itemName: 'survey',
    });
  }

  InsertSurvey = async (survey) => {
    return await this.database.Create(survey);
  };
}

module.exports = CardController;
