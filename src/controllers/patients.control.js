const express = require("express");

const route = express.Router();

const patient = require("../models/patients");

const upload = require("../midleware/upload");

const {body , validationResult} = require("express-validator");


// HERE WE WILL GET ALL PATIENTS LIST

route.get("" , async(req,res)=>{
    try{
    const men = await patient.find()
    .populate({path:"doctor_id" , select:{FirstName:1 , LastName:1 , HospitalName:1}})
    .lean().exec();
    return res.status(200).send(men);
    }catch(err){
        return res.status(500).send(err.message);
    }
})




//HERE WE CAN ADD NEW PATIENTS

route.post("",upload.single("Photo_url") , 
  
body("Name").notEmpty().isLength({min:3}).withMessage("name should be not empty") ,
body("Address").notEmpty().isLength({min:10}).withMessage(" Lastname should be not empty") ,
body("Email").notEmpty().isEmail().withMessage("enter valid email"),
body("Phone").notEmpty().isLength({min:10 , max:10}).withMessage("enter proper mobile number"),
body("Password").isString().isLength({ min: 8 , max:15})
.not()
.isLowercase()
.not()
.isUppercase().
withMessage("Please enter a password at least 8 character and contain At least one uppercase"),

async(req,res)=>{
    try{
       const errors = validationResult(req);

       if(!errors.isEmpty()){
           return res.status(400).json({errors : errors.array()});
       }
     
       const patin = await patient.create({
        Name : req.body.Name,
        Address : req.body.Address,
        Email : req.body.Email,
        Phone : req.body.Phone,
        Password : req.body.Password,
        Photo_url : req.file.path,
        doctor_id:req.body.doctor_id
       })

       return res.status(200).send({patin});

    }catch(err){
       return res.status(500).send(err.message);
    }
}
)




// HERE WE CAN UPDATE EXISTING PATIENTS TAKING PREVIOUS idS

route.patch("/:id" , upload.single("Photo_url") , async(req,res)=>{
   try{
      const user2 = await patient.findByIdAndUpdate(req.params.id , 
        {
            Name : req.body.Name,
            Address : req.body.Address,
            Email : req.body.Email,
            Phone : req.body.Phone,
            Password : req.body.Password,
            Photo_url : req.file.filename
        },
        {new : true}
        )

        return res.status(200).send({user2});

   }catch(err){
       return res.status(404).send(err.messag);
   }
})



// HERE IF WE TAKE DOCTOR IDS THEN WE CAN FIND ALL PATIENTS THAT PRTICULAR DOCTOR

route.get("/doctor/:id" , async(req,res)=>{
    try{
       const main = await patient.find({doctor_id:{$eq:req.params.id}} , {Photo_url:0}).lean().exec();

       return res.status(202).send(main);

    }catch(err){
        return res.status(405).send(err.message);
    }
})



module.exports= route;