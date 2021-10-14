const { Router } = require("express");

const { login, register, refresh } = require("../controllers/auth.controller");

const { validateToken } = require("../helpers/auth.helper");

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/token_refresh", validateToken, refresh);

module.exports = router;
