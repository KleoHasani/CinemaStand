const { httpResponse, http200, PASS, FAIL } = require("../helpers/response.helper");
const { validate } = require("../helpers/bcrypt.helper");
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

  let response = null;

  const SQL = 'SELECT id, username, password FROM public."tblUsers" WHERE username = $1;';

  try {
    const client = await connect();
    const { rows } = await client.query(SQL, [username]);

    if (rows.length > 0) {
      // Compare password hash.
      console.log(rows[0].password);
      const isValid = true; //await validate(password, rows.password);

      if (isValid) {
        // Generate auth tokens.
        const ACCESS_TOKEN = genAccessToken(rows[0].id);
        const REFRESH_TOKEN = genRefreshToken(rows[0].id);

        // Append token to response.
        res.setHeader("authorization", `Bearer ${ACCESS_TOKEN}`);
        res.setHeader("x-refresh", REFRESH_TOKEN);

        response = http200(PASS, "Authenticated");
      } else {
        response = http200(FAIL, "Not authenticated");
      }
    } else {
      response = http200(FAIL, "Not authenticated");
    }
  } catch (err) {
    console.log(err);
    response = httpResponse(400, FAIL, "Something went wrong", null);
  }

  // Send response.
  res.status(response.code).json(response);
}

/**
 * Handle register.
 * @param {Request} req
 * @param {Response} res
 */
function register(req, res) {
  res.status(200).json({ hello: "world" });
}

module.exports = { login, register };
