const { body, validationResult } = require("express-validator");
const { httpResponse, RESPONSE_STATUS } = require("../helpers/response.helper");

const validateRegister = [
  body("firstname")
    .notEmpty()
    .withMessage("First name can not be empty")
    .isString()
    .withMessage("First name is not valid")
    .trim(),
  body("lastname")
    .notEmpty()
    .withMessage("Last name can not be empty")
    .isString()
    .withMessage("Last name is not valid")
    .trim(),
  body("email")
    .notEmpty()
    .withMessage("Email can not be empty")
    .isEmail()
    .normalizeEmail({ all_lowercase: true })
    .trim()
    .withMessage("Not a valid email"),
  body("password")
    .notEmpty()
    .withMessage("Password can not be empty")
    .trim()
    .withMessage("Password must contain at least 8 characters"),
];

const validateLogin = [
  body("email")
    .notEmpty()
    .withMessage("Email can not be empty")
    .isEmail()
    .normalizeEmail({ all_lowercase: true })
    .trim()
    .withMessage("Not a valid email"),
  body("password").notEmpty().withMessage("Password can not be empty").trim(),
];

/**
 * Validate input results middleware.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function results(req, res, next) {
  const output = validationResult(req);
  if (!output.isEmpty())
    return res.status(200).json(httpResponse(200, RESPONSE_STATUS.fail, output.array()[0].msg, null));

  return next();
}

module.exports = { validateLogin, validateRegister, results };
