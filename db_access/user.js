exports.getUserInfo = function(conn, userid, callback) {
    conn.query("select * from T_USER WHERE USER_ID = ?", userid, function(err, results){
        if(err){
            conn.release();
            callback(err, results);
            return;    
        } 
        conn.release();
        callback(err, results);
    }) 
}

exports.addUser = function(conn, param, callback) {
    var sql = "INSERT INTO T_USER (USER_IMG, USER_ID, USER_NAME, USER_LANG_TYPE, USER_PW)"
            + "VALUES(?,?,?,?, ?)";
    conn.query(sql, [param.USER_IMG.toString() , param.USER_ID.toUpperCase() , param.USER_NAME, param.USER_LANG_TYPE.toUpperCase(), param.PASSWORD],  function(err, results){
        if(err){
            conn.release();
            callback(err, results);
            return;    
        } 
        conn.release();
        callback(err, results);
    })
}


