// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/PlayerViewModes",[],function(){var b={FULL_PAGES:"fullPages",PANELS_IN_SLIDES:"panelsInSlides",PANELS_IN_STACK:"panelsInStack",PANELS_IN_STACK_ALL:"panelsInStackAll",isSupported:function(a){for(var c in b)if(b[c]===a)return!0;return!1},toSupportedValue:function(a){return b.isSupported(a)?a:b.FULL_PAGES},isMobileSupported:function(a){return a===b.PANELS_IN_SLIDES||a===b.PANELS_IN_STACK||a===b.PANELS_IN_STACK_ALL},isStackLike:function(a){return a===b.PANELS_IN_STACK||
a===b.PANELS_IN_STACK_ALL},isStack:function(a){return a===b.PANELS_IN_STACK||a===b.PANELS_IN_STACK_ALL}};return b});