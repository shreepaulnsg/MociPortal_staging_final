// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tasks/FindParameters","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has ../kernel ../layerUtils".split(" "),function(c,p,k,l,q,r,t){c=c(null,{declaredClass:"esri.tasks.FindParameters",searchText:null,contains:!0,searchFields:null,outSpatialReference:null,layerIds:null,returnGeometry:!1,layerDefinitions:null,dynamicLayerInfos:null,toJson:function(){var a={searchText:this.searchText,contains:this.contains,returnGeometry:this.returnGeometry,maxAllowableOffset:this.maxAllowableOffset,
geometryPrecision:this.geometryPrecision},b=this.layerIds,m=this.searchFields,f=this.outSpatialReference;b&&(a.layers=b.join(","));m&&(a.searchFields=m.join(","));f&&(a.sr=f.wkid||l.toJson(f.toJson()));a.layerDefs=t._serializeLayerDefinitions(this.layerDefinitions,!0);if(this.dynamicLayerInfos&&0<this.dynamicLayerInfos.length){var n=[];k.forEach(this.dynamicLayerInfos,function(d){if(!d.subLayerIds){var e=d.id;if(this.layerIds&&-1!==k.indexOf(this.layerIds,e)){var g={id:e};g.source=d.source&&d.source.toJson();
var h;this.layerDefinitions&&this.layerDefinitions[e]&&(h=this.layerDefinitions[e]);h&&(g.definitionExpression=h);n.push(g)}}},this);b=l.toJson(n);"[]"===b&&(b="[{}]");a.dynamicLayers=b}return a}});q("extend-esri")&&p.setObject("tasks.FindParameters",c,r);return c});