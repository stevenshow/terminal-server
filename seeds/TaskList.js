/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('TaskLists').del();
  await knex('TaskLists').insert([
    { ListId: 'bah324k', BoardId: 'xbt928a', name: 'List 1', position: 1 },
    { ListId: 'fhe8sdf', BoardId: 'xbt928a', name: 'List 2', position: 2 },
    { ListId: 'mjts9sf', BoardId: 'xbt928a', name: 'List 3', position: 3 },
  ]);
};
