//>>built
define("dojox/gfx/_gfxBidiSupport","./_base dojo/_base/lang dojo/_base/sniff dojo/dom dojo/_base/html dojo/_base/array ./utils ./shape ./path dojox/string/BidiEngine".split(" "),function(b,k,n,r,p,t,h,g,w,u){function q(a,c){var d=m(c);d&&b.utils.forEach(a,function(e){if(e instanceof b.Surface||e instanceof b.Group)e.textDir=d;e instanceof b.Text&&e.setShape({textDir:d});e instanceof b.TextPath&&e.setText({textDir:d})},a);return a}function m(a){var c=["ltr","rtl","auto"];return a&&(a=a.toLowerCase(),
0>t.indexOf(c,a))?null:a}k.getObject("dojox.gfx._gfxBidiSupport",!0);switch(b.renderer){case "vml":b.isVml=!0;break;case "svg":b.isSvg=!0;b.svg.useSvgWeb&&(b.isSvgWeb=!0);break;case "silverlight":b.isSilverlight=!0;break;case "canvas":case "canvasWithEvents":b.isCanvas=!0}var f=new u;k.extend(b.shape.Surface,{textDir:"",setTextDir:function(a){q(this,a)},getTextDir:function(){return this.textDir}});k.extend(b.Group,{textDir:"",setTextDir:function(a){q(this,a)},getTextDir:function(){return this.textDir}});
k.extend(b.Text,{textDir:"",formatText:function(a,c){if(c&&a&&1<a.length){var d="ltr";if("auto"==c){if(b.isVml)return a;c=f.checkContextual(a)}if(b.isVml)return d=f.checkContextual(a),c!=d?"rtl"==c?f.hasBidiChar(a)?"\u200f\u200f"+a:f.bidiTransform(a,"IRNNN","ILNNN"):"\u200e"+a:a;if(b.isSvgWeb)return"rtl"==c?f.bidiTransform(a,"IRNNN","ILNNN"):a;if(b.isSilverlight)return"rtl"==c?f.bidiTransform(a,"IRNNN","VLYNN"):f.bidiTransform(a,"ILNNN","VLYNN");if(b.isCanvas)return"rtl"==c?"\u202b"+a+"\u202c":"\u202a"+
a+"\u202c";if(b.isSvg)return 4>n("ff")?"rtl"==c?f.bidiTransform(a,"IRYNN","VLNNN"):f.bidiTransform(a,"ILYNN","VLNNN"):"\u200e"+("rtl"==c?"\u202b":"\u202a")+a+"\u202c"}return a},bidiPreprocess:function(a){return a}});k.extend(b.TextPath,{textDir:"",formatText:function(a,c){if(c&&a&&1<a.length){var d="ltr";if("auto"==c){if(b.isVml)return a;c=f.checkContextual(a)}if(b.isVml)return d=f.checkContextual(a),c!=d?"rtl"==c?f.hasBidiChar(a)?"\u200f\u200f"+a:f.bidiTransform(a,"IRNNN","ILNNN"):"\u200e"+a:a;if(b.isSvgWeb)return"rtl"==
c?f.bidiTransform(a,"IRNNN","ILNNN"):a;b.isSvg&&(a=n("opera")||4<=n("ff")?"\u200e"+("rtl"==c?"\u202b":"\u202a")+a+"\u202c":"rtl"==c?f.bidiTransform(a,"IRYNN","VLNNN"):f.bidiTransform(a,"ILYNN","VLNNN"))}return a},bidiPreprocess:function(a){a&&"string"==typeof a&&(this.origText=a,a=this.formatText(a,this.textDir));return a}});h=function(a,c,d,e){var v=a.prototype[c];a.prototype[c]=function(){var l;d&&(l=d.apply(this,arguments));l=v.call(this,l);e&&(l=e.call(this,l,arguments));return l}};g=function(a){a&&
(a.textDir&&(a.textDir=m(a.textDir)),a.text&&a.text instanceof Array&&(a.text=a.text.join(",")));!a||void 0==a.text&&!a.textDir||this.textDir==a.textDir&&a.text==this.origText||(this.origText=void 0!=a.text?a.text:this.origText,a.textDir&&(this.textDir=a.textDir),a.text=this.formatText(this.origText,this.textDir));return this.bidiPreprocess(a)};h(b.Text,"setShape",g,null);h(b.TextPath,"setText",g,null);g=function(a){(a=k.clone(a))&&this.origText&&(a.text=this.origText);return a};h(b.Text,"getShape",
null,g);h(b.TextPath,"getText",null,g);g=function(a,c){var d;c&&c[0]&&(d=m(c[0]));a.setTextDir(d?d:this.textDir);return a};h(b.Surface,"createGroup",null,g);h(b.Group,"createGroup",null,g);g=function(a){if(a){var c=a.textDir?m(a.textDir):this.textDir;c&&(a.textDir=c)}return a};h(b.Surface,"createText",g,null);h(b.Surface,"createTextPath",g,null);h(b.Group,"createText",g,null);h(b.Group,"createTextPath",g,null);b.createSurface=function(a,c,d,e){c=b[b.renderer].createSurface(a,c,d);e=m(e);if(b.isSvgWeb)return c.textDir=
e?e:p.style(r.byId(a),"direction"),c;if(b.isVml||b.isSvg||b.isCanvas)c.textDir=e?e:p.style(c.rawNode,"direction");b.isSilverlight&&(c.textDir=e?e:p.style(c._nodes[1],"direction"));return c};return b});