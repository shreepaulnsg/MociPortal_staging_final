// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/opsdashboard/MapToolConfigurationProxy",["dojo/_base/declare","dojo/_base/lang","./core/ExtensionConfigurationBase"],function(a,b,c){return a([c],{_initializeResponseReceived:function(e){this.inherited(arguments).then(b.hitch(this,function(){return this.getMapWidgetProxy(this.config.mapWidgetId).then(function(d){this.mapWidgetProxy=d})}))}})});