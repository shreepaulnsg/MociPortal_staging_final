// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/FeatureLayerQueryResult",["../lang","dojo/_base/lang","dojo/_base/kernel","dojo/_base/Deferred"],function(l,e,f,g){var d=function(a){function c(b){a[b]||(a[b]=function(){var h=arguments;return g.when(a,function(k){Array.prototype.unshift.call(h,k.features||k);return new d(f[b].apply(f,h))})})}if(!a)return a;a.then&&(a=e.delegate(a));a.total||(a.total=g.when(a,function(b){return l.isDefined(b.total)?b.total:b.length||0}));c("forEach");c("filter");c("map");c("some");c("every");return a};
e.setObject("dijit.FeatureLayerQueryResult",d);return d});