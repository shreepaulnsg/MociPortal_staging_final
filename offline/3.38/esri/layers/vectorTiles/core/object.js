// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/object",["require","exports"],function(h,e){function g(a,d,b){for(var c=0;c<a.length;c++){var f=a[c];if(!(f in b))if(d)b[f]={};else return;b=b[f]}return b}Object.defineProperty(e,"__esModule",{value:!0});e.getDeepValue=function(a,d){return g(a.split("."),!1,d)};e.setDeepValue=function(a,d,b){var c=a.split(".");a=c.pop();(b=g(c,!0,b))&&a&&(b[a]=d)}});