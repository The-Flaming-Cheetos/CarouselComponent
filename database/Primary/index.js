const { Client } = require('pg');

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'carousel',
  password: 'pass'
});

client.connect();

module.exports = client;