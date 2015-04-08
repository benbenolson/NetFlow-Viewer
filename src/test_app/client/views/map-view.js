var View = require('ampersand-view');
var map = require('./map-plot');

module.exports = View.extend({
  events: {
//    "click [data-hook=btn]": "remove"
  },

  template: require('../../templates/map.jade'),

  initialize: function() {
  },

  render: function() {
    this.renderWithTemplate(this);
    map.plot(this, this.collection);
    return this;
  },
});
