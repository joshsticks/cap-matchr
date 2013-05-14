var express = require('express');
var request = require("request");
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
   request.get("http://slaughter-spottr.herokuapp.com/api/count", function (err, res, body) {
       if (!err) {
           var resultsObj = JSON.parse(body);
           //Just an example of how to access properties:
           response.send(200, resultsObj);
       }
   });
   // $.ajax({
   //    url:'http://slaughter-spottr.herokuapp.com/api/count',
   //    success:function(data) {
   //       response.send(200, data);
   //    },
   //    error: function(jqXHR) {
   //       response.send(500, data);
   //    }
   // });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});