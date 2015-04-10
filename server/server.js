var express = require('express');
var app     = express();
var path    = require('path');
var fs      = require('fs');

//Configure Express
app.set('view engine', 'jade');

// Read in the full amount of our sample data
var data = JSON.parse(fs.readFileSync('data/fullnetflow.json', 'utf8'));
var extdata = JSON.parse(fs.readFileSync('data/fullnetflow_extended.json', 'utf8'));
var mapdata = JSON.parse(fs.readFileSync('data/mapdata.json', 'utf8'));
console.log('Finished reading in and parsing the data.');

// Make the Public directory available to the browser
app.use('/client', express.static(__dirname + '/client'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/data', function(req, res) {
  res.send(data);
});

app.get('/extdata', function(req, res) {
  res.send(extdata);
});

app.get('/mapdata', function(req, res) {
  res.send(mapdata);
});

/*
app.get('/data/:id?', function(req, res) {
  var id = req.params.id;
  console.log(id);
});
*/

// Listen on port 3000
console.log('Now I\'m ready and listening!');
app.listen(3000);
