// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/ImageInfoUtil",["dojo/_base/lang","esri/dijit/geoenrichment/when","./CacheUtil","./ImageUtil","./UrlUtil"],function(q,m,r,p,t){var u=/^data:/i,n={getImageInfo:function(a,c,b){var k=b&&b.sizeLimit||1E5,g=r.get("ImageInfoUtil"),l=a+(b&&b.crossOrigin||"");g[l]||(g[l]=p.imageFromUrl(a,b).then(function(d){var h=p.imageToDataURL(d),e={dataUrl:h,contentType:p.getContentType(h),width:d.width,height:d.height};setTimeout(function(){g[l]=e});return e}));return m(g[l],function(d){d=
q.mixin({},d);c&&(d.filename=c&&c.replace(/\.\w+$/,".png").toLowerCase());return function(h){return m(n._processDataUrl(h,k),function(e){if(e&&e.dataUrl){var f=q.mixin({},h);f.dataUrl=e.dataUrl;f.width*=e.factor;f.height*=e.factor;return m(f)}return m(h)})}(d)})},ensureDataUrlForRemoveImage:function(a,c){return!a||u.test(a)?a:n.getRemoteImageDataUrl(a,c)},getRemoteImageDataUrl:function(a,c){function b(d,h){return n.getImageInfo(d?l+"?"+a:a,null,{crossOrigin:h}).then(function(e){return m(n._processDataUrl(e,
g),function(f){return f&&f.dataUrl||f})})}function k(){console.log("Failed to get data for URL: "+a);return a}if(!a)return a;var g=c&&c.sizeLimit||1E5,l=t.getProxyUrl();return b(!1,"anonymous").otherwise(function(){return b(!1,null)}).otherwise(function(){return l?b(!0,"anonymous"):k()}).otherwise(function(){return b(!0,null)}).otherwise(k)},_processDataUrl:function(a,c){var b=Math.max(a.width,a.height);if(b<=c)return a.dataUrl;var k=c/b;return m(p.scaleImage(a.dataUrl,{factor:k}),function(g){return{dataUrl:g,
factor:k}})}};return n});