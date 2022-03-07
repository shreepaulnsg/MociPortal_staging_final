// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/DeferredList2",["dojo/DeferredList"],function(d){return function(b,a,e,f,g){this.list=b;a=new d(b,a,e,f,g);var h=a.resolve.bind(a),k=a.cancel.bind(a);a.cancel=function(){b&&b.forEach(function(c){c.cancel&&c.cancel()});k.apply(this,arguments)}.bind(a);a.resolve=function(){this.isFulfilled()||h.apply(this,arguments)}.bind(a);return a}});