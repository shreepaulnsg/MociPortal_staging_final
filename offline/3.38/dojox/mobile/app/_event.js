//>>built
define("dojox/mobile/app/_event",["dojo","dijit","dojox"],function(b,v,d){b.provide("dojox.mobile.app._event");b.experimental("dojox.mobile.app._event.js");b.mixin(d.mobile.app,{eventMap:{},connectFlick:function(e,c,f){var g,h,k=!1,l,m,n,p,q,r;b.connect("onmousedown",e,function(a){k=!1;g=a.targetTouches?a.targetTouches[0].clientX:a.clientX;h=a.targetTouches?a.targetTouches[0].clientY:a.clientY;r=(new Date).getTime();n=b.connect(e,"onmousemove",t);p=b.connect(e,"onmouseup",u)});var t=function(a){b.stopEvent(a);
l=a.targetTouches?a.targetTouches[0].clientX:a.clientX;m=a.targetTouches?a.targetTouches[0].clientY:a.clientY;15<Math.abs(Math.abs(l)-Math.abs(g))?(k=!0,q=l>g?"ltr":"rtl"):15<Math.abs(Math.abs(m)-Math.abs(h))&&(k=!0,q=m>h?"ttb":"btt")},u=function(a){b.stopEvent(a);n&&b.disconnect(n);p&&b.disconnect(p);if(k)if(a={target:e,direction:q,duration:(new Date).getTime()-r},c&&f)c[f](a);else f(a)}}});d.mobile.app.isIPhone=b.isSafari&&(-1<navigator.userAgent.indexOf("iPhone")||-1<navigator.userAgent.indexOf("iPod"));
d.mobile.app.isWebOS=-1<navigator.userAgent.indexOf("webOS");d.mobile.app.isAndroid=-1<navigator.userAgent.toLowerCase().indexOf("android");if(d.mobile.app.isIPhone||d.mobile.app.isAndroid)d.mobile.app.eventMap={onmousedown:"ontouchstart",mousedown:"ontouchstart",onmouseup:"ontouchend",mouseup:"ontouchend",onmousemove:"ontouchmove",mousemove:"ontouchmove"};b._oldConnect=b._connect;b._connect=function(e,c,f,g,h){c=d.mobile.app.eventMap[c]||c;if("flick"==c||"onflick"==c)if(b.global.Mojo)c=Mojo.Event.flick;
else return d.mobile.app.connectFlick(e,f,g);return b._oldConnect(e,c,f,g,h)}});