// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/HandleOwner","require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ./Accessor ./Handles ./accessorSupport/decorators".split(" "),function(k,l,f,c,g,h,b){return function(d){function a(){var e=d.call(this)||this;e.handles=new h;return e}f(a,d);a.prototype.destroy=function(){this.handles.destroy()};c([b.property({readOnly:!0})],a.prototype,"handles",void 0);return a=c([b.subclass("esri.core.HandleOwner")],a)}(b.declared(g))});