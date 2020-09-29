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

// SERVE HTML FILES

app
    .route('/')
    .get((req, res) => {
        res.sendFile(__dirname + '/index.html')
    })


 







