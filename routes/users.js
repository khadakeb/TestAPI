var express = require('express');
var router = express.Router();
var appDir = require('path').dirname(require.main.filename);
var UserController = require(`../controllers/UserController`);
var AuthController = require(`../controllers/AuthController`);


router.get('/', AuthController.checkToken, UserController.getUserDetails);
router.post('/', AuthController.checkToken, UserController.addUser);



module.exports = router;
