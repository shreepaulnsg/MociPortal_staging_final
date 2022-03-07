// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/PurgeOptions",["dojo/_base/declare","dojo/_base/lang","dojo/Stateful","dojo/has","../kernel"],function(a,e,f,g,h){a=a([f],{declaredClass:"esri.layers.PurgeOptions",constructor:function(b,c){this.parent=b;for(var d in c)this[d]=c[d]},_displayCountSetter:function(b){this.displayCount=b;this.parent.refresh()}});g("extend-esri")&&e.setObject("layers.PurgeOptions",a,h);return a});