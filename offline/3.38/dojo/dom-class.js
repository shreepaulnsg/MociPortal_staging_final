/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/dom-class",["./_base/lang","./_base/array","./dom"],function(q,r,g){function l(a){if("string"==typeof a||a instanceof String){if(a&&!n.test(a))return p[0]=a,p;a=a.split(n);a.length&&!a[0]&&a.shift();a.length&&!a[a.length-1]&&a.pop();return a}return a?r.filter(a,function(c){return c}):[]}var f,n=/\s+/,p=[""],h={};return f={contains:function(a,c){return 0<=(" "+g.byId(a).className+" ").indexOf(" "+c+" ")},add:function(a,c){a=g.byId(a);c=l(c);var b=a.className;b=b?" "+b+" ":" ";var d=b.length;
for(var e=0,k=c.length,m;e<k;++e)(m=c[e])&&0>b.indexOf(" "+m+" ")&&(b+=m+" ");d<b.length&&(a.className=b.substr(1,b.length-2))},remove:function(a,c){a=g.byId(a);if(void 0!==c){c=l(c);var b=" "+a.className+" ";for(var d=0,e=c.length;d<e;++d)b=b.replace(" "+c[d]+" "," ");b=q.trim(b)}else b="";a.className!=b&&(a.className=b)},replace:function(a,c,b){a=g.byId(a);h.className=a.className;f.remove(h,b);f.add(h,c);a.className!==h.className&&(a.className=h.className)},toggle:function(a,c,b){a=g.byId(a);if(void 0===
b){c=l(c);for(var d=0,e=c.length,k;d<e;++d)k=c[d],f[f.contains(a,k)?"remove":"add"](a,k)}else f[b?"add":"remove"](a,c);return b}}});