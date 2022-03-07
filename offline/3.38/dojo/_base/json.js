/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/_base/json",["./kernel","../json"],function(a,e){a.fromJson=function(c){return eval("("+c+")")};a._escapeString=e.stringify;a.toJsonIndentStr="\t";a.toJson=function(c,f){return e.stringify(c,function(d,b){return b&&(d=b.__json__||b.json,"function"==typeof d)?d.call(b):b},f&&a.toJsonIndentStr)};return a});