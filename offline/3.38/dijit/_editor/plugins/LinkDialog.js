//>>built
define("dijit/_editor/plugins/LinkDialog","require dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/keys dojo/_base/lang dojo/on dojo/sniff dojo/query dojo/string ../_Plugin ../../form/DropDownButton ../range".split(" "),function(v,w,r,m,x,d,k,n,y,t,p,z,q){var l=r("dijit._editor.plugins.LinkDialog",p,{allowUnsafeHtml:!1,linkFilter:[[/</g,"\x26lt;"]],buttonClass:z,useDefaultCommand:!1,urlRegExp:"((https?|ftps?|file)\\://|./|../|/|)(/[a-zA-Z]{1,1}:/|)(((?:(?:[\\da-zA-Z](?:[-\\da-zA-Z]{0,61}[\\da-zA-Z])?)\\.)*(?:[a-zA-Z](?:[-\\da-zA-Z]{0,80}[\\da-zA-Z])?)\\.?)|(((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])|(0[xX]0*[\\da-fA-F]?[\\da-fA-F]\\.){3}0[xX]0*[\\da-fA-F]?[\\da-fA-F]|(0+[0-3][0-7][0-7]\\.){3}0+[0-3][0-7][0-7]|(0|[1-9]\\d{0,8}|[1-3]\\d{9}|4[01]\\d{8}|42[0-8]\\d{7}|429[0-3]\\d{6}|4294[0-8]\\d{5}|42949[0-5]\\d{4}|429496[0-6]\\d{3}|4294967[01]\\d{2}|42949672[0-8]\\d|429496729[0-5])|0[xX]0*[\\da-fA-F]{1,8}|([\\da-fA-F]{1,4}\\:){7}[\\da-fA-F]{1,4}|([\\da-fA-F]{1,4}\\:){6}((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])))(\\:\\d+)?(/(?:[^?#\\s/]+/)*(?:[^?#\\s/]{0,}(?:\\?[^?#\\s/]*)?(?:#.*)?)?)?",
emailRegExp:"\x3c?(mailto\\:)([!#-'*+\\-\\/-9\x3d?A-Z^-~]+[.])*[!#-'*+\\-\\/-9\x3d?A-Z^-~]+@((?:(?:[\\da-zA-Z](?:[-\\da-zA-Z]{0,61}[\\da-zA-Z])?)\\.)+(?:[a-zA-Z](?:[-\\da-zA-Z]{0,6}[\\da-zA-Z])?)\\.?)|localhost|^[^-][a-zA-Z0-9_-]*\x3e?",htmlTemplate:'\x3ca href\x3d"${urlInput}" _djrealurl\x3d"${urlInput}" target\x3d"${targetSelect}"\x3e${textInput}\x3c/a\x3e',tag:"a",_hostRxp:/^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/,_userAtRxp:/^([!#-'*+\-\/-9=?A-Z^-~]+[.])*[!#-'*+\-\/-9=?A-Z^-~]+@/i,
linkDialogTemplate:"\x3ctable role\x3d'presentation'\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d'${id}_urlInput'\x3e${url}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cinput data-dojo-type\x3d'dijit.form.ValidationTextBox' required\x3d'true' id\x3d'${id}_urlInput' name\x3d'urlInput' data-dojo-props\x3d'intermediateChanges:true'/\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d'${id}_textInput'\x3e${text}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cinput data-dojo-type\x3d'dijit.form.ValidationTextBox' required\x3d'true' id\x3d'${id}_textInput' name\x3d'textInput' data-dojo-props\x3d'intermediateChanges:true'/\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d'${id}_targetSelect'\x3e${target}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cselect id\x3d'${id}_targetSelect' name\x3d'targetSelect' data-dojo-type\x3d'dijit.form.Select'\x3e\x3coption selected\x3d'selected' value\x3d'_self'\x3e${currentWindow}\x3c/option\x3e\x3coption value\x3d'_blank'\x3e${newWindow}\x3c/option\x3e\x3coption value\x3d'_top'\x3e${topWindow}\x3c/option\x3e\x3coption value\x3d'_parent'\x3e${parentWindow}\x3c/option\x3e\x3c/select\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd colspan\x3d'2'\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' type\x3d'submit' id\x3d'${id}_setButton'\x3e${set}\x3c/button\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' type\x3d'button' id\x3d'${id}_cancelButton'\x3e${buttonCancel}\x3c/button\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e",
_initButton:function(){this.inherited(arguments);this.button.loadDropDown=d.hitch(this,"_loadDropDown");this._connectTagEvents()},_loadDropDown:function(a){v("dojo/i18n ../../TooltipDialog ../../registry ../../form/Button ../../form/Select ../../form/ValidationTextBox dojo/i18n!../../nls/common dojo/i18n!../nls/LinkDialog".split(" "),d.hitch(this,function(c,b,e){var h=this;this.tag="insertImage"==this.command?"img":"a";c=d.delegate(c.getLocalization("dijit","common",this.lang),c.getLocalization("dijit._editor",
"LinkDialog",this.lang));var g=this.dropDown=this.button.dropDown=new b({title:c[this.command+"Title"],ownerDocument:this.editor.ownerDocument,dir:this.editor.dir,execute:d.hitch(this,"setValue"),onOpen:function(){h._onOpenDialog();b.prototype.onOpen.apply(this,arguments)},onCancel:function(){setTimeout(d.hitch(h,"_onCloseDialog"),0)}});c.urlRegExp=this.urlRegExp;c.id=e.getUniqueId(this.editor.id);this._uniqueId=c.id;this._setContent(g.title+"\x3cdiv style\x3d'border-bottom: 1px black solid;padding-bottom:2pt;margin-bottom:4pt'\x3e\x3c/div\x3e"+
t.substitute(this.linkDialogTemplate,c));g.startup();this._urlInput=e.byId(this._uniqueId+"_urlInput");this._textInput=e.byId(this._uniqueId+"_textInput");this._setButton=e.byId(this._uniqueId+"_setButton");this.own(e.byId(this._uniqueId+"_cancelButton").on("click",d.hitch(this.dropDown,"onCancel")));this._urlInput&&this.own(this._urlInput.on("change",d.hitch(this,"_checkAndFixInput")));this._textInput&&this.own(this._textInput.on("change",d.hitch(this,"_checkAndFixInput")));this._urlRegExp=new RegExp("^"+
this.urlRegExp+"$","i");this._emailRegExp=new RegExp("^"+this.emailRegExp+"$","i");this._urlInput.isValid=d.hitch(this,function(){var f=this._urlInput.get("value");return this._urlRegExp.test(f)||this._emailRegExp.test(f)});this.own(k(g.domNode,"keydown",d.hitch(this,d.hitch(this,function(f){!f||f.keyCode!=x.ENTER||f.shiftKey||f.metaKey||f.ctrlKey||f.altKey||this._setButton.get("disabled")||(g.onExecute(),g.execute(g.get("value")))}))));a()}))},_checkAndFixInput:function(){var a=this,c=this._urlInput.get("value");
this._delayedCheck&&(clearTimeout(this._delayedCheck),this._delayedCheck=null);this._delayedCheck=setTimeout(function(){var b=c,e=!1,h=!1;b&&1<b.length&&(b=d.trim(b),0!==b.indexOf("mailto:")&&(0<b.indexOf("/")?-1===b.indexOf("://")&&"/"!==b.charAt(0)&&b.indexOf("./")&&0!==b.indexOf("../")&&a._hostRxp.test(b)&&(e=!0):a._userAtRxp.test(b)&&(h=!0)));e&&a._urlInput.set("value","http://"+b);h&&a._urlInput.set("value","mailto:"+b);a._setButton.set("disabled",!a._isValid())},250)},_connectTagEvents:function(){this.editor.onLoadDeferred.then(d.hitch(this,
function(){this.own(k(this.editor.editNode,"mouseup",d.hitch(this,"_onMouseUp")));this.own(k(this.editor.editNode,"dblclick",d.hitch(this,"_onDblClick")))}))},_isValid:function(){return this._urlInput.isValid()&&this._textInput.isValid()},_setContent:function(a){this.dropDown.set({parserScope:"dojo",content:a})},_checkValues:function(a){a&&a.urlInput&&(a.urlInput=a.urlInput.replace(/"/g,"\x26quot;"));!this.allowUnsafeHtml&&a&&a.textInput&&("function"===typeof this.linkFilter?a.textInput=this.linkFilter(a.textInput):
w.forEach(this.linkFilter,function(c){a.textInput=a.textInput.replace(c[0],c[1])}));return a},_createlinkEnabledImpl:function(){return!0},setValue:function(a){this._onCloseDialog();if(9>n("ie")){var c=q.getSelection(this.editor.window).getRangeAt(0).endContainer;3===c.nodeType&&(c=c.parentNode);c&&c.nodeName&&c.nodeName.toLowerCase()!==this.tag&&(c=this.editor.selection.getSelectedElement(this.tag));c&&c.nodeName&&c.nodeName.toLowerCase()===this.tag&&this.editor.queryCommandEnabled("unlink")&&(this.editor.selection.selectElementChildren(c),
this.editor.execCommand("unlink"))}a=this._checkValues(a);this.editor.execCommand("inserthtml",t.substitute(this.htmlTemplate,a));y("a",this.editor.document).forEach(function(b){b.innerHTML||m.has(b,"name")||b.parentNode.removeChild(b)},this)},_onCloseDialog:function(){this.editor.focused&&this.editor.focus()},_getCurrentValues:function(a){if(a&&a.tagName.toLowerCase()===this.tag){var c=a.getAttribute("_djrealurl")||a.getAttribute("href");var b=a.getAttribute("target")||"_self";var e=a.textContent||
a.innerText;this.editor.selection.selectElement(a,!0)}else e=this.editor.selection.getSelectedText();return{urlInput:c||"",textInput:e||"",targetSelect:b||""}},_onOpenDialog:function(){if(n("ie")){var a=q.getSelection(this.editor.window);if(a.rangeCount){var c=a.getRangeAt(0);var b=c.endContainer;3===b.nodeType&&(b=b.parentNode);b&&b.nodeName&&b.nodeName.toLowerCase()!==this.tag&&(b=this.editor.selection.getSelectedElement(this.tag));if(!b||b.nodeName&&b.nodeName.toLowerCase()!==this.tag)(a=this.editor.selection.getAncestorElement(this.tag))&&
a.nodeName&&a.nodeName.toLowerCase()==this.tag?(b=a,this.editor.selection.selectElement(b)):c.startContainer===c.endContainer&&(a=c.startContainer.firstChild)&&a.nodeName&&a.nodeName.toLowerCase()==this.tag&&(b=a,this.editor.selection.selectElement(b))}}else b=this.editor.selection.getAncestorElement(this.tag);this.dropDown.reset();this._setButton.set("disabled",!0);this.dropDown.set("value",this._getCurrentValues(b))},_onDblClick:function(a){if(a&&a.target&&(a=a.target,(a.tagName?a.tagName.toLowerCase():
"")===this.tag&&m.get(a,"href"))){var c=this.editor;this.editor.selection.selectElement(a);c.onDisplayChanged();c._updateTimer&&(c._updateTimer.remove(),delete c._updateTimer);c.onNormalizedDisplayChanged();var b=this.button;setTimeout(function(){b.set("disabled",!1);b.loadAndOpenDropDown().then(function(){b.dropDown.focus&&b.dropDown.focus()})},10)}},_onMouseUp:function(){if(n("ff")){var a=this.editor.selection.getAncestorElement(this.tag);if(a){var c=q.getSelection(this.editor.window).getRangeAt(0);
if(c.collapsed&&a.childNodes.length){var b=c.cloneRange();b.selectNodeContents(a.childNodes[a.childNodes.length-1]);b.setStart(a.childNodes[0],0);1!==c.compareBoundaryPoints(b.START_TO_START,b)?c.setStartBefore(a):-1!==c.compareBoundaryPoints(b.END_TO_START,b)&&c.setStartAfter(a)}}}}}),u=r("dijit._editor.plugins.ImgLinkDialog",[l],{linkDialogTemplate:"\x3ctable role\x3d'presentation'\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d'${id}_urlInput'\x3e${url}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cinput dojoType\x3d'dijit.form.ValidationTextBox' regExp\x3d'${urlRegExp}' required\x3d'true' id\x3d'${id}_urlInput' name\x3d'urlInput' data-dojo-props\x3d'intermediateChanges:true'/\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d'${id}_textInput'\x3e${text}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cinput data-dojo-type\x3d'dijit.form.ValidationTextBox' required\x3d'false' id\x3d'${id}_textInput' name\x3d'textInput' data-dojo-props\x3d'intermediateChanges:true'/\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd colspan\x3d'2'\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' type\x3d'submit' id\x3d'${id}_setButton'\x3e${set}\x3c/button\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' type\x3d'button' id\x3d'${id}_cancelButton'\x3e${buttonCancel}\x3c/button\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e",
htmlTemplate:'\x3cimg src\x3d"${urlInput}" _djrealurl\x3d"${urlInput}" alt\x3d"${textInput}" /\x3e',tag:"img",_getCurrentValues:function(a){if(a&&a.tagName.toLowerCase()===this.tag){var c=a.getAttribute("_djrealurl")||a.getAttribute("src");var b=a.getAttribute("alt");this.editor.selection.selectElement(a,!0)}else b=this.editor.selection.getSelectedText();return{urlInput:c||"",textInput:b||""}},_isValid:function(){return this._urlInput.isValid()},_connectTagEvents:function(){this.inherited(arguments);
this.editor.onLoadDeferred.then(d.hitch(this,function(){this.own(k(this.editor.editNode,"mousedown",d.hitch(this,"_selectTag")))}))},_selectTag:function(a){a&&a.target&&(a=a.target,(a.tagName?a.tagName.toLowerCase():"")===this.tag&&this.editor.selection.selectElement(a))},_checkValues:function(a){a&&a.urlInput&&(a.urlInput=a.urlInput.replace(/"/g,"\x26quot;"));a&&a.textInput&&(a.textInput=a.textInput.replace(/"/g,"\x26quot;"));return a},_onDblClick:function(a){if(a&&a.target&&(a=a.target,(a.tagName?
a.tagName.toLowerCase():"")===this.tag&&m.get(a,"src"))){var c=this.editor;this.editor.selection.selectElement(a);c.onDisplayChanged();c._updateTimer&&(c._updateTimer.remove(),delete c._updateTimer);c.onNormalizedDisplayChanged();var b=this.button;setTimeout(function(){b.set("disabled",!1);b.loadAndOpenDropDown().then(function(){b.dropDown.focus&&b.dropDown.focus()})},10)}}});p.registry.createLink=function(a){var c={command:"createLink",allowUnsafeHtml:"allowUnsafeHtml"in a?a.allowUnsafeHtml:!1};
"linkFilter"in a&&(c.linkFilter=a.linkFilter);return new l(c)};p.registry.insertImage=function(){return new u({command:"insertImage"})};l.ImgLinkDialog=u;return l});