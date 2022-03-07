// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/_HiddenCellsCollector",["./_TableRowFixer"],function(m){return{collectHiddenCells:function(e,k){var b={};e&&e.forEach(function(l,d){var c=0;m.fixTr(l,d,b,k);l.tags&&l.tags.forEach(function(a){for(;b[c+"_"+d];)c++;var f=Number(a.attributes&&a.attributes.colspan);a=Number(a.attributes&&a.attributes.rowspan);if(1<f||1<a){f=f||1;a=a||1;for(var g=c;g<c+f;g++)for(var h=d;h<d+a;h++)if(g!==c||h!==d)b[g+"_"+h]=!0}c++})});
return b},isHidden:function(e,k,b){return e[k+"_"+b]}}});