var express = require('express');
var router = express.Router();
var PaymentController = require('../controllers/paymentController')

// router.get('/', ProductController.findAllProducts)
// router.get('/find', ProductController.findProduct)
// router.get('/search', ProductController.findProductByName)
// router.post('/create', ProductController.createProduct)
// router.delete('/delete', ProductController.deleteProducts)
router.post('/create-payment-intent', PaymentController.createPaymentIntent)

module.exports = router;
