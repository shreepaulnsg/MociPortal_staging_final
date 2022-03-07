// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/GenericTemplateGenerator","../../core/supportClasses/templateJsonUtils/BlankTemplateJsonUtil ../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder ../../core/supportClasses/tableJson/TableJsonUtil ../../core/sections/sectionUtils/SectionJsonUtil ../../core/infographics/InfographicTypes ../../core/infographics/utils/InfographicJsonUtil".split(" "),function(k,h,d,l,m,n){var f={},p={calcNumRowsColumns:function(b){var a=
2>=b?1:6>=b?2:12>=b?3:Math.ceil(b/4);var c=1===b?1:4>=b?2:9>=b?3:4;return{numRows:a,numColumns:c,numVarsInLastRow:c-(a*c-b),lastRowCellIndexes:null,lastRowCellWidths:null}}},q={mergeLastRow:function(b,a,c){2===a.numColumns?1===a.numVarsInLastRow&&(d.modifyTableJson(b,a.numRows-1,0,{columnSpan:2}),a.lastRowCellWidths=[2*c]):3===a.numColumns?1===a.numVarsInLastRow?(d.modifyTableJson(b,a.numRows-1,0,{columnSpan:3}),a.lastRowCellWidths=[3*c]):2===a.numVarsInLastRow&&(d.modifyTableJson(b,a.numRows-1,0,
{cellStyle:{width:1.5*c}}),d.modifyTableJson(b,a.numRows-1,1,{columnSpan:2,cellStyle:{width:.5*c}}),a.lastRowCellWidths=[1.5*c,1.5*c]):4===a.numColumns&&(1===a.numVarsInLastRow?(d.modifyTableJson(b,a.numRows-1,0,{columnSpan:4}),a.lastRowCellWidths=[4*c]):2===a.numVarsInLastRow?(d.modifyTableJson(b,a.numRows-1,0,{columnSpan:2}),d.modifyTableJson(b,a.numRows-1,2,{columnSpan:2}),a.lastRowCellIndexes=[0,2],a.lastRowCellWidths=[2*c,2*c]):3===a.numVarsInLastRow&&(d.modifyTableJson(b,a.numRows-1,0,{cellStyle:{width:4*
c/3}}),d.modifyTableJson(b,a.numRows-1,1,{columnSpan:2,cellStyle:{width:2*c/3}}),d.modifyTableJson(b,a.numRows-1,2,{cellStyle:{width:2*c/3}}),d.modifyTableJson(b,a.numRows-1,3,{cellStyle:{width:4*c/3}}),a.lastRowCellIndexes=[0,1,3],a.lastRowCellWidths=[4*c/3,4*c/3,4*c/3]))}},r={insertNextPanel:function(b,a,c){void 0===a.currentRowIndex&&(a.currentRowIndex=0,a.currentColumnIndex=0);var e=a.currentRowIndex===a.numRows-1;b.rows[a.currentRowIndex].fieldInfos["field"+(e&&a.lastRowCellIndexes?a.lastRowCellIndexes[a.currentColumnIndex]:
a.currentColumnIndex)]=c(e&&a.lastRowCellWidths&&a.lastRowCellWidths[a.currentColumnIndex]);a.currentColumnIndex++;a.currentColumnIndex>a.numColumns-1&&(a.currentColumnIndex=0,a.currentRowIndex++)}};f.generateTemplatesFromFieldInfos=function(b){var a=p.calcNumRowsColumns(b.length),c=k.createBlankTemplate({elementWidth:500,elementHeight:250,layout:{numRows:a.numRows,numColumns:a.numColumns}}),e=c.sectionsTables[0];q.mergeLastRow(e,a,500);b.forEach(function(t){r.insertNextPanel(e,a,function(g){var u=
f._createInfographicJson(t,g||500,250);g=d.createSingleCellTable({width:g||500,height:250,fieldInfo:h.createFieldInfoFromInfographic(u)});return h.createFieldInfoFromSection(l.wrapInDetailsSectionJson(g))})});return c};f._createInfographicJson=function(b,a,c){return{type:m.ONE_VAR,title:b.alias,style:{width:a,height:c},levels:n.getDefaultLevels(),fieldInfos:[b],calcData:{calculatorName:b.templateName.substr(0,b.templateName.indexOf(".")),variables:[b.fullName]}}};return f});