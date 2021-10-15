const { verifyAccessToken, verifyRefreshToken, genAccessToken, genRefreshToken } = require("../helpers/token.helper");
const { RESPONSE_STATUS, httpResponse } = require("../helpers/response.helper");
/**
 * Validate token middleware.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function authenticateAccessToken(req, res, next) {
  // Get token.
  const AUTH_TOKEN = req.headers.authorization.split(" ")[1];

  // Check if token exists.
  if (!AUTH_TOKEN) return res.status(400).json(httpResponse(400, RESPONSE_STATUS.fail, "No token", null));

  // Verify token.
  const token = verifyAccessToken(AUTH_TOKEN);
  if (!token) return res.status(400).json(httpResponse(400, RESPONSE_STATUS.fail, "Invalid token", null));

  if (Date.now() >= token.exp * 1000)
    return res.status(401).json(httpResponse(401, RESPONSE_STATUS.fail, "Expired token", null));

  return next();
}

/**
 * Validate token middleware.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function authenticateRefreshToken(req, res, next) {
  // Get token.
  const REF_TOKEN = req.headers.refresh;
  // Get redirect back link.
  const REDIRECT = req.headers.redirect;

  // Check if token exists.
  if (!REF_TOKEN || !REDIRECT) return res.status(400).json(httpResponse(400, RESPONSE_STATUS.fail, "No token", null));

  // Verify token.
  const token = verifyRefreshToken(REF_TOKEN);
  if (!token) return res.status(400).json(httpResponse(400, RESPONSE_STATUS.fail, "Invalid token", null));

  // Check if refresh token is expired.
  if (Date.now() >= token.exp * 1000)
    return res.status(401).json(httpResponse(401, RESPONSE_STATUS.fail, "Expired token", null));

  // Generate auth tokens.
  const ACCESS_TOKEN = genAccessToken({ id: token.id });
  const REFRESH_TOKEN = genRefreshToken({ id: token.id });

  // Append token to response.
  res.setHeader("authorization", `Bearer ${ACCESS_TOKEN}`);
  res.setHeader("refresh", REFRESH_TOKEN);

  res.status(200).json(httpResponse(200, RESPONSE_STATUS.pass, "Token refreshed.", REDIRECT));

  return next();
}

module.exports = { authenticateAccessToken, authenticateRefreshToken };
