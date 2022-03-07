// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var z=function(w,p){z=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,r){u.__proto__=r}||function(u,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(u[t]=r[t])};return z(w,p)};return function(w,p){function u(){this.constructor=w}if("function"!==typeof p&&null!==p)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");z(w,p);w.prototype=null===p?Object.create(p):(u.prototype=p.prototype,new u)}}();
define("esri/arcade/featureset/sources/FeatureLayerMemory","require exports ../../../graphic ../support/FeatureSet ../support/IdSet ../support/shared ../../polyfill/promiseUtils ../../../geometry/Geometry ../../../geometry/geometryEngineAsync ../../../geometry/jsonUtils ../../../layers/Field".split(" "),function(z,w,p,u,r,t,k,E,v,F,B){return function(C){function f(a){var b=C.call(this,a)||this;b.source=[];a.spatialReference&&(b.spatialReference=a.spatialReference);b.types=a.types;b.geometryType=a.geometryType;
b.typeIdField=a.typeIdField;b.globalIdField=a.globalIdField;b.objectIdField=a.objectIdField;b.fields=a.fields.slice(0);b.source=a.source;b._transparent=!0;b._maxProcessing=1E3;b._wset=null;return b}__extends(f,C);f.prototype._maxQueryRate=function(){return t.defaultMaxRecords};f.prototype.load=function(){var a=this;null===this._loadPromise&&(this._loadPromise=k.create(function(b,c){a._initialiseFeatureSet();b(a)}));return this._loadPromise};f.prototype._initialiseFeatureSet=function(){this._databaseType=
t.FeatureServiceDatabaseType.Standardised};f.prototype.optimisePagingFeatureQueries=function(a){};f.prototype.relationshipMetaData=function(){return[]};Object.defineProperty(f.prototype,"gdbVersion",{get:function(){return""},enumerable:!1,configurable:!0});f.prototype.nativeCapabilities=function(){return{title:"",source:this,canQueryRelated:!1,capabilities:{query:{maxRecordCount:1E3},queryRelated:{supportsOrderBy:!1,supportsPagination:!1}},databaseType:this._databaseType,requestStandardised:!1}};
f.prototype._allFeatures=function(){return this.source};f.prototype._isInFeatureSet=function(a){return t.IdState.InFeatureSet};f.prototype.isTable=function(){return null===this.geometryType||""===this.geometryType};f.prototype._transformSetWithIdChanges=function(a){};f.prototype._candidateIdTransform=function(a){return a};f.prototype._getSet=function(a){var b=this;return null===this._wset?this._ensureLoaded().then(function(){return b._getFilteredSet("",null,null,null,a)}).then(function(c){return b._wset=
c}):k.resolve(this._wset)};f.prototype._getFilteredSet=function(a,b,c,d,h){var g=this;try{return this._ensureLoaded().then(function(){if(g.isTable()&&b&&null!==a&&""!==a)return new r([],[],!0,null);if(null===g._wset){var q=[];g._allFeatures().forEach(function(l){void 0===l.geometry&&(l.geometry=null);var e=l.attributes[g.objectIdField];q.push(e);g._featureCache[e]=l});g._wset=new r([],q,!1,null)}var x=g._wset._known.slice(0);g._checkCancelled(h);return g.fetchAndRefineFeaturesByWhere(x,c,h).then(function(l){g._checkCancelled(h);
return null!==b?g.fetchAndRefineFeaturesSpatially(l,b,a,h).then(function(e){return new r([],e,!1,null)}):new r([],l,!1,null)})})}catch(q){return k.reject(q)}};f.prototype.executeSpatialRelationTest=function(a,b,c,d){if(null===a.geometry)return k.resolve(!1);switch(b){case "esriSpatialRelEnvelopeIntersects":return b=t.shapeExtent(c),a=t.shapeExtent(a.geometry),v.intersects(b,a);case "esriSpatialRelIntersects":return v.intersects(c,a.geometry);case "esriSpatialRelContains":return v.contains(c,a.geometry);
case "esriSpatialRelOverlaps":return v.overlaps(c,a.geometry);case "esriSpatialRelWithin":return v.within(c,a.geometry);case "esriSpatialRelTouches":return v.touches(c,a.geometry);case "esriSpatialRelCrosses":return v.crosses(c,a.geometry);case "esriSpatialRelRelation":return v.relate(c,a.geometry,d)}};f.prototype.executeWhereTest=function(a,b){return b.testFeature(a)};f.prototype.fetchAndRefineFeaturesSpatially=function(a,b,c,d){var h=[];d=[];var g="";0<=c.indexOf("esriSpatialRelRelation")&&(g=c.split(":")[1],
c="esriSpatialRelRelation");for(var q=0;q<a.length;q++){var x=this._featureFromCache(a[q]);d.push(this.executeSpatialRelationTest(x,c,b,g))}return 0===d.length?k.resolve(h):k.all(d).then(function(l){for(var e=0;e<a.length;e++)!0===l[e]&&h.push(a[e]);return h})};f.prototype.fetchAndRefineFeaturesByWhere=function(a,b,c){c=[];if(null===b)return k.resolve(a);for(var d=0;d<a.length;d++){var h=this._featureFromCache(a[d]);this.executeWhereTest(h,b)&&c.push(a[d])}return k.resolve(c)};f.prototype._getFeatures=
function(a,b,c,d){d=[];-1!==b&&void 0===this._featureCache[b]&&d.push(b);for(var h=a._lastFetchedIndex;h<a._known.length&&!(a._lastFetchedIndex+=1,void 0===this._featureCache[a._known[h]]&&(a._known[h]!==b&&d.push(a._known[h]),d.length>c));h++);return 0===d.length?k.resolve("success"):k.reject(Error("Unaccounted for Features. Not in Feature Collection"))};f.prototype._refineSetBlock=function(a,b,c){return k.resolve(a)};f.prototype._stat=function(a,b,c,d,h,g,q){return k.resolve({calculated:!1})};f.prototype._canDoAggregates=
function(a,b,c,d,h){return k.resolve(!1)};f._cloneAttr=function(a){var b={},c;for(c in a)b[c]=a[c];return b};f.create=function(a,b){var c=b.toJson(),d=a.layerDefinition.objectIdField,h=a.layerDefinition.globalIdField?a.layerDefinition.globalIdField:"",g=a.layerDefinition.geometryType,q=a.layerDefinition.typeIdField?a.layerDefinition.typeIdField:"",x=[];if(a.layerDefinition.types)for(var l=0,e=a.layerDefinition.types;l<e.length;l++)x.push(e[l]);void 0===g&&(g=a.featureSet.geometryType);void 0===g&&
(g="");l=a.featureSet.features;if(""===d||void 0===d){for(var m=!1,n=0,y=a.layerDefinition.fields;n<y.length;n++)if(e=y[n],"oid"===e.type||"esriFieldTypeOID"===e.type){d=e.name;m=!0;break}if(!1===m){d="FID";m=!0;for(n=0;m;){y=!0;for(var A=0,D=a.layerDefinition.fields;A<D.length;A++)if(e=D[A],e.name===d){y=!1;break}!0===y?m=!1:(n++,d="FID"+n.toString())}a.layerDefinition.fields.push({type:"esriFieldTypeOID",name:d,alias:d});e=[];for(m=0;m<l.length;m++)e.push({geometry:a.featureSet.features[m].geometry,
attributes:a.featureSet.features[m].attributes?this._cloneAttr(a.featureSet.features[m].attributes):{}}),e[m].attributes[d]=m;l=e}}m=[];n=0;for(a=a.layerDefinition.fields;n<a.length;n++)e=a[n],e instanceof B?m.push(e):m.push(new B(e));a=[];for(n=0;n<l.length;n++)e=l[n],e.geometry&&!1===e.geometry instanceof E&&void 0===e.geometry.spatialReference&&(e.geometry.spatialReference=c),a.push(new p(null===e.geometry||void 0===e.geometry?null:F.fromJson(e.geometry),null,e.attributes));return new f({source:a,
types:x,typeIdField:q,globalIdField:h,fields:m,objectIdField:d,geometryType:g,spatialReference:b})};f.prototype.canBeBigDataFeatureSet=function(){return!1};f.prototype.shouldBeResolvedAsBigData=function(){return!1};f.prototype.queryAttachments=function(a,b,c,d){return k.resolve([])};f.prototype.getFeatureByObjectId=function(a,b){b=0;for(var c=this.source;b<c.length;b++){var d=c[b];if(d.attributes[this.objectIdField]===a)return k.resolve(d)}return k.resolve(null)};f.prototype.getIdentityUser=function(){return k.resolve("")};
f.prototype.getOwningSystemUrl=function(){return k.resolve("")};return f}(u)});