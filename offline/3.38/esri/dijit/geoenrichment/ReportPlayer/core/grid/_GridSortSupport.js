// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/_GridSortSupport",["dojo/_base/declare","./coreUtils/sorting/GridSortUtil"],function(c,a){return c(null,{presetSorting:null,ignorePresetSorting:!1,allowSorting:!1,canSortCellFunc:null,_applySortingToStoreData:function(){!this.ignorePresetSorting&&a.applySortingToStoreData(this)},_buildSortControls:function(){a.buildSortControls(this)},getSorting:function(){return a.getSorting(this)},setSorting:function(b,d){return a.setSorting(this,b,d)},getSortRowIndexMapping:function(){return a.getSortRowIndexMapping(this)},
onSortingChanged:function(b){}})});