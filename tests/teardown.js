const { connect, disconnect } = require("../src/config/database.config");

async function teardown() {
  const SQLUsersCleanUp = 'DELETE FROM public."tblUsers";';
  const SQLMoviesCleanUp = 'DELETE FROM public."tblMovies";';

  const client = await connect();

  await client.query(SQLUsersCleanUp);
  await client.query(SQLMoviesCleanUp);

  disconnect(client);
}

module.exports = { teardown };
