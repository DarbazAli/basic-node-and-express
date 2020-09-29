'use strict';
console.clear();
global.log = console.log;

const express = require('express');

const app = express();

app
    .listen(3000, log(`Server running on port 3000 \n`))


app
    .route('/')
    .get((req, res) => {
        log(app.mountpath); 
        res.end()
    })


 







