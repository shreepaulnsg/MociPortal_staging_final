//>>built
define("dojox/geo/openlayers/Patch",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/sniff","dojox/gfx","dojox/gfx/shape"],function(e,h,k,c,l){e=h.getObject("geo.openlayers",!0,dojox);e.Patch={patchMethod:function(a,b,f,g){var m=a.prototype[b];a.prototype[b]=function(){f&&f.call(this,b,arguments);var d=m.apply(this,arguments);g&&(d=g.call(this,b,d,arguments)||d);return d}},patchGFX:function(){var a=function(){this.rawNode.path||(this.rawNode.path={})},b=function(){this.rawNode.fill&&!this.rawNode.fill.colors&&
(this.rawNode.fill.colors={})};8>=k.isIE&&"vml"===c.renderer&&(this.patchMethod(c.Line,"setShape",a,null),this.patchMethod(c.Polyline,"setShape",a,null),this.patchMethod(c.Path,"setShape",a,null),this.patchMethod(l.Shape,"setFill",b,null))}};return e.Patch});