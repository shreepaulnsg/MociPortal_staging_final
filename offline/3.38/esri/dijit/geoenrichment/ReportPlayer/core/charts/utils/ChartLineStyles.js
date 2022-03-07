// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartLineStyles",[],function(){var c={SOLID:"Solid",DASHED:"Dashed",DOTTED:"Dotted",isSupported:function(b){for(var a in c)if(c[a]===b)return!0;return!1},toGFXValue:function(b,a){switch(b){case "Dashed":return 1>a?"LongDash":"Dash";case "Dotted":return 1>a?"Dash":"Dot";default:return"Solid"}}};return c});