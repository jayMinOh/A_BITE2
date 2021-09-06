var redis = require('redis');
var redis_conf =  require('./conf/app_conf.json');
var redisClient = redis.createClient(redis_conf.REDISINFO.port, redis_conf.REDISINFO.host);

redisClient.auth('', function (err, res) {
    if (err) throw err;
    console.log(res);
});
redisClient.on('error', function(err) {
    console.log('Redis error: ' + err);
});
module.exports = redisClient;