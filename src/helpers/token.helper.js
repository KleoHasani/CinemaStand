const { sign, verify } = require("jsonwebtoken");

// Token Constants.
const TOKEN_OPTS = {
  algorithm: "HS512",
  audience: "CinemaStand-Client",
  issuer: "CinemaStand-API",
};

const ACCESS_TOKEN_TIME = "30m";
const REFRESH_TOKEN_TIME = "1w";

/**
 * Generate access token.
 * @param {String} payload
 * @returns {String}
 */
function genAccessToken(payload) {
  return sign(payload, process.env.ACCESS_TOKEN, {
    algorithm: TOKEN_OPTS.algorithm,
    audience: TOKEN_OPTS.audience,
    issuer: TOKEN_OPTS.issuer,
    expiresIn: ACCESS_TOKEN_TIME,
  });
}

/**
 * Verify access token.
 * @param {String} token
 * @returns {String | Jwt}
 */
function verifyAccessToken(token) {
  try {
    return verify(token, process.env.ACCESS_TOKEN, {
      algorithm: TOKEN_OPTS.algorithm,
      issuer: TOKEN_OPTS.issuer,
    });
  } catch (err) {
    return null;
  }
}

/**
 * Generate refresh token.
 * @param {String} payload
 * @returns {String}
 */
function genRefreshToken(payload) {
  return sign(payload, process.env.REFRESH_TOKEN, {
    algorithm: TOKEN_OPTS.algorithm,
    audience: TOKEN_OPTS.audience,
    issuer: TOKEN_OPTS.issuer,
    expiresIn: REFRESH_TOKEN_TIME,
  });
}

/**
 * Verify refresh token.
 * @param {String} token
 * @returns {String | Jwt}
 */
function verifyRefreshToken(token) {
  try {
    return verify(token, process.env.REFRESH_TOKEN, {
      algorithm: TOKEN_OPTS.algorithm,
      issuer: TOKEN_OPTS.issuer,
    });
  } catch (err) {
    return null;
  }
}

module.exports = { genAccessToken, verifyAccessToken, genRefreshToken, verifyRefreshToken };
