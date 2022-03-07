// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/core/timerUtils",[],function(){function f(a){var c,g=a.length;for(c=0;c<g;c++)a[c]()}var d={LOW:1,HIGH:2},e,b={};b[d.LOW]=[];b[d.HIGH]=[];var h=function(){clearTimeout(e);e=null;var a=b[d.HIGH];b[d.HIGH]=[];f(a);a=b[d.LOW];b[d.LOW]=[];f(a)};return{priority:d,callbackQueue:b,setTimeout:function(a,c){a=[c,b[c].push(a)-1];e||(e=setTimeout(h,0));return a},clearTimeout:function(a){a&&b[a[0]].splice(a[1],1)}}});