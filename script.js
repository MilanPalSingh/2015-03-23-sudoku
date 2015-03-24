// var connect = require('connect');

// var app = connect()
// 	.use(connect.static('public'))
// 	.use(function (req, res) {
// 		res.end("Couldn't find it.");
// 	})
// 	.listen(3001);

var data = {
	values: [	0, 0, 7, 9, 6, 2, 4, 0, 0,
				9, 0, 0, 0, 1, 0, 0, 0, 2,
				0, 1, 0, 8, 5, 3, 0, 6, 0,
				5, 0, 0, 4, 7, 9, 0, 0, 1,
				0, 0, 0, 0, 8, 0, 0, 0, 0,
				4, 0, 0, 3, 2, 1, 0, 0, 7,
				0, 9, 0, 2, 4, 8, 0, 5, 0,
				6, 0, 0, 0, 3, 0, 0, 0, 8,
				0, 0, 8, 6, 9, 5, 1, 0, 0	]
};

var express = require('express');

var app = express();
app.use(express.static('public'));

app.get('/game-data',function(req,res){
	res.setHeader('Content-Type', 'application/json');
	res.send(data);
});

app.listen(3001);
