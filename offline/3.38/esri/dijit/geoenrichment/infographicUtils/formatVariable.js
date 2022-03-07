// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/infographicUtils/formatVariable",["dojo/number"],function(c){return function(b,a){var d=b.decimals||0;switch(b.units){case "pct":return c.format(a/100,{places:d,type:"percent"});case "currency":return c.format(a,{places:d,type:"currency",symbol:b.symbol||"$"});default:return"esriFieldTypeDouble"==b.type||"double"==b.type?c.format(a,{places:d}):"number"===typeof a?Number(a.toFixed(10)):a}}});