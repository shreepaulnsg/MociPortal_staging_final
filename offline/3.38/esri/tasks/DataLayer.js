// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tasks/DataLayer","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../lang ../geometry/jsonUtils ./SpatialRelationship".split(" "),function(a,d,e,f,g,h,k){a=a(null,{declaredClass:"esri.tasks.DataLayer",name:null,where:null,geometry:null,spatialRelationship:null,toJson:function(){var b={type:"layer",layerName:this.name,where:this.where,spatialRel:this.spatialRelationship},c=this.geometry;c&&(b.geometryType=h.getJsonType(c),b.geometry=c.toJson());return g.filter(b,function(l){if(null!==
l)return!0})}});d.mixin(a,k);e("extend-esri")&&d.setObject("tasks.DataLayer",a,f);return a});