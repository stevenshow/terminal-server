/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('project_cards', (table) => {
    table.increments('id').primary();
    table.string('name', 100);
    table.string('language', 50);
    table.string('takeaway', 100);
    table.text('description');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('project_cards');
};
