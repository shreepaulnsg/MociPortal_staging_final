/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/gears",["./_base/lang","./sniff"],function(c,e){var b={};c.setObject("dojo.gears",b);b._gearsObject=function(){var d=c.getObject("google.gears");if(d)return d;if("undefined"!=typeof GearsFactory)var a=new GearsFactory;else if(e("ie"))try{a=new ActiveXObject("Gears.Factory")}catch(f){}else navigator.mimeTypes["application/x-googlegears"]&&(a=document.createElement("object"),a.setAttribute("type","application/x-googlegears"),a.setAttribute("width",0),a.setAttribute("height",0),a.style.display=
"none",document.documentElement.appendChild(a));if(!a)return null;c.setObject("google.gears.factory",a);return c.getObject("google.gears")};b.available=!!b._gearsObject()||0;return b});