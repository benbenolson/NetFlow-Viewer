var Router = require ('ampersand-router');
var HomePage = require ('./pages/home');
var ListPage = require ('./pages/list');

module.exports = Router.extend ({
  routes: {
    '': 'home',
    'list': 'list'
  },
  
  home: function () {
    console.log ('In router.home');
    this.trigger ('page', new HomePage ());
  },
  
  list: function () {
    console.log ('In router.list');
    this.trigger ('page', new ListPage ());
  }
});