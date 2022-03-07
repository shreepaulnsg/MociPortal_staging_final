// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/_ResizableColumnsSupport",["dojo/_base/declare"],function(c){return c(null,{_populateFieldForResizableColumns:function(a,d,e){var b=this;0===d.index&&(a.onManualWidthChange=function(){b._setCellWidth(a,a.getWidth());b.onColumnWidthChanged()})},onColumnWidthChanged:function(){}})});