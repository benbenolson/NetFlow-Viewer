var View = require ('ampersand-view');
var templates = require ('../templates');
var mapview = require ('../views/map-view');
var Collection = require ('../collections/map-collection.js');
var data = new Collection ();

module.exports = View.extend ({
  initialize: function () {
    console.log ('In map.intialize');
    data.fetch ();
  },
  template: templates.pages.map,
  render: function () {
    this.renderWithTemplate (this);
    console.log ('In map.render');
    var myMapview = new mapview ({
			collection:data
	  });
    myMapview.render ();
  }
});