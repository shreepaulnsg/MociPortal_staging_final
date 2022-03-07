// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/PolygonUtil",[],function(){var d={getNumberOfPoints:function(a){if(!a)return 0;Array.isArray(a)||(a=[a]);var c=0;a.forEach(function(b){c+=d.getGeometryPointCount(b.geometry||b)});return c},getGeometryPointCount:function(a){if(!a)return 0;var c=0,b=a.rings||a.paths;!b&&a.points&&(b=[a.points]);b?b.forEach(function(e){c+=e&&e.length||0}):c+="x"in a?1:2;return c}};return d});