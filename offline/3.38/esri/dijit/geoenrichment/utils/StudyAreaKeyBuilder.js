// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/StudyAreaKeyBuilder",[],function(){var b={studyAreaToJson:function(a){a=a.toJson();a.geometry&&(a.geometry.points?b._processPoints(a.geometry.points):a.geometry.paths?a.geometry.paths.forEach(b._processPoints):a.geometry.rings&&a.geometry.rings.forEach(b._processPoints));return a},_processPoints:function(a){a.forEach(function(c){c[0]=parseFloat(c[0].toFixed(10));c[1]=parseFloat(c[1].toFixed(10))})}};return b});