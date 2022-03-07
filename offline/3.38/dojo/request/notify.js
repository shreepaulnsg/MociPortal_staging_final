/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/request/notify",["../Evented","../_base/lang","./util"],function(e,h,k){function f(a,b){return g.on(a,b)}var c=0,l=[].slice,g=h.mixin(new e,{onsend:function(a){c||this.emit("start");c++},_onload:function(a){this.emit("done",a)},_onerror:function(a){this.emit("done",a)},_ondone:function(a){0>=--c&&(c=0,this.emit("stop"))},emit:function(a,b){var d=e.prototype.emit.apply(this,arguments);this["_on"+a]&&this["_on"+a].apply(this,l.call(arguments,1));return d}});f.emit=function(a,b,d){return g.emit(a,
b,d)};return k.notify=f});