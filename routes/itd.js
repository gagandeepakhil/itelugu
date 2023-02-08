const express = require('express');
const router = express.Router();
const itelugu=require("../models/ite")


router.get("/",(req,res)=>{
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

module.exports=router;