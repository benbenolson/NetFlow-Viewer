var View = require ('ampersand-view');
var ViewSwitcher = require ('ampersand-view-switcher');
var templates = require ('../templates')

module.exports = View.extend ({
  //template: '<body><h3>NetFlow Viewer</h3><main role="page-container"></main></body>',
  //template: '<body><h3>NetFlow Viewer</h3><main id="page-container"></main></body>',
  //template: '<body><h3>NetFlow Viewer</h3><div data-hook="page-container"></div></body>',
  template: templates.body,
  autoRender: true,
  events: {
    'click a[href]': 'handleLinkClick'
  },
  initialize: function () {
    this.listenTo (app.router, 'page', this.handleNewPage);
    console.log ('In main.initialize');
  },
  render: function () {
    this.renderWithTemplate (this);
    document.title = 'NetFlow app';

    //var pageContainer = this.get ('#page-container');
    //this.pages = new ViewSwitcher (pageContainer);
    //this.pages = new ViewSwitcher (this.getByRole ('page-container'));
    //this.pages = new ViewSwitcher (this.$('[role=page-container]'));
    this.pages = new ViewSwitcher (this.queryByHook ('page-container'));
    
    //drawCircle (150, 50, 40);
    console.log ('In main.render');
  },
  handleNewPage: function (page) {
    this.pages.set (page);
    console.log ('In main.handleNewPage');
  },
  handleLinkClick: function (e) {
    var aTag = e.target;
    if (aTag.host === window.location.host) {
      // This is a local click
      app.router.history.navigate (aTag.pathname, {trigger: true});
      e.preventDefault ();
      console.log ('caught local click');
    }
  }
});

function drawCircle (x, y, r) {
  var myVis = d3.select ('#chart')
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
