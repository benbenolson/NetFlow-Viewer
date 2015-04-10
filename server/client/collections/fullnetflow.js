var Model = require('ampersand-model');
var Collection = require('ampersand-rest-collection');

var model = Model.extend({
    props: {
      "index":"number",
      "timeseconds":"number",
      "parseddate":"string",
      "datetimestr":"number",
      "iplayerprotocol":"number",
      "iplayerprotocolcode":"string",
      "firstseensrcip":"string",
      "firstseendestip":"string",
      "firstseensrcport":"number",
      "firstseendestport":"number",
      "morefragments":"any",
      "contfragments":"any",
      "durationseconds":"number",
      "firstseensrcpayloadbytes":"number",
      "firstseendestpayloadbytes":"number",
      "firstseensrctotalbytes":"number",
      "firstseendesttotalbytes":"number",
      "firstseensrcpacketcount":"number",
      "firstseendestpacketcount":"number",
      "recordforceout":"any"
    },
    session: {
    },
    derived: {
    },
  });

  // Our collection of DataPoints
module.exports = Collection.extend({
    mainIndex: 'index',
    model: model,
    url: function() {
      return '/data';
    }
  });
