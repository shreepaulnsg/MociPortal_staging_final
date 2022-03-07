/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/store/Observable",["../_base/kernel","../_base/lang","../when","../_base/array"],function(r,t,C,u){r=function(a){function v(e,f){var g=a[e];g&&(a[e]=function(l){var c;"put"===e&&(c=a.getIdentity(l));if(w)return g.apply(this,arguments);w=!0;try{var p=g.apply(this,arguments);C(p,function(m){f("object"==typeof m&&m||l,c)});return p}finally{w=!1}})}var q=[],x=0;a=t.delegate(a);a.notify=function(e,f){x++;for(var g=q.slice(),l=0,c=g.length;l<c;l++)g[l](e,f)};var H=a.query;a.query=function(e,
f){f=f||{};var g=H.apply(this,arguments);if(g&&g.forEach){var l=t.mixin({},f);delete l.start;delete l.count;var c=a.queryEngine&&a.queryEngine(e,l),p=x,m=[],D;g.observe=function(E,I){1==m.push(E)&&q.push(D=function(d,y){C(g,function(b){var z=b.length!=f.count,F;if(++p!=x)throw Error("Query is out of date, you must observe() the query prior to any data modifications");var n=-1,h=-1;if(void 0!==y){var G=[].concat(b);c&&!d&&(G=c(b));var k=0;for(F=b.length;k<F;k++){var A=b[k];if(a.getIdentity(A)==y&&
!(0>G.indexOf(A))){var J=A;n=k;!c&&d||b.splice(k,1);break}}}c?d&&(c.matches?c.matches(d):c([d]).length)&&(k=-1<n?n:b.length,b.splice(k,0,d),h=u.indexOf(c(b),d),b.splice(k,1),f.start&&0==h||!z&&h==b.length?h=-1:b.splice(h,0,d)):d&&(void 0!==y?h=n:f.start||(h=a.defaultIndex||0,b.splice(h,0,d)));if((-1<n||-1<h)&&(I||!c||n!=h))for(z=m.slice(),k=0;b=z[k];k++)b(d||J,n,h)})});var B={};B.remove=B.cancel=function(){var d=u.indexOf(m,E);-1<d&&(m.splice(d,1),m.length||q.splice(u.indexOf(q,D),1))};return B}}return g};
var w;v("put",function(e,f){a.notify(e,f)});v("add",function(e){a.notify(e)});v("remove",function(e){a.notify(void 0,e)});return a};t.setObject("dojo.store.Observable",r);return r});