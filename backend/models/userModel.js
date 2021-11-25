const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required:[true, "Please Enter Your Name"]
    },
    email: {
        type: String,
        required: [true," Please Enter your Email"],
        unique: true,
        validator: [validator.isEmail, "Please Enter a valid Email"]
    },
    password: {
        type: String,
        required: [true,"Please Enter your Password"],
        select:false
    },
    phone: {
        type: Number,
        required: [true, "please Enter your Number"],
    },
    role: {
        type: String,
        default: "user",
    },

}, {timestamps: true});


module.exports= mongoose.model("user",userSchema);