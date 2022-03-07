// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/SortUtil",[],function(){function m(a,b,d,c){a=void 0===a||null===a;return a!=(void 0===b||null===b)?(b=a?-1:1,(void 0===c?d:c)?-b:b):a?0:null}function n(a){var b=/^(.+)\s([1-9]\d*)$/.exec(a);return b?{base:b[1],number:b[2]}:/^[1-9]\d*$/.test(a)?{base:"",number:+a}:{base:a,number:0}}var f={NEWEST:"newest",OLDEST:"oldest",ALPHABETICAL:"alphabetical",UNALPHABETICAL:"unalphabetical",compareNumeric:function(a,b,d,c){c=m(a,b,d,c);if(null!==c)return c;a=Number(a);b=
Number(b);c=a>b?1:a<b?-1:0;return d?-c:c},compareString:function(a,b,d,c){c=m(a,b,d,c);if(null!==c)return c;a=String(a);b=String(b);c=a.localeCompare(b);return d?-c:c}},p=/^(.+)\s([1-9]\d*)(\D*)$/;f.compareNames=function(a,b,d,c){var e=n("string"===typeof a?a.toLowerCase():a),h=n("string"===typeof b?b.toLowerCase():b),g=null;if(e.base===h.base)g=f.compareNumeric(e.number,h.number,d,c);else{var k=p.exec(e.base);if(k){var l=p.exec(h.base);l&&k[1]===l[1]&&k[3]===l[3]&&(g=f.compareNumeric(k[2],l[2],d,
c))}null===g&&(g=f.compareString(e.base,h.base,d,c))}return g||f.compareString(a,b,d,c)};f.compare=function(a,b,d,c){var e=m(a,b,d,c);if(null!==e)return e;e=typeof a;typeof b!=e&&(e="");switch(e){case "number":case "boolean":break;case "object":a=a.valueOf();b=b.valueOf();break;default:return f.compareString(a,b,d,c)}e=a>b?1:a<b?-1:0;return d?-e:e};return f});