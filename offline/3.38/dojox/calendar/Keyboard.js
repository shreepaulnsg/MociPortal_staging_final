//>>built
define("dojox/calendar/Keyboard","dojo/_base/array dojo/_base/lang dojo/_base/declare dojo/on dojo/_base/event dojo/keys".split(" "),function(r,q,t,u,m,k){return t("dojox.calendar.Keyboard",null,{keyboardUpDownUnit:"minute",keyboardUpDownSteps:15,keyboardLeftRightUnit:"day",keyboardLeftRightSteps:1,allDayKeyboardUpDownUnit:"day",allDayKeyboardUpDownSteps:7,allDayKeyboardLeftRightUnit:"day",allDayKeyboardLeftRightSteps:1,postCreate:function(){this.inherited(arguments);this._viewHandles.push(u(this.domNode,
"keydown",q.hitch(this,this._onKeyDown)))},resizeModifier:"ctrl",maxScrollAnimationDuration:1E3,tabIndex:"0",focusedItem:null,_isItemFocused:function(b){return null!=this.focusedItem&&this.focusedItem.id==b.id},_setFocusedItemAttr:function(b){if(b!=this.focusedItem){var a=this.focusedItem;this._set("focusedItem",b);this.updateRenderers([a,this.focusedItem],!0);this.onFocusChange({oldValue:a,newValue:b})}null!=b&&(null!=this.owner&&null!=this.owner.get("focusedItem")&&this.owner.set("focusedItem",
null),null!=this._secondarySheet&&null!=this._secondarySheet.set("focusedItem")&&this._secondarySheet.set("focusedItem",null))},onFocusChange:function(b){},showFocus:!1,_focusNextItem:function(b){if(!this.renderData||!this.renderData.items||0==this.renderData.items.length)return null;var a=-1,c=this.renderData.items,l=c.length-1,f=this.get("focusedItem");null==f?a=0<b?0:l:(r.some(c,q.hitch(this,function(g,h){(g=g.id==f.id)&&(a=h);return g})),a=this._focusNextItemImpl(b,a,l));for(var e=!1,d=-1;d!=
a&&(!e||0!=a);){e||0!=a||(e=!0);d=c[a];if(null!=this.rendererManager.itemToRenderer[d.id]){this.set("focusedItem",d);break}d=a;a=this._focusNextItemImpl(b,a,l)}},_focusNextItemImpl:function(b,a,c){if(-1==a)a=0<b?0:c;else{if(0==a&&-1==b||a==c&&1==b)return a;a=0<b?++a:--a}return a},_handlePrevNextKeyCode:function(b,a){this.isLeftToRight()||(a=1==a?-1:1);this.showFocus=!0;this._focusNextItem(a);a=this.get("focusedItem");!b.ctrlKey&&a&&this.set("selectedItem",a);a&&this.ensureVisibility(a.startTime,a.endTime,
"both",void 0,this.maxScrollAnimationDuration)},_checkDir:function(b,a){return this.isLeftToRight()&&b==a||!this.isLeftToRight()&&b==("left"==a?"right":"left")},_keyboardItemEditing:function(b,a){m.stop(b);var c=this._edProps;if(c.editedItem.allDay||this.roundToDay||"label"==c.rendererKind){var l="up"==a||"down"==a?this.allDayKeyboardUpDownUnit:this.allDayKeyboardLeftRightUnit;var f="up"==a||"down"==a?this.allDayKeyboardUpDownSteps:this.allDayKeyboardLeftRightSteps}else l="up"==a||"down"==a?this.keyboardUpDownUnit:
this.keyboardLeftRightUnit,f="up"==a||"down"==a?this.keyboardUpDownSteps:this.keyboardLeftRightSteps;if("up"==a||this._checkDir(a,"left"))f=-f;var e=b[this.resizeModifier+"Key"]?"resizeEnd":"move",d="resizeEnd"==e?c.editedItem.endTime:c.editedItem.startTime,g=d,h=c.editedItem.subColumn;if("move"==e&&this.subColumns&&1<this.subColumns.length){var n=this.getSubColumnIndex(h),p=!0;-1!=n&&(this._checkDir(a,"left")?0==n?h=this.subColumns[this.subColumns.length-1]:(p=!1,h=this.subColumns[n-1]):this._checkDir(a,
"right")&&(n==this.subColumns.length-1?h=this.subColumns[0]:(p=!1,h=this.subColumns[n+1])),p&&(g=this.renderData.dateModule.add(d,l,f)))}else g=this.renderData.dateModule.add(d,l,f);this._startItemEditingGesture([d],e,"keyboard",b);this._moveOrResizeItemGesture([g],"keyboard",b,h);this._endItemEditingGesture(e,"keyboard",b,!1);"move"==e?-1==this.renderData.dateModule.compare(g,d)?this.ensureVisibility(c.editedItem.startTime,c.editedItem.endTime,"start"):this.ensureVisibility(c.editedItem.startTime,
c.editedItem.endTime,"end"):this.ensureVisibility(c.editedItem.startTime,c.editedItem.endTime,"end")},_onKeyDown:function(b){var a=this.get("focusedItem");switch(b.keyCode){case k.ESCAPE:this._isEditing&&(this._editingGesture&&this._endItemEditingGesture("keyboard",b,!0),this._endItemEditing("keyboard",!0),this._edProps=null);break;case k.SPACE:m.stop(b);null!=a&&this.setItemSelected(a,b.ctrlKey?!this.isItemSelected(a):!0);break;case k.ENTER:m.stop(b);null!=a&&(this._isEditing?this._endItemEditing("keyboard",
!1):(b=this.rendererManager.itemToRenderer[a.id])&&0<b.length&&this.isItemEditable(a,b[0].kind)&&(this._edProps={renderer:b[0],rendererKind:b[0].kind,tempEditedItem:a,liveLayout:this.liveLayout},this.set("selectedItem",a),this._startItemEditing(a,"keyboard")));break;case k.LEFT_ARROW:m.stop(b);this._isEditing?this._keyboardItemEditing(b,"left"):this._handlePrevNextKeyCode(b,-1);break;case k.RIGHT_ARROW:m.stop(b);this._isEditing?this._keyboardItemEditing(b,"right"):this._handlePrevNextKeyCode(b,1);
break;case k.UP_ARROW:this._isEditing?this._keyboardItemEditing(b,"up"):this.scrollable&&this.scrollView(-1);break;case k.DOWN_ARROW:this._isEditing?this._keyboardItemEditing(b,"down"):this.scrollable&&this.scrollView(1)}}})});