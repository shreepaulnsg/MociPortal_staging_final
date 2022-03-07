// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/ArrayPool",["require","exports","./ObjectPool"],function(d,k,f){function g(b){b.length=0}var h=Array.prototype.splice;d=function(){function b(a,c){void 0===a&&(a=50);void 0===c&&(c=50);this._pool=new f(Array,!1,g,c,a)}b.prototype.acquire=function(){return this._pool.acquire()};b.prototype.copy=function(a){var c=this.acquire();a.unshift(0,0);h.apply(c,a);a.splice(0,2);return c};b.prototype.release=function(a){this._pool.release(a)};b.acquire=function(){return e.acquire()};
b.copy=function(a){return e.copy(a)};b.release=function(a){return e.release(a)};return b}();var e=new d(100);return d});