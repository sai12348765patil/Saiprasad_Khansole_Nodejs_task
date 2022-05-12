const mongoose = require("mongoose");

const psychitristSchema = new mongoose.Schema({
    FirstName : {type:String , required:true} ,
    LastName : {type:String , required:true} ,
    HospitalName : {type:String , required:true} ,
    Phone : {type:Number , required:true} ,
    Pincode : {type:Number , required:true} ,
    State : {type:String , required:true} ,

} ,
    {
        versionKey:false,
        timestamps:true,
    }
)

module.exports = mongoose.model("psychitrist" , psychitristSchema);