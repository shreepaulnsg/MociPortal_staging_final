// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/EnrichLayer.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e \r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"geoenrichLayerIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.enrichLayer}\x3c/label\x3e\r\n              \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.enrichLayer}\x3c/a\x3e\r\n              \x3c/nav\x3e               \r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e                \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n         \x3ctbody\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_aggregateToolDescription" \x3e${i18n.enrichDefine}\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e           \r\n          \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n            \x3ctd  colspan\x3d"3"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e            \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3c!--\x3clabel class\x3d""\x3e${i18n.chooseDataCollectionLabel}\x3c/label\x3e--\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"DataCollection"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3c!--\x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e--\x3e          \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cdiv style\x3d"width:95%;height:200px;border:1px #EFEEEF solid;" data-dojo-attach-point\x3d"_analysisVariablesCtr" class\x3d"ShoppingCart"\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"_selectedList" style\x3d"overflow-y:auto;height:100%;"\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"_selectLabelDiv" class\x3d"selectLabel"\x3e${i18n.clickDataVar}\x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd \x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriTertiaryActionBtn" data-dojo-attach-point\x3d"_addBtn" data-dojo-attach-event\x3d"onClick:_handleShowDataDialogClick"\x3e\r\n              ${i18n.selectDataVar}\r\n              \x3c/div\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3ctable class\x3d"esriFormTable calcite"\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd class\x3d"ShoppingCart_CounterTD" style\x3d"padding-right:0"\x3e\r\n                    \x3cdiv class\x3d"ShoppingCart_CounterDivLeftBorder"\x3e\x3c/div\x3e\r\n                    \x3cdiv data-dojo-attach-point\x3d"varCounter" class\x3d"ShoppingCart_CounterDiv"\x3e0\x3c/div\x3e\r\n                    \x3cdiv class\x3d"ShoppingCart_CounterDivRightBorder"\x3e\x3c/div\x3e\r\n                  \x3c/td\x3e\r\n                  \x3ctd class\x3d"ShoppingCart_LabelTd" style\x3d"white-space:nowrap;"\x3e\r\n                      \x3cdiv\x3e${i18n.selectedVars}\x3c/div\x3e\r\n                  \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n              \x3c/table\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n            \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_labelOne" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_measurelabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.defAreasLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"BufferOption"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd style\x3d"padding:0.25em;" colspan\x3d"3"\x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_bufferTypeSelect" class\x3d"esriLeadingMargin1 longInput esriLongLabel esriAnalysisDriveMode"\x3e\r\n              \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd style\x3d"padding-right:0;padding-bottom:0;width:20%;"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-event\x3d"onChange:_handleDistUnitsChange" data-dojo-props\x3d"intermediateChanges:true,value:1,required:true,missingMessage:\'${i18n.distanceMsg}\',constraints:{min:0}" data-dojo-attach-point\x3d"_distanceInput" class\x3d"esriLeadingMargin1"  style\x3d"width:75%;"\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;padding-bottom:0;width:60%;"\x3e\r\n              \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"onChange:_handleDistUnitsChange" data-dojo-attach-point\x3d"_distanceUnitsSelect" style\x3d"width:80%;table-layout:fixed;"\x3e\r\n                \x3coption value\x3d"Seconds"\x3e${i18n.seconds}\x3c/option\x3e\r\n                \x3coption value\x3d"Minutes" selected\x3d"selected"\x3e${i18n.minutes}\x3c/option\x3e\r\n                \x3coption value\x3d"Hours"\x3e${i18n.hours}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_useTrafficRow"\x3e\r\n            \x3ctd style\x3d"padding:0" colspan\x3d"3"\x3e\r\n              \x3cdiv style\x3d"width:100%;" data-dojo-type\x3d"esri/dijit/analysis/TrafficTime" data-dojo-attach-point\x3d"_trafficTimeWidget"\x3e\x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d""\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin2 esriSelectLabel"  data-dojo-attach-point\x3d"_returnBoundariesLabel"\x3e\r\n                \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_returnBoundariesCheck"\x3e\x3c/div\x3e\r\n               ${i18n.returnBoundingAreas}\r\n              \x3c/label\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e    \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"longTextInput esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputName"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 esriOutputText"  data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/td\x3e                \r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n               \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                 \x3cinput class\x3d"longInput esriFolderSelect" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true"\x3e\x3c/input\x3e\r\n               \x3c/div\x3e              \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e                                      \r\n        \x3c/tbody\x3e         \r\n       \x3c/table\x3e\r\n     \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e    \r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"" data-dojo-attach-point\x3d"_dataDialog" data-dojo-props\x3d"closable:false" class\x3d"dataBrowser"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/geoenrichment/DataBrowser"  class\x3d"calcite esriAnalysisEnrichDataBrowser" data-dojo-props\x3d"backButton:null,allowHierarchies:true" data-dojo-attach-point\x3d"_databrowser"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e    \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/EnrichLayer","require dojo/aspect dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/fx/easing dojo/number dojo/on dojo/Evented dojo/store/Observable dojo/dom-geometry dojo/store/Memory dojo/window dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/FilteringSelect dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/form/NumberTextBox dijit/layout/ContentPane dijit/Dialog dgrid/List ../../kernel ../../lang ../../urlUtils ./AnalysisBase ./_AnalysisOptions ./CreditEstimator ./utils ./TrafficTime ../geoenrichment/config ../geoenrichment/DataBrowser ../geoenrichment/DataBrowser/StorageList ../../tasks/geoenrichment/GeoenrichmentTask ../../geometry/Extent ../../geometry/webMercatorUtils ../../geometry/Point ./AnalysisRegistry dojo/i18n!../../nls/jsapi dojo/text!./templates/EnrichLayer.html".split(" "),
function(C,D,J,d,n,v,k,E,K,F,w,g,x,y,G,p,H,t,L,ba,ca,da,ea,M,N,O,P,Q,R,fa,ha,ia,ja,ka,la,ma,na,oa,pa,qa,S,T,m,U,V,W,ra,h,sa,q,ta,I,X,z,Y,Z,A,B,aa){C=J([N,O,P,Q,R,V,W],{declaredClass:"esri.dijit.analysis.EnrichLayer",templateString:aa,widgetsInTemplate:!0,inputLayer:null,outputLayerName:null,distance:null,enableTravelModes:!0,showTrafficWidget:!1,_isBufferSelectionEnabled:!0,analysisVariables:null,i18n:null,toolName:"EnrichLayer",helpFileName:"EnrichLayer",resultParameter:"enrichedLayer",constructor:function(a){this._pbConnects=
[];this._statsRows=[];this._isLineEnabled=!1;a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);n.forEach(this._pbConnects,v.disconnect);delete this._pbConnects;this._driveTimeClickHandle&&(v.disconnect(this._driveTimeClickHandle),this._driveTimeClickHandle=null)},postMixInProperties:function(){this.inherited(arguments);d.mixin(this.i18n,B.bufferTool);d.mixin(this.i18n,B.driveTimes);d.mixin(this.i18n,B.enrichLayerTool)},postCreate:function(){this.inherited(arguments);
p.add(this._form.domNode,"esriSimpleForm");h.getNetworkAnalysisLimits(this).then(d.hitch(this,function(a){this.limits=a;this._handleDistUnitsChange()}));this._outputLayerInput.set("validator",d.hitch(this,this.validateServiceName));this._buildUI();this.watch("analysisVariables",d.hitch(this,this._refreshGrid))},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_handleShowCreditsClick:function(a){a.preventDefault();if(this._form.validate()&&this.validateSelectedGrid()){a=
{};var b=this.get("analysisVariables");var c=[];var f=[];n.forEach(b,function(e){-1!==e.indexOf(".*")?f.push(e.split(".*")[0]):c.push(e)});a.inputLayer=k.toJson(this.constructAnalysisInputLyrObj(this.inputLayer));if(this._isBufferSelectionEnabled||this._isLineEnabled)b=this._bufferTypeSelect.getOptions(this._bufferTypeSelect.get("value")),a.bufferType=b.travelMode?k.toJson(b.travelMode):this._bufferTypeSelect.get("value"),a.distance=this.get("distance"),a.units=this._distanceUnitsSelect.get("value");
this.get("country")&&(a.country=this.get("country"));f&&0<f.length&&(a.dataCollections=k.toJson(f));c&&0<c.length&&(a.analysisVariables=k.toJson(c));this.get("showTrafficWidget")&&this._trafficTimeWidget.get("checked")&&(a.TimeOfDay=this._trafficTimeWidget.get("timeOfDay"));this.returnFeatureCollection||(a.OutputName=k.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=k.toJson({extent:this.map.extent._normalize(!0)}));
this.getCreditsEstimate(this.toolName,a).then(d.hitch(this,function(e){e&&e.additionalInfo&&1===e.additionalInfo.messages.length&&(e.infoMessage=B.analysisMsgCodes[e.additionalInfo.messages[0].messageCode]);this._usageForm.set("content",e);this._usageDialog.show()}))}},_handleSaveBtnClick:function(){if(this._form.validate()&&this.validateSelectedGrid()){var a={},b={};var c=!1;var f={};this._saveBtn.set("disabled",!0);c=this.get("analysisVariables");var e=[];var l=[];n.forEach(c,function(u){-1!==u.indexOf(".*")?
l.push(u.split(".*")[0]):e.push(u)});a.inputLayer=k.toJson(this.constructAnalysisInputLyrObj(this.inputLayer));if(this._isBufferSelectionEnabled||this._isLineEnabled)c=this._bufferTypeSelect.getOptions(this._bufferTypeSelect.get("value")),a.bufferType=c.travelMode?k.toJson(c.travelMode):this._bufferTypeSelect.get("value"),a.distance=this.get("distance"),a.units=this._distanceUnitsSelect.get("value"),a.returnBoundaries=this._returnBoundariesCheck.get("checked");this.get("country")&&(a.country=this.get("country"));
l&&0<l.length&&(a.dataCollections=l);e&&0<e.length&&(a.analysisVariables=e);this.get("showTrafficWidget")&&this._trafficTimeWidget.get("checked")&&(a.TimeOfDay=this._trafficTimeWidget.get("timeOfDay"));if(c=this.inputLayer.geometryType===A.GeometryTypes.Polygon||this.inputLayer.geometryType!==A.GeometryTypes.Polygon&&!a.returnBoundaries)if(this.rerun&&this.OutputName&&this.OutputName.layerProperties)f.layerProperties=this.OutputName.layerProperties;else{var r=(c=this.inputLayer.toJson())&&c.layerDefinition&&
c.layerDefinition.drawingInfo?c.layerDefinition.drawingInfo:this.inputLayer.drawingInfo?this.inputLayer.drawingInfo:{};m.isDefined(this.inputLayer.renderer)&&(r.renderer=this.inputLayer.renderer.toJson());m.isDefined(this.inputLayer.opacity)&&(r.transparency=100*(1-this.inputLayer.opacity));m.isDefined(this.inputLayer.labelingInfo)&&(r.labelingInfo=[],n.forEach(this.inputLayer.labelingInfo,function(u){r.labelingInfo.push(u.toJson())}));m.isDefined(this.inputLayer.showLabels)&&(r.showLabels=this.inputLayer.showLabels);
f.layerProperties=[{drawingInfo:r}]}this.returnFeatureCollection||(f.serviceProperties={name:this._outputLayerInput.get("value")});a.OutputName=k.toJson(f);this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=k.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(f={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(f.extent=this.map.extent._normalize(!0)),a.context=k.toJson(f));b.jobParams=a;b.itemParams={description:w.substitute(this.i18n.itemDescription,
{inputLayerName:this.inputLayer.name}),tags:w.substitute(this.i18n.itemTags,{inputLayerName:this.inputLayer.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this.get("folderId"));this.execute(b)}},_handleDistUnitsChange:function(a){h.updateModeConstraints({validateWidget:this._distanceInput,type:this._bufferTypeSelect.get("value"),units:this._distanceUnitsSelect.get("value"),limits:this.limits,travelMode:this._bufferTypeSelect.getOptions(this._bufferTypeSelect.get("value"))})},
_handleDistanceTypeChange:function(a,b){var c=this._bufferTypeSelect.getOptions(this._bufferTypeSelect.get("value"));if(m.isDefined(c)){var f="Time"===c.units;var e="Time"===c.units&&("driving"===c.modei18nKey||"trucking"===c.modei18nKey)}else f=-1!==a.indexOf("Time"),e="DrivingTime"===a;this.set("bufferType",a);this.get("showTrafficWidget")&&(e&&h.getRoutingUtilities(this).then(d.hitch(this,function(l){this._trafficTimeWidget.set("trafficSupport",l.networkDataset&&l.networkDataset.trafficSupport)})),
g.set(this._useTrafficRow,"display",e?"":"none"),this._trafficTimeWidget.set("disabled",!e),this._trafficTimeWidget.set("reset",!e));f?(this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Seconds",label:this.i18n.seconds},{value:"Minutes",label:this.i18n.minutes,selected:"selected"},{value:"Hours",label:this.i18n.hours}])):(this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Miles",
label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]));b&&this.units&&this._distanceUnitsSelect.set("value",this.units);h.updateModeConstraints({validateWidget:this._distanceInput,type:a,units:this._distanceUnitsSelect.get("value"),limits:this.limits,travelMode:c})},_save:function(){},_buildUI:function(){var a=!0;this.signInPromise.then(d.hitch(this,
h.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));!this.favorites&&this.get("enrichOptions")?this.set("favorites",this.enrichOptions.favorites):this.favorites||(this.favorites=new I);this._addBtn.set("disabled",!0);g.set(this._dataDialog.titleNode,"display","none");g.set(this._dataDialog.titleBar,"display","none");g.set(this._dataDialog.containerNode,"padding","0");g.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this._loadConnections();
h.populateTravelModes({selectWidget:this._bufferTypeSelect,addStraightLine:!0,widget:this,enableTravelModes:this.get("enableTravelModes"),value:this.bufferType});this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!h.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),h.populateAnalysisLayers(this,"inputLayer","inputLayers"),h.addReadyToUseLayerOption(this,
[this._analysisSelect]));this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this.inputLayer&&(this._getSourceCountry(a),this._updateAnalysisLayerUI(a));g.set(this._useTrafficRow,"display",this.get("showTrafficWidget")?"":"none");g.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(d.hitch(this,function(b){this.folderStore=b;h.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,
folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));g.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");this.list=new S({renderRow:d.hitch(this,this._renderVariableRow)},this._selectedList);m.isDefined(this.returnBoundaries)&&this._returnBoundariesCheck.set("checked",this.returnBoundaries);this.units&&this._distanceUnitsSelect.set("value",this.units)},startup:function(){this.list.startup();g.set(this._selectLabelDiv,
"display","block");g.set(this._selectedList,"display","none")},_getAGOLEnv:function(a){return a&&-1!==a.indexOf("dev")?"dev":a&&-1!==a.indexOf("qa")?"qa":""},_getSourceCountry:function(a){var b,c;this.inputLayer&&this.signInPromise.then(d.hitch(this,function(f){this.analysisGpServer?b=this._getAGOLEnv(this.analysisGpServer):this.portalUrl&&(b=this._getAGOLEnv(this.portalUrl));q.portalUrl=this.portalUrl;this._task||(this.helperServices||this.isSingleTenant?this.helperServices&&this.helperServices.geoenrichment&&
(q.server=this.helperServices.geoenrichment.url):q.server=U.getProtocolForWebResource()+"//geoenrich"+b+".arcgis.com/arcgis/rest/services/World/GeoenrichmentServer",q.server&&(this._task=new X(q.server),this._task.token=q.token));this._databrowser.pages.cat||(this._databrowser.set("favorites",this.favorites),this._databrowser.startup());m.isDefined(this.inputLayer)&&(c=this._getPoint(this.inputLayer,a));c?this._task.getCountries(c).then(d.hitch(this,function(e){e instanceof Array&&(this._databrowser.set("countryID",
this.country||e[0]),this._databrowser.pages.categories._changeCountryPromise.then(d.hitch(this,function(){this.analysisVariables&&0<this.analysisVariables.length&&(this._databrowser.set("selection",this.analysisVariables),this._setRefreshHandle());this._databrowser.pages.categories.countrySelect.set("value",e[0]);this.set("country",e[0]);this._addBtn.set("disabled",!1)})))}),d.hitch(this,function(e){this._addBtn.set("disabled",!1)})):this._addBtn.set("disabled",!1)}))},_setRefreshHandle:function(){this._databrowser._shoppingCart&&
!this._refHandle&&(this._refHandle=D.after(this._databrowser._shoppingCart,"_updateLabel",d.hitch(this,function(){this._refreshGrid();this._refHandle.remove()})))},_updateAnalysisLayerUI:function(a){var b;if(this.inputLayer){x.set(this._aggregateToolDescription,"innerHTML",w.substitute(this.i18n.enrichDefine,{inputLayerName:this.inputLayer.name}));(b=this.inputLayer.geometryType===A.GeometryTypes.Polygon)?(this._isLineEnabled=this._isBufferSelectionEnabled=!1,this._updateTravelModes(!1)):this.inputLayer.geometryType===
A.GeometryTypes.Line?(this._updateTravelModes(!1),this._isLineEnabled=!0,this._isBufferSelectionEnabled=!1):(this._updateTravelModes(!0),this._isBufferSelectionEnabled=!0,this._isLineEnabled=!1);this._returnBoundariesCheck.set("disabled",b);p.toggle(this._returnBoundariesLabel,"esriAnalysisTextDisabled",b);var c=!this._isBufferSelectionEnabled&&!this._isLineEnabled;if(b=this._bufferTypeSelect.getOptions("StraightLine"))c?(b.label=b.label.replace("esriStraightLineDistanceIcon","esriStraightLineDistanceDisabledIcon"),
b.label=b.label.replace("esriLeadingMargin4","esriLeadingMargin4 esriAnalysisTextDisabled"),b.disabled=!0):(b.label=b.label.replace("esriStraightLineDistanceDisabledIcon","esriStraightLineDistanceIcon"),b.label=b.label.replace("esriAnalysisTextDisabled",""),b.disabled=!1),this._bufferTypeSelect.updateOption(b);p.toggle(this._distanceInput,"disabled",c);this._distanceInput.set("disabled",c);p.toggle(this._distanceUnitsSelect,"disabled",c);this._distanceUnitsSelect.set("disabled",c);p.toggle(this._bufferTypeSelect,
"disabled",c);this._bufferTypeSelect.set("disabled",c);this._isLineEnabled&&a&&this._bufferTypeSelect.set("value","StraightLine");a&&(this.outputLayerName=w.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name}));this._outputLayerInput.set("value",this.outputLayerName)}},_renderVariableRow:function(a){var b=y.create("div",{"class":"ShoppingCartRow"}),c=y.create("div",{"class":"ShoppingCartRowCloser ShoppingCartRowFloatEnd"},b);L(c,"click",d.hitch(this,this._handledRemoveVarClick,a));
y.create("div",{"class":"dijitInline ShoppingCartRowSpacer ShoppingCartRowFloatEnd",innerHTML:"\x26nbsp;"},b);y.create("div",{"class":"TrimWithEllipses ShoppingCartRowLabel",innerHTML:a.title},b);return b},_handledRemoveVarClick:function(a){this._databrowser._shoppingCart._onRemove(a);this._databrowser._onOK()},validateSelectedGrid:function(){var a;(a=this.get("analysisVariables")&&0!==this.get("analysisVariables").length)?g.set(this._analysisVariablesCtr,"borderColor","#EFEEEF"):(M.scrollIntoView(this._analysisVariablesCtr),
g.set(this._analysisVariablesCtr,"borderColor","#f94"));return a},validateDistance:function(){var a=this,b=[],c;this.set("distance");var f=d.trim(this._distanceInput.get("value"));if(!f)return!1;var e=t.parse(f);if(isNaN(e))return b.push(0),!1;f=t.format(e,{locale:"root"});m.isDefined(f)?m.isDefined(f)||(f=t.format(e,{locale:"en-us"})):f=t.format(e,{locale:"en"});m.isDefined(f)&&(c=d.trim(f).match(/\D/g));c&&n.forEach(c,function(l){"."===l||","===l?b.push(1):"-"===l&&"polygon"===a.inputType?b.push(1):
b.push(0)});return-1!==n.indexOf(b,0)?!1:!0},_loadConnections:function(){this.on("start",d.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",d.hitch(this,"_onClose",!1));this._connect(this._databrowser,"onOK",d.hitch(this,this._handleDataBrowserOk));this._connect(this._databrowser,"onCancel",d.hitch(this,this._handleDataBrowserCancel));this.own(this.on("travelmodes-added",d.hitch(this,function(){v.connect(this._bufferTypeSelect,"onChange",d.hitch(this,this._handleDistanceTypeChange));
this._handleDistanceTypeChange(this.bufferType,!0);this._updateAnalysisLayerUI(!(this.bufferType||this.outputLayerName))})));D.after(this._databrowser,"loadPage",d.hitch(this,this._setCalciteButtons));this.watch("enableTravelModes",d.hitch(this,function(a,b,c){this._updateTravelModes(c)}));this.map.on("extent-change",d.hitch(this,function(){this._getSourceCountry(!0)}))},_handleBrowseItemsSelect:function(a,b){a&&a.selection&&h.addAnalysisReadyLayer({item:a.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,
browseDialog:a.dialog||this._browsedlg,widget:this},b).always(d.hitch(this,function(){this._updateAnalysisLayerUI(!0);this._isAnalysisSelect=!1}))},_handleDataBrowserOk:function(a){this.set("analysisVariables",this._databrowser.selection);this._handleFavoritesUpdate();this._dataDialog.hide();this._hideDataBwsrSearchToolTip()},_handleDataBrowserCancel:function(){this._handleFavoritesUpdate();this._dataDialog.hide();this._hideDataBwsrSearchToolTip()},_hideDataBwsrSearchToolTip:function(){this._databrowser&&
this._databrowser.pages&&this._databrowser.pages.categories&&this._databrowser.pages.categories.txbSearch&&this._databrowser.pages.categories.txbSearch.hideTooltip();this._databrowser&&this._databrowser.pages&&this._databrowser.pages.collections&&this._databrowser.pages.collections.txbSearch&&this._databrowser.pages.collections.txbSearch.hideTooltip()},_handleShowDataDialogClick:function(a){this._databrowser.set("favorites",this.favorites);this._dataDialog.show()},_setCalciteButtons:function(){G(".calcite .DataCollectionButton").forEach(function(a){p.add(a,
"btn secondary")});G(".calcite .Wizard_Button").forEach(function(a,b){x.get(a,"innerHTML")===this._databrowser.okButton?p.add(a,"btn secondary"):p.add(a,"btn transparent")},this)},_refreshGrid:function(a,b,c){a=[];for(var f in this._databrowser._shoppingCart._content)this._databrowser._shoppingCart._content.hasOwnProperty(f)&&a.push(this._databrowser._shoppingCart._content[f]);g.set(this._selectLabelDiv,"display",0===a.length?"block":"none");g.set(this._selectedList,"display",0===a.length?"none":
"block");x.set(this.varCounter,"innerHTML",a.length.toString());this.list.refresh();this.list.renderArray(a)},_showMessages:function(a){x.set(this._bodyNode,"innerHTML",a);E.fadeIn({node:this._errorMessagePane,easing:H.quadIn,onEnd:d.hitch(this,function(){g.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(a){a&&a.preventDefault();E.fadeOut({node:this._errorMessagePane,easing:H.quadOut,onEnd:d.hitch(this,function(){g.set(this._errorMessagePane,{display:"none"})})}).play()},
addQueryParameters:function(){return'(-typekeywords:"AnalysisRestricted")'},_handleAnalysisLayerChange:function(a){this._isAnalysisSelect=!0;if("browse"===a||"browselayers"===a)this._createBrowseItems({browseValue:a,disabledSubResources:[this.inputLayer],addQueryParameters:this.addQueryParameters},{},this._analysisSelect);else if(this.inputLayer=this.inputLayers[a])this._getSourceCountry(this.inputLayer.analysisReady),this._updateAnalysisLayerUI(!0)},_handleFavoritesUpdate:function(){var a={favorites:this.get("favorites")};
this.set("enrichOptions",a)},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){this.inputLayer=a},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setInputLayersAttr:function(a){this.inputLayers=a},_setAnalysisVariablesAttr:function(a){this._set("analysisVariables",a)},_getAnalysisVariablesAttr:function(){return this.analysisVariables},_setShowTrafficWidgetAttr:function(a){this.showTrafficWidget=
a},_getShowTrafficWidgetAttr:function(){return this.showTrafficWidget},_setBufferTypeAttr:function(a){this.bufferType=a},_getBufferTypeAttr:function(){return this.bufferType},_setDistanceAttr:function(a){a&&(this.distance=t.format(a));this._distanceInput&&this._distanceInput.set("value",this.distance)},_getDistanceAttr:function(){return this.distance=this._distanceInput.get("value")},_setCountryAttr:function(a){this.country=a},_getCountryAttr:function(){this._databrowser&&(this.country=this._databrowser.get("countryID"));
return this.country},_setEnableTravelModesAttr:function(a){this._set("enableTravelModes",a)},validateServiceName:function(a){return h.validateServiceName(a,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_connect:function(a,b,c){this._pbConnects.push(v.connect(a,b,c))},_updateTravelModes:function(a){var b=this._bufferTypeSelect.getOptions();n.forEach(b,function(c){"StraightLine"!==c.value&&(c.disabled=!a,c.label=a?c.label.replace("esriAnalysisTextDisabled",""):c.label.replace("esriLeadingMargin4",
"esriLeadingMargin4 esriAnalysisTextDisabled"))});this._bufferTypeSelect.updateOption(b)},_getPoint:function(a,b){if(a.graphics&&0<a.graphics.length&&-1!==n.indexOf(["point","polygon","polyline"],a.graphics[0].type))return a.graphics[0].geometry;a=this.map.extent||b?(new z(this.map.extent)).getCenter():a.extent?(new z(a.extent)).getCenter():a.initialExtent?(new z(a.initialExtent)).getCenter():a.fullExtent?(new z(a.fullExtent)).getCenter():null;return new Z(Y.xyToLngLat(a.x,a.y))},_getFavoritesAttr:function(){return this.favorites},
_setFavoritesAttr:function(a){if(a&&a.storage){var b={get:function(c){return this[c]},set:function(c,f){this[c]=f}};d.mixin(b,a.storage);this._set("favorites",new I({storage:b}))}},_getEnrichOptionsAttr:function(){if(window.localStorage){var a=window.localStorage.getItem("Esri_enrich_options");a&&this._set("enrichOptions",F.parse(a))}return this.enrichOptions},_setEnrichOptionsAttr:function(a){this._set("enrichOptions",a);window.localStorage&&window.localStorage.setItem("Esri_enrich_options",F.stringify(this.enrichOptions))}});
K("extend-esri")&&d.setObject("dijit.analysis.EnrichLayer",C,T);return C});