/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('TaskBoards').del();
  await knex('TaskBoards').insert([{ BoardId: 'xbt928a', name: 'First Board', owner: 'Steven' }]);
};
