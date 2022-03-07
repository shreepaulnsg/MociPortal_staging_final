// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tasks/locationproviders/GeometryLocationProvider",["../../declare","dojo/json","../../geometry/jsonUtils","./LocationProviderClientBase"],function(e,f,c,g){return e("esri.tasks.locationproviders.GeometryLocationProvider",g,{geometryField:null,getGeometry:function(a){if(a=a.attributes[this.geometryField])try{"string"===typeof a&&(a=f.parse(a));if(!a.spatialReference)var d=this.inSpatialReference;var b=c.fromJson(a);if(b&&c.getJsonType(b)===this.geometryType)return d&&b.setSpatialReference(d),
b}catch(h){}}})});