const express=require("express");
const bp=require("body-parser");
const app=express();
const mongoose = require('mongoose');
const alert=require('alert')
const router = express.Router();


app.set("view engine","ejs");
app.use(bp.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


const dbURI="mongodb+srv://gagan:gagan@cluster.xdg5ro5.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result =>{ 
    const port = process.env.PORT || 3000;
    app.listen(port)})
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    
        purpose: {
            type:String,
        },
        name: {
            type:String,
        },
        affiliation: {
            type:String,
        },
        insti: {
            type:String,
        },
        age: {
            type:String,
        },
        sex: {
            type:String,
        },
        city: {
            type:String,
        },
        number: {
            type:String,
        },
        mail: {
            type:String,
        },
        require: {
            type:String,
        },
        arrivaldate: {
            type:String,
        },
        arrivaltime:{
            type:String,
        },
        mode: {
            type:String,
        },
        departuredate: {
            type:String,
        },
        departuretime:{
            type:String,
        },
      
}, { timestamps: true });

const itelugu = mongoose.model('itelugu', dataSchema);
var data=[]
function sendD(itelugu){
    itelugu.find((err,dat)=>{
        var datas=Array.from(dat)
        data.push(datas)
        data=[data[data.length-1]]
   })
}
function suc(){
    alert("data submitted succesfully :)")
}   
router.get("/",function(req,res){
    
   res.render('index.ejs',{})
    
})



router.get("/details",function(req,res){
    sendD(itelugu)
    res.render('details.ejs',{
        data:data,
    })
     
 })

router.post("/",function(req,res){
    var data=req.body;
    const blog = new itelugu(data);
    blog.save()
        .then(result => {
        console.log(result);
        suc()
        res.redirect("/");
        })
        .catch(err => {
        console.log(err);
        });
        
    
}) 

app.listen(3050,function(){
    console.log("hi");
})