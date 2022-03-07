// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/utils/ReportQueryUtil",["esri/dijit/geoenrichment/utils/DomUtil"],function(g){var e={getPanelInfoByNode:function(c,d){var b={panelIndex:-1,panelScale:void 0};if(c.isReportContainerStackAll)return c.getInnerContainers().some(function(a){a=e.getPanelInfoByNode(a,d);if(-1!==a.panelIndex)return b=a,!0}),b;c.infographicPage.getSections().some(function(a,f){if(g.isChildOf(d,a.domNode))return b.panelIndex=f,b.panelScale=c.infographicPage.getPanelScaleAt(f),
!0});return b}};return e});