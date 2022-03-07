// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/context/Logger",["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../kernel"],function(a,c,d,e){a=a(null,{debugEnabled:!0,constructor:function(b){c.mixin(this,b)},debug:function(){window.console&&this.debugEnabled&&(console.debug?console.debug(arguments):console.log&&console.log(arguments))},error:function(b){window.console&&(console.error?b?console.error(b):console.error(arguments):console.log&&console.log(arguments))},info:function(){window.console&&(console.info?
console.info(arguments):console.log&&console.log(arguments))},log:function(){window.console&&console.log&&console.log(arguments)},warn:function(){window.console&&(console.warn?console.warn(arguments):console.log&&console.log(arguments))},_test:function(){this.debug("Debug message.");this.log("Log message.");this.info("Info message.");this.warn("Warn message.");this.error(Error("Error message."),"additionalArgument");console.error(Error("Error2 message2."),"additionalArgument")}});d("extend-esri")&&
c.setObject("dijit.metadata.context.Logger",a,e);return a});