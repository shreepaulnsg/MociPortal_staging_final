/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/window","./_base/lang ./sniff ./_base/window ./dom ./dom-geometry ./dom-style ./dom-construct".split(" "),function(L,f,q,M,m,H,u){f.add("rtl-adjust-position-for-verticalScrollBar",function(b,c){b=q.body(c);c=u.create("div",{style:{overflow:"scroll",overflowX:"visible",direction:"rtl",visibility:"hidden",position:"absolute",left:"0",top:"0",width:"64px",height:"64px"}},b,"last");var e=u.create("div",{style:{overflow:"hidden",direction:"ltr"}},c,"last"),g=0!=m.position(e).x;c.removeChild(e);
b.removeChild(c);return g});f.add("position-fixed-support",function(b,c){b=q.body(c);c=u.create("span",{style:{visibility:"hidden",position:"fixed",left:"1px",top:"1px"}},b,"last");var e=u.create("span",{style:{position:"fixed",left:"0",top:"0"}},c,"last"),g=m.position(e).x!=m.position(c).x;c.removeChild(e);b.removeChild(c);return g});var v={getBox:function(b){b=b||q.doc;var c="BackCompat"==b.compatMode?q.body(b):b.documentElement,e=m.docScroll(b);if(f("touch")){var g=v.get(b);b=g.innerWidth||c.clientWidth;
c=g.innerHeight||c.clientHeight}else b=c.clientWidth,c=c.clientHeight;return{l:e.x,t:e.y,w:b,h:c}},get:function(b){if(f("ie")&&v!==document.parentWindow){b.parentWindow.execScript("document._parentWindow \x3d window;","Javascript");var c=b._parentWindow;b._parentWindow=null;return c}return b.parentWindow||b.defaultView},scrollIntoView:function(b,c){try{b=M.byId(b);var e=b.ownerDocument||q.doc,g=q.body(e),n=e.documentElement||g.parentNode,r=f("ie")||f("trident"),t=f("webkit");if(b!=g&&b!=n)if(!(f("mozilla")||
r||t||f("opera")||f("trident")||f("edge"))&&"scrollIntoView"in b)b.scrollIntoView(!1);else{var A="BackCompat"==e.compatMode,B=Math.min(g.clientWidth||n.clientWidth,n.clientWidth||g.clientWidth),C=Math.min(g.clientHeight||n.clientHeight,n.clientHeight||g.clientHeight);e=t||A?g:n;var l=c||m.position(b),d=b.parentNode;c=function(h){return 6>=r||7==r&&A?!1:f("position-fixed-support")&&"fixed"==H.get(h,"position").toLowerCase()};var N=this;t=function(h,D,E){"BODY"==h.tagName||"HTML"==h.tagName?N.get(h.ownerDocument).scrollBy(D,
E):(D&&(h.scrollLeft+=D),E&&(h.scrollTop+=E))};if(!c(b))for(;d;){d==g&&(d=e);var a=m.position(d),I=c(d),F="rtl"==H.getComputedStyle(d).direction.toLowerCase();if(d==e)a.w=B,a.h=C,e==n&&(r||f("trident"))&&F&&(a.x+=e.offsetWidth-a.w),a.x=0,a.y=0;else{var w=m.getPadBorderExtents(d);a.w-=w.w;a.h-=w.h;a.x+=w.l;a.y+=w.t;var p=d.clientWidth,x=a.w-p;0<p&&0<x&&(F&&f("rtl-adjust-position-for-verticalScrollBar")&&(a.x+=x),a.w=p);p=d.clientHeight;x=a.h-p;0<p&&0<x&&(a.h=p)}I&&(0>a.y&&(a.h+=a.y,a.y=0),0>a.x&&(a.w+=
a.x,a.x=0),a.y+a.h>C&&(a.h=C-a.y),a.x+a.w>B&&(a.w=B-a.x));var y=l.x-a.x,z=l.y-a.y,J=y+l.w-a.w,K=z+l.h-a.h;if(0<J*y&&(d.scrollLeft||d==e||d.scrollWidth>d.offsetHeight)){var k=Math[0>y?"max":"min"](y,J);F&&(8==r&&!A||5<=f("trident"))&&(k=-k);var G=d.scrollLeft;t(d,k,0);k=d.scrollLeft-G;l.x-=k}0<K*z&&(d.scrollTop||d==e||d.scrollHeight>d.offsetHeight)&&(k=Math.ceil(Math[0>z?"max":"min"](z,K)),G=d.scrollTop,t(d,0,k),k=d.scrollTop-G,l.y-=k);d=d!=e&&!I&&d.parentNode}}}catch(h){console.error("scrollIntoView: "+
h),b.scrollIntoView(!1)}}};L.setObject("dojo.window",v);return v});