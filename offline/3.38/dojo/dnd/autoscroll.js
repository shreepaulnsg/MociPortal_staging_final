/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/dnd/autoscroll","../_base/lang ../sniff ../_base/window ../dom-geometry ../dom-style ../window".split(" "),function(w,p,k,t,x,r){var a={};w.setObject("dojo.dnd.autoscroll",a);a.getViewport=r.getBox;a.V_TRIGGER_AUTOSCROLL=32;a.H_TRIGGER_AUTOSCROLL=32;a.V_AUTOSCROLL_VALUE=16;a.H_AUTOSCROLL_VALUE=16;var q,l=k.doc,u=Infinity,v=Infinity;a.autoScrollStart=function(c){l=c;q=r.getBox(l);c=k.body(l).parentNode;u=Math.max(c.scrollHeight-q.h,0);v=Math.max(c.scrollWidth-q.w,0)};a.autoScroll=function(c){var f=
q||r.getBox(l),h=k.body(l).parentNode,b=0,e=0;c.clientX<a.H_TRIGGER_AUTOSCROLL?b=-a.H_AUTOSCROLL_VALUE:c.clientX>f.w-a.H_TRIGGER_AUTOSCROLL&&(b=Math.min(a.H_AUTOSCROLL_VALUE,v-h.scrollLeft));c.clientY<a.V_TRIGGER_AUTOSCROLL?e=-a.V_AUTOSCROLL_VALUE:c.clientY>f.h-a.V_TRIGGER_AUTOSCROLL&&(e=Math.min(a.V_AUTOSCROLL_VALUE,u-h.scrollTop));window.scrollBy(b,e)};a._validNodes={div:1,p:1,td:1};a._validOverflow={auto:1,scroll:1};a.autoScrollNodes=function(c){for(var f,h,b,e,g,m=0,n=0,d=c.target;d;){if(1==d.nodeType&&
d.tagName.toLowerCase()in a._validNodes){b=x.getComputedStyle(d);g=b.overflowX.toLowerCase()in a._validOverflow;e=b.overflowY.toLowerCase()in a._validOverflow;if(g||e)f=t.getContentBox(d,b),h=t.position(d,!0);if(g){b=Math.min(a.H_TRIGGER_AUTOSCROLL,f.w/2);g=c.pageX-h.x;if(p("webkit")||p("opera"))g+=k.body().scrollLeft;m=0;0<g&&g<f.w&&(g<b?m=-b:g>f.w-b&&(m=b),d.scrollLeft+=m)}if(e){e=Math.min(a.V_TRIGGER_AUTOSCROLL,f.h/2);b=c.pageY-h.y;if(p("webkit")||p("opera"))b+=k.body().scrollTop;n=0;0<b&&b<f.h&&
(b<e?n=-e:b>f.h-e&&(n=e),d.scrollTop+=n)}if(m||n)return}try{d=d.parentNode}catch(y){d=null}}a.autoScroll(c)};return a});