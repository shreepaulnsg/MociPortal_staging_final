//>>built
define("dojox/jq",["dojo","dijit","dojox","dojo/require!dojo/NodeList-traverse,dojo/NodeList-manipulate,dojo/io/script"],function(e,Y,Z){e.provide("dojox.jq");e.require("dojo.NodeList-traverse");e.require("dojo.NodeList-manipulate");e.require("dojo.io.script");(function(){function Q(a,b){a=(a+"").replace(/<\s*(\w+)([^\/>]*)\/\s*>/g,function(c,d,f){return-1=="|img|meta|hr|br|input|".indexOf("|"+d+"|")?"\x3c"+d+f+"\x3e\x3c/"+d+"\x3e":c});return e._toDom(a,b)}function E(a){var b=a.indexOf("-");-1!=b&&
(0==b&&(a=a.substring(1)),a=a.replace(/-(\w)/g,function(c,d){return d.toUpperCase()}));return a}function F(a,b){if(a==b)return a;var c={};for(d in b)"__proto__ "===d||void 0!==c[d]&&c[d]==b[d]||void 0===b[d]||a==b[d]||(e.isObject(a[d])&&e.isObject(b[d])?e.isArray(b[d])?a[d]=b[d]:a[d]=F(a[d],b[d]):a[d]=b[d]);if(e.isIE&&b){var d=b.toString;"function"==typeof d&&d!=a.toString&&d!=c.toString&&"\nfunction toString() {\n    [native code]\n}\n"!=d&&(a.toString=b.toString)}return a}function G(a,b,c,d){if(d){var f=
{};f[c]=d;a.forEach(function(k){e[b](k,f)});return a}return Math.abs(Math.round(e[b](a[0])[c]))}function w(a,b,c,d,f){var k=!1;if(k="none"==a.style.display)a.style.display="block";var h=e.getComputedStyle(a),l=Math.abs(Math.round(e._getContentBox(a,h)[b]));c=c?Math.abs(Math.round(e._getPadExtents(a,h)[b])):0;d=d?Math.abs(Math.round(e._getBorderExtents(a,h)[b])):0;b=f?Math.abs(Math.round(e._getMarginExtents(a,h)[b])):0;k&&(a.style.display="none");return c+l+d+b}function x(a){a=a.split("$$")[0];var b=
a.indexOf(".");-1!=b&&(a=a.substring(0,b));return a}function H(a,b){return 0==b.indexOf("ajax")?e.subscribe(y[b],function(c,d){var f=new g.Event(b);-1!="ajaxComplete|ajaxSend|ajaxSuccess".indexOf(b)?v(a,[f,c.ioArgs.xhr,c.ioArgs.args]):"ajaxError"==b?v(a,[f,c.ioArgs.xhr,c.ioArgs.args,d]):v(a,[f])}):e.connect(a,"on"+b,function(c){v(a,arguments)})}function I(a,b){a=a||[];a=[].concat(a);var c=a[0];c&&c.preventDefault||(c=b&&b.preventDefault?b:new g.Event(b),a.unshift(c));return a}function v(a,b,c){z=
!0;b=b||A;9==a.nodeType&&(a=a.documentElement);var d=a.getAttribute(q);if(d){var f=b[0],k=f.type,h=x(k);d=t[d][h];var l;c&&(l=c.apply(a,b));if(!1!==l)for(var n in d)"_connectId"!=n&&(!f._isStrict&&0==n.indexOf(k)||f._isStrict&&n==k)&&(f[e._scopeName+"callbackId"]=n,a=d[n],f.data="undefined"!=typeof a.data?a.data:null,!1!==(l=a.fn.apply(f.target,b))||f._isFake||e.stopEvent(f),f.result=l);return l}}function J(a,b,c,d,f){var k=a[b];if(k){var h=-1!=c.indexOf("."),l=!1;if(d)delete k[d];else if(!h&&!f)l=
!0;else if(h)if("."==c.charAt(0))for(var n in k)n.indexOf(c)==n.length-c.length&&delete k[n];else delete k[c];else for(n in k)if(-1!=n.indexOf("$$")&&k[n].fn==f){delete k[n];break}c=!0;for(n in k)if("_connectId"!=n){c=!1;break}if(l||c)-1!=b.indexOf("ajax")?e.unsubscribe(k._connectId):e.disconnect(k._connectId),delete a[b]}}function K(a){e.isString(a)&&(a="slow"==a?700:"fast"==a?300:500);return a}function L(a){for(var b in a)if(b.indexOf("callback")==b.length-8)return b;return null}e.config.ioPublish=
!0;var R=e.global.$,S=e.global.jQuery,g=e.global.$=e.global.jQuery=function(a,b){if(a)if(e.isString(a))if("\x3c"==a.charAt(0))if(a=Q(a),11==a.nodeType)a=a.childNodes;else return g._wrap([a],null,g);else{var c=e._NodeListCtor;e._NodeListCtor=g;b&&b._is$?b=b[0]:e.isString(b)&&(b=e.query(b)[0]);a=e.query.call(this,a,b);e._NodeListCtor=c;return a}else{if(e.isFunction(a))return g.ready(a),g;if(a==document||a==window)return g._wrap([a],null,g);if(e.isArray(a)){c=[];for(b=0;b<a.length;b++)-1==e.indexOf(c,
a[b])&&c.push(a[b]);return g._wrap(a,null,g)}if("nodeType"in a)return g._wrap([a],null,g)}else return g._wrap([],null,g);return g._wrap(e._toArray(a),null,g)},B=e.NodeList.prototype,m=g.fn=g.prototype=e.delegate(B);g._wrap=e.NodeList._wrap;var T=/^H\d/i,u=e.query.pseudos;e.mixin(u,{has:function(a,b){return function(c){return g(b,c).length}},visible:function(a,b){return function(c){return"hidden"!=e.style(c,"visible")&&"none"!=e.style(c,"display")}},hidden:function(a,b){return function(c){return"hidden"==
c.type||"hidden"==e.style(c,"visible")||"none"==e.style(c,"display")}},selected:function(a,b){return function(c){return c.selected}},checked:function(a,b){return function(c){return"INPUT"==c.nodeName.toUpperCase()&&c.checked}},disabled:function(a,b){return function(c){return c.getAttribute("disabled")}},enabled:function(a,b){return function(c){return!c.getAttribute("disabled")}},input:function(a,b){return function(c){c=c.nodeName.toUpperCase();return"INPUT"==c||"SELECT"==c||"TEXTAREA"==c||"BUTTON"==
c}},button:function(a,b){return function(c){return"INPUT"==c.nodeName.toUpperCase()&&"button"==c.type||"BUTTON"==c.nodeName.toUpperCase()}},header:function(a,b){return function(c){return c.nodeName.match(T)}}});var M={};e.forEach("text password radio checkbox submit image reset file".split(" "),function(a){M[a]=function(b,c){return function(d){return"INPUT"==d.nodeName.toUpperCase()&&d.type==a}}});e.mixin(u,M);g.browser={mozilla:e.isMoz,msie:e.isIE,opera:e.isOpera,safari:e.isSafari};g.browser.version=
e.isIE||e.isMoz||e.isOpera||e.isSafari||e.isWebKit;g.ready=g.fn.ready=function(a){e.addOnLoad(e.hitch(null,a,g));return this};m._is$=!0;m.size=function(){return this.length};g.prop=function(a,b){return e.isFunction(b)?b.call(a):b};g.className={add:e.addClass,remove:e.removeClass,has:e.hasClass};g.makeArray=function(a){return"undefined"==typeof a?[]:!a.length||e.isString(a)||"location"in a?[a]:e._toArray(a)};g.merge=function(a,b){var c=[a.length,0];c=c.concat(b);a.splice.apply(a,c);return a};g.each=
function(a,b){if(e.isArrayLike(a))for(var c=0;c<a.length&&!1!==b.call(a[c],c,a[c]);c++);else if(e.isObject(a))for(c in a)if(!1===b.call(a[c],c,a[c]))break;return this};m.each=function(a){return g.each.call(this,this,a)};m.eq=function(){var a=g();e.forEach(arguments,function(b){this[b]&&a.push(this[b])},this);return a};m.get=function(a){return a||0==a?this[a]:this};m.index=function(a){a._is$&&(a=a[0]);return this.indexOf(a)};var N=[],U=0,C=e._scopeName+"DataId",O=function(a){var b={};1==a.nodeType&&
(b=a.getAttribute(C),b||(b=U++,a.setAttribute(C,b)),(b=N[void 0])||(b=N[void 0]={}));return b};g.data=function(a,b,c){var d=null;if("events"==b){d=t[a.getAttribute(q)];b=!0;if(d)for(var f in d){b=!1;break}return b?null:d}f=O(a);"undefined"!=typeof c?f[b]=c:d=f[b];return c?this:d};g.removeData=function(a,b){var c=O(a);delete c[b];if(1==a.nodeType){b=!0;for(var d in c){b=!1;break}b&&a.removeAttribute(C)}return this};m.data=function(a,b){var c=null;this.forEach(function(d){c=g.data(d,a,b)});return b?
this:c};m.removeData=function(a){this.forEach(function(b){g.removeData(b,a)});return this};m.extend=function(){var a=[this];a=a.concat(arguments);return g.extend.apply(g,a)};g.extend=function(){for(var a=arguments,b,c=0;c<a.length;c++){var d=a[c];d&&e.isObject(d)&&(b?F(b,d):b=d)}return b};g.noConflict=function(a){var b=g;e.global.$=R;a&&(e.global.jQuery=S);return b};m.attr=function(a,b){if(1==arguments.length&&e.isString(arguments[0])){var c=this[0];if(!c)return null;var d=arguments[0],f=e.attr(c,
d),k=c[d];return d in c&&!e.isObject(k)&&"href"!=a?k:f||k}if(e.isObject(a))for(c in a)this.attr(c,a[c]);else{var h=e.isFunction(b);this.forEach(function(l,n){var p=l[a];a in l&&!e.isObject(p)&&"href"!=a?l[a]=h?b.call(l,n):b:1==l.nodeType&&e.attr(l,a,h?b.call(l,n):b)})}return this};m.removeAttr=function(a){this.forEach(function(b,c){c=b[a];a in b&&!e.isObject(c)&&"href"!=a?delete b[a]:1==b.nodeType&&("class"==a?b.removeAttribute(a):e.removeAttr(b,a))});return this};m.toggleClass=function(a,b){var c=
1<arguments.length;this.forEach(function(d){e.toggleClass(d,a,c?b:!e.hasClass(d,a))});return this};m.toggle=function(){var a=arguments;if(1<arguments.length&&e.isFunction(arguments[0])){var b=0;return this.bind("click",function(){a[b].apply(this,arguments);b+=1;b>a.length-1&&(b=0)})}var c=1==arguments.length?arguments[0]:void 0;this.forEach(function(d){var f=("undefined"==typeof c?"none"==e.style(d,"display"):c)?"show":"hide";d=g(d);d[f].apply(d,a)});return this};m.hasClass=function(a){return this.some(function(b){return e.hasClass(b,
a)})};m.html=m.innerHTML;e.forEach(["filter","slice"],function(a){m[a]=function(){if(e.isFunction(arguments[0])){var b=arguments[0];arguments[0]=function(f,k){return b.call(f,f,k)}}if("filter"==a&&e.isString(arguments[0]))var c=this._filterQueryResult(this,arguments[0]);else{var d=e._NodeListCtor;e._NodeListCtor=m;c=g(B[a].apply(this,arguments));e._NodeListCtor=d}return c._stash(this)}});m.map=function(a){return this._buildArrayFromCallback(a)};g.map=function(a,b){return m._buildArrayFromCallback.call(a,
b)};g.inArray=function(a,b){return e.indexOf(b,a)};m.is=function(a){return a?!!this.filter(a).length:!1};m.not=function(){var a=g.apply(g,arguments);return g(B.filter.call(this,function(b){return-1==a.indexOf(b)}))._stash(this)};m.add=function(){return this.concat.apply(this,arguments)};m.contents=function(){var a=[];this.forEach(function(b){if("IFRAME"==b.nodeName.toUpperCase())(b=b.contentDocument||b.name&&b.document&&document.getElementsByTagName("iframe")[b.name].contentWindow&&document.getElementsByTagName("iframe")[b.name].contentWindow.document||
b.name&&document.frames[b.name]&&document.frames[b.name].document||null)&&a.push(b);else{b=b.childNodes;for(var c=0;c<b.length;c++)a.push(b[c])}});return this._wrap(a)._stash(this)};m.find=function(a){var b=[];this.forEach(function(c){1==c.nodeType&&(b=b.concat(e._toArray(g(a,c))))});return this._getUniqueAsNodeList(b)._stash(this)};m.andSelf=function(){return this.add(this._parent)};m.remove=function(a){a=a?this._filterQueryResult(this,a):this;a.removeData();a.forEach(function(b){b.parentNode.removeChild(b)});
return this};g.css=function(a,b,c){b=E(b);return c?e.style(a,b,c):e.style(a,b)};m.css=function(a,b){if(e.isString(a)){a=E(a);if(2==arguments.length)return e.isString(b)||"zIndex"==a||(b+="px"),this.forEach(function(d){1==d.nodeType&&e.style(d,a,b)}),this;b=e.style(this[0],a);e.isString(b)||"zIndex"==a||(b+="px");return b}for(var c in a)this.css(c,a[c]);return this};m.height=function(a){return G(this,"contentBox","h",a)};m.width=function(a){return G(this,"contentBox","w",a)};m.innerHeight=function(){return w(this[0],
"h",!0)};m.innerWidth=function(){return w(this[0],"w",!0)};m.outerHeight=function(a){return w(this[0],"h",!0,!0,a)};m.outerWidth=function(a){return w(this[0],"w",!0,!0,a)};var t=[],P=1,q=e._scopeName+"eventid",A;g.Event=function(a){if(this==g)return new g.Event(a);"string"==typeof a?this.type=a.replace(/!/,""):e.mixin(this,a);this.timeStamp=(new Date).getTime();this._isFake=!0;this._isStrict=-1!=this.type.indexOf("!")};u=g.Event.prototype={preventDefault:function(){this.isDefaultPrevented=this._true},
stopPropagation:function(){this.isPropagationStopped=this._true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=this.isPropagationStopped=this._true},_true:function(){return!0},_false:function(){return!1}};e.mixin(u,{isPropagationStopped:u._false,isImmediatePropagationStopped:u._false,isDefaultPrevented:u._false});var z=!1;m.triggerHandler=function(a,b,c){var d=this[0];if(d&&3!=d.nodeType&&8!=d.nodeType)return b=I(b,a),v(d,b,c)};m.trigger=function(a,b,c){b=I(b,a);var d=b[0];
a=x(d.type);A=b;currentExtraFunc=c;var f=null,k=!d.target;this.forEach(function(h){if(3!=h.nodeType&&8!=h.nodeType){9==h.nodeType&&(h=h.documentElement);d._isFake&&(d.currentTarget=h,k&&(d.target=h));if(c){var l=b.slice(1);f=c.apply(h,f=l.concat(f))}if(!1!==f){z=!1;if(h[a])try{f=h[a]()}catch(n){}else if(h["on"+a])try{f=h["on"+a]()}catch(n){}z||(f=v(h,b));h=h.parentNode;!1===f||d.isImmediatePropagationStopped()||d.isPropagationStopped()||!h||1!=h.nodeType||g(h).trigger(a,b,c)}}});currentExtraFunc=
A=null;return this};var V=0;m.bind=function(a,b,c){a=a.split(" ");c||(c=b,b=null);this.forEach(function(d){if(3!=d.nodeType&&8!=d.nodeType){9==d.nodeType&&(d=d.documentElement);var f=d.getAttribute(q);f||(f=P++,d.setAttribute(q,f),t[f]={});for(var k=0;k<a.length;k++){var h=a[k],l=x(h);l==h&&(h=l+"$$"+V++);var n=t[f];n[l]||(n[l]={_connectId:H(d,l)});n[l][h]={fn:c,data:b}}}});return this};m.unbind=function(a,b){var c=a?a[e._scopeName+"callbackId"]:null;a=(a=a&&a.type?a.type:a)?a.split(" "):a;this.forEach(function(d){if(3!=
d.nodeType&&8!=d.nodeType&&(9==d.nodeType&&(d=d.documentElement),d=d.getAttribute(q))&&(d=t[d])){var f=a;if(!f){f=[];for(var k in d)f.push(k)}for(var h=0;h<f.length;h++){var l=f[h],n=x(l);if("."==l.charAt(0))for(k in d)J(d,k,l,c,b);else J(d,n,l,c,b)}}});return this};m.one=function(a,b){return this.bind(a,function(){g(this).unbind(a,arguments.callee);return b.apply(this,arguments)})};m._cloneNode=function(a){var b=a.cloneNode(!0);if(1==a.nodeType)for(var c=e.query("["+q+"]",b),d=0,f;f=c[d];d++)if(e.query("["+
q+'\x3d"'+f.getAttribute(q)+'"]',a)[0]){var k=void 0,h=f.getAttribute(q);if(h=t[h]){var l=l=P++;f.setAttribute(q,l);l=t[l]={};for(k in h){var n=l[k]={_connectId:H(f,k)},p=h[k],r;for(r in p)n[r]={fn:p[r].fn,data:p[r].data}}}}return b};e.getObject("$.event.global",!0);e.forEach("blur focus dblclick click error keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup submit ajaxStart ajaxSend ajaxSuccess ajaxError ajaxComplete ajaxStop".split(" "),function(a){m[a]=
function(b){b?this.bind(a,b):this.trigger(a);return this}});m.hide=function(a,b){a=K(a);this.forEach(function(c){var d=c.style;"none"!=e.getComputedStyle(c).display&&(d.overflow="hidden",d.display="block",a?e.anim(c,{width:0,height:0,opacity:0},a,null,function(){d.width="";d.height="";d.display="none";return b&&b.call(c)}):(e.style(c,"display","none"),b&&b.call(c)))});return this};m.show=function(a,b){a=K(a);this.forEach(function(c){var d=c.style;if("none"==e.getComputedStyle(c).display)if(a){var f=
parseFloat(d.width),k=parseFloat(d.height);f&&k||(d.display="block",k=e.marginBox(c),f=k.w,k=k.h);d.width=0;d.height=0;d.overflow="hidden";e.attr(c,"opacity",0);d.display="block";e.anim(c,{width:f,height:k,opacity:1},a,null,b?e.hitch(c,b):void 0)}else e.style(c,"display","block"),b&&b.call(c)});return this};g.ajaxSettings={};g.ajaxSetup=function(a){e.mixin(g.ajaxSettings,a)};var y={ajaxStart:"/dojo/io/start",ajaxSend:"/dojo/io/send",ajaxSuccess:"/dojo/io/load",ajaxError:"/dojo/io/error",ajaxComplete:"/dojo/io/done",
ajaxStop:"/dojo/io/stop"},D;for(D in y)0==D.indexOf("ajax")&&function(a){m[a]=function(b){this.forEach(function(c){e.subscribe(y[a],function(d,f){var k=new g.Event(a),h=d&&d.ioArgs;d=h&&h.xhr;h=h&&h.args;return-1!="ajaxComplete|ajaxSend|ajaxSuccess".indexOf(a)?b.call(c,k,d,h):"ajaxError"==a?b.call(c,k,d,h,f):b.call(c,k)})});return this}}(D);var W=e._xhrObj;e._xhrObj=function(a){var b=W.apply(e,arguments);return a&&a.beforeSend&&!1===a.beforeSend(b)?!1:b};g.ajax=function(a){var b=e.delegate(g.ajaxSettings);
for(d in a)if("data"==d&&e.isObject(a[d])&&e.isObject(b.data))for(var c in a[d])b.data[c]=a[d][c];else b[d]=a[d];a=b;b=a.url;"async"in a&&(a.sync=!a.async);!1===a.global&&(a.ioPublish=!1);if(a.data)if(c=a.data,e.isString(c))a.content=e.queryToObject(c);else{for(d in c)e.isFunction(c[d])&&(c[d]=c[d]());a.content=c}var d=a.dataType;"dataType"in a?("script"==d?d="javascript":"html"==d&&(d="text"),a.handleAs=d):(d=a.handleAs="text",a.guessedType=!0);if("cache"in a)a.preventCache=!a.cache;else if("script"==
a.dataType||"jsonp"==a.dataType)a.preventCache=!0;a.error&&(a._jqueryError=a.error,delete a.error);a.handle=function(l,n){var p="success";if(l instanceof Error)p="timeout"==l.dojoType?"timeout":"error",a._jqueryError&&a._jqueryError(n.xhr,p,l);else{var r=n.args.guessedType&&n.xhr&&n.xhr.responseXML;r&&(l=r);a.success&&a.success(l,p,n.xhr)}a.complete&&a.complete(l,p,n.xhr);return l};c="jsonp"==d;if("javascript"==d){var f=b.indexOf(":"),k=b.indexOf("/");if(0<f&&f<k){var h=b.indexOf("/",k+2);-1==h&&
(h=b.length);if(location.protocol!=b.substring(0,f+1)||location.hostname!=b.substring(k+2,h))c=!0}}if(c)return"jsonp"==d&&(b=a.jsonp,b||((d=a.url.split("?")[1])&&(d=e.queryToObject(d))&&(b=L(d))&&(a.url=a.url.replace(new RegExp("([\x26\\?])?"+b+"\x3d?")+"\x3d?")),b||(b=L(a.content))&&delete a.content[b]),a.jsonp=b||"callback"),b=e.io.script.get(a);b=e.xhr(a.type||"GET",a);return!1===b.ioArgs.xhr?!1:b.ioArgs.xhr};g.getpost=function(a,b,c,d,f){a={url:b,type:a};c&&(e.isFunction(c)&&!d?a.complete=c:a.data=
c);d&&(e.isString(d)&&!f?f=d:a.complete=d);f&&(a.dataType=f);return g.ajax(a)};g.get=e.hitch(g,"getpost","GET");g.post=e.hitch(g,"getpost","POST");g.getJSON=function(a,b,c){return g.getpost("GET",a,b,c,"json")};g.getScript=function(a,b){return g.ajax({url:a,success:b,dataType:"script"})};m.load=function(a,b,c){var d=this[0];if(!d||!d.nodeType||9==d.nodeType)return e.addOnLoad(a),this;d=a.split(/\s+/);a=d[0];var f=d[1],k=c||b;d=e.hitch(this,function(h,l,n){var p=h.match(/<\s*body[^>]+>.*<\/body\s*>/i);
p&&(h=p);p=e._toDom(h);if(f){var r=g(e.create("div"));r.append(p);p=r.find(f)}else p=g(11==p.nodeType?p.childNodes:p);this.html(p);k&&setTimeout(e.hitch(this,function(){this.forEach(function(X){k.call(X,h,l,n)})}),10)});c?c=d:b=d;d="GET";b&&e.isObject(b)&&(d="POST");g.getpost(d,a,b,c,"html");return this};m.serialize=function(){return""+this.map(function(a){if("FORM"==a.nodeName.toUpperCase())return e.formToQuery(a);var b=(a.type||"").toLowerCase();if(-1=="file|submit|image|reset|button|".indexOf(b)&&
(b=e.fieldToObject(a),a.name&&null!=b)){var c={};c[a.name]=b;return e.objectToQuery(c)}}).join("\x26")};g.param=function(a){return a._is$&&a.serialize?a.serialize():e.isArray(a)?e.map(a,function(b){return g.param(b)}).join("\x26"):e.objectToQuery(a)};g.isFunction=function(){var a=e.isFunction.apply(e,arguments);a&&(a="object"!=typeof arguments[0]);return a}})()});