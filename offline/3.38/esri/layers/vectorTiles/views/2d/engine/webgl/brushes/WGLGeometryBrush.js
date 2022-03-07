// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/brushes/WGLGeometryBrush",["require","exports","../../../../../core/tsSupport/extendsHelper","./WGLBrush","../util/iterator"],function(d,e,k,l,m){Object.defineProperty(e,"__esModule",{value:!0});d=function(b){function c(){return null!==b&&b.apply(this,arguments)||this}k(c,b);c.prototype.draw=function(f,a){var n=this;if(a.canDisplay){var g=this.getGeometryType(),p=a.getDisplayList(f.drawPhase),h=a.getGeometry(g);h&&m.forEachIter(p.ofType(g),function(q){return n.drawGeometry(f,
a,q,h)})}};return c}(l.default);e.default=d});