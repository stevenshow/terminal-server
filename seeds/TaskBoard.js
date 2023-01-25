/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('TaskBoard').del();
  await knex('TaskBoard').insert([{ BoardId: 'xbt928a', name: 'First Board', owner: 'Steven' }]);
};
