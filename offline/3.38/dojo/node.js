/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/node",["./_base/kernel","./has","require"],function(e,k,f){var d=e.global.require&&e.global.require.nodeRequire;if(!d)throw Error("Cannot find the Node.js require");var c=d("module");return{load:function(a,b,g){c._findPath&&c._nodeModulePaths&&(b=c._findPath(a,c._nodeModulePaths(b.toUrl("."))),!1!==b&&(a=b));b=define;define=void 0;try{var h=d(a)}finally{define=b}g(h)},normalize:function(a,b){"."===a.charAt(0)&&(a=f.toUrl(b("./"+a)));return a}}});