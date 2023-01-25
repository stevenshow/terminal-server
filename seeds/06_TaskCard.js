/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('TaskCards').del();
  await knex('TaskCards').insert([
    {
      CardId: 'aper99s',
      BoardId: 'xbt928a',
      ListId: 'bah324k',
      name: 'Card 1 in List 1',
      description: 'Card description',
      position: '1',
    },
    {
      CardId: 'irik6jd',
      BoardId: 'xbt928a',
      ListId: 'fhe8sdf',
      name: 'Card 1 in List 2',
      description: 'Card description',
      position: '1',
    },
    {
      CardId: 'pef9sjg',
      BoardId: 'xbt928a',
      ListId: 'mjts9sf',
      name: 'Card 1 in List 2',
      description: 'Card description',
      position: '1',
    },
  ]);
};
