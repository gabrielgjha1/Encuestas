// Require
var express = require('express');
var mongoose = require('mongoose');



// inicializar variables
var app = express();

//body parser 
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//importar rutas 
var appRuta = require('./rutas/app');
var usuarioRuta = require('./rutas/usuarios');
var loginRuta = require('./rutas/login');
var sidebarRuta = require('./rutas/sidebar');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","POST,GET,PUT,DELETE,OPTIONS")
    next();
  });

//conecxion a la base de datos

  

mongoose.connection.openUri('mongodb://localhost:27017/encuestas', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
}, (err, res) => {
    if(err) throw err;
 
    console.log('Database conection: \x1b[32m%s\x1b[0m', 'ONLINE');
})


// Rutas 
app.use('/',appRuta);
app.use('/usuario',usuarioRuta);
app.use('/login',loginRuta);
app.use('/sibebar',sidebarRuta)

app.listen(3000,()=>{

    console.log('express server puerto 3000 online :D')

});

