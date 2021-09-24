require("dotenv").config();
const express = require("express");

const { pool } = require("./config/database.config");

const HOST = process.env.HOST || "localhost";
const PORT = parseInt(process.env.PORT, 10) || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.info(`API is live on http://${HOST}:${PORT}`);
});
