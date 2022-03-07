// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define(["../core/declare","../core/lang","../core/screenUtils","./FillSymbol","./support/urlUtils"],function(m,d,b,n,f){var g={xscale:1,yscale:1,xoffset:0,yoffset:0,width:12,height:12},e=m(n,{declaredClass:"esri.symbols.PictureFillSymbol",properties:{type:"picture-fill",url:f.urlPropertyDefinition,xscale:{value:1,json:{write:!0}},yscale:{value:1,json:{write:!0}},width:{value:12,cast:b.toPt,json:{write:!0}},height:{value:12,cast:b.toPt,json:{write:!0}},xoffset:{value:0,cast:b.toPt,json:{write:!0}},
yoffset:{value:0,cast:b.toPt,json:{write:!0}},source:f.sourcePropertyDefinition},getDefaults:function(){return d.mixin(this.inherited(arguments),g)},normalizeCtorArgs:function(a,h,k,l){if(a&&"string"!==typeof a&&null==a.imageData)return a;var c={};a&&(c.url=a);h&&(c.outline=h);null!=k&&(c.width=b.toPt(k));null!=l&&(c.height=b.toPt(l));return c},clone:function(){var a=new e({color:d.clone(this.color),height:this.height,outline:this.outline&&this.outline.clone(),url:this.url,width:this.width,xoffset:this.xoffset,
xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale});a._set("source",d.clone(this.source));return a}});e.defaultProps=g;return e});