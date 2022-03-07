// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/arcade/ImmutableArray",["require","exports"],function(d,e){return function(){function b(a){void 0===a&&(a=[]);this._elements=a}b.prototype.length=function(){return this._elements.length};b.prototype.get=function(a){return this._elements[a]};b.prototype.toArray=function(){for(var a=[],c=0;c<this.length();c++)a.push(this.get(c));return a};return b}()});