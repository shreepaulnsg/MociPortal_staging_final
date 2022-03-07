// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/renderers/SymbolRenderer",["require","exports","./IconRenderer","./SDFRenderer"],function(v,w,p,q){return function(){function b(){this._iconRenderer=new p;this._sdfRenderer=new q}b.prototype.dispose=function(){this._iconRenderer&&(this._iconRenderer.dispose(),this._iconRenderer=null);this._sdfRenderer&&(this._sdfRenderer.dispose(),this._sdfRenderer=null)};b.prototype.render=function(c,a,d,e,f,g,h,k,r,t,l,m,u,n){a.hasData()&&(0<a.markerPerPageElementsMap.size&&
this._iconRenderer.render(c,a,d,e,f,g,h,k,r,l,m,n),0<a.glyphPerPageElementsMap.size&&this._sdfRenderer.render(c,a,d,e,f,g,h,k,t,l,m,u,n))};return b}()});