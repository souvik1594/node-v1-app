const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
//Create Api - C R U D
router
  .post("/", userController.createProduct)
  .get("/", userController.getAllProducts)
  .get("/:id", userController.getproductById)
  .put("/:id", userController.replaceProduct)
  .patch("/:id", userController.updateProductById)
  .delete("/:id", userController.deleteProduct);
exports.router = router;
