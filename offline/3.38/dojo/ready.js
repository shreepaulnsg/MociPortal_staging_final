/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/ready",["./_base/kernel","./has","require","./domReady","./_base/lang"],function(a,l,c,f,m){var r=0,g=[],n=0;l=function(){r=1;a._postLoad=a.config.afterOnLoad=!0;k()};var k=function(){if(!n){for(n=1;r&&(!f||0==f._Q.length)&&(c.idle?c.idle():1)&&g.length;){var d=g.shift();try{d()}catch(b){if(b.info=b.message,c.signal)c.signal("error",b);else throw b;}}n=0}};c.on&&c.on("idle",k);f&&(f._onQEmpty=k);var p=a.ready=a.addOnLoad=function(d,b,h){var e=m._toArray(arguments);"number"!=typeof d?
(h=b,b=d,d=1E3):e.shift();h=h?m.hitch.apply(a,e):function(){b()};h.priority=d;for(e=0;e<g.length&&d>=g[e].priority;e++);g.splice(e,0,h);k()},q=a.config.addOnLoad;if(q)p[m.isArray(q)?"apply":"call"](a,q);a.config.parseOnLoad&&!a.isAsync&&p(99,function(){a.parser||(a.deprecated("Add explicit require(['dojo/parser']);","","2.0"),c(["dojo/parser"]))});f?f(l):l();return p});