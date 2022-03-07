// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/TableParser","dojo/_base/lang esri/dijit/geoenrichment/utils/JsonXmlConverter esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/RichTextJsonUtil ../../../supportClasses/DocumentOptions ../../ConversionUtil ../../../sections/SectionTypes ./AlignParser ./_HiddenCellsCollector esri/dijit/geoenrichment/utils/ColorUtil".split(" "),
function(N,v,O,P,Q,k,w,R,G,S){var E={parseTableCellAttributes:function(a,c,b){b=b.tableDefaultStyles;c=c||{};a.overrideStyle&&(c.overrideStyle=a.overrideStyle);a.pad&&(c.horizontalPadding=k.ptToPx(a.pad));a.vpad&&(c.verticalPadding=k.ptToPx(a.vpad));a.angle&&(c.angle=Number(a.angle)||0);R.parseAlign(a,c);a.width&&(c.width=k.ptToPx(a.width));a.height&&(c.height=k.ptToPx(a.height));N.mixin(c,k.ptToPxObj(k.parseStyleString(a.style)));if(c.overrideStyle&&b){b=b.getStyle(c.overrideStyle);for(var f in b)delete c[f]}E._parseBorderProperties(a,
c);return c},_SIDES:["Top","Right","Bottom","Left"],_parseBorderProperties:function(a,c){E._SIDES.forEach(function(b){if(a["border"+b+"Width"]){a["border"+b+"Color"]&&(c["border"+b+"Color"]=a["border"+b+"Color"]);a["border"+b+"Width"]&&(c["border"+b+"Width"]=k.ptToPx(a["border"+b+"Width"]));a["border"+b+"Style"]&&(c["border"+b+"Style"]=a["border"+b+"Style"]);var f=a["border"+b+"Opacity"];c["border"+b+"Opacity"]=f?Number(f):1}})}},t={getElement:function(a,c,b){var f=t._processTableColumns(a,c.templateJson,
b),g=Number(a.attributes.fixedColumns)||0,l=Number(a.attributes.dynamicColumns)||0,e=t._getTableOuterTags(a,c);b=e.trTags;var m=e.bgTag,n=e.fgTag,d=e.backgroundFloatingPanelsTag,h=e.foregroundFloatingPanelsTag,B=e.filterTag;e=e.sortingTag;if(b){var p=b.map(function(){return{style:{fields:{}},fieldInfos:{}}}),x=G.collectHiddenCells(b,c);b.forEach(function(q,z){var r=p[z];q.attributes&&q.attributes.height&&(r.style.height=k.ptToPx(q.attributes.height));if(q.tags&&q.tags.length){var A=0;if(l){var I=
[],J=[],F=0;q.tags.forEach(function(C){for(;G.isHidden(x,F,z);)F++;F<g?I.push(C):J.push(C);F++});var T=Math.round((f.length-g)/l);q.tags=I;for(var K=0;K<T;K++)q.tags=q.tags.concat(J)}q.tags.forEach(function(C){for(;G.isHidden(x,A,z);)A++;if(f[A]){var D=f[A].field,y=C.attributes||{},L=r.style.fields[D]={};E.parseTableCellAttributes(y,L,c);y.width&&t._parseSpannedCellsDimentions(y,p,f,z,A);y.editable&&(r.editInfo=r.editInfo||{},r.editInfo[D]=!0);var M=Number(y.colspan);y=Number(y.rowspan);M&&(r.columnSpans=
r.columnSpans||{},r.columnSpans[D]=M);y&&(r.rowSpans=r.rowSpans||{},r.rowSpans[D]=y);try{t._parseCellContent(C,r,D,L,c)}catch(U){console.log(U)}A++}})}})}b={id:"table",customName:a.attributes.customName,backgroundSectionJson:m&&t._parseTableBackgroundForeground(m,c,!0),foregroundSectionJson:n&&t._parseTableBackgroundForeground(n,c,!1),backgroundFloatingTablesSectionJson:d&&t._parseFloatingPanels(d,c,!0),foregroundFloatingTablesSectionJson:h&&t._parseFloatingPanels(h,c,!1),columns:f,rows:p||[],style:{width:k.ptToPx(a.attributes.width),
left:k.ptToPx(a.attributes.left),top:k.ptToPx(a.attributes.spaceBefore),spaceAfter:k.ptToPx(a.attributes.spaceAfter),alternatingStyle:a.attributes.alternatingStyle,opacity:a.attributes.opacity?Number(a.attributes.opacity):void 0,fixedCellsOpacity:a.attributes.fixedCellsOpacity?Number(a.attributes.fixedCellsOpacity):void 0},attributes:{},presetFilter:B&&c.parsers.getParser("filter").getFilter(B),noChartView:!!a.attributes.noChartView};var u=e&&c.parsers.getParser("sorting").getSorting(e);if(u){var H;
f.some(function(q,z){if(z===u.columnIndex)return H=q.field,!0});H&&(u.field=H,delete u.columnIndex,b.presetSorting=u)}g&&(b.attributes.fixedColumns=g);l&&(b.attributes.dynamicColumns=l);a.attributes.fixedRows&&(b.attributes.fixedRows=Number(a.attributes.fixedRows)||0);a.attributes.dynamicRows&&(b.attributes.dynamicRows=Number(a.attributes.dynamicRows)||0);b.attributes.inSectionRole=a.attributes.inSectionRole;return b},_processTableColumns:function(a,c,b){if(b&&b.fixTableWidthsForPage&&(c=k.pxToPt(Q.getPageBox(c.documentOptions).contentW),
a.attributes.widths&&Number(a.attributes.width)>c)){b=k.splitTrim(a.attributes.widths,";",!0);var f=Number(a.attributes.width)-c,g=Number(b[b.length-1]);g>f&&(b[b.length-1]=g-f,a.attributes.widths=b.join(";"),a.attributes.width=c)}var l=0;return a.attributes.widths?k.splitTrim(a.attributes.widths,";",!0).map(function(e){return{field:"field"+l++,style:{width:k.ptToPx(e)}}}):[]},_getTableOuterTags:function(a,c){var b=[],f,g,l,e,m,n;1.1<=c.revisionVersion?a.tags&&a.tags.forEach(function(d){if("tr"===
d.name)b.push(d);else if("filter"===d.name)m=d;else if("sorting"===d.name)n=d;else switch(d.attributes.type){case w.TABLE_BACKGROUND:f=d;break;case w.TABLE_FOREGROUND:g=d;break;case w.TABLE_BACKGROUND_FLOATING_PANELS:l=d;break;case w.TABLE_FOREGROUND_FLOATING_PANELS:case w.TABLE_FLOATING_PANELS:e=d}}):a.tags&&a.tags.forEach(function(d){"tr"===d.name?b.push(d):"background"===d.name?f=d:"foreground"===d.name?g=d:"floatingElements"===d.name&&(e=d)});return{trTags:b,bgTag:f,fgTag:g,backgroundFloatingPanelsTag:l,
foregroundFloatingPanelsTag:e,filterTag:m,sortingTag:n}},_processTdContent:function(a,c){function b(h){h=h.tags&&1===h.tags.length&&h.tags[0];if(!h||!h.tags)return null;"b"===h.name?c.fontWeight="bold":"i"===h.name?c.fontStyle="italic":"u"===h.name&&(c.textDecoration="underline");return"b"===h.name||"i"===h.name||"u"===h.name?b(h)||{tag:h.tags[0],parentTag:h}:null}if(a.tags&&a.tags.length){var f=v.queryTopJson(a,"trigger")[0]||v.queryTopJson(a,"trigger2")[0];var g=v.queryTopJson(a,"d")[0];var l=(l=
g&&v.queryTopJson(g,"dataDrillingPanels")[0]||v.queryTopJson(a,"dataDrillingPanels")[0])&&v.queryTopJson(l,"dataDrillingPanel")[0];var e=g&&v.queryTopJson(g,"tooltip")[0];var m=a.tags.filter(function(h){return"br"!==h.name});var n=g?g:m[0];if(f&&g)n=g;else{var d=b(a);n=d&&d.tag||g||m[0];a=d&&d.parentTag||a}}return{mainTag:n,triggerTag:f,ddTag:l,tooltipTag:e,parentTag:a,hasMultipleTags:m&&1<m.length}},_parseSpannedCellsDimentions:function(a,c,b,f,g){if(a.spannedWidths||a.spannedHeights){var l=a.spannedWidths?
a.spannedWidths.split(";").map(function(h){return k.ptToPx(h)}):[k.ptToPx(a.width)];a=a.spannedHeights?a.spannedHeights.split(";").map(function(h){return k.ptToPx(h)}):[k.ptToPx(a.height)];for(var e=0;e<l.length;e++)for(var m=0;m<a.length;m++){var n=b[g+e],d=c[f+m];n=d.style.fields[n.field]=d.style.fields[n.field]||{};n.width=l[e];n.height=a[m]}}},_parseCellContent:function(a,c,b,f,g){function l(u){v.isRichText(u)?c.fieldInfos[b]=P.createFieldInfoFromRichText(u):c[b]=v.unrichHTML(u)}var e=t._processTdContent(a,
f);a=e.mainTag;var m=e.parentTag,n=e.triggerTag,d=e.ddTag,h=e.tooltipTag;e=e.hasMultipleTags;if(e&&!n&&!d&&!h){var B=g.parsers.getParser("field").parseRichTextTag(m,g);if(B){c.fieldInfos[b]=B;var p=!0}}if(a&&!p){g.report.isGraphicReport&&"section"===a.name&&!a.attributes.style&&f.backgroundColor&&!S.isTransparent(f.backgroundColor)&&(a.attributes.style=k.composeStyleString({backgroundColor:f.backgroundColor}),delete f.backgroundColor);try{var x=g.parsers.getParser("field").parseField(a,m,g,n,d,h)}catch(u){console.log(u),
x=O.createFieldInfoForUnsupportedContent()}if(!1===x)p=!0;else if("number"===typeof x)c[b]=x+"",p=!0;else if(x)c.fieldInfos[b]=x,p=!0;else if("chart"===a.name)p=!0;else if("img"===a.name)p=!0;else if("mapImage"===a.name)p=!0;else if("text"===a.name)c[b]=a.attributes.name,p=!0;else if("a"===a.name&&a.tags&&a.tags[0].text){if(f=a.attributes.href)c.urls=c.urls||{},c.urls[b]=f,c[b]=a.tags[0].text,p=!0}else a.text&&!e&&(l(a.text),p=!0)}p||l(v.getInnerHTML(m))},_parseTableBackgroundForeground:function(a,
c,b){a.attributes=a.attributes||{};a.attributes.type=b?w.TABLE_BACKGROUND:w.TABLE_FOREGROUND;return c.parsers.getParser("section").parseSection(a,c)},_parseFloatingPanels:function(a,c,b){a.attributes=a.attributes||{};a.attributes.type=b?w.TABLE_BACKGROUND_FLOATING_PANELS:w.TABLE_FOREGROUND_FLOATING_PANELS;return c.parsers.getParser("section").parseSection(a,c)}};t.parseTableCellAttributes=E.parseTableCellAttributes;return t});