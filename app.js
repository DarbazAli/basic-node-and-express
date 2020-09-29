'use strict';
console.clear();
global.log = console.log;

const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000
app
    .listen(3000, log(`Server running on port ${PORT} \n`))


/* ===================================
    MOUTE MIDLLEWARES
===================================== */

/* Serve static assets */
const statics = express.static(process.cwd() + '/public');
app.use(statics)


app
    .route('/')
    .get((req, res) => {
        // SERVE HTML FILES
        res.sendFile(__dirname + '/index.html')
    })


 /* Serve JSON on a route */
 app
    .route('/now')
    .get( (req, res) => {
        const time = new Date().toUTCString();
        res.json({"Current Time": time})
    })







