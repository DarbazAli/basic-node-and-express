"use strict";
console.clear();
global.log = console.log;

const express = require("express");
require("dotenv").config();

const app = express();

const MESSAGE_STYLE = process.env.MESSAGE_STYLE;
const PORT = process.env.PORT || 3000;

app.listen(3000, log(`Server running on port ${PORT} \n`));

/* ===================================
    MOUTE MIDLLEWARES
===================================== */

/* Serve static assets */
const statics = express.static(process.cwd() + "/public");
app.use(statics);

app.route("/").get((req, res) => {
  // SERVE HTML FILES
  res.sendFile(__dirname + "/index.html");
});

app.route("/now").get(
  (req, res, next) => {
    req.time = new Date().toUTCString();
    req.user = req.ip;
    next();
  },
  (req, res) => {
    res.json({ time: req.time, user: req.user });
  }
);

app.route("/hello").get((req, res) => {
  const msg = process.env.MESSAGE_STYLE === "uppercase" ? "JSON" : "json";
  res.json({ message: `Hello ${msg}` });
});
