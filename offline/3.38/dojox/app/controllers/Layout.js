//>>built
define("dojox/app/controllers/Layout","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/window dojo/query dojo/dom-geometry dojo/dom-attr dojo/dom-style dijit/registry ./LayoutBase ../utils/layout ../utils/constraints dojo/sniff".split(" "),function(r,t,p,f,u,g,m,h,k,v,w,x,q){return r("dojox.app.controllers.Layout",v,{constructor:function(a,b){},onResize:function(){this._doResize(this.app);this.resizeSelectedChildren(this.app)},resizeSelectedChildren:function(a){for(var b in a.selectedChildren)a.selectedChildren[b]&&
a.selectedChildren[b].domNode&&(this.app.log("in Layout resizeSelectedChildren calling resizeSelectedChildren calling _doResize for w.selectedChildren[hash].id\x3d"+a.selectedChildren[b].id),this._doResize(a.selectedChildren[b]),p.forEach(a.selectedChildren[b].domNode.children,function(c){k.byId(c.id)&&k.byId(c.id).resize&&k.byId(c.id).resize()}),this.resizeSelectedChildren(a.selectedChildren[b]))},initLayout:function(a){this.app.log("in app/controllers/Layout.initLayout event\x3d",a);this.app.log("in app/controllers/Layout.initLayout event.view.parent.name\x3d[",
a.view.parent.name,"]");if(!a.view.domNode.parentNode||8==q("ie")&&!a.view.domNode.parentElement)this.app.useConfigOrder?a.view.parent.domNode.appendChild(a.view.domNode):this.addViewToParentDomByConstraint(a);m.set(a.view.domNode,"data-app-constraint",a.view.constraint);this.inherited(arguments)},addViewToParentDomByConstraint:function(a){var b=a.view.constraint;if("bottom"===b)a.view.parent.domNode.appendChild(a.view.domNode);else if("top"===b)a.view.parent.domNode.insertBefore(a.view.domNode,a.view.parent.domNode.firstChild);
else if(0<a.view.parent.domNode.children.length)for(var c in a.view.parent.domNode.children){var d=a.view.parent.domNode.children[c],e="ltr"===h.get(a.view.parent.domNode,"direction"),l=e?"left":"right";e=e?"right":"left";if(d.getAttribute&&d.getAttribute("data-app-constraint")){var n=d.getAttribute("data-app-constraint");if("bottom"===n||n===e||"top"!==n&&b===l){a.view.parent.domNode.insertBefore(a.view.domNode,d);break}}}a.view.domNode.parentNode&&(8!=q("ie")||a.view.domNode.parentElement)||a.view.parent.domNode.appendChild(a.view.domNode)},
_doResize:function(a){var b=a.domNode;if(b){var c={};"h"in c&&"w"in c||(c=t.mixin(g.getMarginBox(b),c));if(a!==this.app){var d=h.getComputedStyle(b),e=g.getMarginExtents(b,d),l=g.getBorderExtents(b,d);c=a._borderBox={w:c.w-(e.w+l.w),h:c.h-(e.h+l.h)};e=g.getPadExtents(b,d);a._contentBox={l:h.toPixelValue(b,d.paddingLeft),t:h.toPixelValue(b,d.paddingTop),w:c.w-e.w,h:c.h-e.h}}else a._contentBox={l:0,t:0,h:f.global.innerHeight||f.doc.documentElement.clientHeight,w:f.global.innerWidth||f.doc.documentElement.clientWidth};
this.inherited(arguments)}else this.app.log("Warning - View has not been loaded, in Layout _doResize view.domNode is not set for view.id\x3d"+a.id+" view\x3d",a)},layoutView:function(a){a.view&&(this.inherited(arguments),a.doResize&&(this._doResize(a.parent||this.app),this._doResize(a.view)))},_doLayout:function(a){if(a){this.app.log("in Layout _doLayout called for view.id\x3d"+a.id+" view\x3d",a);var b=x.getSelectedChild(a,a.constraint);if(b&&b.isFullScreen)console.warn("fullscreen sceen layout");
else{var c=u("\x3e [data-app-constraint]",a.domNode).map(function(d){var e=k.getEnclosingWidget(d);return e?(e._constraint=m.get(d,"data-app-constraint"),e):{domNode:d,_constraint:m.get(d,"data-app-constraint")}});b&&(c=p.filter(c,function(d){return d.domNode&&d._constraint},a))}a._contentBox&&w.layoutChildren(a.domNode,a._contentBox,c)}else console.warn("layout empty view.")}})});