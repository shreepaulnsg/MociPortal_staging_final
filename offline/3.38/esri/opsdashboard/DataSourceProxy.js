// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/opsdashboard/DataSourceProxy","dojo/_base/declare dojo/_base/lang dojo/json dojo/Deferred ../layers/Field ../tasks/FeatureSet ../renderers/jsonUtils ./core/messageHandler ./core/errorMessages ./core/MessageReceiver".split(" "),function(l,f,m,g,n,p,q,c,h,r){return l([r],{id:null,name:null,mapWidgetId:null,objectIdFieldName:null,displayFieldName:null,typeIdFieldName:null,fields:null,types:null,geometryType:null,supportsSelection:!1,isBroken:!1,_popupInfo:null,_renderer:null,advancedQueryCapabilities:null,
constructor:function(){this.fields||(this.fields=[]);for(var a=0;a<this.fields.length;a++){var b=this.fields[a];"string"===typeof b&&(b=m.parse(b));this.fields[a]=new n(b)}},executeQuery:function(a){return c._sendMessageWithReply({functionName:"executeQuery",args:{dataSourceId:this.id,query:a}}).then(f.hitch(this,function(b){this.isBroken=!1;return new p(b.featureSet)}),f.hitch(this,function(b){this.isBroken=!0;throw b;}))},getAssociatedSelectionDataSourceId:function(){return c._sendMessageWithReply({functionName:"getAssociatedSelectionDataSource",
args:{dataSourceId:this.id}}).then(f.hitch(this,function(a){return a.dataSourceId}))},selectFeaturesByObjectIds:function(a){if(!Array.isArray(a))throw Error(h.invalidObjectIdArray);if(!this.supportsSelection)throw Error(h.selectionNotSupported);c._sendMessage({functionName:"selectFeaturesByIds",args:{dataSourceId:this.id,objectIds:a}})},selectFeatures:function(a){if(!this.supportsSelection)throw Error(h.selectionNotSupported);c._sendMessage({functionName:"selectFeatures",args:{dataSourceId:this.id,
query:a}})},clearSelection:function(){this.supportsSelection&&c._sendMessage({functionName:"clearSelection",args:{dataSourceId:this.id}})},getPopupInfo:function(){return this._popupInfo?(new g).resolve(this._popupInfo):c._sendMessageWithReply({functionName:"getPopupInfo",args:{dataSourceId:this.id}}).then(f.hitch(this,function(a){return this._popupInfo=a.popupInfo}))},getRenderer:function(){return this._renderer?(new g).resolve(this._renderer):c._sendMessageWithReply({functionName:"getRenderer",args:{dataSourceId:this.id}}).then(f.hitch(this,
function(a){return a.renderer?this._renderer=q.fromJson(a.renderer):null}))},getAdvancedQueryCapabilities:function(){return this.advancedQueryCapabilities?(new g).resolve(this.advancedQueryCapabilities):c.isNative?c._sendMessageWithReply({functionName:"getAdvancedQueryCapabilities",args:{dataSourceId:this.id}}).then(f.hitch(this,function(a){return a.advancedQueryCapabilities?this.advancedQueryCapabilities=a.advancedQueryCapabilities:null})):(new g).resolve(null)},_findField:function(a){if(!a||!Array.isArray(this.fields))return null;
for(var b=0;b<this.fields.length;b++)if(this.fields[b].name===a)return this.fields[b];return null},_findType:function(a){if(!a||!Array.isArray(this.types))return null;for(var b=0;b<this.types.length;b++)if(this.types[b].id===a)return this.types[b];return null},_getCodedValueFromCodedDomain:function(a,b){if(!b||"codedValue"!==b.type)return null;for(var d=0;d<b.codedValues.length;d++)if(b.codedValues[d].code===a)return b.codedValues[d];return null},getTypeFromFeature:function(a){return this.typeIdFieldName?
this._findType(a.attributes[this.typeIdFieldName]):null},getValueFromFeature:function(a,b){var d=this._findField(b);if(!b||!d)return null;var e=a.attributes[b];if(!e&&(e=a.attributes[b.toUpperCase()],!e))return null;if(this.typeIdFieldName===b){var k=this._findType(e);if(k)return k.name}return(a=this.getTypeFromFeature(a))&&Array.isArray(a.domains)&&(b=this._getCodedValueFromCodedDomain(e,a.domains[b]))?b.name:(b=this._getCodedValueFromCodedDomain(e,d.domain))?b.name:e}})});