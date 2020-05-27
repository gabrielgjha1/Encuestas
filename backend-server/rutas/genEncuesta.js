var express = require('express');

var app = express();
var genEncuesta = require('../modelos/genEncuesta');
var auteticacionmidelware = require('../middelware/middelware');
app.get('',(req,res)=>{

    genEncuesta.find({},'titulo campo').exec((err,genEncuesta)=>{

        if (err){
            return res.status(500).json({

                status:false,
                mensaje:'error en el servidor',
                err
                
            });
        }

         res.status(200).json({

            status:true,
            genEncuesta
            
        });

    });

});

app.post('',auteticacionmidelware.verificartoken,(req,res)=>{

    var body = req.body;
    let genEncuestas = new genEncuesta();
    genEncuestas.titulo=body.titulo;
    genEncuestas.campo=body.campo;

    genEncuestas.save((err,genEncuesta)=>{

        if (err){
            return res.status(500).json({

                status:false,
                mensaje:'error en el servidor',
                err
                
            });
        }

       return  res.status(200).json({

            status:true,
            genEncuesta
            
        });

    })

});


app.delete('/:id',(req,res)=>{

    var id = req.params.id;

    genEncuesta.findOneAndDelete(id,(err,genEncuesta)=>{

        if (err){
            return res.status(400).json({

                status:false,
                mensaje:'error Al buscar el usuario',
                err
                
            });
        }

        if (!genEncuesta){

            return res.status(400).json({

                status:false,
                mensaje:'error Al buscar el usuario',
                err
                
            });

        }

       return  res.status(200).json({

        status:true,
        genEncuesta
        
    });
        

    });
    


})


module.exports= app;