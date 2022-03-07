// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tasks/ClosestFacilityTask","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../request ../geometry/normalizeUtils ./Task ./ClosestFacilitySolveResult ./NAServiceDescription".split(" "),function(b,f,m,n,p,q,r,t,u){b=b([r,u],{declaredClass:"esri.tasks.ClosestFacilityTask",_eventMap:{"solve-complete":["result"]},constructor:function(a){this._url.orig=this._url.path;this._url.path+="/solveClosestFacility";this._handler=f.hitch(this,this._handler);this.registerConnectEvents()},__msigns:[{n:"solve",
c:3,a:[{i:0,p:["incidents.features","facilities.features","pointBarriers.features","polylineBarriers.features","polygonBarriers.features"]}],e:2}],_handler:function(a,l,e,c,d){try{var g=new t(a);this._successHandler([g],"onSolveComplete",e,d)}catch(h){this._errorHandler(h,c,d)}},solve:function(a,l,e,c){var d=c.assembly;a=this._encode(f.mixin({},this._url.query,{f:"json"},a.toJson(d&&d[0])));var g=this._handler,h=this._errorHandler;return p({url:this._url.path,content:a,callbackParamName:"callback",
load:function(k,v){g(k,v,l,e,c.dfd)},error:function(k){h(k,e,c.dfd)}})},onSolveComplete:function(){}});q._createWrappers(b);m("extend-esri")&&f.setObject("tasks.ClosestFacilityTask",b,n);return b});