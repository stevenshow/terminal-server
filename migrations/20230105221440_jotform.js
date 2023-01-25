/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.hasTable('jotform').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('jotform', (table) => {
        table.increments('id').primary();
        table.string('formId', 30);
        table.string('name', 50);
        table.string('ip', 18);
        table.string('description', 500);
        table.string('type', 15);
        table.string('website', 30);
        table.string('email', 100);
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('jotform');
};
