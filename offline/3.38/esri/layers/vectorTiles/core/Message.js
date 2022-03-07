// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/Message",["require","exports","dojo/string"],function(g,h,e){return function(){function a(f,b,c){this instanceof a&&(this.name=f,this.message=b&&e.substitute(b,c,function(d){return null==d?"":d})||"",this.details=c)}a.prototype.toString=function(){return"["+this.name+"]: "+this.message};return a}()});