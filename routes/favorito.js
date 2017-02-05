'use strict'

var express = require('express');
var FavoritoController = require('../controllers/favorito');
var api = express.Router();

api.get('/prueba/:nombre',FavoritoController.prueba);



module.exports = api

