// Require
var express = require('express');
var mongoose = require('mongoose');



// inicializar variables
var app = express();

//conecxion a la base de datos

mongoose.connection.openUri('mongodb://localhost:27017/Encuesta', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
}, (err, res) => {
    if(err) throw err;
 
    console.log('Database conection: \x1b[32m%s\x1b[0m', 'ONLINE');
})

// Rutas 
app.get('/',(req,res,nex)=>{

    res.status(200).json({

        status:ok,
        mensaje:"Bien peticion correcta"

    });

});

app.listen(3000,()=>{

    console.log('express server puerto 3000 online :D')

});

