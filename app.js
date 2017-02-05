'use strict'

var express = require('express');
var bodyParser =  require('body-parser');
var api = require('./routes/favorito');

var app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',api);


module.exports = app;
