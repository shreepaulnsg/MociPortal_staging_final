// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tasks/datareviewer/ReviewerSession",["dojo/_base/declare","dojo/has","dojo/_base/lang","../../kernel"],function(a,c,d,e){a=a(null,{declaredClass:"esri.tasks.datareviewer.ReviewerSession",sessionId:NaN,sessionName:"",userName:"",versionName:"",constructor:function(f,g,h,b){this.sessionId=f;this.sessionName=g;this.userName=h;void 0!==b&&(this.versionName=b)},toString:function(){return isNaN(this.sessionId)?null:"Session "+this.sessionId+" : "+this.sessionName}});c("extend-esri")&&d.setObject("tasks.datareviewer.ReviewerSession",
a,e);return a});