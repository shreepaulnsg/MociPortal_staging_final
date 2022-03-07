// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/libs/gl-matrix/common",[],function(){if(!c)var c=1E-6;if(!d)var d="undefined"!==typeof Float32Array?Float32Array:Array;if(!e)var e=Math.random;var b={GLMAT_EPSILON:c,GLMAT_ARRAY_TYPE:d,GLMAT_RANDOM:e,setMatrixArrayType:function(a){b.GLMAT_ARRAY_TYPE=a}},f=Math.PI/180,g=180/Math.PI;b.toRadian=function(a){return a*f};b.toDegree=function(a){return a*g};b.setMatrixArrayType(Array);return b});