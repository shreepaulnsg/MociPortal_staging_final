/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/dnd/Moveable","../_base/array ../_base/declare ../_base/lang ../dom ../dom-class ../Evented ../has ../on ../topic ../touch ./common ./Mover ../_base/window".split(" "),function(q,r,d,l,g,t,u,e,m,h,n,v,p){function w(a,b){"touchAction"in document.body.style?k="touchAction":"msTouchAction"in document.body.style&&(k="msTouchAction");f=function(c,x){c.style[k]=x};f(a,b)}var k,f=function(){};u("touch-action")&&(f=w);return r("dojo.dnd.Moveable",[t],{handle:"",delay:0,skip:!1,constructor:function(a,
b){this.node=l.byId(a);f(this.node,"none");b||(b={});this.handle=b.handle?l.byId(b.handle):null;this.handle||(this.handle=this.node);this.delay=0<b.delay?b.delay:0;this.skip=b.skip;this.mover=b.mover?b.mover:v;this.events=[e(this.handle,h.press,d.hitch(this,"onMouseDown")),e(this.handle,"dragstart",d.hitch(this,"onSelectStart")),e(this.handle,"selectstart",d.hitch(this,"onSelectStart"))]},markupFactory:function(a,b,c){return new c(b,a)},destroy:function(){q.forEach(this.events,function(a){a.remove()});
f(this.node,"");this.events=this.node=this.handle=null},onMouseDown:function(a){if(!this.skip||!n.isFormElement(a)){if(this.delay)this.events.push(e(this.handle,h.move,d.hitch(this,"onMouseMove")),e(this.handle.ownerDocument,h.release,d.hitch(this,"onMouseUp"))),this._lastX=a.pageX,this._lastY=a.pageY;else this.onDragDetected(a);a.stopPropagation();a.preventDefault()}},onMouseMove:function(a){if(Math.abs(a.pageX-this._lastX)>this.delay||Math.abs(a.pageY-this._lastY)>this.delay)this.onMouseUp(a),this.onDragDetected(a);
a.stopPropagation();a.preventDefault()},onMouseUp:function(a){for(var b=0;2>b;++b)this.events.pop().remove();a.stopPropagation();a.preventDefault()},onSelectStart:function(a){this.skip&&n.isFormElement(a)||(a.stopPropagation(),a.preventDefault())},onDragDetected:function(a){new this.mover(this.node,a,this)},onMoveStart:function(a){m.publish("/dnd/move/start",a);g.add(p.body(),"dojoMove");g.add(this.node,"dojoMoveItem")},onMoveStop:function(a){m.publish("/dnd/move/stop",a);g.remove(p.body(),"dojoMove");
g.remove(this.node,"dojoMoveItem")},onFirstMove:function(){},onMove:function(a,b){this.onMoving(a,b);var c=a.node.style;c.left=b.l+"px";c.top=b.t+"px";this.onMoved(a,b)},onMoving:function(){},onMoved:function(){}})});