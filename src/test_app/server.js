var hapi = require ('hapi');
var server = new hapi.Server ();
var config = require ('getconfig');
var templatizer = require ('templatizer');
var api = require ('./fakeApi');

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
  server.start ();
  console.log ('app is running at 8080');
});
