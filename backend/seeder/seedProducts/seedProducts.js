const Product = require("../../models/productModel");
const mongoose = require("mongoose");
const garlic = "./photos"
// const dev = require("../config/dev"); //get your mongoose string

const products = [

  new Product({
    name: "Garlic",
    image: "https://www.jessicagavin.com/wp-content/uploads/2019/09/how-to-mince-garlic-3-1200.jpg",
    price: String,
    description: String,
    sellerID: String
  }),
  new Product({
    name: "Comfrey",
    image: "",
    price: String,
    description: String,
    sellerID: String
  }),
  new Product({
    name: "Dandelion Root",
    image: "",
    price: String,
    description: String,
    sellerID: String
  }),
  new Product({
    name: "Ginseng",
    image: "",
    price: String,
    description: String,
    sellerID: String
  }),
  new Product({
    name: "Wormwood",
    image: "",
    price: String,
    description: String,
    sellerID: String
  })

]

// mongoose
//   .connect(String(dev.db), { useNewUrlParser: true })
//   .catch(err => {
//     console.log(err.stack);
//     process.exit(1);
//   })
//   .then(() => {
//     console.log("connected to db in development environment");
//   });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
// products.map(async (p, index) => {
//   await p.save((err, result) => {
//     if (index === products.length - 1) {
//       console.log("DONE!");
//       mongoose.disconnect();
//     }
//   });
// });
