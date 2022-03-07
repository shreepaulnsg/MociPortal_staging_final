/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/_base/NodeList",["./kernel","../query","./array","./html","../NodeList-dom"],function(b,a,e){a=a.NodeList;var c=a.prototype;c.connect=a._adaptAsForEach(function(){return b.connect.apply(this,arguments)});c.coords=a._adaptAsMap(b.coords);a.events="blur focus change click error keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup submit".split(" ");e.forEach(a.events,function(f){var d="on"+f;c[d]=function(g,h){return this.connect(d,g,h)}});return b.NodeList=
a});