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
    {
      id: 2,
      name: 'GitHub',
      link: 'https://github.com/stevenshow/',
      ascii:
        "  ____ _ _   _   _       _     \n / ___(_) |_| | | |_   _| |__  \n| |  _| | __| |_| | | | | '_ \\ \n| |_| | | |_|  _  | |_| | |_) |\n \\____|_|\\__|_| |_|\\__,_|_.__/ \n                                 ",
    },
    {
      id: 3,
      name: 'Email',
      link: 'mailto:steven.schoebinger@gmail.com',
      ascii:
        " _____                 _ _ \n| ____|_ __ ___   __ _(_) |\n|  _| | '_ ` _ \\ / _` | | |\n| |___| | | | | | (_| | | |\n|_____|_| |_| |_|\\__,_|_|_|\n                            ",
    },
  ]);
};
