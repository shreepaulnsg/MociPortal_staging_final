//>>built
define("dojox/charting/action2d/Base",["dojo/_base/lang","dojo/_base/declare","dojo/Evented"],function(b,c,d){return c("dojox.charting.action2d.Base",d,{constructor:function(e,a){this.chart=e;this.plot=a?b.isString(a)?this.chart.getPlot(a):a:this.chart.getPlot("default")},connect:function(){},disconnect:function(){},destroy:function(){this.disconnect()}})});