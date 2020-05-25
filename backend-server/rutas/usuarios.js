var express = require('express');
var app = express();
var usuarios = require('../modelos/usuario');
var bcrypt = require('bcryptjs');
var auteticacionmidelware = require('../middelware/middelware');

//guardar usuarios
app.get('/',(req,res,nex)=>{

    usuarios.find({},'nombre usuario rol email')
        .exec((err,usuario)=>{

            res.status(200).json({
                
                status:true,
                usuario
        
            });
        })


});

//auteticacionmidelware.verificartoken
 app.post('/',(req,res)=>{
    
    var body = req.body;
    console.log(req.body);
    var usuario = new usuarios();
   

    usuario.nombre = body.nombre;
    usuario.email = body.email;
    usuario.usuario = body.usuario;
    //encriptar contraseña  
    usuario.password = bcrypt.hashSync(body.password, 10);

    usuario.save((err,usuario)=>{

        if (err){
           return res.status(400).json({
                
                status:false,
                mensaje:"El email ya esta registrado",
                err
        
            });
        }

          return res.status(200).json({
            
            status:true,
            usuarios:req.usuario,
            usuario
    
        });              

    });

});

app.delete('/:id',(req,res)=>{

    var id = req.params.id;

    usuarios.findByIdAndDelete(id,(err,usuario)=>{

        if (err){
            return res.status(500).json({
                 
                 status:false,
                 mensaje:"Error",
                 err
         
             });
         }
         if (!usuario){
            return res.status(400).json({
                 
                status:false,
                mensaje:"NO existe ese usuario",
                err
        
            });      
        }
        return res.status(200).json({
            
            status:true,
            usuario
    
        });    
        
    });


});







module.exports=app;