// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/SpriteSource","require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper dojo/Deferred ../../kernel ../../request ../../core/promiseUtils ../../core/urlUtils".split(" "),function(u,v,w,x,q,m,r,n,t){return function(){function h(a,e){this.baseURL=a;this.devicePixelRatio=e;this._isRetina=!1;this._spritesData={};this.height=this.width=this.image=null;this.loadStatus="not-loaded"}Object.defineProperty(h.prototype,"spriteNames",
{get:function(){var a=[],e;for(e in this._spritesData)a.push(e);a.sort();return a},enumerable:!0,configurable:!0});h.prototype.getSpriteInfo=function(a){return this._spritesData[a]};h.prototype.load=function(){var a=this;this.loadStatus="loading";return this.baseURL?this._loadSprites().then(function(){a.loadStatus="loaded";return a}).catch(function(e){a.loadStatus="failed";return a}):n.resolve(this)};h.prototype._loadSprites=function(){var a=this;this._isRetina=1.15<this.devicePixelRatio?!0:!1;var e=
this.baseURL,p=this._isRetina?"@2x":"";return r(e+p+".json",{callbackParamName:"callback",responseType:"json"}).then(function(g){var f=Object.keys(g.data);if(!f||0===f.length||1===f.length&&"_ssl"===f[0])return n.resolve(null);a._spritesData=g.data;var l=new q,c=new Image;c.crossOrigin="anonymous";c.onload=function(){c.onload=null;a.width=c.width;a.height=c.height;var b=document.createElement("canvas");b.width=c.width;b.height=c.height;b=b.getContext("2d");b.drawImage(c,0,0,c.width,c.height);b=b.getImageData(0,
0,c.width,c.height);b=new Uint8Array(b.data);for(var k,d=0;d<b.length;d+=4)k=b[d+3]/255,b[d]*=k,b[d+1]*=k,b[d+2]*=k;a.image=b;l.resolve()};c.onerror=function(){console.log("Failed to load sprites!");a._spritesData=null;l.reject()};g=""+e+p+".png";m.id&&(f=m.id.findCredential(g))&&f.token&&(g+="?token\x3d"+f.token);c.src=t.addProxy(g);return l})};return h}()});