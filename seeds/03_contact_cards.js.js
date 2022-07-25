/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('contact_cards').del();
  await knex('contact_cards').insert([
    {
      id: 1,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/steven-schoebinger/',
      ascii:
        " _     _       _            _ ___       \n| |   (_)_ __ | | _____  __| |_ _|_ __  \n| |   | | '_ \\| |/ / _ \\/ _` || || '_ \\ \n| |___| | | | |   <  __/ (_| || || | | |\n|_____|_|_| |_|_|\\_\\___|\\__,_|___|_| |_|\n                                           ",
    },
  ]);
};
