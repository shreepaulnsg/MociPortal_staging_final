// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/number",["require","exports"],function(h,b){Object.defineProperty(b,"__esModule",{value:!0});var e=new Float32Array(1),f=new Uint32Array(e.buffer);b.nextHighestPowerOfTwo=function(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;return a};b.toUint32=function(a){e[0]=a;return f[0]};b.i1616to32=function(a,c){return 65535&a|c<<16};b.i8888to32=function(a,c,d,g){return a&255|(c&255)<<8|(d&255)<<16|g<<24};b.i8816to32=function(a,c,d){return a&255|
(c&255)<<8|d<<16};b.numTo32=function(a){return a|0}});