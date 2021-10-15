const { Router } = require("express");

const { authenticateRefreshToken } = require("../middlware/auth.middleware");

const router = Router();

router.get("/refresh_token", [authenticateRefreshToken]);

module.exports = router;
