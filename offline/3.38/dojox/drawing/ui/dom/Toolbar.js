//>>built
define("dojox/drawing/ui/dom/Toolbar",["dojo","../../util/common"],function(a,h){a.deprecated("dojox.drawing.ui.dom.Toolbar","It may not even make it to the 1.4 release.",1.4);return a.declare("dojox.drawing.ui.dom.Toolbar",[],{baseClass:"drawingToolbar",buttonClass:"drawingButton",iconClass:"icon",constructor:function(b,e){a.addOnLoad(this,function(){this.domNode=a.byId(e);a.addClass(this.domNode,this.baseClass);this.parse()})},createIcon:function(b,e){var c=e&&e.setup?e.setup:{};c.iconClass&&(e=
c.iconClass?c.iconClass:"iconNone",c=a.create("div",{title:c.tooltip?c.tooltip:"Tool"},b),a.addClass(c,this.iconClass),a.addClass(c,e),a.connect(b,"mouseup",function(d){a.stopEvent(d);a.removeClass(b,"active")}),a.connect(b,"mouseover",function(d){a.stopEvent(d);a.addClass(b,"hover")}),a.connect(b,"mousedown",this,function(d){a.stopEvent(d);a.addClass(b,"active")}),a.connect(b,"mouseout",this,function(d){a.stopEvent(d);a.removeClass(b,"hover")}))},createTool:function(b){b.innerHTML="";var e=a.attr(b,
"tool");this.toolNodes[e]=b;a.attr(b,"tabIndex",1);var c=a.getObject(e);this.createIcon(b,c);this.drawing.registerTool(e,c);a.connect(b,"mouseup",this,function(d){a.stopEvent(d);a.removeClass(b,"active");this.onClick(e)});a.connect(b,"mouseover",function(d){a.stopEvent(d);a.addClass(b,"hover")});a.connect(b,"mousedown",this,function(d){a.stopEvent(d);a.addClass(b,"active")});a.connect(b,"mouseout",this,function(d){a.stopEvent(d);a.removeClass(b,"hover")})},parse:function(){var b=a.attr(this.domNode,
"drawingId");this.drawing=h.byId(b);!this.drawing&&console.error("Drawing not found based on 'drawingId' in Toolbar. ");this.toolNodes={};var e;a.forEach(this.domNode.childNodes,function(c,d){if(1===c.nodeType){c.className=this.buttonClass;var f=a.attr(c,"tool");a.attr(c,"action");var g=a.attr(c,"plugin");if(f){if(0==d||"true"==a.attr(c,"selected"))e=f;this.createTool(c)}else if(g){d={name:g,options:{}};if(f=a.attr(c,"options"))d.options=eval("("+f+")");d.options.node=c;c.innerHTML="";this.drawing.addPlugin(d);
this.createIcon(c,a.getObject(a.attr(c,"plugin")))}}},this);this.drawing.initPlugins();a.connect(this.drawing,"setTool",this,"onSetTool");this.drawing.setTool(e)},onClick:function(b){this.drawing.setTool(b)},onSetTool:function(b){for(var e in this.toolNodes)e==b?(a.addClass(this.toolNodes[b],"selected"),this.toolNodes[b].blur()):a.removeClass(this.toolNodes[e],"selected")}})});