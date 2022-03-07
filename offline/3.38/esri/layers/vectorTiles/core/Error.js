// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/Error",["require","exports","./tsSupport/extendsHelper","./lang","./Message"],function(d,m,h,k,l){d=function(e){function b(a,c,f){var g=e.call(this,a,c,f)||this;return g instanceof b?g:new b(a,c,f)}h(b,e);b.prototype.toJSON=function(){return{name:this.name,message:this.message,details:k.clone(this.details),dojoType:this.dojoType}};b.fromJSON=function(a){var c=new b(a.name,a.message,a.details);null!=a.dojoType&&(c.dojoType=a.dojoType);return c};return b}(l);d.prototype.type=
"error";return d});