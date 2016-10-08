var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.sendFile('locations.html', {root: __dirname });
});

	app.listen(8080);