const http = require("http");
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const product = data.products;
const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url.startsWith("/product")) {
    const id = req.url.split("/")[2];
    console.log(req.url.split("/"));
    console.log(id);
    const prd = product.find((p) => {
      return p.id === +id;
    });
    res.setHeader("Content-Type", "text/html");
    let modifiedIndex = index
      .replace("**title**", prd.title)
      .replace("**url**", prd.thumbnail)
      .replace("**price**", prd.price)
      .replace("**rating**", prd.rating);
    res.end(modifiedIndex);
    return;
  }

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;
    case "/product":
      res.setHeader("Content-Type", "text/html");
      console.log(product.title);
      let modifiedIndex = index
        .replace("**title**", product.title)
        .replace("**url**", product.thumbnail)
        .replace("**price**", product.price)
        .replace("**rating**", product.rating);
      res.end(modifiedIndex);
      break;
    default:
      res.writeHead(404, "nots founds");
      res.end();
      break;
  }

  console.log("Server Statred");
  // // res.setHeader("Content-Type", "text/html");
  // res.setHeader("Content-Type", "application/json");
  // res.end(index);
});

server.listen(8080);
