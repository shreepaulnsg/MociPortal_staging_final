/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/store/JsonRest",["../_base/xhr","../_base/lang","../json","../_base/declare","./util/QueryResults"],function(f,h,n,l,p){return l("dojo.store.JsonRest",null,{constructor:function(b){this.headers={};l.safeMixin(this,b)},headers:{},target:"",idProperty:"id",ascendingPrefix:"+",descendingPrefix:"-",_getTarget:function(b){var a=this.target;"undefined"!=typeof b&&(a="/"==a.charAt(a.length-1)||"\x3d"==a.charAt(a.length-1)?a+b:a+("/"+b));return a},get:function(b,a){a=a||{};var c=h.mixin({Accept:this.accepts},
this.headers,a.headers||a);return f("GET",{url:this._getTarget(b),handleAs:"json",headers:c,timeout:a&&a.timeout})},accepts:"application/javascript, application/json",getIdentity:function(b){return b[this.idProperty]},put:function(b,a){a=a||{};var c="id"in a?a.id:this.getIdentity(b);return f("undefined"==typeof c||a.incremental?"POST":"PUT",{url:this._getTarget(c),postData:n.stringify(b),handleAs:"json",headers:h.mixin({"Content-Type":"application/json",Accept:this.accepts,"If-Match":!0===a.overwrite?
"*":null,"If-None-Match":!1===a.overwrite?"*":null},this.headers,a.headers),timeout:a&&a.timeout})},add:function(b,a){a=a||{};a.overwrite=!1;return this.put(b,a)},remove:function(b,a){a=a||{};return f("DELETE",{url:this._getTarget(b),headers:h.mixin({},this.headers,a.headers),timeout:a&&a.timeout})},query:function(b,a){a=a||{};var c=h.mixin({Accept:this.accepts},this.headers,a.headers),d=-1<this.target.indexOf("?");(b=b||"")&&"object"==typeof b&&(b=(b=f.objectToQuery(b))?(d?"\x26":"?")+b:"");if(0<=
a.start||0<=a.count)c["X-Range"]="items\x3d"+(a.start||"0")+"-"+("count"in a&&Infinity!=a.count?a.count+(a.start||0)-1:""),this.rangeParam?(b+=(b||d?"\x26":"?")+this.rangeParam+"\x3d"+c["X-Range"],d=!0):c.Range=c["X-Range"];if(a&&a.sort){var k=this.sortParam;b+=(b||d?"\x26":"?")+(k?k+"\x3d":"sort(");for(d=0;d<a.sort.length;d++){var m=a.sort[d];b+=(0<d?",":"")+(m.descending?this.descendingPrefix:this.ascendingPrefix)+encodeURIComponent(m.attribute)}k||(b+=")")}var g=f("GET",{url:this.target+(b||""),
handleAs:"json",headers:c,timeout:a&&a.timeout});g.total=g.then(function(){var e=g.ioArgs.xhr.getResponseHeader("Content-Range");e||(e=g.ioArgs.xhr.getResponseHeader("X-Content-Range"));return e&&(e=e.match(/\/(.*)/))&&+e[1]});return p(g)}})});