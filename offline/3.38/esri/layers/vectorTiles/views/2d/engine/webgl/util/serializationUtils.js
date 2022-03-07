// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/util/serializationUtils",["require","exports"],function(g,e){Object.defineProperty(e,"__esModule",{value:!0});e.serializeList=function(a,b){if(null===b)a.writeInt32(0);else{a.writeInt32(b.length);for(var c=0;c<b.length;c++)b[c].serialize(a);return a}};e.deserializeList=function(a,b,c){var d=a.readInt32();d=Array(d);for(var f=0;f<d.length;f++)d[f]=b.deserialize(a,c);return d}});