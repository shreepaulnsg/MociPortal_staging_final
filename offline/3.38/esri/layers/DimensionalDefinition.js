// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/DimensionalDefinition",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang"],function(a,b,d,e,f){a=a(null,{declaredClass:"esri.layers.DimensionalDefinition",variableName:null,dimensionName:null,values:[],isSlice:!1,constructor:function(c){b.isObject(c)&&b.mixin(this,c)},toJson:function(){var c={variableName:this.variableName,dimensionName:this.dimensionName,values:b.clone(this.values),isSlice:this.isSlice};return f.filter(c,function(g){return null!==g})}});
d("extend-esri")&&b.setObject("layers.DimensionalDefinition",a,e);return a});