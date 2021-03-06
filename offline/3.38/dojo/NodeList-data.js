/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/NodeList-data",["./_base/kernel","./query","./_base/lang","./_base/array","./dom-attr"],function(f,k,l,n,m){var e=k.NodeList,c={},p=0,g=function(a){var b=m.get(a,"data-dojo-dataid");b||(b="pid"+p++,m.set(a,"data-dojo-dataid",b));return b},r=f._nodeData=function(a,b,q){var d=g(a),h;c[d]||(c[d]={});if(1==arguments.length)return c[d];"string"==typeof b?2<arguments.length?c[d][b]=q:h=c[d][b]:h=l.mixin(c[d],b);return h},t=f._removeNodeData=function(a,b){a=g(a);c[a]&&(b?delete c[a][b]:delete c[a])};
e._gcNodeData=f._gcNodeData=function(){var a=k("[data-dojo-dataid]").map(g),b;for(b in c)0>n.indexOf(a,b)&&delete c[b]};l.extend(e,{data:e._adaptWithCondition(r,function(a){return 0===a.length||1==a.length&&"string"==typeof a[0]}),removeData:e._adaptAsForEach(t)});return e});