// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainer/utils/QueryUtil",[],function(){return{getReportElements:function(a,e){for(var b=[],c=0;c<a.stackContainer.children.length;c++){var f=a.stackContainer.children[c];a.getElementParams(f).isReportElement&&b.push(f)}return e?b.filter(function(d){return(d=a.getElementSection(d))&&!!d[e]}):b}}});