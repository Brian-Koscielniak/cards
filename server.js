// Bringing in modules
var express = require('express');
var jade = require('jade');

var app = express();

//
app.set('views', __dirname + '/views');
app.set('view engine','jade');
app.engine('jade', jade.__express);
app.use(express.static('public'));

// Unless specified otherwide, server runs on port 3000
process.argv[2] ? port = process.argv[2] : port = 3000;
app.listen(port, function(){
	console.log('Server is running on port %d', port);
});

// Routes
app.get('*', function(req, res){
	res.render('page.jade');
});
