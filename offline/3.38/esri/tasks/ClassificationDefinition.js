// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tasks/ClassificationDefinition",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],function(a,b,d,e){a=a(null,{declaredClass:"esri.tasks.ClassificationDefinition",type:null,baseSymbol:null,colorRamp:null,toJson:function(){var c={};this.baseSymbol&&b.mixin(c,{baseSymbol:this.baseSymbol.toJson()});this.colorRamp&&!b.isString(this.colorRamp)&&b.mixin(c,{colorRamp:this.colorRamp.toJson()});return c}});d("extend-esri")&&b.setObject("tasks.ClassificationDefinition",a,e);return a});