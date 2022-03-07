// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/promiseUtils","require exports dojo/Deferred dojo/when dojo/promise/all ./Error".split(" "),function(u,f,h,n,p,r){function q(a){if(a){if("function"!==typeof a.forEach){var c=Object.keys(a),d=c.map(function(k){return a[k]});return q(d).then(function(k){var l={};c.forEach(function(m,t){return l[m]=k[t]});return l})}var b=new h,e=[],g=a.length;0===g&&b.resolve(e);a.forEach(function(k){var l={promise:k};e.push(l);k.then(function(m){l.value=m}).catch(function(m){l.error=
m}).then(function(){--g;0===g&&b.resolve(e)})});return b.promise}}Object.defineProperty(f,"__esModule",{value:!0});f.all=function(a){return p(a)};f.filter=function(a,c){var d=a.slice();return p(a.map(function(b,e){return c(b,e)})).then(function(b){return d.filter(function(e,g){return b[g]})})};f.eachAlways=q;f.create=function(a,c){var d=new h(c);a(function(b){void 0===b&&(b=null);return n(b).then(d.resolve)},d.reject);return d.promise};f.reject=function(a){var c=new h;c.reject(a);return c.promise};
f.resolve=function(a){void 0===a&&(a=null);var c=new h;c.resolve(a);return c.promise};f.after=function(a,c){void 0===c&&(c=null);var d=0,b=new h(function(){d&&(clearTimeout(d),d=0)});d=setTimeout(function(){b.resolve(c)},a);return b.promise};f.timeout=function(a,c,d){var b=0,e=new h(a.cancel);a.then(function(g){e.isFulfilled()||(e.resolve(g),b&&(clearTimeout(b),b=0))});a.catch(function(g){e.isFulfilled()||(e.reject(g),b&&(clearTimeout(b),b=0))});b=setTimeout(function(){var g=d||new r("promiseUtils:timeout",
"The wrapped promise did not resolve within "+c+" ms");e.reject(g)},c);return e.promise};f.wrapCallback=function(a){var c=!1,d=new h(function(){return c=!0});a(function(b){c||d.resolve(b)});return d.promise};f.isThenable=function(a){return a&&"function"===typeof a.then};f.when=function(a){return n(a)}});