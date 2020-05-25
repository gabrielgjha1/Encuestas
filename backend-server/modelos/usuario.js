var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuarioschema = new Schema({

    nombre:{ type:String, required:[true,'El nombre es necesario'] },
    usuario:{ type:String, unique:true ,required:[true,'El Usuario es necesario'] },
    email:{type:String,unique:true,required:[true,'Email es necesario']},
    password:{type:String,require:[true,'contraseña necesario']},
    rol:{ type:String,require:true,default:'rol_usuario' }

});

module.exports = mongoose.model('Usuario',usuarioschema);