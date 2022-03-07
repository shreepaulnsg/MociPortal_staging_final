// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/ReportPlayer/core/templates/ComparisonTableInfographic.html":'\x3cdiv class\x3d"esriGEComparisonTableInfographic"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"noDataPlaceHolder" class\x3d"esriGENoDataPlaceHolder"\x3e\r\n        \x3cdiv class\x3d"esriGENoDataPlaceHolderLabel"\x3e${nls.noComparisonData}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"titleDiv" class\x3d"comparisonTableInfographic_titleDiv"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"dataDiv" class\x3d"comparisonTableInfographic_dataDiv"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dataSectionDiv" class\x3d"esriGEAbsoluteStretched"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"chartDiv" class\x3d"esriGEAbsoluteStretched"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n\r\n'}});
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/comparison/ComparisonTableInfographic","dojo/_base/declare dojo/_base/lang dojo/on esri/dijit/geoenrichment/when dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin ../../charts/utils/ChartTypes ../../charts/utils/ChartJsonUtil ../../sections/supportClasses/SectionContentFitModes ../../supportClasses/ViewModes ../../../dataProvider/supportClasses/data/AreaDataUtil ../../supportClasses/tableJson/TableJsonUtil ../../supportClasses/tableJson/TablePrettyParameters ../utils/InfographicThemeUtil ./jsonBuilder/SectionJsonBuilder ./ComparisonSelectionBuilder ./ChartViewBuilder esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/InvokeUtil dojo/text!../../templates/ComparisonTableInfographic.html dojo/i18n!esri/nls/jsapi".split(" "),
function(h,k,l,r,p,v,w,m,x,t,n,y,z,u,A,g,B,C,f,D,E,q){q=q.geoenrichment.dijit.ReportPlayer.ComparisonTableInfographic;h=h([v,w],{templateString:E,nls:q,viewModel:null,theme:null,parentWidget:null,isEditMode:!1,simplifySelectionForSingleGeography:!0,minRowHeight:20,_titleSection:null,_dataSection:null,_currentInfographicJson:null,_updatePromise:null,_selectedLevelsCache:null,_additionalColumnsCache:null,_sorting:null,_columnWidths:null,_dataInfo:null,_analysisAreas:null,_chartViewInfo:!1,_chartViewBuilder:null,
_stdPolygonsController:null,_thisAreasHighlightController:null,postCreate:function(){this.inherited(arguments);this._selectedLevelsCache={};this._additionalColumnsCache={};this._removeChart();this._showEmptyView(!1)},getRenderPromise:function(){return this._updatePromise},updateInfographic:function(a){if(this.domNode)return this._currentInfographicJson=a,this._analysisAreas=this.viewModel.dynamicReportInfo&&this.viewModel.dynamicReportInfo.analysisAreas,a=this.viewModel.getStaticInfographicDefaultStyles(this.theme),
A.applyThemeSettingsComparisonInfographicJson(this._currentInfographicJson,a),this.viewModel.dynamicReportInfo&&(this._stdPolygonsController=this.viewModel.getStdPolygonsController(this._currentInfographicJson.calculatorName),this.own(this._stdPolygonsController),this._thisAreasHighlightController=this.viewModel.getThisAreasHighlightController(),this.own(this._thisAreasHighlightController)),this._updatePromise=this._updateContent(),this.onShowWaiting(this._updatePromise),this._updatePromise},_updateContent:function(){return D.invoke(this,
"_doUpdateContent",50)},_doUpdateContent:function(){this._destroySections();if(this.domNode&&this.width)return this._resizeContent(),this._createTitleSection(),this._createDataSection(),r(this._chartViewInfo&&this.tableToChart(this._chartViewInfo),function(){this.onContentUpdated()}.bind(this))},_resizeContent:function(){this._syncJsonDimensions();p.set(this.domNode,{width:this.width+"px",height:this.height+"px"});setTimeout(this._syncEmptyViewPlaceholder.bind(this))},_syncJsonDimensions:function(){this._currentInfographicJson&&
(this._currentInfographicJson.style.width=this.width,this._currentInfographicJson.style.height=this.height)},_createTitleSection:function(){if(this._currentInfographicJson.titleSectionJson){var a={};a.initialWidth=this.width;a.json=this._currentInfographicJson.titleSectionJson;a.viewModel=this.viewModel;a.theme=this.theme;a.parentWidget=this;a.noContentOffset=!0;a.tableParams={trimTextIfOverflows:!1};a.initialViewMode=this.isEditMode?n.EDIT:n.PREVIEW_VALUES;k.mixin(a,this._prepareTitleSectionCreationParams());
this._titleSection=this.viewModel.layoutBuilder.createElement("section",a,this.titleDiv);this._titleSection.fitContentNicely({fitMode:t.WIDTH})}},_prepareTitleSectionCreationParams:function(){return null},_createDataSection:function(){var a=this;this._dataInfo=this._buildDataInfo();this._showEmptyView(!this._dataInfo);if(this._dataInfo){var c={};c.initialWidth=this.width;c.initialHeight=this._getDataHeight();c.json=this._dataInfo.sectionJson;c.viewModel=this.viewModel;c.theme=this.theme;c.parentWidget=
this;c.noContentOffset=!0;c.tableParams={trimTextIfOverflows:!1,keepGridWidthWhenResized:!0,hasResizableColumns:!0,fitParentWhenResized:!0,enableAsyncRendering:!this.isEditMode,asyncBatchSize:this._dataInfo.sectionJson.stack[0].columns.length,layoutDefaults:{columnMinWidth:u.MIN_COLUMN_WIDTH},onColumnWidthChanged:function(){a._columnWidths=d&&d.columns.map(function(b){return b.style.width})}};c.initialViewMode=this.isEditMode?n.EDIT:n.PREVIEW_VALUES;k.mixin(c,this._prepareSectionCreationParams());
this._dataSection=c=this.viewModel.layoutBuilder.createElement("section",c,this.dataSectionDiv);var d=c.getTrueTables()[0];d.onSortingChanged=function(b){a._sorting=b};this._sorting&&d.setSorting(this._sorting);this._resizeDataSection();new B({grid:c.getTrueTables()[0],groups:this._dataInfo.groups,numThisAreas:this._dataInfo.numThisAreas,fields:this._dataInfo.fields,selectedLevelsCache:this._selectedLevelsCache,additionalColumnsCache:this._additionalColumnsCache,variablesInColumns:this._currentInfographicJson.variablesInColumns,
isEditMode:this.isEditMode,simplifySelectionForSingleGeography:this.simplifySelectionForSingleGeography,onFeatureSelected:function(b,e){a._selectedLevelsCache[b]=e;a._updateContent()},onAddFeature:function(b,e){b=a._additionalColumnsCache[b]=a._additionalColumnsCache[b]||[];-1===b.indexOf(e)&&b.push(e);a._updateContent()},onRemoveAdditionalFeature:function(b,e){b=a._additionalColumnsCache[b]=a._additionalColumnsCache[b]||[];e=b.indexOf(e);-1!==e&&(b.splice(e,1),a._updateContent())}});this._stdPolygonsController&&
this._registerTableForControllers()}else this._stdPolygonsController&&this._stdPolygonsController.setShownFeatureAttributes([])},_prepareSectionCreationParams:function(a){return null},_buildDataInfo:function(){return g.buildSectionJsonAndGroups({infographicJson:this._currentInfographicJson,calculators:this._getCalculatorDataArray(),selectedLevelsCache:this._selectedLevelsCache,additionalColumnsCache:this._additionalColumnsCache,analysisAreas:this._analysisAreas,filterRanges:this._filterRanges,numLevels:this._currentInfographicJson.levels.length,
width:this.width,height:this.height,columnWidths:this._columnWidths})},_getCalculatorDataArray:function(){var a=this;return this.viewModel.dynamicReportInfo.fieldData.areaData.map(function(c,d){return y.getAreaDataObjectCalculator(a.viewModel.dynamicReportInfo.fieldData.areaData[d],a._currentInfographicJson.calculatorName)})},_resizeDataSection:function(){this.dataDiv.style.top=this._getTitleHeight()+"px";var a=this._dataSection.getTrueTables()[0],c=a.rows.length;c=Math.max(this._getDataHeight(),
c*this.minRowHeight);a.resizeToFitHeight(c);this._dataSection.fitContentNicely({fitMode:t.WIDTH})},_registerTableForControllers:function(){this._registerTableForStdController();this._dataInfo.numThisAreas&&this._registerTableForThisAreasController()},_registerTableForStdController:function(){var a=this;this._stdPolygonsController.setAttributeFields(this._dataInfo.fields);this._stdPolygonsController.setShownFeatureAttributes(this._dataInfo.geographiesInTable);this._stdPolygonsController.setAllFeatureAttributes(this._dataInfo.allGeographies);
var c=this._dataSection.getTrueTables()[0],d;this._stdPolygonsController.registerInfographic({highlightInfographicForAttributes:function(b){if(c.domNode){var e=a._currentInfographicJson.variablesInColumns?"setCellRowHighlighted":"setCellColumnHighlighted";d&&(d.parentGrid&&d.parentGrid[e](d,!1),d=null);(b=b&&a._getCellForFeatureAttributes(b))&&b.parentGrid&&(b.parentGrid[e](b,!0),d=b)}}}).then(function(){if(c.domNode){var b;a._currentInfographicJson.variablesInColumns?(c.set("highlightRowsOnHover",
!0),c.canHighlightHeader=!1,c.canHighlightFirstColumn=!0):(c.set("highlightColumnsOnHover",!0),c.canHighlightHeader=!0,c.canHighlightFirstColumn=!1);l(c.domNode,"mouseover,mousemove",function(){var e=c.getOverFieldCell();e&&e!==b&&(b=e,a._stdPolygonsController.highlightGraphicForAttributes(b&&a._getCellAttrs(b)))});l(c.domNode,"mouseout",function(){a._stdPolygonsController.highlightGraphicForAttributes(null);b=null})}})},_registerTableForThisAreasController:function(){var a=this,c=this._dataSection.getTrueTables()[0],
d;this._thisAreasHighlightController.registerTable({highlightTableForAreaIndex:function(b){if(c.domNode){var e=a._currentInfographicJson.variablesInColumns?"setCellRowHighlighted":"setCellColumnHighlighted";d&&(d.parentGrid&&d.parentGrid[e](d,!1),d=null);(b="number"===typeof b&&a._getCellForThisAreaAt(b))&&b.parentGrid&&(b.parentGrid[e](b,!0),d=b)}}}).then(function(){if(c.domNode){var b;a._currentInfographicJson.variablesInColumns?(c.set("highlightRowsOnHover",!0),c.canHighlightHeader=!1,c.canHighlightFirstColumn=
!0):(c.set("highlightColumnsOnHover",!0),c.canHighlightHeader=!0,c.canHighlightFirstColumn=!1);l(c.domNode,"mouseover,mousemove",function(){var e=c.getOverFieldCell();e&&e!==b&&(b=e,a._thisAreasHighlightController.highlightGraphicForAreaIndex(b&&g.getThisAreaIndex(a._getCellAttrs(b))))});l(c.domNode,"mouseout",function(){a._thisAreasHighlightController.highlightGraphicForAreaIndex(null);b=null})}})},_getCellAttrs:function(a){return a?this._currentInfographicJson.variablesInColumns?g.getAttributesForColumn(a.row):
g.getAttributesForGridData(a.column):null},_getCellForFeatureAttributes:function(a){var c;a&&this._dataSection.getTrueTables()[0].getCells().some(function(d){var b=this._getCellAttrs(d);if(b&&b.StdGeographyLevel===a.StdGeographyLevel&&b.StdGeographyID==a.StdGeographyID)return c=d,!0},this);return c},_getCellForThisAreaAt:function(a){var c;this._dataSection.getTrueTables()[0].getCells().some(function(d){var b=this._getCellAttrs(d);if(b&&g.getThisAreaIndex(b)===a)return c=d,!0},this);return c},_getTitleHeight:function(){return this._currentInfographicJson.titleSectionJson?
z.getTableHeight(this._currentInfographicJson.titleSectionJson.stack[0])+u.TITLE_GAP:0},_getDataHeight:function(){return this.height-this._getTitleHeight()},notifyShown:function(){this._dataSection&&this._dataSection.notifyShown()},getVisualState:function(){return k.clone({type:this._currentInfographicJson.type,filterRanges:this._filterRanges,selectedLevelsCache:this._selectedLevelsCache,additionalColumnsCache:this._additionalColumnsCache,sorting:this._sorting,columnWidths:this._columnWidths,chartViewInfo:this._chartViewInfo})},
setVisualState:function(a){if(a)return this._selectedLevelsCache=a.selectedLevelsCache||{},this._additionalColumnsCache=a.additionalColumnsCache||{},this._sorting=a.sorting,this._columnWidths=a.columnWidths,this._filterRanges=a.filterRanges,this._chartViewInfo=a.chartViewInfo,this._updateContent()},getChartViewOptions:function(){return{chartType:this._chartViewInfo&&this._chartViewInfo.chartType,chartTypes:[m.COLUMN,m.BAR,m.LINE,m.VERTICAL_LINE],takeSeriesFromRows:this._currentInfographicJson.variablesInColumns,
supportsAltOrientation:!0}},tableToChart:function(a){this._removeChart();this._chartViewInfo=a;f.show(this.chartDiv);f.hide(this.dataSectionDiv);this._chartViewBuilder=new C({viewModel:this.viewModel,theme:this.theme,parentWidget:this,chartNode:this.chartDiv,width:this.width,height:this._getDataHeight(),chartSeriesItems:this._chartViewInfo.altOrientation?x.transposeSeriesItems(this._dataInfo.chartSeriesItems):this._dataInfo.chartSeriesItems});return this._chartViewBuilder.renderChart(this._chartViewInfo)},
chartToTable:function(){this._removeChart()},_removeChart:function(){this._chartViewInfo=null;this._chartViewBuilder&&this._chartViewBuilder.destroy();this._chartViewBuilder=null;f.hide(this.chartDiv);f.show(this.dataSectionDiv)},width:0,height:0,resize:function(a,c){void 0!==a&&(this.width=a,this.height=c);return this._updateContent()},_showEmptyView:function(a){f[a?"hide":"show"]([this.titleDiv,this.dataDiv]);f[a?"show":"hide"](this.noDataPlaceHolder);a&&this._syncEmptyViewPlaceholder()},_syncEmptyViewPlaceholder:function(){this.noDataPlaceHolder&&
p.set(this.noDataPlaceHolder,"paddingTop",(this.height-p.get(this.noDataPlaceHolder,"height"))/2+"px")},_filterRanges:null,getFilterRanges:function(){return r(this._updatePromise,function(){return this._dataInfo.ranges}.bind(this))},setFilterRanges:function(a){this._filterRanges=a;return this._updateContent()},getNumAreasTotal:function(){return this._dataInfo&&this._dataInfo.numAreasTotal||0},getNumAreasShown:function(){return this._dataInfo&&this._dataInfo.numAreasShown||0},toJson:function(){return k.clone(this._currentInfographicJson)},
onContentUpdated:function(){},onShowWaiting:function(a){},_destroySections:function(){this._chartViewBuilder&&this._chartViewBuilder.destroy();this._chartViewBuilder=null;this._dataSection&&this._dataSection.destroy();this._dataSection=null;this._titleSection&&this._titleSection.destroy();this._titleSection=null},destroy:function(){this._destroySections();this.inherited(arguments)}});h.MIN_ROW_HEIGHT=20;return h});