/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/has",["./global","require","module"],function(p,e,m){var a=e.has||function(){};if(!a("dojo-has-api")){var k="undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location==location&&window.document==document&&document,q=k&&k.createElement("DiV"),c=m.config&&m.config()||{};a=function(b){return"function"==typeof c[b]?c[b]=c[b](p,k,q):c[b]};a.cache=c;a.add=function(b,f,d,g){("undefined"==typeof c[b]||g)&&(c[b]=f);return d&&a(b)}}a.add("dom-addeventlistener",
!!document.addEventListener);a.add("touch","ontouchstart"in document||"onpointerdown"in document&&0<navigator.maxTouchPoints||window.navigator.msMaxTouchPoints);a.add("touch-events","ontouchstart"in document);a.add("pointer-events","pointerEnabled"in window.navigator?window.navigator.pointerEnabled:"PointerEvent"in window);a.add("MSPointer",window.navigator.msPointerEnabled);a.add("touch-action",a("touch")&&a("pointer-events"));a.add("device-width",screen.availWidth||innerWidth);e=document.createElement("form");
a.add("dom-attributes-explicit",0==e.attributes.length);a.add("dom-attributes-specified-flag",0<e.attributes.length&&40>e.attributes.length);a.clearElement=function(b){b.innerHTML="";return b};a.normalize=function(b,f){var d=b.match(/[\?:]|[^:\?]*/g),g=0,h=function(n){var l=d[g++];if(":"==l)return 0;if("?"==d[g++]){if(!n&&a(l))return h();h(!0);return h(n)}return l||0};return(b=h())&&f(b)};a.load=function(b,f,d){b?f([b],d):d()};return a});