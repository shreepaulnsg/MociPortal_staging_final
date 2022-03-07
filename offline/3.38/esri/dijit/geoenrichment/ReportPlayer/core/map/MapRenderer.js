// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/map/MapRenderer",["require","esri/dijit/geoenrichment/Deferred"],function(e,f){var c,d={isAsync:!0,loadModules:function(){var a=new f;e(["./MapContainer"],function(b){c=b;d.isAsync=!1;a.resolve()});return a.promise},createMapContainer:function(a){var b=new c(a.creationParams,a.node);"function"===typeof a.placeFunc&&a.placeFunc(b);return b}};return d});