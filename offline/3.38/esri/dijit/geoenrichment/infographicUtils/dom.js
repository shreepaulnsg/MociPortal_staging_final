// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/infographicUtils/dom",["dojo/dom-construct","dijit/registry"],function(d,e){return{text:function(a,b){a.appendChild(document.createTextNode(b))},clear:function(a){if(a){var b=e.findWidgets(a);if(b)for(var c=0;c<b.length;c++)b[c].destroy();a.innerHTML=""}},pct:function(a){return(100*a).toFixed(2)+"%"},head:function(){return document.getElementsByTagName("head")[0]},createCols:function(a,b){a=d.create("colgroup",null,a);for(var c=0;c<b.length;c++){var f=d.create("col",
null,a);b[c]&&(f.style.width=this.pct(b[c]))}}}});