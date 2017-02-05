'use strict'
function prueba(req,res){

	var nombre = req.params.nombre;

	res.send({
		data:[1,2,3,4,5],
		message:"Hola Mundo con NodeJs y Express "+nombre
});
}

module.exports= {prueba}