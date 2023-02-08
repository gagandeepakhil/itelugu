const itelugu=require("../models/ite")
const alert=require('alert')


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

const it_details=(req,res)=>{
    itelugu.find((err,dat)=>{
        var datas=Array.from(dat)
        data.push(datas)
        data=[data[data.length-1]]})
    res.render('details.ejs',{
        data:data,
    })
}

const send_details=(req,res)=>{
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
}

module.exports={
    it_details,
    send_details
}