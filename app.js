const express=require("express");
const bp=require("body-parser");
const app=express();
const path = require('path');
const itroutes=require("./routes/it")
const itroutesd=require("./routes/itd")
const mongoose = require('mongoose');

const dbURI="mongodb+srv://gagan:gagan@cluster.xdg5ro5.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result =>{ 
    const port = process.env.PORT || 3000;
    app.listen(port)
    app.use(bp.urlencoded({extended:true}))
    app.use(express.static(path.join(__dirname, "public")));
    app.use(express.urlencoded({ extended: true }));

    app.set("view engine","ejs");
    app.set('views', __dirname + '/views');

    app.use("/details",itroutesd);
    app.use("/",itroutes);
  
  })
  .catch(err => console.log(err));




module.exports=app