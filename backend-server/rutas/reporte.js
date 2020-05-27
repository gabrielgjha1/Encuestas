var express = require('express');
var app = express();
var reporte = require('../modelos/reporte');
//auteticacionmidelware.verificartoken
var auteticacionmidelware = require('../middelware/middelware');

app.get('/',(req,res)=>{
    var skip = req.query.skip || 0;
    skip = Number(skip);
    reporte.find({},'fecha dineroGas dineroGan sucursal usuario').populate('usuario').limit(20).skip(skip).exec((err,reporte)=>{
        if (err){
        return    res.status(500).json({
                status:true,
                mensaje:'Error en el servido',
                err
            })
        }

        res.status(200).json({
           status:true,
           reporte
    
        });    

    });

});

app.post('/',auteticacionmidelware.verificartoken,(req,res)=>{
    var body = req.body;
    console.log(body);
    var reportes = new reporte();
    reportes.fecha = body.fecha;
    reportes.dineroGas=body.dineroGas;  
    reportes.dineroGan=body.dineroGan;
    reportes.sucursal=body.sucursal;
    reportes.usuario=req.usuario._id;
    console.log('sdasd'+reportes.fecha)
    if (reportes.fecha==undefined || reportes.fecha==null  ||  reportes.fecha==='' ){
        console.log()
                
        var fecha = new Date(); //Fecha actual
        var mes = fecha.getMonth()+1; //obteniendo mes
        var dia = fecha.getDate(); //obteniendo dia
        var ano = fecha.getFullYear(); //obteniendo año
        reportes.fecha=dia+'/'+mes+'/'+ano;     
        console.log(reportes.fecha)
    }

    reportes.save((err,reporte)=>{

        if ( err){

            return  res.status(500).json({
                status:true,
                mensaje:'Error en el servido',
                err
            })

        }
        return  res.status(200).json({
            status:true,
            reporte,
            
        })
        
    });

});


app.delete('/:id',auteticacionmidelware.verificartoken,(req,res)=>{
    var _id = req.params.id;
    
    reporte.findByIdAndRemove(id,(err,reporte)=>{

        if (err){
            return res.status(500).json({
                status:false,
                mensaje:'Error',
                err
            })
        }

        if (!reporte) {
            return res.status(400).json({
                status:false,
                mensaje:'El Usuario No Existe',
                reporte
            })
        }

        return res.status(200).json({
            status:true,
            reporte
        })

    });


});


app.put('/:id',auteticacionmidelware.verificartoken,(req,res)=>{

    var _id = req.params._id;
    
    var body= req.body;

    reporte.findByIdAndUpdate(_id,body,(err,reporte)=>{

        if (err){
            return res.status(500).json({
                status:false,
                mensaje:'Error',
                err
            })
        }

        if (!reporte) {
            return res.status(400).json({
                status:false,
                mensaje:'El Usuario No Existe',
                reporte
            })
        }

        return res.status(200).json({
            status:true,
            reporte
        })

    });



});





module.exports = app;
