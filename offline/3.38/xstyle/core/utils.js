//>>built
define("xstyle/core/utils",[],function(){function m(a,b){for(var d=0,e=a.length;d<e;d++){var c=a[d];if(c&&"object"==typeof c&&b in c)return!0}}function n(a,b){return b.toUpperCase()}var p="div"==document.createElement("div").tagName,k={};return{when:function(a,b,d){return a&&a.then?a.then(b,d)||a:b(a)},whenAll:function(a,b){return m(a,"then")?{then:function(d,e){function c(){f--;f||d(b(l))}for(var f=1,l=[],g=0;g<a.length;g++){var h=a[g];f++;h&&h.then?function(q){h.then(function(r){l[q]=r;c()},e)}(g):
(l[g]=h,c())}c()},inputs:a}:b(a)},convertCssNameToJs:function(a){return a.replace(/-(\w)/g,n)},isTagSupported:function(a){if(a in k)return k[a];var b=document.createElement(a);p?(b=b.toString(),b=!("[object HTMLUnknownElement]"==b||"[object]"==b)):b=b.tagName==a.toUpperCase();return k[a]=b},extend:function(a,b){var d=b.split(".");b=d[0];var e=a.getDefinition(b,"rules");d[0]="";a.selector+=a.extraSelector=d.join(".");if(e)return this.when(e,function(c){if(c.extend)c.extend(a,!0);else for(var f in c)a[f]=
c[f]});a.tagName=b;if(!this.isTagSupported(b))throw Error("Extending undefined definition "+b);},someHasProperty:m}});