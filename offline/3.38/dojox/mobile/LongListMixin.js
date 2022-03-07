//>>built
define("dojox/mobile/LongListMixin","dojo/_base/array dojo/_base/lang dojo/_base/declare dojo/sniff dojo/dom-construct dojo/dom-geometry dijit/registry ./common ./viewRegistry".split(" "),function(g,h,k,n,e,f,l,p,m){return k("dojox.mobile.LongListMixin",null,{pageSize:20,maxPages:5,unloadPages:1,startup:function(){this._started||(this.inherited(arguments),this.editable||!(this._sv=m.getEnclosingScrollable(this.domNode)))||(this._items=this.getChildren(),this._clearItems(),this.containerNode=e.create("div",
null,this.domNode),this.connect(this._sv,"scrollTo",h.hitch(this,this._loadItems),!0),this.connect(this._sv,"slideTo",h.hitch(this,this._loadItems),!0),this._topDiv=e.create("div",null,this.domNode,"first"),this._bottomDiv=e.create("div",null,this.domNode,"last"),this._reloadItems())},_loadItems:function(a){var b=this._sv,c=b.getDim().d.h;if(!(0>=c)){b=-b.getPos().y;var d=a?-a.y:b;a=Math.min(b,d);for(c=Math.max(b,d)+c;this._loadedYMin>a&&this._addBefore(););for(;this._loadedYMax<c&&this._addAfter(););
}},_reloadItems:function(){this._clearItems();this._firstIndex=this._loadedYMin=this._loadedYMax=0;this._lastIndex=-1;this._topDiv.style.height="0px";this._loadItems()},_clearItems:function(){var a=this.containerNode;g.forEach(l.findWidgets(a),function(b){a.removeChild(b.domNode)})},_addBefore:function(){var a,b=f.getMarginBox(this.containerNode);var c=0;for(a=this._firstIndex-1;c<this.pageSize&&0<=a;c++,a--){var d=this._items[a];e.place(d.domNode,this.containerNode,"first");d._started||d.startup();
this._firstIndex=a}a=f.getMarginBox(this.containerNode);this._adjustTopDiv(b,a);if(this._lastIndex-this._firstIndex>=this.maxPages*this.pageSize){b=this.unloadPages*this.pageSize;for(a=0;a<b;a++)this.containerNode.removeChild(this._items[this._lastIndex-a].domNode);this._lastIndex-=b;a=f.getMarginBox(this.containerNode)}this._adjustBottomDiv(a);return c==this.pageSize},_addAfter:function(){var a,b=null;var c=0;for(a=this._lastIndex+1;c<this.pageSize&&a<this._items.length;c++,a++){var d=this._items[a];
e.place(d.domNode,this.containerNode);d._started||d.startup();this._lastIndex=a}if(this._lastIndex-this._firstIndex>=this.maxPages*this.pageSize){b=f.getMarginBox(this.containerNode);d=this.unloadPages*this.pageSize;for(a=0;a<d;a++)this.containerNode.removeChild(this._items[this._firstIndex+a].domNode);this._firstIndex+=d}a=f.getMarginBox(this.containerNode);b&&this._adjustTopDiv(b,a);this._adjustBottomDiv(a);return c==this.pageSize},_adjustTopDiv:function(a,b){this._loadedYMin-=b.h-a.h;this._topDiv.style.height=
this._loadedYMin+"px"},_adjustBottomDiv:function(a){var b=0<this._lastIndex?(this._loadedYMin+a.h)/this._lastIndex:0;b*=this._items.length-1-this._lastIndex;this._bottomDiv.style.height=b+"px";this._loadedYMax=this._loadedYMin+a.h},_childrenChanged:function(){this._qs_timer||(this._qs_timer=this.defer(function(){delete this._qs_timer;this._reloadItems()}))},resize:function(){this.inherited(arguments);this._items&&this._loadItems()},addChild:function(a,b){this._items?("number"==typeof b?this._items.splice(b,
0,a):this._items.push(a),this._childrenChanged()):this.inherited(arguments)},removeChild:function(a){this._items?(this._items.splice("number"==typeof a?a:this._items.indexOf(a),1),this._childrenChanged()):this.inherited(arguments)},getChildren:function(){return this._items?this._items.slice(0):this.inherited(arguments)},_getSiblingOfChild:function(a,b){if(this._items){var c=this._items.indexOf(a);0<=c&&(c=0<b?c++:c--);return this._items[c]}return this.inherited(arguments)},generateList:function(a){this._items&&
!this.append&&(g.forEach(this.getChildren(),function(b){b.destroyRecursive()}),this._items=[]);this.inherited(arguments)}})});