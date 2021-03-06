/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/data/util/simpleFetch",["../../_base/lang","../../_base/kernel","./sorter"],function(e,k,n){var d={};e.setObject("dojo.data.util.simpleFetch",d);d.errorHandler=function(b,a){a.onError&&a.onError.call(a.scope||k.global,b,a)};d.fetchHandler=function(b,a){var l=a.abort||null,f=!1,g=a.start?a.start:0,m=a.count&&Infinity!==a.count?g+a.count:b.length;a.abort=function(){f=!0;l&&l.call(a)};var h=a.scope||k.global;a.store||(a.store=this);a.onBegin&&a.onBegin.call(h,b.length,a);a.sort&&b.sort(n.createSortFunction(a.sort,
this));if(a.onItem)for(var c=g;c<b.length&&c<m;++c){var p=b[c];f||a.onItem.call(h,p,a)}a.onComplete&&!f&&(c=null,a.onItem||(c=b.slice(g,m)),a.onComplete.call(h,c,a))};d.fetch=function(b){b=b||{};b.store||(b.store=this);this._fetchItems(b,e.hitch(this,"fetchHandler"),e.hitch(this,"errorHandler"));return b};return d});