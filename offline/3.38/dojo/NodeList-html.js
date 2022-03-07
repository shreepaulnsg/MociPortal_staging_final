/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/NodeList-html",["./query","./_base/lang","./html"],function(a,c,d){a=a.NodeList;c.extend(a,{html:function(e,f){var b=new d._ContentSetter(f||{});this.forEach(function(g){b.node=g;b.set(e);b.tearDown()});return this}});return a});