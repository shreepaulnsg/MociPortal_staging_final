// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/accessorSupport/decorators/writer",["require","exports","../../object","./property"],function(p,g,h,l){Object.defineProperty(g,"__esModule",{value:!0});g.writer=function(b,c,d){if(void 0===c){var e=b;var f=[void 0]}else"string"!==typeof c?(e=b,f=[void 0],d=c):(e=c,f=Array.isArray(b)?b:[b]);return function(k,m,q){var n=k.constructor.prototype;f.forEach(function(a){a=l.propertyJSONMeta(k,a,e);a.write&&"object"!==typeof a.write&&(a.write={});d&&h.setDeepValue("write.target",
d,a);h.setDeepValue("write.writer",n[m],a)})}}});