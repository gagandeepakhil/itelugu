const express = require('express');
const router = express.Router();
const itelugu=require("../models/ite")

var data=[]
itelugu.find((err,dat)=>{
    var datas=Array.from(dat)
    data.push(datas)
    data=[data[data.length-1]]
})



router.get("/",(req,res)=>{
    res.render('details.ejs',{
        data:data,
    })
})

module.exports=router;