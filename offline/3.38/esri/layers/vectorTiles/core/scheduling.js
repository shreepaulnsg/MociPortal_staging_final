// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/scheduling",["require","exports","./nextTick","./now","./requestAnimationFrame"],function(F,c,z,A,B){function C(a){void 0===a&&(a=c.now());c.debug.rafId=null;0<f.length&&(c.debug.rafId=p());if(0<h){var b=a-h;l=Math.min(b,l);if(b<q)return}c.debug.executeFrameTasks(a)}function p(){return c.debug.requestNextFrame?c.debug.requestNextFrame(v):v()}function w(){for(var a=0;a<f.length;){var b=f[a];a++;if(b.removed){f.splice(a-1,1);for(var e=0;e<m.length;e++){var d=m[e];
if(b.phases[d]){d=r[d];var g=d.indexOf(b);-1!==g&&d.splice(g,1)}}}}}function x(){for(;t.length;){var a=t.shift();a.isActive&&(a.isActive=!1,a.callback())}c.debug.willDispatch=!1}function v(){return B(C)}Object.defineProperty(c,"__esModule",{value:!0});c.now=A;var D=function(){return function(a){this.phases=a;this.paused=!1;this.pausedAt=0;this.epoch=-1;this.dt=0;this.ticks=-1;this.removed=!1}}(),E=function(){function a(b){this.callback=b;this.isActive=!0}a.prototype.remove=function(){this.isActive=
!1};return a}(),h=-1,q=0,n=0,l=Number.POSITIVE_INFINITY,k={time:0,deltaTime:0,elapsedFrameTime:0,frameDuration:0,spendInTask:0},m=["prepare","preRender","render","postRender","update"],t=[],f=[],r={prepare:[],preRender:[],render:[],postRender:[],update:[]},y=function(){function a(b){this._task=b}a.prototype.remove=function(){this._task.removed=!0};a.prototype.pause=function(){this._task.paused||(this._task.paused=!0,this._task.pausedAt=c.now())};a.prototype.resume=function(){this._task.paused&&(this._task.paused=
!1,-1!==this._task.epoch&&(this._task.epoch+=c.now()-this._task.pausedAt))};return a}();c.FrameTaskHandle=y;c.debug={frameTasks:f,rafId:null,requestNextFrame:null,willDispatch:!1,clearFrameTasks:function(a){void 0===a&&(a=!1);for(var b=0;b<f.length;b++)f[b].removed=!0;a&&w()},dispatch:x,executeFrameTasks:function(a){void 0===a&&(a=c.now());0>h&&(h=a);var b=a-h;h=a;for(var e=0;e<f.length;e++){var d=f[e];-1!==d.epoch&&(d.dt=b)}for(e=0;e<m.length;e++){b=m[e];for(var g=r[b],u=0;u<g.length;u++)d=g[u],
d.paused||d.removed||(0===e&&d.ticks++,-1===d.epoch&&(d.epoch=a),k.time=a,k.deltaTime=d.dt,k.elapsedFrameTime=c.now()-a,k.frameDuration=0<n?n:l,k.spendInTask=a-d.epoch,d.phases[b].call(d,k))}w()}};c.schedule=function(a){a=new E(a);t.push(a);c.debug.willDispatch||(c.debug.willDispatch=!0,z(x));return a};c.addFrameTask=function(a){var b=new D(a);f.push(b);for(var e=0,d=m;e<d.length;e++){var g=d[e];a[g]&&r[g].push(b)}c.debug.rafId||(h=-1,c.debug.rafId=p());return new y(b)};c.setFrameRate=function(a){if(0>=
a)n=q=0;else{var b=1.05*l;a=Math.ceil(1E3/a/b);q=(a-1)*b;n=a*l}};c.requestNextFrame=p});