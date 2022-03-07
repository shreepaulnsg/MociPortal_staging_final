/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/text",["./_base/kernel","require","./has","./request"],function(u,v,x,w){var p=function(a,c,b){w(a,{sync:!!c,headers:{"X-Requested-With":null}}).then(b)};var d={},m=function(a){if(a){a=a.replace(/^\s*<\?xml(\s)+version=['"](\d)*.(\d)*['"](\s)*\?>/im,"");var c=a.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);c&&(a=c[1])}else a="";return a},q={},l={};u.cache=function(a,c,b){if("string"==typeof a)if(/\//.test(a)){var e=a;b=c}else e=v.toUrl(a.replace(/\./g,"/")+(c?"/"+c:""));else e=a+"",b=
c;a=void 0!=b&&"string"!=typeof b?b.value:b;b=b&&b.sanitize;if("string"==typeof a)return d[e]=a,b?m(a):a;if(null===a)return delete d[e],null;e in d||p(e,!0,function(g){d[e]=g});return b?m(d[e]):d[e]};return{dynamic:!0,normalize:function(a,c){a=a.split("!");var b=a[0];return(/^\./.test(b)?c(b):b)+(a[1]?"!"+a[1]:"")},load:function(a,c,b){a=a.split("!");var e=1<a.length,g=a[0],f=c.toUrl(a[0]);a="url:"+f;var h=q,n=function(k){b(e?m(k):k)};g in d?h=d[g]:c.cache&&a in c.cache?h=c.cache[a]:f in d&&(h=d[f]);
if(h===q)if(l[f])l[f].push(n);else{var r=l[f]=[n];p(f,!c.async,function(k){d[g]=d[f]=k;for(var t=0;t<r.length;)r[t++](k);delete l[f]})}else n(h)}}});