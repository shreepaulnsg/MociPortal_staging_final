// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/TileHandler","require exports dojo/Deferred dojo/has dojo/promise/all ../../request ../../core/LRUCache ../../core/promiseUtils ../../core/requireUtils ../../core/workers ../2d/tiling/TileKey ./GeometryUtils ./GlyphMosaic ./GlyphSource ./SpriteMosaic ./SpriteSource ./TileIndex ./VectorTileDisplayObject module".split(" "),function(w,I,x,y,t,u,z,h,A,B,p,v,C,D,E,F,q,G,H){var r=new z(10),n=new Map;return function(){function e(a,b,d,c,g){void 0===c&&(c=
!1);this.devicePixelRatio=d;this.allowUpdates=c;this._tileIndex=this._connection=this._glyphMosaic=this._spriteMosaic=null;this._updateQueue=new Map;this._ongoingRequests=new Map;this._vectorTileLayer=a;this._styleRepository=a.styleRepository;this._requestUpdate=b}e.prototype.destroy=function(){this.stop();this._vectorTileLayer=this._requestUpdate=this._styleRepository=null;this._spriteMosaic&&(this._spriteMosaic.dispose(),this._spriteMosaic=null);this._glyphMosaic&&(this._glyphMosaic.dispose(),this._glyphMosaic=
null)};Object.defineProperty(e.prototype,"initialized",{get:function(){return this._broadcastPromise&&this._broadcastPromise.isFulfilled()},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"spriteMosaic",{get:function(){return this._spriteMosaic},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"glyphMosaic",{get:function(){return this._glyphMosaic},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"ongoingRequestCount",{get:function(){return this._ongoingRequests.size},
enumerable:!0,configurable:!0});e.prototype.start=function(){var a=this;this.stop();var b=this._styleRepository,d=new F(b.sprite,this.devicePixelRatio);d.devicePixelRatio=this.devicePixelRatio;var c=d.load().then(function(){a._spriteMosaic=new E(1024,1024,250);a._spriteMosaic.setSpriteSource(d);y("stable-symbol-rendering")&&a._spriteMosaic.preloadSpriteItems()}),g=new D(b.glyphs);this._glyphMosaic=new C(1024,1024,g);var f=this._fetchTileMap(this._vectorTileLayer.tileIndexUrl),k=B.open(A.getAbsMid("./WorkerTileHandler",
w,H),{client:this}).then(function(m){a._connection=m}),l=new x(function(m){c.isFulfilled()||c.cancel();f.isFulfilled()||f.cancel();k.isFulfilled()||k.cancel()});t([c,f,k]).then(function(m){t(a._connection.broadcast("setLayers",b.styleJSON)).then(function(){l.resolve()})});return this._broadcastPromise=l.promise};e.prototype.stop=function(){this._broadcastPromise&&!this._broadcastPromise.isFulfilled()&&this._broadcastPromise.cancel();this._updateQueue.forEach(function(a){return a.cancel()});this._ongoingRequests.forEach(function(a){return a.cancel()});
this._connection&&(this._connection.close(),this._connection=null)};e.prototype.updateTile=function(a,b){var d=this;if(!this.allowUpdates)return h.resolve(null);if(!this._broadcastPromise.isFulfilled()||!this._connection)return h.reject(Error("no connection"));b=Math.round(v.degToByte(b.state.rotation));if(a.rotation===b)return h.resolve(null);var c=a.key;if(this._updateQueue.has(c.id)){var g=this._updateQueue.get(c.id);g.cancel()}a.rotation=b;g=this._connection.invoke("update",{key:a.id,rotation:b},
null,{client:a.client}).then(function(f){a.updateSymbolData(f);return f}).always(function(){d._updateQueue["delete"](c.id)});this._updateQueue.set(a.id,g);return g};e.prototype.getVectorTileWithLRC=function(a,b,d,c){var g=this;void 0===c&&(c=0);var f=new p(a,b,d,0);return this.getRefKey(f).then(function(k){var l=new G(f,k,g._vectorTileLayer.tileInfo,g._styleRepository,0);if(k)return g.getTileData(l.key,0).then(function(m){l.setData(m.tileData,m.client);return l});l.setData(null,null);return l})};
e.prototype.getTileData=function(a,b){var d=this;return this._broadcastPromise.isFulfilled()&&this._connection?this.getRefKey(a).then(function(c){if(!c)return h.resolve(null);var g=Math.round(v.degToByte(b));return d._getTileData(d._connection,a,c,g).then(function(f){return f&&f.tileData?{tileData:f.tileData,client:f.client}:h.reject("No data")})}):h.reject(Error("no connection"))};e.prototype.getRefKey=function(a){return this._tileIndex?this._tileIndex.dataKey(a):h.resolve(a)};e.prototype.fetchTileData=
function(a){a=p.pool.acquire(a);var b=this._vectorTileLayer.getTileUrl(a.level,a.row,a.col);p.pool.release(a);return u(b,{callbackParamName:"callback",responseType:"array-buffer"}).then(function(d){return{result:d.data,transferList:[d.data]}})};e.prototype.getSprites=function(a){return this._spriteMosaic.getSpriteItems(a)};e.prototype.getGlyphs=function(a){return this._glyphMosaic.getGlyphItems(a.tileID,a.font,a.codePoints)};e.prototype.getStyleRepository=function(){return this._styleRepository};
e.prototype.getTileIndex=function(){return this._tileIndex};e.prototype._getTileData=function(a,b,d,c){var g=this,f={client:null};if(a=this._ongoingRequests.get(b.id))return a;a=this._connection.invoke("getTile",{key:b.id,refKey:d.id,rotation:c,cacheTile:this.allowUpdates},null,f).then(function(k){g._ongoingRequests["delete"](b.id);return{tileData:k,client:f.client}}).catch(function(k){g._ongoingRequests["delete"](b.id);g._connection.invoke("destructTileData",b.id,null,f);return h.reject(k)});this._ongoingRequests.set(b.id,
a);return a};e.prototype._fetchTileMap=function(a){var b=this;if(this._vectorTileLayer.capabilities.operations.supportsTileMap&&this._vectorTileLayer.tilemapCache)return this._tileIndex=new q(this._vectorTileLayer.tilemapCache),h.resolve();if(!a)return h.resolve();if(r.has(a))return this._tileIndex=r.use(a),h.resolve();if(n.has(a))return n.get(a).then(function(c){b._tileIndex=new q(c.data)});var d=u(a,{callbackParamName:"callback",responseType:"json"});d.then(function(c){b._tileIndex=new q(c.data);
n["delete"](a);r.insert(a,b._tileIndex)});n.set(a,d);return d};return e}()});