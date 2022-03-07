// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/base/templates/ValidationMessage.html":'\x3cdiv class\x3d"gxeValidationMessage" \x3e\r\n  \x3cdiv class\x3d"gxeValidationIcon" data-dojo-attach-point\x3d"iconNode"\r\n    data-dojo-attach-event\x3d"onclick: _onIconClick"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"gxeClickableText" data-dojo-attach-point\x3d"messageNode"\r\n    data-dojo-attach-event\x3d"onclick: _onMessageClick"\x3e${message}\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/base/ValidationMessage","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/dom-class dojo/has dojo/window ./Templated dojo/text!./templates/ValidationMessage.html ../../../kernel".split(" "),function(g,m,n,h,c,p,l,q,r,t){g=g([q],{_isGxeValidationMessage:!0,message:null,inputWidget:null,isValid:!1,templateString:r,validationPane:null,postCreate:function(){this.inherited(arguments);var a=this;this._updateIcon(this.isValid);this.inputWidget&&this.own(this.inputWidget.on("interaction-occurred",
function(b){a._isDeleted()||(a.inputWidget._isConditional?a._checkConditional():a._check())}));this.own(h.subscribe("gxe/optional-content-toggled",function(b){try{if(a.inputWidget&&a.inputWidget.parentXNode&&b&&b.src&&!a._isDeleted()){var d=a.inputWidget.parentXNode;b.src._isGxeElement?d.isLineageDescendant(b.src)&&a._setOff(a._isXNodeOff(d)):b.src._isGxeMultiplicityHeader&&a._setOff(a._isXNodeOff(d))}}catch(e){console.error(e)}}));this.own(h.subscribe("gxe/tab-activated",function(b){try{a.inputWidget&&
a.inputWidget.parentXNode&&b&&b.tabs&&b.tabs._isGxeElementChoice&&(a._isDeleted()||a._setOff(a._isXNodeOff(a.inputWidget.parentXNode)))}catch(d){console.error(d)}}));this.own(h.subscribe("gxe/after-xnode-destroyed",function(b){try{a.inputWidget&&a.inputWidget.parentXNode&&b&&b.xnode&&(a._isDeleted()||a.inputWidget.parentXNode.isLineageDescendant(b.xnode)&&c.add(a.messageNode,"gxeDeleted"))}catch(d){console.error(d)}}))},_check:function(){if(this.inputWidget&&this.inputWidget.parentXNode){var a=this.inputWidget.parentXNode.validateValue();
this._updateIcon(a.isValid);this.setNodeText(this.messageNode,a.message)}},_checkConditional:function(){if(this.inputWidget&&this.inputWidget.validateConditionals){var a=this.inputWidget.validateConditionals();this._updateIcon(a.isValid);this.setNodeText(this.messageNode,a.message)}},_ensureInputFocus:function(a){a=this.messageNode;this.inputWidget&&this.inputWidget.ensureFocus&&(c.contains(a,"gxeDeleted")||c.contains(a,"gxeOff")||this.inputWidget.ensureFocus(),this._scrollOnClick())},_isDeleted:function(){return c.contains(this.messageNode,
"gxeDeleted")},_isXNodeOff:function(a){for(;a;){if(a._isOptionallyOff)return!0;a=a.getParent()}return!1},_onIconClick:function(a){this._ensureInputFocus()},_onMessageClick:function(a){this._ensureInputFocus()},_scrollOnClick:function(){if(this.validationPane){var a=!1,b=!1,d=null,e=null;n.forEach(this.validationPane.getChildren(),function(k){var f=k.domNode;k===this?(a=!0,c.add(f,"current")):k._isGxeValidationMessage&&(a?(e||(e=f),c.contains(f,"current")&&a&&(b=!0)):d=f,c.remove(f,"current"))},this);
b&&d?l.scrollIntoView(d):e&&l.scrollIntoView(e)}},_setOff:function(a){a?c.add(this.messageNode,"gxeOff"):c.remove(this.messageNode,"gxeOff")},_updateIcon:function(a){var b=this.iconNode;a?(c.remove(b,"gxeIconWarning"),c.add(b,"gxeIconSuccess")):(c.remove(b,"gxeIconSuccess"),c.add(b,"gxeIconWarning"))}});p("extend-esri")&&m.setObject("dijit.metadata.base.ValidationMessage",g,t);return g});