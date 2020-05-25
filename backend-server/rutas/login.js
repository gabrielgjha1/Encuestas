var express = require('express');
var app = express();
var usuarios = require('../modelos/usuario');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var SEED = require('../config/config');
app.post('/',(req,res,nex)=>{
    var body = req.body;

    usuarios.findOne({email:body.email},(err,usuario)=>{

        if (err){
            res.status(500).json({

                status:false,
                mensaje:"ERROR",
                err
        
            });
        }

        if (!usuario){
           return res.status(400).json({

                status:false,
                mensaje:"Datos incorrectos",
                err
            });
        }

        if (!bcrypt.compareSync(body.password,usuario.password)){
            return res.status(400).json({

                status:false,
                mensaje:"Datos incorrectos",
                err

            });
                 
        }

        usuario.password=":)";
        var token = jwt.sign({usuario:usuario},SEED.seed,{expiresIn:14400})

        return res.status(200).json({
        
            status:false,
            mensaje:"Logeado con exito",
            token,
            usuario
        });
        
    });


});

module.exports=app;