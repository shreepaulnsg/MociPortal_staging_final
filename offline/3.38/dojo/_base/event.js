/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/_base/event",["./kernel","../on","../has","../dom-geometry"],function(e,b,f,g){if(b._fixEvent){var h=b._fixEvent;b._fixEvent=function(a,c){(a=h(a,c))&&g.normalizeEvent(a);return a}}var d={fix:function(a,c){return b._fixEvent?b._fixEvent(a,c):a},stop:function(a){f("dom-addeventlistener")||a&&a.preventDefault?(a.preventDefault(),a.stopPropagation()):(a=a||window.event,a.cancelBubble=!0,b._preventDefault.call(a))}};e.fixEvent=d.fix;e.stopEvent=d.stop;return d});