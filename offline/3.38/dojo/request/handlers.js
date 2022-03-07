/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/request/handlers",["../json","../_base/kernel","../_base/array","../has","../selector/_loader"],function(n,p,q,d){function h(a){var b=k[a.options.handleAs];a.data=b?b(a):a.data||a.text;return a}d.add("activex","undefined"!==typeof ActiveXObject);d.add("dom-parser",function(a){return"DOMParser"in a});if(d("activex")){var r=["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.4.0","MSXML2.DOMDocument.3.0","MSXML.DOMDocument"],e;var t=function(a){function b(l){try{var f=new ActiveXObject(l);f.async=
!1;f.loadXML(m);c=f;e=l}catch(u){return!1}return!0}var c=a.data,m=a.text;c&&d("dom-qsa2.1")&&!c.querySelectorAll&&d("dom-parser")&&(c=(new DOMParser).parseFromString(m,"application/xml"));c&&c.documentElement||e&&b(e)||q.some(r,b);return c}}var g=function(a){return d("native-xhr2-blob")||"blob"!==a.options.handleAs||"undefined"===typeof Blob?a.xhr.response:new Blob([a.xhr.response],{type:a.xhr.getResponseHeader("Content-Type")})},k={javascript:function(a){return p.eval(a.text||"")},json:function(a){return n.parse(a.text||
null)},xml:t,blob:g,arraybuffer:g,document:g};h.register=function(a,b){k[a]=b};return h});