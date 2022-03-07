// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/animation/Animator",["esri/dijit/geoenrichment/Deferred","dojo/fx/easing","dojox/gfx/matrix"],function(t,u,v){function h(a){1>a.progress&&!a.isStopped?w.setTimeout(function(){if(a.isStopped)a.endFunction();else{var b=(new Date).getTime();a.progress=1-(a.endTime-b)/a.duration;a.progress=Math.min(1,a.progress);k(a);h(a)}}):a.endFunction()}function k(a){for(var b in a.params.properties){var c=a.params.properties[b],d=c.easing?"function"===typeof c.easing?c.easing:
u[c.easing]:null;d=d?d(a.progress):a.progress;var f=c.start+d*(c.end-c.start);a.obj[b]=c.units?f+c.units:f;a.progressFunction&&a.progressFunction(b,f,d)}}var g={},w={_funcs:null,setTimeout:function(a){var b=this;this._funcs?this._funcs.push(a):(this._funcs=[a],setTimeout(function(){var c=b._funcs;b._funcs=null;c.forEach(function(d){d()})},33))}};g.animateProperty=function(a){var b={},c=new t;b.promise=c.promise;b.params=a;b.obj=a.obj||a.node||{};b.duration=void 0!==a.duration?a.duration:1E3;b.startTime=
(new Date).getTime();b.endTime=b.startTime+b.duration;b.progress=0;b.endFunction=function(){a.endFunction&&a.endFunction();c.resolve()};b.progressFunction=a.progressFunction;b.stop=function(){b.isStopped=!0};k(b);h(b);return b};g.animateTransform=function(a){var b=a.shape;b.setTransform(null);return g.animateProperty({duration:a.duration,properties:{p:{start:0,end:1,easing:a.easing}},progressFunction:function(c,d,f){var l,m,n,p;a.transform.forEach(function(e){var q=e.start[0]+(e.end[0]-e.start[0])*
f,r=e.start[1]+(e.end[1]-e.start[1])*f;"translate"===e.name?(l=q,m=r):"scale"===e.name&&(n=q,p=r)});b.setTransform(new v.Matrix2D({dx:l,dy:m,xx:n,yy:p}))},endFunction:function(){b.setTransform(null);a.onEnd&&a.onEnd()}}).promise};return g});