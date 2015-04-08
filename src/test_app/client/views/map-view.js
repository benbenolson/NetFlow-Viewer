var View = require('ampersand-view');
var map = require('./map-plot');
var d3 = require ('d3');
var templates = require ('../templates');

module.exports = View.extend({
  template: templates.pages.map2,
  events: {
//    "click [data-hook=btn]": "remove"
  },

  initialize: function() {
    console.log ('In map-view.initialize');
  },
  
  render: function() {
    this.renderWithTemplate(this);
    //map.plot(this, this.collection);
    //return this;
    console.log ('In map-view.render');
    drawCircle (150, 50, 40);
  },
  
});

function drawCircle (x, y, r) {
  console.log ('In map-view.drawCircle');
  var myVis = d3.select (".map_container")
    .append ("svg")
    .attr ("width", 400)
    .attr ("height", 400);

  myVis.append ("circle")
    .style ("stroke", "gray")
    .style ("fill", "white")
    .attr ("r", r)
    .attr ("cx", x)
    .attr ("cy", y)
    .on("mouseover", function () {
      d3.select (this).style ("fill", "aliceblue");
    })
    .on("mouseout", function () {
      d3.select (this).style ("fill", "white");
    });
    
  return myVis;
}