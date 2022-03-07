// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/gemini/base/PortalItemTransformer",["dojo/_base/declare","dojo/_base/lang","dojo/has","../../inspire/base/PortalItemTransformer","../../../../../kernel"],function(a,b,c,d,e){a=a([d],{postCreate:function(){this.inherited(arguments)},populateTransformationInfo:function(f,h,g){this.inherited(arguments);g.url.path=f.rootElement.gxePath+"/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource/gmd:linkage/gmd:URL"}});
c("extend-esri")&&b.setObject("dijit.metadata.types.gemini.base.PortalItemTransformer",a,e);return a});