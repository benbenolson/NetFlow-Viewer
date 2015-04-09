var hapi = require ('hapi');
var server = new hapi.Server ();
var config = require ('getconfig');
var templatizer = require ('templatizer');
//var api = require ('./fakeApi');
var path = require ('path');
var fs = require ('fs');

//var data = JSON.parse(fs.readFileSync('data/fullnetflow.json', 'utf8'));
var data = JSON.parse(fs.readFileSync('data/netflow_new.json', 'utf8'));
//var extdata = JSON.parse(fs.readFileSync('data/fullnetflow_extended.json', 'utf8'));
var mapdata = JSON.parse(fs.readFileSync('data/mapdata.json', 'utf8'));
console.log('Finished reading in and parsing the data.');

/*
server.route ({
  method: 'GET',
  path: '/hello',
  handler: function (request, reply) {
    reply ('Hello, world!');
  }
});
*/

server.connection ({
  port: 8080
});
var moonboots = require ('moonboots_hapi');

var moonConfig = {
  appPath: '/{p*}',
  moonboots: {
    main: __dirname + '/client/app.js',
    developmentMode: config.isDev,
    stylesheets: [
      __dirname + '/public/css/bootstrap.css'
    ],
    beforeBuildJS: function () {
      console.log ('In server.beforeBuildJS');
      if (config.isDev) {
        console.log ('config.isDev == true');
        templatizer (__dirname + '/templates', __dirname + '/client/templates.js');
        console.log ('templatizer done');
        //done ();
      }
    }
  }
};

server.register ({
  register: moonboots,
  options: moonConfig
}, function () {

  server.route ({
    method: 'GET',
    path: '/test',
    handler: function (request, reply) {
      reply ('Pass!');
    }
  });


  server.route ({
    method: 'GET',
    path: '/data',
    handler: function (request, reply) {
      reply (data);
    }
  });

  server.start ();
  console.log ('app is running at 8080');
});
