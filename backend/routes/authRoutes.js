var express = require('express');
var router = express.Router();
var AuthController = require('../controllers/authController')
var VerifyToken = require('../middleware/verifyToken');

router.post('/signup', AuthController.signup)
router.post('/login', AuthController.login)
router.get('/info', VerifyToken, AuthController.info)

module.exports = router;
