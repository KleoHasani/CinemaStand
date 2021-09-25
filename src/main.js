require("dotenv").config();
const express = require("express");

const HOST = process.env.HOST || "localhost";
const PORT = parseInt(process.env.PORT, 10) || 8080;

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
