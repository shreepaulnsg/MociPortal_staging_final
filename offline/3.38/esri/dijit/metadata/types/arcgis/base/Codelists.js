// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/Codelists","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../../../../../kernel ./codelistData dojo/i18n!../../../nls/i18nArcGIS".split(" "),function(b,f,l,g,h,k,m){b=b(null,{constructor:function(a){f.mixin(this,a)},makeCodelist:function(a,c){a=k.makeCodelist(c);"CountryCode"!==c&&"LanguageCode"!==c&&"MonetaryUnits"!==c||a.codes.sort(function(d,e){return""===d.value?-1:""===e.value?1:"zxx"===d.value?-1:"zxx"===e.value?1:d.label===e.label?
0:d.label>e.label?1:-1});return a}});g("extend-esri")&&f.setObject("dijit.metadata.types.arcgis.base.Codelists",b,h);return b});