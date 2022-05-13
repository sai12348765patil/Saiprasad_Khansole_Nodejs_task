# lattice innovation
 technical round evalution

 - This is mainly Backend Application which is patient-Doctor registration appliction.
 - This App developed using Nodejs ,Express And Mongodb .
 - Nodejs is javascript runtime enviroment , Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
 - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  

=> To run this application just run the code in terminal by using "npm start" command, and run the Apis in postman.
before that you have to use "npm i" to download the all dependencies.like express, express-validator, multer, mongoose and nodemon.

=>After "npm start" if you able to see "listning on port 2448", then your app is running now.

=>now open postman ; 

1) if you want to post psychatrist you have to use = "http://localhost:2448/psychitrist" and run post request after entering data,
   
2) you can see all psychitrist by using get request = "http://localhost:2448/psychitrist", 

3) now for registration of patient = "http://localhost:2448/patients" and enter credential and run Post request,
   
4) we can see all patients by using get request to = "http://localhost:2448/patients",   

5) we can Upadate previous patients by taking there unique mongo Id and we can upadate data by patch request = "http://localhost:2448/patients/:id" ,

6) Fetching all the patients in an order for a single psychiatrist (without photo) by using unique Id of doctor we get all patient of that doctor = "http://localhost:2448/patients/doctor/:id", it will show all patients of respective doctor.



