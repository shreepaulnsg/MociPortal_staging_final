// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define(["../core/declare","../core/lang","../core/screenUtils","./MarkerSymbol","./support/urlUtils"],function(l,f,c,m,g){var h={width:12,height:12,angle:0,xoffset:0,yoffset:0},e=l(m,{declaredClass:"esri.symbols.PictureMarkerSymbol",properties:{color:{json:{write:!1}},type:"picture-marker",url:g.urlPropertyDefinition,source:g.sourcePropertyDefinition,height:{json:{read:{source:["height","size"],reader:function(a,b){return b.size||a}},write:!0},cast:c.toPt},width:{json:{read:{source:["width","size"],
reader:function(a,b){return b.size||a}},write:!0},cast:c.toPt},size:{json:{write:!1}}},getDefaults:function(){return f.mixin(this.inherited(arguments),h)},normalizeCtorArgs:function(a,b,k){if(a&&"string"!==typeof a&&null==a.imageData)return a;var d={};a&&(d.url=a);null!=b&&(d.width=c.toPt(b));null!=k&&(d.height=c.toPt(k));return d},clone:function(){var a=new e({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset});a._set("source",f.clone(this.source));
return a}});e.defaultProps=h;return e});