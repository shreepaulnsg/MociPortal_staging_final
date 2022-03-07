// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tasks/MultipartColorRamp","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../symbols/Symbol ./ColorRamp".split(" "),function(a,c,d,e,f,g){a=a(g,{declaredClass:"esri.tasks.MultipartColorRamp",type:"multipart",constructor:function(){this.colorRamps=[]},addColorRamp:function(b){this.colorRamps.push(b)},toJson:function(){return{type:"multipart",colorRamps:d.map(this.colorRamps,function(b){return b.toJson()})}}});e("extend-esri")&&c.setObject("tasks.MultipartColorRamp",
a,f);return a});