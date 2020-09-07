var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController')
var Upload = require('../middleware/upload.js')

router.get('/', UserController.findAllUsers)
router.get('/find', UserController.findUser)
router.put('/edit', Upload.single('profileImg'), UserController.editUser)
router.post('/upload-product', Upload.single('image'), UserController.uploadProduct)
router.put('/add-to-cart', UserController.addToCart)
router.put('/delete-products', UserController.purgeProducts)
router.put('/empty-shoppingcart', UserController.purgeCart)
router.delete('/delete-all', UserController.deleteUsers)
router.put('/add-products', UserController.addProducts)

module.exports = router;
