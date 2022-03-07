/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/data/util/filter",["../../_base/lang"],function(f){var d={};f.setObject("dojo.data.util.filter",d);d.patternToRegExp=function(e,g){for(var a="^",c=null,b=0;b<e.length;b++)switch(c=e.charAt(b),c){case "\\":a+=c;b++;a+=e.charAt(b);break;case "*":a+=".*";break;case "?":a+=".";break;case "$":case "^":case "/":case "+":case ".":case "|":case "(":case ")":case "{":case "}":case "[":case "]":a+="\\";default:a+=c}a+="$";return g?new RegExp(a,"mi"):new RegExp(a,"m")};return d});