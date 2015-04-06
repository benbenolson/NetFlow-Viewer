var View = require ('ampersand-view');
var templates = require ('../templates');

module.exports = View.extend ({
  //template: '<div id="chart">Hello, you are home!</div>',
  //template: '<div id="chart"></div>',
  template: templates.pages.home,
  autoRender: true,
  render: function () {
    this.renderWithTemplate (this);
    console.log ('In home.render');
    //return this;
    //drawCircle (100, 100, 50);
    //drawCircle (150, 150, 25);
  }
});

console.log ('In home');

function drawCircle (x, y, r) {
  var data = d3.json ('netflow_example_json.json');
  
  var myCircle = d3.select ("body")
  //var myCircle = d3.select ("#chart")
    .append ("svg")
    .attr ("width", 400)
    .attr ("height", 400);

  myCircle.append ("circle")
    .style ("stroke", "gray")
    .style ("fill", "white")
    .attr ("r", r)
    .attr ("cx", x)
    .attr ("cy", y)
    .on("mouseover", function() {
      d3.select(this).style("fill", "aliceblue");
    })
    .on("mouseout", function() {
      d3.select(this).style("fill", "white");
    });

  console.log ('In home.drawCircle');

  return myCircle;
}
