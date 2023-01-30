const knex = require('knex')({
  client: 'mysql',
  version: '5.7',
  connection: {
    host: 'db',
    port: 3306,
    user: 'root',
    password: process.env.DOCKER_MYSQL_PASSWORD,
    database: process.env.DOCKER_MYSQL_DB,
  },
});

module.exports = knex;
