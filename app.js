"use strict";
console.clear();
global.log = console.log;

const express = require("express");

const { 
    notFound, 
    convertAPI, 
    nowAPI, 
    home 
} = require("./routes/routes");


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



home(app)
nowAPI(app)
convertAPI(app);
notFound(app)