// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/_MinVisibleBar",["dojo/_base/declare","dojo/_base/lang"],function(c,d){return c(null,{minVisibleWidth:2,createRect:function(a,e,b){a=d.mixin({},b);a.width<this.minVisibleWidth&&(a.y-=this.minVisibleWidth-b.width,a.width=this.minVisibleWidth);return e.createRect(a)}})});