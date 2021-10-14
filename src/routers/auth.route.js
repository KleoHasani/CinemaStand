const { Router } = require("express");

const { login, register, refresh } = require("../controllers/auth.controller");

const { authenticateToken } = require("../middlware/auth.middleware");
const { validateLogin, validateRegister, results } = require("../middlware/validator.middleware");

const router = Router();

router.post("/login", [validateLogin, results], login);
router.post("/register", [validateRegister, results], register);
router.get("/token_refresh", authenticateToken, refresh);

module.exports = router;
