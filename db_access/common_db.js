const mysql = require('mysql');
const db_conf = require('../conf/app_conf.json');
let pool = mysql.createPool(db_conf.DBINFO);

module.exports = {
    getDBConnection: function () {
      return pool.createConnection(config.db);
    },

     connectToDB: function (connection) {
          connection.connect(function (err) {
                 if (err) {
                          throw err;
                  }
                  });
     },

    endDBConnection: function (connection) {
      connection.release(function (err) {
        if (err) {
          throw err;
        }
      });
    },

    exec: function (query, data, cb) {
      var connection = this.getDBConnection();
      this.connectToDB(connection);
      connection.query(query, data, function(err, res) {
        if (err) {
          cb(err);
        }
        cb(null, res);
      });
      this.endDBConnection(connection);
    }
}