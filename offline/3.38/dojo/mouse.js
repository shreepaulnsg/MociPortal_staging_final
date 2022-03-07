/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/mouse",["./_base/kernel","./on","./has","./dom","./_base/window"],function(l,p,d,q,b){function k(a,c){var f=function(g,e){return p(g,a,function(h){if(c)return c(h,e);if(!q.isDescendant(h.relatedTarget,g))return e.call(this,h)})};f.bubble=function(g){return k(a,function(e,h){var m=g(e.target),n=e.relatedTarget;if(m&&m!=(n&&1==n.nodeType&&g(n)))return h.call(m,e)})};return f}d.add("dom-quirks",b.doc&&"BackCompat"==b.doc.compatMode);d.add("events-mouseenter",b.doc&&"onmouseenter"in b.doc.createElement("div"));
d.add("events-mousewheel",b.doc&&"onmousewheel"in b.doc);b=d("dom-quirks")&&d("ie")||!d("dom-addeventlistener")?{LEFT:1,MIDDLE:4,RIGHT:2,isButton:function(a,c){return a.button&c},isLeft:function(a){return a.button&1},isMiddle:function(a){return a.button&4},isRight:function(a){return a.button&2}}:{LEFT:0,MIDDLE:1,RIGHT:2,isButton:function(a,c){return a.button==c},isLeft:function(a){return 0==a.button},isMiddle:function(a){return 1==a.button},isRight:function(a){return 2==a.button}};l.mouseButtons=
b;l=d("events-mousewheel")?"mousewheel":function(a,c){return p(a,"DOMMouseScroll",function(f){f.wheelDelta=-f.detail;c.call(this,f)})};return{_eventHandler:k,enter:k("mouseover"),leave:k("mouseout"),wheel:l,isLeft:b.isLeft,isMiddle:b.isMiddle,isRight:b.isRight}});