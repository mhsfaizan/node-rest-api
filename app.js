const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose  = require('mongoose');

// connecting database

mongoose.connect("mongodb://faizan:faizan%40123@ds149820.mlab.com:49820/mongo-test",{useNewUrlParser:true},(err,db)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connected");
}); 

const app = express();
const PORT = 3000;
const route = require("./routers/router");


/*==============adding middleware==============*/
app.use(cors());   //for cross origin
app.use(bodyParser.json()); //for parsing json data in req.body
app.use(express.static(path.join(process.cwd(),'public'))); //use static file like css , images etc..

app.use("/api",route);
app.get('/',(req,res)=>{
    res.send('foobar');
});
app.listen(PORT,()=>console.log(`server started at port ${PORT}`));

