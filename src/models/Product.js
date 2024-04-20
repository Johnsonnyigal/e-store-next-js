const mongoose = require("mongoose");
const Productschema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", Productschema);

module.exports = Product;
