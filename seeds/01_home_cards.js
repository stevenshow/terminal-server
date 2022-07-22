/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("home_cards").del();
  await knex("home_cards").insert([
    {
      id: 1,
      name: "Linux",
      content:
        "I began using Linux back in 2018 when a professor mentioned how beneficial it would be for a programmer to be familiar with. Being the 'all-in' type, I deleted my Windows partition and installed Linux Mint. This forced me to learn the operating system as I was mid-semester. I learned it fast and ended up falling in love. I did what every Linux user does at some point in their journey and 'Distro-hopped' to a few popular distros. This landed me at the distro I have been using for roughly 2 years now, Manjaro, an Arch-based distro. This has made me feel at home in the command line.",
    },
    {
      id: 2,
      name: "Raspberry Pi",
      content:
        "My Raspberry Pi is a device that has helped foster my imagination and love for tech. I love the ability that I have to deploy an automated script that can collect data for me, send emails/texts, or just turn on LEDs based on the local weather. This gives me the ability to take whatever idea I have and create a project that can affect my surroundings in a real sense. All of the data on this website is actually being served from a server running on my Pi right now.",
    },
    {
      id: 3,
      name: "Front End Development",
      content:
        "I always feared front-end development because I felt that since I was not a graphic designer, I would not be able to create something that looked good. This all changed when I got my internship doing front-end development. I quickly realized how easily it came to me and how at home I felt doing it. This sparked my interest in making myself a personal website so that I could showcase some of the skills I have learned thus far.",
    },
    {
      id: 4,
      name: "Python",
      content:
        "Python is a language that I fell in love with halfway through my college degree. I love that I am able to do something that would be complex in a more verbose language, and do it in a few lines of code. It is also the main language used on the Raspberry Pi, so naturally, it became a language I am very strong in.",
    },
    {
      id: 5,
      name: "UVU",
      content:
        "I came to UVU because it was close to home and they had the degree I was pursuing at the time. But after attending, I realized how much of a perfect fit this college is for me. I love being able to have a professor that is fresh out of the industry and is able to give advice to students that are just getting into it. This to me is invaluable. The other students feel more like partners rather than someone you are competing against. Overall I have everything here that I felt I needed to excel in my degree and prepare for the industry.",
    },
    {
      id: 6,
      name: "Agile Methodology",
      content:
        "I learned Agile in school as well as in the industry. I have fallen in love with the iterative approach to problem solving and delivering solutions. I was always of the mindset that I had to have a finished/polished product to finally deliver and show off, which would cause me to burn out and never complete the projects due to not ever feeling it was ready. This has all changed and I have noticed that I am able to eventually deliver that polished product when I follow agile principles in not only my coding world, but my personal day to day life as well.",
    },
  ]);
};
