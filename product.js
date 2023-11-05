const products = [
  {
    id: 1,
    name: "iPhone 12 Pro",
    desc: "6.1-inch display",
    price: 999,
    image: "",
  },
  {
    id: 2,
    name: "iPhone 12",
    desc: "5.4-inch display",
    price: 699,
    image: "",
  },
  {
    id: 3,
    name: "Galaxy 5",
    desc: "6.5-inch display",
    price: 399,
    image: "",
  },
];

module.exports = products;

//exported "products" to index.js under backend folder
const products = require("./products");

App.get("/products", (req, res) => {
  res.send(products);
});
