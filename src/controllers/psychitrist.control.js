const express = require("express");
const { required } = require("nodemon/lib/config");

const route = express.Router();

const psychitrist = require("../models/psychiatrist");

const {body , validationResult} = require("express-validator");


route.get("" , async(req,res)=>{
    try{
      const doc = await psychitrist.find().lean().exec();
      return res.status(200).send(doc);
    }catch(err){
        return res.status(500).send("error");
    }
})

route.post("" , 

body("FirstName").notEmpty().isLength({max:20}).withMessage("name should be not empty") ,
body("LastName").notEmpty().isLength({max:20}).withMessage(" Lastname should be not empty") ,
body("HospitalName").notEmpty().isIn(["Apollo ", "J.M.N.C", "IGIMS", "AIIMS "]),
body("Phone").notEmpty().isLength({min:10 , max:10}).withMessage("enter proper mobile number"),
body("Pincode").isLength({min:6 , max:6}).withMessage("enter proper pincode with 6 character"),
body("State").notEmpty() ,
async(req,res)=>{
    try{
     
        const errors = validationResult(req);

        if(!errors.isEmpty){
            return res.status(400).json({errors : errors.array()});
        }

        const use = await psychitrist.create(req.body);
         return res.status(200).send(use);
    }catch(err){
       return res.status(500).send(err.message);
    }
}

)



module.exports = route;