const Database = require('../db/database');
const knex = require('../db/knex');

processResult = (datum) => ({ ...datum, boolean: !!datum.boolean });
processInsert = (datum) => prepareDatabaseDates(datum, ['date']);

class TaskController {
  constructor() {
    this.BoardDB = new Database({
      tableName: 'TaskBoards',
      processor: this.processResult,
      beforeInsert: this.processInsert,
      timestamps: false,
      itemName: 'board',
    });
    this.ListDB = new Database({
      tableName: 'TaskLists',
      processor: this.processResult,
      beforeInsert: this.processInsert,
      timestamps: false,
      itemName: 'list',
    });
    this.CardDB = new Database({
      tableName: 'TaskCards',
      processor: this.processResult,
      beforeInsert: this.processInsert,
      timestamps: false,
      itemName: 'card',
    });
  }

  GetBoardItems = async ({ BoardId }) => {
    return knex('TaskLists')
      .innerJoin('TaskCards', 'TaskLists.ListId', 'TaskCards.ListId')
      .innerJoin('TaskBoards', 'TaskLists.BoardId', 'TaskBoards.BoardId')
      .where({ 'TaskBoards.BoardId': BoardId })
      .select('TaskLists.*', 'TaskCards.*');
  };
}

module.exports = TaskController;
