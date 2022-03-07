// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/ReportPlayer/core/templates/ReportContainer.html":'\x3cdiv class\x3d"esriGEReportPlayer_reportContainer esriGENonSelectable"\x3e\r\n    \x3cdiv\x3e\r\n        \x3cdiv class\x3d"horizontalRulerContainer" data-dojo-attach-point\x3d"horizontalRulerContainer"\x3e\r\n            \x3cdiv class\x3d"horizontalRuler" data-dojo-attach-point\x3d"horizontalRuler"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"mainContainer" class\x3d"reportContainer_mainContainer"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"stackContainer" class\x3d"reportContainer_stackContainer"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainer/ReportContainer","dojo/_base/declare dojo/_base/lang dojo/dom-construct dojo/dom-class dojo/dom-geometry dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin ../grid/valueField/ValueField ./utils/QueryUtil ./utils/SerializationManager ../supportClasses/DocumentOptions esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes dojo/text!../templates/ReportContainer.html".split(" "),
function(t,n,g,k,u,d,v,w,x,y,z,p,q,r,h,A){return t([v,w],{templateString:A,isReportContainer:!0,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,documentOptions:null,_sampleWatermarkDiv:null,queryUtil:y,serializationManager:null,postCreate:function(){this.inherited(arguments);this.serializationManager=(new this._getSerializationManagerClass)(this);this.setViewMode(h.PREVIEW_VALUES)},_getSerializationManagerClass:function(){return z},_sectionWidth:0,setDocumentOptions:function(a){this.documentOptions&&
n.mixin(this.documentOptions,a);this.updateLayout()},updateLayout:function(){if(this.documentOptions){this._sectionWidth=p.getPageBox(this.documentOptions).contentW;this._syncContainerSizeWithViewMode();d.set(this.stackContainer,{paddingLeft:(this.documentOptions.left||0)+"px",paddingRight:(this.documentOptions.right||0)+"px",paddingTop:(this.documentOptions.top||0)+"px",paddingBottom:(this.documentOptions.bottom||0)+"px"});var a=this;this.getReportElements("setWidth").forEach(function(b){a.getElementSection(b).setWidth(a.getSectionWidth(),
{resizeContentToFit:!0,preserveRightOffset:!0});a.updateReportElement(b)})}},resizeReportElementContentToFitPageWidth:function(a){var b=a&&this.getElementSection(a);b&&b.setWidth(this.getSectionWidth(),{resizeContentToFit:!0,forceResize:!0});this.updateReportElement(a)},getCurrentPageDim:function(){return p.getPageBox(this.documentOptions)},_syncContainerSizeWithViewMode:function(){d.set(this.stackContainer,"width",this._sectionWidth+(this._viewMode===h.EDIT?145:0)+"px");d.set(this.mainContainer,
"height",d.get(this.domNode,"height")+(this._viewMode===h.EDIT?-17:0)+"px")},getSectionWidth:function(){return this._sectionWidth},resize:function(a,b){void 0!==a&&d.set(this.domNode,{width:a+"px",height:b+"px"});this._syncContainerSizeWithViewMode()},getCanvasOffsets:function(){var a=d.get(this.domNode,"width"),b=d.get(this.stackContainer,"width")+u.getPadBorderExtents(this.stackContainer).w;return{l:Math.max(15,this.stackContainer.offsetLeft),r:Math.max(10,a-(this.stackContainer.offsetLeft+b))}},
getFullWidth:function(){return Math.max(this.stackContainer.scrollWidth,d.get(this.stackContainer,"width"))},getFullHeight:function(){return Math.max(this.stackContainer.scrollHeight,d.get(this.stackContainer,"height"))},addSection:function(a,b,c,e,f){var l=this._createSectionCell(a);this._createSection(a,b,l);a=this._createReportElement(a,l,c,e,b&&b.json,f);this.updateReportElement(a);return a},_createSection:function(a,b,c){b=b||{};b["class"]="reportContainer_Section";b.initialWidth=this.getSectionWidth();
b.initialHeight="empty"===a?b.isSmallSize?100:200:void 0;b.viewModel=this.viewModel;b.theme=this.theme;b.parentWidget=this;b.hasFixedLayout=!0;b.viewPortContainer=this.getScrollableContainer();b.currentFeatureIndex=this.currentFeatureIndex;b.initialViewMode=this._viewMode;"empty"===a?a=this.viewModel.layoutBuilder.createElement("emptySection",b,c.getContentContainerNode()):(a=this.viewModel.layoutBuilder.createElement("section",b,c.getContentContainerNode()),(b=this.documentOptions.backgroundColor||
this.viewModel.getDocumentDefaultStyles(this.theme).backgroundColor)&&d.set(a.domNode,"backgroundColor",b));c.setContent(a);return a},_getSectionCellClass:function(){return x},_getSectionCellParams:function(){return null},_createSectionCell:function(a){return(new this._getSectionCellClass)(n.mixin({sectionId:a,"class":"reportContainerCell"},this._getSectionCellParams()))},_createReportElement:function(a,b,c,e,f,l){f=g.create("div",{"class":"reportElement"});var m=this._getCellSection(b);a=f._fcPar=
{isReportElement:!0,sectionId:a,isEmpty:"empty"===a,cell:b,section:m,coverElement:null,reportElementContent:g.create("div",{"class":"reportElementContent"},f)};g.place(f,c?c:this.stackContainer,c?e:void 0);this._createAdditionalElementsForReportElement(f);g.place(b.domNode,a.reportElementContent);this.isEmptyElement(c)&&!1!==l&&(this._removeSection(c),this._tryProvidingSmallEmpty(f));m.notifyShown&&m.notifyShown();return f},_createAdditionalElementsForReportElement:function(a){},updateReportElement:function(a){var b=
this.getElementParams(a);this._sectionToSectionCell(b.cell);this._sectionCellToSection(b.cell);this._updateChildrenViewMode(a)},_sectionCellToSection:function(a){this._getCellSection(a).setHeight(a.getHeight())},_sectionToSectionCell:function(a){var b=this._getCellSection(a);a.setWidth(b.getWidth());a.setMinHeight(b.hasTablesThatFitHeight()?20:b.getHeight());a.setHeight(b.getResizedHeight())},_tryProvidingSmallEmpty:function(a){var b=this;this.getReportElements().filter(function(c){return b.isEmptyElement(c)}).length||
this.addSection(r.EMPTY,{isSmallSize:!0},a,"after")},getElementHeight:function(a){return this.getElementCell(a).getHeight()},setElementHeight:function(a,b){var c=this.getElementCell(a);c.setHeight(b);this._sectionCellToSection(c);this.updateReportElement(a)},getElementParams:function(a){return a&&a._fcPar||{}},getElementSection:function(a){return this.getElementParams(a).section},getElementSectionAt:function(a){return(a=this.getReportElements()[a])&&this.getElementSection(a)},getElementCell:function(a){return this.getElementParams(a).cell},
isEmptyElement:function(a){return!!this.getElementParams(a).isEmpty},isReportElement:function(a){return!!this.getElementParams(a).isReportElement},_getCellSection:function(a){return a.content},scrollToElement:function(a){if(a)return this._animateScrolling(a.offsetTop-this.domNode.clientHeight/5)},_animateScrolling:function(a){this.getScrollableContainer().scrollTop=a},getScrollableContainer:function(){return this.mainContainer},getReportElements:function(a){return this.queryUtil.getReportElements(this,
a)},getStackChildren:function(){for(var a=[],b=0;b<this.stackContainer.children.length;b++)a.push(this.stackContainer.children[b]);return a},clear:function(a){var b=this;this.getReportElements().forEach(function(c){b._removeSection(c,!0===a)})},_removeSection:function(a,b){var c=this.getElementSection(a),e=this.getElementCell(a);a&&e&&(c&&c.destroy(),e.destroy(),delete a._fcPar,g.destroy(a),0===this.getReportElements().length&&!1!==b&&this.addSection(r.EMPTY))},removeSection:function(a){this._removeSection(a)},
removeSectionAtIndex:function(a){this._removeSection(this.getReportElements()[a])},moveSection:function(a,b,c){if((a=this.getReportElements()[a])&&a.parentNode){a.parentNode.removeChild(a);var e=this.getReportElements();e.length===b?g.place(a,e[e.length-1],"after"):g.place(a,this.getReportElements()[b],c)}},setHeight:function(a){d.set(this.mainContainer,"height",a+"px")},_viewMode:null,getViewMode:function(){return this._viewMode},setViewMode:function(a){this._viewMode!==a&&(this._viewMode=a,this._memoInViewElementsInfo(),
a===h.EDIT?(k.add(this.domNode,"reportContainerEditMode"),k.remove(this.domNode,"reportContainerPreviewMode")):(k.remove(this.domNode,"reportContainerEditMode"),k.add(this.domNode,"reportContainerPreviewMode")),a!==h.PREVIEW_VALUES||this.viewModel.dynamicReportInfo?q.hide(this._sampleWatermarkDiv):(this._sampleWatermarkDiv||(this._sampleWatermarkDiv=g.create("div",{"class":"sampleValuesWatermark"},this.stackContainer,"first")),q.show(this._sampleWatermarkDiv)),this._syncContainerSizeWithViewMode(),
this._updateChildrenViewMode(),this._adjustScrollForNewViewMode())},_updateChildrenViewMode:function(a){},_inViewElementsInfo:null,_memoInViewElementsInfo:function(){this._inViewElementsInfo=null;if(!(1E3>this.mainContainer.scrollTop)){var a;this.getReportElements().some(function(b){if(b.offsetTop>this.mainContainer.scrollTop)return a=b,!0},this);a&&(this._inViewElementsInfo={scrollTop:this.mainContainer.scrollTop,offsetTop:a.offsetTop,elementInView:a})}},_adjustScrollForNewViewMode:function(){this._inViewElementsInfo&&
(this.mainContainer.scrollTop+=this._inViewElementsInfo.elementInView.offsetTop-this.mainContainer.scrollTop-(this._inViewElementsInfo.offsetTop-this._inViewElementsInfo.scrollTop))},notifyShown:function(){this.serializationManager.notifyShown()},fromJson:function(a){this.serializationManager.fromJson(a)},toJson:function(a){return this.serializationManager.toJson(a)},onPendingDataApplied:function(){},destroy:function(){this.clear();this.serializationManager=this.queryUtil=this.documentOptions=this.parentWidget=
this.theme=this.viewModel=null;this.inherited(arguments)}})});