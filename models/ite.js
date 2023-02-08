const mongoose = require('mongoose');
const dbURI="mongodb+srv://gagan:gagan@cluster.xdg5ro5.mongodb.net/?retryWrites=true&w=majority"

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

module.exports=itelugu;