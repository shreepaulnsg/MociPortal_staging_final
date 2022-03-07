// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/styles/utils",["dojo/_base/lang","dojo/_base/array","dojo/has","../kernel"],function(l,f,m,n){function g(a,b){return a.r===b.r&&a.g===b.g&&a.b===b.b}var k={haveIdenticalColors:function(a,b){var h,c=0;a.length===b.length&&((h=f.every(a,function(d,e){return g(d,b[e])}))?c=1:(a=a.slice(0).reverse(),(h=f.every(a,function(d,e){return g(d,b[e])}))&&(c=-1)));return c}};m("extend-esri")&&l.setObject("styles.utils",k,n);return k});