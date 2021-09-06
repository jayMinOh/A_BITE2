const express = require('express'),
 path = require('path'),
 app = express(),
 http = require('http').createServer(app),
//  io = require('socket.io')(http),
 session = require('express-session'),
//  redisStore = require('connect-redis')(session),
 mysql = require('mysql'),
 swig = require('swig'),
 view_layout = require('./conf/view_layout');
 conf = require('./conf/app_conf.json');
 

 //const multer = require('multer'); 
//  const storage = multer.diskStorage({ 
//                         destination(req, file, callback) {
//                              callback(null, 'uploads'); 
//                         }, 
//                         filename(req, file, callback) { 
//                             let array = file.originalname.split('.'); 
//                             array[0] = array[0] + '_'; 
//                             array[1] = '.' + array[1];
//                             array.splice(1, 0, Date.now().toString()); 
//                             const result = array.join(''); 
//                             req.file_name = result;
//                         callback(null, result); } 
//                 });
//const upload = multer({ storage});
const pool = mysql.createPool(conf.DBINFO);
const user = require('./routes/user');

var bodyParser = require('body-parser');

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('.html', swig.renderFile);
app.set('view cache', false);
swig.setDefaults({cache : false});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname, 'uploads')));
// app.use(session({
//     secret : 'secret_key',
//     store : new redisStore(extend(conf.REDISINFO, {}, {"client": redis})),
//     saveUninitialized : false,
//     resave : true,
//     cookie : {
//         maxAge : 1000 * 60 * 30
//     }
// }));

app.get('/*', function(req, res){
    var idx = req.url.indexOf(".do");
    var _default_view = view_layout.default_view();
    if (req.url == "/") {
        res.render('index', _default_view);
    } else if(idx > 0) {
         var _viewName = req.url.substr(1, idx-1);
         res.render(_viewName, _default_view);
    }
});

http.listen(conf.PORT, () => {
    console.log('Connected at ' + conf.PORT);
});
