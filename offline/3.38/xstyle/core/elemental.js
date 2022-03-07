//>>built
define("xstyle/core/elemental",["put-selector/put","xstyle/core/utils"],function(C,D){function m(a,b,d,e){function c(f){if(!d)return e(f);var g=f.target;do if(n(g,d))return e(f);while((g=g.parentNode)&&1===g.nodeType)}E?a.addEventListener(b,c,!!v[b]):F(a,v[b]||b,c)}function F(a,b,d){b="on"+b;var e=a[b];a[b]=function(c){c=c||window.event;c.target=c.target||c.srcElement;e&&e(c);d(c)}}function w(a){/e/.test(h.readyState||"")?a():h.addEventListener("DOMContentLoaded",a)}function x(a){for(var b=h.querySelectorAll(a.selector),
d=a.name,e=0,c=b.length;e<c;e++){var f=b[e],g=f.elementalStyle;g||(g=f.elementalStyle={},f.elementalSpecificities={});var p=f.renderings;p||(p=f.renderings=[],q.push(f));p.push({name:d,rendered:g[d]==a.propertyValue,renderer:a});g[d]=a.propertyValue}}function y(){for(;q.length;){for(var a=q.shift(),b=a.renderings,d=a.elementalStyle;b.length;){var e=b.shift(),c=e.renderer,f=c.rendered;r=d[e.name]==c.propertyValue;if(!f&&r)try{c.render(a)}catch(g){console.error(g,g.stack),C(a,"div.error",g.toString())}f&&
!r&&c.unrender&&c.unrender(a)}a.renderings=void 0}}function z(a,b){for(var d=0,e=k.length;d<e;d++){var c=k[d];b&&b!=c.selector||!n(a,c.rule)||c.render(a)}}function A(a,b){var d={selector:a.selector,rule:a,render:b};k.push(d);t&&x(d);y();return{remove:function(){k.splice(k.indexOf(d),1)}}}var h=document,G=1,E=!!h.addEventListener,v={blur:"focusout",focus:"focusin"};m(h,"change",null,function(a){a=a.target;for(var b=0,d=u.length;b<d;b++){var e=u[b];if(-1<(" "+a.className+" ").indexOf(e.rule.selector.slice(1))){var c=
e.definition.valueOf();c&&c.forRule&&(c=c.forRule(e.rule));c&&c.forElement&&(c=c.forElement(a));var f="checkbox"===a.type?a.checked:a.value;"number"===typeof c&&isFinite(f)&&(f=+f);(c=e.definition.put(f))&&c.forRule&&(c=c.forRule(e.rule));c&&c.forElement&&c.forElement(a)}}});navigator.userAgent.match(/MSIE|Trident/)&&m(h,"keydown",null,function(a){if(13==a.keyCode){var b=a.target;if(document.createEvent)a=document.createEvent("Events"),a.initEvent("change",!0,!0),b.dispatchEvent(a);else document.onchange({target:b})}});
var l=h.createElement("div"),H={"dom-qsa2.1":!!l.querySelectorAll},B=l.matches||l.matchesSelector||l.webkitMatchesSelector||l.mozMatchesSelector||l.msMatchesSelector||l.oMatchesSelector,k=[],u=[],q=[],t;w(function(){if(!t)if(t=!0,H["dom-qsa2.1"]){for(var a=0,b=k.length;a<b;a++)x(k[a]);y()}else{var d=h.all;a=0;for(b=d.length;a<b;a++)z(d[a])}});var r,n=B?function(a,b){return B.call(a,b.selector)}:function(a,b){b.ieId||b.setStyle(b.ieId="x-ie-"+G++,"true");return!!a.currentStyle[b.ieId]};return{ready:w,
on:m,matchesRule:n,addRenderer:A,addInputConnector:function(a,b){u.push({rule:a,definition:b})},update:z,clearRenderers:function(){k=[]},observeForElement:function(a,b,d){return D.when(a,function(e){function c(f){f.observe?f.observe(d):d(f)}e.forElement?A(b,function(f){c(e.forElement(f))}):c(e)})}}});