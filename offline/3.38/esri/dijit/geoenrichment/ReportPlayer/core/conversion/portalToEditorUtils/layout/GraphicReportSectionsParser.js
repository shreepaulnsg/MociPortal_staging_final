// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/layout/GraphicReportSectionsParser",["esri/dijit/geoenrichment/utils/JsonXmlConverter"],function(b){return{parseSectionsGraphic:function(c,a){b.queryTopJson(c,"table").forEach(function(d){try{a.templateJson.sectionsTables.push(a.parsers.getParser("section").parseTable(d,a,{fixTableWidthsForPage:!0}))}catch(e){console.log(e)}})}}});