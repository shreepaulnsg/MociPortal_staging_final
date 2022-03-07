// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/CreatePlayerCommand","require dojo/_base/declare esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when esri/dijit/geoenrichment/promise/all ../../PlayerCommands ../supportClasses/GEUtil ../../core/supportClasses/map/WebMapsUtil ../../core/supportClasses/templateJsonUtils/TemplateJsonAnalyzer esri/dijit/geoenrichment/ReportPlayer/config dojo/i18n!esri/nls/jsapi".split(" "),function(t,u,v,g,w,x,y,z,A,l,h){function B(){if(f)return g(f.promise);
f=new v;t(["dijit/Dialog","esri/dijit/geoenrichment/utils/FileUtil","./mapToImage/MapToImageUtil","./supportClasses/DynamicHTMLPageBuilder"],function(a,b,c,e){m=a;n=b;p=c;q=e;f.resolve()});return f.promise}h=h.geoenrichment.dijit.ReportPlayer.ReportPlayer;var m,n,p,q,f;return u(null,{id:x.DYNAMIC_HTML,label:h.createDynamicHTMLCommandLabel,errorMessage:h.exportInfographicError,execute:function(a,b){b=b||{};var c=b.printableContainer;b.reportTitle=a.getReportTitle();b.allowDataDrilling=c.allowDataDrilling();
b.getImageInfos=function(){return!c.allowFallbackMaps()||b.skipFallbackMaps?null:p.collectMapsAsImages(a,{saveImagesAsDataUrl:!0})};b.loadStdFeatures=function(){return a._viewModel.loadAllStdFeatures()};b.reportDataToJson=function(e,d){return a.reportDataToJson({loadDataDrillingData:b.allowDataDrilling,mapImageInfos:e,loadedMapPortalItems:d})};b.templateJson=a.getReportData().templateJson;return this._execute(b).always(function(e){return g(c.stop(),function(){return e})})},executeOnData:function(a,
b,c){c=c||{};c.reportTitle=b.reportObject.title;c.allowDataDrilling=!0;c.reportDataToJson=function(e,d){return a.reportDataToJson(b,{loadedMapPortalItems:d})};c.templateJson=b.templateJson;return this._execute(c)},_execute:function(a){a=a||{};var b=this;return B().then(function(){return w({mapImageInfos:a.getImageInfos&&a.getImageInfos(),stdFeatures:a.loadStdFeatures&&a.loadStdFeatures(),loadedMapPortalItems:l.createPlayerCommand.loadMapPortalItems&&z.loadItems(A.collectMapItemIdsAndNames(a.templateJson))}).then(function(c){var e;
return g(a.reportDataToJson(c.mapImageInfos,c.loadedMapPortalItems),function(d){d.config.portalUrl="https://www.arcgis.com";delete d.config.geometryServiceUrl;delete d.config.printMapTaskUrl;if(a.returnReportDataJson)e=d;else return g(q.buildHTMLPageString(d,a.reportTitle,a.allowDataDrilling,a.disableExportOptions),function(k){e=k;var r=a.fileName||a.reportTitle+".html";return k&&!a.returnAsHtmlText&&b._confirmSaveFile(r,function(){return n.saveTextFile(k,r,"text/html",{addDownloadIntervals:a.addDownloadIntervals})})})}).then(function(){!a.skipCreditConsumption&&
!l.createPlayerCommand.skipCreditConsumption&&a.creditsTaskIDs&&a.creditsTaskIDs.forEach(function(d){y.consumeCredits(d)});return e})}).otherwise(b._handleError.bind(b))})},_handleError:function(a){console.log(a);(new m({title:"Error",content:this.errorMessage})).show()},_confirmSaveFile:function(a,b){return b()}})});