/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/request/default",["exports","require","../has"],function(b,c,d){var a=d("config-requestProvider");a||(a="./xhr");b.getPlatformDefaultId=function(){return"./xhr"};b.load=function(e,h,f,k){c(["platform"==e?"./xhr":a],function(g){f(g)})}});