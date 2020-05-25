var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var SEED = require('../config/config');

exports.verificartoken = function(req,res,nex){

    
    var token = req.query.token;
    console.log(token)
    jwt.verify(token,SEED.seed,(err,decoded)=>{
        console.log(SEED.seed);
        if (err){
            return res.status(401).json({
                ok:false,
                message:'TOken no valido',
                error:err
            });
        }

        req.usuario = decoded.usuario;

        nex();

    });

}


