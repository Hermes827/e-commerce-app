var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/productController')

router.get('/', ProductController.findAllProducts)
router.get('/find', ProductController.findProduct)
router.post('/create', ProductController.createProduct)

module.exports = router;