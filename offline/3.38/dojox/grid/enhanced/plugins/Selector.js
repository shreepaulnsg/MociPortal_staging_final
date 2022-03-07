//>>built
define("dojox/grid/enhanced/plugins/Selector","dojo/_base/kernel dojo/_base/lang dojo/_base/declare dojo/_base/array dojo/_base/event dojo/keys dojo/query dojo/_base/html dojo/_base/window dijit/focus ../../_RowSelector ../_Plugin ../../EnhancedGrid ../../cells/_base ./AutoScroll".split(" "),function(y,p,E,l,F,z,B,q,G,C,v,H,I){var u={col:"row",row:"col"},r=function(a,b,c,f,e){return"cell"!==a?(b=b[a],c=c[a],f=f[a],"number"!==typeof b||"number"!==typeof c||"number"!==typeof f?!1:e?b>=c&&b<f||b>f&&
b<=c:b>=c&&b<=f||b>=f&&b<=c):r("col",b,c,f,e)&&r("row",b,c,f,e)},A=function(a,b,c){try{if(b&&c)switch(a){case "col":case "row":return b[a]==c[a]&&"number"==typeof b[a]&&!(u[a]in b)&&!(u[a]in c);case "cell":return b.col==c.col&&b.row==c.row&&"number"==typeof b.col&&"number"==typeof b.row}}catch(f){}return!1},x=function(a){try{a&&a.preventDefault&&F.stop(a)}catch(b){}},m=function(a,b,c){switch(a){case "col":return{col:"undefined"==typeof c?b:c,except:[]};case "row":return{row:b,except:[]};case "cell":return{row:b,
col:c}}return null};y=E("dojox.grid.enhanced.plugins.Selector",H,{name:"selector",constructor:function(a,b){this.grid=a;this._config={row:2,col:2,cell:2};this.noClear=b&&b.noClear;this.setupConfig(b);"single"===a.selectionMode&&(this._config.row=1);this._enabled=!0;this._selecting={};this._selected={col:[],row:[],cell:[]};this._startPoint={};this._currentPoint={};this._lastAnchorPoint={};this._lastEndPoint={};this._lastSelectedAnchorPoint={};this._lastSelectedEndPoint={};this._keyboardSelect={};this._lastType=
null;this._selectedRowModified={};this._hacks();this._initEvents();this._initAreas();this._mixinGrid()},destroy:function(){this.inherited(arguments)},setupConfig:function(a){if(a&&p.isObject(a)){var b=["row","col","cell"],c;for(c in a)0<=l.indexOf(b,c)&&(this._config[c]=a[c]&&"disabled"!=a[c]?"single"==a[c]?1:2:0);this.grid.selection.setMode(["none","single","extended"][this._config.row])}},isSelected:function(a,b,c){return this._isSelected(a,m(a,b,c))},toggleSelect:function(a,b,c){this._startSelect(a,
m(a,b,c),2===this._config[a],!1,!1,!this.isSelected(a,b,c));this._endSelect(a)},select:function(a,b,c){this.isSelected(a,b,c)||this.toggleSelect(a,b,c)},deselect:function(a,b,c){this.isSelected(a,b,c)&&this.toggleSelect(a,b,c)},selectRange:function(a,b,c,f){this.grid._selectingRange=!0;b="cell"==a?m(a,b.row,b.col):m(a,b);c="cell"==a?m(a,c.row,c.col):m(a,c);this._startSelect(a,b,!1,!1,!1,f);this._highlight(a,c,void 0===f?!0:f);this._endSelect(a);this.grid._selectingRange=!1},clear:function(a){this._clearSelection(a||
"all")},isSelecting:function(a){return"undefined"==typeof a?this._selecting.col||this._selecting.row||this._selecting.cell:this._selecting[a]},selectEnabled:function(a){"undefined"==typeof a||this.isSelecting()||(this._enabled=!!a);return this._enabled},getSelected:function(a,b){switch(a){case "cell":return l.map(this._selected[a],function(c){return c});case "col":case "row":return l.map(b?this._selected[a]:l.filter(this._selected[a],function(c){return 0===c.except.length}),function(c){return b?c:
c[a]})}return[]},getSelectedCount:function(a,b){switch(a){case "cell":return this._selected[a].length;case "col":case "row":return(b?this._selected[a]:l.filter(this._selected[a],function(c){return 0===c.except.length})).length}return 0},getSelectedType:function(){var a=this._selected;return" cell row row|cell col col|cell col|row col|row|cell".split(" ")[!!a.cell.length|!!a.row.length<<1|!!a.col.length<<2]},getLastSelectedRange:function(a){return this._lastAnchorPoint[a]?{start:this._lastAnchorPoint[a],
end:this._lastEndPoint[a]}:null},_hacks:function(){var a=this.grid,b=function(g){if(g.cellNode)a.onMouseUp(g);a.onMouseUpRow(g)},c=p.hitch(a,"onMouseUp"),f=p.hitch(a,"onMouseDown"),e=function(g){g.cellNode.style.border="solid 1px"};l.forEach(a.views.views,function(g){g.content.domouseup=b;g.header.domouseup=c;"dojox.grid._RowSelector"==g.declaredClass&&(g.domousedown=f,g.domouseup=c,g.dofocus=e)});a.selection.clickSelect=function(){};this._oldDeselectAll=a.selection.deselectAll;var d=this;a.selection.selectRange=
function(g,k){d.selectRange("row",g,k,!0);a.selection.preserver&&a.selection.preserver._updateMapping(!0,!0,!1,g,k);a.selection.onChanged()};a.selection.deselectRange=function(g,k){d.selectRange("row",g,k,!1);a.selection.preserver&&a.selection.preserver._updateMapping(!0,!1,!1,g,k);a.selection.onChanged()};a.selection.deselectAll=function(){a._selectingRange=!0;d._oldDeselectAll.apply(a.selection,arguments);d._clearSelection("all");a._selectingRange=!1;a.selection.preserver&&a.selection.preserver._updateMapping(!0,
!1,!0);a.selection.onChanged()};var h=a.views.views[0];h instanceof v&&(h.doStyleRowNode=function(g,k){q.removeClass(k,"dojoxGridRow");q.addClass(k,"dojoxGridRowbar");q.addClass(k,"dojoxGridNonNormalizedCell");q.toggleClass(k,"dojoxGridRowbarOver",a.rows.isOver(g));q.toggleClass(k,"dojoxGridRowbarSelected",!!a.selection.isSelected(g))});this.connect(a,"updateRow",function(g){l.forEach(a.layout.cells,function(k){this.isSelected("cell",g,k.index)&&this._highlightNode(k.getNode(g),!0)},this)})},_mixinGrid:function(){var a=
this.grid;a.setupSelectorConfig=p.hitch(this,this.setupConfig);a.onStartSelect=function(){};a.onEndSelect=function(){};a.onStartDeselect=function(){};a.onEndDeselect=function(){};a.onSelectCleared=function(){}},_initEvents:function(){var a=this.grid,b=this,c=p.partial,f=function(d,h){"row"===d&&(b._isUsingRowSelector=!0);if(b.selectEnabled()&&b._config[d]&&2!=h.button){if(b._keyboardSelect.col||b._keyboardSelect.row||b._keyboardSelect.cell)b._endSelect("all"),b._keyboardSelect.col=b._keyboardSelect.row=
b._keyboardSelect.cell=0;b._usingKeyboard&&(b._usingKeyboard=!1);var g=m(d,h.rowIndex,h.cell&&h.cell.index);b._startSelect(d,g,h.ctrlKey,h.shiftKey)}},e=p.hitch(this,"_endSelect");this.connect(a,"onHeaderCellMouseDown",c(f,"col"));this.connect(a,"onHeaderCellMouseUp",c(e,"col"));this.connect(a,"onRowSelectorMouseDown",c(f,"row"));this.connect(a,"onRowSelectorMouseUp",c(e,"row"));this.connect(a,"onCellMouseDown",function(d){d.cell&&d.cell.isRowSelector||(a.singleClickEdit&&(b._singleClickEdit=!0,a.singleClickEdit=
!1),f(0==b._config.cell?"row":"cell",d))});this.connect(a,"onCellMouseUp",function(d){b._singleClickEdit&&(delete b._singleClickEdit,a.singleClickEdit=!0);e("all",d)});this.connect(a,"onCellMouseOver",function(d){"row"!=b._curType&&b._selecting[b._curType]&&2==b._config[b._curType]&&(b._highlight("col",m("col",d.cell.index),b._toSelect),b._keyboardSelect.cell||b._highlight("cell",m("cell",d.rowIndex,d.cell.index),b._toSelect))});this.connect(a,"onHeaderCellMouseOver",function(d){b._selecting.col&&
2==b._config.col&&b._highlight("col",m("col",d.cell.index),b._toSelect)});this.connect(a,"onRowMouseOver",function(d){b._selecting.row&&2==b._config.row&&b._highlight("row",m("row",d.rowIndex),b._toSelect)});this.connect(a,"onSelectedById","_onSelectedById");this.connect(a,"_onFetchComplete",function(){a._notRefreshSelection||this._refreshSelected(!0)});this.connect(a.scroller,"buildPage",function(){a._notRefreshSelection||this._refreshSelected(!0)});this.connect(G.doc,"onmouseup",c(e,"all"));this.connect(a,
"onEndAutoScroll",function(d,h,g,k){g=b._selecting.cell;h=h?1:-1;d&&(g||b._selecting.row)?(d=g?"cell":"row",g=b._currentPoint[d],b._highlight(d,m(d,g.row+h,g.col),b._toSelect)):d||!g&&!b._selecting.col||(d=g?"cell":"col",g=b._currentPoint[d],b._highlight(d,m(d,g.row,k),b._toSelect))});this.subscribe("dojox/grid/rearrange/move/"+a.id,"_onInternalRearrange");this.subscribe("dojox/grid/rearrange/copy/"+a.id,"_onInternalRearrange");this.subscribe("dojox/grid/rearrange/change/"+a.id,"_onExternalChange");
this.subscribe("dojox/grid/rearrange/insert/"+a.id,"_onExternalChange");this.subscribe("dojox/grid/rearrange/remove/"+a.id,"clear");this.connect(a,"onSelected",function(d){this._selectedRowModified&&this._isUsingRowSelector?delete this._selectedRowModified:this.grid._selectingRange||this.select("row",d)});this.connect(a,"onDeselected",function(d){this._selectedRowModified&&this._isUsingRowSelector?delete this._selectedRowModified:this.grid._selectingRange||this.deselect("row",d)})},_onSelectedById:function(a,
b,c){if(!this.grid._noInternalMapping){var f=[this._lastAnchorPoint.row,this._lastEndPoint.row,this._lastSelectedAnchorPoint.row,this._lastSelectedEndPoint.row];f=f.concat(this._selected.row);var e=!1;l.forEach(f,function(d){d&&(d.id===a?(e=!0,d.row=b):d.row===b&&d.id&&(d.row=-1))});!e&&c&&l.some(this._selected.row,function(d){return!d||d.id||d.except.length?!1:(d.id=a,d.row=b,!0)});e=!1;f=[this._lastAnchorPoint.cell,this._lastEndPoint.cell,this._lastSelectedAnchorPoint.cell,this._lastSelectedEndPoint.cell];
f=f.concat(this._selected.cell);l.forEach(f,function(d){d&&(d.id===a?(e=!0,d.row=b):d.row===b&&d.id&&(d.row=-1))})}},onSetStore:function(){this._clearSelection("all")},_onInternalRearrange:function(a,b){try{this._refresh("col",!1);l.forEach(this._selected.row,function(e){l.forEach(this.grid.layout.cells,function(d){this._highlightNode(d.getNode(e.row),!1)},this)},this);B(".dojoxGridRowSelectorSelected").forEach(function(e){q.removeClass(e,"dojoxGridRowSelectorSelected");q.removeClass(e,"dojoxGridRowSelectorSelectedUp");
q.removeClass(e,"dojoxGridRowSelectorSelectedDown")});var c=[this._lastAnchorPoint[a],this._lastEndPoint[a],this._lastSelectedAnchorPoint[a],this._lastSelectedEndPoint[a]];if("cell"===a){this.selectRange("cell",b.to.min,b.to.max);var f=this.grid.layout.cells;l.forEach(c,function(e){if(!e.converted)for(var d=b.from.min.row,h=b.to.min.row;d<=b.from.max.row;++d,++h)for(var g=b.from.min.col,k=b.to.min.col;g<=b.from.max.col;++g,++k){for(;f[g].hidden;)++g;for(;f[k].hidden;)++k;if(e.row==d&&e.col==g){e.row=
h;e.col=k;e.converted=!0;return}}})}else c=this._selected.cell.concat(this._selected[a]).concat(c).concat([this._lastAnchorPoint.cell,this._lastEndPoint.cell,this._lastSelectedAnchorPoint.cell,this._lastSelectedEndPoint.cell]),l.forEach(c,function(e){if(e&&!e.converted){var d=e[a];d in b&&(e[a]=b[d]);e.converted=!0}}),l.forEach(this._selected[u[a]],function(e){for(var d=0,h=e.except.length;d<h;++d){var g=e.except[d];g in b&&(e.except[d]=b[g])}});l.forEach(c,function(e){e&&delete e.converted});this._refreshSelected(!0);
this._focusPoint(a,this._lastEndPoint)}catch(e){console.warn("Selector._onInternalRearrange() error",e)}},_onExternalChange:function(a,b){this.selectRange(a,"cell"==a?b.min:b[0],"cell"==a?b.max:b[b.length-1])},_refresh:function(a,b){this._keyboardSelect[a]||l.forEach(this._selected[a],function(c){this._highlightSingle(a,b,c,void 0,!0)},this)},_refreshSelected:function(){this._refresh("col",!0);this._refresh("row",!0);this._refresh("cell",!0)},_initAreas:function(){var a=this.grid,b=a.focus,c=this,
f=function(h,g,k,n,t){var w=c._keyboardSelect;if(t.shiftKey&&w[h]){if(1===w[h]){if("cell"===h){var D=c._lastEndPoint[h];if(b.cell!=a.layout.cells[D.col+n]||b.rowIndex!=D.row+k){w[h]=0;return}}c._startSelect(h,c._lastAnchorPoint[h],!0,!1,!0);c._highlight(h,c._lastEndPoint[h],c._toSelect);w[h]=2}g=g(h,k,n,t);c._isValid(h,g,a)&&c._highlight(h,g,c._toSelect);x(t)}},e=function(h,g,k,n){if(n&&c.selectEnabled()&&0!=c._config[h])switch(k.keyCode){case z.SPACE:c._startSelect(h,g(),k.ctrlKey,k.shiftKey);c._endSelect(h);
break;case z.SHIFT:2==c._config[h]&&c._isValid(h,c._lastAnchorPoint[h],a)&&(c._endSelect(h),c._keyboardSelect[h]=1,c._usingKeyboard=!0)}},d=function(h,g,k){k&&g.keyCode==z.SHIFT&&c._keyboardSelect[h]&&(c._endSelect(h),c._keyboardSelect[h]=0)};a.views.views[0]instanceof v&&(this._lastFocusedRowBarIdx=0,b.addArea({name:"rowHeader",onFocus:function(h,g){g=a.views.views[0];if(g instanceof v){var k=g.getCellNode(c._lastFocusedRowBarIdx,0);k&&q.toggleClass(k,b.focusClass,!1);h&&"rowIndex"in h&&(0<=h.rowIndex?
c._lastFocusedRowBarIdx=h.rowIndex:c._lastFocusedRowBarIdx||(c._lastFocusedRowBarIdx=0));if(k=g.getCellNode(c._lastFocusedRowBarIdx,0))C.focus(k),q.toggleClass(k,b.focusClass,!0);b.rowIndex=c._lastFocusedRowBarIdx;x(h);return!0}return!1},onBlur:function(h,g){g=a.views.views[0];g instanceof v&&((g=g.getCellNode(c._lastFocusedRowBarIdx,0))&&q.toggleClass(g,b.focusClass,!1),x(h));return!0},onMove:function(h,g,k){g=a.views.views[0];if(h&&g instanceof v&&(h=c._lastFocusedRowBarIdx+h,0<=h&&h<a.rowCount)){x(k);
k=g.getCellNode(c._lastFocusedRowBarIdx,0);q.toggleClass(k,b.focusClass,!1);k=a.scroller;var n=k.getLastPageRow(k.page),t=Math.min(a.rowCount-1,h);h>n&&a.setScrollTop(a.scrollTop+k.findScrollTop(t)-k.findScrollTop(c._lastFocusedRowBarIdx));k=g.getCellNode(h,0);C.focus(k);q.toggleClass(k,b.focusClass,!0);c._lastFocusedRowBarIdx=h;b.cell=k;b.cell.view=g;b.cell.getNode=function(w){return b.cell};b.rowIndex=c._lastFocusedRowBarIdx;b.scrollIntoView();b.cell=null}}}),b.placeArea("rowHeader","before","content"));
b.addArea({name:"cellselect",onMove:p.partial(f,"cell",function(h,g,k,n){h=c._currentPoint[h];return m("cell",h.row+g,h.col+k)}),onKeyDown:p.partial(e,"cell",function(){return m("cell",b.rowIndex,b.cell.index)}),onKeyUp:p.partial(d,"cell")});b.placeArea("cellselect","below","content");b.addArea({name:"colselect",onMove:p.partial(f,"col",function(h,g,k,n){return m("col",c._currentPoint[h].col+k)}),onKeyDown:p.partial(e,"col",function(){return m("col",b.getHeaderIndex())}),onKeyUp:p.partial(d,"col")});
b.placeArea("colselect","below","header");b.addArea({name:"rowselect",onMove:p.partial(f,"row",function(h,g,k,n){return m("row",b.rowIndex)}),onKeyDown:p.partial(e,"row",function(){return m("row",b.rowIndex)}),onKeyUp:p.partial(d,"row")});b.placeArea("rowselect","below","rowHeader")},_clearSelection:function(a,b){"all"==a?(this._clearSelection("cell",b),this._clearSelection("col",b),this._clearSelection("row",b)):(this._isUsingRowSelector=!0,l.forEach(this._selected[a],function(c){A(a,b,c)||this._highlightSingle(a,
!1,c)},this),this._blurPoint(a,this._currentPoint),this._selecting[a]=!1,this._startPoint[a]=this._currentPoint[a]=null,this._selected[a]=[],"row"!=a||this.grid._selectingRange||(this._oldDeselectAll.call(this.grid.selection),this.grid.selection._selectedById={}),this.grid.onEndDeselect(a,null,null,this._selected),this.grid.onSelectCleared(a))},_startSelect:function(a,b,c,f,e,d){if(this._isValid(a,b)){var h=this._isSelected(a,this._lastEndPoint[a]),g=this._isSelected(a,b);this._toSelect=this.noClear&&
!c?void 0===d?!0:d:e?g:!g;if(!c||!g&&1==this._config[a])this._clearSelection("col",b),this._clearSelection("cell",b),(!this.noClear||"row"===a&&1==this._config[a])&&this._clearSelection("row",b),this._toSelect=void 0===d?!0:d;this._selecting[a]=!0;this._currentPoint[a]=null;f&&this._lastType==a&&h==this._toSelect&&2==this._config[a]?("row"===a&&(this._isUsingRowSelector=!0),this._startPoint[a]=this._lastAnchorPoint[a],this._highlight(a,this._startPoint[a]),this._isUsingRowSelector=!1):this._startPoint[a]=
b;this._curType=a;this._fireEvent("start",a);this._isUsingRowSelector=this._isStartFocus=!0;this._highlight(a,b,this._toSelect);this._isStartFocus=!1}},_endSelect:function(a){"row"===a&&delete this._isUsingRowSelector;"all"==a?(this._endSelect("col"),this._endSelect("row"),this._endSelect("cell")):this._selecting[a]&&(this._addToSelected(a),this._lastAnchorPoint[a]=this._startPoint[a],this._lastEndPoint[a]=this._currentPoint[a],this._toSelect&&(this._lastSelectedAnchorPoint[a]=this._lastAnchorPoint[a],
this._lastSelectedEndPoint[a]=this._lastEndPoint[a]),this._startPoint[a]=this._currentPoint[a]=null,this._selecting[a]=!1,this._lastType=a,this._fireEvent("end",a))},_fireEvent:function(a,b){switch(a){case "start":this.grid[this._toSelect?"onStartSelect":"onStartDeselect"](b,this._startPoint[b],this._selected);break;case "end":this.grid[this._toSelect?"onEndSelect":"onEndDeselect"](b,this._lastAnchorPoint[b],this._lastEndPoint[b],this._selected)}},_calcToHighlight:function(a,b,c,f){if(void 0!==f){if(this._usingKeyboard&&
!c&&this._isInLastRange(this._lastType,b)){var e=this._isSelected(a,b);if(f&&e)return!1;if(!f&&!e&&this._isInLastRange(this._lastType,b,!0))return!0}return c?f:e||this._isSelected(a,b)}return c},_highlightNode:function(a,b){a&&(q.toggleClass(a,"dojoxGridRowSelected",b),q.toggleClass(a,"dojoxGridCellSelected",b))},_highlightHeader:function(a,b){a=this.grid.layout.cells[a].getHeaderNode();q.toggleClass(a,"dojoxGridHeaderSelected",b)},_highlightRowSelector:function(a,b){var c=this.grid.views.views[0];
c instanceof v&&(a=c.getRowNode(a))&&q.toggleClass(a,"dojoxGridRowSelectorSelected",b)},_highlightSingle:function(a,b,c,f,e){var d=this,h=d.grid,g=h.layout.cells;switch(a){case "cell":var k=this._calcToHighlight(a,c,b,f);a=g[c.col];a.hidden||a.notselectable||this._highlightNode(c.node||a.getNode(c.row),k);break;case "col":k=this._calcToHighlight(a,c,b,f);this._highlightHeader(c.col,k);B("td[idx\x3d'"+c.col+"']",h.domNode).forEach(function(n){var t=g[c.col].view.content.findRowTarget(n);t&&d._highlightSingle("cell",
k,{row:t[dojox.grid.util.rowIndexTag],col:c.col,node:n})});break;case "row":k=this._calcToHighlight(a,c,b,f),this._highlightRowSelector(c.row,k),this._config.cell&&l.forEach(g,function(n){d._highlightSingle("cell",k,{row:c.row,col:n.index,node:n.getNode(c.row)})}),this._selectedRowModified=!0,e||h.selection.setSelected(c.row,k)}},_highlight:function(a,b,c){if(this._selecting[a]&&null!==b){var f=this._startPoint[a],e=this._currentPoint[a],d=this,h=function(g,k,n){d._forEach(a,g,k,function(t){d._highlightSingle(a,
n,t,c)},!0)};switch(a){case "col":case "row":null!==e?r(a,b,f,e,!0)?h(e,b,!1):(r(a,f,b,e,!0)&&(h(e,f,!1),e=f),h(b,e,!0)):this._highlightSingle(a,!0,b,c);break;case "cell":null!==e&&(r("row",b,f,e,!0)||r("col",b,f,e,!0)||r("row",f,b,e,!0)||r("col",f,b,e,!0))&&h(f,e,!1),h(f,b,!0)}this._currentPoint[a]=b;this._focusPoint(a,this._currentPoint)}},_focusPoint:function(a,b){if(!this._isStartFocus){b=b[a];var c=this.grid.focus;"col"==a?(c._colHeadFocusIdx=b.col,c.focusArea("header")):"row"==a?c.focusArea("rowHeader",
{rowIndex:b.row}):"cell"==a&&c.setFocusIndex(b.row,b.col)}},_blurPoint:function(a,b){b=this.grid.focus;"cell"==a&&b._blurContent()},_addToSelected:function(a){var b=this._toSelect,c=this,f=[],e=[],d=this._startPoint[a],h=this._currentPoint[a];this._usingKeyboard&&this._forEach(a,this._lastAnchorPoint[a],this._lastEndPoint[a],function(g){r(a,g,d,h)||(b?e:f).push(g)});this._forEach(a,d,h,function(g){var k=c._isSelected(a,g);b&&!k?f.push(g):b||e.push(g)});this._add(a,f);this._remove(a,e);l.forEach(this._selected.row,
function(g){0<g.except.length&&(this._selectedRowModified=!0,this.grid.selection.setSelected(g.row,!1))},this)},_forEach:function(a,b,c,f,e){if(this._isValid(a,b,!0)&&this._isValid(a,c,!0))switch(a){case "col":case "row":b=b[a];c=c[a];var d=c>b?1:-1;for(e||(c+=d);b!=c;b+=d)f(m(a,b));break;case "cell":e=c.col>b.col?1:-1;d=c.row>b.row?1:-1;for(var h=b.row,g=c.row+d;h!=g;h+=d)for(var k=b.col,n=c.col+e;k!=n;k+=e)f(m(a,h,k))}},_makeupForExceptions:function(a,b){var c=[];l.forEach(this._selected[a],function(f){l.forEach(b,
function(e){if(f[a]==e[a]){var d=l.indexOf(f.except,e[u[a]]);0<=d&&f.except.splice(d,1);c.push(e)}})});return c},_makeupForCells:function(a,b){var c=[];l.forEach(this._selected.cell,function(f){l.some(b,function(e){return f[a]==e[a]?(c.push(f),!0):!1})});this._remove("cell",c);l.forEach(this._selected[u[a]],function(f){l.forEach(b,function(e){e=l.indexOf(f.except,e[a]);0<=e&&f.except.splice(e,1)})})},_addException:function(a,b){l.forEach(this._selected[a],function(c){l.forEach(b,function(f){c.except.push(f[u[a]])})})},
_addCellException:function(a,b){l.forEach(this._selected[a],function(c){l.forEach(b,function(f){c[a]==f[a]&&c.except.push(f[u[a]])})})},_add:function(a,b){var c=this.grid.layout.cells;if("cell"==a){var f=this._makeupForExceptions("col",b),e=this._makeupForExceptions("row",b);b=l.filter(b,function(d){return 0>l.indexOf(f,d)&&0>l.indexOf(e,d)&&!c[d.col].hidden&&!c[d.col].notselectable})}else"col"==a&&(b=l.filter(b,function(d){return!c[d.col].hidden&&!c[d.col].notselectable})),this._makeupForCells(a,
b),this._selected[a]=l.filter(this._selected[a],function(d){return l.every(b,function(h){return d[a]!==h[a]})});"col"!=a&&this.grid._hasIdentity&&l.forEach(b,function(d){var h=this.grid._by_idx[d.row];h&&(d.id=h.idty)},this);this._selected[a]=this._selected[a].concat(b)},_remove:function(a,b){var c=p.partial(A,a);this._selected[a]=l.filter(this._selected[a],function(f){return!l.some(b,function(e){return c(f,e)})});"cell"==a?(this._addCellException("col",b),this._addCellException("row",b)):this._config.cell&&
this._addException(u[a],b)},_isCellNotInExcept:function(a,b){var c=b[a],f=b[u[a]];return l.some(this._selected[a],function(e){return e[a]==c&&0>l.indexOf(e.except,f)})},_isSelected:function(a,b){if(!b)return!1;var c=l.some(this._selected[a],function(f){var e=A(a,b,f);return e&&"cell"!==a?0===f.except.length:e});c||"cell"!==a||(c=this._isCellNotInExcept("col",b)||this._isCellNotInExcept("row",b),"cell"===a&&(c=c&&!this.grid.layout.cells[b.col].notselectable));return c},_isInLastRange:function(a,b,
c){var f=this[c?"_lastSelectedAnchorPoint":"_lastAnchorPoint"][a];c=this[c?"_lastSelectedEndPoint":"_lastEndPoint"][a];return b&&f&&c?r(a,b,f,c):!1},_isValid:function(a,b,c){if(!b)return!1;try{var f=this.grid,e=b[a];switch(a){case "col":return 0<=e&&e<f.layout.cells.length&&p.isArray(b.except)&&(c||!f.layout.cells[e].notselectable);case "row":return 0<=e&&e<f.rowCount&&p.isArray(b.except);case "cell":return 0<=b.col&&b.col<f.layout.cells.length&&0<=b.row&&b.row<f.rowCount&&(c||!f.layout.cells[b.col].notselectable)}}catch(d){}return!1}});
I.registerPlugin(y,{dependency:["autoScroll"]});return y});