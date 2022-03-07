// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/renderers/TimeRampAger","dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/has ../kernel ../symbols/jsonUtils ../Color ./SymbolAger".split(" "),function(k,n,p,q,r,t,m,u){k=k(u,{declaredClass:"esri.renderer.TimeRampAger",constructor:function(e,a,c){this.colorRange=e;this.sizeRange=a;this.alphaRange=c},getAgedSymbol:function(e,a){var c=a.getLayer(),d=a.attributes;e=t.fromJson(e.toJson());var b=c._map.timeExtent;a=b.startTime;b=b.endTime;if(!a||!b)return e;a=a.getTime();b=b.getTime();
c=new Date(d[c._startTimeField]);c=c.getTime();c<a&&(c=a);c=b===a?1:(c-a)/(b-a);if(a=this.sizeRange)d=a[0],b=a[1],a=Math.abs(b-d)*c,this._setSymbolSize(e,d<b?d+a:d-a);if(a=this.colorRange){b=a[0];var g=a[1],l=Math.round;d=new p;var f=b.r,h=g.r;a=Math.abs(h-f)*c;d.r=l(f<h?f+a:f-a);f=b.g;h=g.g;a=Math.abs(h-f)*c;d.g=l(f<h?f+a:f-a);f=b.b;h=g.b;a=Math.abs(h-f)*c;d.b=l(f<h?f+a:f-a);b=b.a;g=g.a;a=Math.abs(g-b)*c;d.a=b<g?b+a:b-a;e.setColor(d)}d=e.color;(a=this.alphaRange)&&d&&(b=a[0],g=a[1],a=Math.abs(g-
b)*c,d.a=b<g?b+a:b-a);return e},toJson:function(){var e={};this.sizeRange&&(e.sizeRange=this.sizeRange);this.colorRange&&(e.colorRange=[m.toJsonColor(this.colorRange[0]),m.toJsonColor(this.colorRange[1])]);this.alphaRange&&(e.alphaRange=[Math.round(255*this.alphaRange[0]),Math.round(255*this.alphaRange[1])]);return e}});q("extend-esri")&&n.setObject("renderer.TimeRampAger",k,r);return k});