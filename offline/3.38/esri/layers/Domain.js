// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/Domain",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang"],function(a,c,d,e,f){a=a(null,{declaredClass:"esri.layers.Domain",constructor:function(b){b&&c.isObject(b)&&(this.name=b.name,this.type=b.type)},toJson:function(){return f.fixJson({name:this.name,type:this.type})}});d("extend-esri")&&c.setObject("layers.Domain",a,e);return a});