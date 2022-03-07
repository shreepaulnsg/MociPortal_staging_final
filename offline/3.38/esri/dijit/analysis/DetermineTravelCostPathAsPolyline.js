// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/DetermineTravelCostPathAsPolyline.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_determineTravelCostPathAsPolylineToolContentTitle" class\x3d"analysisTitle"\x3e\r\n      \x3ctable class\x3d"esriFormTable"\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"esriToolIconTd"\x3e\r\n            \x3cdiv class\x3d"determineTravelCostPathAsPolylineIcon"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.determineTravelCostPathAsPolyline}\x3c/label\x3e\r\n            \x3cnav class\x3d"breadcrumbs" data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb" style\x3d"font-size:12px;" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.determineTravelCostPathAsPolyline}\x3c/a\x3e\r\n            \x3c/nav\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n              \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n    \x3ctable class\x3d"esriFormTable"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputSourceLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputSourceRasterOrFeatures"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"required:true"\r\n              data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/components/AddPointFeatures/AddPointFeatures" data-dojo-attach-point\x3d"_sourceDrawBtn"\r\n                class\x3d"right esriActionButton" data-dojo-props\x3d"iconUrl:\'http://static.arcgis.com/images/Symbols/Basic/GreenStickpin.png\', layerName:\'${i18n.drawSourcePointLayerName}\', label:\'${i18n.drawLabel}\'"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputCostRasterLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputCostRaster"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"required:true"\r\n              data-dojo-attach-point\x3d"_inputCostRasterSelect" data-dojo-attach-event\x3d"onChange:_handleInputCostRasterChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputDestinationLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputDestinationRasterOrFeatures"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"required:true"\r\n              data-dojo-attach-point\x3d"_destinationSelect" data-dojo-attach-event\x3d"onChange:_handleDestinationAnalysisLayerChange"\x3e\x3c/select\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/components/AddPointFeatures/AddPointFeatures" data-dojo-attach-point\x3d"_destinationDrawBtn"\r\n              class\x3d"right esriActionButton" data-dojo-props\x3d"iconUrl:\'http://static.arcgis.com/images/Symbols/Basic/RedStickpin.png\', layerName:\'${i18n.drawDestinationPointLayerName}\', label:\'${i18n.drawLabel}\'"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.destinationField}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"destinationField"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select"\r\n              data-dojo-attach-point\x3d"_destinationFieldSelect" data-dojo-attach-event\x3d"onChange:_handleDestinationFieldChange"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"pathType"\x3e\x3c/a\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.pathTypeLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select"\r\n              data-dojo-attach-point\x3d"_pathTypeSelect"\x3e\r\n              \x3coption value\x3d"BEST_SINGLE" selected\x3d"true"\x3e${i18n.bestSingle}\x3c/option\x3e\r\n              \x3coption value\x3d"EACH_CELL"\x3e${i18n.eachCell}\x3c/option\x3e\r\n              \x3coption value\x3d"EACH_ZONE"\x3e${i18n.eachZone}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputPolylineName"\x3e\x3c/a\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputPolylineName}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"esriOutputText esriLeadingMargin1"\r\n              data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n              \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true"\r\n                style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseLayerTypeRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel class\x3d"esriSaveLayerlabel"\x3e${i18n.saveLayerType}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput esriLongLabel" data-dojo-attach-point\x3d"_webLayerTypeSelect" data-dojo-type\x3d"dijit/form/FilteringSelect"\r\n                trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont" href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n      \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n        \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true"\r\n          name\x3d"extent" value\x3d"true" /\x3e ${i18n.useMapExtent}\r\n      \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton"\r\n      data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n      ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator" data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/analysis/DetermineTravelCostPathAsPolyline","../../kernel ./AnalysisRegistry ./RasterAnalysisMixin ./utils ./ItemTypes dijit/_FocusMixin dijit/_OnDijitClickMixin dijit/_TemplatedMixin dijit/_WidgetBase dijit/_WidgetsInTemplateMixin dojo/_base/array dojo/_base/declare dojo/_base/json dojo/_base/lang dojo/has dojo/i18n!./nls/DetermineTravelCostPathAsPolyline dojo/text!./templates/DetermineTravelCostPathAsPolyline.html".split(" "),function(n,e,h,f,k,p,q,r,t,u,g,v,l,d,w,x,y){h=v([t,
r,u,q,p,h],{declaredClass:"esri.dijit.analysis.DetermineTravelCostPathAsPolyline",templateString:y,widgetsInTemplate:!0,analysisType:"feature",browseType:[k.IS,k.FS],checkGeometries:[e.GeometryTypes.Point,e.GeometryTypes.MultiPoint,e.GeometryTypes.Line],tags:["point","line"],map:null,drawDestinationPointLayerName:"",drawSourcePointLayerName:"",toolName:"DetermineTravelCostPathAsPolyline",helpFileName:"DetermineTravelCostPathAsPolyline",toolNlsName:x,rasterGPToolName:"DetermineTravelCostPathAsPolyline",
outputName:"outputPolylineName",resultParameter:"outputPolylineFeatures",constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},_removePointLayer:function(){this.sourcePointLayer&&this._removeLayer(this.sourcePointLayer,this.inputLayers,this._analysisSelect);this.destinationPointLayer&&this._removeLayer(this.destinationPointLayer,this.inputLayers,this._destinationSelect);this._sourceDrawBtn.deactivate();this._destinationDrawBtn.deactivate()},_getJobParameters:function(){var a=
f.constructAnalysisInputLyrObj(this.get("inputLayer"));this.inputLayer.drawnLayer&&(a.drawnLayer=this.inputLayer.drawnLayer);var b=l.toJson(f.constructAnalysisInputLyrObj(this.get("inputCostRaster"))),c=f.constructAnalysisInputLyrObj(this.get("inputDestinationRasterOrFeatures"));this.get("inputDestinationRasterOrFeatures").drawnLayer&&(c.drawnLayer=this.get("inputDestinationRasterOrFeatures").drawnLayer);return{inputSourceRasterOrFeatures:l.toJson(a),inputCostRaster:b,inputDestinationRasterOrFeatures:l.toJson(c),
destinationField:this.destinationField,pathType:this._pathTypeSelect.get("value")}},_setDefaultInputs:function(){this.inputCostRaster&&this.inputCostRasters&&!f.isLayerInLayers(this.inputCostRaster,this.inputCostRasters)&&this.inputCostRasters.push(this.inputCostRaster);this._addInputCostRasterLayerOptions();this._setDefaultInputCostRaster();this._addDestinationLayerOptions();this._pathTypeSelect.set("value",this.pathType);this._outputLayerInput.set("value",this.outputPolylineName&&this.outputPolylineName.serviceProperties.name);
this.drawDestinationPointLayerName||(this.drawDestinationPointLayerName=this.i18n.drawDestinationPointLayerName);this.drawSourcePointLayerName||(this.drawSourcePointLayerName=this.i18n.drawSourcePointLayerName);this.inputLayer&&this.inputLayer.drawnLayer&&(this._sourceDrawBtn.set("pointFeatureLayer",this.inputLayer),this.sourcePointLayer=this.inputLayer);this.inputDestinationRasterOrFeatures&&this.inputDestinationRasterOrFeatures.drawnLayer&&(this.inputLayers.push(this.inputDestinationRasterOrFeatures),
this._destinationDrawBtn.set("pointFeatureLayer",this.inputDestinationRasterOrFeatures),this.destinationPointLayer=this.inputDestinationRasterOrFeatures);this._destinationDrawBtn.set("map",this.map);this._sourceDrawBtn.set("map",this.map);this._destinationDrawBtn.on("change",d.hitch(this,this._handleDestinationDrawLayer));this._sourceDrawBtn.on("change",d.hitch(this,this._handleSourceDrawLayer));this._destinationSelect.set("isValid",d.hitch(this,this._isValid))},_setDefaultInputCostRaster:function(){this.inputCostRaster||
(this.inputCostRaster=this.inputCostRasters[0])},_handleSourceDrawLayer:function(a){this._clearSelectedPointSelectLayer(!0);this.inputLayers&&0!==this.inputLayers.length&&-1!==this.inputLayers.indexOf(a)||(this.sourcePointLayer=a,this.inputLayers.push(a),this.inputLayer=a,this._analysisSelect.removeOption(this._analysisSelect.getOptions()),f.populateAnalysisLayers(this,"inputLayer","inputLayers"),this._addDestinationLayerOptions())},_handleDestinationDrawLayer:function(a){this._clearSelectedPointSelectLayer(!1);
this.inputLayers&&0!==this.inputLayers.length&&-1!==this.inputLayers.indexOf(a)||(this.destinationPointLayer=a,a=this._updateSelectOptionsForDrawLayer(!1,a),this._handleDestinationAnalysisLayerChange(a))},_clearSelectedPointSelectLayer:function(a){a&&this.destinationPointLayer&&this._destinationDrawBtn.reset();!a&&this.sourcePointLayer&&this._sourceDrawBtn.reset()},_isValid:function(){if("placeholder"===this._destinationSelect.value)return this._destinationSelect._missingMsg=this.toolNlsName.missingMessage,
!1;this._destinationSelect._missingMsg=this.toolNlsName.noValueMessage;return!this._destinationSelect.required||0===this._destinationSelect.value||!/^\s*$/.test(this._destinationSelect.value||"")},_updateSelectOptionsForDrawLayer:function(a,b){a=this.inputLayers.length;var c=this._destinationSelect.getOptions();this._destinationSelect.removeOption(c);c=g.map(c,function(m){m.selected=!1;return m});c.push({value:a.toString(),label:b.name,selected:!0});this.inputLayers.push(b);this._destinationSelect.addOption(c);
return a},_addInputCostRasterLayerOptions:function(){var a=[];this._inputCostRasterSelect.removeOption(this._inputCostRasterSelect.getOptions());g.forEach(this.inputCostRasters,d.hitch(this,function(b,c){this._isSelected(this.inputCostRaster,this.inputLayer)||a.push({label:b.name,value:c.toString(),selected:this._isSelected(b,this.inputCostRaster)})}));this._inputCostRasterSelect.addOption(a);this._handleInputCostRasterChange(this._inputCostRasterSelect.get("value"))},_addDestinationLayerOptions:function(){var a=
this._destinationSelect.getOptions(),b=[];g.some(a,function(c){return"separator"===c.type})&&(b=a.splice(a.length-2,2));this._destinationSelect.removeOption(this._destinationSelect.getOptions());this._destinationSelect.addOption(this._getDestinationLayerOptions());this._destinationSelect.addOption(b);this._handleDestinationAnalysisLayerChange(this._destinationSelect.get("value"))},_addDestinationFields:function(){this._destinationFieldSelect.removeOption(this._destinationFieldSelect.getOptions());
this._destinationFieldSelect._setDisplay("");var a=!1;this.inputDestinationRasterOrFeatures&&this.inputDestinationRasterOrFeatures.fields.forEach(d.hitch(this,function(b){if(b.type===e.FieldTypes.Integer||b.type===e.FieldTypes.Short){var c=b.name===this.destinationField;a=a||c;this._destinationFieldSelect.addOption({label:b.alias||b.name,value:b.name,selected:c})}}));a||(this.destinationField=this._destinationFieldSelect.getOptions()[0]&&this._destinationFieldSelect.getOptions()[0].value)},_getDestinationLayerOptions:function(){var a=
[];g.forEach(this.destinationRasters,d.hitch(this,function(b,c){this._isSelected(b,this.inputLayer)||this._isSelected(b,this.inputDestinationRasterOrFeatures)?this._isSelected(b,this.inputDestinationRasterOrFeatures)&&(this._isSelected(b,this.inputLayer)?a.push({label:this.toolNlsName.placeHolder,value:"placeholder",selected:!0,disabled:!0}):a.push({label:b.name,value:c.toString(),selected:!0})):a.push({label:b.name,value:c.toString(),selected:!1})}));return a},_handleInputCostRasterChange:function(a){"browselayers"===
a||"browse"===a?(this._isAnalysisSelect=!1,this._isCostRasterSelect=!0,this.defaultItemTypes=[],this.set("allowedItemTypes",[k.IS]),this._createBrowseItems({browseValue:a,disableLAAL:!0,disableBoundary:!0,disabledSubResources:[this.inputCostRaster]},{},this._inputCostRasterSelect)):0<=a&&this.set("inputCostRaster",this.inputCostRasters[a])},_handleDestinationAnalysisLayerChange:function(a){"browselayers"===a||"browse"===a?(this._isCostRasterSelect=this._isAnalysisSelect=!1,this.defaultItemTypes=[],
this.set("allowedItemTypes",this.browseType),this._createBrowseItems({browseValue:a,disabledSubResources:[this.inputLayer,this.inputDestinationRasterOrFeatures]},{geometryTypes:this.checkGeometries,tags:this.tags,customCheck:{customCheckHandler:d.hitch(this,function(b){return!f.isSameLayer(b,this.inputLayer)})}},this._destinationSelect)):"placeholder"===a?(this.set("inputDestinationRasterOrFeatures",void 0),this._destinationSelect.validate(!0)):0<=a&&(this.set("inputDestinationRasterOrFeatures",this.destinationRasters[a]),
this._addDestinationFields())},_handleDestinationFieldChange:function(a){this.set("destinationField",a)},_handleBrowseItemsSelect:function(a,b){a&&a.selection&&f.addAnalysisReadyLayer({item:a.selection,layers:this._isAnalysisSelect?this.inputLayers:this._isCostRasterSelect?this.inputCostRasters:this.destinationRasters,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._isCostRasterSelect?this._inputCostRasterSelect:this._destinationSelect,browseDialog:this._browseLyrsdlg||this._browsedlg,
widget:this},b).always(d.hitch(this,function(){this._isAnalysisSelect?this._handleAnalysisLayerChange(this._analysisSelect.get("value")):this._isCostRasterSelect?this._handleInputCostRasterChange(this._inputCostRasterSelect.get("value")):this._handleDestinationAnalysisLayerChange(this._destinationSelect.get("value"))}))},_handleSourceAnalysisLayerChange:function(a){0<=a&&this.set("inputLayer",this.inputLayers[a]);this._addDestinationLayerOptions()},_resetUI:function(){this._addDestinationLayerOptions()},
addBrowseOption:function(){f.addReadyToUseLayerOption(this,[{disableLAAL:!0,select:this._inputCostRasterSelect},this._destinationSelect])},_isSelected:function(a,b){return b&&a&&b.url===a.url&&b.id===a.id},_setInputLayerAttr:function(a){this.inputLayer=a},_getInputLayerAttr:function(){return this.inputLayer},_setInputDestinationRasterOrFeaturesAttr:function(a){this.inputDestinationRasterOrFeatures=a;this._isSelected(a,this.inputLayer)&&this._resetUI()},_getInputDestinationRasterOrFeaturesAttr:function(){return this.inputDestinationRasterOrFeatures},
_setInputLayersAttr:function(a){this.inputLayers=g.filter(a,function(b){return b.geometryType===e.GeometryTypes.Point||b.geometryType===e.GeometryTypes.Line||b.geometryType===e.GeometryTypes.Polygon||this.isImageServiceLayer(b)},this);this.set("inputCostRasters",a);this.set("destinationRasters",a)},_getInputLayersAttr:function(a){return this.inputLayers},_getInputCostRasterAttr:function(){return this.inputCostRaster},_setInputCostRasterAttr:function(a){this.isImageServiceLayer(a)&&(this.inputCostRaster=
a)},_getInputCostRastersAttr:function(){return this.inputCostRasters},_setInputCostRastersAttr:function(a){this.inputCostRasters=g.filter(a,function(b){return this.isImageServiceLayer(b)},this)},_getDestinationRastersAttr:function(){return this.destinationRasters},setDestinationRastersAttr:function(a){this.destinationRasters=a},_setOutputPolylineNameAttr:function(a){this.outputOptimumNetworkName=a},_getOutputPolylineNameAttr:function(){return this._outputLayerInput.get("value")},_setPathTypeAttr:function(a){this.pathType=
a},_getPathTypeAttr:function(){return this.pathType},_setDrawSourcePointLayerNameAttr:function(a){this.drawSourcePointLayerName=a},_getDrawSourcePointLayerNameAttr:function(){return this.drawSourcePointLayerName},_setDrawDestinationPointLayerNameAttr:function(a){this.drawDestinationPointLayerName=a},_getDrawDestinationPointLayerNameAttr:function(){return this.drawDestinationPointLayerName},_setDestinationFieldAttr:function(a){this.destinationField=a},_getDestinationFieldAttr:function(a){return this.destinationField}});
w("extend-esri")&&d.setObject("dijit.analysis.DetermineTravelCostPathAsPolyline",h,n);return h});