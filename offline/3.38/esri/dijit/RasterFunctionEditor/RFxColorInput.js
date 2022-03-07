// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/RasterFunctionEditor/RFxColorInput","dojo/_base/declare dojo/has ../../kernel ../ColorPicker dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/popup dojo/_base/lang dojo/dom-attr dojo/on dojo/i18n!../../nls/jsapi".split(" "),function(e,m,n,p,q,r,t,g,f,h,k,v){e=e([q,r,t],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxColorInput",templateString:'\x3cdiv class\x3d "esriRFxColorInput" data-dojo-attach-point \x3d "colorInput"\x3e\x3c/div\x3e',colorObject:{},
COLOR_INPUT_GRID_PREFIX:"ColorInput",postCreate:function(){this.inherited(arguments);this.setAttributes();this.colorInput.onclick=f.hitch(this,this._openColorPickerPopup)},setAttributes:function(){this.colorObject&&(h.set(this.colorInput,"style",{background:"rgba("+this.colorObject.r+", "+this.colorObject.g+", "+this.colorObject.b+","+255*this.colorObject.a+")"}),h.set(this.colorInput,"id",this.COLOR_INPUT_GRID_PREFIX+this.colorObject.id))},_openColorPickerPopup:function(b){if(!this._colorPickerOpen){b.stopPropagation();
this._colorPicker||(this._colorPicker=new p({showTransparencySlider:!0}),this._colorPicker.startup());var c=b.target;this._colorPicker.set("color",c.style.backgroundColor,!1);g.open({popup:this._colorPicker,around:c,orient:["below","above"]});this._colorPickerOpen=!0;var d=k(document.body,"click",f.hitch(this,function(a){this._colorPicker.domNode.contains(a.target)||a.target===this._colorPicker.domNode||(l.remove(),d.remove(),g.close(this._colorPicker),this._colorPickerOpen=!1)}));var l=k(this._colorPicker,
"color-change",f.hitch(this,function(a){d.remove();l.remove();a=a.color;var u=parseInt(c.id.replace(this.COLOR_INPUT_GRID_PREFIX,""),10);g.close(this._colorPicker);this._colorPickerOpen=!1;this._changeBackGround(a,c);this.colorObject={r:a.r,g:a.g,b:a.b,a:a.a,id:u};this.emit("change-color",this.colorObject)}))}},_changeBackGround:function(b,c){if("no-color"===b)c.style.background="rgba(0,0,0,0)";else{var d=b.a||1;1>=d&&(b.a=Math.round(255*d));c.style.background="rgba("+b.r+", "+b.g+","+b.b+", 255)"}}});
m("extend-esri")&&f.setObject("dijit.RasterFunctionEditor.RFxColorInput",e,n);return e});