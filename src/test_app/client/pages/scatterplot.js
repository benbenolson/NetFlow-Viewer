var View = require ('ampersand-view');
var templates = require ('../templates');
var mapview = require ('../views/scatterplot-view');

module.exports = View.extend ({
  template: templates.pages.scatterplot,
  //autoRender: true,
  render: function () {
    this.renderWithTemplate (this);
    console.log ('In map.render');
    var myMapview = new mapview ();
    myMapview.render ();
  }
});
