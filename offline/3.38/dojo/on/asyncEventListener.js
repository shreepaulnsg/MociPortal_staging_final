/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/on/asyncEventListener",["../on","../has","../_base/window","../dom-construct","../domReady!"],function(h,k,b,e){function l(a){var c={},f;for(f in a)c[f]=a[f];return c}var g,d=!1;if(e){b=e.create("input",{type:"button"},b.body());h.once(b,"click",function(a){g=a});b.click();try{d=void 0===g.clientX}catch(a){d=!0}finally{e.destroy(b)}}k.add("native-async-event-support",!d);return function(a){return d?function(c){a.call(this,l(c))}:a}});