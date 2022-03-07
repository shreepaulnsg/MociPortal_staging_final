// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/accessorSupport/decorators/reader",["require","exports","../../object","./property"],function(p,e,k,l){Object.defineProperty(e,"__esModule",{value:!0});e.reader=function(b,c,d){if(void 0===c||Array.isArray(c)){var f=b;d=c;var g=[void 0]}else f=c,g=Array.isArray(b)?b:[b];return function(h,m,q){var n=h.constructor.prototype;g.forEach(function(a){a=l.propertyJSONMeta(h,a,f);a.read&&"object"!==typeof a.read&&(a.read={});k.setDeepValue("read.reader",n[m],a);d&&(a.read.source=
(a.read.source||[]).concat(d))})}}});