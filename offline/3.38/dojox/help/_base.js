//>>built
define("dojox/help/_base",["dojo","dijit","dojox","dojo/require!dojox/rpc/Service,dojo/io/script"],function(g,r,a){g.provide("dojox.help._base");g.require("dojox.rpc.Service");g.require("dojo.io.script");g.experimental("dojox.help");console.warn("Script causes side effects (on numbers, strings, and booleans). Call dojox.help.noConflict() if you plan on executing code.");a.help={locate:function(b,c,h){h=h||20;var f=[],e={};if(c){g.isArray(c)||(c=[c]);for(var l=0,d;d=c[l];l++){var k=d;if(g.isString(d)){if(d=
g.getObject(d),!d)continue}else if(g.isObject(d))k=d.__name__;else continue;f.push(d);k&&(k=k.split(".")[0],e[k]||-1!=g.indexOf(a.help._namespaces,k)||a.help.refresh(k),e[k]=!0)}}f.length||(f.push({__name__:"window"}),g.forEach(a.help._namespaces,function(q){e[q]=!0}));b=b.toLowerCase();c=[];l=0;a:for(;d=f[l];l++){var n=d.__name__||"";k=g.some(f,function(q){q=q.__name__||"";return 0==n.indexOf(q+".")});if(n&&!k){k=n.split(".")[0];d=[];if("window"==n)for(k in a.help._names)g.isArray(a.help._names[k])&&
(d=d.concat(a.help._names[k]));else d=a.help._names[k];k=0;for(var m;m=d[k];k++)if(("window"==n||0==m.indexOf(n+"."))&&-1!=m.toLowerCase().indexOf(b)&&".prototype"!=m.slice(-10)){var p=g.getObject(m);if(p&&(c.push([m,p]),c.length==h))break a}}}a.help._displayLocated(c);if(!g.isMoz)return""},refresh:function(b,c){2>arguments.length&&(c=!0);a.help._recurse(b,c)},noConflict:function(b){if(arguments.length)return a.help._noConflict(b);for(;a.help._overrides.length;){var c=a.help._overrides.pop(),h=c[0];
c=c[1];h[c]=a.help._noConflict(h[c])}},init:function(b,c){b&&a.help._namespaces.concat(b);g.addOnLoad(function(){g.require=function(h){return function(){a.help.noConflict();h.apply(g,arguments);a.help._timer&&clearTimeout(a.help._timer);a.help._timer=setTimeout(function(){g.addOnLoad(function(){a.help.refresh();a.help._timer=!1})},500)}}(g.require);a.help._recurse()})},_noConflict:function(b){if(b instanceof String)return b.toString();if(b instanceof Number)return+b;if(b instanceof Boolean)return 1==
b;g.isObject(b)&&(delete b.__name__,delete b.help);return b},_namespaces:["dojo","dojox","dijit","djConfig"],_rpc:new a.rpc.Service(g.moduleUrl("dojox.rpc.SMDLibrary","dojo-api.smd")),_attributes:["summary","type","returns","parameters"],_clean:function(b){for(var c={},h=0,f;f=a.help._attributes[h];h++){var e=b["__"+f+"__"];e&&(c[f]=e)}return c},_displayLocated:function(b){throw Error("_displayLocated should be overridden in one of the dojox.help packages");},_displayHelp:function(b,c){throw Error("_displayHelp should be overridden in one of the dojox.help packages");
},_addVersion:function(b){if(b.name){b.version=[g.version.major,g.version.minor,g.version.patch].join(".");var c=b.name.split(".");if("dojo"==c[0]||"dijit"==c[0]||"dojox"==c[0])b.project=c[0]}return b},_stripPrototype:function(b){var c=b.replace(/\.prototype(\.|$)/g,"."),h=c;"."==c.slice(-1)?h=c=c.slice(0,-1):c=b;return[h,c]},_help:function(){for(var b=a.help._stripPrototype(this.__name__)[0],c=[],h=0,f;f=a.help._attributes[h];h++)this["__"+f+"__"]||c.push(f);a.help._displayHelp(!0,{name:this.__name__});
!c.length||this.__searched__?a.help._displayHelp(!1,a.help._clean(this)):(this.__searched__=!0,a.help._rpc.get(a.help._addVersion({name:b,exact:!0,attributes:c})).addCallback(this,function(e){this.toString===a.help._toString&&this.toString(e);if(e&&e.length){e=e[0];for(var l=0,d;d=a.help._attributes[l];l++)e[d]&&(this["__"+d+"__"]=e[d]);a.help._displayHelp(!1,a.help._clean(this))}else a.help._displayHelp(!1,!1)}));if(!g.isMoz)return""},_parse:function(b){delete this.__searching__;if(b&&b.length){if(b=
b[0].parameters){var c=["function ",this.__name__,"("];this.__parameters__=b;for(var h=0,f;f=b[h];h++){h&&c.push(", ");c.push(f.name);if(f.types){for(var e=[],l=0,d;d=f.types[l];l++)e.push(d.title);e.length&&(c.push(": "),c.push(e.join("|")))}f.repeating&&c.push("...");f.optional&&c.push("?")}c.push(")");this.__source__=this.__source__.replace(/function[^\(]*\([^\)]*\)/,c.join(""))}this.__output__&&(delete this.__output__,console.log(this))}else a.help._displayHelp(!1,!1)},_toStrings:{},_toString:function(b){if(!this.__source__)return this.__name__;
var c=!this.__parameters__;this.__parameters__=[];b?a.help._parse.call(this,b):c&&(this.__searching__=!0,a.help._toStrings[a.help._stripPrototype(this.__name__)[0]]=this,a.help._toStringTimer&&clearTimeout(a.help._toStringTimer),a.help._toStringTimer=setTimeout(function(){a.help.__toString()},50));if(!c||!this.__searching__)return this.__source__;var h="function Loading info for "+this.__name__+"... (watch console for result) {}";return g.isMoz?{toString:g.hitch(this,function(){this.__output__=!0;
return h})}:(this.__output__=!0,h)},__toString:function(){a.help._toStringTimer&&clearTimeout(a.help._toStringTimer);var b=[];a.help.noConflict(a.help._toStrings);for(var c in a.help._toStrings)b.push(c);for(;b.length;)a.help._rpc.batch(a.help._addVersion({names:b.splice(-50,50),exact:!0,attributes:["parameters"]})).addCallback(this,function(h){for(var f=0,e;e=h[f];f++){var l=a.help._toStrings[e.name];l&&(a.help._parse.call(l,[e]),delete a.help._toStrings[e.name])}})},_overrides:[],_recursions:[],
_names:{},_recurse:function(b,c){2>arguments.length&&(c=!0);var h=[];if(b&&g.isString(b))a.help.__recurse(g.getObject(b),b,b,h,c);else for(var f=0,e;e=a.help._namespaces[f];f++)window[e]&&(a.help._recursions.push([window[e],e,e]),window[e].__name__=e,window[e].help||(window[e].help=a.help._help));for(;a.help._recursions.length;)f=a.help._recursions.shift(),a.help.__recurse(f[0],f[1],f[2],h,c);for(f=0;e=h[f];f++)delete e.__seen__},__recurse:function(b,c,h,f,e){for(var l in b)if(!l.match(/([^\w_.$]|__[\w_.$]+__)/)){var d=
b[l];if(!("undefined"==typeof d||d===document||d===window||d===a.help._toString||d===a.help._help||null===d||+g.isIE&&d.tagName||d.__seen__)){var k=g.isFunction(d),n=g.isObject(d)&&!g.isArray(d)&&!d.nodeType,m=h?h+"."+l:l;if("dojo._blockAsync"!=m){if(!d.__name__){var p=null;g.isString(d)?p=String:"number"==typeof d?p=Number:"boolean"==typeof d&&(p=Boolean);p&&(d=b[l]=new p(d))}d.__seen__=!0;d.__name__=m;(a.help._names[c]=a.help._names[c]||[]).push(m);f.push(d);k||a.help._overrides.push([b,l]);(k||
n)&&e&&a.help._recursions.push([d,c,m]);k&&(d.__source__||(d.__source__=d.toString().replace(/^function\b ?/,"function "+m)),d.toString===Function.prototype.toString&&(d.toString=a.help._toString));d.help||(d.help=a.help._help)}}}}}});