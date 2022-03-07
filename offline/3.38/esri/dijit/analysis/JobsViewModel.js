// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/JobsViewModel","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojo/json dojo/Stateful dojo/topic ./utils ./storageUtils ../../kernel ../../lang".split(" "),function(d,b,f,g,p,h,k,l,m,n,e){d=d([h],{declaredClass:"esri.dijit.analysis.JobsViewModel",constructor:function(a){this.watch("item",b.hitch(this,this.fetchJobs))},_portalUrlSetter:function(a){this.portalUrl=a},_itemSetter:function(a){this.item=a},_jobsSetter:function(a){this.jobs=a},_currentJobSetter:function(a){a&&
a.jobParams&&l.jobParamsToWidgetProps(a).then(b.hitch(this,function(c){this.currentJob=c;k.publish("analysis/jobs/selectedjob",this.currentJob,this.item)}))},fetchJobs:function(){this.portalUrl&&this.item&&m.getResourcesInfo(this.item,{portalUrl:this.portalUrl}).then(b.hitch(this,function(a){a=f.filter(a,function(c){return e.isDefined(c.toolName)&&e.isDefined(c.jobInfo)&&e.isDefined(c.jobParams)});this.set("jobs",a)}),b.hitch(this,function(a){console.log("Error fetching jobs",a)}))}});g("extend-esri")&&
b.setObject("dijit.analysis.JobsViewModel",d,n);return d});