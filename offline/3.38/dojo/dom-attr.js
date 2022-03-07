/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/dom-attr","exports ./sniff ./_base/lang ./dom ./dom-style ./dom-prop".split(" "),function(f,p,n,h,q,g){function l(a,b){a=a.getAttributeNode&&a.getAttributeNode(b);return!!a&&a.specified}var m={innerHTML:1,textContent:1,className:1,htmlFor:p("ie")?1:0,value:1},k={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"};f.has=function(a,b){var c=b.toLowerCase();return!!m[g.names[c]||b]||l(h.byId(a),k[c]||b)};f.get=function(a,b){a=h.byId(a);var c=b.toLowerCase(),d=g.names[c]||
b,e=a[d];if(m[d]&&"undefined"!=typeof e)return e;if("textContent"==d)return g.get(a,d);if("href"!=d&&("boolean"==typeof e||n.isFunction(e)))return e;b=k[c]||b;return l(a,b)?a.getAttribute(b):null};f.set=function(a,b,c){a=h.byId(a);if(2==arguments.length){for(var d in b)f.set(a,d,b[d]);return a}d=b.toLowerCase();var e=g.names[d]||b,r=m[e];if("style"==e&&"string"!=typeof c)return q.set(a,c),a;if(r||"boolean"==typeof c||n.isFunction(c))return g.set(a,b,c);a.setAttribute(k[d]||b,c);return a};f.remove=
function(a,b){h.byId(a).removeAttribute(k[b.toLowerCase()]||b)};f.getNodeProp=function(a,b){a=h.byId(a);var c=b.toLowerCase(),d=g.names[c]||b;if(d in a&&"href"!=d)return a[d];b=k[c]||b;return l(a,b)?a.getAttribute(b):null}});