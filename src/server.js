const { resolve } = require("path");
const { config } = require("dotenv");
const { createServer } = require("http");

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// Config env.
const ENV = process.env.NODE_ENV;
config({ path: resolve(ENV === "developement" ? "env/.env.dev" : "env/.env.test") });

// Server port.
const PORT = parseInt(process.env.PORT, 10) || 8081;
// Server host.
const HOST = process.env.HOST || "localhost";

// Routes import
const authRoute = require("./routers/auth.route");

// Start express app.
const app = express();

// Middleware
app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(
  cors({
    origin: process.env.DOMAIN,
    methods: "GET,PATCH,POST,DELETE",
    allowedHeaders: ["content-type", "authorization", "x-refresh"],
    exposedHeaders: ["authorization", "x-refresh"],
  })
);

// Routes
app.use("/api/v1/", authRoute);

const server = createServer(app);

server.listen(PORT, HOST, () => {
  if (ENV === "developement") console.info(`API is live on http://${HOST}:${PORT}`);
});

module.exports = { server };
