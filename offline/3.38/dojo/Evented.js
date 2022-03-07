/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/Evented",["./aspect","./on"],function(f,b){function d(){}var g=f.after;d.prototype={on:function(e,c){return b.parse(this,e,c,function(a,h){return g(a,"on"+h,c,!0)})},emit:function(e,c){var a=[this];a.push.apply(a,arguments);return b.emit.apply(b,a)}};return d});