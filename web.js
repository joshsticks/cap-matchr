// var express = require('express');
// var pg = require('pg');

// var client = new pg.Client('postgres://jzjnyhhuadkjih:nFfX92G0Vo5oQTnoXThkaT9MKV@ec2-54-243-228-4.compute-1.amazonaws.com:5432/d2le9eigheli01');
// client.connect();

// var app = express.createServer(express.logger());

// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

//     // intercept OPTIONS method
//     if ('OPTIONS' == req.method) {
//       res.send(200);
//     }
//     else {
//       next();
//     }
// };

// app.configure(function () {
//   app.use(allowCrossDomain);
// });

// app.get('/api/count', function(request, response) {
//   var query = client.query('SELECT COUNT(*) FROM locations');
//   query.on('row', function(result) {
//     response.send(200, result);
//   });
// });

// app.get('/api/list', function(request, response) {
//   var query = client.query('SELECT * FROM locations', function(err, result) {
//     if(result && result.rows) {
//       response.send(200, result.rows); 
//     }
//     else { 
//       response.send(500, 'Internal Server Error');
//     }
//   });
// });

// app.put('/api/add', function(request, response) {
//   if(request.query && request.query.location) {
//     values = request.query.location.split(",");
//     if(values.length == 2 && parseFloat(values[0]) && parseFloat(values[1])) {
//       lat = values[0];
//       lon = values[1];
//       d = new Date();
//       today = '' + d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
//       insert = "INSERT INTO locations VALUES ('"+ lat +"','"+ lon + "','" + today + "')";
//       console.log(insert);      
//       var query = client.query(insert);
//       response.send(200);
//     }
//     else {
//       response.send(400, 'Bad Request');
//     }
//   }
//   else {
//     response.send(400, 'Bad Request');
//   }
// });

// var port = process.env.PORT || 5000;
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });