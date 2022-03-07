// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/inspire/base/InspireDocumentType","dojo/_base/declare dojo/_base/lang dojo/has ../../../types/iso/base/IsoDocumentType ./PortalItemTransformer dojo/i18n!../../../nls/i18nInspire ../../../../../kernel".split(" "),function(c,e,f,g,h,l,k){c=c(g,{caption:null,key:null,isService:!1,metadataStandardName:null,metadataStandardVersion:null,beforeInitializeAttribute:function(d,a){var b=a.gxePath;this.isService||"/gmd:MD_Metadata/gmd:hierarchyLevel/gmd:MD_ScopeCode/@codeListValue"!==
b?this.isService||"/gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:scope/gmd:DQ_Scope/gmd:level/gmd:MD_ScopeCode/@codeListValue"!==b?this.inherited(arguments):a.optionsFilter="dataset,series":a.optionsFilter="dataset,series"},beforeInitializeElement:function(d,a){var b=a.gxePath;"/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress"===b?a.minOccurs=1:this.isService||"/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:identifier"!==
b?"/gmd:MD_Metadata/gmd:dataQualityInfo"===b?a.minOccurs=1:"/gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:report"===b?a.minOccurs=1:this.isService&&"/gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:lineage/gmd:LI_Lineage/gmd:statement"===b?a.minOccurs=0:this.inherited(arguments):a.minOccurs=1},newPortalItemTransformer:function(d){return new h}});f("extend-esri")&&e.setObject("dijit.metadata.types.inspire.base.InspireDocumentType",c,k);return c});