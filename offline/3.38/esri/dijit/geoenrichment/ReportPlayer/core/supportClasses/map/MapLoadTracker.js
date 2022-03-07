// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/MapLoadTracker",["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/on"],function(h,c,k){return{waitForLoad:function(a){function d(l,m,n){function e(p){f&&f.remove();g&&clearTimeout(g);p||!n?b.resolve():b.reject(Error("The map can't be loaded."))}var b=new h;var f=k.once(a,l,function(){e(!0)});var g=setTimeout(function(){e(!1)},m);return b.promise}return c(!a.loaded&&d("load",6E4,!0),function(){return c(a.updating&&
d("update-end",3E4,!1),function(){return a})})}}});