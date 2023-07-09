const express = require("express");
const mongoose = require("mongoose");
const server = express();
const morgan = require("morgan");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
require("dotenv").config();
const cors = require("cors");
const path = require("path");

//db Connections
// mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    "mongodb+srv://souvik1594:CVccrSzSMCvItGve@souviktestcluster.kh4qctj.mongodb.net/ecommerceDB"
  );
  console.log("connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Mongoose Schema
// const productSchema = new Schema({
//   title: String,
//   description: String,
//   price: Number,
//   discountPercentage: Number,
//   rating: Number,
//   brand: String,
//   category: String,
//   thumbnail: String,
//   images: [String],
// });
// const Product = mongoose.model("Product", productSchema);

//Body Parser
server.use(cors());
server.use(express.json()); //Body Parser
server.use(morgan("dev"));
server.use(express.static(path.resolve(__dirname, "build")));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// const auth = (req, res, next) => {
//   // console.log(req.method, req.ip, req.hostname); //Logger
//   // console.log(req.query.password);
//   // if (req.body.password === "123") {
//   //   next();
//   // } else {
//   //   res.send("Not Permitted").status(500);
//   // }
//   next();
// };
// server.use(auth);

//API ROOT, base URL eg: google.com/api/v1/products

// server.get("/product/:id", auth, (req, res) => {
//   console.log("Param : " + req.params.id);
//   res.json({ type: "Get" });
// });

// server.post("/", auth, (req, res) => {
//   res.json({ type: "post" });
// });

// server.patch("/", (req, res) => {
//   res.json({ type: "patch" });
// });

// server.put("/", (req, res) => {
//   res.json({ type: "put" });
// });

// server.delete("/", (req, res) => {
//   res.json({ type: "delete" });
// });

// server.get("/demo", (req, res) => {
//   // res.send("Hello");
//   // res.sendFile(
//   //   "/Users/souvikkolay/Documents/Code and Projects/CoderDost/node-v1-app/data.json"
//   // );
//   // res.json(data);
//   // res.sendStatus(404);
//   res.send(data).status(404);
// });

server.listen(8080, () => {
  console.log("ENV : " + process.env.DB_PASSWORD);
  console.log("Server started");
});
// const index = fs.readFileSync("index.html", "utf-8");

// const product = data.products;
