var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var schemadatosencuesta = new Schema({


    data:{type:String,required:true},
    usuario:{type:Schema.Types.ObjectId, ref:'Usuario'},
    encuesta:{type:Schema.Types.ObjectId, ref:'GenEncuesta'}


});


module.exports = mongoose.model('DatosEncuesta',schemadatosencuesta);