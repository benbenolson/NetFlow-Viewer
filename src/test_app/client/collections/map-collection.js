var Model = require ('ampersand-model');
var colection = require ('ampersand-rest-collection');

var model = Model.extend ({
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
    "srcIpCountry": "string"
  }
});
