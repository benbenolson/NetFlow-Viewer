var View = require('ampersand-view');
var histogram = require('./plot.js');

module.exports = View.extend({
  events: {
//    "click [data-hook=btn]": "remove"
  },

  template: require('../../templates/testpage.jade'),

  initialize: function() {
  },

  render: function() {
    this.renderWithTemplate(this);
    histogram.plot(this, this.collection);
    return this;
  },
});
