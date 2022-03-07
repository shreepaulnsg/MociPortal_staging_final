//>>built
define("dojox/grid/enhanced/plugins/filter/FilterLayer",["dojo/_base/declare","dojo/_base/lang","dojo/_base/kernel","dojo/_base/json","../_StoreLayer"],function(m,g,t,q,p){var l=function(a,b){return b?g.hitch(a||t.global,b):function(){}},u=function(a){var b={};if(a&&g.isObject(a))for(var d in a)b[d]=a[d];return b},r=m("dojox.grid.enhanced.plugins.filter._FilterLayerMixin",null,{tags:["sizeChange"],name:function(){return"filter"},onFilterDefined:function(a){},onFiltered:function(a,b){}}),v=m("dojox.grid.enhanced.plugins.filter.ServerSideFilterLayer",
[p._ServerSideLayer,r],{constructor:function(a){this._onUserCommandLoad=a.setupFilterQuery||this._onUserCommandLoad;this.filterDef(null)},filterDef:function(a){if(a){this._filter=a;var b=a.toObject();this.command("filter",this._isStateful?q.toJson(b):b);this.command("clear",null);this.useCommands(!0);this.onFilterDefined(a)}else null===a&&(this._filter=null,this.command("filter",null),this.command("clear",!0),this.useCommands(!0),this.onFilterDefined(null));return this._filter},onCommandLoad:function(a,
b){this.inherited(arguments);var d=b.onBegin;if(this._isStateful){if(a){this.command("filter",null);this.command("clear",null);this.useCommands(!1);var c=a.split(",");if(2<=c.length){var e=this._filteredSize=parseInt(c[0],10);this.onFiltered(e,parseInt(c[1],10))}else return}else e=this._filteredSize;this.enabled()&&(b.onBegin=function(h,f){l(b.scope,d)(e,f)})}else{var k=this;b.onBegin=function(h,f){k._filter||(k._storeSize=h);k.onFiltered(h,k._storeSize||h);f.onBegin=d;l(b.scope,d)(h,f)}}}});m=m("dojox.grid.enhanced.plugins.filter.ClientSideFilterLayer",
[p._StoreLayer,r],{_storeSize:-1,_fetchAll:!0,constructor:function(a){this.filterDef(null);a=g.isObject(a)?a:{};this.fetchAllOnFirstFilter(a.fetchAll);this._getter=g.isFunction(a.getter)?a.getter:this._defaultGetter},_defaultGetter:function(a,b,d,c){return c.getValue(a,b)},filterDef:function(a){void 0!==a&&(this._filter=a,this.invalidate(),this.onFilterDefined(a));return this._filter},setGetter:function(a){g.isFunction(a)&&(this._getter=a)},fetchAllOnFirstFilter:function(a){void 0!==a&&(this._fetchAll=
!!a);return this._fetchAll},invalidate:function(){this._items=[];this._nextUnfetchedIdx=0;this._result=[];this._indexMap=[];this._resultStartIdx=0},_fetch:function(a,b){if(!this._filter){var d=a.onBegin,c=this;a.onBegin=function(f,n){l(a.scope,d)(f,n);c.onFiltered(f,f)};this.originFetch(a);return a}try{var e=b?b._nextResultItemIdx:a.start;e=e||0;if(!b){this._result=[];this._resultStartIdx=e;var k;g.isArray(a.sort)&&0<a.sort.length&&(k=q.toJson(a.sort))!=this._lastSortInfo&&(this.invalidate(),this._lastSortInfo=
k)}var h="number"==typeof a.count?e+a.count-this._result.length:this._items.length;this._result=this._result.length?this._result.concat(this._items.slice(e,h)):this._items.slice(a.start,"number"==typeof a.count?a.start+a.count:this._items.length);this._result.length>=a.count||this._hasReachedStoreEnd()?this._completeQuery(a):(b||(b=u(a),b.onBegin=g.hitch(this,this._onFetchBegin),b.onComplete=g.hitch(this,function(f,n){this._nextUnfetchedIdx+=f.length;this._doFilter(f,n.start,a);this._fetch(a,n)})),
b.start=this._nextUnfetchedIdx,this._fetchAll&&delete b.count,b._nextResultItemIdx=h<this._items.length?h:this._items.length,this.originFetch(b))}catch(f){if(a.onError)l(a.scope,a.onError)(f,a);else throw f;}return a},_hasReachedStoreEnd:function(){return 0<=this._storeSize&&this._nextUnfetchedIdx>=this._storeSize},_applyFilter:function(a,b){var d=this._getter,c=this._store;try{return!!this._filter.applyRow(a,function(e,k){return d(e,k,b,c)}).getValue()}catch(e){return console.warn("FilterLayer._applyFilter() error: ",
e),!1}},_doFilter:function(a,b,d){for(var c=0,e=0;c<a.length;++c)this._applyFilter(a[c],b+c)&&(l(d.scope,d.onItem)(a[c],d),e+=this._addCachedItems(a[c],this._items.length),this._indexMap.push(b+c))},_onFetchBegin:function(a,b){this._storeSize=a},_completeQuery:function(a){var b=this._items.length;this._nextUnfetchedIdx<this._storeSize&&b++;l(a.scope,a.onBegin)(b,a);this.onFiltered(this._items.length,this._storeSize);l(a.scope,a.onComplete)(this._result,a)},_addCachedItems:function(a,b){g.isArray(a)||
(a=[a]);for(var d=0;d<a.length;++d)this._items[b+d]=a[d];return a.length},onRowMappingChange:function(a){if(this._filter){var b=g.clone(a),d={};for(c in b){var c=parseInt(c,10);a[this._indexMap[c]]=this._indexMap[b[c]];d[this._indexMap[c]]||(d[this._indexMap[c]]=!0);d[c]||(d[c]=!0,delete a[c])}}}});return g.mixin({ServerSideFilterLayer:v,ClientSideFilterLayer:m},p)});