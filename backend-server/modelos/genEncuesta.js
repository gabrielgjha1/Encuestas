var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genencuestaschema = new Schema({

    titulo:{type:String,required:[true,'Es requerido el titulo']},
    campo:[{type:String,required:true}]

})

module.exports = mongoose.model('GenEncuesta',genencuestaschema);