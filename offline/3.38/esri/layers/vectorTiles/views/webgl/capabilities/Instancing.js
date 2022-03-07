// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/webgl/capabilities/Instancing",["require","exports","./isWebGL2Context"],function(e,b,c){Object.defineProperty(b,"__esModule",{value:!0});b.load=function(a,d){return c.default(a)?{drawArraysInstanced:a.drawArraysInstanced.bind(a),drawElementsInstanced:a.drawElementsInstanced.bind(a),vertexAttribDivisor:a.vertexAttribDivisor.bind(a)}:d.angleInstancedArrays?null:(a=a.getExtension("ANGLE_instanced_arrays"))?{drawArraysInstanced:a.drawArraysInstancedANGLE.bind(a),
drawElementsInstanced:a.drawElementsInstancedANGLE.bind(a),vertexAttribDivisor:a.vertexAttribDivisorANGLE.bind(a)}:null}});