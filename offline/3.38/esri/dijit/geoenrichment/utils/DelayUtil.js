// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/DelayUtil",["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when"],function(f,g){return{delay:function(a,c,e){var d=new f;c="number"===typeof a?a:c;var b="function"===typeof a?a:null,h=e&&b&&b();setTimeout(function(){g(e?h:b&&b()).then(d.resolve,d.reject)},c||0);return d.promise}}});