//>>built
define("dojox/lang/functional/zip",["dojo/_base/lang","./lambda"],function(h,f){h.mixin(f,{zip:function(){for(var b=arguments[0].length,d=arguments.length,a=1,g=Array(b),c,e;a<d;b=Math.min(b,arguments[a++].length));for(a=0;a<b;++a){e=Array(d);for(c=0;c<d;e[c]=arguments[c][a],++c);g[a]=e}return g},unzip:function(b){return f.zip.apply(null,b)}})});