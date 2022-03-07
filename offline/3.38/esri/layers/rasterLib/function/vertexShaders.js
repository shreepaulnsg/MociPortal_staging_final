// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/function/vertexShaders",["dojo/_base/declare","dojo/_base/lang","./vertexShaderScripts"],function(c,d,e){c={shaderType:"vertex",getShader:function(a,f){var b=a.createShader(a.VERTEX_SHADER);a.shaderSource(b,f);a.compileShader(b);a.getShaderParameter(b,a.COMPILE_STATUS)||(b=null);return b}};d.mixin(c,e);return c});