var View = require ('ampersand-view');
var templates = require ('../templates');

module.exports = View.extend ({

  template: templates.pages.list,
  autoRender: true,
  render: function () {
    this.renderWithTemplate (this);
    console.log ('In list.render');
  }
});