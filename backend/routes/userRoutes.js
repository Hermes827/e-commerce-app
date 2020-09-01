var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController')
var Upload = require('../middleware/upload.js')

router.get('/', UserController.findAllUsers)
router.get('/find', UserController.findUser)
router.post('/upload-product', Upload.single('image'), UserController.uploadProduct)
router.put('/add-to-cart', UserController.addToCart)
router.put('/delete-products', UserController.purgeProducts)
router.put('/empty-shoppingcart', UserController.purgeCart)


module.exports = router;
