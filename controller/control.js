const itelugu=require("../models/ite")
const mongoose = require('mongoose');
const dbURI="mongodb+srv://gagan:gagan@cluster.xdg5ro5.mongodb.net/?retryWrites=true&w=majority"

const send_details=(req,res)=>{
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result =>{ 
    var data=req.body;
    const blog = new itelugu(data);
    blog.save()
        .then(result => {
        console.log(result);
        res.redirect('/success')
        })
        .catch(err => {
        console.log(err);
        });
  })
  .catch(err => console.log(err));
}

module.exports={
    send_details
}