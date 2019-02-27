var express = require('express');
var router = express.Router();
var appDir = require('path').dirname(require.main.filename);
var UserController = require(`../controllers/UserController`);
var AuthController = require(`../controllers/AuthController`);

// To get all users list
router.get('/user', AuthController.checkToken, UserController.getUserDetails);
// To create new user
router.post('/user', AuthController.checkToken, UserController.addUser);



module.exports = router;
