// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/context/DocumentTypes","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../../../kernel dijit/_WidgetBase ../types/arcgis/base/DocumentType".split(" "),function(a,c,l,d,e,f,g){a=a([f],{index:null,list:null,postCreate:function(){this.inherited(arguments);this._initializeTypes()},_initializeTypes:function(){var h=this.list=[],k=this.index={},b=new g({interrogationRules:[{path:"/metadata/Esri/ArcGISFormat",must:!0}]});k[b.key]=b;h.push(b)}});d("extend-esri")&&
c.setObject("dijit.metadata.context.DocumentTypes",a,e);return a});