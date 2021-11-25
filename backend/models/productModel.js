const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String,
        requires: [true, "Please enter Product Name"]
    },
    description:{
        type: String,
        required:[true, "Please Enter the Product Description"]
    },
    price:{
        type: Number,
        required:[true, " Please Enter the Product Price"]
    }
})

module.exports = mongoose.model("product",productSchema);