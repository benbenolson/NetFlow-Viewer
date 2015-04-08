var View = require ('ampersand-view');
var ViewSwitcher = require ('ampersand-view-switcher');
var templates = require ('../templates')

module.exports = View.extend ({
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
