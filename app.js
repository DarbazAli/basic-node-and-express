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


const {
  PORT
} = require('./evn_vars');



const app = express();
app.listen(3000, log(`Server running on port ${PORT} \n`));


const statics = express.static(process.cwd() + "/public");
app.use(statics);


// ROUETES
home(app)
nowAPI(app)
convertAPI(app);
notFound(app)