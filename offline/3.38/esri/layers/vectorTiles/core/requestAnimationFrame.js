// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/requestAnimationFrame",["require","exports","./global","./now"],function(a,b,c,d){var f=d();a=c.requestAnimationFrame;if(!a){b=["ms","moz","webkit","o"];for(var e=0;e<b.length&&!a;++e)a=c[b[e]+"RequestAnimationFrame"];a||(a=function(k){var g=d(),h=Math.max(0,16-(g-f)),l=c.setTimeout(function(){k(d())},h);f=g+h;return l})}return a});