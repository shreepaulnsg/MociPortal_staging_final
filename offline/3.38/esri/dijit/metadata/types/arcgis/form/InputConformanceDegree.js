// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/InputConformanceDegree","dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/has ../../../../../kernel ./InputSelectBoolean ../../../form/Option dojo/i18n!../../../nls/i18nArcGIS".split(" "),function(a,f,g,h,k,l,c,d){a=a([l],{allInline:!1,serializeIfFalse:!0,falseLabel:d.dqInfo.report.ConResult.conPass._0,trueLabel:d.dqInfo.report.ConResult.conPass._1,falseValue:"0",trueValue:"1",postCreate:function(){this.inherited(arguments)},fetchOptionWidgets:function(){var e=
new g,b=[];b.push(new c({label:"",value:""}));b.push(new c({label:this.trueLabel,value:this.trueValue}));b.push(new c({label:this.falseLabel,value:this.falseValue}));e.resolve(b);return e}});h("extend-esri")&&f.setObject("dijit.metadata.types.arcgis.form.InputConformanceDegree",a,k);return a});