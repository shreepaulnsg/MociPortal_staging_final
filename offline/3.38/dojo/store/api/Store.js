/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/store/api/Store",["../../_base/declare"],function(c){var d=c(null,{idProperty:"id",queryEngine:null,get:function(a){},getIdentity:function(a){},put:function(a,b){},add:function(a,b){},remove:function(a){delete this.index[a];for(var b=this.data,f=this.idProperty,e=0,g=b.length;e<g;e++)if(b[e][f]==a){b.splice(e,1);break}},query:function(a,b){},transaction:function(){},getChildren:function(a,b){},getMetadata:function(a){}});d.PutDirectives=c(null,{});d.SortInformation=c(null,{});d.QueryOptions=
c(null,{});d.QueryResults=c(null,{forEach:function(a,b){},filter:function(a,b){},map:function(a,b){},then:function(a,b){},observe:function(a,b){},total:0});d.Transaction=c(null,{commit:function(){},abort:function(a,b){}});return d});