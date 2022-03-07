// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/accessorSupport/Store",["require","exports","./PropertyOrigin"],function(c,d,e){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function b(){this._values={}}b.prototype.get=function(a){return this._values[a]};b.prototype.originOf=function(a){return e.OriginId.USER};b.prototype.keys=function(){return Object.keys(this._values)};b.prototype.set=function(a,f){this._values[a]=f};b.prototype.clear=function(a){delete this._values[a]};b.prototype.has=function(a){return a in
this._values};return b}();d.default=c});