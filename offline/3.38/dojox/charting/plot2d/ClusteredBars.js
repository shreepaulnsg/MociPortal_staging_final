//>>built
define("dojox/charting/plot2d/ClusteredBars",["dojo/_base/declare","dojo/_base/array","./Bars","./common"],function(c,d,e,f){return c("dojox.charting.plot2d.ClusteredBars",e,{getBarProperties:function(){var b=this.series.length;d.forEach(this.series,function(g){g.hidden&&b--});var a=f.calculateBarSize(this._vScaler.bounds.scale,this.opt,b);return{gap:a.gap,height:a.size,thickness:a.size}}})});