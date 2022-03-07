/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/_base/window",["./kernel","./lang","../sniff"],function(a,n,e){var c={global:a.global,doc:a.global.document||null,body:function(b){b=b||a.doc;return b.body||b.getElementsByTagName("body")[0]},setContext:function(b,d){a.global=c.global=b;a.doc=c.doc=d},withGlobal:function(b,d,f,h){var k=a.global;try{return a.global=c.global=b,c.withDoc.call(null,b.document,d,f,h)}finally{a.global=c.global=k}},withDoc:function(b,d,f,h){var k=c.doc,p=e("quirks"),q=e("ie"),g,l;try{a.doc=c.doc=b;a.isQuirks=
e.add("quirks","BackCompat"==a.doc.compatMode,!0,!0);if(e("ie")&&(l=b.parentWindow)&&l.navigator){var m=parseFloat(l.navigator.appVersion.split("MSIE ")[1])||void 0;(g=b.documentMode)&&5!=g&&Math.floor(m)!=g&&(m=g);a.isIE=e.add("ie",m,!0,!0)}f&&"string"==typeof d&&(d=f[d]);return d.apply(f,h||[])}finally{a.doc=c.doc=k,a.isQuirks=e.add("quirks",p,!0,!0),a.isIE=e.add("ie",q,!0,!0)}}};n.mixin(a,c);return c});