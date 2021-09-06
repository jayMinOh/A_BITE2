var async = require('async');


exports.getShowTables = function(conn, params, list, callback) {
    async.each(params, function(item, cb){
        var sql = "SHOW CREATE TABLE " + item; 
        conn.query(sql, function(err, results){
            if(err){
                  conn.release();
                return;
            } 
            conn.release();
            list.push({"key" : item , "Obj" : results[0]["Create Table"]});
            cb(err);
        })     
    }, function(err){
         callback(err, null);
    });
}



