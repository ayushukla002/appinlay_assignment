const mongoose = require("mongoose");
const { MONGODB } = require("./script");

let connectDB = async () => {
  await mongoose.connect(MONGODB);
  console.log("database connected.....");
};

module.exports = {
  connectDB,
};