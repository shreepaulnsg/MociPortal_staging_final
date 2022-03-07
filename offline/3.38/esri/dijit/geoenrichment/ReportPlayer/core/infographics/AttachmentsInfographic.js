// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/AttachmentsInfographic","require dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin esri/dijit/geoenrichment/utils/InvokeUtil esri/dijit/geoenrichment/ImageNavigator".split(" "),function(h,k,l,m,e,f,n,p,g,q){function r(){return c?c:c={_loadLogo:function(){var a=new m;h(["../supportClasses/images/DefaultAttachment"],function(b){a.resolve(b)});
return a.promise},getImages:function(){var a=this;return[{description:"Esri headquarters in Redlands CA, summer time",getThumbnail:function(){return a._loadLogo()}},{description:"Sample image",getThumbnail:function(){return a._loadLogo()}},{description:"Sample image",getThumbnail:function(){return a._loadLogo()}}]}}}var c;return k([n,p],{templateString:"\x3cdiv data-dojo-attach-point\x3d'viewDiv'\x3e\x3c/div\x3e",viewModel:null,theme:null,currentFeatureIndex:null,imageNavigator:null,_currentInfographicJson:null,
_updatePromise:null,postCreate:function(){this.inherited(arguments);this.imageNavigator=(new q({showNotes:!0,showThumbnails:!1,canEditNotes:!1,canRemoveNotes:!1,loadFullImages:!0,canShowViewer:!0})).placeAt(this.viewDiv);this.own(this.imageNavigator)},getRenderPromise:function(){var a=this;return e(this._updatePromise).then(function(){return a.imageNavigator.getRenderPromise()})},updateInfographic:function(a){var b=this;if(this.domNode)return this._currentInfographicJson=a,a.style.backgroundColor&&
f.set(this.viewDiv,"backgroundColor",a.style.backgroundColor),this._resizeContent(),["showNotes","showThumbnails"].forEach(function(d){void 0!==a[d]&&(b.imageNavigator[d]=a[d])}),this._updatePromise=g.invoke(this,"_doUpdateContent",50)},_doUpdateContent:function(){if(this.domNode){var a=this.viewModel.dynamicReportInfo?this.viewModel.dynamicReportInfo.attachmentsStore:r();a&&a.supportsMultipleAreas&&a.setCurrentAnalysisAreaIndex(this.currentFeatureIndex);return this.imageNavigator.update(a,{useCircularMask:this._currentInfographicJson.useCircularMask,
alwaysShowCaptions:this._currentInfographicJson.alwaysShowCaptions,scaleToCover:this._currentInfographicJson.scaleToCover,imageIndex:this._currentInfographicJson.defaultImageIndex})}},_resizeContent:function(){this.domNode&&this.width&&(this._currentInfographicJson.style.width=this.width,this._currentInfographicJson.style.height=this.height,f.set(this.viewDiv,{width:this.width+"px",height:this.height+"px"}),this.imageNavigator.setHeight(this.height))},width:null,height:null,resize:function(a,b){void 0!==
a&&(this.width=a,this.height=b);return g.invoke(this,"_resizeContent",50)},hasScroll:function(){return this.imageNavigator.isAllImagesShown()},changeScroll:function(a,b){this.imageNavigator.allImagesList.domNode.scrollLeft+=a;this.imageNavigator.allImagesList.domNode.scrollTop+=b},notifyShown:function(){this.resize()},notifyPanelScaleChanged:function(a){a&&(a=1/a,this.imageNavigator.showAllImagesButton.style.transformOrigin="100% 0%",this.imageNavigator.showAllImagesButton.style.transform="scale("+
a+")",this.imageNavigator.showAllImagesButton.style["webkit-transform"]="scale("+a+")")},toJson:function(){return l.clone(this._currentInfographicJson)},getVisualState:function(){return{type:this._currentInfographicJson.type,imageIndex:this.imageNavigator.getImageIndex()}},setVisualState:function(a){var b=this;if(a&&"number"===typeof a.imageIndex)return e(this._updatePromise,function(){return b.imageNavigator.setImageIndex(a.imageIndex)})}})});