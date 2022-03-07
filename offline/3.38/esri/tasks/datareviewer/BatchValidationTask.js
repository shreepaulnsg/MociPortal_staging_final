// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tasks/datareviewer/BatchValidationTask","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Deferred dojo/has ./_DRSBaseTask ./BatchValidationJob ./BatchValidationJobInfo ../../request ../../kernel".split(" "),function(q,r,l,m,u,v,t,w,n,x){q=q(v,{declaredClass:"esri.tasks.datareviewer.BatchValidationTask",constructor:function(d){this.onGetJobIdsComplete=l.hitch(this,this.onGetJobIdsComplete);this.onScheduleJobComplete=l.hitch(this,this.onScheduleJobComplete);this.onEditJobComplete=
l.hitch(this,this.onEditJobComplete);this.onDeleteJobComplete=l.hitch(this,this.onDeleteJobComplete);this.onEnableJobComplete=l.hitch(this,this.onEnableJobComplete);this.onDisableJobComplete=l.hitch(this,this.onDisableJobComplete);this.onGetJobDetailsComplete=l.hitch(this,this.onGetJobDetailsComplete);this.onGetJobExecutionDetailsComplete=l.hitch(this,this.onGetJobExecutionDetailsComplete);this.onCancelJobExecutionComplete=l.hitch(this,this.onCancelJobExecutionComplete);this.onExecuteJobComplete=
l.hitch(this,this.onExecuteJobComplete);this.onGetScheduledJobsListComplete=l.hitch(this,this.onGetScheduledJobsListComplete);this.onGetAdhocJobsListComplete=l.hitch(this,this.onGetAdhocJobsListComplete)},getJobIds:function(){var d=this._successHandler,h=this._errorHandler,f=this._appendQueryParams,g=this._url+"/BatchValidation";g=f(g);var c=new m;n({callbackParamName:"callback",url:g,content:{f:"json"}}).then(l.hitch(this,function(a,b){if(void 0!==a.error)b=Error(),b.message=a.error.message,b.code=
a.error.code,h(b,c);else try{if(void 0===a.scheduledJobs||void 0===a.adhocJobs)h(null,c);else{var e={scheduledJobs:[],adhocJobs:[]};r.forEach(a.scheduledJobs,function(k,p){e.scheduledJobs.push(k.id)});r.forEach(a.adhocJobs,function(k,p){e.adhocJobs.push(k.id)});d(e,"onGetJobIdsComplete",c)}}catch(k){h(k,c)}}),function(a,b){h(a,c)});return c},scheduleJob:function(d){var h=this._successHandler,f=this._errorHandler,g=this._appendQueryParams,c=this._url+"/BatchValidation/scheduleNewJob";c=g(c);var a=
new m;n({callbackParamName:"callback",url:c,content:d.toJSONScheduleParameters()}).then(l.hitch(this,function(b,e){if(void 0!==b.error)e=Error(),e.message=b.error.message,e.code=b.error.code,f(e,a);else try{void 0===b.scheduledJobId?f(null,a):h({jobId:b.scheduledJobId},"onScheduleJobComplete",a)}catch(k){f(k,a)}}),function(b,e){f(b,a)});return a},editJob:function(d,h){var f=this._successHandler,g=this._errorHandler,c=this._appendQueryParams;d=this._url+"/BatchValidation/scheduledJobs/"+d+"/editJob";
d=c(d);var a=new m;n({callbackParamName:"callback",url:d,content:h.toJSONEditParameters()}).then(l.hitch(this,function(b,e){if(void 0!==b.error)e=Error(),e.message=b.error.message,e.code=b.error.code,g(e,a);else try{void 0!==b.edited&&"false"===b.edited?g(null,a):void 0!==b.edited?f({edited:b.edited},"onEditJobComplete",a):g(null,a)}catch(k){g(k,a)}}),function(b,e){g(b,a)});return a},deleteJob:function(d){var h=this._successHandler,f=this._errorHandler,g=this._appendQueryParams;d=this._url+"/BatchValidation/scheduledJobs/"+
d+"/deleteJob";d=g(d);var c=new m;n({callbackParamName:"callback",url:d,content:{f:"json"}}).then(l.hitch(this,function(a,b){if(void 0!==a.error)b=Error(),b.message=a.error.message,b.code=a.error.code,f(b,c);else try{void 0!==a.deleted?h({deleted:a.deleted},"onDeleteJobComplete",c):f(null,c)}catch(e){f(e,c)}}),function(a,b){f(a,c)});return c},enableJob:function(d){var h=this._successHandler,f=this._errorHandler,g=this._appendQueryParams;d=this._url+"/BatchValidation/scheduledJobs/"+d+"/enableJob";
d=g(d);var c=new m;n({callbackParamName:"callback",url:d,content:{f:"json"}}).then(l.hitch(this,function(a,b){if(void 0!==a.error)b=Error(),b.message=a.error.message,b.code=a.error.code,f(b,c);else try{void 0!==a.enabled?h({enabled:a.enabled},"onEnableJobComplete",c):f(null,c)}catch(e){f(e,c)}}),function(a,b){f(a,c)});return c},disableJob:function(d){var h=this._successHandler,f=this._errorHandler,g=this._appendQueryParams;d=this._url+"/BatchValidation/scheduledJobs/"+d+"/disableJob";d=g(d);var c=
new m;n({callbackParamName:"callback",url:d,content:{f:"json"}}).then(l.hitch(this,function(a,b){if(void 0!==a.error)b=Error(),b.message=a.error.message,b.code=a.error.code,f(b,c);else try{void 0!==a.disabled?h({disabled:a.disabled},"onDisableJobComplete",c):f(null,c)}catch(e){f(e,c)}}),function(a,b){f(a,c)});return c},getJobDetails:function(d){var h=this._successHandler,f=this._errorHandler,g=this._appendQueryParams,c=this._url+"/BatchValidation/getJobDetails";c=g(c);var a=new m;n({callbackParamName:"callback",
url:c,content:{jobId:d,f:"json"}}).then(l.hitch(this,function(b,e){if(void 0!==b.error)e=Error(),e.message=b.error.message,e.code=b.error.code,f(e,a);else try{var k=new t(b);h({jobDetails:k},"onGetJobDetailsComplete",a)}catch(p){f(p,a)}}),function(b,e){f(b,a)});return a},getJobExecutionDetails:function(d){var h=this._successHandler,f=this._errorHandler,g=this._appendQueryParams,c=this._url+"/BatchValidation/getJobExecutionDetails";c=g(c);var a=new m;n({callbackParamName:"callback",url:c,content:{f:"json",
jobId:d.toString()}}).then(l.hitch(this,function(b,e){if(void 0!==b.error)e=Error(),e.message=b.error.message,e.code=b.error.code,f(e,a);else try{var k=new w(b);h({jobInfo:k},"onGetJobExecutionDetailsComplete",a)}catch(p){f(p,a)}}),function(b,e){f(b,a)});return a},cancelJobExecution:function(d){var h=this._successHandler,f=this._errorHandler,g=this._appendQueryParams,c=this._url+"/BatchValidation/cancelJob";c=g(c);var a=new m;n({callbackParamName:"callback",url:c,content:{f:"json",jobId:d}}).then(l.hitch(this,
function(b,e){if(void 0!==b.error)e=Error(),e.message=b.error.message,e.code=b.error.code,f(e,a);else try{void 0!==b.canceled?h({canceled:b.canceled},"onCancelJobExecutionComplete",a):f(null,a)}catch(k){f(k,a)}}),function(b,e){f(b,a)});return a},executeJob:function(d){var h=this._successHandler,f=this._errorHandler,g=this._appendQueryParams,c=this._url+"/BatchValidation/executeJob";c=g(c);var a=new m;n({callbackParamName:"callback",url:c,content:d.toJSONExecuteParameters()}).then(l.hitch(this,function(b,
e){if(void 0!==b.error)e=Error(),e.message=b.error.message,e.code=b.error.code,f(e,a);else try{void 0===b.adhocJobId?f(null,a):h({jobId:b.adhocJobId},"onExecuteJobComplete",a)}catch(k){f(k,a)}}),function(b,e){f(b,a)});return a},getScheduledJobsList:function(){var d=this._successHandler,h=this._errorHandler,f=this._appendQueryParams,g=this._url+"/BatchValidation/scheduledJobs";g=f(g);var c=new m;n({callbackParamName:"callback",url:g,content:{f:"json"}}).then(l.hitch(this,function(a,b){if(void 0!==
a.error)b=Error(),b.message=a.error.message,b.code=a.error.code,h(b,c);else try{if(void 0===a.scheduledJobs)h(null,c);else{var e=[];r.forEach(a.scheduledJobs,function(k,p){null!==k&&void 0!==k&&e.push(new t(k))});d({scheduledJobs:e},"onGetScheduledJobsListComplete",c)}}catch(k){h(k,c)}}),function(a,b){h(a,c)});return c},getAdhocJobsList:function(){var d=this._successHandler,h=this._errorHandler,f=this._appendQueryParams,g=this._url+"/BatchValidation/adhocJobs";g=f(g);var c=new m;n({callbackParamName:"callback",
url:g,content:{f:"json"}}).then(l.hitch(this,function(a,b){if(void 0!==a.error)b=Error(),b.message=a.error.message,b.code=a.error.code,h(b,c);else try{if(void 0===a.adhocJobs)h(null,c);else{var e=[];r.forEach(a.adhocJobs,function(k,p){null!==k&&void 0!==k&&e.push(new t(k))});d({adhocJobs:e},"onGetAdhocJobsListComplete",c)}}catch(k){h(k,c)}}),function(a,b){h(a,c)});return c},onGetJobIdsComplete:function(d){},onGetJobDetailsComplete:function(d){},onGetJobExecutionDetailsComplete:function(d){},onCancelJobExecutionComplete:function(d){},
onExecuteJobComplete:function(d){},onScheduleJobComplete:function(d){},onEditJobComplete:function(d){},onEnableJobComplete:function(d){},onDisableJobComplete:function(d){},onDeleteJobComplete:function(d){},onGetScheduledJobsListComplete:function(d){},onGetAdhocJobsListComplete:function(d){}});u("extend-esri")&&l.setObject("tasks.datareviewer.BatchValidationTask",q,x);return q});