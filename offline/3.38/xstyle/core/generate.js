//>>built
define("xstyle/core/generate",["xstyle/core/elemental","put-selector/put","xstyle/core/utils","xstyle/core/expression","xstyle/core/base"],function(L,x,M,aa,ba){function J(a,c){a=a.sort?a:[a];return function(d,k,b){var e=d,y;"content"in d||(d.content=void 0);if(void 0===b){var f=(d._contentNode||d).childNodes||0,p=f[0];if(p){var A=E.createDocumentFragment();do A.appendChild(p);while(p=f[0]);d.content=A}if(d._contentNode){d._contentNode=void 0;try{d.innerHTML=""}catch(l){}}}var g=0,q=[d],h=[];f=0;
for(p=a.length;f<p;f++){var r=m,m=a[f];try{if(m.eachProperty){if(m.args)if("("==m.operator){var u=a[f+1];Q(m,u,e,function(l,F,B){ca(l,F,B,c)})}else{var G=m.args[0];if("string"===typeof G){var v=G.split("\x3d");try{e.setAttribute(v[0],v[1])}catch(l){console.error(l)}}else{var R=G[0].replace(/=$/,""),S=G[1];"("==S.operator?Q(G[1],R,e,function(l,F,B){da(l,F,B,c)}):e.setAttribute(R,S.value)}}}else if("string"==typeof m){"\x3d"==m.charAt(0)&&(m=m.slice(1));var n=e;u=a[f+1];v=[];m.replace(/([,\n]+)?([\t ]*)?(\.|#)?([-\w%$|\.#]+)(?:\[([^\]=]+)=?['"]?([^\]'"]*)['"]?\])?/g,
function(){v.push(arguments)});for(var C=0;C<v.length;C++)(function(l,F,B,w,H,N,T){function U(){var D=n._contentNode;D&&(D.innerHTML="",n=D)}F?(l=B?B.length:0,l>g?(U(),q[l]=n):n=q[l]||n,g=l):U();if(w)var O=(r&&r.args?"":"span")+w+H;else{w=H.match(/^[-\w]+/);if(!w)throw new SyntaxError("Unable to parse selector",H);w=w[0];if(C===v.length-1&&u&&u.selector){u.bases||M.extend(u,w);var z=u}else z=c.getDefinition(w);z&&(z.then||z.newElement)?n=function(D,V,K,ea){var t;M.when(z&&z.newElement&&z.newElement(),
function(P){(t=P)?(K=K.slice(ea.length))&&x(t,K):t=x(K);if(I){I.parentNode.replaceChild(t,I);P=I.childNodes;var W;for(t=t._contentNode||t;W=P[0];)t.appendChild(W)}});if(t)return D.insertBefore(t,V||null);var I=x("span");return D.insertBefore(I,V||null)}(n,b,H,w):O=H}O&&(n=x(b||n,(b?"-":"")+O));b=null;N&&n.setAttribute(N,""===T?N:T);k&&(n.item=k);y=y||n;(C<v.length-1||n!=e&&n!=d)&&h.push(C==v.length-1&&u&&u.selector,n);e=n}).apply(this,v[C])}else e.appendChild(E.createTextNode(m.value))}catch(l){console.error(l,
l.stack),e.innerHTML&&(e.innerHTML=""),e.appendChild(E.createTextNode(l))}}for(;m=h.pop();)L.update(m,h.pop());return y}}function Q(a,c,d,k){var b;if(c&&c.eachProperty){x(d,b=c.selector);var e=c}else x(d,b=a.selector||(a.selector=".-xbind-"+fa++)),e=a;var y=a.getArgs()[0],f=a.expressionResult,p=a.expressionDefinition;p||(p=a.expressionDefinition=aa.evaluate(a.parent,y),f=p.valueOf(),L.addInputConnector(e,p),function(A,g,q){a.expressionResult=f;q.dependencyOf&&q.dependencyOf({invalidate:function(h){h=
h?L.matchesRule(h.elements[0],e)?h.elements:h.elements[0].querySelectorAll(g):document.querySelectorAll(g);for(var r=0,m=h.length;r<m;r++)k(h[r],A,q.valueOf())}})}(c,b,p));k(d,c,f)}function X(a,c,d,k){return M.when(a,function(b){b&&b.forRule&&(b=b.forRule(c));b&&b.forElement&&(b=b.forElement(d));k(b)})}function da(a,c,d,k){X(d,k,a,function(b){a.setAttribute(c,b)})}function ca(a,c,d,k){a._defaultBinding=!0;if(d&&d.then&&"INPUT"!==a.tagName)try{a.appendChild(E.createTextNode("Loading"))}catch(b){}X(d,
k,a,function(b){if(a._defaultBinding)if(Y(a),a.childNodes.length&&(a.innerHTML=""),b&&b.sort)if(b.isSequence)J(b,k)(a);else{var e=c&&c.definitions&&c.definitions.each,y=k.newRule();e=e?J(e,y):function(g,q,h){return x(h||g,(h?"-":"")+(ha[g.tagName]||"span"),""+q)};var f=[];if(b.track){b=b.track();var p=b.tracking}b.forEach(function(g){f.push(e(a,g,null))});if(b.on)var A=b.on("add,delete,update",function(g){var q=g.target,h=g.previousIndex;g=g.index;if(-1<h){var r=f[h];Y(r,!0);r.parentNode.removeChild(r);
f.splice(h,1)}-1<g&&f.splice(g,0,e(a,q,f[g]||null))});if(p=p||A)a.xcleanup=function(){p.remove()}}else b&&b.nodeType?a.appendChild(b):(b=void 0===b?"":b,a.tagName in ia?"checkbox"===a.type?a.checked=b:a.value=b:a.appendChild(E.createTextNode(b)))})}function Y(a,c){a.xcleanup&&a.xcleanup(c);a=a.getElementsByTagName("*");c=0;for(var d=a.length;c<d;c++){var k=a[c];k.xcleanup&&k.xcleanup(!0)}}function Z(a,c){return J(c,ba)(a)}var ha={TABLE:"tr",TBODY:"tr",TR:"td",UL:"li",OL:"li",SELECT:"option"},ia={INPUT:1,
TEXTAREA:1,SELECT:1},E=document,fa=1;Z.forSelector=J;return Z});