//>>built
define("dojox/drawing/annotations/BoxShadow",["dojo","dojo/_base/Color","../util/oo"],function(q,r,t){return t.declare(function(a){this.stencil=a.stencil;this.util=a.stencil.util;this.mouse=a.stencil.mouse;this.style=a.stencil.style;delete a.stencil;this.options=q.mixin({size:6,mult:4,alpha:.05,place:"BR",color:"#646464"},a);this.options.color=new r(this.options.color);this.options.color.a=this.options.alpha;switch(this.stencil.shortType){case "image":case "rect":this.method="createForRect";break;
case "ellipse":this.method="createForEllipse";break;case "line":this.method="createForLine";break;case "path":this.method="createForPath";break;case "vector":this.method="createForZArrow";break;default:console.warn("A shadow cannot be made for Stencil type ",this.stencil.type)}this.method&&(this.render(),this.stencil.connectMult([[this.stencil,"onTransform",this,"onTransform"],"createForZArrow"==this.method?[this.stencil,"render",this,"render"]:[this.stencil,"render",this,"onRender"],[this.stencil,
"onDelete",this,"destroy"]]))},{showing:!0,render:function(){this.container&&this.container.removeShape();this.container=this.stencil.container.createGroup();this.container.moveToBack();var a=this.options,e="createForPath"==this.method?this.stencil.points:this.stencil.data;this[this.method](a,a.size,a.mult,e,e.r||1,a.place,a.color)},hide:function(){this.showing&&(this.showing=!1,this.container.removeShape())},show:function(){this.showing||(this.showing=!0,this.stencil.container.add(this.container))},
createForPath:function(a,e,f,c,g,b,l){a=e*f/4;var k=/B/.test(b)?a:/T/.test(b)?-1*a:0,h=/R/.test(b)?a:/L/.test(b)?-1*a:0;for(b=1;b<=e;b++)if(a=b*f,"svg"==dojox.gfx.renderer){var m=[];q.forEach(c,function(d,p){0==p?m.push("M "+(d.x+h)+" "+(d.y+k)):m.push((d.t||"L ")+(d.x+h)+" "+(d.y+k))},this);m.push("Z");this.container.createPath(m.join(", ")).setStroke({width:a,color:l,cap:"round"})}else{var n=this.container.createPath({}).setStroke({width:a,color:l,cap:"round"});q.forEach(this.points,function(d,
p){0==p||"M"==d.t?n.moveTo(d.x+h,d.y+k):"Z"==d.t?n.closePath():n.lineTo(d.x+h,d.y+k)},this);n.closePath()}},createForLine:function(a,e,f,c,g,b,l){g=e*f/4;a=/B/.test(b)?g:/T/.test(b)?-1*g:0;b=/R/.test(b)?g:/L/.test(b)?-1*g:0;for(g=1;g<=e;g++){var k=g*f;this.container.createLine({x1:c.x1+b,y1:c.y1+a,x2:c.x2+b,y2:c.y2+a}).setStroke({width:k,color:l,cap:"round"})}},createForEllipse:function(a,e,f,c,g,b,l){a=e*f/8;var k=/B/.test(b)?a:/T/.test(b)?-1*a:0;b=/R/.test(b)?.8*a:/L/.test(b)?-.8*a:0;for(var h=
1;h<=e;h++){var m=h*f;this.container.createEllipse({cx:c.cx+b,cy:c.cy+k,rx:c.rx-a,ry:c.ry-a,r:g}).setStroke({width:m,color:l})}},createForRect:function(a,e,f,c,g,b,l){a=e*f/2;var k=/B/.test(b)?a:/T/.test(b)?0:a/2;b=/R/.test(b)?a:/L/.test(b)?0:a/2;for(var h=1;h<=e;h++){var m=h*f;this.container.createRect({x:c.x+b,y:c.y+k,width:c.width-a,height:c.height-a,r:g}).setStroke({width:m,color:l})}},arrowPoints:function(){var a=this.stencil.data,e=this.stencil.getRadius(),f=this.style.zAngle+30;f=this.util.pointOnCircle(a.x1,
a.y1,.75*e,f);a={start:{x:a.x1,y:a.y1},x:f.x,y:f.y};f=this.util.angle(a);var c=this.util.length(a);e=this.style.arrows.length;var g=this.style.arrows.width/3;c<e&&(e=c/2);c=this.util.pointOnCircle(a.x,a.y,-e,f-g);f=this.util.pointOnCircle(a.x,a.y,-e,f+g);return[{x:a.x,y:a.y},c,f]},createForZArrow:function(a,e,f,c,g,b,l){if(!(1>this.stencil.data.cosphi)&&this.stencil.points[0]){c=e*f/4;var k=/B/.test(b)?c:/T/.test(b)?-1*c:0,h=/R/.test(b)?c:/L/.test(b)?-1*c:0;for(b=1;b<=e;b++){a=b*f;c=this.arrowPoints();
if(!c)break;if("svg"==dojox.gfx.renderer){var m=[];q.forEach(c,function(d,p){0==p?m.push("M "+(d.x+h)+" "+(d.y+k)):m.push((d.t||"L ")+(d.x+h)+" "+(d.y+k))},this);m.push("Z");this.container.createPath(m.join(", ")).setStroke({width:a,color:l,cap:"round"}).setFill(l)}else{var n=this.container.createPath({}).setStroke({width:a,color:l,cap:"round"});q.forEach(c,function(d,p){0==p||"M"==d.t?n.moveTo(d.x+h,d.y+k):"Z"==d.t?n.closePath():n.lineTo(d.x+h,d.y+k)},this);n.closePath()}g=this.stencil.points;this.container.createLine({x1:g[0].x,
y1:g[0].y,x2:c[0].x,y2:c[0].y}).setStroke({width:a,color:l,cap:"round"})}}},onTransform:function(){this.render()},onRender:function(){this.container.moveToBack()},destroy:function(){this.container&&this.container.removeShape()}})});