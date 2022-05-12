const express = require("express");

const app = express();

app.use(express.json());

const doctorcontrol = require("./controllers/psychitrist.control");

app.use("/psychitrist" , doctorcontrol);

const patientcontrol = require("./controllers/patients.control");
app.use("/patients" , patientcontrol);

module.exports = app;