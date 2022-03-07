/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/promise/all",["../_base/array","../_base/lang","../Deferred","../when"],function(l,m,h,n){var p=l.some;return function(d){var b,a;m.isArray(d)?a=d:d&&"object"===typeof d&&(b=d);var f=[];if(b){a=[];for(var g in b)Object.hasOwnProperty.call(b,g)&&(f.push(g),a.push(b[g]));var e={}}else a&&(e=[]);if(!a||!a.length)return(new h).resolve(e);var c=new h;c.promise.always(function(){e=f=null});var q=a.length;p(a,function(r,k){b||f.push(k);n(r,function(t){c.isFulfilled()||(e[f[k]]=t,0===--q&&c.resolve(e))},
c.reject);return c.isFulfilled()});return c.promise}});