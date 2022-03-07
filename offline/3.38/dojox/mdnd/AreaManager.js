//>>built
define("dojox/mdnd/AreaManager","dojo/_base/kernel dojo/_base/declare dojo/_base/connect dojo/_base/window dojo/_base/array dojo/_base/sniff dojo/_base/lang dojo/query dojo/topic dojo/dom-class dojo/dom-geometry dojo/dom-construct dijit/registry dijit/_Widget ./Moveable dojox/mdnd/AutoScroll".split(" "),function(h,x,g,B,k,p,t,u,C,n,y,q,m,v,z,w){var l=x("dojox.mdnd.AreaManager",null,{autoRefresh:!0,areaClass:"dojoxDndArea",dragHandleClass:"dojoxDragHandle",constructor:function(){this._areaList=[];
this.resizeHandler=g.connect(h.global,"onresize",this,function(){this._dropMode.updateAreas(this._areaList)});this._oldIndexArea=this._currentIndexArea=this._oldDropIndex=this._currentDropIndex=this._sourceIndexArea=this._sourceDropIndex=-1},init:function(){this.registerByClass()},registerByNode:function(a,b){var c=this._getIndexArea(a);if(a&&-1==c){c=(c=a.getAttribute("accept"))?c.split(/\s*,\s*/):["text"];var d={node:a,items:[],coords:{},margin:null,accept:c,initItems:!1};k.forEach(this._getChildren(a),
function(e){this._setMarginArea(d,e);d.items.push(this._addMoveableItem(e))},this);this._areaList=this._dropMode.addArea(this._areaList,d);b||this._dropMode.updateAreas(this._areaList);g.publish("/dojox/mdnd/manager/register",[a])}},registerByClass:function(){u("."+this.areaClass).forEach(function(a){this.registerByNode(a,!0)},this);this._dropMode.updateAreas(this._areaList)},unregister:function(a){a=this._getIndexArea(a);return-1!=a?(k.forEach(this._areaList[a].items,function(b){this._deleteMoveableItem(b)},
this),this._areaList.splice(a,1),this._dropMode.updateAreas(this._areaList),!0):!1},_addMoveableItem:function(a){a.setAttribute("tabIndex","0");var b=this._searchDragHandle(a),c=new z({handle:b,skip:!0},a);n.add(b||a,"dragHandle");b=a.getAttribute("dndType");b={item:c,type:b?b.split(/\s*,\s*/):["text"],handlers:[g.connect(c,"onDragStart",this,"onDragStart")]};if(m&&m.byNode){var d=m.byNode(a);d&&(b.type=d.dndType?d.dndType.split(/\s*,\s*/):["text"],b.handlers.push(g.connect(d,"uninitialize",this,
function(){this.removeDragItem(a.parentNode,c.node)})))}return b},_deleteMoveableItem:function(a){k.forEach(a.handlers,function(d){g.disconnect(d)});var b=a.item.node,c=this._searchDragHandle(b);n.remove(c||b,"dragHandle");a.item.destroy()},_getIndexArea:function(a){if(a)for(var b=0;b<this._areaList.length;b++)if(this._areaList[b].node===a)return b;return-1},_searchDragHandle:function(a){if(a){var b=this.dragHandleClass.split(" "),c=b.length,d="";k.forEach(b,function(e,f){d+="."+e;f!=c-1&&(d+=", ")});
return u(d,a)[0]}},addDragItem:function(a,b,c,d){var e=!0;d||(e=a&&b&&(null===b.parentNode||b.parentNode&&1!==b.parentNode.nodeType));if(e&&(d=this._getIndexArea(a),-1!==d)){e=this._addMoveableItem(b);var f=this._areaList[d].items;if(0<=c&&c<f.length){var r=f.slice(0,c),A=f.slice(c,f.length);r[r.length]=e;this._areaList[d].items=r.concat(A);a.insertBefore(b,f[c].item.node)}else this._areaList[d].items.push(e),a.appendChild(b);this._setMarginArea(this._areaList[d],b);this._areaList[d].initItems=!1;
return!0}return!1},removeDragItem:function(a,b){var c=this._getIndexArea(a);if(a&&-1!==c){c=this._areaList[c].items;for(var d=0;d<c.length;d++)if(c[d].item.node===b)return this._deleteMoveableItem(c[d]),c.splice(d,1),a.removeChild(b)}return null},_getChildren:function(a){var b=[];k.forEach(a.childNodes,function(c){if(1==c.nodeType)if(m&&m.byNode){var d=m.byNode(c);d?d.dragRestriction||b.push(c):b.push(c)}else b.push(c)});return b},_setMarginArea:function(a,b){a&&null===a.margin&&b&&(a.margin=y.getMarginExtents(b))},
findCurrentIndexArea:function(a,b){this._oldIndexArea=this._currentIndexArea;this._currentIndexArea=this._dropMode.getTargetArea(this._areaList,a,this._currentIndexArea);if(this._currentIndexArea!=this._oldIndexArea){if(-1!=this._oldIndexArea)this.onDragExit(a,b);if(-1!=this._currentIndexArea)this.onDragEnter(a,b)}return this._currentIndexArea},_isAccepted:function(a,b){this._accept=!1;for(var c=0;c<b.length;++c)for(var d=0;d<a.length;++d)if(a[d]==b[c]){this._accept=!0;break}},onDragStart:function(a,
b,c){this.autoRefresh&&this._dropMode.updateAreas(this._areaList);var d=p("webkit")?h.body():h.body().parentNode;this._cover||(this._cover=q.create("div",{"class":"dndCover"}),this._cover2=t.clone(this._cover),n.add(this._cover2,"dndCover2"));this._cover.style.height=this._cover2.style.height=d.scrollHeight+"px";h.body().appendChild(this._cover);h.body().appendChild(this._cover2);this._dragStartHandler=g.connect(a.ownerDocument,"ondragstart",h,"stopEvent");this._sourceIndexArea=this._lastValidIndexArea=
this._currentIndexArea=this._getIndexArea(a.parentNode);d=this._areaList[this._sourceIndexArea];for(var e=d.items,f=0;f<e.length;f++)if(e[f].item.node==a){this._dragItem=e[f];this._dragItem.handlers.push(g.connect(this._dragItem.item,"onDrag",this,"onDrag"));this._dragItem.handlers.push(g.connect(this._dragItem.item,"onDragEnd",this,"onDrop"));e.splice(f,1);this._currentDropIndex=this._sourceDropIndex=f;break}e=null;this._sourceDropIndex!==d.items.length&&(e=d.items[this._sourceDropIndex].item.node);
7<p("ie")&&(this._eventsIE7=[g.connect(this._cover,"onmouseover",h,"stopEvent"),g.connect(this._cover,"onmouseout",h,"stopEvent"),g.connect(this._cover,"onmouseenter",h,"stopEvent"),g.connect(this._cover,"onmouseleave",h,"stopEvent")]);f=a.style;f.left=b.x+"px";f.top=b.y+"px";if("relative"==f.position||""==f.position)f.position="absolute";this._cover.appendChild(a);this._dropIndicator.place(d.node,e,c);n.add(a,"dragNode");this._accept=!0;g.publish("/dojox/mdnd/drag/start",[a,d,this._sourceDropIndex])},
onDragEnter:function(a,b){this._currentIndexArea===this._sourceIndexArea?this._accept=!0:this._isAccepted(this._dragItem.type,this._areaList[this._currentIndexArea].accept)},onDragExit:function(a,b){this._accept=!1},onDrag:function(a,b,c,d){a=this._dropMode.getDragPoint(b,c,d);this.findCurrentIndexArea(a,c);-1!==this._currentIndexArea&&this._accept&&this.placeDropIndicator(a,c)},placeDropIndicator:function(a,b){this._oldDropIndex=this._currentDropIndex;var c=this._areaList[this._currentIndexArea];
c.initItems||this._dropMode.initItems(c);this._currentDropIndex=this._dropMode.getDropIndex(c,a);this._currentIndexArea===this._oldIndexArea&&this._oldDropIndex===this._currentDropIndex||this._placeDropIndicator(b);return this._currentDropIndex},_placeDropIndicator:function(a){var b=this._areaList[this._currentIndexArea];this._dropMode.refreshItems(this._areaList[this._lastValidIndexArea],this._oldDropIndex,a,!1);var c=null;-1!=this._currentDropIndex&&(c=b.items[this._currentDropIndex].item.node);
this._dropIndicator.place(b.node,c);this._lastValidIndexArea=this._currentIndexArea;this._dropMode.refreshItems(b,this._currentDropIndex,a,!0)},onDropCancel:function(){if(!this._accept){var a=this._getIndexArea(this._dropIndicator.node.parentNode);this._currentIndexArea=-1!=a?a:0}},onDrop:function(a){this.onDropCancel();var b=this._areaList[this._currentIndexArea];n.remove(a,"dragNode");var c=a.style;c.position="relative";c.left="0";c.top="0";c.width="auto";b.node==this._dropIndicator.node.parentNode?
b.node.insertBefore(a,this._dropIndicator.node):(b.node.appendChild(a),this._currentDropIndex=b.items.length);c=this._currentDropIndex;-1==c&&(c=b.items.length);var d=b.items,e=d.slice(0,c);d=d.slice(c,d.length);e[e.length]=this._dragItem;b.items=e.concat(d);this._setMarginArea(b,a);k.forEach(this._areaList,function(f){f.initItems=!1});g.disconnect(this._dragItem.handlers.pop());g.disconnect(this._dragItem.handlers.pop());this._resetAfterDrop();this._cover&&(h.body().removeChild(this._cover),h.body().removeChild(this._cover2));
g.publish("/dojox/mdnd/drop",[a,b,c])},_resetAfterDrop:function(){this._accept=!1;this._dragItem=null;this._sourceDropIndex=this._sourceIndexArea=this._oldDropIndex=this._currentIndexArea=this._currentDropIndex=-1;this._dropIndicator.remove();this._dragStartHandler&&g.disconnect(this._dragStartHandler);7<p("ie")&&k.forEach(this._eventsIE7,g.disconnect)},destroy:function(){for(;0<this._areaList.length;)if(!this.unregister(this._areaList[0].node))throw Error("Error while destroying AreaManager");g.disconnect(this.resizeHandler);
this._dropIndicator.destroy();this._dropMode.destroy();w.autoScroll&&w.autoScroll.destroy();this.refreshListener&&g.unsubscribe(this.refreshListener);this._cover&&(q.destroy(this._cover),q.destroy(this._cover2),delete this._cover,delete this._cover2)}});v&&t.extend(v,{dndType:"text"});l._areaManager=null;l.areaManager=function(){l._areaManager||(l._areaManager=new l);return l._areaManager};return l});