/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('crawlspace').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('crawlspace', (table) => {
        table.increments('id').primary();
        table.timestamp('time').defaultTo(knex.fn.now());
        table.decimal('temp', 5, 2);
        table.decimal('humidity', 5, 2);
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  //   return knex.schema.dropTable('crawlspace');
};
