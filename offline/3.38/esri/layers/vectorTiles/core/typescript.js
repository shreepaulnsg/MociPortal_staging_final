// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/typescript",["./declare","./lang"],function(m,n){var l={declareDefinition:function(b,a){var f=[],g=Object.getPrototypeOf(b.prototype);if(g!==Object.prototype){var d=g.constructor;var h=d.prototype;f.push(d)}a&&(f=f.concat(a));a={};d=Object.getOwnPropertyNames(b.prototype);for(var e=0;e<d.length;e++){var c=d[e];if("constructor"!==c){var k=c;"dojoConstructor"===c&&(k="constructor");h&&b.prototype[c]===h[c]||(a[k]=b.prototype[c])}}d=Object.getOwnPropertyNames(b);
g=Object.getOwnPropertyNames(g.constructor);h={};for(e=0;e<d.length;e++)c=d[e],-1===g.indexOf(c)&&(h[c]=b[c]);return{bases:f,instanceMembers:a,classMembers:h}},subclass:function(b){return function(a){a=l.declareDefinition(a,b);return n.mixin(m(a.bases,a.instanceMembers),a.classMembers)}},shared:function(b){return function(a,f){a[f]=b}}};return l});