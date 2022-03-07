//>>built
require({cache:{"url:dojox/calendar/templates/MonthColumnView.html":'\x3cdiv data-dojo-attach-events\x3d"keydown:_onKeyDown"\x3e\t\t\r\n\t\x3cdiv data-dojo-attach-point\x3d"columnHeader" class\x3d"dojoxCalendarColumnHeader"\x3e\r\n\t\t\x3ctable data-dojo-attach-point\x3d"columnHeaderTable" class\x3d"dojoxCalendarColumnHeaderTable" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\x3c/table\x3e\r\n\t\x3c/div\x3e\t\r\n\t\x3cdiv data-dojo-attach-point\x3d"vScrollBar" class\x3d"dojoxCalendarVScrollBar"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"vScrollBarContent" style\x3d"visibility:hidden;position:relative; width:1px; height:1px;" \x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\t\r\n\t\x3cdiv data-dojo-attach-point\x3d"scrollContainer" class\x3d"dojoxCalendarScrollContainer"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"sheetContainer" style\x3d"position:relative;left:0;right:0;margin:0;padding:0"\x3e\t\t\t\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"grid" class\x3d"dojoxCalendarGrid"\x3e\r\n\t\t\t\t\x3ctable data-dojo-attach-point\x3d"gridTable" class\x3d"dojoxCalendarGridTable" cellpadding\x3d"0" cellspacing\x3d"0" style\x3d"width:100%"\x3e\x3c/table\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"itemContainer" class\x3d"dojoxCalendarContainer" data-dojo-attach-event\x3d"mousedown:_onGridMouseDown,mouseup:_onGridMouseUp,ondblclick:_onGridDoubleClick,touchstart:_onGridTouchStart,touchmove:_onGridTouchMove,touchend:_onGridTouchEnd"\x3e\r\n\t\t\t\t\x3ctable data-dojo-attach-point\x3d"itemContainerTable" class\x3d"dojoxCalendarContainerTable" cellpadding\x3d"0" cellspacing\x3d"0" style\x3d"width:100%"\x3e\x3c/table\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e \r\n\t\x3c/div\x3e\t\r\n\x3c/div\x3e\r\n'}});
define("dojox/calendar/MonthColumnView","./ViewBase dijit/_TemplatedMixin ./_ScrollBarBase dojo/text!./templates/MonthColumnView.html dojo/_base/declare dojo/_base/event dojo/_base/lang dojo/_base/array dojo/_base/sniff dojo/_base/fx dojo/_base/html dojo/on dojo/dom dojo/dom-class dojo/dom-style dojo/dom-geometry dojo/dom-construct dojo/mouse dojo/query dojo/i18n dojox/html/metrics".split(" "),function(C,D,E,F,G,x,u,M,A,H,I,y,N,p,q,B,r,J,t,K,L){return G("dojox.calendar.MonthColumnView",[C,D],{baseClass:"dojoxCalendarMonthColumnView",
templateString:F,viewKind:"monthColumns",_setTabIndexAttr:"domNode",renderData:null,startDate:null,columnCount:6,daySize:30,showCellLabel:!0,showHiddenItems:!0,verticalRenderer:null,verticalDecorationRenderer:null,percentOverlap:0,horizontalGap:4,columnHeaderFormatLength:null,gridCellDatePattern:null,roundToDay:!0,_layoutUnit:"month",_columnHeaderHandlers:null,constructor:function(){this.invalidatingProperties="columnCount startDate daySize percentOverlap verticalRenderer verticalDecorationRenderer columnHeaderDatePattern horizontalGap scrollBarRTLPosition itemToRendererKindFunc layoutPriorityFunction textDir items showCellLabel showHiddenItems".split(" ");
this._columnHeaderHandlers=[]},postCreate:function(){this.inherited(arguments);this.keyboardUpDownUnit="day";this.keyboardUpDownSteps=1;this.keyboardLeftRightUnit="month";this.keyboardLeftRightSteps=1;this.allDayKeyboardUpDownUnit="day";this.allDayKeyboardUpDownSteps=1;this.allDayKeyboardLeftRightUnit="month";this.allDayKeyboardLeftRightSteps=1},destroy:function(a){this._cleanupColumnHeader();this.scrollBar&&this.scrollBar.destroy(a);this.inherited(arguments)},_scrollBar_onScroll:function(a){this.scrollContainer.scrollTop=
a},buildRendering:function(){this.inherited(arguments);this.vScrollBar&&(this.scrollBar=new E({content:this.vScrollBarContent},this.vScrollBar),this.scrollBar.on("scroll",u.hitch(this,this._scrollBar_onScroll)),this._viewHandles.push(y(this.scrollContainer,J.wheel,dojo.hitch(this,this._mouseWheelScrollHander))))},postscript:function(){this.inherited(arguments);this._initialized=!0;this.invalidRendering||this.refreshRendering()},_setVerticalRendererAttr:function(a){this._destroyRenderersByKind("vertical");
this._set("verticalRenderer",a)},_createRenderData:function(){var a={};a.daySize=this.get("daySize");a.scrollbarWidth=L.getScrollbar().w+1;a.dateLocaleModule=this.dateLocaleModule;a.dateClassObj=this.dateClassObj;a.dateModule=this.dateModule;a.dates=[];a.columnCount=this.get("columnCount");var b=this.get("startDate");null==b&&(b=new a.dateClassObj);this.startDate=b=this.floorToMonth(b,!1,a);for(var c=b.getMonth(),d=0,h=0;h<a.columnCount;h++){var e=[];for(a.dates.push(e);b.getMonth()==c;)e.push(b),
b=this.addAndFloor(b,"day",1);c=b.getMonth();d<e.length&&(d=e.length)}a.startTime=new a.dateClassObj(a.dates[0][0]);a.endTime=new a.dateClassObj(e[e.length-1]);a.endTime=a.dateModule.add(a.endTime,"day",1);a.maxDayCount=d;a.sheetHeight=a.daySize*d;this.displayedItemsInvalidated&&!this._isEditing?(this.displayedItemsInvalidated=!1,this._computeVisibleItems(a)):this.renderData&&(a.items=this.renderData.items);this.displayedDecorationItemsInvalidated?a.decorationItems=this.decorationStoreManager._computeVisibleItems(a):
this.renderData&&(a.decorationItems=this.renderData.decorationItems);return a},_validateProperties:function(){this.inherited(arguments);if(1>this.columnCount||isNaN(this.columnCount))this.columnCount=1;if(5>this.daySize||isNaN(this.daySize))this.daySize=5},_setStartDateAttr:function(a){this.displayedItemsInvalidated=!0;this._set("startDate",a)},_setColumnCountAttr:function(a){this.displayedItemsInvalidated=!0;this._set("columnCount",a)},__fixEvt:function(a){a.sheet="primary";a.source=this;return a},
_formatColumnHeaderLabel:function(a){var b="wide";this.columnHeaderFormatLength&&(b=this.columnHeaderFormatLength);return this.renderData.dateLocaleModule.getNames("months",b,"standAlone")[a.getMonth()]},gridCellDatePattern:null,_formatGridCellLabel:function(a,b,c){if(null==a)return"";if(this.gridCellPattern)return this.renderData.dateLocaleModule.format(a,{selector:"date",datePattern:this.gridCellDatePattern});b=K.getLocalization("dojo.cldr",this._calendar)["dateFormatItem-d"];return this.renderData.dateLocaleModule.getNames("days",
"abbr","standAlone")[a.getDay()].substring(0,1)+" "+this.renderData.dateLocaleModule.format(a,{selector:"date",datePattern:b})},scrollPosition:null,scrollBarRTLPosition:"left",_setScrollPositionAttr:function(a){this._setScrollPosition(a.date,a.duration,a.easing)},_getScrollPositionAttr:function(){return{date:this.scrollContainer.scrollTop/this.daySize+1}},_setScrollPosition:function(a,b,c){1>a?a=1:31<a&&(a=31);a=(a-1)*this.daySize;b?(this._scrollAnimation&&this._scrollAnimation.stop(),this._scrollAnimation=
new H.Animation({curve:[this.scrollContainer.scrollTop,a],duration:Math.abs((a-this.scrollContainer.scrollTop)*b/this.renderData.sheetHeight),easing:c,onAnimate:u.hitch(this,function(d){this._setScrollImpl(d)})}),this._scrollAnimation.play()):this._setScrollImpl(a)},_setScrollImpl:function(a){this.scrollContainer.scrollTop=a;this.scrollBar&&this.scrollBar.set("value",a)},ensureVisibility:function(a,b,c,d,h){d=void 0==d?1:d;if(this.scrollable&&this.autoScroll){a=a.getDate()-d;this.isStartOfDay(b)&&
(b=this._waDojoxAddIssue(b,"day",-1));b=b.getDate()+d;d=this.get("scrollPosition").date;var e=B.getContentBox(this.scrollContainer);e=this.get("scrollPosition").date+e.h/this.daySize;var k=!1,f=null;switch(c){case "start":k=a>=d&&a<=e;f=a;break;case "end":k=b>=d&&b<=e;f=b-(e-d);break;case "both":k=a>=d&&b<=e,f=a}k||this._setScrollPosition(f,h)}},scrollView:function(a){a=this.get("scrollPosition").date+a;this._setScrollPosition(a)},_mouseWheelScrollHander:function(a){this.scrollView(0<a.wheelDelta?
-1:1)},refreshRendering:function(){if(this._initialized){this._validateProperties();var a=this.renderData,b=this.renderData=this._createRenderData();this._createRendering(b,a);this._layoutDecorationRenderers(b);this._layoutRenderers(b)}},_createRendering:function(a,b){q.set(this.sheetContainer,"height",a.sheetHeight+"px");this._configureScrollBar(a);this._buildColumnHeader(a,b);this._buildGrid(a,b);this._buildItemContainer(a,b)},_configureScrollBar:function(a){A("ie")&&this.scrollBar&&q.set(this.scrollBar.domNode,
"width",a.scrollbarWidth+1+"px");var b=this.isLeftToRight()?!0:"right"==this.scrollBarRTLPosition,c=b?"right":"left";b=b?"left":"right";this.scrollBar&&(this.scrollBar.set("maximum",a.sheetHeight),q.set(this.scrollBar.domNode,c,0),q.set(this.scrollBar.domNode,b,"auto"));q.set(this.scrollContainer,c,a.scrollbarWidth+"px");q.set(this.scrollContainer,b,"0");q.set(this.columnHeader,c,a.scrollbarWidth+"px");q.set(this.columnHeader,b,"0");this.buttonContainer&&null!=this.owner&&this.owner.currentView==
this&&(q.set(this.buttonContainer,c,a.scrollbarWidth+"px"),q.set(this.buttonContainer,b,"0"))},_columnHeaderClick:function(a){x.stop(a);var b=t("td",this.columnHeaderTable).indexOf(a.currentTarget);this._onColumnHeaderClick({index:b,date:this.renderData.dates[b][0],triggerEvent:a})},_buildColumnHeader:function(a,b){var c=this.columnHeaderTable;if(c){b=a.columnCount-(b?b.columnCount:0);8==A("ie")&&(null==this._colTableSave?this._colTableSave=u.clone(c):0>b&&(this._cleanupColumnHeader(),this.columnHeader.removeChild(c),
r.destroy(c),this.columnHeaderTable=c=u.clone(this._colTableSave),this.columnHeader.appendChild(c),b=a.columnCount));var d=t("tbody",c),h=t("tr",c);d=1==d.length?d[0]:I.create("tbody",null,c);h=1==h.length?h[0]:r.create("tr",null,d);if(0<b)for(d=0;d<b;d++){var e=r.create("td",null,h);var k=[];k.push(y(e,"click",u.hitch(this,this._columnHeaderClick)));A("touch-events")?(k.push(y(e,"touchstart",function(f){x.stop(f);p.add(f.currentTarget,"Active")})),k.push(y(e,"touchend",function(f){x.stop(f);p.remove(f.currentTarget,
"Active")}))):(k.push(y(e,"mousedown",function(f){x.stop(f);p.add(f.currentTarget,"Active")})),k.push(y(e,"mouseup",function(f){x.stop(f);p.remove(f.currentTarget,"Active")})),k.push(y(e,"mouseover",function(f){x.stop(f);p.add(f.currentTarget,"Hover")})),k.push(y(e,"mouseout",function(f){x.stop(f);p.remove(f.currentTarget,"Hover")})));this._columnHeaderHandlers.push(k)}else for(b=-b,d=0;d<b;d++)for(e=h.lastChild,h.removeChild(e),r.destroy(e),e=this._columnHeaderHandlers.pop();0<e.length;)e.pop().remove();
t("td",c).forEach(function(f,g){f.className="";0==g?p.add(f,"first-child"):g==this.renderData.columnCount-1&&p.add(f,"last-child");g=a.dates[g][0];this._setText(f,this._formatColumnHeaderLabel(g));this.styleColumnHeaderCell(f,g,a)},this)}},_cleanupColumnHeader:function(){for(;0<this._columnHeaderHandlers.length;)for(var a=this._columnHeaderHandlers.pop();0<a.length;)a.pop().remove()},styleColumnHeaderCell:function(a,b,c){},_buildGrid:function(a,b){var c=this.gridTable;if(c){q.set(c,"height",a.sheetHeight+
"px");var d=a.maxDayCount-(b?b.maxDayCount:0),h=0<d,e=a.columnCount-(b?b.columnCount:0);8==A("ie")&&(null==this._gridTableSave?this._gridTableSave=u.clone(c):0>e&&(this.grid.removeChild(c),r.destroy(c),this.gridTable=c=u.clone(this._gridTableSave),this.grid.appendChild(c),e=a.columnCount,d=a.maxDayCount,h=!0));b=t("tbody",c);b=1==b.length?b[0]:r.create("tbody",null,c);if(h)for(var k=0;k<d;k++)r.create("tr",null,b);else for(d=-d,k=0;k<d;k++)b.removeChild(b.lastChild);var f=a.maxDayCount-d,g=h||0<e;
e=g?e:-e;t("tr",c).forEach(function(l,m){if(g){var n=m>=f?a.columnCount:e;for(m=0;m<n;m++){var v=r.create("td",null,l);r.create("span",null,v)}}else for(m=0;m<e;m++)l.removeChild(l.lastChild)});t("tr",c).forEach(function(l,m){l.className="";0==m&&p.add(l,"first-child");m==a.maxDayCount-1&&p.add(l,"last-child");t("td",l).forEach(function(n,v){n.className="";0==v&&p.add(n,"first-child");v==a.columnCount-1&&p.add(n,"last-child");var z=null;m<a.dates[v].length&&(z=a.dates[v][m]);var w=t("span",n)[0];
this._setText(w,this.showCellLabel?this._formatGridCellLabel(z,m,v):null);this.styleGridCell(n,z,v,m,a)},this)},this)}},styleGridCellFunc:null,defaultStyleGridCell:function(a,b,c,d,h){null!=b&&(p.add(a,this._cssDays[b.getDay()]),this.isToday(b)?p.add(a,"dojoxCalendarToday"):this.isWeekEnd(b)&&p.add(a,"dojoxCalendarWeekend"))},styleGridCell:function(a,b,c,d,h){this.styleGridCellFunc?this.styleGridCellFunc(a,b,c,d,h):this.defaultStyleGridCell(a,b,c,d,h)},_buildItemContainer:function(a,b){var c=this.itemContainerTable;
if(c){var d=[];q.set(c,"height",a.sheetHeight+"px");b=a.columnCount-(b?b.columnCount:0);8==A("ie")&&(null==this._itemTableSave?this._itemTableSave=u.clone(c):0>b&&(this.itemContainer.removeChild(c),this._recycleItemRenderers(!0),r.destroy(c),this.itemContainerTable=c=u.clone(this._itemTableSave),this.itemContainer.appendChild(c),b=a.columnCount));var h=t("tbody",c),e=t("tr",c);h=1==h.length?h[0]:r.create("tbody",null,c);e=1==e.length?e[0]:r.create("tr",null,h);if(0<b)for(var k=0;k<b;k++)h=r.create("td",
null,e),r.create("div",{className:"dojoxCalendarContainerColumn"},h);else for(b=-b,k=0;k<b;k++)e.removeChild(e.lastChild);t("td\x3ediv",c).forEach(function(f,g){q.set(f,{height:a.sheetHeight+"px"});d.push(f)},this);a.cells=d}},_overlapLayoutPass2:function(a){var b,c;var d=a[a.length-1];for(c=0;c<d.length;c++)d[c].extent=1;for(b=0;b<a.length-1;b++)for(d=a[b],c=0;c<d.length;c++){var h=d[c];if(-1==h.extent){h.extent=1;for(var e=0,k=!1,f=b+1;f<a.length&&!k;f++){for(var g=a[f],l=0;l<g.length&&!k;l++){var m=
g[l];h.start<m.end&&m.start<h.end&&(k=!0)}k||e++}h.extent+=e}}},_defaultItemToRendererKindFunc:function(a){return a.allDay?"vertical":1440<=Math.abs(this.renderData.dateModule.difference(a.startTime,a.endTime,"minute"))?"vertical":null},_layoutRenderers:function(a){this.hiddenEvents={};this.inherited(arguments)},_layoutInterval:function(a,b,c,d,h,e){var k=[],f=[];a.colW=this.itemContainer.offsetWidth/a.columnCount;if("dataItems"===e){for(var g=0;g<h.length;g++){var l=h[g];"vertical"==this._itemToRendererKind(l)?
k.push(l):this.showHiddenItems&&f.push(l)}0<k.length&&this._layoutVerticalItems(a,b,c,d,k,e);0<f.length&&this._layoutBgItems(a,b,c,d,f)}else this._layoutVerticalItems(a,b,c,d,h,e)},_dateToYCoordinate:function(a,b,c){a=0;c||0!=b.getHours()||0!=b.getMinutes()?a=(b.getDate()-1)*this.renderData.daySize:(c=this._waDojoxAddIssue(b,"day",-1),a=this.renderData.daySize+(c.getDate()-1)*this.renderData.daySize);return a+=(60*b.getHours()+b.getMinutes())*this.renderData.daySize/1440},_layoutVerticalItems:function(a,
b,c,d,h,e){if(null!=this.verticalRenderer){b=a.cells[b];for(var k=[],f=0;f<h.length;f++){var g=h[f],l=this.computeRangeOverlap(a,g.startTime,g.endTime,c,d),m=this._dateToYCoordinate(a,l[0],!0),n=this._dateToYCoordinate(a,l[1],!1);n>m&&(g=u.mixin({start:m,end:n,range:l,item:g},g),k.push(g))}c="dataItems"===e?this.computeOverlapping(k,this._overlapLayoutPass2).numLanes:1;d=this.percentOverlap/100;for(f=0;f<k.length;f++){g=k[f];n=g.lane;m=g.extent;h=null;if("dataItems"===e){0==d?(l=1==c?a.colW:(a.colW-
(c-1)*this.horizontalGap)/c,n*=l+this.horizontalGap,l=1==m?l:l*m+(m-1)*this.horizontalGap,l=100*l/a.colW,n=100*n/a.colW):(l=1==c?100:100/(c-(c-1)*d),n*=l-d*l,l=1==m?l:l*(m-(m-1)*d));h=this._createRenderer(g,"vertical",this.verticalRenderer,"dojoxCalendarVertical");q.set(h.container,{top:g.start+"px",left:n+"%",width:l+"%",height:g.end-g.start+1+"px"});m=this.isItemBeingEdited(g);n=this.isItemSelected(g);var v=this.isItemHovered(g),z=this.isItemFocused(g),w=h.renderer;w.set("hovered",v);w.set("selected",
n);w.set("edited",m);w.set("focused",this.showFocus?z:!1);w.set("storeState",this.getItemStoreState(g));w.set("moveEnabled",this.isItemMoveEnabled(g._item,"vertical"));w.set("resizeEnabled",this.isItemResizeEnabled(g._item,"vertical"));this.applyRendererZIndex(g,h,v,n,m,z);w.updateRendering&&w.updateRendering(l,g.end-g.start+1)}else h=this.decorationRendererManager.createRenderer(g,"vertical",this.verticalDecorationRenderer,"dojoxCalendarDecoration"),q.set(h.container,{top:g.start+"px",left:"0",width:"100%",
height:g.end-g.start+1+"px"});r.place(h.container,b);q.set(h.container,"display","block")}}},_getCellAt:function(a,b,c){void 0!=c&&1!=c||this.isLeftToRight()||(b=this.renderData.columnCount-1-b);return this.gridTable.childNodes[0].childNodes[a].childNodes[b]},invalidateLayout:function(){t("td",this.gridTable).forEach(function(a){p.remove(a,"dojoxCalendarHiddenEvents")});this.inherited(arguments)},_layoutBgItems:function(a,b,c,d,h){for(var e={},k=0;k<h.length;k++){var f=h[k],g=this.computeRangeOverlap(a,
f.startTime,f.endTime,c,d);f=g[0].getDate()-1;this.isStartOfDay(g[1])?(g=this._waDojoxAddIssue(g[1],"day",-1),g=g.getDate()-1):g=g[1].getDate()-1;for(;f<=g;f++)e[f]=!0}for(var l in e)e[l]&&(a=this._getCellAt(l,b,!1),p.add(a,"dojoxCalendarHiddenEvents"))},_sortItemsFunction:function(a,b){var c=this.dateModule.compare(a.startTime,b.startTime);0==c&&(c=-1*this.dateModule.compare(a.endTime,b.endTime));return this.isLeftToRight()?c:-c},getTime:function(a,b,c,d){null!=a&&(c=B.position(this.itemContainer,
!0),a.touches?(d=void 0==d?0:d,b=a.touches[d].pageX-c.x,c=a.touches[d].pageY-c.y):(b=a.pageX-c.x,c=a.pageY-c.y));a=B.getContentBox(this.itemContainer);this.isLeftToRight()||(b=a.w-b);0>b?b=0:b>a.w&&(b=a.w-1);0>c?c=0:c>a.h&&(c=a.h-1);b=Math.floor(b/(a.w/this.renderData.columnCount));c=Math.floor(c/(a.h/this.renderData.maxDayCount));a=null;b<this.renderData.dates.length&&c<this.renderData.dates[b].length&&(a=this.newDate(this.renderData.dates[b][c]));return a},_onGridMouseUp:function(a){this.inherited(arguments);
this._gridMouseDown&&(this._gridMouseDown=!1,this._onGridClick({date:this.getTime(a),triggerEvent:a}))},_onGridTouchStart:function(a){this.inherited(arguments);var b=this._gridProps;b.moved=!1;b.start=a.touches[0].screenY;b.scrollTop=this.scrollContainer.scrollTop},_onGridTouchMove:function(a){this.inherited(arguments);if(1<a.touches.length&&!this._isEditing)x.stop(a);else if(this._gridProps&&!this._isEditing){var b=a.touches[0].screenX,c=a.touches[0].screenY,d=this._edProps;if(!d||d&&(25<Math.abs(b-
d.start.x)||25<Math.abs(c-d.start.y)))this._gridProps.moved=!0,b=this._gridProps.scrollTop-(a.touches[0].screenY-this._gridProps.start),c=this.itemContainer.offsetHeight-this.scrollContainer.offsetHeight,0>b?(this._gridProps.start=a.touches[0].screenY,this._setScrollImpl(0),this._gridProps.scrollTop=0):b>c?(this._gridProps.start=a.touches[0].screenY,this._setScrollImpl(c),this._gridProps.scrollTop=c):this._setScrollImpl(b)}},_onGridTouchEnd:function(a){this.inherited(arguments);var b=this._gridProps;
b&&(this._isEditing||b.moved||(b.fromItem||b.editingOnStart||this.selectFromEvent(a,null,null,!0),b.fromItem||(this._pendingDoubleTap&&this._pendingDoubleTap.grid?(this._onGridDoubleClick({date:this.getTime(this._gridProps.event),triggerEvent:this._gridProps.event}),clearTimeout(this._pendingDoubleTap.timer),delete this._pendingDoubleTap):(this._onGridClick({date:this.getTime(this._gridProps.event),triggerEvent:this._gridProps.event}),this._pendingDoubleTap={grid:!0,timer:setTimeout(u.hitch(this,
function(){delete this._pendingDoubleTap}),this.doubleTapDelay)}))),this._gridProps=null)},_onColumnHeaderClick:function(a){this._dispatchCalendarEvt(a,"onColumnHeaderClick")},onColumnHeaderClick:function(a){},_onScrollTimer_tick:function(){this._setScrollImpl(this.scrollContainer.scrollTop+this._scrollProps.scrollStep)},snapUnit:"day",snapSteps:1,minDurationUnit:"day",minDurationSteps:1,liveLayout:!1,stayInView:!0,allowStartEndSwap:!0,allowResizeLessThan24H:!1})});