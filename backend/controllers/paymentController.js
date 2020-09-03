// var User = require('../models/userModel');
// var Product = require('../models/productModel');
// var Payment = require('../models/paymentModel')
//
// exports.findAllUsers = async function (req, res) {
//     var users = await User.find({}, function (err, users) {
//         if (err) return res.status(500).send("There was a problem finding the users.");
//         res.status(200).send(users);
//     }).catch(err)
// };

require('dotenv').config()
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.createPaymentIntent = async function (req, res) {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});
