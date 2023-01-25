/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('TaskLists ', (table) => {
    table.string('ListId', 33).primary();
    table.string('BoardId', 33).references('TaskBoards.BoardId');
    table.string('name', 50);
    table.integer('position');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
