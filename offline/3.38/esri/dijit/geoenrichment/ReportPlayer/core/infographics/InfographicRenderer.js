// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicRenderer",["require","esri/dijit/geoenrichment/Deferred","dojo/dom-construct"],function(e,f,g){var c,d={isAsync:!0,loadModules:function(){var a=new f;e(["./InfographicContainer"],function(b){c=b;d.isAsync=!1;a.resolve()});return a.promise},createInfographicPage:function(a,b){var h=a.node?g.create("div",null,a.node):void 0;b=new (b||c)(a.creationParams,h);"function"===typeof a.placeFunc&&a.placeFunc(b);b.updateInfographic(a.creationParams.json);
return b}};return d});