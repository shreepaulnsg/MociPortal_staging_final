// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/HorizontalSlider","dijit/form/HorizontalRuleLabels dijit/form/HorizontalSlider dojo/_base/declare dojo/_base/lang dojo/has ../kernel".split(" "),function(c,a,d,e,f,g){a=d("esri.dijit.HorizontalSlider",a,{baseClass:"esriHorizontalSlider",showButtons:!1,labels:null,constructor:function(b){b=b||{};b.labels&&(this.labels=b.labels)},buildRendering:function(){this.inherited(arguments);this.labels&&(new c({labels:this.labels})).placeAt(this.bottomDecoration)}});f("extend-esri")&&e.setObject("dijit.HorizontalSlider",
a,g);return a});