var View = require('ampersand-view');
//var map = require('./map-plot');
var d3 = require ('d3');
var templates = require ('../templates');
var domready = require ('domready');
var rendered = false;

module.exports = View.extend({
//  events: {
//    "click [data-hook=btn]": "remove"
//  },

  initialize: function() {
    console.log ('In map-view.initialize');
  },
  
  render: function() {
    domready (function () {
      console.log ('map-view.domready');
    });

    console.log ('In map-view.render');
    //drawCircle (200, 200, 50);
    if (!rendered) {
      this.plot (this.collection);
    }
  },
  plot: function(data) {
		//console.log (data);
    console.log ('In map-view.plot');
    var countries = new Object();
    var txt = "";
    var txt2 = "";
    var count = 0;
		//console.log (data.models);
		
    data.models.forEach (function (d)
		//data.forEach (function (d)
    {
      txt = d.srcIpCountry;
      if (countries.hasOwnProperty (txt))
      {
        countries [txt]++;
      }
      else
      {
        countries [txt] = 1;
      }
    });
    
    console.log ('In map-view.plot - done counting');
		console.log (countries);

    //d3.select (".container").selectAll('path').style('fill', function(d)
		//d3.select (document.body).selectAll('path').append('fill', function(d)
		d3.selectAll('path').attr('fill', function(d)
    {
      count = countries [this.id];
      txt = count.toString (16);
      txt2 = (255 - count).toString (16);
      if (txt.length == 1) {
        if (txt2.length == 1) {
          return "#0" + txt + "0" + txt2 + "00";
        }
        if (txt2.length == 2) {
          return "#0" + txt + txt2 + "00";
        }
      }
      else if (txt.length == 2) {
        if (txt2.length == 1) {
          return "#" + txt + "0" + txt2 + "00";
        }
        if (txt2.length == 2) {
          return "#" + txt + txt2 + "00";
        }
      }
      else {
        return "#FFFFFF";
      }
    });
    console.log ('In map-view.plot - done setting colors');
  }
});

function drawCircle (x, y, r) {
  console.log ('In map-view.drawCircle');
  var myVis = d3.select (".container")
    .append ("svg")
    .attr ("width", 400)
    .attr ("height", 400)
    .attr ("display", "block")
    .attr ("margin-left", "auto")
    .attr ("margin-right", "auto")
    .append ("circle")
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
