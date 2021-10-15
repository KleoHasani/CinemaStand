const { Router } = require("express");

const { login, register } = require("../controllers/auth.controller");

const { validateLogin, validateRegister, results } = require("../middlware/validator.middleware");

const router = Router();

router.post("/login", [validateLogin, results], login);
router.post("/register", [validateRegister, results], register);

module.exports = router;
