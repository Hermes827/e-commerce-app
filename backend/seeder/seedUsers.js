var User = require('../models/userModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1:27017/ECA_db1'

const users = [

  new User({
    name: "Slade",
    email: "Slade@SF2.com",
    password: bcrypt.hashSync("haha", 8),
    username: "slade1",
    profileImg: "https://bucket-8-21-20.s3.us-east-2.amazonaws.com/slade.jpg",
    messages: [],
    shoppingCart: [],
    products: []
    }),
    new User({
      name: "Sarah",
      email: "Sarah@SF2.com",
      password: bcrypt.hashSync("haha", 8),
      username: "sarah1",
      profileImg: "https://bucket-8-21-20.s3.us-east-2.amazonaws.com/sarah.png",
      messages: [],
      shoppingCart: [],
      products: []
      }),
      new User({
        name: "Peter",
        email: "Peter@SF2.com",
        password: bcrypt.hashSync("haha", 8),
        username: "peter1",
        profileImg: "https://bucket-8-21-20.s3.us-east-2.amazonaws.com/peter.png",
        messages: [],
        shoppingCart: [],
        products: []
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

  console.log("hello")
  // var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  users.map(async (p, index) => {
    await p.save((err, result) => {
      // var token = jwt.sign({ id: user._id }, config.secret, {
      //   expiresIn: 86400 // expires in 24 hours
      // });
      if (index === users.length - 1) {
        console.log("DONE!");
        mongoose.disconnect();
      }
    });
  });

  // User.create({
  //   name : req.body.name,
  //   email : req.body.email,
  //   password : hashedPassword,
  //   username: req.body.username,
  //   profileImg: 'https://bucket-8-21-20.s3.us-east-2.amazonaws.com/anon.png'
  // },
//   function (err, user) {
//     console.log(err)
//     if (err) return res.status(500).send("There was a problem registering the user.")
//     var token = jwt.sign({ id: user._id }, config.secret, {
//       expiresIn: 86400 // expires in 24 hours
//     });
//     res.status(200).send({ auth: true, token: token });
//   });
// };
//
// greeting()



// const User = require("../models/userModel");
// const mongoose = require("mongoose");
// const url = 'mongodb://127.0.0.1:27017/ECA_db1'
// var AuthController = require('../controllers/authController')
//
// const users = [
//
//   new User({
//     name: "Slade",
//     email: "Slade@SF2.com",
//     password: "haha",
//     username: "Slade",
//     profileImg: "https://bucket-8-21-20.s3.us-east-2.amazonaws.com/slade.jpg",
//     messages: [],
//     shoppingCart: [],
//     products: []
//     }),
//     new User({
//       name: "Sarah",
//       email: "Sarah@SF2.com",
//       password: "haha",
//       username: "Sarah",
//       profileImg: "https://bucket-8-21-20.s3.us-east-2.amazonaws.com/sarah.png",
//       messages: [],
//       shoppingCart: [],
//       products: []
//       }),
//       new User({
//         name: "Peter",
//         email: "Peter@SF2.com",
//         password: "haha",
//         username: "Peter",
//         profileImg: "https://bucket-8-21-20.s3.us-east-2.amazonaws.com/peter.png",
//         messages: [],
//         shoppingCart: [],
//         products: []
//         })
//       ]
//
// mongoose
//   .connect(String(url), { useNewUrlParser: true })
//   .catch(err => {
//     console.log(err.stack);
//     process.exit(1);
//   })
//   .then(() => {
//     console.log("connected to db in development environment");
//   });
// save your data. this is an async operation
// after you make sure you seeded all the users, disconnect automatically
// users.map(async (p, index) => {
//   await p.save((err, result) => {
//     if (index === users.length - 1) {
//       console.log("DONE!");
//       mongoose.disconnect();
//     }
//   });
// });
