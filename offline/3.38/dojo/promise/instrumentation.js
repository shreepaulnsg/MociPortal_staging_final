/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/promise/instrumentation",["./tracer","../has","../_base/lang","../_base/array"],function(g,l,h,m){function n(b,a,c){if(!b||!1!==b.log){var d="";b&&b.stack&&(d+=b.stack);a&&a.stack&&(d+="\n    ----------------------------------------\n    rejected"+a.stack.split("\n").slice(1).join("\n").replace(/^\s+/," "));c&&c.stack&&(d+="\n    ----------------------------------------\n"+c.stack);console.error(b,d)}}function r(b,a,c,d){a||n(b,c,d)}function t(b,a,c,d){m.some(e,function(p){if(p.error===
b)return a&&(p.handled=!0),!0})||e.push({error:b,rejection:c,handled:a,deferred:d,timestamp:(new Date).getTime()});k||(k=setTimeout(q,f))}function q(){var b=(new Date).getTime(),a=b-f;e=m.filter(e,function(c){return c.timestamp<a?(c.handled||n(c.error,c.rejection,c.deferred),!1):!0});k=e.length?setTimeout(q,e[0].timestamp+f-b):!1}l.add("config-useDeferredInstrumentation","report-unhandled-rejections");var e=[],k=!1,f=1E3;return function(b){var a=l("config-useDeferredInstrumentation");if(a){g.on("resolved",
h.hitch(console,"log","resolved"));g.on("rejected",h.hitch(console,"log","rejected"));g.on("progress",h.hitch(console,"log","progress"));var c=[];"string"===typeof a&&(c=a.split(","),a=c.shift());if("report-rejections"===a)b.instrumentRejected=r;else if("report-unhandled-rejections"===a||!0===a||1===a)b.instrumentRejected=t,f=parseInt(c[0],10)||f;else throw Error("Unsupported instrumentation usage \x3c"+a+"\x3e");}}});