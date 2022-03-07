// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/conditionalStyling/ConditionalStyleLegendBuilder","dojo/string dojo/dom-class dojo/dom-construct dojo/dom-style ../images/ImageDataHolder ./ConditionalStyleUtil esri/dijit/geoenrichment/utils/ObjectUtil dojo/i18n!esri/nls/jsapi".split(" "),function(l,p,m,w,x,q,r,g){function t(a,k,h,d,b,e){var f=q.getMatchedCase(d,k,e)||"image"===h&&k.cases.filter(function(c){return c.isDefault})[0];k.cases.some(function(c){n(a,c,h,{isSelected:f===c,
valueFormatFunc:b,triggerValueConverter:e})})}function y(a,k,h){if(1===a.compareInfos.length){var d=a.compareInfos[0],b=+d.value,e=d.operator;if("\x3d"===e)return 0===b?g.topAt0:1===b?g.topAt1:2===b?g.topAt2:-1===b?g.bottomAt0:-2===b?g.bottomAt1:-3===b?g.bottomAt2:0<b?l.substitute(g.topAtN,[b+1]):l.substitute(g.bottomAtN,[-b]);if(("\x3c"===e||"\x3c\x3d"===e)&&0<=b)return l.substitute(g.topN,[b+("\x3c"===d.operator?0:1)]);if(("\x3e"===e||"\x3e\x3d"===e)&&0>b)return l.substitute(g.bottomN,[-b+("\x3e"===
d.operator?-1:0)])}return u(a,k,null,function(f){return 0<=f?f+1:h.numElements+f+1},g.indexDescOrder_interval)}function n(a,k,h,d){d=d||{};var b=d.customDesc||u(k,h,d.valueFormatFunc,d.triggerValueConverter),e=q.styleFromSetters(k.setters);if(b&&e){a=m.create("div",{"class":"esriGEConditionalStylingLegend_row"},a);var f=m.create("div",{"class":"dijitInline"},a);"image"===h?m.create("div",{"class":"esriGEConditionalStylingLegend_symbolImage dijitInline"},f).style.backgroundImage="url("+(x.getImageData(k.setters[0].value)||
"")+")":("chart"===h?p.add(f,"esriGEConditionalStylingLegend_symbolChart"):(p.add(f,"esriGEConditionalStylingLegend_text"),f.innerHTML=g.conditionalLegend_preview),f.style.backgroundImage="none",w.set(f,e));m.create("div",{"class":"dijitInline esriGESpaceBeforeBig",innerHTML:b},a);d.isSelected&&p.add(a,"esriGEConditionalStylingLegend_currentValue")}}function u(a,k,h,d,b){function e(f){var c=r.parseNumber(f);c=d?d(c):c;return isNaN(c)?f:h?h(c):r.formatNumber(c)}if("image"===k&&a.isDefault)return g.conditionalLegend_default;
if(!a.compareInfos||!a.compareInfos.length)return null;a=a.compareInfos.map(function(f){return l.substitute(g["conditionalLegend_operator_"+z[f.operator]],{value:e(f.value)})});return 1===a.length?a[0]:l.substitute(b||g.conditionalLegend_interval,{from:a[0],to:a[1]})}g=g.geoenrichment.dijit.ReportPlayer.ConditionalLegend;var v={},z={"\x3d":"equals","\x3c":"less","\x3e":"greater","\x3c\x3d":"lessOrEquals","\x3e\x3d":"greaterOrEquals"};v.createLegendNode=function(a,k,h,d,b){if(!h)return null;var e=
m.create("div",{"class":"esriGEConditionalStylingLegend esriGEConditionalStylingLegend_"+h});m.create("div",{"class":"esriGEConditionalStylingLegend_row",innerHTML:g.conditionalLegend_title},e);if(a.calcMethod)if("percentInGroup"===a.calcMethod)t(e,a,h,d,b,function(c){return q.conditionalValueFromPercentInGroup(k.min,k.max,c)});else{if("indexDescOrder"===a.calcMethod)d=a.cases.filter(function(c){return c.isDefault})[0],a.cases.filter(function(c){return!c.isDefault}).forEach(function(c){n(e,c,h,{customDesc:y(c,
h,k)})});else{d=a.cases.filter(function(c){return c.isDefault})[0];b=a.cases.filter(function(c){return!c.isDefault})[0];if("aboveAverage"===a.calcMethod)var f=g.aboveAverage;else"belowAverage"===a.calcMethod&&(f=g.belowAverage);n(e,b,h,{customDesc:f})}d&&n(e,d,h,null)}else t(e,a,h,d,b,null);return e};return v});