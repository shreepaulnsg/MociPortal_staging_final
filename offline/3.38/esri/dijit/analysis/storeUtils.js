// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/storeUtils","dojo/_base/declare dojo/_base/lang dojo/has dstore/Memory dstore/Trackable dstore/Tree ../../kernel".split(" "),function(f,c,k,d,l,m,n){var g=f([d,l]);d={createHierarchicalStore:function(a){a=this.createSyncStore(a,m);a.getRootCollection=function(){return this.root.filter({parent:void 0})};return a.getRootCollection()},createSyncStore:function(a,b){a=a||{};a.data&&(a=c.mixin({},a,{data:c.clone(a.data)}));return new (b?f([g,b]):g)(a)},createStore:function(a){for(var b=
{identifier:"id",label:"id",items:[]},e=0,h=a.length;e<h;e++)b.items.push(c.mixin({id:e},a[e%h]));return this.createSyncStore({data:b})}};k("extend-esri")&&c.setObject("dijit.analysis.storeUtils",d,n);return d});