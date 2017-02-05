'use strict'
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


}
function saveFavorito(req,res){
	
	var params = req.body;
	res.status(200).send({data: params});

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