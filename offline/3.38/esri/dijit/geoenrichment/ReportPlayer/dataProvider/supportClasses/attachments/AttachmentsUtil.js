// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/attachments/AttachmentsUtil",[],function(){return{getFeatureAttachmentInfos:function(b){var a=b.getLayer();if(a&&a.hasAttachments&&a.queryAttachmentInfos&&a.objectIdField)return a.queryAttachmentInfos(b.attributes[a.objectIdField])}}});