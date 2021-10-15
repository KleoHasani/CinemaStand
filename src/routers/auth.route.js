const { Router } = require("express");

const { login, register, refresh } = require("../controllers/auth.controller");

const { authenticateRefreshToken } = require("../middlware/auth.middleware");
const { validateLogin, validateRegister, results } = require("../middlware/validator.middleware");

const router = Router();

router.post("/login", [validateLogin, results], login);
router.post("/register", [validateRegister, results], register);
router.get("/refresh_token", [authenticateRefreshToken], refresh);

module.exports = router;
