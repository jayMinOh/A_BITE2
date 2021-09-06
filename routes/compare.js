var tables = require('../db_access/tables');
var async = require("async");

exports.compare = function(req, res) {
    var params = req.body;
    var conn = [];
    if (params.criteria == "DEV") {
        conn.push(req.db_dev);
    } else if(params.criteria == "QA"){
        conn.push(req.db_qa);
    } else if(params.criteria == "PRD") {
        // conn.push(req.db_prd);
    }
    
    if (params.compare1 == "DEV") {
        conn.push(req.db_dev);
    } else if(params.compare1 == "QA"){
        conn.push(req.db_qa);
    } else if(params.compare1 == "PRD") {
        // conn.push(req.db_prd);
    }

    if (params.compare2 == "DEV") {
        conn.push(req.db_dev);
    } else if(params.compare2 == "QA"){
        conn.push(req.db_qa);
    } else if(params.compare2 == "PRD") {
        // conn.push(req.db_prd);
    }
    
    var target = [];
    target = params.tables.split(",");
    var list = [];
    async.each(conn, function(connection, cb) {
        tables.getShowTables(connection, target, list, cb)
    }, function(err){
        res.json(list);
    });
}