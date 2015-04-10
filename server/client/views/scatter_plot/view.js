var View = require('ampersand-view');
var scatter_plot = require('./plot.js');

module.exports = View.extend({
  events: {
//    "click [data-hook=btn]": "remove"
  },

  template: require('../../templates/testpage.jade'),

  initialize: function() {
  },

  render: function() {
    this.renderWithTemplate(this);
    scatter_plot.plot(this, this.collection);
    return this;
  },
});
