var Model = require('ampersand-model');
var Collection = require('ampersand-rest-collection');

var model = Model.extend({
    props: {
      "TimeSeconds": "number",
      "parsedDate": "string",
      "dateTimeStr": "number",
      "ipLayerProtocol": "number",
      "ipLayerProtocolCode": "string",
      "firstSeenSrcIp": "string",
      "firstSeenDestIp": "string",
      "firstSeenSrcPort": "number",
      "firstSeenDestPort": "number",
      "moreFragments": "string",
      "contFragments": "string",
      "durationSeconds": "number",
      "firstSeenSrcPayloadBytes": "number",
      "firstSeenDestPayloadBytes": "number",
      "firstSeenSrcTotalBytes": "number",
      "firstSeenDestTotalBytes": "number",
      "firstSeenSrcPacketCount": "number",
      "firstSeenDestPacketCount": "number",
      "recordForceOut": "string",
      "srcIpCountry": "string",
      "dstIpCountry": "string"
    },
    session: {
    },
    derived: {
    },
  });

  // Our collection of DataPoints
module.exports = Collection.extend({
    model: model,
    url: function() {
      return '/extdata';
    }
  });
