//>>built
define("dijit/layout/utils",["dojo/_base/array","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/lang"],function(n,r,l,p,g){function u(c){return c.substring(0,1).toUpperCase()+c.substring(1)}function q(c,a){var e=c.resize?c.resize(a):l.setMarginBox(c.domNode,a);e?g.mixin(c,e):(g.mixin(c,l.getMarginBox(c.domNode)),g.mixin(c,a))}var t={marginBox2contentBox:function(c,a){var e=p.getComputedStyle(c),h=l.getMarginExtents(c,e),m=l.getPadBorderExtents(c,e);return{l:p.toPixelValue(c,e.paddingLeft),
t:p.toPixelValue(c,e.paddingTop),w:a.w-(h.w+m.w),h:a.h-(h.h+m.h)}},layoutChildren:function(c,a,e,h,m){a=g.mixin({},a);r.add(c,"dijitLayoutContainer");e=n.filter(e,function(b){return"center"!=b.region&&"client"!=b.layoutAlign}).concat(n.filter(e,function(b){return"center"==b.region||"client"==b.layoutAlign}));n.forEach(e,function(b){var f=b.domNode,d=b.region||b.layoutAlign;if(!d)throw Error("No region setting for "+b.id);var k=f.style;k.left=a.l+"px";k.top=a.t+"px";k.position="absolute";r.add(f,"dijitAlign"+
u(d));f={};h&&h==b.id&&(f["top"==b.region||"bottom"==b.region?"h":"w"]=m);"leading"==d&&(d=b.isLeftToRight()?"left":"right");"trailing"==d&&(d=b.isLeftToRight()?"right":"left");"top"==d||"bottom"==d?(f.w=a.w,q(b,f),a.h-=b.h,"top"==d?a.t+=b.h:k.top=a.t+a.h+"px"):"left"==d||"right"==d?(f.h=a.h,q(b,f),a.w-=b.w,"left"==d?a.l+=b.w:k.left=a.l+a.w+"px"):"client"!=d&&"center"!=d||q(b,a)})}};g.setObject("dijit.layout.utils",t);return t});