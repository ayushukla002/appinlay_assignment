const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    categoryID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    description:{
        type: String,
        required: true,
    }
},{timestamps:true})

module.exports = mongoose.model("Product", productSchema)