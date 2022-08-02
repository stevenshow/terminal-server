/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('project_cards').del();
  await knex('project_cards').insert([
    {
      id: 1,
      name: 'Terminal Website Server',
      language: 'Node.js',
      description:
        'I wanted to store the data for this website externally as well as learn how to host a website/server on my own hardware so that I can have more control over it. This led to creating this server with Node.js and hosting it on my Raspberry Pi. I was new to port forwarding and proxying, but I learned a lot about how our computers are accessed externally and internally. This server has migration and seed files for a MariaDB Database that is hosted on the Pi as well. This allows the server to be deployed on another device and still be able to populate the correct data.',
      takeaway: [
        'Create REST API',
        'Set up Reverse Proxy with NGINX',
        'Set up Dynamic DNS to route to Raspberry Pi',
      ],
    },
    {
      id: 2,
      name: 'Cat Fact Generator',
      language: 'Python',
      description:
        'This project was one that I started because my wife loves anything and everything about cats. I decided to create a program that would run on my Raspberry Pi that would gather a cat photo and a cat fact from two APIs each morning, attach them both to an email and send them to my wife each morning.',
      takeaway: ['Consume an API', 'Cron scheduling'],
    },
    {
      id: 3,
      name: 'Recipe Database',
      language: 'MySQL',
      description:
        'I created a database to store recipes that my wife could then utilize to easily locate what she wanted. I focused on allowing it to be searchable by food type, cook time, ingredients needed, etc.',
      takeaway: ['Properly set up database', 'Query database'],
    },
    {
      id: 4,
      name: 'Local Weather Data Gatherer',
      language: 'Python',
      description:
        "I had recently learned about data collection in a python course I was taking, and decided I would gather my own. I created a program that runs everyday, on the hour, and collects weather data from a local weather station's API. I then store that in a CSV file for consumption.",
      takeaway: ['Data Persistence'],
    },
  ]);
};
