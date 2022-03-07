// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/InfographicsFactory",["esri/declare","esri/tasks/geoenrichment/GeoenrichmentTask","./InfographicsOptions","./Geoenrichment","./config"],function(b,c,d,e,a){return b("esri.dijit.geoenrichment.InfographicsFactory",null,{_task:null,_options:null,getTask:function(){this._task||(this._task=new c(a.server),this._task.token=a.token);return this._task},createGeoenrichment:function(){return new e},getCountry:function(f){return this.getTask().getCountries(f.geometry).then(function(g){return g[0]})},
getOptions:function(){this._options||(this._options=new d);return this._options}})});