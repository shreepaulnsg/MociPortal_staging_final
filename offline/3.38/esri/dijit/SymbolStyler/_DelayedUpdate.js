// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/SymbolStyler/_DelayedUpdate",["dojo/_base/declare"],function(b){return b(null,{declaredClass:"esri.dijit._DelayedUpdate",createUpdateTrigger:function(c,d){var a=-1;return function(){-1<a||(a=setTimeout(function(){a=-1;c.call(d)},0))}}})});