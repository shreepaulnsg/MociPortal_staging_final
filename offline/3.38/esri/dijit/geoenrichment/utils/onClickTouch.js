// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/onClickTouch",["dojo/_base/lang","dojo/on","dojo/sniff"],function(h,b,k){var l=k("touch");return h.mixin(function(e,a,c,f){if(l){switch(a){case "click":a="touchstart,click";break;case "mousedown":a="touchstart,mousedown";break;case "mouseup":a="touchend,mouseup";break;case "clickend":a="touchend,click";break;default:return b(e,a,c,f)}var g=!1;return b(e,a,function(d){"touchstart"===d.type||"touchend"===d.type?(c.call(this,d),g=!0,setTimeout(function(){g=!1},
500)):g||c.call(this,d)},f)}"clickend"===a&&(a="click");return b(e,a,c,f)},b)});