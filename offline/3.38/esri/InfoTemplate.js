// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/InfoTemplate",["dojo/_base/declare","dojo/_base/lang","dojo/has","./kernel","./lang"],function(b,c,d,e,f){b=b(null,{declaredClass:"esri.InfoTemplate",constructor:function(a,g){a&&c.isObject(a)&&!c.isFunction(a)?c.mixin(this,a):(this.title=a||"${*}",this.content=g||"${*}")},setTitle:function(a){this.title=a;return this},setContent:function(a){this.content=a;return this},toJson:function(){return f.fixJson({title:this.title,content:this.content})}});d("extend-esri")&&(e.InfoTemplate=b);
return b});