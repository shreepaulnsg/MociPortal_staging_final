// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/DataBrowser/DataBrowserManager","dojo/_base/declare dojo/_base/array esri/dijit/geoenrichment/when dojo/Stateful dojo/dom-geometry esri/dijit/geoenrichment/Deferred ./VariableInfo ./VariableUtil".split(" "),function(m,g,k,n,p,q,r,h){return m(n,{variables:null,selectionLimit:-1,variableQuery:null,selection:null,variableInfo:null,flyAnim:null,onLimit:null,allowShoppingCart:!1,allowMultipleSelectInGroup:!1,categoryPageIndex:0,constructor:function(a){this.variables=a.variables;
this.selectionLimit=isNaN(a.selectionLimit)?-1:a.selectionLimit;this.allowShoppingCart=this.multipleSelectIsAllowed()&&!!a.shoppingCart;this.allowMultipleSelectInGroup=this.multipleSelectIsAllowed()&&!!a.allowMultipleSelectInGroup;a.variableQuery=this.variableQuery=a.variableQuery||{};a.countryID=this.variableQuery.countryID=this.variableQuery.countryID||a.countryID||null;a.favorites&&!this.variables.favorites&&(this.variables.favorites=a.favorites);this.variables.synchronize(a.countryID);a.selection&&
a.selection.length&&this.multipleSelectIsAllowed()&&this.changeSelection(a.selection);this.selection=[];a.selection=this.selection;var b=a.variableInfo;if(!1!==b){if(!0===b)b="fullName";else if(b&&b.domNode){this.variableInfo=b;return}this.variableInfo=new r({infoFields:b});a.own(this.variableInfo)}},postscript:function(){},multipleSelectIsAllowed:function(){return 0>this.selectionLimit||1<this.selectionLimit},changeSelection:function(a){var b=this,c=new q;k(this.variables.synchronize(),function(){setTimeout(function(){b.selection=
[];b.addToSelection(a,!0);c.resolve()},0)});return c.promise},validateSelection:function(){var a=g.filter(this.selection,function(b){return this.variables.get(b)},this);a.length!=this.selection.length&&this.set("selection",a)},addToSelection:function(a,b){"string"==typeof a&&(a=[a]);var c=this.selection.slice(),d={},e=!1;g.forEach(a,function(f){if(this.variables.get(f))if(0<=this.selectionLimit&&c.length==this.selectionLimit)e=!0;else{var l=h.getToggleGroups(this.variables,[f],this.allowMultipleSelectInGroup);
g.every(c,function(t){return!l.hash[t]})&&(c.push(l.groups[0].value),d[f]=!0)}},this);if(c.length&&!this._ensureValidSelection(c))return null;b||this.selection.length!=c.length?this.set("selection",c):d=null;e&&this.onLimit&&this.onLimit();return d},_ensureValidSelection:function(a){return!0},removeFromSelection:function(a,b){"string"==typeof a&&(a=[a]);var c=[],d=h.getToggleGroups(this.variables,a,!b&&this.allowMultipleSelectInGroup).hash,e={};g.forEach(this.selection,function(f){d[f]?e[f]=!0:c.push(f)});
return this.selection.length!=c.length?(this.set("selection",c),e):null},updateSelection:function(a){var b=h.getToggleGroups(this.variables,[a],this.allowMultipleSelectInGroup),c=-1;g.some(this.selection,function(d,e){return b.hash[d]?(c=e,!0):!1});0<=c&&(a=this.selection.slice(),a[c]=b.groups[0].value,this.set("selection",a))},getSelectionGroups:function(){this._selectionGroups||(this._selectionGroups=h.getToggleGroups(this.variables,this.selection,this.allowMultipleSelectInGroup));return this._selectionGroups},
_selectionSetter:function(a){this._selectionGroups=null;this.selection=a},_selectionGroups:null,animateSelection:function(a){this.flyAnim.fly(a,"DataBrowser_SelectVar",["top",p.isBodyLtr()?"right":"left"])},composeQuery:function(a){a&&"string"==typeof a&&(a=[a]);var b={countryID:this._getQueryCountryID()};g.forEach(a,function(c){var d=this.variableQuery[c];d&&(b[c]=d)},this);return b},_getQueryCountryID:function(){return this.variableQuery.countryID},validateQuery:function(){var a=this.variableQuery,
b=a.dataCollectionID?this.getDataCollection():a.categoryID?this.getCategory():this.queryVariables(),c=this;return k(b).then(function(d){d||c.set("variableQuery",c.composeQuery());return a.dataCollectionID||a.categoryID?null:d},function(d){c.set("variableQuery",c.composeQuery());return null})},getCategories:function(){return this.variables.categories.query(this.composeQuery())},queryVariables:function(a){return this.variables.query(this.variableQuery,a)},getCategory:function(a){a=a||this.variableQuery.categoryID;
if(!a)return null;var b=this.composeQuery();b.id=a;b=this.variables.categories.query(b);var c=this;return b.then?b.then(function(d){return c._getCategory(d,a)}):this._getCategory(b,a)},_getCategory:function(a,b){return a[0]},getDataCollection:function(a){a=a||this.variableQuery.dataCollectionID;if(!a)return null;var b=this.composeQuery();b.id=a;b=this.variables.dataCollections.query(b);var c=this;return b.then?b.then(function(d){return c._getDataCollection(d,a)}):this._getDataCollection(b,a)},_getDataCollection:function(a,
b){return a[0]}})});