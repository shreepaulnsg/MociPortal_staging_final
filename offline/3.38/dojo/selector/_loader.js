/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/selector/_loader",["../has","require"],function(b,h){if("undefined"!==typeof document){var d=document.createElement("div");b.add("dom-qsa2.1",!!d.querySelectorAll);b.add("dom-qsa3",function(){try{return d.innerHTML="\x3cp class\x3d'TEST'\x3e\x3c/p\x3e",1==d.querySelectorAll(".TEST:empty").length}catch(a){}})}var e;return{load:function(a,k,f,c){if(c&&c.isBuild)f();else{c=h;a="default"==a?b("config-selectorEngine")||"css3":a;a="css2"==a||"lite"==a?"./lite":"css2.1"==a?b("dom-qsa2.1")?"./lite":
"./acme":"css3"==a?b("dom-qsa3")?"./lite":"./acme":"acme"==a?"./acme":(c=k)&&a;if("?"==a.charAt(a.length-1)){a=a.substring(0,a.length-1);var l=!0}if(l&&(b("dom-compliant-qsa")||e))return f(e);c([a],function(g){"./lite"!=a&&(e=g);f(g)})}}}});