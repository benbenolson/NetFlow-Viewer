var MainView = require ('./views/main');
var domready = require ('domready');
var visd3 = require ('d3');
var Router = require ('./router');

window.app = {
  init: function () {
    console.log ('In app.init');
    //console.log (d3.version);

    var self = this;
    domready (function () {
      self.router = new Router ();
      self.view = new MainView ({
        el: document.body
      });
      
      self.router.history.start ({pushState: true});
    });
  }
};

window.app.init ();
