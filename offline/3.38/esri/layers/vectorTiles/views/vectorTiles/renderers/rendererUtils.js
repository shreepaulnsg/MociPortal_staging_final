// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/renderers/rendererUtils",["require","exports"],function(e,b){Object.defineProperty(b,"__esModule",{value:!0});var c=new Uint32Array(1),a=new Uint8Array(c.buffer);b.int32To4Bytes=function(d){c[0]=d|0;return[a[0],a[1],a[2],a[3]]}});