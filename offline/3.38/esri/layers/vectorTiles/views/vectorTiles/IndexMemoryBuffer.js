// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/IndexMemoryBuffer",["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","./MemoryBuffer"],function(g,d,h,m,c){Object.defineProperty(d,"__esModule",{value:!0});g=function(b){function a(){return b.call(this,12)||this}h(a,b);a.prototype.add=function(e,k,l){var f=this.array;f.push(e);f.push(k);f.push(l)};return a}(c);d.TriangleIndexBuffer=g;c=function(b){function a(){return b.call(this,4)||this}h(a,b);a.prototype.add=
function(e){this.array.push(e)};return a}(c);d.PointElementMemoryBuffer=c});