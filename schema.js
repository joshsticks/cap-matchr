var pg = require('pg').native;

var client = new pg.Client('postgres://jzjnyhhuadkjih:nFfX92G0Vo5oQTnoXThkaT9MKV@ec2-54-243-228-4.compute-1.amazonaws.com:5432/d2le9eigheli01');
client.connect();
var query = client.query('CREATE TABLE locations (lat VARCHAR(64), lon VARCHAR(64), date DATE)');
query.on('end', function() { client.end(); });