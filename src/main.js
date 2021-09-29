const { resolve } = require("path");
const { config } = require("dotenv");

// Config env.
config({ path: resolve(process.env.NODE_ENV === "production" ? "env/.env.prod" : "env/.env.dev") });

const express = require("express");

const HOST = process.env.HOST || "127.0.0.1";
const PORT = parseInt(process.env.PORT, 10) || 8081;

const authRoute = require("./routers/auth.route");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Disable headers
app.disable("x-powered-by");

// Routes
app.use("/api/v1/", authRoute);

// Start API
app.listen(PORT, async () => {
  console.info(`API is live on http://${HOST}:${PORT}`);
});
