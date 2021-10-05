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

/**
 * Create connection, to execute queries.
 * @returns {PoolClient}
 */
async function connect() {
  try {
    return pool.connect();
  } catch (err) {
    throw err;
  }
}

/**
 * Disconnect client from pool.
 * @param {PoolClient} client
 */
function disconnect(client) {
  client.release((err) => {
    if (err) throw err;
  });
}

/**
 * Safe query.
 * Create connection, executes query, and release client.
 * No need to create connection before calling this function.
 * @param {String} sql
 * @param {[any]} values
 * @returns {QueryResult<any>}
 */
async function query(sql, values) {
  let client = null;
  try {
    client = await pool.connect();
    const data = await client.query(sql, values);
    return data;
  } catch (err) {
    throw err;
  } finally {
    client.release((err) => {
      if (err) throw err;
    });
  }
}

module.exports = { query, connect, disconnect };
