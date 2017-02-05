'use strict'
var app = require('./app')

var port = process.env.PORT || 3678;

app.listen(port,()=>{

		console.log(`API REST FAVORITOS: Funcionando en http://localhost:${port}`);
});

