/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/io/iframe","../_base/config ../_base/json ../_base/kernel ../_base/lang ../_base/xhr ../sniff ../_base/window ../dom ../dom-construct ../query require ../aspect ../request/iframe".split(" "),function(t,u,l,p,q,g,v,w,A,B,C,x,e){l.deprecated("dojo/io/iframe","Use dojo/request/iframe.","2.0");g=e._iframeName;g=g.substring(0,g.lastIndexOf("_"));var m=p.delegate(e,{create:function(){return m._frame=e.create.apply(e,arguments)},get:null,post:null,send:function(a){var d=q._ioSetArgs(a,function(b){f&&
f.cancel()},function(b){var c=null;b=b.ioArgs;try{var k=b.handleAs;"xml"===k||"html"===k?c=f.response.data:(c=f.response.text,"json"===k?c=u.fromJson(c):"javascript"===k&&(c=l.eval(c)))}catch(y){c=y}return c},function(b,c){c.ioArgs._hasError=!0;return b}),h=d.ioArgs,r="GET",n=w.byId(a.form);a.method&&"POST"===a.method.toUpperCase()&&n&&(r="POST");a={method:r,handleAs:"json"===a.handleAs||"javascript"===a.handleAs?"text":a.handleAs,form:a.form,query:n?null:a.content,data:n?a.content:null,timeout:a.timeout,
ioArgs:h};a.method&&(a.method=a.method.toUpperCase());if(t.ioPublish&&l.publish&&!1!==h.args.ioPublish)var z=x.after(e,"_notifyStart",function(b){b.options.ioArgs===h&&(z.remove(),q._ioNotifyStart(d))},!0);var f=e(h.url,a,!0);h._callNext=f._callNext;f.then(function(){d.resolve(d)}).otherwise(function(b){d.ioArgs.error=b;d.reject(b)});return d},_iframeOnload:v.global[g+"_onload"]});p.setObject("dojo.io.iframe",m);return m});