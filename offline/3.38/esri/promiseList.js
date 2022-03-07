// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/promiseList",["dojo/_base/array","dojo/Deferred","dojo/when"],function(p,m,q){var r=p.forEach;return function(e){function n(h,b){f[b]=h;c.progress([h,b]);0===--t&&c.resolve(f)}var d,a;e instanceof Array?a=e:e&&"object"===typeof e&&(d=e);var g=[];if(d){a=[];for(var k in d)Object.hasOwnProperty.call(d,k)&&(g.push(k),a.push(d[k]));var f={}}else a&&(f=[]);if(!a||!a.length)return(new m).resolve(f);var c=new m;c.promise.always(function(){f=g=null});var t=a.length;r(a,function(h,b){d||g.push(b);
q(h,function(l){c.isFulfilled()||n(l,g[b])},function(l){c.isFulfilled()||n(l,g[b])})});return c.promise}});