const express = require("express");
const route = require("./routes/routes");
const app = express();
require("dotenv").config();

app.use("/",route);

app.listen(process.env.PORT,function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`nodemailerProject is listening at http://localhost:${process.env.PORT}`);
    }
})