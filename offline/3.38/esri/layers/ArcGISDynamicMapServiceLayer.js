// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/ArcGISDynamicMapServiceLayer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/sniff dojo/io-query ../kernel ../config ../lang ../request ../urlUtils ../layerUtils ../geometry/scaleUtils ./DynamicMapServiceLayer ./ArcGISMapServiceLayer ./TimeInfo ./LayerTimeOptions ./ImageParameters ./DynamicLayerInfo ./LayerMapSource".split(" "),function(q,m,l,u,v,y,z,w,A,B,r,p,C,D,E,F,G,x,H,I){q=q([D,E],{declaredClass:"esri.layers.ArcGISDynamicMapServiceLayer",_eventMap:{"visible-layers-change":["visibleLayers"]},
constructor:function(a,b,c){a=b&&b.imageParameters;var e=m.hitch;if(a){var g=a.layerDefinitions;g&&this.setLayerDefinitions(g);a.layerOption===x.LAYER_OPTION_SHOW&&(this.visibleLayers=[].concat(a.layerIds),this.onVisibleLayersChange(this.visibleLayers))}this._setIsPNG32=e(this,this._setIsPNG32);this.dpi=a&&a.dpi||96;this.imageFormat=a&&a.format||"png8";this.imageTransparency=a&&!1===a.transparent?!1:!0;this._setIsPNG32();this.gdbVersion=b&&b.gdbVersion;this._params.gdbVersion=this.gdbVersion;g=a&&
a.layerDefinitions;m.mixin(this._params,this._url.query,{dpi:this.dpi,transparent:this.imageTransparency,format:this.imageFormat},a?a.toJson():{});g&&(this._params.layerDefs=g);this.getImageUrl=e(this,this.getImageUrl);this._initLayer=e(this,this._initLayer);this._load=e(this,this._load);this.useMapImage=b?b.useMapImage:!1;this._loadCallback=b&&b.loadCallback;(b=b&&b.resourceInfo)?this._initLayer(b):(void 0===c||!1===c)&&this._load();this.registerConnectEvents()},disableClientCaching:!1,layerDefinitions:null,
_initLayer:function(a,b){this.inherited(arguments);a.timeInfo&&(this.timeInfo=new F(a.timeInfo));this.loaded=!0;this.onLoad(this);var c=this._loadCallback;c&&(delete this._loadCallback,c(this))},getImageUrl:function(a,b,c,e){var g=this._url.path+"/export",d=this._params,f=d.token=this._getToken(),k=a.spatialReference.wkid||u.toJson(a.spatialReference.toJson()),n=this._errorHandler;delete d._ts;m.mixin(d,{bbox:a.xmin+","+a.ymin+","+a.xmax+","+a.ymax,bboxSR:k,imageSR:k,size:b+","+c},this.disableClientCaching?
{_ts:(new Date).getTime()}:{});d.layerDefs&&(a=p._serializeLayerDefinitions(d.layerDefs,10.5<=this.version),d=m.mixin({},d),delete d.layerDefs,d.layerDefs=a);a=r.addProxy(r.normalize(g)+"?"+y.objectToQuery(m.mixin({},d,{f:"image"})));a.length>w.defaults.io.postLength||this.useMapImage?this._jsonRequest=B({url:g,content:m.mixin(d,{f:"json"}),callbackParamName:"callback",load:function(h){h.imageData?h="data:"+(h.contentType||"image")+";base64,"+h.imageData:(h=h.href,f&&(h+=-1===h.indexOf("?")?"?token\x3d"+
f:"\x26token\x3d"+f),h=r.addProxy(h));e(h)},error:n}):e(a)},_setIsPNG32:function(){var a=this.imageFormat.toLowerCase(),b=v("ie");this.isPNG32=b&&6===b&&("png32"===a||"png24"===a)&&this.imageTransparency},_setTime:function(a){var b=this.timeInfo;a=this._params.time=a?a.toJson().join(","):null;if(10.02>this.version&&b)if(a)this._params.layerTimeOptions=p._serializeTimeOptions(this.layerTimeOptions);else{var c=this.layerInfos;if(c){var e=this.layerTimeOptions,g=e?e.slice(0):[],d=[];l.forEach(c,function(f){f.subLayerIds||
d.push(f.id)});d.length&&(l.forEach(d,function(f){if(!g[f]){var k=new G;k.useTime=!1;g[f]=k}}),this._params.layerTimeOptions=p._serializeTimeOptions(g,d))}}10.02<=this.version&&b&&!a&&!b.hasLiveData&&(this._params.time="null,null")},setDPI:function(a,b){this.dpi=this._params.dpi=a;b||this.refresh(!0)},setImageFormat:function(a,b){this.imageFormat=this._params.format=a;this._setIsPNG32();b||this.refresh(!0)},setImageTransparency:function(a,b){this.imageTransparency=this._params.transparent=a;this._setIsPNG32();
b||this.refresh(!0)},setVisibleLayers:function(a,b){this.visibleLayers=a;this._params.layers=x.LAYER_OPTION_SHOW+":"+(a.length?a.join():"-1");this._updateDynamicLayers();b||this.refresh(!0);this.onVisibleLayersChange(this.visibleLayers)},onVisibleLayersChange:function(){},setDefaultVisibleLayers:function(a){this.visibleLayers=this._defaultVisibleLayers;this._params.layers=null;this._updateDynamicLayers();a||this.refresh(!0);this.onVisibleLayersChange(this.visibleLayers)},setLayerDefinitions:function(a,
b){this.layerDefinitions=a;this._params.layerDefs=a;this._updateDynamicLayers();b||this.refresh(!0)},setDefaultLayerDefinitions:function(a){this.layerDefinitions=this._params.layerDefs=null;this._updateDynamicLayers();a||this.refresh(!0)},setDisableClientCaching:function(a){this.disableClientCaching=a},setLayerTimeOptions:function(a,b){this.layerTimeOptions=a;this._params.layerTimeOptions=p._serializeTimeOptions(a);this._updateDynamicLayers();b||this.refresh(!0)},refresh:function(a){if(!0===a)this.inherited(arguments);
else{var b=this.disableClientCaching;this.disableClientCaching=!0;this.inherited(arguments);this.disableClientCaching=b}},setLayerDrawingOptions:function(a,b){this.layerDrawingOptions=a;this._updateDynamicLayers();b||this.refresh(!0)},setDynamicLayerInfos:function(a,b){a&&0<a.length?(this.dynamicLayerInfos=a,this.visibleLayers=p._getDefaultVisibleLayers(a),this.onVisibleLayersChange(this.visibleLayers)):this.dynamicLayerInfos=this.layerDrawingOptions=null;this._updateDynamicLayers();b||this.refresh(!0)},
createDynamicLayerInfosFromLayerInfos:function(){var a=[],b;l.forEach(this.layerInfos,function(c){b=new H(c.toJson());b.source=new I({mapLayerId:c.id});a.push(b)});return a},_onDynamicLayersChange:function(){},_updateDynamicLayers:function(){if(this.dynamicLayerInfos&&0<this.dynamicLayerInfos.length||this.layerDrawingOptions&&0<this.layerDrawingOptions.length){this.dynamicLayerInfos&&0!==this.dynamicLayerInfos.length||(this.dynamicLayerInfos=this.createDynamicLayerInfosFromLayerInfos());var a=this._map&&
C.getScale(this._map);a=this._getDynLayerObjs(a);a=u.toJson(a);this._params.dynamicLayers&&this._params.dynamicLayers.length===a.length&&this._params.dynamicLayers===a||(this._params.dynamicLayers=a,this._onDynamicLayersChange(this._params.dynamicLayers))}else this._params.dynamicLayers?(this._params.dynamicLayers=null,this._onDynamicLayersChange(null)):this._params.dynamicLayers=null},_getDynLayerObjs:function(a){var b=this.dynamicLayerInfos,c=[],e=this.visibleLayers,g=a?p._getLayersForScale(a,b):
e;l.forEach(b,function(d){if(!d.subLayerIds){var f=d.id;if(-1!==l.indexOf(e,f)&&-1!==l.indexOf(g,f)){var k={id:f,name:d.name};k.source=d.source&&d.source.toJson();var n;this.layerDefinitions&&this.layerDefinitions[f]&&(n=this.layerDefinitions[f]);n&&(k.definitionExpression=n);var h;this.layerDrawingOptions&&this.layerDrawingOptions[f]&&(h=this.layerDrawingOptions[f]);h&&(n=h.toJson(),this._fixMarkerColor(n.renderer),k.drawingInfo=n);var t;this.layerTimeOptions&&this.layerTimeOptions[f]&&(t=this.layerTimeOptions[f]);
t&&(k.layerTimeOptions=t.toJson());k.minScale=d.minScale||0;k.maxScale=d.maxScale||0;c.push(k)}}},this);return c},_fixMarkerColor:function(a){l.forEach(this._getAllSimpleMarkerSymbols(a),function(b){if(!b.color){var c=[0,0,0,0],e=b.outline&&b.outline.color;"esriSMSX"!==b.style&&"esriSMSCross"!==b.style||!e||(c=e.slice(0));b.color=c}})},_getAllSimpleMarkerSymbols:function(a){return l.filter(this._getAllSymbols(a),function(b){return"esriSMS"===b.type})},_getAllSymbols:function(a){var b=[];a&&(b.push(a.symbol),
b.push(a.defaultSymbol),l.forEach(a.uniqueValueInfos||a.classBreakInfos,function(c){b.push(c.symbol)}),b=l.filter(b,A.isDefined));return b},_onExtentChangeHandler:function(a,b,c){c&&this._updateDynamicLayers();this.inherited(arguments)},_setMap:function(a,b,c){this._map=a;this._updateDynamicLayers();return this.inherited(arguments)},onGDBVersionChange:function(){},setGDBVersion:function(a,b){this.gdbVersion=a;this._params.gdbVersion=a;this.onGDBVersionChange();b||this.refresh(!0)},exportMapImage:function(a,
b){var c=m.hitch(this,function(){var e=w.defaults.map,g=a&&a.layerDefinitions;a=a?a.toJson(this.normalization):{};g&&(a.layerDefs=g);a=m.mixin({size:e.width+","+e.height},this._params,a,{f:"json"});delete a._ts;a.layerDefs&&(e=p._serializeLayerDefinitions(a.layerDefs,10.5<=this.version),delete a.layerDefs,a.layerDefs=e);this._exportMapImage(this._url.path+"/export",a,b)});if(this.loaded)c();else this.on("load",c)}});v("extend-esri")&&m.setObject("layers.ArcGISDynamicMapServiceLayer",q,z);return q});