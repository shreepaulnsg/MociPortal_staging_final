//>>built
define("dojox/sketch/PreexistingAnnotation",["dojo/_base/kernel","dojo/_base/lang","./Annotation","./Anchor"],function(c){c.getObject("sketch",!0,dojox);var d=dojox.sketch;d.PreexistingAnnotation=function(a,e){d.Annotation.call(this,a,e);this.transform={dx:0,dy:0};this.start={x:0,y:0};this.end={x:200,y:200};this.radius=8;this.textPosition={x:196,y:196};this.textOffset=4;this.textAlign="end";this.labelShape=this.rectShape=null;this.anchors.start=new d.Anchor(this,"start");this.anchors.end=new d.Anchor(this,
"end")};d.PreexistingAnnotation.prototype=new d.Annotation;c=d.PreexistingAnnotation.prototype;c.constructor=d.PreexistingAnnotation;c.type=function(){return"Preexisting"};c.getType=function(){return d.PreexistingAnnotation};c._pos=function(){var a=Math.max(this.start.x,this.end.x),e=Math.max(this.start.y,this.end.y);this.start={x:Math.min(this.start.x,this.end.x),y:Math.min(this.start.y,this.end.y)};this.end={x:a,y:e};this.textPosition={x:this.end.x-this.textOffset,y:this.end.y-this.textOffset}};
c.apply=function(a){if(a){a.documentElement&&(a=a.documentElement);this.readCommonAttrs(a);for(var e=0;e<a.childNodes.length;e++){var b=a.childNodes[e];if("text"==b.localName)this.property("label",b.childNodes.length?b.childNodes[0].nodeValue:"");else if("rect"==b.localName){null!==b.getAttribute("x")&&(this.start.x=parseFloat(b.getAttribute("x"),10));null!==b.getAttribute("width")&&(this.end.x=parseFloat(b.getAttribute("width"),10)+parseFloat(b.getAttribute("x"),10));null!==b.getAttribute("y")&&
(this.start.y=parseFloat(b.getAttribute("y"),10));null!==b.getAttribute("height")&&(this.end.y=parseFloat(b.getAttribute("height"),10)+parseFloat(b.getAttribute("y"),10));null!==b.getAttribute("r")&&(this.radius=parseFloat(b.getAttribute("r"),10));var g=this.property("stroke");b=b.getAttribute("style");var f=b.match(/stroke:([^;]+);/);f&&(g.color=f[1],this.property("fill",f[1]));if(f=b.match(/stroke-width:([^;]+);/))g.width=f[1];this.property("stroke",g)}}}};c.initialize=function(a){this.apply(a);
this._pos();this.shape=this.figure.group.createGroup();this.shape.getEventSource().setAttribute("id",this.id);this.rectShape=this.shape.createRect({x:this.start.x,y:this.start.y,width:this.end.x-this.start.x,height:this.end.y-this.start.y,r:this.radius}).setFill([255,255,255,.1]);this.rectShape.getEventSource().setAttribute("shape-rendering","crispEdges");this.labelShape=this.shape.createText({x:this.textPosition.x,y:this.textPosition.y,text:this.property("label"),align:this.textAlign}).setFill(this.property("fill"));
this.labelShape.getEventSource().setAttribute("id",this.id+"-labelShape");this.draw()};c.destroy=function(){this.shape&&(this.shape.remove(this.rectShape),this.shape.remove(this.labelShape),this.figure.group.remove(this.shape),this.shape=this.rectShape=this.labelShape=null)};c.getBBox=function(){var a=Math.min(this.start.x,this.end.x),e=Math.min(this.start.y,this.end.y);return{x:a-2,y:e-2,width:Math.max(this.start.x,this.end.x)-a+4,height:Math.max(this.start.y,this.end.y)-e+4}};c.draw=function(a){this.apply(a);
this._pos();this.shape.setTransform(this.transform);this.rectShape.setShape({x:this.start.x,y:this.start.y,width:this.end.x-this.start.x,height:this.end.y-this.start.y,r:this.radius}).setFill([255,255,255,.1]);this.labelShape.setShape({x:this.textPosition.x,y:this.textPosition.y,text:this.property("label")}).setFill(this.property("fill"));this.zoom()};c.zoom=function(a){this.rectShape&&(a=a||this.figure.zoomFactor,d.Annotation.prototype.zoom.call(this,a),a="vml"==dojox.gfx.renderer?1:a,this.rectShape.setStroke({color:this.property("fill"),
width:1/a}))};c.serialize=function(){var a=this.property("stroke");return"\x3cg "+this.writeCommonAttrs()+'\x3e\x3crect style\x3d"stroke:'+a.color+';stroke-width:1;fill:none;" x\x3d"'+this.start.x+'" width\x3d"'+(this.end.x-this.start.x)+'" y\x3d"'+this.start.y+'" height\x3d"'+(this.end.y-this.start.y)+'" rx\x3d"'+this.radius+'" ry\x3d"'+this.radius+'"  /\x3e\x3ctext style\x3d"fill:'+a.color+";text-anchor:"+this.textAlign+'" font-weight\x3d"bold" x\x3d"'+this.textPosition.x+'" y\x3d"'+this.textPosition.y+
'"\x3e'+this.property("label")+"\x3c/text\x3e\x3c/g\x3e"};d.Annotation.register("Preexisting");return dojox.sketch.PreexistingAnnotation});