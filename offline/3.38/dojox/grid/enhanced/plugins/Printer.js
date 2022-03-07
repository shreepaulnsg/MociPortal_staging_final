//>>built
define("dojox/grid/enhanced/plugins/Printer","dojo/_base/declare dojo/_base/html dojo/_base/Deferred dojo/_base/lang dojo/_base/sniff dojo/_base/xhr dojo/_base/array dojo/query dojo/DeferredList ../_Plugin ../../EnhancedGrid ./exporter/TableWriter".split(" "),function(l,g,r,k,m,t,n,p,u,v,w,x){l=l("dojox.grid.enhanced.plugins.Printer",v,{name:"printer",constructor:function(a){this.grid=a;this._mixinGrid(a);a.setExportFormatter(function(d,e,b,c){return e.format(b,c)})},_mixinGrid:function(){var a=this.grid;
a.printGrid=k.hitch(this,this.printGrid);a.printSelected=k.hitch(this,this.printSelected);a.exportToHTML=k.hitch(this,this.exportToHTML);a.exportSelectedToHTML=k.hitch(this,this.exportSelectedToHTML);a.normalizePrintedGrid=k.hitch(this,this.normalizeRowHeight)},printGrid:function(a){this.exportToHTML(a,k.hitch(this,this._print))},printSelected:function(a){this.exportSelectedToHTML(a,k.hitch(this,this._print))},exportToHTML:function(a,d){a=this._formalizeArgs(a);var e=this;this.grid.exportGrid("table",
a,function(b){e._wrapHTML(a.title,a.cssFiles,a.titleInBody+b).then(d)})},exportSelectedToHTML:function(a,d){a=this._formalizeArgs(a);var e=this;this.grid.exportSelected("table",a.writerArgs,function(b){e._wrapHTML(a.title,a.cssFiles,a.titleInBody+b).then(d)})},_loadCSSFiles:function(a){a=n.map(a,function(d){d=k.trim(d);if(".css"===d.substring(d.length-4).toLowerCase())return t.get({url:d});var e=new r;e.callback(d);return e});return u.prototype.gatherResults(a)},_print:function(a){var d=this,e=function(h){h=
h.document;h.open();h.write(a);h.close();d.normalizeRowHeight(h)};if(window.print)if(m("chrome")||m("opera")){var b=window.open("javascript: ''","","status\x3d0,menubar\x3d0,location\x3d0,toolbar\x3d0,width\x3d1,height\x3d1,resizable\x3d0,scrollbars\x3d0");e(b);b.print();b.close()}else{b=this._printFrame;var c=this.grid.domNode;if(!b){var f=c.id+"_print_frame";(b=g.byId(f))||(b=g.create("iframe"),b.id=f,b.frameBorder=0,g.style(b,{width:"1px",height:"1px",position:"absolute",right:0,bottom:0,border:"none",
overflow:"hidden"}),m("ie")||g.style(b,"visibility","hidden"),c.appendChild(b));this._printFrame=b}b=b.contentWindow;e(b);b.focus();b.print()}},_wrapHTML:function(a,d,e){return this._loadCSSFiles(d).then(function(b){var c,f=['\x3c!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"\x3e',"\x3chtml ",g._isBodyLtr()?"":'dir\x3d"rtl"',"\x3e\x3chead\x3e\x3ctitle\x3e",a,'\x3c/title\x3e\x3cmeta http-equiv\x3d"Content-Type" content\x3d"text/html; charset\x3dutf-8"\x3e\x3c/meta\x3e'];
for(c=0;c<b.length;++c)f.push('\x3cstyle type\x3d"text/css"\x3e',b[c],"\x3c/style\x3e");f.push("\x3c/head\x3e");0>e.search(/^\s*<body/i)&&(e="\x3cbody\x3e"+e+"\x3c/body\x3e");f.push(e,"\x3c/html\x3e");return f.join("")})},normalizeRowHeight:function(a){a=p(".grid_view",a.body);var d=n.map(a,function(q){return p(".grid_header",q)[0]}),e=n.map(a,function(q){return p(".grid_row",q)}),b=e[0].length,c,f=0;for(c=a.length-1;0<=c;--c){var h=g.contentBox(d[c]).h;h>f&&(f=h)}for(c=a.length-1;0<=c;--c)g.style(d[c],
"height",f+"px");for(d=0;d<b;++d){f=0;for(c=a.length-1;0<=c;--c)h=g.contentBox(e[c][d]).h,h>f&&(f=h);for(c=a.length-1;0<=c;--c)g.style(e[c][d],"height",f+"px")}e=0;b=g._isBodyLtr();for(c=0;c<a.length;++c)g.style(a[c],b?"left":"right",e+"px"),e+=g.marginBox(a[c]).w},_formalizeArgs:function(a){a=a&&k.isObject(a)?a:{};a.title=String(a.title)||"";k.isArray(a.cssFiles)||(a.cssFiles=[a.cssFiles]);a.titleInBody=a.title?["\x3ch1\x3e",a.title,"\x3c/h1\x3e"].join(""):"";return a}});w.registerPlugin(l,{dependency:["exporter"]});
return l});