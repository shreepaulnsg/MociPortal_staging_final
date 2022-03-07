// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/_coremap","require module dojo/_base/kernel dojo/_base/declare dojo/_base/connect dojo/_base/Deferred dojo/_base/lang dojo/_base/array dojo/_base/event dojo/_base/unload dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/sniff dijit/registry dojox/gfx/matrix ./kernel ./config ./basemaps ./lang ./Evented ./fx ./deferredUtils ./tileUtils ./urlUtils ./PluginTarget ./Color ./promiseList ./arcade/Dictionary ./geometry/Point ./geometry/ScreenPoint ./geometry/Extent ./geometry/Rect ./geometry/mathUtils ./geometry/scaleUtils ./geometry/screenUtils ./geometry/webMercatorUtils ./layers/GraphicsLayer ./layers/TileInfo ./layers/LOD ./layers/ArcGISTiledMapServiceLayer ./layers/MapImageLayer ./layers/OpenStreetMapLayer ./layers/support/webglUtils ./dijit/Popup ./plugins/popupManager dojo/uacss".split(" "),
function(N,xa,ya,X,B,fa,I,m,Ya,za,Aa,Ba,ha,J,Y,O,K,Ca,Da,Ea,Fa,G,y,Ga,ma,Ha,na,oa,Ia,Ja,Ka,La,P,C,v,Q,Ma,L,pa,ia,E,Na,Oa,Pa,Qa,qa,Z,Ra){function ra(a,b){var c=a.lods;c.sort(function(g,k){return g.scale>k.scale?-1:g.scale<k.scale?1:0});var d=[];c=m.filter(c,function(g){if(-1===R(d,g.scale))return d.push(g.scale),!0});var e=b.lods=[],f;m.forEach(c,function(g,k){f=e[k]=new Oa(g);f.level=k});b.tileInfo=new Na(T(a,{lods:e}))}var ja,U=pa.toMapPoint,ka=pa.toScreenPoint,aa=B.connect,V=B.disconnect,w=I.hitch,
H=O.set,R=m.indexOf,T=I.mixin,ba=0,F=Fa.defaults.map,sa=F.layerNamePrefix,ta=F.graphicsLayerNamePrefix,Sa=new RegExp("^"+sa+"(\\d+)$"),Ta=new RegExp("^"+ta+"(\\d+)$"),Ua=function(){},ua=0,va=Z.isWebGLEnabled();X=X([Ga,Ia],{declaredClass:"esri._CoreMap",tables:null,resizeDelay:300,invalidExtent:"Map does not have a valid extent.",invalidGeometry:"Geometry (wkid: ${geometry}) cannot be converted to spatial reference of the map (wkid: ${map})",unknownBasemap:'Unable to find basemap definition for: "${basemapName}". Try one of these: ${list}',
invalidBasemap:'Unable to add basemap: "${basemapName}".',unknownLayerType:'Unknown basemap layer type: "${type}" found in basemap definition for: "${basemapName}".',visible:!0,webglEnabled:va,_eventMap:{"basemap-change":!0,"extent-change":["extent","delta","levelChange","lod"],"layer-add":["layer"],"layer-add-result":["layer","error"],"layer-remove":["layer"],"layer-reorder":["layer","index"],"layer-resume":["layer"],"layer-suspend":["layer"],"layers-add-result":["layers"],"layers-removed":!0,"layers-reordered":["layerIds"],
load:["map"],pan:["extent","delta"],"pan-end":["extent","delta"],"pan-start":["extent","screenPoint"],reposition:["x","y"],resize:["extent","width","height"],scale:["matrix","immediate"],"time-extent-change":["timeExtent"],"before-unload":["map"],unload:["map"],"update-end":["error"],"update-start":!0,zoom:["extent","zoomFactor","anchor"],"zoom-end":["extent","zoomFactor","anchor","level"],"zoom-start":["extent","zoomFactor","anchor","level"],click:!0,"dbl-click":!0,"key-down":!0,"key-up":!0,"mouse-down":!0,
"mouse-drag":!0,"mouse-drag-end":!0,"mouse-drag-start":!0,"mouse-move":!0,"mouse-out":!0,"mouse-over":!0,"mouse-up":!0,"mouse-wheel":!0,"basic-tap":!0,"double-tap":!0,"pinch-end":!0,"pinch-move":!0,"pinch-start":!0,"processed-double-tap":!0,"processed-tap":!0,"swipe-end":!0,"swipe-move":!0,"swipe-start":!0,tap:!0,"two-finger-tap":!0},constructor:function(a,b){b=b||{};this.registerConnectEvents();T(this,{_internalLayerIds:[],_layers:[],_layerDivs:[],_basemapPending:!1,_connects:[],_layerAddPromises:{},
_zoomAnimDiv:null,_zoomAnim:null,_layersDiv:null,_firstLayerId:null,_delta:null,_cursor:null,_ratioW:1,_ratioH:1,_params:null,_minResolution:0,_maxResolution:0,cursor:null,layerIds:[],graphicsLayerIds:[],graphics:null,_labels:null,loaded:!1,__panning:!1,__zooming:!1,__container:null,root:null,__LOD:null,__tileInfo:null,__visibleRect:null,__visibleDelta:null,_rids:[],_webglContextOwners:[]});var c=this.container=Aa.byId(a),d=this.id=Ba.get(c,"id")||Ca.getUniqueId(this.declaredClass);ha.add(c,"map");
var e=Y.getContentBox(c);a=ha.add;var f=J.create;this.position=new C(0,0);this._reposition();var g=this.width=0<e.w?e.w:F.width,k=this.height=0<e.h?e.h:F.height,h=this.root=f("div",{id:d+"_root",style:{width:g+"px",height:k+"px",direction:"ltr"}});a(h,"esriMapContainer");e=this.__container=f("div",{id:d+"_container"},h);H(e,"position","absolute");a(e,"esriMapContainer");c.appendChild(h);b=this._params=T({slider:!0,nav:!1,zoom:-1,minZoom:-1,maxZoom:-1,scale:-1,minScale:0,maxScale:0,showInfoWindowOnClick:!0,
displayGraphicsOnPan:!0,wrapAround180:!0,fitExtent:!1,optimizePanAnimation:!0},b);this.setWebGLEnabled(null!=b.webglEnabled?b.webglEnabled:this.webglEnabled);this.maxWebGLContexts=null!=b.maxWebGLContexts?b.maxWebGLContexts:-1;this.wrapAround180=b.wrapAround180;this.optimizePanAnimation=b.optimizePanAnimation;this.setBackgroundColor(b.backgroundColor);y.isDefined(b.resizeDelay)&&(this.resizeDelay=b.resizeDelay);b.lods&&(ra({rows:512,cols:512,dpi:96,format:"JPEG",compressionQuality:75,origin:{x:-180,
y:90},spatialReference:{wkid:4326},lods:b.lods},b),this.__tileInfo=b.tileInfo);this.extent=b.extent;this._extentUtil({mapCenter:b.center,targetLevel:b.zoom,targetScale:b.scale});this.__visibleRect=new Q(0,0,g,k);this.__visibleDelta=new Q(0,0,g,k);d=this._layersDiv=f("div",{id:d+"_layers"});a(d,"esriMapLayers");e.appendChild(d);this._zoomAnimDiv=f("div",{style:{position:"absolute"}});b.infoWindow?this.infoWindow=b.infoWindow:(a=this.infoWindow=new Ra(b.popupOptions,f("div")),a.startup(),a._ootb=!0,
H(a.domNode,"zIndex",40));if(b.showLabels){var n=this;N(["./layers/LabelLayer"],function(q){ja=q;n._createLabelLayer()});this.on("load",function(){n._createLabelLayer()})}this.addPlugin(this._getAbsMid("./plugins/popupManager"),{enabled:b.showInfoWindowOnClick});this._zoomStartHandler=w(this,this._zoomStartHandler);this._zoomingHandler=w(this,this._zoomingHandler);this._zoomEndHandler=w(this,this._zoomEndHandler);this._panningHandler=w(this,this._panningHandler);this._panEndHandler=w(this,this._panEndHandler);
this._endTranslate=w(this,this._endTranslate);this._timedResize=w(this,this._timedResize);this._execResize=w(this,this._execResize);this._processLabelLayers=w(this,this._processLabelLayers);this._updateLabelLayers=w(this,this._updateLabelLayers);this.resize=w(this,this.resize);za.addOnWindowUnload(this,this.destroy)},_getAbsMid:function(a){return N.toAbsMid?N.toAbsMid(a):xa.id.replace(/\/[^\/]*$/ig,"/")+a},_cleanUp:function(){var a=this.infoWindow;a&&(a._ootb&&a.destroy?a.destroy():a.unsetMap(this),
delete this.infoWindow);V(this._tsTimeExtentChange_connect);this.removePlugin("./plugins/popupManager");J.destroy(this.root);this.root=null},_addLayer:function(a,b,c){if(a.id){var d=a.id.match(a instanceof E?Ta:Sa);d&&d[1]&&(d=Number(d[1]),ba<=d&&(ba=d+1))}var e=a.id||(a instanceof E?ta:sa)+ba++;a.id=e;this._layers[e]=a;a._isRefLayer="top"===c;c=!y.isDefined(c)||0>c||c>b.length||"top"===c?b.length:c;var f;if(!a._isRefLayer)for(;(f=this.getLayer(b[c-1]))&&f._isRefLayer;)c--;if(d=!this._firstLayerId&&
!this.loaded&&!this._basemapPending&&0===c&&(b===this.layerIds||b===this.graphicsLayerIds))this._firstLayerId=e;b.splice(c,0,e);var g=w(this,this._addLayerHandler),k=this;c=this._connects;f=function(){a.loaded?k._onLoadFix?(k._onLoadFix=!1,setTimeout(function(){g(a)},0)):g(a):(k["_"+e+"_addtoken_load"]=aa(a,"onLoad",k,"_addLayerHandler"),k["_"+e+"_addtoken_err"]=aa(a,"onError",k,function(h){g(a,h,b)}))};this.loaded||d||a.loaded&&-1===R(this.graphicsLayerIds,e)?f():c.push(aa(this,"onLoad",f));return a},
_forgetLayer:function(a){a=a.id;V(this["_"+a+"_addtoken_load"]);V(this["_"+a+"_addtoken_err"]);var b=this._layerAddPromises[a];b&&(delete this._layerAddPromises[a],b.cancel())},_addLayerHandler:function(a,b,c){b?this._attachLayerToMap(a,b,c):a._prepareToAttach?(this._layerAddPromises[a.id]=a._prepareToAttach(this)).always(I.hitch(this,function(d){d&&"cancel"===d.dojoType||this._attachLayerToMap(a,null,c)})):a.declaredClass&&(-1<a.declaredClass.toLowerCase().indexOf("vectortilelayer")||-1<a.declaredClass.toLowerCase().indexOf("rasterxlayer")&&
a.useWebGL)&&!this.isWebGLContextAvailable()?(b=Error("Too many WebGL contexts. Unable to add the layer: ",a.url),this._attachLayerToMap(a,b,this.layerIds)):this._attachLayerToMap(a,b,c)},_attachLayerToMap:function(a,b,c){var d=this.id,e=a.id,f=R(a instanceof E?this.graphicsLayerIds:this.layerIds,e),g=f,k=!1,h=this._params;this._forgetLayer(a);if(b)delete this._layers[e],-1!==f&&(c.splice(f,1),this.onLayerAddResult(a,b));else{-1===f&&(f=R(this._internalLayerIds,e),g=20+f,k=!0);if(e===this._firstLayerId){b=
a.spatialReference;c=this.extent&&this.extent.spatialReference;!c||c.equals(b)||!a.tileInfo&&a.url||(c=null);c=this.spatialReference=c||b;this.wrapAround180=this.wrapAround180&&c&&c._isWrappable()?!0:!1;a.tileInfo&&(this.__tileInfo?(b=this.__tileInfo.lods,this.__tileInfo=T({},a.tileInfo),this.__tileInfo.lods=b):(ra(T({},a.tileInfo),h),this.__tileInfo=h.tileInfo));if(this.wrapAround180){b=this.__tileInfo;c=c._getInfo();if(!b||Math.abs(c.origin[0]-b.origin.x)>c.dx)this.wrapAround180=!1;this.wrapAround180&&
b&&na._addFrameInfo(b,c)}h.units=a.units;if((b=this.__tileInfo&&this.__tileInfo.lods)&&b.length){c=h.minScale;f=h.maxScale;var n=-1,q=-1,x=!1,p=!1,r;for(r=0;r<b.length;r++)0<c&&!x&&c>=b[r].scale&&(n=b[r].level,x=!0),0<f&&!p&&f>=b[r].scale&&(q=0<r?b[r-1].level:-1,p=!0);-1===h.minZoom&&(h.minZoom=0===c?b[0].level:n);-1===h.maxZoom&&(h.maxZoom=0===f?b[b.length-1].level:q);for(r=0;r<b.length;r++)h.minZoom===b[r].level&&(h.minScale=b[r].scale,this._minResolution=b[r].resolution),h.maxZoom===b[r].level&&
(h.maxScale=b[r].scale,this._maxResolution=b[r].resolution)}else h.minZoom=h.maxZoom=h.zoom=-1}a instanceof E?(this._gc||(this._gc=new E._GraphicsContainer,this._gc._setMap(this,this._layersDiv).id=d+"_gc"),this._attachGraphicsLayer(a).id=d+"_"+e):(g=a._setMap(this,this._layersDiv,g,this.__LOD),g.id=d+"_"+e,this._layerDivs[e]=g,this._reorderLayers(this.layerIds),k||-1===a.declaredClass.indexOf("VETiledLayer")||this._onBingLayerAdd(a));e===this._firstLayerId&&(this.graphics=new E({id:d+"_graphics",
displayOnPan:h.displayGraphicsOnPan}),this._addLayer(this.graphics,this._internalLayerIds,20));if(a===this.graphics){c=this._layers[this._firstLayerId];d=h.zoom;g=h.scale;b=h.center;c=c.initialExtent||c.fullExtent;this._firstLayerId=null;this.extent&&(this.extent=this._convertGeometry(this,this.extent));!this.extent&&c&&(b&&(b=this._convertGeometry(c,b)),b&&(c=c.centerAt(b),b=null));if(b=this.extent||c&&new v(c.toJson()))-1<d?b=this.__getExtentForLevel(d,null,b).extent:0<g&&(b=L.getExtentForScale(this,
g,b));if(!b){console.log("Map: "+this.invalidExtent);return}h=this._fixExtent(b,h.fitExtent);this.extent=h.extent;this.__LOD=h.lod;this.__setExtent(this.extent);this.loaded=!0;this.attr("data-loaded","");this.infoWindow.setMap(this);this.onLoad(this)}k||(this.onLayerAdd(a),this.onLayerAddResult(a));V(this[e+"_addLayerHandler_connect"])}},_convertGeometry:function(a,b){a=a&&a.spatialReference;var c=b&&b.spatialReference;a&&c&&!a.equals(c)&&(a._canProject(c)?a.isWebMercator()?b=ia.geographicToWebMercator(b):
4326===a.wkid&&(b=ia.webMercatorToGeographic(b,!0)):(console.log("Map: "+y.substitute({geometry:c.wkid||c.wkt,map:a.wkid||a.wkt},this.invalidGeometry)),b=null));return b},_attachGraphicsLayer:function(a){var b=a.id;a=a._setMap(this,this._gc._surface);this._layerDivs[b]=a;this._reorderLayers(this.graphicsLayerIds);return a},_detachGraphicsLayer:function(a){a.loaded&&a.getMap()&&a._unsetMap(this,this._gc._surface)},_reorderLayers:function(a){var b=this.onLayerReorder,c=J.place,d=this._layerDivs,e=this._layers,
f=this._gc?this._gc._surface.getEventSource():null;if(a===this.graphicsLayerIds)m.forEach(a,function(q,x){var p=d[q];q=e[q];p&&(this._gc._reorderLayer(q,p,x),b(q,x))},this);else{var g=this.graphics,k=g?g.id:null,h=this._layersDiv,n;m.forEach(a,function(q,x){n=d[q];q!==k&&n&&(c(n,h,x),b(e[q],x))});this._mapImageLyr&&this._placeMapImageLyr();f&&(f=9>K("ie")?f.parentNode:f,c(f,f.parentNode,"last"))}this.onLayersReordered([].concat(a))},_zoomStartHandler:function(){this.__zoomStart(this._zoomAnimDiv.startingExtent,
this._zoomAnimDiv.anchor)},_zoomingHandler:function(a){var b=parseFloat(a.left),c=parseFloat(a.top);a=new v(b,c-parseFloat(a.height),b+parseFloat(a.width),c,this.spatialReference);b=this.extent.getWidth()/a.getWidth();this.__zoom(a,b,this._zoomAnimDiv.anchor)},_zoomEndHandler:function(){var a=this._zoomAnimDiv,b=a.extent,c=this.extent.getWidth()/b.getWidth(),d=a.anchor,e=a.newLod,f=a.levelChange;a.extent=a.anchor=a.levelChange=a.startingExtent=a.newLod=this._delta=this._zoomAnim=null;this.__zoomEnd(b,
c,d,e,f)},_panningHandler:function(a){if(isNaN(parseFloat(a.left))||isNaN(parseFloat(a.top))){var b=Math.round,c=this._panAnim.node;a.left=-1*(this._delta.x-b(this.width/2))+"px";a.top=-1*(this._delta.y-b(this.height/2))+"px";O.set(c,"left",a.left);O.set(c,"top",a.top)}a=new C(parseFloat(a.left),parseFloat(a.top));b=this.toMap(a);this.onPan(this.extent.offset(this.extent.xmin-b.x,this.extent.ymax-b.y),a)},_panEndHandler:function(a){this.__panning=!1;var b=Math.round;a=new C(-b(parseFloat(a.style.left)),
-b(parseFloat(a.style.top)));b=a.x;var c=a.y,d=this.__visibleRect,e=this.__visibleDelta;d.x+=-b;d.y+=-c;e.x+=-b;e.y+=-c;H(this._zoomAnimDiv,{left:"0px",top:"0px"});d=this.extent;e=this._ratioW;var f=this._ratioH;d=new v(d.xmin+b/e,d.ymin-c/f,d.xmax+b/e,d.ymax-c/f,this.spatialReference);a.setX(-a.x);a.setY(-a.y);this._delta=this._panAnim=null;this._updateExtent(d);this.onPanEnd(d,a);this._fireExtChg([d,a,!1,this.__LOD])},_fixExtent:function(a,b){for(var c=this._reshapeExtent(a),d=1.25;!0===b&&(c.extent.getWidth()<
a.getWidth()||c.extent.getHeight()<a.getHeight())&&0<c.lod.level&&3>=d;)c=this._reshapeExtent(a.expand(d)),d+=.25;return c},_getFrameWidth:function(){var a=-1,b=this.spatialReference._getInfo();this.__LOD?(b=this.__LOD._frameInfo)&&(a=b[3]):b&&(a=Math.round(2*b.valid[1]/(this.extent.getWidth()/this.width)));return a},_fixAspectRatio:function(a){var b=a.getWidth(),c=a.getHeight(),d=b/c,e=this.width/this.height,f=0,g=0;this.width>this.height?b>c?e>d?f=c*e-b:g=b/e-c:f=c*e-b:this.width<this.height?b<
c?e>d?f=c*e-b:g=b/e-c:g=b/e-c:b<c?f=c-b:b>c&&(g=b/e-c);f&&(a.xmin-=f/2,a.xmax+=f/2);g&&(a.ymin-=g/2,a.ymax+=g/2);return a},_reshapeExtent:function(a){a=this._fixAspectRatio(a);return this._getAdjustedExtent(a)},_getAdjustedExtent:function(a){if(this.__tileInfo)return na.getCandidateTileInfo(this,this.__tileInfo,a);var b=L.getScale(this,a),c=this.getMinScale(),d=this.getMaxScale();!c||b<=c?!d||b>=d||(a=L.getExtentForScale(this,d,a)):a=L.getExtentForScale(this,c,a);return{extent:a}},_onBingLayerAdd:function(a){this["__"+
a.id+"_vis_connect"]=B.connect(a,"onVisibilityChange",this,"_toggleBingLogo");this._toggleBingLogo(a.visible)},_onBingLayerRemove:function(a){B.disconnect(this["__"+a.id+"_vis_connect"]);delete this["__"+a.id+"_vis_connect"];var b=m.some(this.layerIds,function(c){return(a=this._layers[c])&&a.visible&&-1!==a.declaredClass.indexOf("VETiledLayer")},this);this._toggleBingLogo(b)},_toggleBingLogo:function(a){a&&!this._bingLogo?(a={left:this._mapParams&&this._mapParams.nav?"25px":""},6===K("ie")&&(a.filter=
"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled\x3d'true', sizingMethod\x3d'crop', src\x3d'"+N.toUrl("./images/map/bing-logo-lg.png")+"')"),a=this._bingLogo=J.create("div",{style:a},this.root),ha.add(a,"bingLogo-lg")):!a&&this._bingLogo&&(J.destroy(this._bingLogo),delete this._bingLogo)},__panStart:function(a,b){var c=this._zoomAnim,d=this._panAnim;if(c&&c._active)c.stop(),c._fire("onEnd",[c.node]);else if(d&&d._active){d.stop();this._panAnim=null;b=d.curve.getValue(d._getStep());a=Math.round(parseFloat(b.left));
b=Math.round(parseFloat(b.top));c=this.navigationManager._dragOrigin;this.__pan(a,b);c&&(c.x-=a,c.y-=b);return}this.__panning=!0;this.onPanStart(this.extent,new C(a,b))},__pan:function(a,b){var c=this.extent,d=this._ratioW,e=this._ratioH;this.onPan(new v(c.xmin-a/d,c.ymin+b/e,c.xmax-a/d,c.ymax+b/e,this.spatialReference),new C(a,b))},__panEnd:function(a,b){var c=this.__visibleRect,d=this.__visibleDelta;c.x+=a;c.y+=b;d.x+=a;d.y+=b;c=new C(a,b);d=this.extent;var e=this._ratioW,f=this._ratioH;d=new v(d.xmin-
a/e,d.ymin+b/f,d.xmax-a/e,d.ymax+b/f,this.spatialReference);this.__panning=!1;this._updateExtent(d);this.onPanEnd(d,c);this._fireExtChg([d,c,!1,this.__LOD])},__zoomStart:function(a,b){this.__zooming=!0;this.onZoomStart(a,1,b,this.__LOD?this.__LOD.level:null)},__zoom:function(a,b,c){this.onZoom(a,b,c)},__zoomEnd:function(a,b,c,d,e){H(this._layersDiv,{left:"0px",top:"0px"});this._delta=new C(0,0);this.__visibleRect.x=this.__visibleRect.y=0;a=new v(a);this.__LOD=d;this._ratioW=this.width/a.getWidth();
this._ratioH=this.height/a.getHeight();var f=this._delta;this._delta=null;this.__zooming=!1;this._updateExtent(a,e);this.onZoomEnd(a,b,c,d?d.level:null);this._fireExtChg([a,f,e,d])},_extentUtil:function(a,b,c,d,e){var f=new fa,g=this.width,k=this.height;if(a){var h=a.numLevels;var n=a.targetLevel;var q=y.isDefined(n);var x=a.factor;var p=a.mapAnchor;var r=a.screenAnchor;var t=a.mapCenter;var la=a.levelOrFactor;var S=a.targetScale;var M=y.isDefined(S)&&0<S}if(b){var l=b.dx;var u=b.dy;t=b.mapCenter}I.isArray(t)&&
(t=new P(t));var ca=this._panAnim;b=(a=this._stopAnim())?a.divExtent:this.extent;var da=this.__tileInfo,D=this._params;if(!this.loaded){if(c)b&&(c=this._convertGeometry(b,c)),c&&(this.extent=c,D.zoom=D.scale=-1,D.center=null);else if(t||q||M){if(t)if(b){if(t=this._convertGeometry(b,t))this.extent=b.centerAt(t),D.center=null}else D.center=t;q&&-1<n?(D.zoom=n,D.scale=-1):M&&(D.scale=S,D.zoom=-1)}f.resolve();return f}if(t&&(t=this._convertGeometry(this,t),!t)||p&&(p=this._convertGeometry(this,p),!p)||
c&&(c=this._convertGeometry(this,c),!c))return f.reject(),f;ca&&p&&r&&(p=U(this.extent,g,k,r));a&&p&&r&&(p=U(a.divExtent,g,k,r));if(q)if(da)h=this.getMinZoom(),q=this.getMaxZoom(),n<h?n=h:n>q&&(n=q),h=n-(a?a.level:this.getLevel());else{h=0<n?-1:1;var z=la?n:null}if(!c)if(y.isDefined(h))da?(g=a?a.level:this.getLevel(),g=this.__getExtentForLevel(g+h,t,b).extent):(g=(a?a.end:this.extent).expand(z||(0<h?.5*h:2*-h)),z&&t&&(g=g.centerAt(t))),g&&(t?c=g:(l=p||b.getCenter(),k=g.getWidth(),u=g.getHeight(),
g=l.x>=b.xmin&&l.x<=b.xmax?(l.x-b.xmin)/b.getWidth():.5,c=l.y>=b.ymin&&l.y<=b.ymax?(l.y-b.ymin)/b.getHeight():.5,g=l.x-g*k,l=l.y-c*u,c=new v(g,l,g+k,l+u,this.spatialReference)));else if(M)c=L.getExtentForScale(this,S,b);else if(y.isDefined(x))c=b.expand(x);else if(l||u)a?(c=a.end,p=c.getCenter(),z=ka(c,g,k,p),z.x+=l,z.y+=u,z=U(c,g,k,z),c=c.offset(z.x-p.x,z.y-p.y)):(l=new C(g/2+l,k/2+u),l=U(b,g,k,l),k=b.getWidth(),u=b.getHeight(),g=l.x-k/2,l=l.y-u/2,c=new v(g,l,g+k,l+u,this.spatialReference));c||(t?
(b=a?a.end:b,k=b.getWidth(),u=b.getHeight(),g=t.x-k/2,l=t.y-u/2,c=new v(g,l,g+k,l+u,this.spatialReference)):a&&(c=a.end));c?(this._extentDfd&&-1===this._extentDfd.fired&&(this._extentDfd.then(null,Ua),this._extentDfd.reject()),this._extentDfd=f,this.__setExtent(c,null,r,d,a,e)):f.reject();return f},__setExtent:function(a,b,c,d,e,f){try{if(this._firstLayerId)this.extent=a;else{var g=!0,k=this.spatialReference,h=e?e.divExtent:this.extent,n=this._fixExtent(a,d||!1);a=n.extent;var q=a.getWidth(),x=a.getHeight(),
p=Math.round;if(h){var r=p(1E6*h.getWidth()),t=p(1E6*q),la=p(1E6*h.getHeight()),S=p(1E6*x);g=r!==t||la!==S}var M,l=e&&e.rect,u=e&&e.divExtent;if(F.zoomDuration&&g&&h){u=u||new v(h);l=l||{left:h.xmin,top:h.ymax,width:h.getWidth(),height:h.getHeight()};var ca={left:a.xmin,top:a.ymax,width:q,height:x};var da=new P(a.xmin,a.ymax,k),D=new P(a.xmin,a.ymin,k),z=new P(this.extent.xmin,this.extent.ymax,k),Va=new P(this.extent.xmin,this.extent.ymin,k);(M=Ma.getLineIntersection(z,da,Va,D,k))||e||(g=!1)}this._ratioW=
this.width/q;this._ratioH=this.height/x;var A=this._zoomAnimDiv;if(g)if(H(this._layersDiv,{left:"0px",top:"0px"}),b=new C(0,0),this.__visibleRect.x=this.__visibleRect.y=0,l&&ca){this._delta=b;A.id="_zAD";A.startingExtent=u;A.extent=a;A.levelChange=g;A.newLod=n.lod;A.anchor=c?c:!M&&e?e.anchor:ka(this.extent,this.width,this.height,M);var W=this.extent.getWidth()/a.getWidth();F.zoomAnimationThrottled&&1024<(1>W?1/W:W)?(this.__zoomStart(u,A.anchor),this.__zoom(u,1,A.anchor),this._fireOnScale(1,A.anchor,
!0),this.__zoomEnd(a,W,A.anchor,n.lod,g)):(this._zoomAnim=ma.resize({node:A,start:l,end:ca,duration:F.zoomDuration,rate:F.zoomRate,beforeBegin:e?null:this._zoomStartHandler,onAnimate:this._zoomingHandler,onEnd:this._zoomEndHandler}).play(),this._fireOnScale(W,A.anchor,f))}else this._updateExtent(a,g,f),this._fireExtChg([this.extent,b,g,this.__LOD=n.lod]);else if(!this.__panning)if(!1===this.loaded||f)this._updateExtent(a,g,f),this._fireExtChg([this.extent,b,g,this.__LOD=n.lod]);else{this.__panning=
!0;l=(new Q(0,0,this.width,this.height,this.spatialReference)).getCenter();l.x=p(l.x);l.y=p(l.y);var ea=this._delta=this.toScreen(a.getCenter()),Wa=Math.abs(l.x-ea.x),Xa=Math.abs(l.y-ea.y);this.optimizePanAnimation&&(Wa>2*this.width||Xa>2*this.height)?(this.__panStart(0,0),this.__pan(0,0),this.__visibleRect.x=this.__visibleRect.y=this.__visibleDelta.x=this.__visibleDelta.y=0,this.__panning=!1,this._delta=null,this._updateExtent(a,!1,f),this.onPanEnd(this.extent,new C(0,0)),this._fireExtChg([this.extent,
new C(0,0),!0,this.__LOD])):(this.onPanStart(this.extent,new C(0,0)),this._panAnim=ma.slideTo({node:A,left:l.x-ea.x,top:l.y-ea.y,duration:F.panDuration,rate:F.panRate,onAnimate:this._panningHandler,onEnd:this._panEndHandler}),this._panAnim.play())}}}catch(wa){console.log(wa.stack),console.error(wa)}},_fireOnScale:function(a,b,c){if("css-transforms"===this.navigationMode){var d=this.__visibleDelta;this.onScale(Da.scaleAt(a,{x:-1*(this.width/2-(b.x-d.x)),y:-1*(this.height/2-(b.y-d.y))}),c)}},_stopAnim:function(){var a=
this._zoomAnim,b=this._panAnim;if(a&&a._active){a.stop();b=a.curve.getValue(a._getStep());var c=parseFloat(b.left),d=parseFloat(b.top);a=a.node;return{anchor:a.anchor,start:a.startingExtent,end:a.extent,level:a.newLod&&a.newLod.level,rect:b,divExtent:new v(c,d-parseFloat(b.height),c+parseFloat(b.width),d,this.spatialReference)}}b&&b._active&&(b.stop(),b._fire("onEnd",[b.node]))},__getExtentForLevel:function(a,b,c){var d=this.__tileInfo;d=d&&d.lods;a=y.isDefined(a)?a:0;c=c||this.extent;b=b||c&&c.getCenter();
if(d){if(b){c=this.getMinZoom();var e=this.getMaxZoom();a>e&&(a=e);a<c&&(a=c);a=d[a];d=this.width*a.resolution/2;c=this.height*a.resolution/2;return{extent:new v(b.x-d,b.y-c,b.x+d,b.y+c,b.spatialReference),lod:a}}}else if(c)return{extent:c.expand(!a||1>a?1:a).centerAt(b)};console.log("Map: "+this.invalidExtent)},_jobs:0,_incr:function(){1===++this._jobs&&(this.updating=!0,this.attr("data-updating",""),this.onUpdateStart())},_decr:function(){var a=--this._jobs;a?0>a&&(this._jobs=0):(this.updating=
!1,this.attr("data-updating"),this.onUpdateEnd())},_fireEvent:function(a,b){this[a]&&this[a].apply(this,b)},_updateExtent:function(a,b,c){this.extent=a;a=this.spatialReference;this._viewInfo={view:new La({viewingMode:"map",scale:this.getScale()}),sr:a,version:b?++ua:ua};(b||c)&&this._setClipRect();this._calcGeographicExtent()},_calcGeographicExtent:function(){var a=this.spatialReference;a&&(a.isWebMercator()?this.geographicExtent=ia.webMercatorToGeographic(this._getAvailExtent(),!0):4326===a.wkid&&
(this.geographicExtent=new v(this._getAvailExtent().toJson())))},_fireExtChg:function(a){this.attr("data-zoom",this.getZoom());this.attr("data-scale",this.getScale());this._fireEvent("onExtentChange",a);if(a=this._extentDfd)delete this._extentDfd,a.resolve()},attr:function(a,b){var c=this.container;c&&(null==b?c.removeAttribute(a):c.setAttribute(a,b));return this},onUpdateStart:function(){},onUpdateEnd:function(){},onLoad:function(){this._setClipRect();this._calcGeographicExtent()},onBeforeUnload:function(){},
onUnload:function(){},onExtentChange:function(a,b,c){},onTimeExtentChange:function(){},onWebGLEnabledChange:function(){},onLayerAdd:function(){},onLayerAddResult:function(){},onLayersAddResult:function(){},onLayerRemove:function(){},onLayersRemoved:function(){},onLayerReorder:function(){},onLayersReordered:function(){},onLayerSuspend:function(){},onLayerResume:function(){},onPanStart:function(){},onPan:function(){},onPanEnd:function(){},onScale:function(){},onZoomStart:function(){},onZoom:function(){},
onZoomEnd:function(){},onResize:function(){this._setClipRect()},onReposition:function(){},destroy:function(){this._destroyed||(this.onBeforeUnload(this),this.removeAllLayers(),this.releaseAllWebGLContexts(),this._cleanUp(),clearTimeout(this._resizeTimerHandle),this._gc&&this._gc._cleanUp(),this._destroyed=!0,this.onUnload(this))},setCursor:function(a){H(this.__container,"cursor",this.cursor=a)},setMapCursor:function(a){this.setCursor(this._cursor=a)},resetMapCursor:function(){this.setCursor(this._cursor)},
setBackgroundColor:function(a){a&&!a.declaredClass&&(a=new Ja(a));this.backgroundColor=a||null;var b="";a&&(b=9>K("ie")?a.toHex():"rgba("+a.toRgba().join(",")+")");O.set(this.root,{backgroundColor:b})},setInfoWindow:function(a){var b=this.infoWindow;b&&b.unsetMap(this);this.infoWindow=a;this.loaded&&a&&a.setMap(this)},setInfoWindowOnClick:function(a){this._params.showInfoWindowOnClick=a;this.popupManager&&this.popupManager.set("enabled",a)},getInfoWindowAnchor:function(a){return this.infoWindow&&
this.infoWindow._getAnchor&&this.infoWindow._getAnchor(a)||"upperright"},toScreen:function(a,b){return ka(this.extent,this.width,this.height,a,b)},toMap:function(a){return U(this.extent,this.width,this.height,a)},addLayer:function(a,b){a&&!this.getLayer(a.id)&&this._addLayer(a,a instanceof E?this.graphicsLayerIds:this.layerIds,b);return a},addLayers:function(a){var b=[],c=a.length,d,e=a.length;var f=B.connect(this,"onLayerAddResult",function(g,k){-1!==m.indexOf(a,g)&&(c--,b.push({layer:g,success:!k,
error:k}),c||(B.disconnect(f),this.onLayersAddResult(b)))});for(d=0;d<e;d++)this.addLayer(a[d]);return this},removeLayer:function(a,b){var c=a.id,d=a instanceof E?this.graphicsLayerIds:this.layerIds,e=R(d,c);0<=e&&(this._forgetLayer(a),d.splice(e,1),this.loaded||this._firstLayerId!==c||(this._firstLayerId=null),a instanceof E?this._detachGraphicsLayer(a):a.loaded&&(a.getMap()&&a._unsetMap(this,this._layersDiv),-1!==a.declaredClass.indexOf("VETiledLayer")&&this._onBingLayerRemove(a)),delete this._layers[c],
delete this._layerDivs[c],b||this._reorderLayers(d),this.onLayerRemove(a))},removeAllLayers:function(){var a=this.layerIds,b;for(b=a.length-1;0<=b;b--)this.removeLayer(this._layers[a[b]],1);a=this.graphicsLayerIds;for(b=a.length-1;0<=b;b--)this.removeLayer(this._layers[a[b]],1);this.onLayersRemoved()},reorderLayer:function(a,b){I.isString(a)&&(ya.deprecated(this.declaredClass+": Map.reorderLayer(/*String*/ id, /*Number*/ index) deprecated. Use Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",
null,"v2.0"),a=this.getLayer(a));var c=a.id,d=a instanceof E?this.graphicsLayerIds:this.layerIds;0>b?b=0:b>=d.length&&(b=d.length-1);a=R(d,c);-1!==a&&a!==b&&(d.splice(a,1),d.splice(b,0,c),this._reorderLayers(d))},getLayer:function(a){return this._layers[a]},setWebGLEnabled:function(a){var b=this.webglEnabled;this.webglEnabled=(a||!1)&&va;if(b!==this.webglEnabled)this.onWebGLEnabledChange()},isWebGLContextAvailable:function(){return Z.isContextAvailable()&&(-1===this.maxWebGLContexts||0<this.maxWebGLContexts&&
this._webglContextOwners.length<this.maxWebGLContexts)},ownsWebGLContext:function(a){return-1!==m.indexOf(this._webglContextOwners,a)},acquireWebGLContext:function(a){return-1!==m.indexOf(this._webglContextOwners,a)?!0:this.isWebGLContextAvailable()?(Z.acquireContext(a),this._webglContextOwners.push(a),!0):!1},releaseWebGLContext:function(a){var b=m.indexOf(this._webglContextOwners,a);-1!==b&&this._webglContextOwners.splice(b,1);Z.releaseContext(a)},releaseAllWebGLContexts:function(){var a=this._webglContextOwners.slice(0);
m.forEach(a,function(b){this.releaseWebGLContext(b)},this)},syncHitTestForWebGL:function(a){var b,c=a.screenPoint;a=this.graphicsLayerIds.slice(0).reverse();m.some(a,function(d){d=this.getLayer(d);d.loaded&&!d.suspended&&d.hasWebGLSurface()&&(b=d._div.syncHitTest(c.x,c.y));return!!b},this);return b},setExtent:function(a,b){a=new v(a.toJson());var c=a.getWidth(),d=a.getHeight();return 0===c&&0===d?this.centerAt(new P({x:a.xmin,y:a.ymin,spatialReference:a.spatialReference&&a.spatialReference.toJson()})):
this._extentUtil(null,null,a,b)},getTargetExtent:function(a){if(a)return a=new v(a.toJson()),0!==a.getWidth()&&0!==a.getHeight()&&(a=(a=this._convertGeometry(this,a))&&this._fixExtent(a).extent),a},centerAt:function(a){return this._extentUtil(null,{mapCenter:a})},centerAndZoom:function(a,b){return this._extentUtil({targetLevel:b,mapCenter:a,levelOrFactor:!0})},getScale:function(){return this.__LOD?this.__LOD.scale:L.getScale(this)},getResolution:function(){return this.__LOD?this.__LOD.resolution:
this.extent?this.extent.getWidth()/this.width:0},getResolutionInMeters:function(){return this.getResolution()*L.getUnitValueForSR(this.spatialReference)},getResolutionForPopup:function(){var a=this.getResolution(),b=this.getResolutionInMeters(),c=b/16;return 10>=c?0:a/b*c},getMinResolution:function(){return this._minResolution},getMaxResolution:function(){return this._maxResolution},getMinScale:function(){return this._params.minScale},getMaxScale:function(){return this._params.maxScale},getViewInfo:function(){return this._viewInfo},
setScale:function(a){return this._extentUtil({targetScale:a})},getLayersVisibleAtScale:function(a){var b=[];(a=a||this.getScale())&&m.forEach(this.layerIds.concat(this.graphicsLayerIds),function(c){c=this.getLayer(c);c.isVisibleAtScale(a)&&b.push(c)},this);return b},getNumLevels:function(){var a=this.getMinZoom(),b=this.getMaxZoom();return a===b&&0>a?0:b-a+1},getLevel:function(){return this.__LOD?this.__LOD.level:-1},setLevel:function(a){if(-1<a)return this._extentUtil({targetLevel:a})},getZoom:function(){return this.getLevel()},
setZoom:function(a){return this.setLevel(a)},getMinZoom:function(){return this._params.minZoom},getMaxZoom:function(){return this._params.maxZoom},setBasemap:function(a){if(I.isObject(a)){var b=a;a=b.title}else b=G&&G[a];if(b){this._basemapDfd&&!this._basemapDfd.isFulfilled()&&this._basemapDfd.cancel();var c=[],d=0;m.forEach(b.baseMapLayers||b.layers,function(f){var g={id:f.id,displayLevels:f.displayLevels,opacity:y.isDefined(f.opacity)?f.opacity:null,visible:y.isDefined(f.visibility)?f.visibility:
null};if(g=this._createBaseLayerInstance(f,g,a))c.push(g),f.isReference||d++},this);c.length&&d?(this._basemapDfd=Ka(c).otherwise(w(this,function(f){this._basemapPending=!1;f&&"cancel"===f.dojoType&&m.forEach(c,function(g){g.cancel()});throw f;})).then(function(f){var g=[],k=[];m.forEach(f,function(h){h&&(h.layerInfo&&g.push(h.layerInfo),h.layer&&k.push(h.layer))});return{basemapName:a,infos:g,layers:k}}).then(w(this,this._waitForBaseLayers)).then(w(this,this._setBasemap)),this._basemapPending=!this.loaded&&
!this._basemapDfd.isFulfilled()):console.log("Map.setBasemap: "+y.substitute({basemapName:a},this.invalidBasemap))}else{b=[];for(var e in G)b.push(e);console.log("Map.setBasemap: "+y.substitute({basemapName:a,list:b.join(",")},this.unknownBasemap))}},_createBaseLayerInstance:function(a,b,c){var d=new fa;if(a.type)switch(a.type){case "OpenStreetMap":d.resolve({layerInfo:a,layer:new qa(b)});break;case "VectorTile":N(["./layers/VectorTileLayer"],function(f){e=oa.normalize(a.url);d.promise.isFulfilled()||
d.resolve({layerInfo:a,layer:new f(e,b)})});break;default:return console.log("Map.setBasemap: "+y.substitute({basemapName:c,type:a.type},this.unknownLayerType)),null}else{var e=oa.normalize(a.url);d.resolve({layerInfo:a,layer:new Pa(e,b)})}return d.promise},_waitForBaseLayers:function(a){var b=new fa(Ha._dfdCanceller);b.promise.otherwise(function(d){if(d&&"cancel"===d.dojoType){for(var e in b._layerEvents)d=b._layerEvents[e],B.disconnect(d[0]),B.disconnect(d[1]);delete b._layerEvents}});if(!this.loaded)return b.resolve(a),
b.promise;var c=function(d){b._pendingLayers--;d=m.indexOf(a.layers,this);-1<d&&(d=b._layerEvents[d])&&(B.disconnect(d[0]),B.disconnect(d[1]));0>=b._pendingLayers&&(delete b._layerEvents,b.isFulfilled()||b.resolve(a))};b._pendingLayers=0;b._layerEvents={};m.forEach(a.layers,function(d,e){d&&b._pendingLayers++});m.forEach(a.layers,function(d,e){d&&(d.loaded?c(d):b._layerEvents[e]=[B.connect(d,"onLoad",d,c),B.connect(d,"onError",d,c)])});return b.promise},_setBasemap:function(a){var b=a.layers,c=a.infos,
d=0,e=!0;this._basemapPending=!1;this.loaded&&(m.forEach(b,function(g,k){g.loaded&&(c[k].isReference||d++)}),e=d);if(e){if(this.basemapLayerIds){var f={basemapName:this._basemap,infos:G&&G[this._basemap]&&G[this._basemap].baseMapLayers};f.basemapName||(m.forEach(this.basemapLayerIds,function(g){if(this.getLayer(g)instanceof qa)return f.basemapName="osm",f.infos=G&&G.osm&&G.osm.baseMapLayers,!1},this),f.basemapName||(f=null))}this._removeBasemap();this._basemap=a.basemapName;this.basemapLayerIds=this._addBasemapLayers(b,
c);this.attr("data-basemap",this.getBasemap());this.emit("basemap-change",{current:a,previous:f})}},_addBasemapLayers:function(a,b){var c=[],d=[],e=0;m.forEach(a,function(f,g){b[g].isReference?c.push(f):(this.addLayer(f,e++),d.push(f.id))},this);c.length&&m.forEach(c,function(f){f.attr("data-reference",!0);this.addLayer(f,"top");d.push(f.id)},this);return d},_removeBasemap:function(){var a=this.basemapLayerIds,b;a&&a.length&&m.forEach(a,function(c){(b=this.getLayer(c))&&this.removeLayer(b)},this)},
getBasemap:function(){return this._basemap||""},translate:function(a,b){a=a||0;b=b||0;if(!this._txTimer){this._tx=this._ty=0;var c=this.toScreen(this.extent.getCenter());this.__panStart(c.x,c.y)}this._tx+=a;this._ty+=b;this.__pan(this._tx,this._ty);clearTimeout(this._txTimer);this._txTimer=setTimeout(this._endTranslate,150)},_endTranslate:function(){clearTimeout(this._txTimer);this._txTimer=null;var a=this._tx,b=this._ty;this._tx=this._ty=0;this.__panEnd(a,b)},setTimeExtent:function(a){a=(this.timeExtent=
a)?new a.constructor(a.toJson()):null;this.onTimeExtentChange(a)},setTimeSlider:function(a){this.timeSlider&&(V(this._tsTimeExtentChange_connect),this.timeSlider=this._tsTimeExtentChange_connect=null);a&&(this.timeSlider=a,this.setTimeExtent(a.getCurrentTimeExtent()),this._tsTimeExtentChange_connect=aa(a,"onTimeExtentChange",this,"setTimeExtent"))},setVisibility:function(a){if(this.visible!==a){this.visible=a;a||(this._display=this.container.style.display);this.container.style.display=a?this._display:
"none";if(this.autoResize){var b=a?"resume":"pause";this._rszSignal[b]();this._oriSignal[b]()}a&&this.resize()}return this},resize:function(a){clearTimeout(this._resizeTimerHandle);this._destroyed||(!0===a?this._execResize():this._resizeTimerHandle=setTimeout(this._execResize,this.resizeDelay))},_timedResize:function(){this._resizeTimerHandle||this._execResize()},_execResize:function(){clearTimeout(this._resizeTimerHandle);this._resizeTimerHandle=null;this.reposition();this._resize();this.autoResize&&
this._startResizeTimer()},_resize:function(){var a=this.width,b=this.height,c=O.get(this.container,"display"),d=Y.getContentBox(this.container);if(!("none"===c||0>=d.w||0>=d.h||a===d.w&&b===d.h)){if(c=this._zoomAnim||this._panAnim)c.stop(),c._fire("onEnd",[c.node]);H(this.root,{width:(this.width=d.w)+"px",height:(this.height=d.h)+"px"});d=this.width;c=this.height;this.attribution&&this.attribution.domNode&&O.set(this.attribution.domNode,"maxWidth",Math.floor(d*this._mapParams.attributionWidth)+"px");
this.__visibleRect.update(this.__visibleRect.x,this.__visibleRect.y,d,c);this.__visibleDelta.update(this.__visibleDelta.x,this.__visibleDelta.y,d,c);var e=new Q(this.extent);a=(new Q(e.x,e.y,d/a*e.width,c/b*e.height,this.spatialReference)).getExtent();this.onResize(a,d,c);this._extentUtil(null,null,a,null,!0)}},reposition:function(){var a=this.position,b=a.x,c=a.y;this._reposition();a=this.position;if(b!==a.x||c!==a.y)this.onReposition(a.x,a.y)},_reposition:function(){var a=Y.position(this.container,
!0),b=Y.getPadBorderExtents(this.container);this.position.update(a.x+b.l,a.y+b.t)},_setClipRect:function(){delete this._clip;var a=7>=K("ie")||void 0===K("ie")&&7<=K("trident")?"rect(auto,auto,auto,auto)":"auto";if(this.wrapAround180){var b=this.width,c=this.height,d=this._getFrameWidth(),e=b-d;0<e&&(a=e/2,a="rect(0px,"+(a+d)+"px,"+c+"px,"+a+"px)",c=this.extent.getWidth(),b=d/b*c,this._clip=[(c-b)/2,b])}H(this.__container,"clip",a)},_getAvailExtent:function(){var a=this.extent,b=this._clip;if(b){if(!a._clip){var c=
new Q(a);c.width=b[1];c.x+=b[0];a._clip=c.getExtent()}return a._clip}return a},_fixedPan:function(a,b){return this._extentUtil(null,{dx:a,dy:b})},panUp:function(){return this._fixedPan(0,-.75*this.height)},panUpperRight:function(){return this._fixedPan(.75*this.width,-.75*this.height)},panRight:function(){return this._fixedPan(.75*this.width,0)},panLowerRight:function(){return this._fixedPan(.75*this.width,.75*this.height)},panDown:function(){return this._fixedPan(0,.75*this.height)},panLowerLeft:function(){return this._fixedPan(-.75*
this.width,.75*this.height)},panLeft:function(){return this._fixedPan(-.75*this.width,0)},panUpperLeft:function(){return this._fixedPan(-.75*this.width,-.75*this.height)},enableSnapping:function(a){a=a||{};if("esri.SnappingManager"===a.declaredClass)this.snappingManager=a;else{var b=ba++,c=this;this._rids&&this._rids.push(b);N(["./SnappingManager"],function(d){var e=c._rids?m.indexOf(c._rids,b):-1;-1!==e&&(c._rids.splice(e,1),c.snappingManager=new d(I.mixin({map:c},a)))})}return this.snappingManager},
disableSnapping:function(){this.snappingManager&&this.snappingManager.destroy();this.snappingManager=null},_createLabelLayer:function(){!this._labels&&ja&&this.loaded&&(this._labels=new ja({id:"_internal_LabelLayer"}),this._labels._setMap(this,this._gc._surface),this._processLabelLayers(),this.on("layers-reordered",this._processLabelLayers))},_processLabelLayers:function(){null==this._labelProcessor&&(this._labelProcessor=setTimeout(this._updateLabelLayers,0))},_updateLabelLayers:function(){this._labelProcessor=
null;this._labels&&(this._labels.removeAllFeatureLayers(),m.forEach(this.graphicsLayerIds,function(a){a=this.getLayer(a);"function"===typeof a.applyEdits?this._labels.addFeatureLayer(a):"esri.layers.WFSLayer"===a.declaredClass&&this._labels.addFeatureLayer(a)},this))},_getMapImageLyr:function(){this.loaded&&!this._mapImageLyr&&(this._mapImageLyr=new Qa,this._mapImageLyr._setMap(this,this._layersDiv),this._placeMapImageLyr());return this._mapImageLyr},_placeMapImageLyr:function(){for(var a=this.layerIds,
b=this._layerDivs,c=!1,d,e,f=a.length-1;0<=f;f--)if(d=a[f],e=this.getLayer(d),d=b[d],e&&d&&!e._isReference){J.place(this._mapImageLyr._div,d,"after");c=!0;break}c||J.place(this._mapImageLyr._div,this._layersDiv,"first")}});K("extend-esri")&&(Ea._CoreMap=X);return X});