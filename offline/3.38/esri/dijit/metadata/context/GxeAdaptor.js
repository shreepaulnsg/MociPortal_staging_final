// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/context/GxeAdaptor","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojo/Deferred dijit/_WidgetBase ../../../kernel".split(" "),function(b,e,l,f,c,g,h){b=b([g],{postCreate:function(){this.inherited(arguments)},afterEditDocumentLoad:function(a,d,k,m){},afterViewDocumentLoad:function(a,d){},deleteMetadata:function(){var a=new c;a.resolve();return a},getAllowEditMetadata:function(){return!1},getAllowDeleteMetadata:function(){return!1},getAllowPullItem:function(){return!1},
getAllowPushToItem:function(){return!1},getOriginalXml:function(){return null},pullItem:function(a){a=new c;a.resolve();return a},saveXml:function(a,d,k){a=new c;a.resolve();return a},viewHtml:function(){var a=new c;a.resolve();return a}});f("extend-esri")&&e.setObject("dijit.metadata.context.GxeAdaptor",b,h);return b});