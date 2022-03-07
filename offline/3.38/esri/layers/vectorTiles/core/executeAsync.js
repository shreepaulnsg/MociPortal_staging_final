// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/executeAsync","require exports dojo/has ./nextTick ./now ./promiseUtils".split(" "),function(n,p,q,g,h,k){function l(){var b=0===a.length;if(!b){for(var f=h();!b&&6>h()-f;){var d=a[c];if(d){if(!0===d()){var m=e.get(d);a[c]=null;e.delete(d);m()}c=(c+1)%a.length}else a.splice(c,1),c=(b=0===a.length)?0:c%a.length}b||g(l)}}var a=[],e=new Map,c=0;return function(b){return b?k.create(function(f){a.push(b);e.set(b,f);1===a.length&&g(l)},function(){a[a.indexOf(b)]=null;
e.delete(b)}):k.reject(new TypeError("callback is not a function"))}});