//>>built
define("dojox/lang/aspect/tracer",["dojo","dijit","dojox"],function(d,h,f){d.provide("dojox.lang.aspect.tracer");(function(){var b=f.lang.aspect,e=function(a){this.method=a?"group":"log";a&&(this.after=this._after)};d.extend(e,{before:function(){var a=b.getContext(),c=a.joinPoint,g=Array.prototype.join.call(arguments,", ");console[this.method](a.instance,"\x3d\x3e",c.targetName+"("+g+")")},afterReturning:function(a){var c=b.getContext().joinPoint;"undefined"!=typeof a?console.log(c.targetName+"() returns:",
a):console.log(c.targetName+"() returns")},afterThrowing:function(a){console.log(b.getContext().joinPoint.targetName+"() throws:",a)},_after:function(a){console.groupEnd()}});b.tracer=function(a){return new e(a)}})()});