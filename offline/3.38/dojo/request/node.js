/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/request/node","require ./util ./handlers ../errors/RequestTimeoutError ../node!http ../node!https ../node!url ../node!stream".split(" "),function(x,g,n,p,q,r,t,u){function l(b,a){var c=g.parseArgs(b,g.deepCreate(v,a),a&&a.data instanceof w);b=c.url;a=c.options;var d=g.deferred(c,function(e,k){k.clientRequest.abort()});b=t.parse(b);var f=c.requestOptions={hostname:b.hostname,port:b.port,socketPath:a.socketPath,method:a.method,headers:a.headers,agent:a.agent,pfx:a.pfx,key:a.key,passphrase:a.passphrase,
cert:a.cert,ca:a.ca,ciphers:a.ciphers,rejectUnauthorized:!1===a.rejectUnauthorized?!1:!0};b.path&&(f.path=b.path);if(a.user||a.password)f.auth=(a.user||"")+":"+(a.password||"");b=c.clientRequest=("https:"===b.protocol?r:q).request(f);a.socketOptions&&("timeout"in a.socketOptions&&b.setTimeout(a.socketOptions.timeout),"noDelay"in a.socketOptions&&b.setNoDelay(a.socketOptions.noDelay),"keepAlive"in a.socketOptions&&(f=a.socketOptions.keepAlive,b.setKeepAlive(0<=f,f||0)));b.on("socket",function(){c.hasSocket=
!0;d.progress(c)});b.on("response",function(e){c.clientResponse=e;c.status=e.statusCode;c.getHeader=function(h){return e.headers[h.toLowerCase()]||null};var k=[];e.on("data",function(h){k.push(h)});e.on("end",function(){m&&clearTimeout(m);c.text=k.join("");g.checkStatus(c.status)||d.reject({message:"http response code "+c.status,response:c});try{n(c),d.resolve(c)}catch(h){d.reject(h)}})});b.on("error",d.reject);a.data?"string"===typeof a.data?b.end(a.data):a.data.pipe(b):b.end();if(a.timeout)var m=
setTimeout(function(){d.cancel(new p(c))},a.timeout);return d.promise}var w=u.Stream,v={method:"GET",query:null,data:void 0,headers:{}};g.addCommonMethods(l);return l});