'use strict'
var Favorito = require('../models/favorito');


function getFavorito(req,res){

	var FavoritoId = req.params.id;

	Favorito.findById(FavoritoId,(err,favorito)=>{

		if(err){
			res.status(500).send({Mensaje: 'Error al obtener favorito'});
		}

		if(!favorito){
			res.status(404).send({Mensaje: 'No se encontro favorito'});
		}

		res.status(200).send({favorito});

	});




}
function getFavoritos(req,res){

	Favorito.find({}).sort('-_id').exec((err,favoritos)=>{
		if(err){
			res.status(500).send({Mensaje: 'Error al obtener favoritos'});

		}
		if(!favoritos){
			res.status(404).send({Mensaje: 'No se encontraron favoritos'});
		}

		res.status(200).send({favoritos});

	});


}
function saveFavorito(req,res){

	var favorito = new Favorito();
	var params = req.body;

	favorito.title = params.title;
	favorito.url = params.url;

	favorito.save((err,favoritoStored)=>{

		if(err){
			res.status(500).send({Mensaje: 'Error al Guardar Favorito'});

		}else{

			res.status(200).send({favorito: favoritoStored});

		}
	});


}
function updateFavorito(req,res){

	var FavoritoId = req.params.id;
	var update = req.body;


	Favorito.findByIdAndUpdate(FavoritoId,update,(err,favoritoUpdate)=>{

	if(err){
			res.status(500).send({Mensaje: 'Error al actualizar Favorito'});

		}else{

			res.status(200).send({Favorito: favoritoUpdate});

		}

	});
}

function deleteFavorito(req,res){

	var FavoritoId = req.params.id;

	Favorito.findById(FavoritoId,(err,favorito)=>{

		if(err){
			res.status(500).send({Mensaje: 'Error al obtener favorito'});
		}

		if(!favorito){
			res.status(404).send({Mensaje: 'No se encontro favorito'});
		}else{

			favorito.remove(err => {

				if(err){

					res.status(500).send({Mensaje: 'Error al borrar favorito'});
				}
				res.status(200).send({Favorito: 'se ha eliminado el favorito'});
			});
		}
	});
}


module.exports= {
	getFavorito,
	getFavoritos,
	saveFavorito,
	updateFavorito,
	deleteFavorito

}
