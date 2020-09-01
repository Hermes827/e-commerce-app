var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/productController')

router.get('/', ProductController.findAllProducts)
// router.get('/find', ProductController.findProduct)
router.get('/find', ProductController.findProductByName)
router.post('/create', ProductController.createProduct)
router.delete('/delete', ProductController.deleteProducts)

module.exports = router;
