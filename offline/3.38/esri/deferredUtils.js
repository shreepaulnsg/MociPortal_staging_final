// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/deferredUtils",["dojo/_base/lang","dojo/has","./kernel"],function(h,k,l){var g={_dfdCanceller:function(a){a.canceled=!0;var b=a._pendingDfd;if(!a.isFulfilled()&&b&&!b.isFulfilled()){b.cancel();var c=b.results&&b.results[1]}a._pendingDfd=null;return c},_fixDfd:function(a){var b=a.then;a.then=function(c,d,m){if(c){var f=c;c=function(e){return e&&e._argsArray?f.apply(null,e):f(e)}}return b.call(this,c,d,m)};return a},_resDfd:function(a,b,c){var d=b.length;1===d?c?a.errback(b[0]):a.callback(b[0]):
1<d?(b._argsArray=!0,a.callback(b)):a.callback()}};k("extend-esri")&&h.mixin(l,g);return g});