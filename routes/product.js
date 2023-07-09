const express = require("express");
const router = express.Router();
const productController = require("../controller/product");
//Create Api - C R U D
router
  .post("/", productController.createProduct)
  .get("/", productController.getAllProducts)
  .get("/:id", productController.getproductById)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProductById)
  .delete("/:id", productController.deleteProduct);
exports.router = router;
