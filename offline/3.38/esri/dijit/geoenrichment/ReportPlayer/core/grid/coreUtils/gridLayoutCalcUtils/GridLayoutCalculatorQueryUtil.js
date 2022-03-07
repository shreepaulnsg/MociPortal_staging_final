// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/gridLayoutCalcUtils/GridLayoutCalculatorQueryUtil",[],function(){var f={markAsDirty:function(b){b._fieldToColumnHash=null;b._dataIdToDataHash=null},_calcGridHashes:function(b){b._fieldToColumnHash={};b.columns.forEach(function(a){b._fieldToColumnHash[a.field]=a});b._dataIdToDataHash={};b.rows.forEach(function(a){b._dataIdToDataHash[a.id]=a})},fieldToColumn:function(b,a){b._fieldToColumnHash||f._calcGridHashes(b);return b._fieldToColumnHash&&
b._fieldToColumnHash[a]},dataIdToData:function(b,a){b._dataIdToDataHash||f._calcGridHashes(b);return b._dataIdToDataHash&&b._dataIdToDataHash[a]},getSpannedColumns:function(b,a,c){var e=[];if(1>c)return[];var d;b.columns.some(function(g){if(d||g.field===a)e.push(g),d=!0;if(e.length===c)return!0});return e},getColumnSpannedFields:function(b,a,c){var e=null,d=a.fieldToRowSpanSourceDataIndex&&a.fieldToRowSpanSourceDataIndex[c];a=void 0!==d?b.rows[d]:a;a=a.columnSpans&&a.columnSpans[c];if(1<a)for(e=[],
c=f.fieldToColumn(b,c),d=c=b.columns.indexOf(c);d<c+a;d++)e.push(b.columns[d].field);return e},getRowSpannedData:function(b,a,c){var e=null;c=a.fieldToColumnSpanSourceField&&a.fieldToColumnSpanSourceField[c]||c;c=a.rowSpans&&a.rowSpans[c];if(1<c){e=[];for(var d=a=b.rows.indexOf(a);d<a+c;d++)e.push(b.rows[d])}return e},getMovableData:function(b,a,c){return(a=a.movableIndexHashVertical&&a.movableIndexHashVertical[c])&&b.rows[a]},getMovableColumn:function(b,a,c){return(a=a.movableFieldsHashHorizontal&&
a.movableFieldsHashHorizontal[c])&&f.fieldToColumn(b,a)}};return f});