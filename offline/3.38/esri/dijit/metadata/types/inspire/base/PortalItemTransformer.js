// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/inspire/base/PortalItemTransformer","dojo/_base/declare dojo/_base/lang dojo/has dojo/query dijit/registry ../../../types/iso/base/PortalItemTransformer ../../../../../kernel".split(" "),function(b,d,e,c,f,g,h){b=b([g],{postCreate:function(){this.inherited(arguments)},findInputWidget:function(k,l,m){if("tags"!==k)return this.inherited(arguments);var a;return(a=c(".gxeOtherKeywords",this.gxeDocument.rootDescriptor.domNode))&&0<a.length&&(a=c("[data-gxe-path\x3d'"+
l+"']",a[0]))&&1===a.length&&(a=f.byNode(a[0]))?a.inputWidget:null}});e("extend-esri")&&d.setObject("dijit.metadata.types.inspire.base.PortalItemTransformer",b,h);return b});