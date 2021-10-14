const { query } = require("../config/database.config");

const { httpResponse, RESPONSE_STATUS } = require("../helpers/response.helper");
const { validate, encrypt } = require("../helpers/bcrypt.helper");
const { genAccessToken, genRefreshToken } = require("../helpers/token.helper");

/**
 * Handle login.
 * @param {Request} req
 * @param {Response} res
 */
async function login(req, res) {
  // Get data from request body.
  const { email, password } = req.body;

  const SQLLogin = 'SELECT id, email, password FROM public."tblUsers" WHERE email = $1;';

  try {
    const loginUser = await query(SQLLogin, [email]);

    // Check username exists.
    if (loginUser.rows.length === 0)
      return res.status(200).json(httpResponse(200, RESPONSE_STATUS.fail, "Unable to authenticate", null));

    // Check password matches.
    const isValid = await validate(password, loginUser.rows[0].password);
    if (!isValid) return res.status(200).json(httpResponse(200, RESPONSE_STATUS.fail, "Unable to authenticate", null));

    // Generate auth tokens.
    const ACCESS_TOKEN = genAccessToken({ id: loginUser.rows[0].id });
    const REFRESH_TOKEN = genRefreshToken({ id: loginUser.rows[0].id });

    // Append token to response.
    res.setHeader("authorization", `Bearer ${ACCESS_TOKEN}`);
    res.setHeader("x-refresh", REFRESH_TOKEN);

    return res.status(200).json(httpResponse(200, RESPONSE_STATUS.pass, "Authenticated", null));
  } catch (err) {
    console.log(err);
    return res.status(400).json(httpResponse(400, RESPONSE_STATUS.fail, err, null));
  }
}

/**
 * Handle register.
 * @param {Request} req
 * @param {Response} res
 */
async function register(req, res) {
  // Get data from request body.
  const { firstname, lastname, email, password } = req.body;

  const SQLCheckEmail = 'SELECT id FROM public."tblUsers" WHERE email = $1;';
  const SQLRegister = 'INSERT INTO public."tblUsers" (firstname, lastname, email, password) VALUES ($1, $2, $3, $4);';

  try {
    // Check email does not exist.
    const emailCheck = await query(SQLCheckEmail, [email]);

    if (emailCheck.rowCount === 1)
      return res.status(200).json(httpResponse(200, RESPONSE_STATUS.fail, "Email already exists", null));

    // HASH password.
    const hash = await encrypt(password);

    const registerUser = await query(SQLRegister, [firstname, lastname, email, hash]);

    if (registerUser.rowCount !== 1)
      return res.status(200).json(httpResponse(200, RESPONSE_STATUS.fail, "Unable to create new user", null));

    return res.status(201).json(httpResponse(201, RESPONSE_STATUS.pass, "User created", null));
  } catch (err) {
    return res.status(400).json(httpResponse(400, RESPONSE_STATUS.fail, err, null));
  }
}

/**
 * Handle refresh.
 * @param {Request} req
 * @param {Response} res
 */
async function refresh(req, res) {}

module.exports = { login, register, refresh };
