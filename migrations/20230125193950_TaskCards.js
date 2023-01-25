/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('TaskCards ', (table) => {
    table.string('CardId', 33).primary();
    table.string('BoardId', 33).references('TaskBoards.BoardId');
    table.string('ListId', 33).references('TaskLists.ListId');
    table.string('name', 50);
    table.string('description', 500);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
