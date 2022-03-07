// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tasks/datareviewer/DashboardTask","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Deferred dojo/has ./_DRSBaseTask ./DashboardResult ./ReviewerFilters ../../kernel ../../request".split(" "),function(l,q,k,r,u,v,w,x,y,t){l=l(v,{declaredClass:"esri.tasks.datareviewer.DashboardTask",constructor:function(c){this.onGetDashboardResultsComplete=k.hitch(this,this.onGetDashboardResultsComplete);this.onGetDashboardFieldNamesComplete=k.hitch(this,this.onGetDashboardFieldNamesComplete)},
getDashboardResults:function(c,d){var n=this._successHandler,f=this._errorHandler,h=this._appendQueryParams,b=new r;null===d||void 0===d?(c=this._url+"/Dashboard/reviewerResultsBy/"+c,d={f:"json"}):(c=this._url+"/Dashboard/reviewerResultsBy/"+c+"/filter",d={f:"json",filtersArray:d.toJSON()});c=h(c);t({callbackParamName:"callback",url:c,content:d}).then(k.hitch(this,function(a,g){if(void 0!==a.error)g=Error(),g.message=a.error.message,g.code=a.error.code,f(g,b);else try{if(void 0===a.dashboardResults)f(null,
b);else{var e=new w;q.forEach(a.dashboardResults,function(m,z){e.fieldValues.push(m.fieldValue);e.counts.push(m.count)});e.fieldName=a.fieldName;var p=new x;p.createFromJsonObject(a);e.filters=p;n({dashboardResult:e},"onGetDashboardResultsComplete",b)}}catch(m){f(m,b)}}),function(a,g){f(a,b)});return b},getDashboardFieldNames:function(){var c=this._successHandler,d=this._errorHandler,n=this._appendQueryParams,f=this._url+"/Dashboard";f=n(f);var h=new r;t({callbackParamName:"callback",url:f,content:{f:"json"}}).then(k.hitch(this,
function(b,a){if(void 0!==b.error)a=Error(),a.message=b.error.message,a.code=b.error.code,d(a,h);else try{var g=[];q.forEach(b.reviewerResultsBy,function(e,p){g.push(e.name)});c({fieldNames:g},"onGetDashboardFieldNamesComplete",h)}catch(e){d(e,h)}}),function(b,a){d(b,h)});return h},onGetDashboardResultsComplete:function(c){},onGetDashboardFieldNamesComplete:function(c){}});u("extend-esri")&&k.setObject("tasks.datareviewer.DashboardTask",l,y);return l});