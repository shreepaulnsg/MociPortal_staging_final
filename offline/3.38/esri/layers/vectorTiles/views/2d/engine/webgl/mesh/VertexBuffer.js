// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/mesh/VertexBuffer",["require","exports"],function(g,e){Object.defineProperty(e,"__esModule",{value:!0});var h=function(){function b(a,c,d){this.data=a;this.stride=c;this.vertexCount=d}b.decode=function(a){var c=new Uint32Array(a.data);return new b(c,a.stride,a.vertexCount)};return b}();e.default=h;g=function(){function b(a,c,d){this.geometryType=a;this.indexBuffer=new Uint32Array(c);this.namedBuffers=d}b.decode=function(a){var c=a.geometryType,
d=a.indexBuffer,k={},f;for(f in a.namedBuffers)k[f]=h.decode(a.namedBuffers[f]);return new b(c,d,k)};return b}();e.VertexBuffers=g});