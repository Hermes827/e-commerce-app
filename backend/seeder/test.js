const Product = require("../models/productModel");
var User = require('../models/userModel');

exports.addProducts = async function (req, res) {
  await Product.find({}, function (err, products) {
      products.map(product => {
        console.log(product._id)
        if(product.name === "Garlic" || product.name === "Ginseng"){
          User.findOneAndUpdate({"name":"Slade"},{$push:{"products": [product._id]}}, function(err, data){
          })
      } else if(product.name === "Comfrey" || product.name === "Dandelion Root" ){
        User.findOneAndUpdate({"name":"Sarah"},{$push:{"products": [product._id]}}, function(err, data){
        })
      } else {
        User.findOneAndUpdate({"name":"Peter"},{$push:{"products": [product._id]}}, function(err, data){
        })
      }
          res.status(200).send(products);
  })
})
}

//have to use this as a route



// exports.addToCart = function (req, res) {
//     User.findByIdAndUpdate(req.body.userID, {$addToSet: {"shoppingCart": req.body.productID}}, function(err, data){
//     if(err){return res.status(500).send("There was a problem adding the product to the cart.")}
//     res.status(200).send(data);
//   })
// };

// exports.findProductByName = async function (req, res) {
//   await User.find({"name": "slade"}, function (err, product) {
//         if (err) return res.status(500).send("There was a problem finding the products.");
//         res.status(200).send(product);
//     })
// };

// indAndModify({
//     query: { name: "Andy" },
//     update: { $inc: { products:  } }
// })


// User.findAndModify({
//     query: { name: "Slade" },
//     update: { $inc: { products: 1 } }
// })


// var User = require('../models/userModel');
// var jwt = require('jsonwebtoken');
// var bcrypt = require('bcryptjs');
// var config = require('../config');
// const mongoose = require("mongoose");
// const url = 'mongodb://127.0.0.1:27017/ECA_db1'
// const Product = require("../models/productModel");
//
// const users = [
//
//   new User({
//     name: "Slade",
//     email: "Slade@SF2.com",
//     password: bcrypt.hashSync("haha", 8),
//     username: "slade1",
//     profileImg: "https://bucket-8-21-20.s3.us-east-2.amazonaws.com/slade.jpg",
//     messages: [],
//     shoppingCart: [],
//     products: []
//     }),
//     new User({
//       name: "Sarah",
//       email: "Sarah@SF2.com",
//       password: bcrypt.hashSync("haha", 8),
//       username: "sarah1",
//       profileImg: "https://bucket-8-21-20.s3.us-east-2.amazonaws.com/sarah.png",
//       messages: [],
//       shoppingCart: [],
//       products: []
//       }),
//       new User({
//         name: "Peter",
//         email: "Peter@SF2.com",
//         password: bcrypt.hashSync("haha", 8),
//         username: "peter1",
//         profileImg: "https://bucket-8-21-20.s3.us-east-2.amazonaws.com/peter.png",
//         messages: [],
//         shoppingCart: [],
//         products: []
//         })
//       ]
//
//   mongoose
//     .connect(String(url), { useNewUrlParser: true })
//     .catch(err => {
//       console.log(err.stack);
//       process.exit(1);
//     })
//     .then(() => {
//       console.log("connected to db in development environment");
//     });
//
//   users.map(async (p, index) => {
//     await p.save((err, result) => {
//       if (index === users.length - 1) {
//         console.log("DONE!");
//         mongoose.disconnect();
//       }
//     });
//   });
