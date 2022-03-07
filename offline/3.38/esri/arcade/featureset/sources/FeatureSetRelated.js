// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var z=function(x,n){z=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(w,u){w.__proto__=u}||function(w,u){for(var y in u)Object.prototype.hasOwnProperty.call(u,y)&&(w[y]=u[y])};return z(x,n)};return function(x,n){function w(){this.constructor=x}if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");z(x,n);x.prototype=null===n?Object.create(n):(w.prototype=n.prototype,new w)}}();
define("esri/arcade/featureset/sources/FeatureSetRelated","require exports ../../../graphic ../support/FeatureSet ../support/IdSet ../support/shared ../../polyfill/promiseUtils ../../../tasks/RelationshipQuery".split(" "),function(z,x,n,w,u,y,v,A){return function(B){function f(a){var b=B.call(this,a)||this;b.declaredClass="esri.arcade.featureset.sources.FeatureLayerRelated";b._findObjectId=-1;b._requestStandardised=!1;b._removeGeometry=!1;b._overrideFields=null;b.featureObjectId=null;b.relatedLayer=
null;b.relationship=null;a.spatialReference&&(b.spatialReference=a.spatialReference);b._transparent=!0;b._maxProcessing=1E3;b._layer=a.layer;b._wset=null;b._findObjectId=a.objectId;b.featureObjectId=a.objectId;b.relationship=a.relationship;b.relatedLayer=a.relatedLayer;void 0!==a.outFields&&(b._overrideFields=a.outFields);void 0!==a.includeGeometry&&(b._removeGeometry=!1===a.includeGeometry);return b}__extends(f,B);f.prototype._maxQueryRate=function(){return y.defaultMaxRecords};f.prototype.end=function(){return this._layer};
f.prototype.optimisePagingFeatureQueries=function(a){};f.prototype.load=function(){var a=this;null===this._loadPromise&&(this._loadPromise=v.create(function(b,d){v.all([a._layer.load(),a.relatedLayer.load()]).then(function(){a._initialiseFeatureSet();b(a)},d)}));return this._loadPromise};f.prototype.nativeCapabilities=function(){return this.relatedLayer.nativeCapabilities()};Object.defineProperty(f.prototype,"gdbVersion",{get:function(){return this.relatedLayer.gdbVersion},enumerable:!1,configurable:!0});
f.prototype._initialiseFeatureSet=function(){null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference);this.geometryType=this.relatedLayer.geometryType;this.fields=this.relatedLayer.fields.slice(0);if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{for(var a=[],b=[],d=0,g=this.fields;d<g.length;d++){var k=g[d];if("oid"===k.type)a.push(k),b.push(k.name);else for(var c=0,e=this._overrideFields;c<e.length;c++)if(e[c].toLowerCase()===
k.name.toLowerCase()){a.push(k);b.push(k.name);break}}this.fields=a;this._overrideFields=b}if(a=this._layer.nativeCapabilities())this._databaseType=a.databaseType,this._requestStandardised=a.requestStandardised;this.objectIdField=this.relatedLayer.objectIdField;this.hasM=this.relatedLayer.supportsM;this.hasZ=this.relatedLayer.supportsZ;this.typeIdField=this.relatedLayer.typeIdField;this.types=this.relatedLayer.types};f.prototype.databaseType=function(){var a=this;return this.relatedLayer.databaseType().then(function(){a._databaseType=
a.relatedLayer._databaseType;return a._databaseType})};f.prototype.isTable=function(){return this.relatedLayer.isTable()};f.prototype._isInFeatureSet=function(a){return y.IdState.InFeatureSet};f.prototype._transformSetWithIdChanges=function(a){};f.prototype._candidateIdTransform=function(a){return a};f.prototype._getSet=function(a){var b=this;return null===this._wset?this._ensureLoaded().then(function(){return b._getFilteredSet("",null,null,null,a)}).then(function(d){return b._wset=d}):v.resolve(this._wset)};
f.prototype._changeFeature=function(a){for(var b={},d=0,g=this.fields;d<g.length;d++){var k=g[d];b[k.name]=a.attributes[k.name]}return new n({geometry:!0===this._removeGeometry?null:a.geometry,attributes:b})};f.prototype._getFilteredSet=function(a,b,d,g,k){var c=this;return this.databaseType().then(function(e){if(c.isTable()&&b&&null!==a&&""!==a)return e=new u([],[],!0,null);e=c._layer.nativeCapabilities();if(!1===e.canQueryRelated)return e=new u([],[],!0,null);if(e.capabilities.queryRelated&&e.capabilities.queryRelated.supportsPagination)return c._getFilteredSetUsingPaging(a,
b,d,g,k);var l="",m=!1;null!==g&&e.capabilities&&e.capabilities.queryRelated&&!0===e.capabilities.queryRelated.supportsOrderBy&&(l=g.constructClause(),m=!0);var h=new A;h.objectIds=[c._findObjectId];var q=null!==c._overrideFields?c._overrideFields:c._fieldsIncludingObjectId(c.relatedLayer.fields?c.relatedLayer.fields.map(function(p){return p.name}):["*"]);h.outFields=q;h.relationshipId=c.relationship.id;h.definitionExpression="1\x3d1";q=!0;!0===c._removeGeometry&&(q=!1);h.returnGeometry=q;c._requestStandardised&&
(h.sqlFormat="standard");h.outSpatialReference=c.spatialReference;h.orderByFields=""!==l?l.split(","):null;return e.source.queryRelatedFeatures(h).then(function(p){c._checkCancelled(k);var r=p[c._findObjectId]?p[c._findObjectId].features:[];p=[];for(var t=0;t<r.length;t++)c._featureCache[r[t].attributes[c._layer.objectIdField]]=r[t],p.push(r[t].attributes[c._layer.objectIdField]);r=b&&null!==a&&""!==a;t=null!==d&&void 0!==d;return new u(r||t?p:[],r||t?[]:p,m,null)})})};f.prototype._fieldsIncludingObjectId=
function(a){if(null===a)return[this.objectIdField];a=a.slice(0);if(-1<a.indexOf("*"))return a;for(var b=!1,d=0;d<a.length;d++)if(a[d].toUpperCase()===this.objectIdField.toUpperCase()){b=!0;break}!1===b&&a.push(this.objectIdField);return a};f.prototype._getFilteredSetUsingPaging=function(a,b,d,g,k){var c=this;try{var e="",l=!1,m=this._layer.nativeCapabilities();null!==g&&m&&m.capabilities.queryRelated&&!0===m.capabilities.queryRelated.supportsOrderBy&&(e=g.constructClause(),l=!0);return this.databaseType().then(function(h){h=
c._maxQueryRate();var q=m.capabilities.query.maxRecordCount;void 0!==q&&q<h&&(h=q);q=b&&null!==a&&""!==a;var p=null!==d&&void 0!==d,r=null,t=!0;!0===c._removeGeometry&&(t=!1);var D=null!==c._overrideFields?c._overrideFields:c._fieldsIncludingObjectId(c.relatedLayer.fields?c.relatedLayer.fields.map(function(C){return C.name}):["*"]);r=new u(q||p?["GETPAGES"]:[],q||p?[]:["GETPAGES"],l,{outFields:D.join(","),resultRecordCount:h,resultOffset:0,objectIds:[c._findObjectId],where:"1\x3d1",orderByFields:e,
returnGeometry:t,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,fullyResolved:!1}});return c._expandPagedSet(r,h,0,0,k).then(function(){return r})})}catch(h){return v.reject(h)}};f.prototype._expandPagedSet=function(a,b,d,g,k){return this._expandPagedSetFeatureSet(a,b,d,g,k)};f.prototype._clonePageDefinition=function(a){return null===a?null:!0!==a.groupbypage?{groupbypage:!1,outFields:a.outFields,resultRecordCount:a.resultRecordCount,resultOffset:a.resultOffset,where:a.where,objectIds:a.objectIds,
orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,internal:a.internal}:{groupbypage:!0,outFields:a.outFields,resultRecordCount:a.resultRecordCount,useOIDpagination:a.useOIDpagination,generatedOid:a.generatedOid,groupByFieldsForStatistics:a.groupByFieldsForStatistics,resultOffset:a.resultOffset,outStatistics:a.outStatistics,geometry:a.geometry,where:a.where,objectIds:a.objectIds,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,
internal:a.internal}};f.prototype._getPhysicalPage=function(a,b,d){var g=this;try{var k=a.pagesDefinition.internal.lastRetrieved,c=this._layer.nativeCapabilities(),e=new A;!0===this._requestStandardised&&(e.sqlFormat="standard");e.relationshipId=this.relationship.id;e.objectIds=a.pagesDefinition.objectIds;e.resultOffset=a.pagesDefinition.internal.lastRetrieved;e.resultRecordCount=a.pagesDefinition.resultRecordCount;e.outFields=a.pagesDefinition.outFields.split(",");e.definitionExpression=a.pagesDefinition.where;
e.orderByFields=""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):null;e.returnGeometry=a.pagesDefinition.returnGeometry;e.outSpatialReference=this.spatialReference;return c.source.queryRelatedFeatures(e).then(function(l){g._checkCancelled(d);if(a.pagesDefinition.internal.lastRetrieved!==k)return 0;for(var m=l[g._findObjectId]?l[g._findObjectId].features:[],h=0;h<m.length;h++)a.pagesDefinition.internal.set[k+h]=m[h].attributes[g._layer.objectIdField];for(h=0;h<m.length;h++)g._featureCache[m[h].attributes[g._layer.objectIdField]]=
m[h];l=l[g._findObjectId]?!1===l[g._findObjectId].exceededTransferLimit:!0;m.length!==a.pagesDefinition.resultRecordCount&&l&&(a.pagesDefinition.internal.fullyResolved=!0);a.pagesDefinition.internal.lastRetrieved=k+m.length;return m.length})}catch(l){return v.reject(l)}};f.prototype._getFeatures=function(a,b,d,g){var k=this,c=[];-1!==b&&void 0===this._featureCache[b]&&c.push(b);var e=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(a,e))return this._expandPagedSet(a,e,0,0,g).then(function(m){return k._getFeatures(a,
b,d,g)});e=0;for(var l=a._lastFetchedIndex;l<a._known.length;l++){e++;e<=d&&(a._lastFetchedIndex+=1);if("GETPAGES"!==a._known[l]&&void 0===this._featureCache[a._known[l]]&&(a._known[l]!==b&&c.push(a._known[l]),c.length>d))break;if(e>=d&&0===c.length)break}return 0===c.length?v.resolve("success"):v.reject(Error("Unaccounted for Features. Not in Feature Collection"))};f.prototype._refineSetBlock=function(a,b,d){return v.resolve(a)};f.prototype._stat=function(a,b,d,g,k,c,e){return v.resolve({calculated:!1})};
f.prototype._canDoAggregates=function(a,b,d,g,k){return v.resolve(!1)};f.prototype.relationshipMetaData=function(){return this.relatedLayer.relationshipMetaData()};f.prototype.serviceUrl=function(){return this.relatedLayer.serviceUrl()};f.prototype.queryAttachments=function(a,b,d,g,k){return this.relatedLayer.queryAttachments(a,b,d,g,k)};f.prototype.getFeatureByObjectId=function(a,b){return this.relatedLayer.getFeatureByObjectId(a,b)};f.prototype.getIdentityUser=function(){return this.relatedLayer.getIdentityUser()};
f.prototype.getOwningSystemUrl=function(){return this.relatedLayer.getOwningSystemUrl()};f.prototype.getDataSourceFeatureSet=function(){return this.relatedLayer};return f}(w)});