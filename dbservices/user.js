var appDir = require('path').dirname(require.main.filename);
var dbUtil = require(`${appDir}/../utils/mysqlDbUtil`);
var async = require("async");
var constants = require(`${appDir}/../constants`).CONSTANTS;

/**
 * Insert user record.
 *
 * @method insertUser.
 * @param {object} oUser -  JSON object for user.
 * @param {cb} cb - The callback that handles the response.
 */
var insertUser = function(oUser, cb) {

    var mapValue = {
        name: oUser.name,
        lname: oUser.lname,
        mname: oUser.mname,
        gender: oUser.gender,
        address1: oUser.address1,
        address2: oUser.address2,
        city: oUser.city,
        country: oUser.country,
        email: oUser.email,
        created_by: 'admin',
        created_date: '2019/02/26'
    };

    async.waterfall(
        [
            dbUtil.getConnection,
            function(conn, cb) {
              conn.query("INSERT INTO user SET ?", mapValue, function (err, results) {
                if (err){
                  console.log('Error => '+err);
                  dbUtil.doClose(conn);
                  cb(err, err.message);
                }
                cb(err, conn, results);
              });
            }
        ],
        function(err, conn, results) {
            dbUtil.doClose(conn);
            if (err) {
                cb(err, constants.FAIL_MSG);
            }
            cb(err, results);
        }
    );
}

/**
 * Get user details.
 *
 * @method getUserDetails.
 * @param {cb} cb - The callback that handles the response.
 */
var getUserDetails = function(cb) {
  async.waterfall(
      [
          dbUtil.getConnection,
          function(conn, cb) {
            conn.query("SELECT * FROM user", function (err, results) {
              if (err){
                console.log('Error => '+err);
                dbUtil.doClose(conn);
                cb(err, err.message);
              }
              cb(err, conn, results);
            });
          }
      ],
      function(err, conn, results) {
          dbUtil.doClose(conn);
          if (err) {
              cb(err, constants.FAIL_MSG);
          }
          cb(err, results);
      }
  );
}



var userDBService = {
  "insertUser": insertUser,
  "getUserDetails": getUserDetails
};

module.exports = userDBService;
