'use strict'

var express = require('express');
var FavoritoController = require('../controllers/favorito');
var api = express.Router();

api.get('/favoritos',FavoritoController.getFavoritos);
api.get('/favorito/:id',FavoritoController.getFavorito);
api.post('/favorito',FavoritoController.saveFavorito);
api.put('/favorito/:id',FavoritoController.updateFavorito);
api.delete('/favorito/:id',FavoritoController.deleteFavorito);

module.exports = api;
