// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/SelectionMode",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","./RenderMode"],function(a,c,d,e,f){a=a([f],{declaredClass:"esri.layers._SelectionMode",constructor:function(b){this.featureLayer=b;this._featureMap={}},propertyChangeHandler:function(b){this._init&&0===b&&this._applyTimeFilter()},resume:function(){this.propertyChangeHandler(0)},hasAllFeatures:function(){return!this.featureLayer._hasPartialSelectedFeatures},hasUpdateError:function(){return this.featureLayer._hasSelectionError}});
d("extend-esri")&&c.setObject("layers._SelectionMode",a,e);return a});