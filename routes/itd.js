const express = require('express');
const router = express.Router();
const itelugu=require("../models/ite")
const mongoose = require('mongoose');
const dbURI="mongodb+srv://deepak:JORvRq1DKwGgi44D@deepak.uapce.mongodb.net/?retryWrites=true&w=majority&appName=deepak"

router.get("/",(req,res)=>{
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result =>{ 
    var da=[]
    itelugu.find((err,dat)=>{
        var datas=Array.from(dat)
        da.push(datas)
        da=[da[da.length-1]]
        res.render('details.ejs',{
            data:da,
        })
    })
  })
  .catch(err => console.log(err));
   
})

module.exports=router;
