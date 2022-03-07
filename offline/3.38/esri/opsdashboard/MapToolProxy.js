// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/opsdashboard/MapToolProxy","dojo/_base/declare dojo/_base/lang dojo/Deferred ../geometry/jsonUtils ./core/messageHandler ./core/ExtensionBase".split(" "),function(e,c,f,g,b,h){return e([h],{mapWidgetProxy:null,previousState:null,displaySize:null,availableDisplaySize:null,constructor:function(){this.displaySize={width:0,height:0}},_initializeResponseReceived:function(a){return this.inherited(arguments).then(c.hitch(this,function(){this.previousState=a.state||{};this.availableDisplaySize=
a.availableSize||{width:0,height:0};return this.getMapWidgetProxy(a.mapWidgetId).then(c.hitch(this,function(d){this.mapWidgetProxy=d}))}))},_messageReceived:function(a){switch(a.functionName.toLowerCase()){case "drawcomplete":return this._drawComplete(a.args);case "availablesizechanged":return this._availableDisplaySizeChanged(a.args)}},activateMapDrawing:function(a){if(!this._isHostInitialized())throw Error(this.errorMessages.hostNotReady);b._sendMessage({functionName:"activateDrawing",args:a})},
deactivateMapDrawing:function(){if(!this._isHostInitialized())throw Error(this.errorMessages.hostNotReady);b._sendMessage({functionName:"deactivateDrawing"})},_drawComplete:function(a){a=g.fromJson(a.geometry);this.mapDrawComplete(a);this.emit("draw-complete",{geometry:a})},mapDrawComplete:function(a){},setDisplaySize:function(a){if(!this._isHostInitialized())return(new f).reject(Error(this.errorMessages.hostNotReady));this.displaySize=a;return b._sendMessageWithReply({functionName:"setSize",args:a}).then(c.hitch(this,
function(d){this.displaySize=d}))},_availableDisplaySizeChanged:function(a){this.availableDisplaySize=a.availableSize;this.availableDisplaySizeChanged(this.availableDisplaySize);this.emit("available-display-size-changed",{size:this.availableDisplaySize})},availableDisplaySizeChanged:function(a){},deactivateMapTool:function(a){if(!this._isHostInitialized())throw Error(this.errorMessages.hostNotReady);b._sendMessage({functionName:"deactivateTool",args:{state:a}})}})});