// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/BrowseItems","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/window dojo/_base/event dojo/dom-class dojo/dom-style dojo/dom-attr dojo/string dojo/on dojo/aspect dojo/has dojo/dom dojo/dom-construct dojo/mouse dojo/topic dojo/query dojo/parser dijit/registry dijit/TooltipDialog dijit/popup dojo/promise/all dojo/Deferred dgrid/Grid dgrid/extensions/Pagination dgrid/extensions/DijitRegistry dgrid/OnDemandGrid dgrid/Selection dgrid/selector dgrid/Keyboard dgrid/util/mouse dgrid/util/touch put-selector/put dojo/store/Observable dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ../arcgis/Portal ../Evented ../PluginTarget dojo/i18n!../nls/jsapi ./_AppTemplateFiltersMixin ./_RefreshMixin ../kernel ../lang ../config ../geometry/webMercatorUtils ../tasks/GeometryService ../SpatialReference dojo/NodeList-dom".split(" "),
function(u,f,k,z,A,n,x,q,C,v,ca,L,r,t,M,N,h,da,D,O,E,ea,F,G,P,H,Q,I,fa,ha,J,ia,R,S,T,U,V,w,ja,W,X,ka,K,Y,y,Z,B,aa,la){var ba=u(null,{idProperty:"id",constructor:function(a){u.safeMixin(this,a)},get:function(a,c){return w.PortalUtil.request(this.portalUrl+"content/items/"+a,c).then(function(e){return new w.PortalItem(f.mixin(e,{portal:this.portal}))})},getIdentity:function(a){return a[this.idProperty]},query:function(a,c){a=f.isObject(a)?a:{q:a};var e=null;if(c){a=f.mixin(a,{num:c.count,start:(c.start||
0)+1});if(c.sort&&c.sort.length){var l=c.sort[0];a=f.mixin(a,{sortField:encodeURIComponent("created"===l.attribute?"uploaded":l.attribute),sortOrder:l.descending?"desc":"asc"})}c.useExtent&&c.extent&&(a.bbox=c.extent);c.queryType&&"group"===c.queryType&&(e="group")}c="group"===e?this.portal.queryGroups(a,!0).then(function(d){d.results.total=d.total;return d.results}):this.portal.queryItems(a,!0).then(function(d){d.results.total=d.total;return d.results});return w.PortalResult(c)}});z=u([T,U,V,W],
{templateString:'\x3cdiv\x3e\x3cdiv class\x3d"top-bar"\x3e\x3cdiv  class\x3d"esriFloatLeading instructions"\x3e\x3cspan class\x3d"messageLeft hide" data-dojo-attach-point\x3d"messageNodeLeft"\x3e\x3c/span\x3e\x3cspan class\x3d"messageRight hide" data-dojo-attach-point\x3d"messageNodeRight"\x3e\x3c/span\x3e\x3ca tabIndex\x3d"-1" data-dojo-attach-point\x3d"helpLink" class\x3d"esriHelpIcon hide" title\x3d"${i18n.browseItems.learnMoreConfigurableApps}" href\x3d"#" target\x3d"_blank"\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d"${id}_search"class\x3d"searchBar esriFloatTrailing"\x3e\x3cinput tabIndex\x3d"1" placeholder\x3d"${i18n.browseItems.searchTitle}" class\x3d"esriSearchBox dijitTextBox" type\x3d"search"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"gallery"\x3e\x3cdiv class\x3d"gallery-left  quiet-scroll"\x3e\x3cul class\x3d"filters"\x3e\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d"templates gallery-right"\x3e\x3cp id\x3d"${id}_filterTitle" class\x3d"filter-title hide" data-dojo-attach-point\x3d"filterDescription"\x3e\x3c/p\x3e\x3cdiv id\x3d"${id}_grid"class\x3d"dgrid-autoheight quiet-scroll"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv  class\x3d"loaderWrap" data-dojo-attach-point\x3d"loaderWrap"\x3e\x3c/div\x3e\x3cdiv  class\x3d"js-info-panel templateInfoPanel" data-dojo-attach-point\x3d"infoPanel"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
galleryTemplate:"\x3cdiv style\x3d'opacity:1;' class\x3d'grid-item gallery-view'\x3e${item:_formatThumbnail}${item:_formatItemTitle}\x3cp class\x3d\"template-overlay\" style\x3d\"display:none;\"\x3e${i18n.browseItems.selectDetails}\x3c/p\x3e\x3c/div\x3e",infoPanelTemplate:'\x3cdiv\x3e\x3cdiv class\x3d"template-info-showing"\x3e\x3cdiv class\x3d"thumbnail"\x3e\x3cimg src\x3d"${item:_formatInfoPanelImage}"\x3e\x3c/div\x3e\x3ch4\x3e${item.title}\x3c/h4\x3e\x3cdiv class\x3d"template-info"\x3e\x3cp class\x3d"quiet-scroll"\x3e${item.snippet}\x3c/p\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"panel-actions"\x3e\x3cbutton class\x3d"btn blue btn-main" id\x3d"on-next"\x3e${i18n.browseItems.configure}\x3c/button\x3e\x3cbutton class\x3d"btn btn-cancel" id\x3d"close-panel"\x3e${i18n.common.close}\x3c/button\x3e\x3c/div\x3e\x3cdiv\x3e',
_popupTemplate:'\x3cdiv class\x3d"esriBrowsePopup quiet-scroll"\x3e\x3cp\x3e{summary}\x3c/p\x3e\x3c/div\x3e',showInfoPanel:!0,isAutoClose:!0,showTooltip:!1,filterWithinGroup:!0,checkIsButtonEnabled:!1,baseClass:"esriBrowseItemsCtr",i18n:X,postMixInProperties:function(){this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this.self?(this._portal=new w.Portal({url:this.portalUrl,self:this.self}),this._init(),this._portal.on("load",f.hitch(this,function(){this.emit("portal-load",
{portal:this._portal});this._fetchData()}))):(this._portal=new w.Portal(this.portalUrl),this._portal.signIn().then(f.hitch(this,function(){this.emit("portal-load",{portal:this._portal});this._init();this._fetchData()})))},_init:function(){this._canSearchPublic=this.self?this.self.canSearchPublic:this._portal.canSearchPublic;this.query=f.mixin(this.query||{},{get:function(a){return this[a]&&this[a].length?"("+this[a].join(" OR ")+") ":""},toString:function(){return{q:this.get("groups")+this.get("tags")+
this.get("persistentTypekeywords")+this.get("typekeywords")+this.get("types")+this.get("owners")+this.get("orgids")+this.get("custom")+(this.query||"")+(this.search||"")+' -type:"Attachment" -tags:"mature support"'}}});this.self?this.self.canSearchPublic=!0:this._portal.canSearchPublic=!0;this.galleryTemplate=this.plugIn&&this.plugIn.galleryTemplate||this.galleryTemplate;this.infoPanelTemplate=this.plugIn&&this.plugIn.infoPanelTemplate||this.infoPanelTemplate;if(this.helpLinkUrl=this.plugIn&&this.plugIn.helpLinkUrl||
"")q.set(this.helpLink,"href",this.helpLinkUrl),n.remove(this.helpLink,"hide");h(".templates",this.domNode).addClass("fade");h(".dgrid-footer",this.domNode).addClass("hide");x.set(this.infoPanel,"display","none")},destroy:function(){this.inherited(arguments);this._grid&&this._grid.destroy();this._img_connect&&(this._img_connect.remove(),this._img_connect_error.remove());this._queryTimer&&clearTimeout(this._queryTimer);this._grid=this._portal=null},closeInfoPanel:function(){r.byId("close-panel").click()},
_setItemQueryAttr:function(a){this.itemQuery=a},_setPluginAttr:function(a){this.addPlugin(a)},_setMessageAttr:function(a){this.set("messageRight",a)},_setMessageRightAttr:function(a){"string"===typeof a?q.set(this.messageNodeRight,"innerHTML",a):a instanceof HTMLElement&&t.place(a,this.messageNodeRight);n.remove(this.messageNodeRight,"hide")},_setMessageLeftAttr:function(a){"string"===typeof a?q.set(this.messageNodeLeft,"innerHTML",a):a instanceof HTMLElement&&t.place(a,this.messageNodeLeft);n.remove(this.messageNodeLeft,
"hide")},_setDisabledAttr:function(a){var c=D.findWidgets(this.domNode).concat(D.findWidgets(this._content));k.forEach(c,function(e){e.set("disabled",a)});n[a?"add":"remove"](this._interval.domNode,"dijitTextBoxDisabled")},_setSortAttr:function(a){this.sortAttribute=a},_setSortDescendingAttr:function(a){this.sortDescending=a},_getSelectionAttr:function(){var a=this._grid.selection,c;for(c in a)if(a.hasOwnProperty(c))break;return c&&this._grid.row(c).data},_setGalleryTemplateAttr:function(a){y.isDefined(a)&&
(this.galleryTemplate=a)},_setFormatThumbnailAttr:function(a){y.isDefined(a)&&"function"===typeof a&&(this._formatThumbnail=a)},_setFormatItemTitleAttr:function(a){y.isDefined(a)&&"function"===typeof a&&(this._formatItemTitle=a)},_setRowsPerPageAttr:function(a){this._set("rowsPerPage",a)},_setPagingLinksAttr:function(a){this._set("pagingLinks",a)},_getQueryAttr:function(){return this.query},_setQueryAttr:function(a){this._set("query",a);this._grid&&this._grid.set("query",a.toString())},_setExtentAttr:function(a){a&&
this._set("extent",this._extentToString(a))},_setUseExtentAttr:function(a){this._set("useExtent",a)},_setQueryTypeAttr:function(a){this._set("queryType",a)},_setFetchTimeoutAttr:function(a){this._set("fetchTimeout",a)},_setShowInfoPanelAttr:function(a){this._set("showInfoPanel",a)},_setSelectionModeAttr:function(a){-1===k.indexOf(["extended","toggle","multiple","single","none"],a)&&(console.log("Incorrect Value provided for selectionMode. It is one of the following: extended, toggle, multiple, single, none"),
a="single");this._set("selectionMode",a)},_setDemandListAttr:function(a){this._set("demandList",a)},_validate:function(){return!!this.get("selection")},reset:function(){h(".esriSearchBox",r.byId(this.id+"_search")).forEach(function(d){q.set(d,"value","")});this.query.search="";if(this.plugIn.filters){var a=[],c=[],e=[],l=[];h("li.active",this.domNode).forEach(function(d){n.remove(d,"active");var m=this.plugIn.filters[d.childNodes[0].id];d=k.map(m.tags,function(g){return'tags:"'+g+'"'},this);var b=
k.map(m.owners,function(g){return'owner:"'+g+'"'},this),p=k.map(m.orgids,function(g){return'orgid:"'+g+'"'},this);m=k.map(m.typekeywords,function(g){return'typekeywords:"'+g+'"'},this);a.push(d);e.push(b);l.push(p);c.push(m)},this);this.query.tags=k.filter(this.query.tags,function(d){return-1!==k.indexOf(a,d)});this.query.owners=k.filter(this.query.owners,function(d){return-1!==k.indexOf(e,d)});this.query.orgids=k.filter(this.query.orgids,function(d){return-1!==k.indexOf(l,d)});this.query.typekeywords=
k.filter(this.query.typekeywords,function(d){return-1!==k.indexOf(c,d)});r.byId("all").click()}},_showPopup:function(a){if(!this._isInsideTooltipDialog){this._closePopup();var c=this._grid.row(a);a=h("img",c.element)[0];if(c={summary:c.data.snippet},c.summary)this._tooltip=new O({content:f.replace(this._popupTemplate,c),onMouseEnter:f.hitch(this,function(){this._isInsideTooltipDialog=!0}),onMouseLeave:f.hitch(this,function(){this._isInsideTooltipDialog=!1;this._closePopup()})}),E.open({className:"esriBrowsePopupCtr",
popup:this._tooltip,around:a,orient:["after-centered","before-centered"]}),this._onCloseConnect=h(".dijitDialogCloseIcon",this._tooltip.domNode).on("click",f.hitch(this,function(e){e.preventDefault();this._closePopup()}))}},_closePopup:function(){this._tooltip&&(this._onCloseConnect&&this._onCloseConnect.remove(),E.close(this._tooltip),this._tooltip.destroyRecursive(),this._tooltip=this._onCloseConnect=void 0)},_clearQueryTimeout:function(){clearTimeout(this._queryTimer);this._queryTimer=null},_clearClosePanelTimeout:function(){clearTimeout(this._panelClosing);
this._panelClosing=null;k.forEach(this._panelClickHandles,"item.remove();");t.empty(this.infoPanel)},_createGrid:function(){var a=u([G,P,I,K,H]),c=new S(new ba({portal:this._portal})),e=this.query,l=f.hitch(this,function(b){b.snippet=b.snippet||"";var p=R("div");b=C.substitute(this.galleryTemplate,{item:b,i18n:this.i18n},null,this);t.place(b,p);return p}),d={};this.get("demandList")&&(a=u([G,Q,I,K,H]));this.get("useExtent")&&(d.extent=this.get("extent"),d.useExtent=this.get("useExtent"));this.get("queryType")&&
(d.queryType=this.get("queryType"));var m={store:c,query:e.toString(),selectionMode:this.selectionMode||"single",pagingLinks:this.get("pagingLinks")||2,rowsPerPage:this.plugIn&&this.plugIn.rowsPerPage||this.get("itemsPerPage")||6,loadingMessage:"Loading items...",showLoadingMessage:!1,renderRow:l,noDataMessage:this.i18n.gallery.noItemsToDisplay,deselectOnRefresh:!("multiple"===this.selectionMode||"extended"===this.selectionMode||"toggle"===this.selectionMode),sort:[{attribute:this.sortAttribute||
"title",descending:this.sortDescending||!1}],queryOptions:d};this.get("demandList")&&(m={store:c,query:e.toString(),minRowsPerPage:this.plugIn&&this.plugIn.rowsPerPage||this.get("itemsPerPage")||50,selectionMode:this.selectionMode||"single",loadingMessage:"Loading items...",showLoadingMessage:!1,renderRow:l,pagingMethod:"throttleDelayed",noDataMessage:this.i18n.gallery.noItemsToDisplay,deselectOnRefresh:!("multiple"===this.selectionMode||"extended"===this.selectionMode||"toggle"===this.selectionMode),
sort:[{attribute:this.sortAttribute||"title",descending:this.sortDescending||!1}],queryOptions:d});this._grid=new a(m,this.id+"_grid");this._grid.startup();this.own(v(this.domNode,"click",f.hitch(this,function(b){r.byId("close-panel")&&this.isAutoClose&&r.byId("close-panel").click()})),this._grid.on(J.enterRow,f.hitch(this,function(b){!1===n.contains(this.domNode,"showing")&&this.showInfoPanel&&this._showOverlay(!0,b);this.showTooltip&&!this.showInfoPanel&&this._showPopup(b)})),this._grid.on(J.leaveRow,
f.hitch(this,function(b){this._showOverlay(!1,b);this.showTooltip&&!this.showInfoPanel&&this._closePopup(b)})),this._grid.on(".dgrid-row:click",f.hitch(this,function(b){this.emit("grid-row-click",b);if(!1===n.contains(this.domNode,"showing")&&this.showInfoPanel){b.preventDefault();A.stop(b);this._clearClosePanelTimeout();var p=this.get("selection");this._showOverlay(!1,b);this.showInfoPanel&&this.infoPanelTemplate?(x.set(this.infoPanel,"display","block"),t.place(C.substitute(this.infoPanelTemplate,
{item:p,i18n:this.i18n},function(g){return y.isDefined(g)?g:""},this),this.infoPanel)):x.set(this.infoPanel,"display","none");this.emit("show-info-panel");n.add(this.domNode,"showing");this._panelClickHandles=[h(".template-info-showing .thumbnail img",this.domNode).on("error",f.hitch(this,function(g){q.set(g.target,"src",p.thumbnailUrl)})),h(".panel-actions .btn").on("click",f.hitch(this,function(g){g.preventDefault();A.stop(g);this.checkIsButtonEnabled&&n.contains(g.target,"disabled")||("close-panel"===
g.target.id?(n.remove(this.domNode,"showing"),x.set(this.infoPanel,"display","none"),this._panelClosing=setTimeout(f.hitch(this,function(){k.forEach(void 0,"item.remove();");t.empty(this.infoPanel)},250))):(N.publish("/esri/browseitems/close",g.target.id,this.get("selection")),g={selection:this.get("selection"),action:g.target.id},this.emit("browseitems-close",g)))})),h(".js-info-panel",this.domNode).on("click",f.hitch(this,function(g){this.isAutoClose&&(g.preventDefault(),A.stop(g))})),v(h(".dgrid-footer,.dgrid-header",
this._grid.domNode),M.leave,f.hitch(this,function(g){this.showTooltip&&!this.showInfoPanel&&this._closePopup()}))]}})),this._grid.on("dgrid-refresh-complete",f.hitch(this,function(b){h(".templates",this.domNode).removeClass("fade");h(".loaderWrap",this.domNode).addClass("hide");h(".dgrid-footer",this.domNode)[this._grid._total<=this._grid.rowsPerPage?"addClass":"removeClass"]("hide");this.showTooltip&&!this.showInfoPanel&&this._closePopup()})),this._grid.on("refresh",f.hitch(this,function(){this.showTooltip&&
!this.showInfoPanel&&this._closePopup();this._img_connect&&(this._img_connect.remove(),this._img_connect_error.remove(),this._img_connect_error=this._img_connect=null);this._img_connect=h(".grid-item-thumb",this._grid.domNode).on("load",f.hitch(this,function(b){(b=this._grid.row(b))&&b.element&&h(".grid-item",b.element).addClass("fadeIn").style("opacity","1")}));this._img_connect_error=h(".grid-item-thumb",this._grid.domNode).on("error",f.hitch(this,function(b){q.set(b.target,"src",this._portal.staticImagesUrl+
"/desktopapp.png")}))})),v(r.byId(this.id+"_search"),"keyup",f.hitch(this,function(b){b.preventDefault();this._clearQueryTimeout();this._queryTimer=setTimeout(f.hitch(this,function(){this.query.search=q.get(b.target,"value");this._fetchItems(this.query).then(f.hitch(this,function(){this._clearQueryTimeout()}))}),this.searchKeypressDelay||450)})),v(r.byId(this.id+"_search"),"search",f.hitch(this,function(b){this._queryTimer||(b.preventDefault(),this.query.search=q.get(b.target,"value"),this._fetchItems(this.query))})),
this.watch("extent",f.hitch(this,function(b,p,g){this._grid.queryOptions.extent=this.get("extent");this._grid.queryOptions.useExtent=this.get("useExtent");this._grid.query.bbox=this._grid.queryOptions.useExtent?this._grid.queryOptions.extent:"";this._grid.refresh()})),this.watch("useExtent",f.hitch(this,function(b,p,g){this._grid.queryOptions.extent=this.get("extent");this._grid.queryOptions.useExtent=g;this._grid.query.bbox=this._grid.queryOptions.useExtent?this._grid.queryOptions.extent:"";this._grid.refresh()})));
this.showInfoPanel||("single"===this._grid.selectionMode?this.own(this._grid.on("dgrid-select,dgrid-deselect",f.hitch(this,function(b){b={selection:this.get("selection")};this.emit("select-change",b)}))):-1!==k.indexOf(["toggle","multiple","extended"],this._grid.selectionMode)&&this.own(this._grid.on("dgrid-select,dgrid-deselect",f.hitch(this,function(b){b=b.grid.selection;var p,g=[];for(p in b)b[p]&&g.push(this._grid.row(p).data);this.emit("select-change",{selection:g})}))));this.emit("grid-ready",
{grid:this._grid,ready:!0})},_createFilters:function(){if(this.plugIn&&this.plugIn.filters){var a=this.plugIn.filters,c=this.plugIn.filterStrings,e,l=h(".filters",this.domNode)[0];for(e in a)t.create("li",{"class":"all"===e?"active":"",innerHTML:"\x3ca id\x3d'"+e+"'  href\x3d'#'\x3e"+c[e].title+"\x3c/a\x3e"},l);this.own(v(l,"li a:click",f.hitch(this,function(d){d.preventDefault();var m=d.target;h(".active",l).removeClass("active");n.add(m.parentNode,"active");h(".templates",this.domNode).addClass("fade");
setTimeout(f.hitch(this,function(){n["all"===m.id?"add":"remove"](this.filterDescription,"hide");q.set(this.filterDescription,"innerHTML",c[m.id].description||"")}),225);d=f.mixin({},a[m.id]||{});this.query.tags=k.map(d.tags||[],function(b){return'tags:"'+b+'"'});this.query.owners=k.map(d.owners,function(b){return'owner:"'+b+'"'});this.query.orgids=k.map(d.orgids,function(b){return'orgid:"'+b+'"'});this.query.typekeywords=[].concat(k.map(d.typekeywords||[],function(b){return'typekeywords:"'+b+'"'}));
this.filterWithinGroup||(this.query.groups=k.map(d.groups,function(b){return'group:"'+b+'"'}));this._fetchItems(this.query)})));n.add(this.domNode,"filters");n.remove(this.domNode,"nofilters")}else n.add(this.domNode,"nofilters"+(this.plugIn&&this.plugIn.extraClasses?" "+this.plugIn.extraClasses.join(" "):"")),n.remove(this.domNode,"filters")},_showOverlay:function(a,c){(c=this._grid.row(c))&&h(".template-overlay",c.element).style("display",a?"":"none")},_fetchData:function(){this._user=this._portal.getPortalUser();
return this.plugIn&&this.plugIn.fetchData?this.plugIn.fetchData():this._fetchItems(this.itemQuery)},_fetchItems:function(a,c){var e={sort:[{attribute:this.sortAttribute||"title",descending:this.sortDescending||!1}]},l=new F;this.get("useExtent")&&(e.extent=this.get("extent"),e.useExtent=this.get("useExtent"));this.get("queryType")&&(e.queryType=this.get("queryType"));h(".templates",this.domNode).addClass("fade");h(".dgrid-footer",this.domNode).addClass("hide");h(".loaderWrap",this.domNode).removeClass("hide");
setTimeout(f.hitch(this,function(){this.query=f.mixin(this.query,a);this._grid?this._grid.set("query",this.query.toString(),e):(this._createFilters(),this._createGrid());l.resolve(this._grid)}),60);return l},_formatThumbnail:function(a){var c=a.thumbnailUrl||this._portal.staticImagesUrl+"/desktopapp.png";a.thumbnailUrl=c;return"\x3cimg class\x3d'grid-item-thumb' width\x3d'187px' height\x3d'125px' alt\x3d'' src\x3d'"+c+"'\x3e"},_formatInfoPanelImage:function(a){var c=a.screenshots&&a.screenshots.length?
a.screenshots[0]:null;return c?a.itemUrl+"/info/"+c:a.thumbnailUrl},_formatItemTitle:function(a){return"\x3ch5\x3e"+(a.title||a.name||"\x3cNo Title\x3e")+"\x3c/h5\x3e"},clear:function(){this._grid.clearSelection()},doProject:function(a,c){var e=[102113,102100,3857],l=new F;var d=function(b,p){!(b&&0<b.length&&b[0]&&"extent"==b[0].type)||isNaN(b[0].xmin)||isNaN(b[0].ymin)||isNaN(b[0].xmax)||isNaN(b[0].ymax)?b&&0<b.length&&b[0]&&"point"==b[0].type&&!isNaN(b[0].x)&&!isNaN(b[0].y)&&l.resolve(b,p):l.resolve(b,
p)};if(null!=a.spatialReference.wkid&&4326==a.spatialReference.wkid&&null!=c.wkid&&this.contains(e,c.wkid)){a.ymin=Math.max(a.ymin,-89.99);a.ymax=Math.min(a.ymax,89.99);a=B.geographicToWebMercator(a);if((e=a.spatialReference._getInfo())&&a.xmin>a.xmax){d=e.valid[1]-a.xmin;var m=a.xmax-e.valid[0];d>m?a.xmax=e.valid[1]+m:a.xmin=e.valid[0]-d}a.spatialReference.wkid=c.wkid;l.resolve([a])}else null!=a.spatialReference.wkid&&this.contains(e,a.spatialReference.wkid)&&null!=c.wkid&&4326==c.wkid?(a=B.webMercatorToGeographic(a),
(e=a.spatialReference._getInfo())&&a.xmin>a.xmax&&(d=e.valid[1]-a.xmin,m=a.xmax-e.valid[0],d>m?a.xmax=e.valid[1]+m:a.xmin=e.valid[0]-d),l.resolve([a])):(this.geometryService||(this.geometryService=new aa(Z.defaults.geometryService)),this.geometryService.project([a],c,d));return l},contains:function(a,c){for(var e=a.length;e--;)if(a[e]===c)return!0;return!1},_extentToGCS:function(a){a=a.shiftCentralMeridian(!0);return B.webMercatorToGeographic(a)},_extentToString:function(a){var c="";null!=a&&(a=this._extentToGCS(a),
c=this._roundValue(a.xmin,1E4)+","+this._roundValue(a.ymin,1E4)+","+this._roundValue(a.xmax,1E4)+","+this._roundValue(a.ymax,1E4));return c},_roundValue:function(a,c){return Math.round(a*c)/c}});L("extend-esri")&&f.setObject("dijit.BrowseItems",z,Y);return z});