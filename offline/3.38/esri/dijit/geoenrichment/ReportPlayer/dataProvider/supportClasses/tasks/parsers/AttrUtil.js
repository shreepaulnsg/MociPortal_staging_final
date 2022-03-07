// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/tasks/parsers/AttrUtil",[],function(){var a={},e="ID OBJECTID AREA_ID STORE_ID HasData aggregationMethod sourceCountry radiusIndex".split(" ");a.cleanUpAttrs=function(b,c){b&&e.forEach(function(d){c&&c[d]||delete b[d]})};return a});