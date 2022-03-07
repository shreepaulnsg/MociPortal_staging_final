/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/dom-prop","exports ./_base/kernel ./sniff ./_base/lang ./dom ./dom-style ./dom-construct ./_base/connect".split(" "),function(f,r,g,t,l,u,k,m){function n(a){var c="";a=a.childNodes;for(var d=0,b;b=a[d];d++)8!=b.nodeType&&(c=1==b.nodeType?c+n(b):c+b.nodeValue);return c}var h={},v=1,p=r._scopeName+"attrid";g.add("dom-textContent",function(a,c,d){return"textContent"in d});f.names={"class":"className","for":"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",
rowspan:"rowSpan",textcontent:"textContent",valuetype:"valueType"};f.get=function(a,c){a=l.byId(a);var d=c.toLowerCase();c=f.names[d]||c;return"textContent"!=c||g("dom-textContent")?a[c]:n(a)};f.set=function(a,c,d){a=l.byId(a);if(2==arguments.length&&"string"!=typeof c){for(var b in c)f.set(a,b,c[b]);return a}b=c.toLowerCase();b=f.names[b]||c;if("style"==b&&"string"!=typeof d)return u.set(a,d),a;if("innerHTML"==b)return g("ie")&&a.tagName.toLowerCase()in{col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,
tr:1,title:1}?(k.empty(a),a.appendChild(k.toDom(d,a.ownerDocument))):a[b]=d,a;if("textContent"==b&&!g("dom-textContent"))return k.empty(a),a.appendChild(a.ownerDocument.createTextNode(d)),a;if(t.isFunction(d)){var e=a[p];e||(e=v++,a[p]=e);h[e]||(h[e]={});var q=h[e][b];if(q)m.disconnect(q);else try{delete a[b]}catch(w){}d?h[e][b]=m.connect(a,b,d):a[b]=null;return a}a[b]=d;return a}});