/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/store/util/QueryResults",["../../_base/array","../../_base/lang","../../when"],function(e,f,g){var d=function(a){function c(b){a[b]=function(){var h=arguments,m=g(a,function(l){Array.prototype.unshift.call(h,l);return d(e[b].apply(e,h))});if("forEach"!==b||k)return m}}if(!a)return a;var k=!!a.then;k&&(a=f.delegate(a));c("forEach");c("filter");c("map");null==a.total&&(a.total=g(a,function(b){return b.length}));return a};f.setObject("dojo.store.util.QueryResults",d);return d});