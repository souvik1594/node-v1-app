const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: {
    type: Number,
    min: [1, "Wrong min discount"],
    required: true,
  },
  discountPercentage: {
    type: Number,
    min: [0, "Wrong min discount"],
    max: [50, "Wrong max discount"],
    required: true,
  },
  rating: {
    type: Number,
    min: [0, "Wrong min rating"],
    max: [5, "Wrong max rating"],
    required: true,
  },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});
exports.Product = mongoose.model("Product", productSchema);
