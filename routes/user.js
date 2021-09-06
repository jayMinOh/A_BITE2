var user = require('../db_access/user');
var crypto = require('crypto');
const { formatWithOptions } = require('util');
const { throws } = require('assert');


exports.checkDupl = function(req, res) {
    var userid = req.body.userid;
    if (!userid) {
        res.db.release();
        res.json("err");
        return;
    } 
    user.getUserInfo(res.db, userid, function(error, result){
        if (error) {
            res.json(error);
        } else {
            if (result && result.length > 0) {
                res.json("DUPL");
            } else { 
                res.json("OK");
            }
        }
    });
}

exports.addUser = function(req, res) {
    var form = req.body;
    if (!form) {
        res.db.release();
        res.json("err");
        return;
    } 
    encriptPw(form.PASSWORD, function(encPw){
        form.PASSWORD = encPw;
        form.USER_IMG = req.file_name || ""
        user.addUser(res.db, form, function(error, result){
            if (error) {
                res.render('index', {msg : "FAIL"});
            } else {
                if (result) {
                    res.render('index', {msg : "SUCCESS"});
                } else {
                    res.render('index', {msg : "FAIL"});
                }
            }
        });
    });
}

exports.login = function(req, res) {
    var form = req.body;
    if (!form) {
        res.db.release();
        res.json("err");
        return;
    } 
    user.getUserInfo(res.db, form.USER_ID, function(err, results){
        if (err) {
            res.json(null);
            return;
        } 
        if (results && results.length > 0) {
            encriptPw(form.PASSWORD, function (encPw){
                if (results[0].USER_PW == encPw) {
                    req.session.key = form.USER_ID;
                    req.session.USERINFO = {
                        USER_ID : results[0].USER_ID,
                        USER_IMG : results[0].USER_IMG,
                        USER_LANG_TYPE: results[0].USER_LANG_TYPE,
                        USER_NAME: results[0].USER_NAME
                    }
                    res.json({msg: "OK"});
                } else {
                    res.json({msg: "login Error"});
                }
            });
        } else {
            res.json({msg: "login Error"});
        }
    });
}

exports.logout = function(req, res){
    req.session.destroy(function(err){ 
        if(err){ 
            console.log(err); 
            res.json(err);
        } else {
            res.redirect('/'); 
        } 
    });
}

function encriptPw(password, callback) {
    if (password && password != '') {
        crypto.pbkdf2(password, '200723', 100000, 64, 'sha512', (err, key) => {
            callback(key.toString('base64'));
        });
        
    }
}