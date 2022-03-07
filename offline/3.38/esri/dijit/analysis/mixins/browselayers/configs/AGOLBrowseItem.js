// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/mixins/browselayers/configs/AGOLBrowseItem",["dojo/_base/lang","dojo/has","../../../../../kernel","./EnterpriseBrowseItem","../../../ItemTypes"],function(e,f,g,h,c){var d={getConfig:function(b){var a=h.getConfig(b);a.baseSections.push("all");a.baseSections.push("subscription");(-1<b.allowedItemTypes.indexOf(c.RFT)||-1<b.allowedItemTypes.indexOf(c.DLPK))&&a.baseSections.push("livingAtlas");return a}};f("extend-esri")&&e.setObject("dijit.analysis.mixins.browselayers.configs.AGOLBrowseItem",
d,g);return d});