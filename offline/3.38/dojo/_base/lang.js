/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/_base/lang",["./kernel","../has","../sniff"],function(k,l){l.add("bug-for-in-skips-shadowed",function(){for(var a in{toString:1})return 0;return 1});var m=l("bug-for-in-skips-shadowed")?"hasOwnProperty valueOf isPrototypeOf propertyIsEnumerable toLocaleString toString constructor".split(" "):[],r=m.length,n=function(a,b,c){c||(c=a[0]&&k.scopeMap[a[0]]?k.scopeMap[a.shift()][1]:k.global);try{for(var d=0;d<a.length;d++){var h=a[d];if(!(h in c))if(b)c[h]={};else return;c=c[h]}return c}catch(f){}},
p=Object.prototype.toString,q=function(a,b,c){return(c||[]).concat(Array.prototype.slice.call(a,b||0))},t=/\{([^\}]+)\}/g,e={_extraNames:m,_mixin:function(a,b,c){var d,h={};for(g in b){var f=b[g];g in a&&(a[g]===f||g in h&&h[g]===f)||(a[g]=c?c(f):f)}if(l("bug-for-in-skips-shadowed")&&b)for(d=0;d<r;++d){var g=m[d];f=b[g];g in a&&(a[g]===f||g in h&&h[g]===f)||(a[g]=c?c(f):f)}return a},mixin:function(a,b){a||(a={});for(var c=1,d=arguments.length;c<d;c++)e._mixin(a,arguments[c]);return a},setObject:function(a,
b,c){var d=a.split(".");a=d.pop();return(c=n(d,!0,c))&&a?c[a]=b:void 0},getObject:function(a,b,c){return a?n(a.split("."),b,c):c},exists:function(a,b){return void 0!==e.getObject(a,!1,b)},isString:function(a){return"string"==typeof a||a instanceof String},isArray:Array.isArray||function(a){return"[object Array]"==p.call(a)},isFunction:function(a){return"[object Function]"===p.call(a)},isObject:function(a){return void 0!==a&&(null===a||"object"==typeof a||e.isArray(a)||e.isFunction(a))},isArrayLike:function(a){return!!a&&
!e.isString(a)&&!e.isFunction(a)&&!(a.tagName&&"form"==a.tagName.toLowerCase())&&(e.isArray(a)||isFinite(a.length))},isAlien:function(a){return a&&!e.isFunction(a)&&/\{\s*\[native code\]\s*\}/.test(String(a))},extend:function(a,b){for(var c=1,d=arguments.length;c<d;c++)e._mixin(a.prototype,arguments[c]);return a},_hitchArgs:function(a,b){var c=e._toArray(arguments,2),d=e.isString(b);return function(){var h=e._toArray(arguments),f=d?(a||k.global)[b]:b;return f&&f.apply(a||this,c.concat(h))}},hitch:function(a,
b){if(2<arguments.length)return e._hitchArgs.apply(k,arguments);b||(b=a,a=null);if(e.isString(b)){a=a||k.global;if(!a[b])throw['lang.hitch: scope["',b,'"] is null (scope\x3d"',a,'")'].join("");return function(){return a[b].apply(a,arguments||[])}}return a?function(){return b.apply(a,arguments||[])}:b},delegate:function(){function a(){}return function(b,c){a.prototype=b;b=new a;a.prototype=null;c&&e._mixin(b,c);return b}}(),_toArray:l("ie")?function(){function a(b,c,d){d=d||[];for(c=c||0;c<b.length;c++)d.push(b[c]);
return d}return function(b){return(b.item?a:q).apply(this,arguments)}}():q,partial:function(a){return e.hitch.apply(k,[null].concat(e._toArray(arguments)))},clone:function(a){if(!a||"object"!=typeof a||e.isFunction(a))return a;if(a.nodeType&&"cloneNode"in a)return a.cloneNode(!0);if(a instanceof Date)return new Date(a.getTime());if(a instanceof RegExp)return new RegExp(a);var b;if(e.isArray(a)){var c=[];var d=0;for(b=a.length;d<b;++d)d in a&&(c[d]=e.clone(a[d]))}else c=a.constructor?new a.constructor:
{};return e._mixin(c,a,e.clone)},trim:String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},replace:function(a,b,c){return a.replace(c||t,e.isFunction(b)?b:function(d,h){return e.getObject(h,!1,b)})}};e.mixin(k,e);return e});