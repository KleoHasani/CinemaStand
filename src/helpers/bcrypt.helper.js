const { genSalt, hash, compare } = require("bcryptjs");

const SALT_RNDS = 10;

/**
 * Encrypt data.
 * @param {String} data
 * @returns {String}
 */
async function encrypt(data) {
  try {
    const salt = await genSalt(SALT_RNDS);
    return await hash(data, salt);
  } catch (err) {
    throw err;
  }
}

/**
 * Compare hash.
 * @param {String} data
 * @param {String} hashedData
 * @returns {Boolean}
 */
async function validate(data, hashedData) {
  try {
    return await compare(data, hashedData);
  } catch (err) {
    throw err;
  }
}

module.exports = { encrypt, validate };
