const express = require('express');
const itcontrol = require('../controller/control');
const router = express.Router();


router.get("/success",function(req,res){
   res.render('success',{})
})
router.get("/",function(req,res){
   res.render('index',{})
})
router.post("/",itcontrol.send_details) 


module.exports=router;