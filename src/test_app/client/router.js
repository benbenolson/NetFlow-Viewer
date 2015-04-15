var Router = require ('ampersand-router');
var HomePage = require ('./pages/home');
var ListPage = require ('./pages/list');
var MapPage = require ('./pages/map');
var ScatterplotPage = require('./pages/scatterplot');

module.exports = Router.extend ({
  routes: {
    '': 'home',
    'list': 'list',
    'map': 'map',
    'scatterplot' : 'scatterplot'
  },
  
  home: function () {
    console.log ('In router.home');
    this.trigger ('page', new HomePage ());
  },
  
  list: function () {
    console.log ('In router.list');
    this.trigger ('page', new ListPage ());
  },
  
  map: function () {
    console.log ('In router.map');
    this.trigger ('page', new MapPage ());
  },

  scatterplot: function () {
    console.log ('In router.scatterplot');
    this.trigger ('page', new ScatterplotPage ());
  }
});
