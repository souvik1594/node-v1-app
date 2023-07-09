const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;
//Creating Functions
exports.createProduct = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.json(req.body);
};

exports.getproductById = (req, res) => {
  const idx = +req.params.id;
  const prd = users.find((p) => p.id === idx);
  console.log(prd);
  res.json(prd);
};

exports.getAllProducts = (req, res) => {
  res.json(users);
};

exports.updateProductById = (req, res) => {
  const idx = +req.params.id;
  const prdidx = users.findIndex((p) => p.id === idx);
  users.splice(prdidx, 1, { ...users[prdidx], ...req.body });
  res.status(200).json({ message: "Success" });
};

exports.replaceProduct = (req, res) => {
  const idx = +req.params.id;
  const prdidx = users.findIndex((p) => p.id === idx);
  users.splice(prdidx, 1, { ...req.body, id: idx });
  res.status(200).json({ message: "Success" });
};

exports.deleteProduct = (req, res) => {
  const idx = +req.params.id;
  const prdidx = users.findIndex((p) => p.id === idx);
  users.splice(prdidx, 1);
  res.status(200).json({ message: "Success" });
};
