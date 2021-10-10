const { httpResponse, http200, PASS, FAIL, http201 } = require("../helpers/response.helper");
const { validate, encrypt } = require("../helpers/bcrypt.helper");
const { genAccessToken, genRefreshToken } = require("../helpers/token.helper");
const { connect } = require("../config/database.config");

/**
 * Handle login.
 * @param {Request} req
 * @param {Response} res
 */
async function login(req, res) {
  // Get data from request body.
  const { username, password } = req.body;

  const SQL_S = 'SELECT id, username, password FROM public."tblUsers" WHERE username = $1;';

  try {
    const client = await connect();
    const { rows } = await client.query(SQL_S, [username]);

    // Check username exists.
    if (rows.length === 0) return res.status(200).json(http200(200, "Unable to authenticate"));

    // Check password matches.
    const isValid = await validate(password, rows[0].password);
    if (!isValid) return res.status(200).json(http200(200, "Unable to authenticate"));

    // Generate auth tokens.
    const ACCESS_TOKEN = genAccessToken({ id: rows[0].id });
    const REFRESH_TOKEN = genRefreshToken({ id: rows[0].id });

    // Append token to response.
    res.setHeader("authorization", `Bearer ${ACCESS_TOKEN}`);
    res.setHeader("x-refresh", REFRESH_TOKEN);

    return res.status(200).json(http200(PASS, "Authenticated"));
  } catch (err) {
    return res.status(400).json(httpResponse(400, FAIL, err, null));
  }
}

/**
 * Handle register.
 * @param {Request} req
 * @param {Response} res
 */
async function register(req, res) {
  // Get data from request body.
  const { username, password } = req.body;

  const SQL_S = 'INSERT INTO public."tblUsers" (username, password) VALUES ($1, $2);';

  try {
    const client = await connect();
    // HASH password.
    const hash = await encrypt(password);

    const { rowCount } = await client.query(SQL_S, [username, hash]);

    if (rowCount !== 1) return res.status(200).json(http200(200, "Unable to create new user"));

    return res.status(201).json(http201());
  } catch (err) {
    return res.status(400).json(httpResponse(400, FAIL, err, null));
  }
}

module.exports = { login, register };
