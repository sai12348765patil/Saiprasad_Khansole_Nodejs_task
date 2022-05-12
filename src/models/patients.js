const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    Name : {type:String , required:true} ,
    Address : {type:String , required:true} ,
    Email : {type:String , required:true} ,
    Phone : {type:Number , required:true} ,
    Password : {type:String , required:true} ,
    Photo_url : {type:String , required:true} ,
    doctor_id:{type:mongoose.Schema.Types.ObjectId , ref:"psychitrist" , required:true}
  } ,
    {
        versionKey:false,
        timestamps:true,
    }
)

module.exports = mongoose.model("patients" , patientSchema) ;