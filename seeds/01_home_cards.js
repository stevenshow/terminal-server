/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("home_cards").del();
  await knex("home_cards").insert([
    { id: 1, name: "Linux", content: "I Love Linux!" },
    { id: 2, name: "Raspberry Pi", content: "I love my Raspberry Pi!" },
    {
      id: 3,
      name: "Front End Development",
      content: "I Love Front End Development!",
    },
  ]);
};
