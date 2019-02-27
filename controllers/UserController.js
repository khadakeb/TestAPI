var appDir = require('path').dirname(require.main.filename),
    userService = require(`${appDir}/../dbservices/user`),
    constants = require(`${appDir}/../constants`).CONSTANTS,
    util = require(`${appDir}/../utils/util`);


/**
 * API to get list of user details.
 *
 * @method getUserDetails.
 * @param {object} req -  request object.
 * @param {object} res -  response object.
 */
var getUserDetails = function(req, res) {
    userService.getUserDetails(function(err, results) {
        if (err){
            return res.json(util.prepareResponse(constants.RESPONSE_CODES.FAILURE, constants.FAIL_MSG));
          }
          return res.json(util.prepareResponse(constants.RESPONSE_CODES.SUCCESS, results));
    });
};

/**
 * API to create user.
 *
 * @method getUserDetails.
 * @param {object} req -  request object.
 * @param {object} res -  response object.
 */
var addUser = function(req, res){
  var userObj = {
      "name": req.body.name,
      "mname": req.body.mname,
      "lname": req.body.lname,
      "gender": req.body.gender,
      "address1": req.body.address1,
      "address2": req.body.address2,
      "city": req.body.city,
      "country": req.body.country,
      "email": req.body.email
  };

  userService.insertUser(userObj, function(err, result) {
      if (err){
        return res.json(util.prepareResponse(constants.RESPONSE_CODES.FAILURE, constants.FAIL_MSG));
      }
      return res.json(util.prepareResponse(constants.RESPONSE_CODES.SUCCESS, 'User created successfully.'));
  });
}



var userController = {
  "getUserDetails":getUserDetails,
  "addUser": addUser
}

module.exports = userController;
