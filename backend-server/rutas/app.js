var express = require('express');
var app = express();


app.get('/',(req,res,nex)=>{
    console.log('sdasd')
    res.status(200).json({

        status:true,
        mensaje:"Bien peticion correcta"

    });

});

module.exports=app;