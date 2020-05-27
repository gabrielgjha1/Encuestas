var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reporteschema = new Schema({

    fecha:{type:String},
    dineroGas:{type:Number,required:[true,'Requerido']},
    dineroGan:{type:Number,required:[true,'Requerido']},
    sucursal:{type:String,required:[true,'Requerido']},
    usuario:{type:Schema.Types.ObjectId, ref:'Usuario'}


});

module.exports = mongoose.model('Reporte',reporteschema);