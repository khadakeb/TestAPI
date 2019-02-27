var appDir = require('path').dirname(require.main.filename),
    mysqldb = require('mysql'),
    config = require('config'),
    dbConfig = config.get('DB_CONFIG');


var getConnection = function(cb){
  var connection = mysqldb.createConnection({   // We can create connection pool to avoid create connection on each request.
    host     : dbConfig.HOSTNAME,
    port     : dbConfig.PORT,
    user     : dbConfig.USERNAME,
    password : dbConfig.PASSWORD,
    database : dbConfig.DB
  });

  connection.connect(function(err) {
    if (err) {
      console.log(err);
      return;
    };
    cb(null, connection);
  });
};


var doRelease = function(connection){
  connection.release();
};


var doClose = function(connection){
  connection.end(function(err) {
  // The connection is terminated now
  });
}

var mysqlDBUtil = {
	"getConnection" : getConnection,
	"doRelease" : doRelease,
  "doClose": doClose
};

module.exports = mysqlDBUtil;
