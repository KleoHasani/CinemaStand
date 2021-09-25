/**
 * Handle login.
 * @param {Request} req
 * @param {Response} res
 */
function login(req, res) {
  const { username, password } = req.body;
  res.status(200).json({ username, password });
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
