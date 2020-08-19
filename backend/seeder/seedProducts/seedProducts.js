// const Product = require("../models/productModel");
// const mongoose = require("mongoose");
// const dev = require("../config/dev"); //get your mongoose string
//
// const products = [
//
//   new Product({
//     name: "Garlic",
//     image: {
//         type: "/Users/chriscable/Desktop/newprojects/five projects/e-commerce application/e-commerce-app/backend/seeder/seedProductsPhotos/garlic.png"
//     },
//     price: String,
//     description: String,
//     sellerID: String
//   }),
//   new Product({
//     name: "Comfrey",
//     image: {
//         type: String
//     },
//     price: String,
//     description: String,
//     sellerID: String
//   }),
//   new Product({
//     name: "Dandelion Root",
//     image: {
//         type: String
//     },
//     price: String,
//     description: String,
//     sellerID: String
//   }),
//   new Product({
//     name: "Ginseng",
//     image: {
//         type: String
//     },
//     price: String,
//     description: String,
//     sellerID: String
//   }),
//   new Product({
//     name: "Wormwood",
//     image: {
//         type: String
//     },
//     price: String,
//     description: String,
//     sellerID: String
//   })
//
// ]
//
// mongoose
//   .connect(String(dev.db), { useNewUrlParser: true })
//   .catch(err => {
//     console.log(err.stack);
//     process.exit(1);
//   })
//   .then(() => {
//     console.log("connected to db in development environment");
//   });
// //save your data. this is an async operation
// //after you make sure you seeded all the products, disconnect automatically
// products.map(async (p, index) => {
//   await p.save((err, result) => {
//     if (index === products.length - 1) {
//       console.log("DONE!");
//       mongoose.disconnect();
//     }
//   });
// });
