const express = require('express')
const app = express();

const mongoose = require('mongoose');
const cors = require("cors");
app.use(express.json())
const userModel = require("./model")


app.use(cors())

const uri = "mongodb+srv://kashishsingla324:Kash0211@cluster0.ncyyweg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const uri="mongodb://127.0.0.1:27017/hrDB"


    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("database connected");
    }).catch((err)=>{
        console.log("database is not connected");
    })
    
app.post('/login',(req,res) =>{
    const email = req.body.formData.email;
    const password=req.body.formData.password;
    userModel.findOne({email:email})
    .then(user =>{
        if(user){
          if(user.password===password){
            res.json("Success")
          }
          else{
            res.send("the password is incorrect")
          }
        }
        else{
            res.json("no record exist")
        }
    })
})

app.post('/register',async (req,res)=>{
    console.log(req.body.formData);
    const newUser = await new userModel({
        name:req.body.formData.name,
        email:req.body.formData.email,
        password:req.body.formData.password
       
    })
    const savedUser = await newUser.save();
    res.status(200).json({
        success: true,
        message: `user added`,
        user: savedUser
    });
})

app.listen(3001,()=>{
    console.log("server is running");
})
