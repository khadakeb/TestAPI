var constants = require("../constants").CONSTANTS;

let checkToken = (req, res, next) => {

    let token = req.headers['x-access-token'] || req.headers['authorization'] ||  req.headers['access-token'];

    if (token && token == constants.TOKEN) {
      next();
    } else {
      return res.json({
        success: "failure",
        message: 'Authentication failed.'
      });
    }
  };



var authController = {
  "checkToken": checkToken
}
module.exports = authController;
