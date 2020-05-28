var express = require('express');
var app = express();
var datosEncuesta = require('../modelos/DatosEncuesta');
var auteticacionmidelware = require('../middelware/middelware');


app.get('/',(req,res,nex)=>{
    
    datosEncuesta.find({},'data').populate('usuario','nombre').populate('encuesta')
                    .exec((err,datosEncuesta)=>{

        if (err){

            return  res.status(500).json({
    
                status:true,
                mensaje:'error',
                err
            });

        }



      return  res.status(200).json({
    
            status:true,
            datosEncuesta
    
        });
    })


});


app.post('/',auteticacionmidelware.verificartoken,(req,res)=>{
   var body = req.body;
   let  datosEncuestas = new datosEncuesta();

   datosEncuestas.data = body.data;
   datosEncuestas.usuario = req.usuario._id;
   datosEncuestas.encuesta = body.encuesta;
   datosEncuestas.save((err,datosEncuesta)=>{

    if (err){

        return  res.status(500).json({

            status:true,
            mensaje:'error',
            err
        });

    }



  return  res.status(200).json({

        status:true,
        datosEncuesta

    });

   });



});


module.exports=app;