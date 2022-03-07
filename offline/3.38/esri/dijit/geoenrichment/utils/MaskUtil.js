// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/MaskUtil",[],function(){function d(a,b){return"string"!==typeof a?a:String(a).replace(/[^\x20-\x7f]/g,function(c){c=c.charCodeAt(0).toString(16).toUpperCase();return b(c)})}return{maskWithUnicode:function(a){return d(a,function(b){return"\\u000".substr(0,6-b.length)+b})},maskWithUnicodeXML:function(a){return d(a,function(b){return"\x26#x000".substr(0,7-b.length)+b+";"})},removeUnicode:function(a,b){return d(a,function(c){return b||""})},removeXMLMasks:function(a,
b){return a.replace(/&#x.*?;/g,b||"")}}});