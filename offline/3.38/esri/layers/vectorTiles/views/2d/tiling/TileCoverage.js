// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/tiling/TileCoverage",["require","exports","../../../core/ArrayPool","../../../core/ObjectPool","./TileSpan"],function(q,r,h,k,l){return function(){function c(b){this.lodInfo=b;this.spans=h.acquire()}c.prototype.release=function(){for(var b=0,d=this.spans;b<d.length;b++)l.pool.release(d[b]);h.release(this.spans)};c.prototype.forEach=function(b,d){var e=this.spans,f=this.lodInfo,m=f.level;if(0!==e.length)for(var g=0;g<e.length;g++){var a=e[g],n=a.row,p=a.colTo;
for(a=a.colFrom;a<=p;a++)b.call(d,m,n,f.normalizeCol(a),f.getWorldForColumn(a))}};c.pool=new k(c,!0);return c}()});