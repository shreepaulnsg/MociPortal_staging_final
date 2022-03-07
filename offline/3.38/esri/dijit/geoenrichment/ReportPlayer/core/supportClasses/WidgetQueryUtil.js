// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/WidgetQueryUtil",[],function(){var e={checkParentWidgets:function(a,b,d){for(var c=!1;a;){c=b(a)||c;if(d&&c)break;a=a.parentWidget}return c},isDataDrillingView:function(a){return e.checkParentWidgets(a,function(b){return b.isDataDrillingView},!0)},getReportContainerGrid:function(a){return e.findParentWidget(a,function(b){return b.isReportContainerGrid&&!b.isTempAddContainer})},findParentWidget:function(a,b){var d;e.checkParentWidgets(a,
function(c){if(b(c))return d=c,!0},!0);return d}};return e});