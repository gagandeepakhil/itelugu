const express=require("express");
const bp=require("body-parser");
const app=express();
const path = require('path');
const itroutes=require("./routes/it")
const itroutesd=require("./routes/itd")
const mongoose = require('mongoose');

const dbURI="mongodb+srv://deepak:JORvRq1DKwGgi44D@deepak.uapce.mongodb.net/?retryWrites=true&w=majority&appName=deepak"
mongoose.set('strictQuery', false);
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result =>{ 
    const port = process.env.PORT || 3000;
    app.listen(port)
    
  
  })
  .catch(err => console.log(err));

  app.use(bp.urlencoded({extended:true}))
  app.use(express.static(path.join(__dirname, "public")));
  app.use(express.urlencoded({ extended: true }));

  app.set("view engine","ejs");
  app.set('views', path.join(__dirname, 'views'));

  app.use("/details",itroutesd);
  app.use("/",itroutes);


module.exports=app