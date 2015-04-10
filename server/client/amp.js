var Model = require('ampersand-model');
var Collection = require('ampersand-rest-collection');
var View = require('ampersand-view');

var View = require('./views/crossfilter/view.js');
var Collection = require('./collections/fullnetflow_extended.js');
var data = new Collection();

// Finally fetch the data and render the page
data.fetch({success: function() {
  console.log(data);
  var view = new View({ collection: data, el: document.body });
  view.render();
}});
