// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/tasks/RunReportTask","dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/promise/all esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when ./parsers/DataXMLParser ./EnrichAreasTask ../areas/AnalysisAreaJsonUtil esri/dijit/geoenrichment/utils/ArrayUtil esri/dijit/geoenrichment/utils/CacheUtil esri/dijit/geoenrichment/ReportPlayer/config esri/dijit/geoenrichment/ReportPlayer/_devConfig".split(" "),function(g,
l,w,m,n,x,y,z,A,B,p,C){var q={_getCache:function(){return B.get("CreateReportResultCache")},_buildKey:function(a){return[a.countryID,a.hierarchy,JSON.stringify(z.areasToJson(a.analysisAreas,{excludeInfoTemplate:!0})),a.report.reportID,a.report.portalUrl,a.report.modified].join("_")},getCopy:function(a){a=this._buildKey(a);return(a=this._getCache()[a])&&l.clone(a)},copyAndPut:function(a,e){a=this._buildKey(a);this._getCache()[a]=e&&l.clone(e)},getResults:function(){var a=[],e;for(e in this._getCache())a.push(this._getCache()[e]);
return a}},D={execute:function(a){var e=a.cacheResult&&q.getCopy(a);if(e)return n(e);e=A.splitArrayToBunches(a.analysisAreas,10);var h;return w(e.map(function(r){function d(){var c=l.mixin({},a,{analysisAreas:r});c.getAttributes=function(b){if(!a.attachmentsStore)return null;if(!a.attachmentsStore.supportsMultipleAreas&&h)return h;a.attachmentsStore.supportsMultipleAreas&&a.attachmentsStore.setCurrentAnalysisAreaIndex(a.analysisAreas.indexOf(b));return n(a.attachmentsStore.getAttributes(),function(k){h=
h||k;return k})};return(new y).createReport(c).then(function(b){var k=b&&b.taskID;b=b&&b.result;try{C.emulateErrors.createReportError&&(b={error:{message:"Error test: something crashed on the server!"}});if(b&&"object"===typeof b)var f=b.error;if(!f&&"string"===typeof b&&-1!==b.indexOf("{"))try{var t=JSON.parse(b);f=t&&t.error}catch(u){}if(f)if(p.runReportTask.ignoreErrors)b=[];else return(new m).reject(f);var v=x.parse(b);return{taskID:k,areaData:v.areaData,reportInfo:v.reportInfo,originalXML:b,
error:f}}catch(u){return(new m).reject(u)}})}return n(d(),function(c){return!c||c.error?p.runReportTask.secondAttempt?d():c:c},function(c){return p.runReportTask.secondAttempt?d():(new m).reject(c)})})).then(function(r){var d={taskIDs:[],areaData:[],reportInfo:null,originalXMLs:[],errors:[]};r.forEach(function(c){d.taskIDs.push(c.taskID);d.originalXMLs.push(c.originalXML);c.error&&d.errors.push(c.error);d.areaData=d.areaData.concat(c.areaData);d.reportInfo=c.reportInfo});a.cacheResult&&!d.errors.length&&
q.copyAndPut(a,d);return d})}};g=g(null,{execute:function(a){console.log("Creating a new report...");return D.execute(a)}});g.CreateReportResultCache=q;return g});