/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/store/Cache",["../_base/lang","../when"],function(k,f){var l=function(e,d,g){g=g||{};return k.delegate(e,{query:function(a,c){a=e.query(a,c);a.forEach(function(b){g.isLoaded&&!g.isLoaded(b)||d.put(b)});return a},queryEngine:e.queryEngine||d.queryEngine,get:function(a,c){return f(d.get(a),function(b){return b||f(e.get(a,c),function(h){h&&d.put(h,{id:a});return h})})},add:function(a,c){return f(e.add(a,c),function(b){d.add(b&&"object"==typeof b?b:a,c);return b})},put:function(a,c){d.remove(c&&
c.id||this.getIdentity(a));return f(e.put(a,c),function(b){d.put(b&&"object"==typeof b?b:a,c);return b})},remove:function(a,c){return f(e.remove(a,c),function(b){return d.remove(a,c)})},evict:function(a){return d.remove(a)}})};k.setObject("dojo.store.Cache",l);return l});