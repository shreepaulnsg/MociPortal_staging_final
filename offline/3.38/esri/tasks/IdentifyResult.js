// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tasks/IdentifyResult","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../graphic ../geometry/jsonUtils".split(" "),function(a,c,d,e,f,g){a=a(null,{declaredClass:"esri.tasks.IdentifyResult",constructor:function(b){c.mixin(this,b);this.feature=new f(b.geometry?g.fromJson(b.geometry):null,null,b.attributes);delete this.geometry;delete this.attributes}});d("extend-esri")&&c.setObject("tasks.IdentifyResult",a,e);return a});