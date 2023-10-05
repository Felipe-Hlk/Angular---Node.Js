const express = require('express');

const app = express();

app.use;

app.use ((_req, _res, next) => {
    console.log( 'Firt middleware' );
    next();
});

app.use ((_req, res, _next) => {
    console.log( 'Firt middleware' );
    res.send( 'Hello from express' );
});

module.exports = app;