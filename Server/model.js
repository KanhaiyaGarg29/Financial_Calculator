const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const userModel = mongoose.model("FinanceUser",userSchema)
module.exports = userModel
