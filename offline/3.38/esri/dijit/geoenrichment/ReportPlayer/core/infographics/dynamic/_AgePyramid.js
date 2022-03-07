// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/dynamic/_AgePyramid","dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-style dojox/charting/plot2d/Bars dojox/charting/plot2d/Lines ../../charts/utils/plots/_TouchPlotEvents ../../charts/tooltips/ZoomSupportTooltip esri/dijit/geoenrichment/infographicPanels/AgePyramid ./_SelectedFeatureControlMixin".split(" "),function(d,g,e,h,k,l,f,m,n,p){return d([n,p],{tooltipClass:m,infographicStyleProvider:null,chartStyleProvider:null,
_onThemeLoad:function(a){var b=this.infographicStyleProvider&&this.infographicStyleProvider.agePyramid;b&&(a=g.mixin({},a),a.male=a.male||{},a.male.fill=b.male.backgroundColor,a.female=a.female||{},a.female.fill=b.female.backgroundColor,a.tooltip=this.chartStyleProvider&&this.chartStyleProvider.tooltip);this.inherited(arguments,[a]);if(b){var c=function(q,r){q.style.color=r?b.male.backgroundColor:b.female.backgroundColor};this.min&&c(this.min,e.contains(this.min,"AgePyramid_TextMale"));this.max&&
c(this.max,e.contains(this.max,"AgePyramid_TextMale"));this._menLabel&&c(this._menLabel,!0);this._womenLabel&&c(this._womenLabel,!1)}},resize:function(){this.inherited(arguments);var a=this.min&&this.min.parentNode;if(a&&this.parent)for(var b=400>h.get(this.parent,"width"),c=0;c<a.children.length;c++)e[b?"add":"remove"](a.children[c],"TrimWithEllipses")},_getLinesPlot:function(){return d([l,f])},_getBarsPlot:function(){return d([k,f])},_getTooltip:function(){return{node:this.inherited(arguments),
style:this._currentTheme.tooltip}}})});