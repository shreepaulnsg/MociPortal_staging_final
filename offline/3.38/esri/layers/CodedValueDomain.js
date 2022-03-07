// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/CodedValueDomain","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../lang ./Domain".split(" "),function(b,c,f,g,h,k,l){b=b([l],{declaredClass:"esri.layers.CodedValueDomain",constructor:function(a){a&&c.isObject(a)&&(this.codedValues=a.codedValues)},getName:function(a){var d;f.some(this.codedValues,function(e){e.code==a&&(d=e.name);return!!d});return d},toJson:function(){var a=this.inherited(arguments);a.codedValues=c.clone(this.codedValues);return k.fixJson(a)}});
g("extend-esri")&&c.setObject("layers.CodedValueDomain",b,h);return b});