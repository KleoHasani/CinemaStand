const { Pool } = require("pg");

function init() {
  const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    max: 20,
  });

  pool.connect((error, client, done) => {
    if (error) throw error;
    client.query("", (err, res) => {
      if (err) throw err;
      console.log(res);
      done();
    });
  });

  return pool;
}

module.exports = { init };
