// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/FilterParser",["../../../sections/dynamicSettings/supportClasses/FilterUtil"],function(b){return{getFilter:function(a){if(!b.isSupported(a.attributes.method))return null;var c={method:a.attributes.method,columnIndex:void 0!==a.attributes.columnIndex?Number(a.attributes.columnIndex):void 0};b.isNumElementsType(a.attributes.method)&&(c.numElements=a.attributes.numElements);b.isRangeType(a.attributes.method)&&(c.ranges=
a.tags.map(function(e){return{conditions:e.tags.map(function(d){return{operator:d.attributes.operator,value:d.attributes.value}})}}));return c}}});