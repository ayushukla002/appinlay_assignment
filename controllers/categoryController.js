const CATEGORY_SCHEMA = require("../models/categoryModel")
const asyncHandler = require("express-async-handler")


// ======================creating product====================

exports.createCtegory = asyncHandler(async(req, res)=>{
    let categoryDetails = req.body;
    let addedCategory = await CATEGORY_SCHEMA.create(categoryDetails);
    res.status(201).json({
        message: "category successfully created...",
        addedCategory,
    });
})

//!=====================fetching all products=====
exports.fetchAllCategory = asyncHandler(async (req, res) => {
    let category = await CATEGORY_SCHEMA.find();
    if (category.length == 0) {
      throw new Error("No product found");
    }
    res.status(200).json({
      message: "categories fetched successfully",
      category,
    });
  });


//! ==============fetch single product=========
exports.fetchOne = asyncHandler(async (req, res) => {
    let { id } = req.params;
    let category = await CATEGORY_SCHEMA.findById(id);
    if (!category) {
      throw new Error("user not found");
    }
    res.status(200).json({
      message: "product found...",
      category,
    });
  });


//!=============update category==============
exports.updateCategory = asyncHandler(async (req, res) => {
    let { id } = req.params;
  
    let findCategory = await CATEGORY_SCHEMA.findById(id);
    if (!findCategory) {
      throw new Error("user not found");
    }
  
    let updatedCategory = await CATEGORY_SCHEMA.findByIdAndUpdate(id, req.body, { new: true });
  
    res.status(201).json({ message: "updated successfully", updatedCategory });
  });


//! =================delete category=============
exports.deleteCategory = asyncHandler(async (req, res) => {
    let { id } = req.params;
    let findCategory = await CATEGORY_SCHEMA.findById(id);
    if (!findCategory) {
      throw new Error("user not found");
    }
    let deletedCategory = await CATEGORY_SCHEMA.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted successfully", deletedCategory });
  });

