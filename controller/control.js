const itelugu=require("../models/ite")


const send_details=(req,res)=>{
    var data=req.body;
    const blog = new itelugu(data);
    blog.save()
        .then(result => {
        console.log(result);
        res.redirect("/");
        })
        .catch(err => {
        console.log(err);
        });
}

module.exports={
    send_details
}