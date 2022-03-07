//>>built
define("dojox/form/ListInput","dojo/_base/kernel dojo/_base/lang dojo/_base/array dojo/_base/json dojo/_base/fx dojo/_base/window dojo/_base/connect dojo/dom-class dojo/dom-style dojo/dom-construct dojo/dom-geometry dojo/keys dijit/_Widget dijit/_TemplatedMixin dijit/form/_FormValueWidget dijit/form/ValidationTextBox dijit/InlineEditBox dojo/i18n!dijit/nls/common dojo/_base/declare".split(" "),function(l,c,n,u,p,q,r,e,v,g,t,h,w,x,y,z,A,B,m){l.experimental("dojox.form.ListInput");l=m("dojox.form.ListInput",
[y],{constructor:function(){this._items=[];c.isArray(this.delimiter)||(this.delimiter=[this.delimiter]);var a="("+this.delimiter.join("|")+")?";this.regExp="^"+this.regExp+a+"$"},inputClass:"dojox.form._ListInputInputBox",inputHandler:"onChange",inputProperties:{minWidth:50},submitOnlyValidValue:!0,useOnBlur:!0,readOnlyInput:!1,maxItems:null,showCloseButtonWhenValid:!0,showCloseButtonWhenInvalid:!0,regExp:".*",delimiter:",",constraints:{},baseClass:"dojoxListInput",type:"select",value:"",templateString:'\x3cdiv dojoAttachPoint\x3d"focusNode" class\x3d"dijit dijitReset dijitLeft dojoxListInput"\x3e\x3cselect dojoAttachpoint\x3d"_selectNode" multiple\x3d"multiple" class\x3d"dijitHidden" ${!nameAttrSetting}\x3e\x3c/select\x3e\x3cul dojoAttachPoint\x3d"_listInput"\x3e\x3cli dojoAttachEvent\x3d"onclick: _onClick" class\x3d"dijitInputField dojoxListInputNode dijitHidden" dojoAttachPoint\x3d"_inputNode"\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/div\x3e',
_setNameAttr:"_selectNode",useAnim:!0,duration:500,easingIn:null,easingOut:null,readOnlyItem:!1,useArrowForEdit:!0,_items:null,_lastAddedItem:null,_currentItem:null,_input:null,_count:0,postCreate:function(){this.inherited(arguments);this._createInputBox()},_setReadOnlyInputAttr:function(a){if(!this._started)return this._createInputBox();this.readOnlyInput=a;this._createInputBox()},_setReadOnlyItemAttr:function(a){if(this._started)for(var b in this._items)this._items[b].set("readOnlyItem",a)},_createInputBox:function(){e.toggle(this._inputNode,
"dijitHidden",this.readOnlyInput);if(!this.readOnlyInput&&!this._input){if(null===this.inputHandler)return console.warn("you must add some handler to connect to input field"),!1;c.isString(this.inputHandler)&&(this.inputHandler=this.inputHandler.split(","));c.isString(this.inputProperties)&&(this.inputProperties=u.fromJson(this.inputProperties));var a=c.getObject(this.inputClass,!1);this.inputProperties.regExp=this.regExpGen(this.constraints);this._input=new a(this.inputProperties);this._input.startup();
this._inputNode.appendChild(this._input.domNode);n.forEach(this.inputHandler,function(b){this.connect(this._input,c.trim(b),"_onHandler")},this);this.connect(this._input,"onKeyDown","_inputOnKeyDown");this.connect(this._input,"onBlur","_inputOnBlur")}},compare:function(a,b){a=a.join(",");b=b.join(",");return a>b?1:a<b?-1:0},add:function(a){if(!(this._count>=this.maxItems&&null!==this.maxItems)){this._lastValueReported=this._getValues();c.isArray(a)||(a=[a]);for(var b in a){var d=a[b];if(""!==d&&"string"==
typeof d){this._count++;this.regExpGen(this.constraints);this._lastAddedItem=new C({index:this._items.length,readOnlyItem:this.readOnlyItem,value:d,regExp:this.regExpGen(this.constraints)});this._lastAddedItem.startup();this._testItem(this._lastAddedItem,d);this._lastAddedItem.onClose=c.hitch(this,"_onItemClose",this._lastAddedItem);this._lastAddedItem.onChange=c.hitch(this,"_onItemChange",this._lastAddedItem);this._lastAddedItem.onEdit=c.hitch(this,"_onItemEdit",this._lastAddedItem);this._lastAddedItem.onKeyDown=
c.hitch(this,"_onItemKeyDown",this._lastAddedItem);this.useAnim&&v.set(this._lastAddedItem.domNode,{opacity:0,display:""});this._placeItem(this._lastAddedItem.domNode);this.useAnim&&p.fadeIn({node:this._lastAddedItem.domNode,duration:this.duration,easing:this.easingIn}).play();this._items[this._lastAddedItem.index]=this._lastAddedItem;if(this._onChangeActive&&this.intermediateChanges)this.onChange(d);if(this._count>=this.maxItems&&null!==this.maxItems)break}}this._updateValues();0==this._lastValueReported.length&&
(this._lastValueReported=this.value);this.readOnlyInput||this._input.set("value","");if(this._onChangeActive)this.onChange(this.value);this._setReadOnlyWhenMaxItemsReached()}},_setReadOnlyWhenMaxItemsReached:function(){this.set("readOnlyInput",this._count>=this.maxItems&&null!==this.maxItems)},_setSelectNode:function(){this._selectNode.options.length=0;var a=this.submitOnlyValidValue?this.get("MatchedValue"):this.value;c.isArray(a)&&n.forEach(a,function(b){this._selectNode.options[this._selectNode.options.length]=
new Option(b,b,!0,!0)},this)},_placeItem:function(a){g.place(a,this._inputNode,"before")},_getCursorPos:function(a){if("undefined"!=typeof a.selectionStart)return a.selectionStart;try{a.focus()}catch(d){}var b=a.createTextRange();b.moveToBookmark(q.doc.selection.createRange().getBookmark());b.moveEnd("character",a.value.length);try{return a.value.length-b.text.length}finally{b=null}},_onItemClose:function(a){this.disabled||(this.useAnim?p.fadeOut({node:a.domNode,duration:this.duration,easing:this.easingOut,
onEnd:c.hitch(this,"_destroyItem",a)}).play():this._destroyItem(a))},_onItemKeyDown:function(a,b){!this.readOnlyItem&&this.useArrowForEdit&&(b.keyCode==h.LEFT_ARROW&&0==this._getCursorPos(b.target)?this._editBefore(a):b.keyCode==h.RIGHT_ARROW&&this._getCursorPos(b.target)==b.target.value.length&&this._editAfter(a))},_editBefore:function(a){this._currentItem=this._getPreviousItem(a);null!==this._currentItem&&this._currentItem.edit()},_editAfter:function(a){this._currentItem=this._getNextItem(a);null!==
this._currentItem&&this._currentItem.edit();this.readOnlyInput||null===this._currentItem&&this._focusInput()},_onItemChange:function(a,b){b=b||a.get("value");this._testItem(a,b);this._updateValues()},_onItemEdit:function(a){e.remove(a.domNode,["dijitError",this.baseClass+"Match",this.baseClass+"Mismatch"])},_testItem:function(a,b){var d=new RegExp(this.regExpGen(this.constraints));b=(""+b).match(d);e.remove(a.domNode,this.baseClass+(b?"Mismatch":"Match"));e.add(a.domNode,this.baseClass+(b?"Match":
"Mismatch"));e.toggle(a.domNode,"dijitError",!b);this.showCloseButtonWhenValid&&b||this.showCloseButtonWhenInvalid&&!b?e.add(a.domNode,this.baseClass+"Closable"):e.remove(a.domNode,this.baseClass+"Closable")},_getValueAttr:function(){return this.value},_setValueAttr:function(a){this._destroyAllItems();this.add(this._parseValue(a))},_parseValue:function(a){if("string"==typeof a){c.isString(this.delimiter)&&(this.delimiter=[this.delimiter]);var b=new RegExp("^.*("+this.delimiter.join("|")+").*");if(a.match(b))return b=
new RegExp(this.delimiter.join("|")),a.split(b)}return a},regExpGen:function(a){return this.regExp},_setDisabledAttr:function(a){if(!this.readOnlyItem)for(var b in this._items)this._items[b].set("disabled",a);this.readOnlyInput||this._input.set("disabled",a);this.inherited(arguments)},_onHandler:function(a){a=this._parseValue(a);c.isArray(a)&&this.add(a)},_onClick:function(a){this._focusInput()},_focusInput:function(){!this.readOnlyInput&&this._input.focus&&this._input.focus()},_inputOnKeyDown:function(a){this._currentItem=
null;var b=this._input.get("value");a.keyCode==h.BACKSPACE&&""==b&&this.get("lastItem")?this._destroyItem(this.get("lastItem")):a.keyCode==h.ENTER&&""!=b?this.add(b):a.keyCode==h.LEFT_ARROW&&0==this._getCursorPos(this._input.focusNode)&&!this.readOnlyItem&&this.useArrowForEdit&&this._editBefore()},_inputOnBlur:function(){var a=this._input.get("value");this.useOnBlur&&""!=a&&this.add(a)},_getMatchedValueAttr:function(){return this._getValues(c.hitch(this,this._matchValidator))},_getMismatchedValueAttr:function(){return this._getValues(c.hitch(this,
this._mismatchValidator))},_getValues:function(a){var b=[];a=a||this._nullValidator;for(var d in this._items){var f=this._items[d];null!==f&&(f=f.get("value"),a(f)&&b.push(f))}return b},_nullValidator:function(a){return!0},_matchValidator:function(a){var b=new RegExp(this.regExpGen(this.constraints));return a.match(b)},_mismatchValidator:function(a){var b=new RegExp(this.regExpGen(this.constraints));return!a.match(b)},_getLastItemAttr:function(){return this._getSomeItem()},_getSomeItem:function(a,
b){a=a||!1;b=b||"last";var d=null,f=-1,k;for(k in this._items)if(null!==this._items[k]){if("before"==b&&this._items[k]===a)break;d=this._items[k];if("first"==b||0==f){f=1;break}"after"==b&&this._items[k]===a&&(f=0)}"after"==b&&0==f&&(d=null);return d},_getPreviousItem:function(a){return this._getSomeItem(a,"before")},_getNextItem:function(a){return this._getSomeItem(a,"after")},_destroyItem:function(a,b){this._items[a.index]=null;a.destroy();this._count--;!1!==b&&(this._updateValues(),this._setReadOnlyWhenMaxItemsReached())},
_updateValues:function(){this.value=this._getValues();this._setSelectNode()},_destroyAllItems:function(){for(var a in this._items)null!=this._items[a]&&this._destroyItem(this._items[a],!1);this._items=[];this._count=0;this.value=null;this._setSelectNode();this._setReadOnlyWhenMaxItemsReached()},destroy:function(){this._destroyAllItems();this._lastAddedItem=null;this._input||this._input.destroy();this.inherited(arguments)}});var C=m("dojox.form._ListInputInputItem",[w,x],{templateString:'\x3cli class\x3d"dijit dijitReset dijitLeft dojoxListInputItem" dojoAttachEvent\x3d"onclick: onClick" \x3e\x3cspan dojoAttachPoint\x3d"labelNode"\x3e\x3c/span\x3e\x3c/li\x3e',
closeButtonNode:null,readOnlyItem:!0,baseClass:"dojoxListInputItem",value:"",regExp:".*",_editBox:null,_handleKeyDown:null,attributeMap:{value:{node:"labelNode",type:"innerHTML"}},postMixInProperties:function(){c.mixin(this,B);this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this.closeButtonNode=g.create("span",{"class":"dijitButtonNode dijitDialogCloseIcon",title:this.itemClose,onclick:c.hitch(this,"onClose"),onmouseenter:c.hitch(this,"_onCloseEnter"),onmouseleave:c.hitch(this,
"_onCloseLeave")},this.domNode);g.create("span",{"class":"closeText",title:this.itemClose,innerHTML:"x"},this.closeButtonNode)},startup:function(){this.inherited(arguments);this._createInlineEditBox()},_setReadOnlyItemAttr:function(a){(this.readOnlyItem=a)?this._editBox&&this._editBox.set("disabled",!0):this._createInlineEditBox()},_createInlineEditBox:function(){!this.readOnlyItem&&this._started&&(this._editBox?this._editBox.set("disabled",!1):(this._editBox=new A({value:this.value,editor:"dijit.form.ValidationTextBox",
editorParams:{regExp:this.regExp}},this.labelNode),this.connect(this._editBox,"edit","_onEdit"),this.connect(this._editBox,"onChange","_onCloseEdit"),this.connect(this._editBox,"onCancel","_onCloseEdit")))},edit:function(){this.readOnlyItem||this._editBox.edit()},_onCloseEdit:function(a){e.remove(this.closeButtonNode,this.baseClass+"Edited");r.disconnect(this._handleKeyDown);this.onChange(a)},_onEdit:function(){e.add(this.closeButtonNode,this.baseClass+"Edited");this._handleKeyDown=r.connect(this._editBox.editWidget,
"_onKeyPress",this,"onKeyDown");this.onEdit()},_setDisabledAttr:function(a){this.readOnlyItem||this._editBox.set("disabled",a)},_getValueAttr:function(){return!this.readOnlyItem&&this._started?this._editBox.get("value"):this.value},destroy:function(){this._editBox&&this._editBox.destroy();this.inherited(arguments)},_onCloseEnter:function(){e.add(this.closeButtonNode,"dijitDialogCloseIcon-hover")},_onCloseLeave:function(){e.remove(this.closeButtonNode,"dijitDialogCloseIcon-hover")},onClose:function(){},
onEdit:function(){},onClick:function(){},onChange:function(a){},onKeyDown:function(a){}});m("dojox.form._ListInputInputBox",[z],{minWidth:50,intermediateChanges:!0,regExp:".*",_sizer:null,onChange:function(a){this.inherited(arguments);null===this._sizer&&(this._sizer=g.create("div",{style:{position:"absolute",left:"-10000px",top:"-10000px"}},q.body()));this._sizer.innerHTML=a;var b=t.getContentBox(this._sizer).w+this.minWidth;t.setContentSize(this.domNode,{w:b})},destroy:function(){g.destroy(this._sizer);
this.inherited(arguments)}});return l});