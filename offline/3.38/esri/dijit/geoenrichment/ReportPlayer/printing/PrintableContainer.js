// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/printing/PrintableContainer","dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when dojo/dom-class dojo/dom-construct esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/async/AsyncQueue ./_PrintSettingsSupport ../PlayerResizeModes ../PlayerViewModes ./VisualStateConverter ../core/supportClasses/DocumentOptions".split(" "),function(u,v,w,f,x,p,q,l,y,z,g,A,B){return u(y,{domNode:null,_player:null,
_viewModel:null,_initRollBackFunc:null,_pageSettingsRollBackFunc:null,_pageSettings:null,_pageFitParams:null,_headerFooterParams:null,_allowDataDrilling:!1,_allowFallbackMaps:!1,_splitPages:!1,_needAutoScale:!1,_commandId:null,constructor:function(a,e){this._player=a;this._viewModel=e;this.domNode=a.reportContainerDiv},initialize:function(a){var e=this;this._commandId=a.commandId;return f(this._doInitialize(a),function(){return f(e._checkPrintSettings(a),function(c){return"cancel"===c?null:e})})},
_doInitialize:function(a){function e(){var d=l.executeFunctions([function(){m&&p.destroy(m);h&&h.resolve();q.showNodeFromBackground(c.domNode)},function(){c.getAllReportContainers().forEach(function(k,C){k.showPageAt&&k.showPageAt(r[C])})},function(){b.viewMode===g.PANELS_IN_STACK_ALL&&c.getAllReportContainers()[0].setPrinted(!1);c._setPrintMode(!1);c._setAnimationSuspended(!1);return b.resize()},function(){if(n)return b.viewMode=n,b.refresh({waitUntilAllContentIsReady:!1})}],0);a.onShowWaiting(d);
return d}var c=this;if(this._player.isPlayerOnServer)this._setPrintMode(!0);else{var r={},m,n,b=this._player;b.playerToolbar&&b.playerToolbar.closePopup();this._setAnimationSuspended(!0);var h,t=f(function(){return l.executeFunctions([function(){b.viewMode===g.PANELS_IN_STACK_ALL&&c.getAllReportContainers()[0].scrollToTop();b.resizeMode===z.FIT_WINDOW?m=p.create("div",{innerHTML:b.domNode.innerHTML,"class":"esriGEAbsoluteStretched esriGEReportPlayerPrintViewCopy"},b.printBackgroundView):(h=new w,
a.onShowWaiting(h.promise))},function(){if(b.viewMode===g.PANELS_IN_STACK_ALL)c.getAllReportContainers()[0].setPrinted(!0);else if(b.viewMode!==g.FULL_PAGES){n=b.viewMode;var d=b.getVisualState();b.viewMode=g.FULL_PAGES;return f(b.refresh({waitUntilAllContentIsReady:!0}),function(){return b.setVisualState(A.convertToFullPages(d,b.getReportData().templateJson))})}},function(){c._setPrintMode(!0);return l.executeFunctions(c.getAllReportContainers().map(function(d,k){return function(){d.resetZoom&&d.resetZoom();
r[k]=d.getCurrentPageIndex&&d.getCurrentPageIndex();d.showAllPages&&d.showAllPages();d.collapseContent&&d.collapseContent()}}),0)},function(){q.hideNodeInBackground(c.domNode,"report-player-being-printed")}],0)}(),function(){c._initRollBackFunc=e;return b.getRenderPromise()});a.onShowWaiting(t);return t}},_setPrintMode:function(a){x[a?"add":"remove"](this.domNode,"esriGEReportPlayerPrint esriGEReportPlayer "+(this._player.isPlayerOnServer?"isPlayerOnServer":""));this._player.setPrintMode(a)},_animationAllowedMemo:void 0,
_setAnimationSuspended:function(a){a?(this._animationAllowedMemo=this._viewModel.isAnimationAllowed(),this._viewModel.setAnimationAllowed(!1)):this._viewModel.setAnimationAllowed(this._animationAllowedMemo)},getViewMode:function(){return this._player.viewMode},getCurrentReportContainer:function(){return this._player.getCurrentReportContainer()},getAllReportContainers:function(){return this._player.getAllReportContainers()},getHeaderFooterParams:function(){return this._headerFooterParams},getDocumentOptions:function(){return v.mixin({},
this.getCurrentReportContainer().documentOptions,this._pageSettings)},getFitParams:function(){return this._pageFitParams},setNewPageSize:function(a,e){this._pageSettings.pagesize=B.combineCustomSizeString(a,e,"px");this._pageFitParams={w:a,h:e,hAlign:"center",vAlign:"top"}},getSelectedCommandId:function(){return this._commandId},allowDataDrilling:function(){return this._allowDataDrilling},allowFallbackMaps:function(){return this._allowFallbackMaps},splitPages:function(){return this._splitPages},needAutoScale:function(){return this._needAutoScale},
getNumberOfPages:function(){return this.getCurrentReportContainer().getNumberOfPages()},stop:function(){if(this._player.isPlayerOnServer)this._setPrintMode(!1);else{var a=this;return f(this._pageSettingsRollBackFunc&&this._pageSettingsRollBackFunc(),function(){return f(a._initRollBackFunc&&a._initRollBackFunc())})}}})});