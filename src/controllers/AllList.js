const express = require("express");

const route = express.Router();

const patient = require("../models/patients");

const doctor = require("../models/psychiatrist");


route.get("" , async(req,res)=>{
    try{
       let doc = await doctor.find().sort({FirstName:1,HospitalName:1}).lean().exec();
        
       let patin = await patient.find()
       .populate({path:"doctor_id" , select:{FirstName:1 , LastName:1 , HospitalName:1}}).lean().exec();
       let arr = [];

       for(var i=0 ; i<doc.length ; i++){
           let count = 0;
           let line = "";
           for(var j=0 ; j<patin.length ; j++) {
               if(doc[i].FirstName === patin[j].doctor_id.FirstName){
                   count++;
               }
           }
        line = line + "Hospital Name :-"+ doc[i].HospitalName +"    "+ "psychatrist Name :- "+ doc[i].FirstName +"     "+ "Total patients :- "+count;
        arr.push(line);
       }

  
       return res.status(202).send(arr);
    }catch(err){
        return res.status(405).send(err.message) ;
    }
})
module.exports = route;