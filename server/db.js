const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'postgres',
  password: `${process.env.PGPASSWORD}`,
  database: 'pern_auth',
  host: 'localhost',
  port: 5432,
});

module.exports = pool;
