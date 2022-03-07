// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/annotations/image/ImageRenderer",["require","esri/dijit/geoenrichment/Deferred"],function(e,f){var c,d={isAsync:!0,loadModules:function(){var a=new f;e(["./ImageContainer"],function(b){c=b;d.isAsync=!1;a.resolve()});return a.promise},createImageContainer:function(a){var b=new c(a.creationParams,a.node);"function"===typeof a.placeFunc&&a.placeFunc(b);return b}};return d});