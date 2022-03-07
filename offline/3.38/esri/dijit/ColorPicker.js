// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/ColorPicker/templates/ColorPicker.html":'\x3cdiv class\x3d"${css.container}" aria-label\x3d"${labels.widgetLabel}"\x3e\r\n  \x3cdiv class\x3d"${css.header}" data-dojo-attach-point\x3d"dap_header" tabindex\x3d"0"\x3e\r\n    \x3cspan class\x3d"${css.swatchPreview} ${css.container}"\x3e\r\n      \x3cspan class\x3d"${css.swatch} ${css.swatchTransparencyBackground}"\x3e\x3c/span\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"dap_previewSwatch"\r\n            class\x3d"${css.swatch}"\x3e\x3c/span\x3e\r\n    \x3c/span\x3e\r\n    \x3cspan aria-hidden\x3d"true" role\x3d"presentation"\r\n          class\x3d"${css.collapseIcon} ${css.downArrowIcon}"\x3e\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"${css.colorControls}" data-dojo-attach-point\x3d"dap_colorControls"\r\n       id\x3d"${id}-color-controls" tabindex\x3d"-1"\x3e\r\n    \x3cdiv class\x3d"${css.middle}"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_paletteContainer"\r\n           class\x3d"${css.palette} ${css.container}" tabindex\x3d"0"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dap_primaryPalette"\r\n             class\x3d"${css.palette}" role\x3d"grid"\x3e\x3c/div\x3e\x3c!--\r\n      --\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dap_secondaryPalette"\r\n             class\x3d"${css.palette}" role\x3d"grid"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"${css.paletteOptions}"\x3e\r\n        \x3cinput type\x3d"text" aria-label\x3d"${labels.selectedColor}" data-dojo-type\x3d"dijit/form/TextBox"\r\n               data-dojo-attach-point\x3d"dap_hexInput" class\x3d"${css.hexInput}" /\x3e\r\n        \x3cinput class\x3d"${css.paletteToggle}" type\x3d"button"\r\n               data-dojo-type\x3d"dijit/form/ToggleButton"\r\n               data-dojo-attach-point\x3d"dap_paletteToggle"\r\n               label\x3d"${labels.more}" /\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"${css.footer}" data-dojo-attach-point\x3d"dap_footer"\x3e\r\n      \x3cdiv class\x3d"${css.section} ${css.displayNone}"\r\n           data-dojo-attach-point\x3d"dap_suggestedColorSection"\x3e\r\n        \x3cdiv class\x3d"${css.label}" id\x3d"${id}-suggested-colors-label"\x3e${labels.suggested}\x3c/div\x3e\r\n        \x3cdiv class\x3d"${css.suggested} ${css.palette}"\r\n             aria-labelledby\x3d"${id}-suggested-colors-label"\r\n             data-dojo-attach-point\x3d"dap_suggestedColorPaletteContainer"\r\n             tabindex\x3d"0" role\x3d"grid"\x3e\r\n          \x3cdiv class\x3d"${css.suggested} ${css.swatchRow}"\r\n               data-dojo-attach-point\x3d"dap_suggestedColorPalette"\r\n               role\x3d"row"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"${css.section}"\r\n           data-dojo-attach-point\x3d"dap_recentColorSection"\x3e\r\n        \x3cdiv class\x3d"${css.label}" id\x3d"${id}-recent-colors-label"\x3e${labels.recent}\x3c/div\x3e\r\n        \x3cdiv class\x3d"${css.recent} ${css.palette}" aria-labelledby\x3d"${id}-recent-colors-label"\r\n             data-dojo-attach-point\x3d"dap_recentColorPaletteContainer"\r\n             tabindex\x3d"0" role\x3d"grid"\x3e\r\n          \x3cdiv class\x3d"${css.recent} ${css.swatchRow}"\r\n               data-dojo-attach-point\x3d"dap_recentColorPalette"\r\n               role\x3d"row"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"${css.section}"\r\n           data-dojo-attach-point\x3d"dap_transparencySection"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dap_transparencyLabel"\r\n             class\x3d"${css.label}"\x3e${labels.transparency}\r\n      \x3c/div\x3e\r\n        \x3cdiv class\x3d"${css.transparencySlider}"\r\n             data-dojo-attach-point\x3d"dap_transparencySlider"\r\n             data-dojo-type\x3d"esri/dijit/HorizontalSlider"\r\n             data-dojo-props\x3d"minimum: 0, maximum: 100, discreteValues: 100, labels: ${_transparencyLabels}"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/ColorPicker","../Color ../kernel ./_EventedWidget ./_Tooltip ./ColorPicker/colorUtil ./ColorPicker/HexPalette dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/a11yclick dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/keys dojo/on dojo/query dojo/sniff dojo/dom-style dojo/i18n!../nls/jsapi dojo/text!./ColorPicker/templates/ColorPicker.html ./HorizontalSlider dijit/form/RadioButton dijit/form/TextBox dijit/form/ToggleButton dojo/NodeList-dom".split(" "),
function(t,B,u,C,g,x,D,E,v,n,F,k,h,r,p,l,w,y,q,z,G){u=F([u,D,E,C],{baseClass:"esriColorPicker",css:{container:"esriContainer",collapsed:"esriCollapsed",collapsible:"esriCollapsible",collapseIcon:"esriCollapseIcon",colorControls:"esriColorControls",header:"esriHeader",footer:"esriFooter",middle:"esriMiddle",swatch:"esriSwatch",swatchRow:"esriSwatchRow",swatchEmpty:"esriSwatchEmpty",swatchPreview:"esriSwatchPreview",swatchTransparencyBackground:"esriSwatchTransparencyBackground",focusedSwatch:"esriSwatch--focused",
palette:"esriPalette",paletteOptions:"esriPaletteOptions",paletteToggle:"esriPaletteToggle",label:"esriLabel",hexInput:"esriHexInput",recent:"esriRecent",suggested:"esriSuggested",selected:"esriSelected",disabled:"esriDisabled",section:"esriSection",displayNone:"esriDisplayNone",transparencySlider:"esriTransparencySlider",alt:"esriAlt",downArrowIcon:"esri-icon-down"},declaredClass:"esri.dijit.ColorPicker",labels:z.widgets.colorPicker,templateString:G,constructor:function(a,b){a=a||{};this._colorInstance=
new t;this._brightsPalette=new x({colors:a.palette});this._pastelsPalette=new x({colors:this._toPastels(this._brightsPalette.get("colors"))});this._activePalette=this._brightsPalette;this._swatchCreator=a.swatchCreator||this._createSwatch;this._swatches={};this._recentSwatches={};this._suggestedSwatches={}},buildRendering:function(){this.inherited(arguments);this._createPalettes();this._noColorSwatchNode=r.create("div",{"aria-label":this.labels.noColorTooltip,className:this.css.swatch+" "+this.css.swatchEmpty,
tabIndex:0,role:"button"},this.dap_hexInput.domNode,"after")},postCreate:function(){this.inherited(arguments);this._addListeners();this._selectColor();this.dap_hexInput.intermediateChanges=!0;this.dap_transparencySlider.intermediateChanges=!0;this.createTooltips([{node:this.dap_paletteContainer,label:this.labels.paletteTooltip},{node:this.dap_hexInput,label:this.labels.hexInputTooltip},{node:this._noColorSwatchNode,label:this.labels.noColorTooltip},{node:this.dap_paletteToggle,label:this.labels.moreColorsTooltip}])},
_activePalette:null,_autoCollapseHandle:null,_brightsPalette:null,_colorInstance:null,_noColorSwatchNode:null,_pastelsPalette:null,_previousColor:null,_swatchCreator:null,_swatches:null,_swatchNavigationIndex:null,_transparencyLabels:function(){return"["+[0,50,100].map(function(a){return k.replace(z.widgets.colorPicker.percent,{percent:a})}).map(function(a){return"'"+a+"'"})+"]"}(),collapsed:!1,_setCollapsedAttr:function(a){this.collapsible&&(h.toggle(this.domNode,this.css.collapsed,a),this._set("collapsed",
a),a?this.domNode.setAttribute("aria-expanded","true"):(this.domNode.setAttribute("aria-expanded","false"),this.dap_paletteContainer.focus()))},collapsible:!1,_setCollapsibleAttr:function(a){h.toggle(this.domNode,this.css.collapsible,a);this.dap_header.tabIndex=a?0:-1;if(a){this.domNode.setAttribute("role","button");this.domNode.setAttribute("aria-haspopup","menu");this.domNode.setAttribute("aria-controls",this.dap_colorControls.id);this.domNode.setAttribute("aria-expanded",(!this.collapsed).toString());
if(!this._autoCollapseHandle){l(this.domNode,"keydown",function(c){var d=!this.collapsed&&c.keyCode!=p.ESCAPE;this.collapsed&&c.keyCode!=p.ENTER&&c.keyCode!=p.SPACE||d||(c.preventDefault(),c.keyCode===p.ESCAPE?(this.dap_header.focus(),this.set("collapsed",!0)):(this.set("collapsed",!1),this.dap_paletteContainer.focus()))}.bind(this));var b=l.pausable(this.ownerDocument,"click",function(c){c=this.domNode.contains(c.target);this.collapsed||c||this.set("collapsed",!0)}.bind(this));this._autoCollapseHandle=
b;this.own(b)}this._autoCollapseHandle.resume()}else this.domNode.removeAttribute("role"),this.domNode.removeAttribute("aria-haspopup"),this.domNode.removeAttribute("aria-controls"),this.domNode.removeAttribute("aria-expanded"),this._autoCollapseHandle&&this._autoCollapseHandle.pause();this._set("collapsible",a)},color:null,_getColorAttr:function(){return"no-color"===this.color?"no-color":new t(this.color)},_setColorAttr:function(a,b){a=a||"no-color";b=b||void 0===b;if(!this.required){if("no-color"===
a){this._set("color","no-color");this._previousColor="no-color";this._disableTransparencySlider();this._clearSelection();this._silentlyUpdateHexInput("no-color");this._updatePreviewSwatch(a);h.add(this._noColorSwatchNode,this.css.selected);b&&this.emit("color-change",{color:"no-color"});return}this._enableTransparencySlider();h.remove(this._noColorSwatchNode,this.css.selected)}a=g.normalizeColor(a);var c=this._previousColor,d=this._colorInstance,e=this.css.selected;if(c){if(g.equal(c,a))return;if(c=
this._findSwatch({colors:this._activePalette.get("colors"),color:c,swatches:this._swatches}))h.remove(c,e),q.set(c,"borderColor","")}d.setColor(a);e=d.toHex();this._set("color",new t(d));this._previousColor=a;this._silentlyUpdateIntermediateChangingValueWidget(this.dap_transparencySlider,100*(1-d.a));this._updatePreviewSwatch(d);this._checkSelection();this._silentlyUpdateHexInput(d);this.trackColors&&this._addRecentColor(e);b&&this.emit("color-change",{color:new t(d)})},colorsPerRow:13,_setColorsPerRow:function(a){this._set("colorsPerRow",
0<a?a:13)},_setPaletteAttr:function(a){var b=this._activePalette===this._brightsPalette;this._brightsPalette.set("colors",a);this._pastelsPalette.set("colors",this._toPastels(this._brightsPalette.get("colors")));this._activePalette=b?this._brightsPalette:this._pastelsPalette;this._createPalettes();this._togglePalette(!b)},recentColors:[],_getRecentColorsAttr:function(){return n.map(this.recentColors,function(a){return g.normalizeColor(a)})},_setRecentColorsAttr:function(a){this.recentColors=a||[];
this.recentColors=n.map(this.recentColors,function(b){return g.normalizeColor(b).toHex()});0===this.recentColors.length?this._clearRecentSwatches():this._renderRecentSwatches()},required:!1,_setRequiredAttr:function(a){h.toggle(this._noColorSwatchNode,this.css.displayNone,a);this._set("required",a)},_showRecentColors:!0,_setShowRecentColorsAttr:function(a){h.toggle(this.dap_recentColorSection,this.css.displayNone,!a);this._set("showRecentColors",a)},_showSuggestedColors:!1,_setShowSuggestedColorsAttr:function(a){h.toggle(this.dap_suggestedColorSection,
this.css.displayNone,!a);this._set("showSuggestedColors",a)},_showTransparencySlider:!0,_setShowTransparencySliderAttr:function(a){h.toggle(this.dap_transparencySection,this.css.displayNone,!a);this._set("showTransparencySlider",a)},suggestedColors:null,_getSuggestedColorsAttr:function(){return n.map(this.suggestedColors,function(a){return g.normalizeColor(a)})},_setSuggestedColorsAttr:function(a){this._clearSuggestedSwatches();this.suggestedColors=a||[];this.suggestedColors=n.map(this.suggestedColors,
function(b){return g.normalizeColor(b).toHex()});0<this.suggestedColors.length&&this._renderSuggestedSwatches()},trackColors:!0,addRecentColor:function(a){a&&"no-color"!==a&&this._addRecentColor(g.normalizeColor(a).toHex())},loadRecentColors:function(a){this.set("recentColors",JSON.parse(localStorage.getItem(a)))},saveRecentColors:function(a){localStorage.setItem(a,JSON.stringify(this.get("recentColors")))},_toPastels:function(a){var b=this._colorInstance,c=new t([238,238,238]);return n.map(a,function(d){return t.blendColors(b.setColor(d),
c,.2)},this)},_createSwatch:function(a){var b=a.className,c=a.hexColor||"transparent";a=a.paletteNode;var d=this.id+"_"+b.replace(" ","-")+"_"+c.replace("#","");return r.create("span",{id:d,"aria-label":c,role:"gridcell",className:b,style:{background:c}},a)},_createSwatches:function(a,b){var c=this.css.swatch,d=this.css.swatchRow,e=this.colorsPerRow;b=b.get("colors");var f,m;n.forEach(b,function(A,H){0===H%e&&(f=r.create("div",{className:d,role:"row"},a));m=this._swatchCreator({className:c,hexColor:A,
paletteNode:f});this._swatches[A]=m},this)},_selectColor:function(){var a=this.color||this._activePalette.get("colors")[0];this.set("color",a)},_setColorWithCurrentAlpha:function(a){"no-color"!==a&&"no-color"!==this.color&&(a=g.normalizeColor(a),a.a=this.color.a);this.set("color",a)},_updatePreviewSwatch:function(a){var b=this.css.swatchEmpty,c=this.dap_previewSwatch;if("no-color"===a)h.add(c,b),q.set(c,{backgroundColor:"",borderColor:""});else{var d=g.getContrastingColor(a);var e=8!==y("ie");h.remove(c,
b);b=a.toCss(e);d=d.toCss(e);d={backgroundColor:b,borderColor:d};e||(d.opacity=a.a);q.set(c,d)}},_showBrights:function(){h.remove(this.dap_paletteContainer,this.css.alt);this._activePalette=this._brightsPalette},_showPastels:function(){h.add(this.dap_paletteContainer,this.css.alt);this._activePalette=this._pastelsPalette},_setColorFromSwatch:function(a){a=q.get(a,"backgroundColor");this._setColorWithCurrentAlpha(a)},_checkSelection:function(){var a=this.get("color");this._activePalette.contains(a)?
this._highlightColor(a):this._clearSelection()},_landSwatch:function(a){var b=a.index,c=a.colors,d=a.swatches;a=a.paletteNode;var e=c[b];c=e&&this._findSwatch({colors:c,color:e,swatches:d});d=this.css.focusedSwatch;w("."+d,a).removeClass(d).style("borderColor","");a.removeAttribute("aria-activedescendant");this._swatchNavigationIndex=b;c&&null!=b&&(h.add(c,d),b=g.getContrastingColor(g.normalizeColor(e)),q.set(c,"borderColor",b.toHex()),a.setAttribute("aria-activedescendant",c.id))},_navigateSwatches:function(a,
b){var c=a.keyCode,d=b.color,e=b.colors,f=b.swatches;b=b.paletteNode;d="no-color"===d?-1:e.indexOf(d.toHex());d=null!=this._swatchNavigationIndex?this._swatchNavigationIndex:-1<d?d:0;if(c===p.ENTER)this._landSwatch({paletteNode:b,colors:e,index:null,swatches:f}),this.set("color",e[d]);else{var m=this.colorsPerRow;c===p.LEFT_ARROW&&d--;c===p.RIGHT_ARROW&&d++;c===p.DOWN_ARROW&&(d+=m,d>e.length&&(d%=m),a.preventDefault());c===p.UP_ARROW&&(d-=Math.min(m,e.length),0>d&&(d=e.length+d),a.preventDefault());
-1===d?d=e.length-1:d===e.length&&(d=0);this._landSwatch({paletteNode:b,colors:e,index:d,swatches:f})}},_addListeners:function(){var a="."+this.css.swatch,b=this.dap_paletteContainer;this.own(l(b,l.selector(a,v),k.hitch(this,function(f){this._setColorFromSwatch(f.target)})),l(b,"blur",k.hitch(this,function(){this._landSwatch({paletteNode:b,colors:this._activePalette.get("colors"),index:null})})),l(b,"keydown",k.hitch(this,function(f){this._navigateSwatches(f,{color:this.get("color"),colors:this._activePalette.get("colors"),
paletteNode:b,swatches:this._swatches})})));var c=this.dap_recentColorPaletteContainer;this.own(l(c,l.selector(a,v),k.hitch(this,function(f){this._setColorFromSwatch(f.target)})),l(c,"keydown",k.hitch(this,function(f){this._navigateSwatches(f,{color:"no-color",colors:this.recentColors,paletteNode:c,swatches:this._recentSwatches})})),l(c,"blur",k.hitch(this,function(){this._landSwatch({paletteNode:c,colors:this.recentColors,index:null})})));var d=this.dap_suggestedColorPaletteContainer;this.own(l(d,
l.selector(a,v),k.hitch(this,function(f){this._setColorFromSwatch(f.target)})),l(d,"keydown",k.hitch(this,function(f){this._navigateSwatches(f,{color:"no-color",colors:this.suggestedColors,paletteNode:d,swatches:this._suggestedSwatches})})),l(d,"blur",k.hitch(this,function(){this._landSwatch({paletteNode:d,colors:this.suggestedColors,index:null})})));this.own(l(this._noColorSwatchNode,v,k.hitch(this,function(f){this.set("color","no-color")})));var e=this.dap_hexInput;e.on("blur",k.hitch(this,function(){var f=
g.normalizeHex(e.get("value"));g.isShorthandHex(f)?this._setColorWithCurrentAlpha(f):this._silentlyUpdateHexInput(this.color)}));e.on("change",k.hitch(this,function(){var f=g.normalizeHex(e.get("value"));g.isLonghandHex(f)&&("no-color"===this.color||this.color.toHex()!==f)&&this._setColorWithCurrentAlpha(f)}));this.dap_transparencySlider.on("change",k.hitch(this,function(f){var m=this.get("color");"no-color"!==m&&(m=g.normalizeColor(this._colorInstance.setColor(m)),m.a=1-f/100,this._updatePreviewSwatch(m),
this._silentlyUpdateHexInput(m),this.set("color",m))}));this.dap_paletteToggle.on("change",k.hitch(this,this._togglePalette));this.own(l(this.dap_header,"click",function(){this.collapsible&&this.set("collapsed",!this.collapsed)}.bind(this)))},_togglePalette:function(a){this.dap_paletteToggle.set("checked",a,!1);a?this._showPastels():this._showBrights();this._checkSelection()},_createPalettes:function(){this._swatches={};r.empty(this.dap_primaryPalette);r.empty(this.dap_secondaryPalette);this._createSwatches(this.dap_primaryPalette,
this._brightsPalette);this._createSwatches(this.dap_secondaryPalette,this._pastelsPalette)},_silentlyUpdateHexInput:function(a){a="no-color"===a?"":a.toHex();this._silentlyUpdateIntermediateChangingValueWidget(this.dap_hexInput,a)},_silentlyUpdateIntermediateChangingValueWidget:function(a,b){a.intermediateChanges=!1;a.set("value",b,!1);a.intermediateChanges=!0},_addRecentColor:function(a){if(a){var b=this.recentColors,c=n.indexOf(b,a);-1<c&&b.splice(c,1);b.unshift(a);b.length>this.colorsPerRow&&b.pop();
this._renderRecentSwatches()}},_renderRecentSwatches:function(){if(this.recentColors){var a=this.css.recent,b=this.css.swatch,c=w("."+a+"."+b,this.dap_recentColorPalette);this._recentSwatches={};n.forEach(this.recentColors,function(d,e){e<this.colorsPerRow&&(e+1>c.length&&c.push(this._swatchCreator({hexColor:d,className:b+" "+a,paletteNode:this.dap_recentColorPalette})),e=c[e],this._recentSwatches[d]=e,q.set(e,"backgroundColor",d))},this)}},_renderSuggestedSwatches:function(){if(this.suggestedColors){var a=
this.css.suggested,b=this.css.swatch,c=w("."+a+"."+b,this.dap_suggestedColorPalette);this._suggestedSwatches={};n.forEach(this.suggestedColors,function(d,e){e<this.colorsPerRow&&(e+1>c.length&&c.push(this._swatchCreator({hexColor:d,className:b+" "+a,paletteNode:this.dap_suggestedColorPalette})),e=c[e],this._suggestedSwatches[d]=e,q.set(e,"backgroundColor",d))},this)}},_clearRecentSwatches:function(){r.empty(this.dap_recentColorPalette)},_clearSuggestedSwatches:function(){r.empty(this.dap_suggestedColorPalette)},
_clearSelection:function(){var a=this.css.selected;w("."+a,this.dap_paletteContainer).removeClass(a).removeAttr("aria-selected")},_highlightColor:function(a){var b=this.css.selected,c=this._findSwatch({colors:this._activePalette.get("colors"),color:a,swatches:this._swatches});c&&(a=g.normalizeColor(a),a=g.getContrastingColor(a),h.add(c,b),q.set(c,"borderColor",a.toHex()),c.setAttribute("aria-selected",!0))},_findSwatch:function(a){var b=a.colors,c=this._colorInstance.setColor(a.color).toHex(),d;-1<
n.indexOf(b,c)&&(d=a.swatches[c]);return d},_enableTransparencySlider:function(){h.remove(this.dap_transparencyLabel,this.css.disabled);this.dap_transparencySlider.set("disabled",!1)},_disableTransparencySlider:function(){h.add(this.dap_transparencyLabel,this.css.disabled);this.dap_transparencySlider.set("disabled",!0)}});u.NO_COLOR="no-color";y("extend-esri")&&k.setObject("dijit.ColorPicker",u,B);return u});