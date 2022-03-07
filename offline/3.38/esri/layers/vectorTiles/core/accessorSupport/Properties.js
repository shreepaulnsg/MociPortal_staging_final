// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/accessorSupport/Properties","require exports dojo/has ../Logger ./extensions ./PropertyOrigin ./Store".split(" "),function(l,m,n,r,t,g,u){function h(d,a){return a.metadatas[d]?!0:(n("dojo-debug-messages")&&p.warn("cannot access unknown property '"+d+"' on instance of "+a.host.declaredClass+"."),!1)}function q(d,a,b,c){return d.nonNullable&&null==b?(n("dojo-debug-messages")&&p.warn("cannot set non-nullable property '"+a+"' to null on "+c.host.declaredClass+"."),
!1):!0}Object.defineProperty(m,"__esModule",{value:!0});var p=r.getLogger("esri.core.accessorSupport.Properties");l=function(){function d(a){this.host=a;this._origin=g.OriginId.USER;this.ctorArgs=this.cursors=null;this.destroyed=!1;this.dirties={};this.lifecycle=0;this.overridden=null;this.store=new u.default;a=this.host.constructor.__accessorMetadata__;this.metadatas=a.properties;this.autoDestroy=a.autoDestroy}d.prototype.initialize=function(){this.lifecycle=1;t.instanceCreated(this.host,this.metadatas)};
d.prototype.constructed=function(){this.lifecycle=2};d.prototype.destroy=function(){this.destroyed=!0;var a=this.cursors;if(this.cursors)for(var b=0,c=Object.getOwnPropertyNames(a);b<c.length;b++){var e=c[b],f=a[e];if(f){for(;0<f.length;)f.pop().propertyDestroyed(this,e);a[e]=null}}if(this.autoDestroy)for(e in this.metadatas)(a=this.internalGet(e))&&a&&"function"===typeof a.destroy&&(a.destroy(),this.metadatas[e].nonNullable||this.internalSet(e,null))};Object.defineProperty(d.prototype,"initialized",
{get:function(){return 0!==this.lifecycle},enumerable:!0,configurable:!0});d.prototype.clearOverride=function(a){this.isOverridden(a)&&(this.overridden[a]=!1,this.propertyInvalidated(a))};d.prototype.get=function(a){h(a,this);var b=this.metadatas[a];if(this.store.has(a)&&!this.dirties[a])return this.store.get(a);var c=b.get;return c?(b=c.call(this.host),this.store.set(a,b,g.OriginId.COMPUTED),this.propertyCommitted(a),b):b.value};d.prototype.originOf=function(a){var b=this.store.originOf(a);return void 0===
b&&(a=this.metadatas[a])&&a.hasOwnProperty("value")?"defaults":g.idToName(b)};d.prototype.has=function(a){return this.metadatas[a]?this.store.has(a):!1};d.prototype.internalGet=function(a){if(h(a,this)){var b=this.store;return b.has(a)?b.get(a):this.metadatas[a].value}};d.prototype.internalSet=function(a,b){h(a,this)&&(this.propertyInvalidated(a),this.initialized?this.store.set(a,b,this._origin):this.store.set(a,b,g.OriginId.DEFAULTS),this.propertyCommitted(a))};d.prototype.isOverridden=function(a){return null!=
this.overridden&&!0===this.overridden[a]};d.prototype.keys=function(){return this.store.keys()};d.prototype.override=function(a,b){if(h(a,this)){this.overridden||(this.overridden={});var c=this.metadatas[a];q(c,a,b,this)&&((c=c.cast)&&(b=c.call(this.host,b)),this.overridden[a]=!0,this.internalSet(a,b))}};d.prototype.set=function(a,b){if(h(a,this)){var c=this.metadatas[a];if(q(c,a,b,this)){var e=c.set;(c=c.cast)&&(b=c.call(this.host,b));e?e.call(this.host,b):this.internalSet(a,b)}}};d.prototype.setDefaultOrigin=
function(a){this._origin=g.nameToId(a)};d.prototype.propertyInvalidated=function(a){var b=this.dirties,c=this.isOverridden(a),e=this.cursors&&this.cursors[a],f=this.metadatas[a].computes;if(e)for(var k=0;k<e.length;k++)e[k].propertyInvalidated(this,a);c||(b[a]=!0);if(f)for(a=0;a<f.length;a++)this.propertyInvalidated(f[a])};d.prototype.propertyCommitted=function(a){var b=this.cursors&&this.cursors[a];this.dirties[a]=!1;if(b)for(var c=0;c<b.length;c++)b[c].propertyCommitted(this,a)};d.prototype.addCursor=
function(a,b){this.cursors||(this.cursors={});var c=this.cursors[a];c||(this.cursors[a]=c=[]);c.push(b)};d.prototype.removeCursor=function(a,b){var c=this.cursors[a];this.cursors[a]&&(c.splice(c.indexOf(b),1),0===c.length&&(this.cursors[a]=null))};return d}();m.default=l});