// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tasks/DistanceParameters","dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/has ../kernel ../geometry/jsonUtils".split(" "),function(c,f,d,g,h,e){c=c(null,{declaredClass:"esri.tasks.DistanceParameters",geometry1:null,geometry2:null,distanceUnit:null,geodesic:null,toJson:function(){var a={},b=this.geometry1;b&&(a.geometry1=d.toJson({geometryType:e.getJsonType(b),geometry:b}));if(b=this.geometry2)a.geometry2=d.toJson({geometryType:e.getJsonType(b),geometry:b});a.sr=d.toJson(this.geometry1.spatialReference.toJson());
this.distanceUnit&&(a.distanceUnit=this.distanceUnit);this.geodesic&&(a.geodesic=this.geodesic);return a}});g("extend-esri")&&f.setObject("tasks.DistanceParameters",c,h);return c});