'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

app.use(logger);

function start (port){

    app.listen(port , ()=> console.log(`listening to port : ${port}`))
}

app.get('/', (req,res)=>{
    res.send('hello world !!')
} )

// when name query not string or not found its will show 500 error automatically 
app.get('/person', validator , (req,res )=>{
    const name = req.query.name;
    if (name) {
        res.json({name})
    } else {
        res.status(500).send('Something Wrong !');
    }
})


app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports={
    app : app ,
    start: start
}