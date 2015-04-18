var Model = require ('ampersand-model');
var Collection = require ('ampersand-rest-collection');

var data_model = Model.extend ({
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
    "firseSeenDestTotalByes": "number",
    "firstSeenSrcPacketCount": "number",
    "firstSeenDestPacketCount": "number",
    "recordForcedut": "string",
    "srcIpCountry": "string",
    "dstIpCountry": "string"
  }
});

// Our collection of DataPoints
module.exports = Collection.extend({
  model: data_model,
  url: function() {
    return '/mapdata';
  }
});