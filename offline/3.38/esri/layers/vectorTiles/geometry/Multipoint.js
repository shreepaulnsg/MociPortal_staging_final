// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/geometry/Multipoint","require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/lang ../core/accessorSupport/decorators ./Extent ./Geometry ./Point ./support/zmUtils".split(" "),function(q,L,H,k,B,g,I,J,C,D){function E(m){return function(d,h){return null==d?h:null==h?d:m(d,h)}}q=function(m){function d(){for(var a=0;a<arguments.length;a++);a=m.call(this)||this;a.points=[];a.type="multipoint";return a}H(d,m);var h=d;d.prototype.normalizeCtorArgs=
function(a,b){if(!a&&!b)return null;var c={};Array.isArray(a)?(c.points=a,c.spatialReference=b):!a||"esri.geometry.SpatialReference"!==a.declaredClass&&null==a.wkid?(a.points&&(c.points=a.points),a.spatialReference&&(c.spatialReference=a.spatialReference),a.hasZ&&(c.hasZ=a.hasZ),a.hasM&&(c.hasM=a.hasM)):c.spatialReference=a;if(a=c.points&&c.points[0])void 0===c.hasZ&&void 0===c.hasM?(c.hasZ=2<a.length,c.hasM=!1):void 0===c.hasZ?c.hasZ=3<a.length:void 0===c.hasM&&(c.hasM=3<a.length);return c};Object.defineProperty(d.prototype,
"extent",{get:function(){var a=this.points;if(!a.length)return null;var b=new I,c=this.hasZ,r=this.hasM,F=c?3:2,f=a[0],n=E(Math.min),p=E(Math.max),t=f[0],u=f[1],v=f[0];f=f[1];for(var w,x,y,z,A=0,K=a.length;A<K;A++){var e=a[A],l=e[0],G=e[1];t=n(t,l);u=n(u,G);v=p(v,l);f=p(f,G);c&&2<e.length&&(l=e[2],w=n(w,l),y=p(y,l));r&&e.length>F&&(e=e[F],x=n(x,e),z=p(z,e))}b.xmin=t;b.ymin=u;b.xmax=v;b.ymax=f;b.spatialReference=this.spatialReference;c?(b.zmin=w,b.zmax=y):(b.zmin=null,b.zmax=null);r?(b.mmin=x,b.mmax=
z):(b.mmin=null,b.mmax=null);return b},enumerable:!0,configurable:!0});d.prototype.writePoints=function(a,b,c,r){b.points=B.clone(this.points)};d.prototype.addPoint=function(a){this.clearCache();D.updateSupportFromPoint(this,a);Array.isArray(a)?this.points.push(a):this.points.push(a.toArray());return this};d.prototype.clone=function(){var a={points:B.clone(this.points),spatialReference:this.spatialReference};this.hasZ&&(a.hasZ=!0);this.hasM&&(a.hasM=!0);return new h(a)};d.prototype.getPoint=function(a){if(!this._validateInputs(a))return null;
a=this.points[a];var b={x:a[0],y:a[1],spatialReference:this.spatialReference},c=2;this.hasZ&&(b.z=a[2],c=3);this.hasM&&(b.m=a[c]);return new C(b)};d.prototype.removePoint=function(a){if(!this._validateInputs(a))return null;this.clearCache();return new C(this.points.splice(a,1)[0],this.spatialReference)};d.prototype.setPoint=function(a,b){if(!this._validateInputs(a))return this;this.clearCache();D.updateSupportFromPoint(b);this.points[a]=b.toArray();return this};d.prototype.toJSON=function(a){return this.write(null,
a)};d.prototype._validateInputs=function(a){return null!=a&&0<=a&&a<this.points.length};k([g.property({dependsOn:["points","hasZ","hasM","spatialReference"]})],d.prototype,"cache",void 0);k([g.property({dependsOn:["cache"]})],d.prototype,"extent",null);k([g.property({type:[[Number]],json:{write:{isRequired:!0}}})],d.prototype,"points",void 0);k([g.writer("points")],d.prototype,"writePoints",null);return d=h=k([g.subclass("esri.geometry.Multipoint")],d)}(g.declared(J));q.prototype.toJSON.isDefaultToJSON=
!0;return q});