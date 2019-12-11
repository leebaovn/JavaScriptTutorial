var express = require('express');

var bodyParser = require('body-parser');
var userRoute = require('./route/user.route');
var authRoute = require('./route/auth.route');
var cookieParser = require('cookie-parser');

var authMiddleware = require('./middlewares/auth.middleware');

var app = express();
app.set('view engine','pug');
app.set('views', './views');

app.use(express.static('public'));

var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', function(req,res){
	res.render('index', {
		name: "Lee Bảo"
});
	});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);

app.listen(port, function(){
	console.log('Server is listening on port', port);
});