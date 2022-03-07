// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/accessorSupport/watch","require exports ../ArrayPool ../lang ../ObjectPool ../scheduling ./get ./utils ./wire".split(" "),function(K,k,F,y,G,H,q,t,z){function A(a){r.has(a)?e.splice(e.indexOf(a),1):r.add(a);e.push(a);u||(u=H.schedule(B))}function C(a){if(!a.removed){var d=a.callback,b=a.path,c=a.oldValue,f=a.target,h=q.valueOf(f,a.propertyPath,!0);y.equals(c,h)||(a.oldValue=h,d.call(f,h,c,b,f))}}function B(){if(u){u=null;var a=e;e=n.acquire();r.clear();for(var d=
n.acquire(),b=0;b<a.length;b++){var c=a[b];C(c);c.removed&&d.push(c)}for(b=0;b<e.length;b++)c=e[b],c.removed&&(d.push(c),r.delete(c),e.splice(b,1),--b);for(b=0;b<d.length;b++)D.pool.release(d[b]);n.release(a);n.release(d);w.forEach(function(f){return f()})}}function I(a,d,b){var c=t.parse(a,d,b,function(f,h,x){var m=q.valueOf(f,h,!0),g,l=z.wire(f,h,function(p,v){p.__accessor__.destroyed?c.remove():(g||(g=D.pool.acquire(p,v,m,x),m=null),A(g))});return{remove:t.once(function(){l.remove();g&&(g.removed=
!0,A(g),g=null);c=l=m=null})}});return c}function J(a,d,b){var c=t.parse(a,d,b,function(f,h,x){var m=q.valueOf(f,h,!0),g=!1;return z.wire(f,h,function(l,p){if(l.__accessor__.destroyed)c.remove();else if(!g){g=!0;var v=q.valueOf(l,p,!0);y.equals(m,v)||x.call(l,v,m,p,l);m=q.valueOf(l,p,!0);g=!1}})});return c}function E(a,d,b,c){void 0===c&&(c=!1);return!a.__accessor__||a.__accessor__.destroyed?{remove:function(){}}:c?J(a,d,b):I(a,d,b)}Object.defineProperty(k,"__esModule",{value:!0});var D=function(){function a(d,
b,c,f){this.target=d;this.path=b;this.oldValue=c;this.callback=f;this.removed=!1;this.propertyPath=t.pathToStringOrArray(b)}a.prototype.release=function(){this.target=this.path=this.propertyPath=this.callback=this.oldValue=null;this.removed=!0};a.pool=new G(a,!0);return a}(),n=new F,r=new Set,e=n.acquire(),u;k.dispatchTarget=function(a){for(var d=n.copy(e),b=0;b<d.length;b++){var c=d[b];c.target===a&&(C(c),r.delete(c),e.splice(e.indexOf(c),1))}};k.removeTarget=function(a){for(var d=0;d<e.length;d++){var b=
e[d];b.target===a&&(b.removed=!0)}};k.dispatch=B;var w=new Set;k.afterDispatch=function(a){w.add(a);return{remove:function(){w.delete(a)}}};k.watch=E;k.isValueInUse=function(a){return e.some(function(d){return d.oldValue===a})};k.default=E});