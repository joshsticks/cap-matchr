// var express = require("express");
// var app = express();
// app.use(express.logger());

// app.get('/', function(request, response) {
//   response.send('Hello World!');
// });

// var port = process.env.PORT || 5000;
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });

var express = require('express');
var app = express.createServer(express.logger());

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.configure(function () {
  app.use(allowCrossDomain);
});

app.get('/', function(request, response) {
  response.send('Cap Matchr API');
});

app.get('/api/list', function(request, response) {
   response.send(200, "success");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});