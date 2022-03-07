// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/ProjectionUtil","esri/dijit/geoenrichment/Deferred esri/SpatialReference esri/geometry/jsonUtils esri/dijit/geoenrichment/utils/CoordinateUtil esri/dijit/geoenrichment/utils/PolygonUtil esri/dijit/geoenrichment/utils/UrlUtil esri/dijit/geoenrichment/utils/requests/UniversalClient esri/dijit/geoenrichment/utils/requests/EveryRequest".split(" "),function(t,u,v,q,z,A,B,C){function w(a){return a&&a.spatialReference||a instanceof u&&a||a&&new u(a)||new u(q.WEB_MERCATOR_WKID)}
function D(a,b){var c=[];try{for(var d=0;d<a.length;d++)c.push(q.toSpatialReference(a[d],b))}catch(e){console.log(e)}return(new t).resolve(c)}function E(a,b){function c(f){k.push(function(){return F(m,f,e,b)})}var d=a[0],e=v.getJsonType(d),m={outSR:b.wkid||b.toJson(),inSR:d.spatialReference.wkid||d.spatialReference.toJson()},k=[],l=0,g=[];1==a.length?g.push(d):a.forEach(function(f){var n=z.getNumberOfPoints(f);l+=n;if(1E4<l){var p=[];g.length?(p.push(f),l=n):(g.push(f),l=0);c(g);g=p}else g.push(f)});
g.length&&c(g);return C(k,{stopOnError:!0}).then(function(f){for(var n=f[0],p=1;p<f.length;p++)n=n.concat(f[p]);return n},function(f){console.log(f);return[]})}function F(a,b,c,d){a.geometries=x(b);return r("project",a).then(function(e){return y(e.geometries,c,d)})}function x(a){var b=a.map(function(c){c=c.toJson();delete c.spatialReference;return c});return{geometryType:v.getJsonType(a[0]),geometries:b}}function y(a,b,c){var d=v.getGeometryType(b),e=c.toJson();return a.map(function(m){m.spatialReference=
e;return new d(m)})}var h={},r;h.setGeometryServiceUrl=function(a){A.registerCORS(a);r=function(b,c){return B.requestPublicFirst({url:a,urlSuffix:b},{content:c})}};h.setGeometryRequest=function(a){r=a};h.getSpatialReference=w;h.projectGeometries=function(a,b){var c=w(b);b=Array.isArray(a)?a:[a];if(!b.length)return(new t).resolve(a);var d={},e=b.slice(),m=0;b=b.filter(function(k,l){if(k.spatialReference&&k.spatialReference.wkid!==c.wkid)return d[l]=m++,!0});return b.length?(q.testSpatialReferenceWKID(c)&&
q.testSpatialReferenceWKID(b[0].spatialReference)?D(b,c):E(b,c)).then(function(k){e.forEach(function(l,g){void 0!==d[g]&&(e[g]=k[d[g]])});return Array.isArray(a)?e:e[0]}):(new t).resolve(a)};h.unionGeometries=function(a){var b=w(a[0].spatialReference);a={sr:b.wkid||b.toJson(),geometries:x(a)};return r("union",a).then(function(c){return y([c.geometry],c.geometryType,b)[0]})};h.geometriesToJson=x;h.geometriesFromJson=y;return h});