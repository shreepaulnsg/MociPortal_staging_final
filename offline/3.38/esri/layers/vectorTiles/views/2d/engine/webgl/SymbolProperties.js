// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/SymbolProperties",["require","exports","../../../../core/ObjectPool"],function(b,c,d){Object.defineProperty(c,"__esModule",{value:!0});b=function(){function a(){this.color=[0,0,0,0];this.haloColor=[0,0,0,0];this.haloSize=0;this.size=12;this.vAnchor=this.hAnchor=this.offsetY=this.offsetX=this.angle=0}a.prototype.acquire=function(e,f,g,h,k,l,m,n,p){this.color=e;this.haloColor=f;this.haloSize=g;this.size=h;this.angle=k;this.offsetX=l;this.offsetY=
m;this.hAnchor=n;this.vAnchor=p};a.prototype.release=function(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0;this.vAnchor=this.hAnchor=this.offsetY=this.offsetX=this.angle=this.size=this.haloSize=this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0};a.pool=new d(a);return a}();c.TextProperties=b});