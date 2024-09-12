const PRODUCT_SCHEMA = require("../models/productModel")
const asyncHandler = require("express-async-handler")


// ======================creating product====================

exports.createProduct = asyncHandler(async(req, res)=>{
    let productDetails = req.body;
    let addedProduct = await PRODUCT_SCHEMA.create(productDetails);
    res.status(201).json({
        message: "product successfully added...",
        addedProduct,
    });
})

//!=====================fetching all products=====
exports.fetchAllProducts = asyncHandler(async (req, res) => {
    let product = await PRODUCT_SCHEMA.find();
    if (product.length == 0) {
      throw new Error("No product found");
    }
    res.status(200).json({
      message: "products fetched successfully",
      product,
    });
  });


//! ==============fetch single product=========
exports.fetchOne = asyncHandler(async (req, res) => {
    let { id } = req.params;
    let product = await PRODUCT_SCHEMA.findById(id).populate("categoryID");
    if (!product) {
      throw new Error("user not found");
    }
    res.status(200).json({
      message: "product found...",
      product,
    });
  });


//!=============update user==============
exports.updateProduct = asyncHandler(async (req, res) => {
    let { id } = req.params;
  
    let findProduct = await PRODUCT_SCHEMA.findById(id);
    if (!findProduct) {
      throw new Error("user not found");
    }
  
    let updatedProduct = await PRODUCT_SCHEMA.findByIdAndUpdate(id, req.body, { new: true });
  
    res.status(201).json({ message: "updated successfully", updatedProduct });
  });


//! =================delete user=============
exports.deleteProduct = asyncHandler(async (req, res) => {
    let { id } = req.params;
    let findProduct = await PRODUCT_SCHEMA.findById(id);
    if (!findProduct) {
      throw new Error("user not found");
    }
    let deletedProduct = await PRODUCT_SCHEMA.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted successfully", deletedProduct });
  });