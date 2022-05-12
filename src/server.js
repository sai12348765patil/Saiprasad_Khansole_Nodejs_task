const app = require ("./index");

const connect = require("./config/db") ;

app.listen(2448, async()=>{
    try{
      await connect();
      console.log("listning on port 2448");
    }catch(err){
        console.log(err.message);
    }
})