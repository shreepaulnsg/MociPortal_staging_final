// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/DataUtil",["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when"],function(m,r){function n(a){return"string"==typeof a?{source:a,getLength:function(){return this.source.length},getByte:function(b){return this.source.charCodeAt(b)&255}}:window.ArrayBuffer&&a instanceof ArrayBuffer?{source:new Uint8Array(a),getLength:function(){return this.source.byteLength},getByte:function(b){return this.source[b]}}:a}function p(a){for(var b=a.length,c=new Uint8Array(a.length),
d=0;d<b;d++)c[d]=a.charCodeAt(d);return c}function q(a,b){a=new Uint8Array(a);b=Math.min(b,a.byteLength);for(var c="",d=0;d<b;d++)c+=String.fromCharCode(a[d]);return c}var h={arrayBufferFromBlob:function(a){var b=new m,c=new FileReader;c.onloadend=function(){c.error?b.reject(c.error):b.resolve(c.result)};c.readAsArrayBuffer(a);return b.promise},arrayBuffersToBlob:function(a,b){return new Blob(a,{type:b||"application/octet-stream"})},binaryStringFromByteSource:function(a){if("string"==typeof a)return a;
a=n(a);var b=a.getLength(),c=b%4;b-=c;for(var d="",f=0,l,e,k,g;f<b;)l=a.getByte(f++),e=a.getByte(f++),k=a.getByte(f++),g=a.getByte(f++),d+=String.fromCharCode(l,e,k,g);1==c?d+=String.fromCharCode(a.getByte(f)):2==c?d+=String.fromCharCode(a.getByte(f),a.getByte(f+1)):3==c&&(d+=String.fromCharCode(a.getByte(f),a.getByte(f+1),a.getByte(f+2)));return d},base64FromByteSource:function(a){a=n(a);var b=a.getLength(),c=b%3;b-=c;for(var d,f,l,e,k="",g=0;g<b;g+=3)e=a.getByte(g)<<16|a.getByte(g+1)<<8|a.getByte(g+
2),d=e>>18&63,f=e>>12&63,l=e>>6&63,e&=63,k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[d]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[f]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e];1==c?(e=a.getByte(g),k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>2&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e<<4&63]+"\x3d\x3d"):
2==c&&(e=a.getByte(g)<<8|a.getByte(g+1),k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>10&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>4&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e<<2&63]+"\x3d");return k},base64FromJson:function(a){return btoa(unescape(encodeURIComponent("string"===typeof a?a:JSON.stringify(a))))}};h.binaryStringToByteArray=p;h.base64ToByteArray=function(a){return p(atob(a))};h.getFirstBytes=function(a,
b){if("string"==typeof a)var c=a.substr(0,b);else if(window.ArrayBuffer&&a instanceof ArrayBuffer)c=q(a,b);else if(window.Blob&&a instanceof Blob){c=new m;var d=new FileReader;d.onloadend=function(){d.error?c.resolve(""):c.resolve(q(d.result,b))};d.readAsArrayBuffer(a.slice(0,b))}return r(c||"")};h.isBase64=function(a){return a&&0==a.length%4&&/^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+\/]+$/.test(a.replace(/={0,2}$/,""))};h.base64ToJson=function(a){return JSON.parse(decodeURIComponent(escape(atob(a))))};
h.getContentType=function(a){a=h.getFileExtension(a);if(null===a)return null;switch(a){case "png":return"image/png";case "jpg":case "jpeg":return"image/jpeg";case "gif":return"image/gif";case "svg":return"image/svg+xml";case "json":return"application/json";case "txt":return"text/plain";case "xml":return"text/xml";default:return null}};h.getFileExtension=function(a){var b=a.lastIndexOf(".")+1;return b?a.substr(b).toLowerCase():null};return h});