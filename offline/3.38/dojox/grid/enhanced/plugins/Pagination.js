//>>built
require({cache:{"url:dojox/grid/enhanced/templates/Pagination.html":'\x3cdiv dojoAttachPoint\x3d"paginatorBar"\r\n\t\x3e\x3ctable cellpadding\x3d"0" cellspacing\x3d"0"  class\x3d"dojoxGridPaginator"\r\n\t\t\x3e\x3ctr\r\n\t\t\t\x3e\x3ctd dojoAttachPoint\x3d"descriptionTd" class\x3d"dojoxGridDescriptionTd"\r\n\t\t\t\t\x3e\x3cdiv dojoAttachPoint\x3d"descriptionDiv" class\x3d"dojoxGridDescription"\x3e\x3c/div\r\n\t\t\t\x3e\x3c/div\x3e\x3c/td\r\n\t\t\t\x3e\x3ctd dojoAttachPoint\x3d"sizeSwitchTd"\x3e\x3c/td\r\n\t\t\t\x3e\x3ctd dojoAttachPoint\x3d"pageStepperTd" class\x3d"dojoxGridPaginatorFastStep"\r\n\t\t\t\t\x3e\x3cdiv dojoAttachPoint\x3d"pageStepperDiv" class\x3d"dojoxGridPaginatorStep"\x3e\x3c/div\r\n\t\t\t\x3e\x3c/td\r\n\t\t\t\x3e\x3ctd dojoAttachPoint\x3d"gotoPageTd" class\x3d"dojoxGridPaginatorGotoTd"\r\n\t\t\t\t\x3e\x3cdiv dojoAttachPoint\x3d"gotoPageDiv" class\x3d"dojoxGridPaginatorGotoDiv" dojoAttachEvent\x3d"onclick:_openGotopageDialog, onkeydown:_openGotopageDialog"\r\n\t\t\t\t\t\x3e\x3cspan class\x3d"dojoxGridWardButtonInner"\x3e\x26#8869;\x3c/span\r\n\t\t\t\t\x3e\x3c/div\r\n\t\t\t\x3e\x3c/td\r\n\t\t\x3e\x3c/tr\r\n\t\x3e\x3c/table\r\n\x3e\x3c/div\x3e\r\n'}});
define("dojox/grid/enhanced/plugins/Pagination","dojo/_base/kernel dojo/_base/declare dojo/_base/array dojo/_base/connect dojo/_base/lang dojo/_base/html dojo/_base/event dojo/query dojo/string dojo/keys dojo/text!../templates/Pagination.html ./Dialog ./_StoreLayer ../_Plugin ../../EnhancedGrid dijit/form/Button dijit/form/NumberTextBox dijit/focus dijit/_Widget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojox/html/metrics dojo/i18n!../nls/Pagination".split(" "),function(q,p,r,M,f,d,B,v,
u,t,C,D,x,E,F,N,O,P,y,z,G,H,m){var I=p("dojox.grid.enhanced.plugins.pagination._GotoPagePane",[y,z,G],{templateString:"\x3cdiv\x3e\x3cdiv class\x3d'dojoxGridDialogMargin' dojoAttachPoint\x3d'_mainMsgNode'\x3e\x3c/div\x3e\x3cdiv class\x3d'dojoxGridDialogMargin'\x3e\x3cinput dojoType\x3d'dijit.form.NumberTextBox' style\x3d'width: 50px;' dojoAttachPoint\x3d'_pageInputBox' dojoAttachEvent\x3d'onKeyUp: _onKey'\x3e\x3c/input\x3e\x3clabel dojoAttachPoint\x3d'_pageLabelNode'\x3e\x3c/label\x3e\x3c/div\x3e\x3cdiv class\x3d'dojoxGridDialogButton'\x3e\x3cbutton dojoType\x3d'dijit.form.Button' dojoAttachPoint\x3d'_confirmBtn' dojoAttachEvent\x3d'onClick: _onConfirm'\x3e\x3c/button\x3e\x3cbutton dojoType\x3d'dijit.form.Button' dojoAttachPoint\x3d'_cancelBtn' dojoAttachEvent\x3d'onClick: _onCancel'\x3e\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e",
widgetsInTemplate:!0,dlg:null,postMixInProperties:function(){this.plugin=this.dlg.plugin},postCreate:function(){this.inherited(arguments);this._mainMsgNode.innerHTML=this.plugin._nls[12];this._confirmBtn.set("label",this.plugin._nls[14]);this._confirmBtn.set("disabled",!0);this._cancelBtn.set("label",this.plugin._nls[15])},_onConfirm:function(a){this._pageInputBox.isValid()&&""!==this._pageInputBox.getDisplayedValue()&&(this.plugin.currentPage(this._pageInputBox.parse(this._pageInputBox.getDisplayedValue())),
this.dlg._gotoPageDialog.hide(),this._pageInputBox.reset());w(a)},_onCancel:function(a){this._pageInputBox.reset();this.dlg._gotoPageDialog.hide();w(a)},_onKey:function(a){this._confirmBtn.set("disabled",!this._pageInputBox.isValid()||""==this._pageInputBox.getDisplayedValue());a.altKey||a.metaKey||a.keyCode!==t.ENTER||this._onConfirm(a)}}),J=p("dojox.grid.enhanced.plugins.pagination._GotoPageDialog",null,{pageCount:0,dlgPane:null,constructor:function(a){this.plugin=a;this.dlgPane=new I({dlg:this});
this.dlgPane.startup();this._gotoPageDialog=new D({refNode:a.grid.domNode,title:this.plugin._nls[11],content:this.dlgPane});this._gotoPageDialog.startup()},_updatePageCount:function(){this.pageCount=this.plugin.getTotalPageNum();this.dlgPane._pageInputBox.constraints={fractional:!1,min:1,max:this.pageCount};this.dlgPane._pageLabelNode.innerHTML=u.substitute(this.plugin._nls[13],[this.pageCount])},showDialog:function(){this._updatePageCount();this._gotoPageDialog.show()},destroy:function(){this._gotoPageDialog.destroy()}}),
K=p("dojox.grid.enhanced.plugins._ForcedPageStoreLayer",x._StoreLayer,{tags:["presentation"],constructor:function(a){this._plugin=a},_fetch:function(a){var b=this,c=b._plugin,e=c.grid,g=a.scope||q.global,h=a.onBegin;a.start=(c._currentPage-1)*c._currentPageSize+a.start;b.startIdx=a.start;b.endIdx=a.start+c._currentPageSize-1;var l=c._paginator;c._showAll||(c._showAll=!l.sizeSwitch&&!l.pageStepper&&!l.gotoButton);h&&c._showAll?a.onBegin=function(k,n){c._maxSize=c._currentPageSize=k;b.startIdx=0;b.endIdx=
k-1;c._paginator._update();n.onBegin=h;n.onBegin.call(g,k,n)}:h&&(a.onBegin=function(k,n){n.start=0;n.count=c._currentPageSize;c._maxSize=k;b.endIdx=b.endIdx>=k?k-1:b.endIdx;b.startIdx>k&&0!==k&&(e._pending_requests[n.start]=!1,c.firstPage());c._paginator._update();n.onBegin=h;n.onBegin.call(g,Math.min(c._currentPageSize,k-b.startIdx),n)});return f.hitch(this._store,this._originFetch)(a)}}),w=function(a){try{a&&B.stop(a)}catch(b){}},L=p("dojox.grid.enhanced.plugins.pagination._Focus",null,{_focusedNode:null,
_isFocused:!1,constructor:function(a){this._pager=a;a.plugin.connect(a,"onSwitchPageSize",f.hitch(this,"_onActive"));a.plugin.connect(a,"onPageStep",f.hitch(this,"_onActive"));a.plugin.connect(a,"onShowGotoPageDialog",f.hitch(this,"_onActive"));a.plugin.connect(a,"_update",f.hitch(this,"_moveFocus"))},_onFocus:function(a,b){if(!this._isFocused)var c=this._focusedNode||v("[tabindex]",this._pager.domNode)[0];else if(b&&this._focusedNode){b=0<b?-1:1;for(var e=parseInt(this._focusedNode.getAttribute("tabindex"),
10)+b;-3<=e&&0>e&&!(c=v("[tabindex\x3d"+e+"]",this._pager.domNode)[0]);)e+=b}return this._focus(c,a)},_onBlur:function(a,b){if(!b||!this._focusedNode)return this._isFocused=!1,this._focusedNode&&d.hasClass(this._focusedNode,"dojoxGridButtonFocus")&&d.removeClass(this._focusedNode,"dojoxGridButtonFocus"),!0;var c;a=0<b?-1:1;for(b=parseInt(this._focusedNode.getAttribute("tabindex"),10)+a;-3<=b&&0>b&&!(c=v("[tabindex\x3d"+b+"]",this._pager.domNode)[0]);)b+=a;c||(this._isFocused=!1,d.hasClass(this._focusedNode,
"dojoxGridButtonFocus")&&d.removeClass(this._focusedNode,"dojoxGridButtonFocus"));return c?!1:!0},_onMove:function(a,b,c){if(this._focusedNode)for(a=this._focusedNode.getAttribute("tabindex"),b=1==b?"nextSibling":"previousSibling",c=this._focusedNode[b];c;){if(c.getAttribute("tabindex")==a){this._focus(c);break}c=c[b]}},_focus:function(a,b){return a?(this._isFocused=!0,q.isIE&&this._focusedNode&&d.removeClass(this._focusedNode,"dojoxGridButtonFocus"),this._focusedNode=a,a.focus(),q.isIE&&d.addClass(a,
"dojoxGridButtonFocus"),w(b),!0):!1},_onActive:function(a){this._focusedNode=a.target;this._isFocused||this._pager.plugin.grid.focus.focusArea("pagination"+this._pager.position)},_moveFocus:function(){if(this._focusedNode&&!this._focusedNode.getAttribute("tabindex")){for(var a=this._focusedNode.nextSibling;a;){if(a.getAttribute("tabindex")){this._focus(a);return}a=a.nextSibling}for(a=this._focusedNode.previousSibling;a;){if(a.getAttribute("tabindex")){this._focus(a);return}a=a.previousSibling}this._focusedNode=
null;this._onBlur()}else q.isIE&&this._focusedNode&&d.addClass(this._focusedNode,"dojoxGridButtonFocus")}}),A=p("dojox.grid.enhanced.plugins._Paginator",[y,z],{templateString:C,constructor:function(a){f.mixin(this,a);this.grid=this.plugin.grid},postCreate:function(){this.inherited(arguments);var a=this,b=this.grid;this.plugin.connect(b,"_resize",f.hitch(this,"_resetGridHeight"));this._originalResize=b.resize;b.resize=function(c,e){a._changeSize=c;a._resultSize=e;a._originalResize.apply(b,arguments)};
this.focus=L(this);this._placeSelf()},destroy:function(){this.inherited(arguments);this.grid.focus.removeArea("pagination"+this.position);this._gotoPageDialog&&this._gotoPageDialog.destroy();this.grid.resize=this._originalResize},onSwitchPageSize:function(a){},onPageStep:function(a){},onShowGotoPageDialog:function(a){},_update:function(){this._updateDescription();this._updatePageStepper();this._updateSizeSwitch();this._updateGotoButton()},_registerFocus:function(a){var b=this.grid.focus,c="pagination"+
this.position;b.addArea({name:c,onFocus:f.hitch(this.focus,"_onFocus"),onBlur:f.hitch(this.focus,"_onBlur"),onMove:f.hitch(this.focus,"_onMove")});b.placeArea(c,a?"before":"after",a?"header":"content")},_placeSelf:function(){var a=this.grid,b="top"==this.position;this.placeAt(b?a.viewsHeaderNode:a.viewsNode,b?"before":"after");this._registerFocus(b)},_resetGridHeight:function(a,b){var c=this.grid;a=a||this._changeSize;b=b||this._resultSize;delete this._changeSize;delete this._resultSize;if(!c._autoHeight){var e=
c._getPadBorder().h;this.plugin.gh||(this.plugin.gh=(c.domNode.clientHeight||d.style(c.domNode,"height"))+2*e);b&&(a=b);a&&(this.plugin.gh=d.contentBox(c.domNode).h+2*e);var g=this.plugin.gh;a=c._getHeaderHeight();b=d.marginBox(this.domNode).h;if("number"===typeof c.autoHeight)e=g+b-e,d.style(c.domNode,"height",e+"px"),d.style(c.viewsNode,"height",e-b-a+"px"),this._styleMsgNode(a,d.marginBox(c.viewsNode).w,e-b-a);else{var h=g-b-a-e;d.style(c.viewsNode,"height",h+"px");var l=r.some(c.views.views,function(k){return k.hasHScrollbar()});
r.forEach(c.viewsNode.childNodes,function(k){d.style(k,"height",h+"px")});r.forEach(c.views.views,function(k){k.scrollboxNode&&(!k.hasHScrollbar()&&l?d.style(k.scrollboxNode,"height",h-H.getScrollbar().h+"px"):d.style(k.scrollboxNode,"height",h+"px"))});this._styleMsgNode(a,d.marginBox(c.viewsNode).w,h)}}},_styleMsgNode:function(a,b,c){d.style(this.grid.messagesNode,{position:"absolute",top:a+"px",width:b+"px",height:c+"px","z-Index":"100"})},_updateDescription:function(){var a=this.plugin.forcePageStoreLayer,
b=this.plugin._maxSize,c=this.plugin._nls;this.description&&this.descriptionDiv&&(this.descriptionDiv.innerHTML=0<b?u.substitute(c[0],[0>=b||1==b?c[5]:c[4],b,a.startIdx+1,a.endIdx+1]):"0 "+(0>=b||1==b?c[5]:c[4]))},_updateSizeSwitch:function(){d.style(this.sizeSwitchTd,"display",this.sizeSwitch?"":"none");this.sizeSwitch&&(1>this.sizeSwitchTd.childNodes.length&&this._createSizeSwitchNodes(),this._updateSwitchNodesStyle())},_createSizeSwitchNodes:function(){var a=null,b=this.plugin._nls,c=f.hitch(this.plugin,
"connect");r.forEach(this.pageSizes,function(e){var g=isFinite(e)?u.substitute(b[2],[e]):b[1],h=isFinite(e)?e:b[16];a=d.create("span",{innerHTML:h,title:g,value:e,tabindex:"-1"},this.sizeSwitchTd,"last");a.setAttribute("aria-label",g);c(a,"onclick",f.hitch(this,"_onSwitchPageSize"));c(a,"onkeydown",f.hitch(this,"_onSwitchPageSize"));c(a,"onmouseover",function(l){d.addClass(l.target,"dojoxGridPageTextHover")});c(a,"onmouseout",function(l){d.removeClass(l.target,"dojoxGridPageTextHover")});a=d.create("span",
{innerHTML:"|"},this.sizeSwitchTd,"last");d.addClass(a,"dojoxGridSeparator")},this);d.destroy(a)},_updateSwitchNodesStyle:function(){var a=null,b=function(c,e){e?(d.addClass(c,"dojoxGridActivedSwitch"),d.removeAttr(c,"tabindex")):(d.addClass(c,"dojoxGridInactiveSwitch"),c.setAttribute("tabindex","-1"))};r.forEach(this.sizeSwitchTd.childNodes,function(c){c.value&&(d.removeClass(c),a=c.value,this.plugin._showAll?b(c,isNaN(parseInt(a,10))):b(c,this.plugin._currentPageSize==a))},this)},_updatePageStepper:function(){d.style(this.pageStepperTd,
"display",this.pageStepper?"":"none");this.pageStepper&&(1>this.pageStepperDiv.childNodes.length?(this._createPageStepNodes(),this._createWardBtns()):this._resetPageStepNodes(),this._updatePageStepNodesStyle())},_createPageStepNodes:function(){for(var a=this._getStartPage(),b=this._getStepPageSize(),c="",e=null,g=a,h=f.hitch(this.plugin,"connect");g<a+this.maxPageStep+1;g++)c=u.substitute(this.plugin._nls[3],[g]),e=d.create("div",{innerHTML:g,value:g,title:c},this.pageStepperDiv,"last"),e.setAttribute("aria-label",
c),h(e,"onclick",f.hitch(this,"_onPageStep")),h(e,"onkeydown",f.hitch(this,"_onPageStep")),h(e,"onmouseover",function(l){d.addClass(l.target,"dojoxGridPageTextHover")}),h(e,"onmouseout",function(l){d.removeClass(l.target,"dojoxGridPageTextHover")}),d.style(e,"display",g<a+b?"":"none")},_createWardBtns:function(){var a=this,b=this.plugin._nls,c={prevPage:"\x26#60;",firstPage:"\x26#171;",nextPage:"\x26#62;",lastPage:"\x26#187;"},e=function(g,h,l){var k=d.create("div",{value:g,title:h,tabindex:"-2"},
a.pageStepperDiv,l);a.plugin.connect(k,"onclick",f.hitch(a,"_onPageStep"));a.plugin.connect(k,"onkeydown",f.hitch(a,"_onPageStep"));k.setAttribute("aria-label",h);g=d.create("span",{value:g,title:h,innerHTML:c[g]},k,l);d.addClass(g,"dojoxGridWardButtonInner")};e("prevPage",b[6],"first");e("firstPage",b[7],"first");e("nextPage",b[8],"last");e("lastPage",b[9],"last")},_resetPageStepNodes:function(){for(var a=this._getStartPage(),b=this._getStepPageSize(),c=this.pageStepperDiv.childNodes,e=null,g=a,
h=2,l;h<c.length-2;h++,g++)e=c[h],g<a+b?(l=u.substitute(this.plugin._nls[3],[g]),d.attr(e,{innerHTML:g,title:l,value:g}),d.style(e,"display",""),e.setAttribute("aria-label",l)):d.style(e,"display","none")},_updatePageStepNodesStyle:function(){var a=null,b=this.plugin.currentPage(),c=this.plugin.getTotalPageNum(),e=function(g,h,l){var k=g.value,n=h?"dojoxGrid"+k+"Btn":"dojoxGridInactived";h=h?"dojoxGrid"+k+"BtnDisable":"dojoxGridActived";l?(d.addClass(g,h),d.removeAttr(g,"tabindex")):(d.addClass(g,
n),g.setAttribute("tabindex","-2"))};r.forEach(this.pageStepperDiv.childNodes,function(g){d.removeClass(g);isNaN(parseInt(g.value,10))?(d.addClass(g,"dojoxGridWardButton"),e(g,!0,b===("prevPage"==g.value||"firstPage"==g.value?1:c))):(a=parseInt(g.value,10),e(g,!1,a===b||"none"===d.style(g,"display")))},this)},_showGotoButton:function(a){this.gotoButton=a;this._updateGotoButton()},_updateGotoButton:function(){this.gotoButton?("none"==d.style(this.gotoPageTd,"display")&&d.style(this.gotoPageTd,"display",
""),this.gotoPageDiv.setAttribute("title",this.plugin._nls[10]),d.toggleClass(this.gotoPageDiv,"dojoxGridPaginatorGotoDivDisabled",1>=this.plugin.getTotalPageNum()),1>=this.plugin.getTotalPageNum()?d.removeAttr(this.gotoPageDiv,"tabindex"):this.gotoPageDiv.setAttribute("tabindex","-3")):(this._gotoPageDialog&&this._gotoPageDialog.destroy(),d.removeAttr(this.gotoPageDiv,"tabindex"),d.style(this.gotoPageTd,"display","none"))},_openGotopageDialog:function(a){1>=this.plugin.getTotalPageNum()||"keydown"===
a.type&&a.keyCode!==t.ENTER&&a.keyCode!==t.SPACE||(this._gotoPageDialog||(this._gotoPageDialog=new J(this.plugin)),this._gotoPageDialog.showDialog(),this.onShowGotoPageDialog(a))},_onSwitchPageSize:function(a){if("keydown"!==a.type||a.keyCode===t.ENTER||a.keyCode===t.SPACE)this.onSwitchPageSize(a),this.plugin.currentPageSize(a.target.value)},_onPageStep:function(a){if("keydown"!==a.type||a.keyCode===t.ENTER||a.keyCode===t.SPACE){var b=this.plugin,c=a.target.value;this.onPageStep(a);if(isNaN(parseInt(c,
10)))b[c]();else b.currentPage(parseInt(c,10))}},_getStartPage:function(){var a=this.plugin.currentPage(),b=this.maxPageStep,c=parseInt(b/2,10),e=this.plugin.getTotalPageNum();return a<c||1>a-c||e<=b?1:e-a<c&&0<=a-b?e-b+1:a-c},_getStepPageSize:function(){var a=this._getStartPage(),b=this.plugin.getTotalPageNum(),c=this.maxPageStep;return a+c>b?b-a+1:c}});p=p("dojox.grid.enhanced.plugins.Pagination",E,{name:"pagination",defaultPageSize:25,defaultPage:1,description:!0,sizeSwitch:!0,pageStepper:!0,gotoButton:!1,
pageSizes:[10,25,50,100,Infinity],maxPageStep:7,position:"bottom",init:function(){var a=this.grid;a.usingPagination=!0;this._initOptions();this._currentPage=this.defaultPage;this._currentPageSize=this.grid.rowsPerPage=this.defaultPageSize;this._store=a.store;this.forcePageStoreLayer=new K(this);x.wrap(a,"_storeLayerFetch",this.forcePageStoreLayer);this._paginator="top"!=this.option.position?new A(f.mixin(this.option,{position:"bottom",plugin:this})):new A(f.mixin(this.option,{position:"top",plugin:this}));
this._regApis()},destroy:function(){this.inherited(arguments);this._paginator.destroy();var a=this.grid;a.unwrap(this.forcePageStoreLayer.name());a.scrollToRow=this._gridOriginalfuncs[0];a._onNew=this._gridOriginalfuncs[1];a.removeSelectedRows=this._gridOriginalfuncs[2];this._nls=this._paginator=null},currentPage:function(a){a<=this.getTotalPageNum()&&0<a&&this._currentPage!==a&&(this._currentPage=a,this.grid._refresh(!0),this.grid.resize());return this._currentPage},nextPage:function(){this.currentPage(this._currentPage+
1)},prevPage:function(){this.currentPage(this._currentPage-1)},firstPage:function(){this.currentPage(1)},lastPage:function(){this.currentPage(this.getTotalPageNum())},currentPageSize:function(a){if(!isNaN(a)){var b=this.grid,c=this._currentPageSize*(this._currentPage-1);this._showAll=!isFinite(a);this.grid.usingPagination=!this._showAll;this._currentPageSize=this._showAll?this._maxSize:a;b.rowsPerPage=this._showAll?this._defaultRowsPerPage:a;c+Math.min(this._currentPageSize,this._maxSize)>this._maxSize?
this.lastPage():(a=Math.ceil(c/this._currentPageSize)+1,a!==this._currentPage?this.currentPage(a):this.grid._refresh(!0));this.grid.resize()}return this._currentPageSize},getTotalPageNum:function(){return Math.ceil(this._maxSize/this._currentPageSize)},getTotalRowCount:function(){return this._maxSize},scrollToRow:function(a){var b=parseInt(a/this._currentPageSize,10)+1;if(!(b>this.getTotalPageNum()))return this.currentPage(b),this._gridOriginalfuncs[0](a%this._currentPageSize)},removeSelectedRows:function(){this._multiRemoving=
!0;this._gridOriginalfuncs[2].apply();this._multiRemoving=!1;this.grid.store.save&&this.grid.store.save();this.grid.resize();this.grid._refresh()},showGotoPageButton:function(a){this._paginator.gotoButton=a;this._paginator._updateGotoButton()},gotoPage:function(a){q.deprecated("dojox.grid.enhanced.EnhancedGrid.gotoPage(page)","use dojox.grid.enhanced.EnhancedGrid.currentPage(page) instead","1.8");this.currentPage(a)},gotoFirstPage:function(){q.deprecated("dojox.grid.enhanced.EnhancedGrid.gotoFirstPage()",
"use dojox.grid.enhanced.EnhancedGrid.firstPage() instead","1.8");this.firstPage()},gotoLastPage:function(){q.deprecated("dojox.grid.enhanced.EnhancedGrid.gotoLastPage()","use dojox.grid.enhanced.EnhancedGrid.lastPage() instead","1.8");this.lastPage()},changePageSize:function(a){q.deprecated("dojox.grid.enhanced.EnhancedGrid.changePageSize(size)","use dojox.grid.enhanced.EnhancedGrid.currentPageSize(size) instead","1.8");this.currentPageSize(a)},_nls:null,_showAll:!1,_maxSize:0,_defaultRowsPerPage:25,
_currentPage:1,_currentPageSize:25,_initOptions:function(){this._defaultRowsPerPage=this.grid.rowsPerPage||25;this.defaultPage=1<=this.option.defaultPage?parseInt(this.option.defaultPage,10):1;this.option.description=void 0!==this.option.description?!!this.option.description:this.description;this.option.sizeSwitch=void 0!==this.option.sizeSwitch?!!this.option.sizeSwitch:this.sizeSwitch;this.option.pageStepper=void 0!==this.option.pageStepper?!!this.option.pageStepper:this.pageStepper;this.option.gotoButton=
void 0!==this.option.gotoButton?!!this.option.gotoButton:this.gotoButton;if(f.isArray(this.option.pageSizes)){var a=[];r.forEach(this.option.pageSizes,function(b){b="number"==typeof b?b:parseInt(b,10);!isNaN(b)&&0<b?a.push(b):0>r.indexOf(a,Infinity)&&a.push(Infinity)},this);this.option.pageSizes=a.sort(function(b,c){return b-c})}else this.option.pageSizes=this.pageSizes;this.defaultPageSize=1<=this.option.defaultPageSize?parseInt(this.option.defaultPageSize,10):this.option.pageSizes[0];this.option.maxPageStep=
0<this.option.maxPageStep?this.option.maxPageStep:this.maxPageStep;this.option.position=f.isString(this.option.position)?this.option.position.toLowerCase():this.position;this._nls=[m.descTemplate,m.allItemsLabelTemplate,m.pageSizeLabelTemplate,m.pageStepLabelTemplate,m.itemTitle,m.singularItemTitle,m.prevTip,m.firstTip,m.nextTip,m.lastTip,m.gotoButtonTitle,m.dialogTitle,m.dialogIndication,m.pageCountIndication,m.dialogConfirm,m.dialogCancel,m.all]},_regApis:function(){var a=this.grid;a.currentPage=
f.hitch(this,this.currentPage);a.nextPage=f.hitch(this,this.nextPage);a.prevPage=f.hitch(this,this.prevPage);a.firstPage=f.hitch(this,this.firstPage);a.lastPage=f.hitch(this,this.lastPage);a.currentPageSize=f.hitch(this,this.currentPageSize);a.showGotoPageButton=f.hitch(this,this.showGotoPageButton);a.getTotalRowCount=f.hitch(this,this.getTotalRowCount);a.getTotalPageNum=f.hitch(this,this.getTotalPageNum);a.gotoPage=f.hitch(this,this.gotoPage);a.gotoFirstPage=f.hitch(this,this.gotoFirstPage);a.gotoLastPage=
f.hitch(this,this.gotoLastPage);a.changePageSize=f.hitch(this,this.changePageSize);this._gridOriginalfuncs=[f.hitch(a,a.scrollToRow),f.hitch(a,a._onNew),f.hitch(a,a.removeSelectedRows)];a.scrollToRow=f.hitch(this,this.scrollToRow);a.removeSelectedRows=f.hitch(this,this.removeSelectedRows);a._onNew=f.hitch(this,this._onNew);this.connect(a,"_onDelete",f.hitch(this,this._onDelete))},_onNew:function(a,b){var c=this.getTotalPageNum();if((this._currentPage===c||0===c)&&this.grid.get("rowCount")<this._currentPageSize||
this._showAll)f.hitch(this.grid,this._gridOriginalfuncs[1])(a,b),this.forcePageStoreLayer.endIdx++;this._maxSize++;this._showAll&&this._currentPageSize++;this._showAll&&this.grid.autoHeight?this.grid._refresh():this._paginator._update()},_onDelete:function(){this._multiRemoving||(this.grid.resize(),this._showAll&&this.grid._refresh());0===this.grid.get("rowCount")&&this.prevPage()}});F.registerPlugin(p);return p});