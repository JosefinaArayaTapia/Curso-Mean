'use strict'
var Favorito = require('../models/favorito');

function prueba(req,res){

	var nombre = req.params.nombre;

	res.send({
		data:[1,2,3,4,5],
		message:"Hola Mundo con NodeJs y Express "+nombre
});
}


function getFavorito(req,res){

	var FavoritoId = req.params.id;
	res.status(200).send({data: FavoritoId});


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
	favorito.description = params.description;
	favorito.url = params.url;

	favorito.save((err,favoritoStored)=>{

		if(err){
			res.status(500).send({Mensaje: 'Error al Guardar Favorito'});

		}else{

			res.status(200).send({Favorito: favoritoStored});

		}
	});

	
}
function updateFavorito(req,res){
	
	var params = req.body;
	res.status(200).send({data: params});


}
function deleteFavorito(req,res){

	var FavoritoId = req.params.id;
	res.status(200).send({data: FavoritoId});

}


module.exports= {
	prueba,
	getFavorito,
	getFavoritos,
	saveFavorito,
	updateFavorito,
	deleteFavorito

}