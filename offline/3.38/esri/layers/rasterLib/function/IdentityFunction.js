// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/function/IdentityFunction",["dojo/_base/declare","dojo/_base/lang","./pixelShaders","./RasterFunctionX","./RasterFunctionWebGLMixin"],function(b,c,d,e,f){return b([e,f],{declaredClass:"esri.layers.rasterLib.function.IdentityFunction",functionName:"Identity",supportWebGL:!0,support2D:!0,constructor:function(a){this.functionArguments={raster:null}},bind:function(a){a=this.getSourceRasterInfo(a);if(!a.raster)return Error("The raster input to identity function is invalid.");
this.rasterInfo=c.mixin(a.raster,{});return!0},read2D:function(a){return a.raster},readGL:function(a){this._initializeProgram({fragment:d.identity,fragmentName:"identity"});a=this._setupTextureData(a.raster);var g=this.bindFrameBuffer();this._bindTexture(a.texture,"u_image");this._drawGL();return{extent:a.extent,texture:g.texture}}})});