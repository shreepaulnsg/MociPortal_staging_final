// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/MapBuilder","dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/promise/all esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when dojo/dom-construct dojo/dom-geometry esri/graphic esri/graphicsUtils esri/dijit/HomeButton ./layers/MapContentBuilder ./legend/LegendBuilder ./MapLoadTracker ./StaticMap ./WebMapsUtil ./Popup ./Projector ./mobile/MobilePanUtil ../../../dataProvider/supportClasses/data/AreaDataUtil esri/dijit/geoenrichment/utils/DeviceUtil esri/dijit/geoenrichment/ReportPlayer/_devConfig".split(" "),
function(w,u,B,y,q,C,D,z,A,E,F,G,H,I,r,J,x,K,L,M,N){w=w(null,{_mapInfos:null,_mapDivId:0,_mapImageInfos:null,constructor:function(c){u.mixin(this,c);this.reset()},reset:function(){this._mapInfos={};this._mapImageInfos=null},collectAreaMaps:function(c){var a=[];c=c||0;var b=this._mapInfos[c],f;for(f in b){var g=b[f],m=g.node;if(m.parentNode){var h=D.position(m);a.push({areaIndex:c,node:m,x:h.x,y:h.y,position:-1,map:g.map,legend:g.legend,itemId:g.itemId,mapName:g.mapName})}}a.sort(function(l,e){return l.x-
e.x});a.sort(function(l,e){return l.y-e.y});a.forEach(function(l,e){l.position=e});return a},collectAllAreasMaps:function(){var c=[],a;for(a in this._mapInfos)c=c.concat(this.collectAreaMaps(a));return c},setFallbackMapImageInfos:function(c){c?(this._mapImageInfos={},c.forEach(function(a){var b=a.areaIndex||0;(this._mapImageInfos[b]=this._mapImageInfos[b]||{})[a.itemId||a.mapName]=a},this)):this._mapImageInfos=null},createMap:function(c,a){a.areaIndex=a.areaIndex||0;r.setLoadedItemsCache(a.reportData.loadedMapPortalItems);
return q(this._doCreateMap(c,a),function(b){return a.waitForLoad?b&&q(H.waitForLoad(b.map),function(){return b}):b})},_doCreateMap:function(c,a){var b=this;if(a.webMapName)var f=r.getItemByMapName(a.webMapName,!1).then(function(h){return h?h:a.webMapId?r.getItem(a.webMapId).otherwise(function(){return null}):null});else if(a.webMapId)f=r.getItem(a.webMapId).otherwise(function(){return null});else if(a.calculatorFieldName){var g=L.getAreaDataValue({fieldName:a.calculatorFieldName,fieldData:a.fieldData,
featureIndex:a.areaIndex});if(g=g&&g.webMapJson){g=u.mixin({},g);var m=[];a.additionalLayerInfos=[];g.operationalLayers=g.operationalLayers.filter(function(h){if(h.isSiteLayer)return m.push(h),!1;if(h.isLocatorLayer)return!1;if(h.isComparisonLayer){var l=a.stdPolygonsControllers&&a.stdPolygonsControllers.filter(function(p){return p.getCalculatorName()===h.calculatorName});if(l&&l.length){var e=h.featureCollection.layers[0].featureSet,t=l[0].buildGeometryFieldName(e.spatialReference.wkid);e.features.forEach(function(p){p.geometry.spatialReference=
u.mixin({},e.spatialReference);p.attributes[t]=JSON.stringify(p.geometry)});l.forEach(function(p){e.features.forEach(function(d){p.saveGeometryInCalculatorData(d.attributes,t)})})}return!1}return!0});f={item:{type:"Web Map"},itemData:g}}}f=f?q(f).then(function(h){return h||r.getPortalDefaultBasemap()}):r.getPortalDefaultBasemap();return q(f).then(function(h){if(!h||N.emulateErrors.getMapItemError)return(new y).reject(Error("Can't load an item or the item is incorrect."));var l=new y;try{b._prepareFeaturesToShow(a,
m),b._createMapFromItemInfo(h,c,a).then(l.resolve,l.reject)}catch(e){l.reject(e),console.log(e)}return l.promise}).otherwise(this._createFallbackStaticMap.bind(this,a,c))},_prepareFeaturesToShow:function(c,a){var b={},f=c.areaIndex,g=c.reportData,m=g.analysisAreas;if(a){var h={},l={};a.forEach(function(d){d=d.featureCollection.layers[0];var k=d.featureSet.features[0],n=k.attributes;k.geometry.spatialReference=d.featureSet.spatialReference;k=new z({geometry:k.geometry,attributes:n,symbol:d.layerDefinition.drawingInfo.renderer.symbol});
"esriGeometryPoint"===d.featureSet.geometryType?l[n.STORE_ID]=k:h[n.AREA_ID]=k});m=m.map(function(d){return u.mixin({},d)});m.forEach(function(d){var k=d.feature.attributes;d.feature=h[k.AREA_ID];d.feature&&u.mixin(d.feature.attributes,k);var n=d.location&&d.location.attributes;d.location=l[k.STORE_ID];d.location&&u.mixin(d.location.attributes,n)})}if(g.isMultiFeature){var e=[];var t=g.reverseAnalysisAreasOnMap?m.slice().reverse():m;t.forEach(function(d,k){var n=g.reverseAnalysisAreasOnMap?t.length-
k-1:k;b[e.length]=n;e.push(d.feature);k=g.combinedAreasInfo.groups;k&&k.length&&k.some(function(v){return-1!==v.indexes.indexOf(n)})||(d.location&&(b[e.length]=n,e.push(d.location)),d.additionalFeatures&&d.additionalFeatures.forEach(function(v){b[e.length]=n;e.push(v)}))});g.combinedAreasInfo.groups&&g.combinedAreasInfo.groups.forEach(function(d){var k=m[d.indexes[0]],n=d.location||k&&k.location;n&&(b[e.length]=d.indexes[0],e.push(n),n.locationName=d.locationName||k&&k.locationName);d.additionalFeatures&&
d.additionalFeatures.forEach(function(v){b[e.length]=d.indexes[0];e.push(v)})})}else{a=m[f];e=[a.feature];if(a.location)e.push(a.location);else{var p=g.combinedAreasInfo&&g.combinedAreasInfo.groups;(p=p&&p.filter(function(d){return-1!==d.indexes.indexOf(f)})[0])&&p.location&&e.push(p.location)}a.additionalFeatures&&(e=e.concat(a.additionalFeatures));e.forEach(function(d,k){b[k]=f})}c.features=e;c.featureIndexToAreaIndexMap=b},_createMapFromItemInfo:function(c,a,b){var f=this,g=M.isMobileDevice();
return r.createMap(c,a,{defaultBasemapId:b.defaultBasemapId,defaultBasemapName:b.defaultBasemapName,additionalLayerInfos:b.additionalLayerInfos,mapOptions:{extent:b.extent||b.features.length&&A.graphicsExtent(b.features).expand(b.expandFactor||1.5),sliderPosition:!1===b.sliderPosition?"none":b.sliderPosition||"top-right",infoWindow:new J({getPlayerZoomScale:function(){return f.getPlayerZoomScale(a)}},C.create("div")),isMapNavigation:!g}}).then(function(m){var h=m&&m.map;return h?q(f._setInitialExtent(h,
b),function(){return q(F.addLayersToMap(h,{features:b.features,featureIndexToAreaIndexMap:b.featureIndexToAreaIndexMap,analysisAreas:b.reportData.analysisAreas,locatorPointsControllers:b.locatorPointsControllers,stdPolygonsControllers:b.stdPolygonsControllers,thisAreasHighlightController:b.thisAreasHighlightController,geClient:b.geClient,countryID:b.countryID,hierarchy:b.hierarchy,additionalLayerInfos:b.additionalLayerInfos,calculatorFieldName:b.calculatorFieldName,pinSymbolJson:b.pinSymbolJson,areaSymbolJsons:b.areaSymbolJsons,
areaSymbolRamp:b.areaSymbolRamp,attachmentsStore:b.attachmentsStore}),function(){g&&K.setUpMapPan(h,b.onPanContainer);void 0===a.__mapDivId&&(a.__mapDivId=f._mapDivId++);var l={node:a,map:h,itemId:b.webMapId,mapName:b.webMapName,legend:null};G.createLegend(h,a,b.legendController,{onCreated:function(t){l.legend=t},onDestroyed:function(){delete l.legend}});var e=(new E({map:h})).placeAt(a);e.startup();e.own(h.on("before-unload",function(){e.destroy()}));return(f._mapInfos[b.areaIndex]=f._mapInfos[b.areaIndex]||
{})[a.__mapDivId]=l})}):(new y).reject(Error("Can't create a map."))})},_setInitialExtent:function(c,a){function b(){return B(a.features.map(function(f){return x.needProject(f.geometry,c)?q(x.projectGeometries(f.geometry,c),function(g){return new z(g)}):f})).then(function(f){return A.graphicsExtent(f).expand(a.expandFactor||1.5)})}if(a.features.length)return q(a.extent||b(),function(f){return x.needProject(f,c)?q(x.projectGeometries(f,c),function(g){return c.setExtent(g)}):c.setExtent(f)})},_createFallbackStaticMap:function(c,
a){return this._createStaticMap(this._mapImageInfos&&this._mapImageInfos[c.areaIndex]&&(this._mapImageInfos[c.areaIndex][c.webMapId]||this._mapImageInfos[c.areaIndex][c.webMapName]),a,c)},_createStaticMap:function(c,a,b){var f=c&&new I(c,a);return f&&f.load().then(function(){return f.loaded?{node:a,map:f,itemId:b.webMapId,mapName:b.webMapName,legend:null}:null})},getPlayerZoomScale:function(c){}});w.EXPAND_FACTOR=1.5;return w});