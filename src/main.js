const { resolve } = require("path");
const { config } = require("dotenv");

const express = require("express");
const cors = require("cors");

// Config env.
const ENV = process.env.NODE_ENV;
config({ path: resolve(ENV === "production" ? "env/.env.prod" : "env/.env.dev") });

// Server port.
const PORT = parseInt(process.env.PORT, 10) || 8081;

// Routes import
const authRoute = require("./routers/auth.route");

// Start express app.
const app = express();

// Disable headers
app.disable("x-powered-by");

// Middleware
app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: false }));
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

// Start API
app.listen(PORT, () => {
  if (ENV === "developement" || ENV === "test") console.info(`API is live on http://localhost:${PORT}`);
});
