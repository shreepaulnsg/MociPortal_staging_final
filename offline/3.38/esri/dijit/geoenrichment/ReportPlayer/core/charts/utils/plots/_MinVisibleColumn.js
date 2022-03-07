// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/_MinVisibleColumn",["dojo/_base/declare","dojo/_base/lang"],function(c,d){return c(null,{minVisibleHeight:2,createRect:function(a,e,b){a=d.mixin({},b);a.height<this.minVisibleHeight&&(a.y-=this.minVisibleHeight-b.height,a.height=this.minVisibleHeight);return e.createRect(a)}})});