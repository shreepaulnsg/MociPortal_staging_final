// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/gridLayoutCalcUtils/GridLayoutSnapper",["dojo/_base/lang","./rows/RowDataUtil","./columns/ColumnDataUtil","./GridElementBoxCalculator"],function(k,l,m,n){return{autoSnapLayout:function(c){function p(){var a=[];c.rows.forEach(function(b){c.columns.forEach(function(e){a.push(k.mixin({id:b.index+"_"+e.field,data:b,dataIndex:b.index,column:e,field:e.field},n.calcDataBox(c,b,e.field)))})});return a}if(c.looseResize)for(var q=c.rows.length*
c.columns.length,g={},f=0;f<q;f++){var h=p(),d=h[f],r=d.x+d.w,t=d.y+d.h;g[d.id]=!0;h.forEach(function(a){if(!g[a.id]){var b=r-(a.x+a.w);.5>=Math.abs(b)&&m.setFieldWidth(c,a.data,a.field,a.w+b);b=t-(a.y+a.h);.5>=Math.abs(b)&&l.setDataHeight(c,a.data,a.field,a.h+b)}})}}}});