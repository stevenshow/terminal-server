/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('contact_cards').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('contact_cards', (table) => {
        table.increments('id').primary();
        table.string('name', 50);
        table.string('link', 100);
        table.text('ascii');
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('contact_cards');
};
