const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  max: 20,
});

async function query(sql, values) {
  let client = null;
  try {
    client = await pool.connect();
    const data = await client.query(sql, values);
    return data;
  } catch (err) {
    // log errors.
    console.error(err);
    throw err;
  } finally {
    client.release((err) => {
      if (err) throw err;
    });
  }
}

async function* queries(q) {
  let client = null;
  try {
    client = await pool.connect();
    for (let i = 0; i < queries.length; i++) {
      const { rows } = await client.query(q[i].sql, q[i].values);
      yield rows;
    }
  } catch (err) {
    // log errors.
    console.error(err);
    yield null;
    throw err;
  } finally {
    client.release((err) => {
      if (err) throw err;
    });
  }
}

module.exports = {
  query,
  queries,
};
