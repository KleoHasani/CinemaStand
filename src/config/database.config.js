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

module.exports = {
  pool,
  query: async (sql, values) => {
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
  },
};
