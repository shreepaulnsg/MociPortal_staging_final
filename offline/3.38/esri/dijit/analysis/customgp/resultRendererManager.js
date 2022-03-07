// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/customgp/resultRendererManager",["./utils","dojo/_base/array","./resultrenderers/simpleResultRenderers"],function(m,n,e){var h={},l,k;h.createResultRenderer=function(a,b,c){var f="result map service"===a.dataType?"AddResultImageLayer":"GPFeatureRecordSetLayer"===a.dataType?"DrawResultFeatureSet":"GPRecordSet"===a.dataType?"RecordSetTable":"error"===a?"Error":"SimpleResultRenderer";c={param:a,widgetUID:c.uid,map:l,nls:k,config:c.config};if("DrawResultFeatureSet"===f)c.value=
b.value,b=new e.DrawResultFeatureSet(c);else if("RecordSetTable"===f)c.value=b.value,b=new e.RecordSetTable(c);else if("SimpleResultRenderer"===f){var d="";b=b.value;Array.isArray(b)||(b=[b]);n.forEach(b,function(g){""!==d&&(d+="\x3cbr\x3e");if(["GPLong","GPDouble","GPString","GPBoolean"].some(function(p){return 0<=a.dataType.indexOf(p)}))d+=m.sanitizeHTML(g);else if(0<=a.dataType.indexOf("GPLinearUnit"))d+=g.distance+"\x26nbsp;"+g.units;else if(0<=a.dataType.indexOf("GPDate"))d+=(new Date(g)).toLocaleTimeString();
else if(0<=a.dataType.indexOf("GPRecordSet"))d+="table";else if(0<=a.dataType.indexOf("GPDataFile")||0<=a.dataType.indexOf("GPRasterDataLayer"))d=g.url?d+('\x3ca style\x3d"word-wrap:break-word;" target\x3d"_blank" href\x3d"'+g.url+'"\x3e'+g.url+"\x3c/a\x3e"):d+(a.paramName+": null")});c.message=d;b=new e.SimpleResultRenderer(c)}else"AddResultImageLayer"===f?(c.layer=b,b=new e.AddResultImageLayer(c)):"UnsupportRenderer"===f?(c.message="type "+a.dataType+" is not supported for now.",b=new e.UnsupportRenderer(c)):
"Error"===f?(c.message=k.error,b=new e.ErrorResultRenderer(c)):(c.message="unknown renderer name: "+f,b=new e.UnsupportRenderer(c));return b};h.setMap=function(a){l=a};h.setNls=function(a){k=a};return h});