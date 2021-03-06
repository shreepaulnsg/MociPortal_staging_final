/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/Stateful",["./_base/declare","./_base/lang","./_base/array","./when"],function(l,u,m,n){return l("dojo.Stateful",null,{_attrPairNames:{},_getAttrNames:function(a){var c=this._attrPairNames;return c[a]?c[a]:c[a]={s:"_"+a+"Setter",g:"_"+a+"Getter"}},postscript:function(a){a&&this.set(a)},_get:function(a,c){return"function"===typeof this[c.g]?this[c.g]():this[a]},get:function(a){return this._get(a,this._getAttrNames(a))},set:function(a,c){if("object"===typeof a){for(var b in a)a.hasOwnProperty(b)&&
"_watchCallbacks"!=b&&this.set(b,a[b]);return this}b=this._getAttrNames(a);var g=this._get(a,b);b=this[b.s];var d;"function"===typeof b?d=b.apply(this,Array.prototype.slice.call(arguments,1)):this[a]=c;if(this._watchCallbacks){var e=this;n(d,function(){e._watchCallbacks(a,g,c)})}return this},_changeAttrValue:function(a,c){var b=this.get(a);this[a]=c;this._watchCallbacks&&this._watchCallbacks(a,b,c);return this},watch:function(a,c){var b=this._watchCallbacks;if(!b){var g=this;b=this._watchCallbacks=
function(e,p,q,r){var k=function(f){if(f){f=f.slice();for(var h=0,t=f.length;h<t;h++)f[h].call(g,e,p,q)}};k(b["_"+e]);r||k(b["*"])}}c||"function"!==typeof a?a="_"+a:(c=a,a="*");var d=b[a];"object"!==typeof d&&(d=b[a]=[]);d.push(c);a={};a.unwatch=a.remove=function(){var e=m.indexOf(d,c);-1<e&&d.splice(e,1)};return a}})});