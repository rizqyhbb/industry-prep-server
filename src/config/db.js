const { Pool } = require('pg/lib');

const pool = new Pool({
  user: 'postgres',
  password: '3333',
  host: 'localhost',
  database: 'binar',
  port: 5432
})

module.exports = pool;