'use strict'

var express = require('express');
var bodyParser =  require('body-parser');


var app = express();
var port = process.env.PORT || 3678;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/prueba/:nombre',(req,res)=>{

	var nombre = req.params.nombre;

	res.send({
		data:[1,2,3,4,5],
		message:"Hola Mundo con NodeJs y Express "+nombre
	});
});


app.listen(port,()=>{

		console.log(`API REST FAVORITOS: Funcionando en http://localhost:${port}`);
});

