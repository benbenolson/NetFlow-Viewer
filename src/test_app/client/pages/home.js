var View = require ('ampersand-view');
var templates = require ('../templates');

module.exports = View.extend ({
  template: templates.pages.home,
  autoRender: true,
  render: function () {
    this.renderWithTemplate (this);
    console.log ('In home.render');
  }
});

console.log ('In home');
