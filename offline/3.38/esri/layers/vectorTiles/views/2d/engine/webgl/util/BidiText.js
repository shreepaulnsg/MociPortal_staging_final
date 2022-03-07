// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/util/BidiText",["require","exports","dojox/string/BidiEngine"],function(f,c,d){Object.defineProperty(c,"__esModule",{value:!0});var b=new d;c.bidiText=function(a){if(!b.hasBidiChar(a))return[a,!1];var e="rtl"===b.checkContextual(a)?"IDNNN":"ICNNN";return[b.bidiTransform(a,e,"VLYSN"),!0]}});