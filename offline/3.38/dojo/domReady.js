/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/domReady",["./global","./has"],function(l,u){function d(a){e.push(a);f&&q()}function q(){if(!m){for(m=!0;e.length;)try{e.shift()(b)}catch(a){console.error(a,"in domReady callback",a.stack)}m=!1;d._onQEmpty()}}var b=document,n={loaded:1,complete:1},p="string"!=typeof b.readyState,f=!!n[b.readyState],e=[],m;d.load=function(a,c,v){d(v)};d._Q=e;d._onQEmpty=function(){};p&&(b.readyState="loading");if(!f){var g=[],h=function(a){a=a||l.event;f||"readystatechange"==a.type&&!n[b.readyState]||
(p&&(b.readyState="complete"),f=1,q())},k=function(a,c){a.addEventListener(c,h,!1);e.push(function(){a.removeEventListener(c,h,!1)})};if(!u("dom-addeventlistener")){k=function(a,c){c="on"+c;a.attachEvent(c,h);e.push(function(){a.detachEvent(c,h)})};var r=b.createElement("div");try{r.doScroll&&null===l.frameElement&&g.push(function(){try{return r.doScroll("left"),1}catch(a){}})}catch(a){}}k(b,"DOMContentLoaded");k(l,"load");"onreadystatechange"in b?k(b,"readystatechange"):p||g.push(function(){return n[b.readyState]});
if(g.length){var t=function(){if(!f){for(var a=g.length;a--;)if(g[a]()){h("poller");return}setTimeout(t,30)}};t()}}return d});