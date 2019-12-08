var express = require('express');
var app = express();

app.set('view engine','pug');
app.set('views', './views');

var port = 3000;

app.get('/', function(req,res){
	res.render('index', {
		name: "Lee Bảo"
	});
});

app.get('/users', function(req,res){
	res.render('users/index',{
		users: [
		{id: 1, name: 'Bảo'},
		{id: 2, name: 'Hảo'}
		]
	});
});


app.listen(port, function(){
	console.log('Server is listening on port', port);
});