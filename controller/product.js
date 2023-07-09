const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;

// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
//Creating Functions
exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  // product.title = "PhoneX 10";
  // product.price = 999;
  // product.rating = 5;
  try {
    const addedProducts = await product.save();
    // data.products.push(req.body);
    // res.json(req.body);
    res.status(200).json(addedProducts);
  } catch (e) {
    res.status(500).json(JSON.stringify(e.message));
  }
};

exports.getproductById = async (req, res) => {
  // const idx = +req.params.id;
  // const prd = data.products.find((p) => p.id === idx);
  // console.log(prd);
  // res.json(prd);
  const idx = req.params.id;
  const product = await Product.findById(idx);
  res.json(product);
};

exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    console.log(allProducts);
    res.json(allProducts);
  } catch (e) {
    res.status(500).json(JSON.stringify(e.message));
  }
  // res.json(data.products);
};

exports.updateProductById = async (req, res) => {
  // const idx = +req.params.id;
  // const prdidx = data.products.findIndex((p) => p.id === idx);
  // data.products.splice(prdidx, 1, { ...data.products[prdidx], ...req.body });
  // res.status(200).json({ message: "Success" });

  const idx = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: idx }, req.body, {
      new: true,
    });
    return res.status(200).json(doc);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.replaceProduct = async (req, res) => {
  // const idx = +req.params.id;
  // const prdidx = data.products.findIndex((p) => p.id === idx);
  // data.products.splice(prdidx, 1, { ...req.body, id: idx });
  // res.status(200).json({ message: "Success" });
  const idx = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: idx }, req.body, {
      new: true,
    });
    return res.status(200).json(doc);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.deleteProduct = async (req, res) => {
  // const idx = +req.params.id;
  // const prdidx = data.products.findIndex((p) => p.id === idx);
  // data.products.splice(prdidx, 1);
  // res.status(200).json({ message: "Success" });
  const idx = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: idx });
    return res.status(200).json(doc);
  } catch (err) {
    return res.status(500).json(err);
  }
};
