// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/gridLayoutCalcUtils/columns/_ColumnModifierNormal",["./ColumnDataUtil"],function(g){var t={},y={adjustColumnWidth:function(b,f,e,a,u){function n(h,k){return g.setFieldWidth(b,f,h.field,k,!0)}var l=b.layoutDefaults.columnMinWidth,c=function(){if(!e)return null;var h=g.getFieldWidth(b,f,e.field);void 0!==u&&(a=h+u);a=Math.max(l,a);var k,v=0,w=!1;b.columns.forEach(function(q){v+=g.getFieldWidth(b,f,q.field);w&&!k?k=q:q===e&&(w=!0)});var x=
g.getAllowedWidth(b)-(v-h);return isNaN(x)?null:{width:a,widthMemo:h,maxAllowedColumnWidth:x,nextColumn:k}}();if(c){a=c.width;var d=c.widthMemo,m=c.maxAllowedColumnWidth,p=(c=c.nextColumn)&&g.getFieldWidth(b,f,c.field);d=a-d;var r=0;b.keepGridWidthWhenResized?(c&&(d=p-d,d<l&&(a-=l-d,d=l),d<p&&(m+=p-d),n(c,d)),n(e,Math.min(m,a))):(c&&m<a&&p>l?(n(e,a),r=m-a):n(e,Math.min(m,a)),0!==r&&y.adjustColumnWidth(b,f,c,null,r))}}};t.adjustColumnWidth=function(b,f,e,a){y.adjustColumnWidth(b,f,e,a)};return t});