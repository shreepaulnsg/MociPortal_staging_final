// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/_SectionQueryElementsMixin",["dojo/_base/declare","../grid/coreUtils/GridDataUtil","../infographics/InfographicTypes","../supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../supportClasses/ElementUsageTypes"],function(g,d,f,h,k){return g(null,{_queryElementsById:function(a,b){return this._getStackElements(b).filter(function(c){return c.stackId===a})},getStackElements:function(a){return this._getStackElements(a)},containsElement:function(a){return-1!==
this._stackElements.indexOf(a)},_getStackElements:function(a){return a?this._stackElements.slice().reverse():this._stackElements},isTrueTable:function(a){return a&&!this.isImageTable(a)&&!this.isMapTable(a)&&!this.isEmptyTable(a)},isEmptyTable:function(a){return a&&!(0<a.columns.length&&0<a.rows.length)},getTables:function(a){return this._queryElementsById("table",a)},getTrueTables:function(a){return this.getTables(a).filter(function(b){return this.isTrueTable(b)},this)},getFirstTrueTable:function(){return this.getTrueTables()[0]},
getLastTrueTable:function(){var a=this.getTrueTables();return a[a.length-1]},getDataTables:function(){return this.isDataSection()?this.getTrueTables():[]},hasNonEmptyTables:function(){return!!this.getTrueTables().length},hasTablesThatFitHeight:function(){return this.getTrueTables().some(function(a){return a.needScaleToFitHeight()})},hasMultiFeatureTables:function(){return this.getTrueTables().some(function(a){return a.isMultiFeatureTable()})},hasLocatorTables:function(){return this.getTrueTables().some(function(a){return a.isLocatorTable&&
a.isLocatorTable()})},hasLocatorHeaderTables:function(){return this.getTrueTables().some(function(a){return a.isLocatorHeaderTable&&a.isLocatorHeaderTable()})},hasLocatorFooterTables:function(){return this.getTrueTables().some(function(a){return a.isLocatorFooterTable&&a.isLocatorFooterTable()})},hasSummarizeTables:function(){return this.getTrueTables().some(function(a){return a.isSummarizeTable&&a.isSummarizeTable()})},hasImages:function(){return!!this.getImages().length},getImages:function(a){return this.getTables(a).filter(function(b){return this.isImageTable(b)},
this).map(function(b){return b.getFirstCell().content})},hasOnlyImage:function(){return 1===this._stackElements.length&&this.getImages().length},hasMapImages:function(){return!!this.getMapImages().length},getMapImages:function(a){return this.getTables(a).filter(function(b){return this.isMapTable(b)},this).map(function(b){return b.getFirstCell().content})},hasChart:function(){var a=0;this.getTrueTables().forEach(function(b){b.getCells().forEach(function(c){d.isChartCell(c)&&a++})});return a},getChart:function(){var a;
this.getTrueTables().some(function(b){b.getCells().some(function(c){if(d.isChartCell(c))return a=c.content,!0})});return a},getChartJson:function(){var a;this.getTrueTables().some(function(b){if(a=b.getChartJson())return!0});return a},hasSingleInfographic:function(a){return 1===this.getTables().length&&this.getTables()[0].isSingleCelledTable()&&this.hasInfographic(a)},getInfographicType:function(){var a=this.getInfographicWithTable();return a&&a.type},hasInfographic:function(a){var b=0;this.getTrueTables().forEach(function(c){return c.getCells().forEach(function(e){!d.isInfographicCell(e)||
a&&d.getFieldInfo(e).infographicJson.type!==a||b++})});return b},getInfographic:function(){var a=this.getInfographicWithTable();return a&&a.infographic},getInfographicWithTable:function(){var a,b;this.getTrueTables().some(function(c){return c.getCells().some(function(e){if(d.isInfographicCell(e))return a=e.content,b=c,!0})});return a?{infographic:a,table:b,type:a.getType()}:null},getInfographicJson:function(){var a;this.getTrueTables().some(function(b){if(a=b.getInfographicJson())return!0});return a},
getMovableElements:function(){return this._stackElements.filter(function(a){return a.isGrid||a.isImage||a.isMap})},hasPageBreak:function(){return!!this._queryElementsById("pageBreak").length},canSwitchFeatures:function(){if(this.elementUsageType!==k.PAGE_PANEL_SECTION)return!1;var a;this.getTrueTables().some(function(b){if(b.isSingleCelledTable()){if(this._checkSingleCelledTable(b))return a=!0}else if(!b.isMultiFeatureTable()&&this._checkMultiCelledTable(b))return a=!0},this);return a},_checkSingleCelledTable:function(a){var b=
a.getFirstCell();if(d.isChartCell(b)&&!b.content.isMultiFeatureChart())return!0;if(d.isInfographicCell(b)){if(b=b.content.getType(),!f.supportsMultiFeature(b)||(b===f.AREA_DETAILS||b===f.ATTACHMENTS)&&a.viewModel.dynamicReportInfo&&a.viewModel.dynamicReportInfo.attachmentsStore&&a.viewModel.dynamicReportInfo.attachmentsStore.supportsMultipleAreas)return!0}else return!1},_checkMultiCelledTable:function(a){if(a.getCells().some(function(b){var c=d.getFieldInfo(b);if(c&&!h.isAreaAttributesFieldInfo(c))return d.isVariableLikeFieldCell(b)}))return!0}})});