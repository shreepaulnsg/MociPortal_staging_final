// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/ArrayUtil",["dojo/_base/array"],function(k){var f={},l={}.toString();f.arraysEqual=function(b,c){if(!b&&!c)return!0;if(!b||!c||b.length!==c.length)return!1;for(var d=0;d<b.length;d++)if(b[d]!==c[d])return!1;return!0};f.composeIdentityFunction=function(b,c){var d="function"===typeof b?b:b?function(a){return a[b]}:function(a){return a};return function(a){return(a=d(a))&&a.toString?a.toString():c&&void 0===a?a:String(a)}};f.removeDuplicates=function(b,c){var d=
[],a={};c=f.composeIdentityFunction(c,!0);k.forEach(b,function(e,h){var g=c(e);g===l&&(void 0===e["__ArrayUtil.js_uniqueKey__"]&&(e["__ArrayUtil.js_uniqueKey__"]="__ArrayUtil.js_uniqueKey__"+h),g=e["__ArrayUtil.js_uniqueKey__"]);void 0===g||g in a||(a[g]=e,d.push(e))});return d};f.splitArrayToBunches=function(b,c){c=c||100;for(var d=[],a,e=0,h=b.length;e<h;e++)a&&a.length!==c||(a=[],d.push(a)),a.push(b[e]);return d};return f});