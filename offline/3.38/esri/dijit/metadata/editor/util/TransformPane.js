// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/editor/util/templates/TransformPane.html":'\x3cdiv class\x3d"gxePrimaryPane gxeTransformPane" data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv class\x3d"gxePrompt" data-dojo-attach-point\x3d"promptNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"gxeSection" data-dojo-attach-point\x3d"typesSection"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"typesNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/editor/util/TransformPane","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/has ../../base/Templated dojo/text!./templates/TransformPane.html dojo/i18n!../../nls/i18nBase ../../../../kernel".split(" "),function(b,d,f,e,g,h,k,m,l){b=b([h],{editor:null,dialogBroker:null,documentTypes:null,prompt:null,templateString:k,postCreate:function(){this.inherited(arguments);this._initialize()},onSelect:function(a){},_addDocType:function(a){var c=e.create("div",
{},this.typesNode);c=e.create("div",{"class":"gxeClickableText gxeLine",onclick:d.hitch(this,function(){this._selectDocType(a)})},c);this.setI18nNodeText(c,a.caption)},_initialize:function(){null!==this.prompt&&(this.setI18nNodeText(this.promptNode,this.prompt),this.promptNode.style.display="");f.forEach(this.documentTypes,function(a){this._addDocType(a)},this)},_selectDocType:function(a){this.onSelect(a)}});g("extend-esri")&&d.setObject("dijit.metadata.editor.util.TransformPane",b,l);return b});