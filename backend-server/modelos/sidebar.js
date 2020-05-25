var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var sidebarschema =  new Schema ({
    nombre:String,
    icono:String,
    ruta:String,
    rol:String

});

module.exports = mongoose.model('sidebar',sidebarschema);