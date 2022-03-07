// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/tasks/support/QuantizationParameters","require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../core/JSONSupport ../../core/kebabDictionary ../../core/lang ../../core/accessorSupport/decorators".split(" "),function(f,g,l,c,m,n,p,q,b){Object.defineProperty(g,"__esModule",{value:!0});var h=p({upperLeft:"upper-left",lowerLeft:"lower-left"});f=function(e){function a(){var d=null!==e&&e.apply(this,arguments)||this;
d.extent=null;d.mode="view";d.originPosition="upper-left";return d}l(a,e);var k=a;a.prototype.clone=function(){return new k(q.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))};c([b.property({type:m.Extent,json:{write:!0}})],a.prototype,"extent",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"mode",void 0);c([b.property({type:String,json:{read:h.read,write:h.write}})],a.prototype,"originPosition",void 0);c([b.property({type:Number,
json:{write:!0}})],a.prototype,"tolerance",void 0);return a=k=c([b.subclass("esri.tasks.support.QuantizationParameters")],a)}(b.declared(n));g.default=f});