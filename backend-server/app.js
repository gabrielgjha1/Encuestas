// Require
var express = require('express');
var mongoose = require('mongoose');
const path = require('path');


// inicializar variables
var app = express();
var port = process.env.PORT || 3000;
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
var reporteRuta = require('./rutas/reporte');
var GenEncuestaRuta = require('./rutas/genEncuesta');
var DatosEncuestaRuta = require('./rutas/DatosEncuesta');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","POST,GET,PUT,DELETE,OPTIONS")
    next();
  });


app.use(express.static(path.join(__dirname, '../dist/SistemEncuesta')));

//Any routes will be redirected to the angular app
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/SistemEncuesta/index.html'));
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
app.use('/sibebar',sidebarRuta);
app.use('/reporte',reporteRuta);
app.use('/genEncuesta',GenEncuestaRuta);
app.use('/datosEncuesta',DatosEncuestaRuta);
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

