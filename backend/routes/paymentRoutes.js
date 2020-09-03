var express = require('express');
var router = express.Router();
var PaymentController = require('../controllers/paymentController')

router.post('/create-payment-intent', PaymentController.createPaymentIntent)

module.exports = router;
