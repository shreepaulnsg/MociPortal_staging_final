// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/dynamic/_SelectedFeatureControlMixin",["dojo/_base/declare"],function(a){return a(null,{getSelectedFeatureID:function(){return this.select&&this.select.get("value")},setSelectedFeatureID:function(b){this.select&&(this.select.set("value",b),this.select.onChange())}})});