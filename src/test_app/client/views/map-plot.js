var d3 = require('d3');

module.exports = {
  plot: function(mydiv, data) {
    var countries = new Object();
    var txt = "";
    var txt2 = "";
    var count=0;
    data.models.forEach(function(d)
    {
      txt=d.srcIpCountry;
      if (countries.hasOwnProperty(txt))
      {
        countries[txt]++;
      }
      else
      {
        countries[txt]=1;
      }
    })

    d3.select(mydiv.el).selectAll('path').attr('fill', function(d)
    {
      count=countries[this.id];
      txt=count.toString(16);
      txt2=(255-count).toString(16);
      if (txt.length==1) {
        if (txt2.length==1) {
          return "#0"+txt+"0"+txt2+"00";
        }
        if (txt2.length==2) {
          return "#0"+txt+txt2+"00";
        }
      }
      else if (txt.length==2) {
        if (txt2.length==1) {
          return "#"+txt+"0"+txt2+"00";
        }
        if (txt2.length==2) {
          return "#"+txt+txt2+"00";
        }
      }
      else {
        return "#FFFFFF";
      }
    })
  }
}

