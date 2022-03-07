// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/ge/LocalGEInfographic",["dojo/_base/declare","./LocalGEBase"],function(e,f){return e(f,{_fieldNameToFieldInfoCache:null,_variableIdToFieldInfoCache:null,constructor:function(c,d,a){this._fieldNameToFieldInfoCache={};this._variableIdToFieldInfoCache={};c.fieldInfos.forEach(function(b){this._fieldNameToFieldInfoCache[b.name]=b;this._variableIdToFieldInfoCache[b.variableID]=b},this);this._initGE(c.calcData.variables,d[a||0],c.calcData.calculatorName)},
_propulateAttributesFromAreaData:function(c,d){for(var a in d){var b=this._fieldNameToFieldInfoCache[a];b?c[b.variableID]=d[a]:c[a]=d[a]}},_createField:function(c,d){var a=this.inherited(arguments),b=this._variableIdToFieldInfoCache[c];b?(a.alias=b.alias,a.decimals=b.decimals,a.units=b.showPercent?"pct":b.showCurrency?"currency":a.units,a.type=b.type||a.type):a.noVariableField=!0;return a},_filterAttributeField:function(c){return!c.noVariableField}})});