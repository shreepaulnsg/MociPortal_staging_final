//>>built
define("dojox/rpc/JsonRest",["dojo","dojox","dojox/json/ref","dojox/rpc/Rest"],function(t,l){function z(a,c,b,d){(c=c.ioArgs&&c.ioArgs.xhr&&c.ioArgs.xhr.getResponseHeader("Last-Modified"))&&u._timeStamps&&(u._timeStamps[d]=c);var e=a._schema&&a._schema.hrefProperty;e&&(l.json.ref.refAttribute=e);b=b&&l.json.ref.resolveJson(b,{defaultId:d,index:u._index,timeStamps:c&&u._timeStamps,time:c,idPrefix:a._store.allowNoTrailingSlash?a.servicePath+"/":a.servicePath.replace(/[^\/]*$/,""),idAttribute:m.getIdAttribute(a),
schemas:m.schemas,loader:m._loader,idAsRef:a.idAsRef,assignAbsoluteIds:!0});l.json.ref.refAttribute="$ref";return b}var n=[],u=l.rpc.Rest;var m=l.rpc.JsonRest={serviceClass:l.rpc.Rest,conflictDateHeader:"If-Unmodified-Since",commit:function(a){a=a||{};for(var c=[],b={},d=[],e=0;e<n.length;e++){var g=n[e],f=g.object,h=g.old;if((!a.service||!f&&!h||!(f||h).__id.indexOf(a.service.servicePath))&&g.save){delete f.__isDirty;if(f)if(h){var p;if(p=f.__id.match(/(.*)#.*/))f=u._index[p[1]];if(!(f.__id in b)){b[f.__id]=
f;if(a.incrementalUpdates&&!p)var v=("function"==typeof a.incrementalUpdates?a.incrementalUpdates:function(){v={};for(var k in f)if(f.hasOwnProperty(k))f[k]!==h[k]&&(v[k]=f[k]);else if(h.hasOwnProperty(k))return null;return v})(f,h);v?c.push({method:"post",target:f,content:v}):c.push({method:"put",target:f,content:f})}}else p=m.getServiceAndId(f.__id).service,m.getIdAttribute(p)in f&&!a.alwaysPostNewItems?c.push({method:"put",target:f,content:f}):c.push({method:"post",target:{__id:p.servicePath},
content:f});else h&&c.push({method:"delete",target:h});d.push(g);n.splice(e--,1)}}t.connect(a,"onError",function(){if(!1!==a.revertOnError){var k=n;n=d;m.revert();n=k}else t.forEach(d,function(r){m.changing(r.object,!r.object)})});m.sendToServer(c,a);return c},sendToServer:function(a,c){var b=t.xhr,d=a.length,e,g,f=this.conflictDateHeader;t.xhr=function(r,q){q.headers=q.headers||{};q.headers.Transaction=a.length-1==e?"commit":"open";f&&g&&(q.headers[f]=g);v&&(q.headers["Content-ID"]="\x3c"+v+"\x3e");
return b.apply(t,arguments)};for(e=0;e<a.length;e++){var h=a[e];l.rpc.JsonRest._contentId=h.content&&h.content.__id;var p="post"==h.method;(g="put"==h.method&&u._timeStamps[h.content.__id])&&(u._timeStamps[h.content.__id]=new Date+"");var v=p&&l.rpc.JsonRest._contentId;var k=m.getServiceAndId(h.target.__id);p=k.service;k=h.deferred=p[h.method](k.id.replace(/#/,""),l.json.ref.toJson(h.content,!1,p.servicePath,!0));(function(r,q,x){q.addCallback(function(y){try{var w=q.ioArgs.xhr&&q.ioArgs.xhr.getResponseHeader("Location");
if(w){var A=w.match(/(^\w+:\/\/)/)&&w.indexOf(x.servicePath);w=0<A?w.substring(A):(x.servicePath+w).replace(/^(.*\/)?(\w+:\/\/)|[^\/\.]+\/\.\.\/|^.*\/(\/)/,"$2$3");r.__id=w;u._index[w]=r}y=z(x,q,y,r&&r.__id)}catch(B){}--d||c.onComplete&&c.onComplete.call(c.scope,a);return y})})(h.content,k,p);k.addErrback(function(r){d=-1;c.onError.call(c.scope,r)})}t.xhr=b},getDirtyObjects:function(){return n},revert:function(a){for(var c=n.length;0<c;){c--;var b=n[c],d=b.object;b=b.old;var e=l.data._getStoreForItem(d||
b);if(!a||!d&&!b||!(d||b).__id.indexOf(a.servicePath)){if(d&&b){for(var g in b)if(b.hasOwnProperty(g)&&d[g]!==b[g]){if(e)e.onSet(d,g,d[g],b[g]);d[g]=b[g]}for(g in d)if(!b.hasOwnProperty(g)){if(e)e.onSet(d,g,d[g]);delete d[g]}}else if(!b){if(e)e.onDelete(d)}else if(e)e.onNew(b);delete (d||b).__isDirty;n.splice(c,1)}}},changing:function(a,c){if(a.__id){a.__isDirty=!0;for(var b=0;b<n.length;b++){var d=n[b];if(a==d.object){c&&(d.object=!1,this._saveNotNeeded||(d.save=!0));return}}d=a instanceof Array?
[]:{};for(b in a)a.hasOwnProperty(b)&&(d[b]=a[b]);n.push({object:!c&&a,old:d,save:!this._saveNotNeeded})}},deleteObject:function(a){this.changing(a,!0)},getConstructor:function(a,c){if("string"==typeof a){var b=a;a=new l.rpc.Rest(a,!0);this.registerService(a,b,c)}if(a._constructor)return a._constructor;a._constructor=function(d){function e(k){if(k){e(k["extends"]);h=k.properties;for(var r in h){var q=h[r];q&&"object"==typeof q&&"default"in q&&(g[r]=q["default"])}}k&&k.prototype&&k.prototype.initialize&&
(p=!0,k.prototype.initialize.apply(g,f))}var g=this,f=arguments,h,p;e(a._schema);!p&&d&&"object"==typeof d&&t.mixin(g,d);var v=m.getIdAttribute(a);u._index[this.__id=this.__clientId=a.servicePath+(this[v]||Math.random().toString(16).substring(2,14)+"@"+(l.rpc.Client&&l.rpc.Client.clientId||"client"))]=this;l.json.schema&&h&&l.json.schema.mustBeValid(l.json.schema.validate(this,a._schema));n.push({object:this,save:!0})};return t.mixin(a._constructor,a._schema,{load:a})},fetch:function(a){a=m.getServiceAndId(a);
return this.byId(a.service,a.id)},getIdAttribute:function(a){a=a._schema;var c;if(a&&!(c=a._idAttr))for(var b in a.properties)if(a.properties[b].identity||"self"==a.properties[b].link)a._idAttr=c=b;return c||"id"},getServiceAndId:function(a){var c="",b;for(b in m.services)a.substring(0,b.length)==b&&b.length>=c.length&&(c=b);if(c)return{service:m.services[c],id:a.substring(c.length)};a=a.match(/^(.*\/)([^\/]*)$/);return{service:new m.serviceClass(a[1],!0),id:a[2]}},services:{},schemas:{},registerService:function(a,
c,b){c=a.servicePath=c||a.servicePath;a._schema=m.schemas[c]=b||a._schema||{};m.services[c]=a},byId:function(a,c){var b=u._index[(a.servicePath||"")+c];return b&&!b._loadObject?(a=new t.Deferred,a.callback(b),a):this.query(a,c)},query:function(a,c,b){var d=a(c,b);d.addCallback(function(e){return e.nodeType&&e.cloneNode?e:z(a,d,e,"string"!=typeof c||b&&(b.start||b.count)?void 0:c)});return d},_loader:function(a){var c=m.getServiceAndId(this.__id),b=this;m.query(c.service,c.id).addBoth(function(d){d==
b?(delete d.$ref,delete d._loadObject):b._loadObject=function(e){e(d)};a(d)})},isDirty:function(a,c){return a?a.__isDirty:c?t.some(n,function(b){return l.data._getStoreForItem(b.object||b.old)==c}):!!n.length}};return l.rpc.JsonRest});