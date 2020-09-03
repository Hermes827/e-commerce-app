const Product = require("../../models/productModel");
const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1:27017/ECA_db1'

const products = [

  new Product({
    name: "Garlic",
    image: "https://bucket-8-21-20.s3.us-east-2.amazonaws.com/garlic.png",
    price: "$1.99",
    description: "A spicy herb",
    sellerID: "5f4a8e4abd528c0acb6aea97"
  }),
  new Product({
    name: "Comfrey",
    image: "https://bucket-8-21-20.s3.us-east-2.amazonaws.com/comfrey.png",
    price: "$0.99",
    description: "A healing herb",
    sellerID: "5f4a8e4abd528c0acb6aea97"
  }),
  new Product({
    name: "Dandelion Root",
    image: "https://bucket-8-21-20.s3.us-east-2.amazonaws.com/dandelion_root.png",
    price: "$2.99",
    description: "A liver tonic",
    sellerID: "5f4a8e4abd528c0acb6aea97"
  }),
  new Product({
    name: "Ginseng",
    image: "https://bucket-8-21-20.s3.us-east-2.amazonaws.com/ginseng.png",
    price: "$5.00",
    description: "A great herb for vitality",
    sellerID: "5f4a8e4abd528c0acb6aea97"
  }),
  new Product({
    name: "Wormwood",
    image: "https://bucket-8-21-20.s3.us-east-2.amazonaws.com/wormwood.png",
    price: "$1.99",
    description: "A good herb for cleansing the body of parasites",
    sellerID: "5f4a8e4abd528c0acb6aea97"
  })

]

mongoose
  .connect(String(url), { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
  });
// save your data. this is an async operation
// after you make sure you seeded all the products, disconnect automatically
products.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === products.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});
