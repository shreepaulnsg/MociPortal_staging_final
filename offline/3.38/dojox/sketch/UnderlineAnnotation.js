//>>built
define("dojox/sketch/UnderlineAnnotation",["./Annotation","./Anchor"],function(){var b=dojox.sketch;b.UnderlineAnnotation=function(a,c){b.Annotation.call(this,a,c);this.transform={dx:0,dy:0};this.start={x:0,y:0};this.property("label","#");this.lineShape=this.labelShape=null};b.UnderlineAnnotation.prototype=new b.Annotation;var d=b.UnderlineAnnotation.prototype;d.constructor=b.UnderlineAnnotation;d.type=function(){return"Underline"};d.getType=function(){return b.UnderlineAnnotation};d.apply=function(a){if(a){a.documentElement&&
(a=a.documentElement);this.readCommonAttrs(a);for(var c=0;c<a.childNodes.length;c++){var e=a.childNodes[c];if("text"==e.localName&&(this.property("label",e.childNodes[0].nodeValue),e=e.getAttribute("style").match(/fill:([^;]+);/))){var f=this.property("stroke");f.collor=e[1];this.property("stroke",f);this.property("fill",f.collor)}}}};d.initialize=function(a){this.apply(a);this.shape=this.figure.group.createGroup();this.shape.getEventSource().setAttribute("id",this.id);this.labelShape=this.shape.createText({x:0,
y:0,text:this.property("label"),decoration:"underline",align:"start"});this.labelShape.getEventSource().setAttribute("id",this.id+"-labelShape");this.lineShape=this.shape.createLine({x1:1,x2:this.labelShape.getTextWidth(),y1:2,y2:2});this.lineShape.getEventSource().setAttribute("shape-rendering","crispEdges");this.draw()};d.destroy=function(){this.shape&&(this.shape.remove(this.labelShape),this.shape.remove(this.lineShape),this.figure.group.remove(this.shape),this.shape=this.lineShape=this.labelShape=
null)};d.getBBox=function(){var a=this.getTextBox(),c=this.figure.zoomFactor;return{x:0,y:(-1*a.h+4)/c,width:(a.w+2)/c,height:a.h/c}};d.draw=function(a){this.apply(a);this.shape.setTransform(this.transform);this.labelShape.setShape({x:0,y:0,text:this.property("label")}).setFill(this.property("fill"));this.zoom()};d.zoom=function(a){if(this.labelShape){a=a||this.figure.zoomFactor;var c="vml"==dojox.gfx.renderer?0:2/a;b.Annotation.prototype.zoom.call(this,a);a="vml"==dojox.gfx.renderer?1:a;this.lineShape.setShape({x1:0,
x2:this.getBBox().width-c,y1:2,y2:2}).setStroke({color:this.property("fill"),width:1/a});this.mode==b.Annotation.Modes.Edit&&this.drawBBox()}};d.serialize=function(){this.property("stroke");return"\x3cg "+this.writeCommonAttrs()+'\x3e\x3ctext style\x3d"fill:'+this.property("fill")+';" font-weight\x3d"bold" text-decoration\x3d"underline" x\x3d"0" y\x3d"0"\x3e'+this.property("label")+"\x3c/text\x3e\x3c/g\x3e"};dojo.declare("dojox.sketch.UnderlineAnnotationTool",b.AnnotationTool,{onMouseDown:function(){},
onMouseUp:function(){var a=this.figure;a._start&&(a._end={x:0,y:0},this._create(a._start,{x:a._start.x+10,y:a._start.y+10}))},onMouseMove:function(){}});b.Annotation.register("Underline",b.UnderlineAnnotationTool);return dojox.sketch.UnderlineAnnotation});