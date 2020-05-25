var express = require('express');
var app = express();
var sidebar = require('../modelos/sidebar');

app.get('/',(req,res,nex)=>{
   
    sidebar.find({},(err,sidebar)=>{

        if (err){

        return  res.status(500).json({

        status:false,
        mensaje:"error "

        });

    }

    return res.status(200).json({

        status:true,
        mensaje:"Sidebar",
        sidebar

    });
       



    });




});

module.exports=app;