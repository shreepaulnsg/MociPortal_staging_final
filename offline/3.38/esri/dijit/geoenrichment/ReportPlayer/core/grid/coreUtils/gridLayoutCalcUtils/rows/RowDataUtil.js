// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/gridLayoutCalcUtils/rows/RowDataUtil",["../GridLayoutCalculatorQueryUtil"],function(k){var d={getDataHeight:function(b,a,c){return b.looseResize?d.getDataHeightOwn(b,a,c)||a.style.height||0:a.style.height||0},getDataHeightOwn:function(b,a,c){if(b.looseResize)return a.style.fields=a.style.fields||{},(a.style.fields[c]=a.style.fields[c]||{}).height},setDataHeight:function(b,a,c,g,e){b.looseResize?(e?k.getColumnSpannedFields(b,a,c)||[c]:
[c]).forEach(function(f){a.style.fields=a.style.fields||{};(a.style.fields[f]=a.style.fields[f]||{}).height=g}):a.style.height=g},calcDataHeight:function(b,a,c,g){var e=0,f=a.rowSpans&&a.rowSpans[c];if(1<f)for(var h=a.index;h<a.index+f;h++)h!==g&&(e+=d.getDataHeight(b,b.rows[h],c));else e=d.getDataHeight(b,a,c);return e},recalcGridHeight:function(b){b._height=0;var a=b.columns[0].field;b.rows.forEach(function(c){b._height+=d.getDataHeight(b,c,a)});return b._height}};return d});