// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/symbols/Font","dojo/_base/declare dojo/_base/lang dojo/sniff dojox/gfx/_base ../kernel ../lang".split(" "),function(e,c,f,d,l,m){e=e(null,{declaredClass:"esri.symbol.Font",constructor:function(a,b,g,h,k){a?c.isObject(a)?c.mixin(this,a):(this.size=a,parseFloat(this.size)==this.size&&(this.size+="px"),void 0!==b&&(this.style=b),void 0!==g&&(this.variant=g),void 0!==h&&(this.weight=h),void 0!==k&&(this.family=k)):c.mixin(this,d.defaultFont);parseFloat(this.size)==this.size&&(this.size+=
"pt");9>f("ie")&&this.size&&c.isString(this.size)&&-1<this.size.indexOf("em")&&(this.size=d.pt2px(12*parseFloat(this.size))+"px");this.size=this._convert2PxSize(this.size)},setSize:function(a){this.size=this._convert2PxSize(a);return this},_convert2PxSize:function(a){var b;parseFloat(a)==a?b=a:c.isString(a)&&(-1<a.indexOf("pt")?b=d.pt2px(parseFloat(a)):-1<a.indexOf("px")?b=parseFloat(a):-1<a.indexOf("em")?b=d.pt2px(12*parseFloat(a)):-1<a.indexOf("%")&&(b=d.pt2px(.12*parseFloat(a))));return b},setStyle:function(a){this.style=
a;return this},setVariant:function(a){this.variant=a;return this},setWeight:function(a){this.weight=a;return this},setFamily:function(a){this.family=a;return this},setDecoration:function(a){this.decoration=a;return this},toJson:function(){return m.fixJson({size:d.px2pt(this.size),style:this.style,decoration:this.decoration,weight:this.weight,family:this.family})}});c.mixin(e,{STYLE_NORMAL:"normal",STYLE_ITALIC:"italic",STYLE_OBLIQUE:"oblique",VARIANT_NORMAL:"normal",VARIANT_SMALLCAPS:"small-caps",
WEIGHT_NORMAL:"normal",WEIGHT_BOLD:"bold",WEIGHT_BOLDER:"bolder",WEIGHT_LIGHTER:"lighter"});f("extend-esri")&&c.setObject("symbol.Font",e,l);return e});