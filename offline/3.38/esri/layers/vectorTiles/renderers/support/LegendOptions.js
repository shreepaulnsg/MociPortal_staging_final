// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/renderers/support/LegendOptions","require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(b,c,k,f,l,d){Object.defineProperty(c,"__esModule",{value:!0});b=function(e){function a(){var g=null!==e&&e.apply(this,arguments)||this;g.title=null;return g}k(a,e);var h=a;a.prototype.clone=function(){return new h({title:this.title})};f([d.property({type:String,
json:{write:!0}})],a.prototype,"title",void 0);return a=h=f([d.subclass("esri.renderers.support.LegendOptions")],a)}(d.declared(l));c.LegendOptions=b;c.default=b});