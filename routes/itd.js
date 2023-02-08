const express = require('express');
const router = express.Router();
const itelugu=require("../models/ite")


router.get("/",(req,res)=>{
    var data=[]
    itelugu.find((err,dat)=>{
        var datas=Array.from(dat)
        data.push(datas)
        data=[data[data.length-1]]
        res.render('details.ejs',{
            data:data,
        })
    })
})

module.exports=router;