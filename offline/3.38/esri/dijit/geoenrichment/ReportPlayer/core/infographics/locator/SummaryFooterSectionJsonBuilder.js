// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/locator/SummaryFooterSectionJsonBuilder",["dojo/_base/lang","../../sections/SectionTypes","esri/dijit/geoenrichment/utils/FieldUtil"],function(e,f,g){return{buildSummaryFooterSectionJson:function(h){var a=e.clone(h.dataSectionJson.stack[0]);a.rows.length=1;var c=a.rows[0].fieldInfos;a.columns.forEach(function(b){var d=c[b.field];d&&!g.isNumericField(d)&&(delete c[b.field],delete a.rows[0][b.field])});return{type:f.INFOGRAPHIC_SUMMARY_FOOTER,
stack:[a]}}}});