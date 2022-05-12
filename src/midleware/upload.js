const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
    destination:function (req,file,callback) {
        callback(null , path.join(__dirname,"../photo-upload"));
    },
    filename:function(req,file,callback) {
        callback(null,Date.now() + "-" + file.originalname );
    }
});


filefilter = (req,file,callback)=> {
    if(file.mimetype === "image.png" || file.mimetype === "image.jpg") {
        callback(null , false);
    }
    else{
        callback(null,true)
    }
}


const upload = multer({
    storage : storage,
    fileFilter : filefilter,
    limits:{
        fieldSize:1024*1024*10,
    }
})


module.exports = upload ;