// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/dynamicSettings/areaDetails/AreaDetailsFilter","dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin ../RefineFilters esri/dijit/geoenrichment/utils/MouseUtil dojo/i18n!esri/nls/jsapi".split(" "),function(b,f,g,e,h,c){c=c.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder;b=b([f,g],{templateString:"\x3cdiv\x3e\x3c/div\x3e",refineFilters:null,postCreate:function(){var a=this;this.inherited(arguments);this.refineFilters=(new e({hasTitle:!0,
hasTextFilter:!0,textFilterPlaceHolder:c.enterAttributeNameOrNoteText,onFilterChanged:function(d){a.onAreaDetailsFilterChanged(d)}})).placeAt(this.domNode);this.own(this.refineFilters)},setNumItems:function(a,d){this.refineFilters.setTitle(c.refineYourResults,a,d)},setVisualState:function(a){this.refineFilters.setVisualState(a)},hasFiltersOn:function(){return this.refineFilters.hasFiltersOn()},isMouseOver:function(a){return h.isMouseOver(this.domNode)||this.refineFilters&&this.refineFilters.isMouseOver()},
onAreaDetailsFilterChanged:function(a){}});b.hasFiltersOn=function(a){return e.hasFiltersOn(a)};return b});