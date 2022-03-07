//>>built
define("dojox/drawing/stencil/Text",["dojo","../util/oo","./_Base","../manager/_registry","../util/typeset"],function(d,e,h,k,l){e=e.declare(h,function(a){},{type:"dojox.drawing.stencil.Text",anchorType:"none",baseRender:!0,align:"start",valign:"top",_lineHeight:1,typesetter:function(a){this._rawText=a;return l.convertLaTeX(a)},setText:function(a){this.enabled&&(a=this.typesetter(a));this._text=a;this._textArray=[];this.created&&this.render(a)},getText:function(){return this._rawText||this._text},
dataToPoints:function(a){a=a||this.data;var b="auto"==a.width?1:a.width,c=a.height||this._lineHeight;return this.points=[{x:a.x,y:a.y},{x:a.x+b,y:a.y},{x:a.x+b,y:a.y+c},{x:a.x,y:a.y+c}]},pointsToData:function(a){a=a||this.points;var b=a[0];a=a[2];return this.data={x:b.x,y:b.y,width:a.x-b.x,height:a.y-b.y}},render:function(a){this.remove(this.shape,this.hit);!this.annotation&&this.renderHit&&this._renderOutline();void 0!=a&&(this._text=a,this._textArray=this._text.split("\n"));a=this.pointsToData();
var b=this._lineHeight,c=a.x+2*this.style.text.pad,f=a.y+this._lineHeight-.4*this.textSize;"middle"==this.valign&&(f-=b/2);this.shape=this.container.createGroup();d.forEach(this._textArray,function(g,m){g=this.shape.createText({x:c,y:f+b*m,text:unescape(g),align:this.align}).setFont(this.style.currentText).setFill(this.style.currentText.color);this._setNodeAtts(g)},this);this._setNodeAtts(this.shape)},_renderOutline:function(){if(!this.annotation){var a=this.pointsToData();"middle"==this.align?a.x-=
a.width/2-2*this.style.text.pad:"start"==this.align?a.x+=this.style.text.pad:"end"==this.align&&(a.x-=a.width-3*this.style.text.pad);"middle"==this.valign&&(a.y-=this._lineHeight/2-this.style.text.pad);this.hit=this.container.createRect(a).setStroke(this.style.currentHit).setFill(this.style.currentHit.fill);this._setNodeAtts(this.hit);this.hit.moveToBack()}},makeFit:function(a,b){a=d.create("span",{innerHTML:a,id:"foo"},document.body);var c=1;d.style(a,"fontSize",c+"px");for(var f=30;d.marginBox(a).w<
b&&!(c++,d.style(a,"fontSize",c+"px"),0>=f--););c--;b=d.marginBox(a);d.destroy(a);return{size:c,box:b}}});d.setObject("dojox.drawing.stencil.Text",e);k.register({name:"dojox.drawing.stencil.Text"},"stencil");return e});