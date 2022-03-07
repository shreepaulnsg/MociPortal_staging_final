//>>built
define("dojox/drawing/plugins/drawing/Grid",["dojo","../../util/oo","../_Plugin"],function(n,e,t){e=e.declare(t,function(a){a.gap&&(this.major=a.gap);this.majorColor=a.majorColor||this.majorColor;this.minorColor=a.minorColor||this.minorColor;this.setGrid();n.connect(this.canvas,"setZoom",this,"setZoom")},{type:"dojox.drawing.plugins.drawing.Grid",gap:100,major:100,minor:0,majorColor:"#00ffff",minorColor:"#d7ffff",zoom:1,setZoom:function(a){this.zoom=a;this.setGrid()},setGrid:function(a){a=Math.floor(this.major*
this.zoom);var f=this.minor?Math.floor(this.minor*this.zoom):a;this.grid&&this.grid.removeShape();var c,g,d=this.canvas.underlay.createGroup(),p=this.majorColor,q=this.minorColor,r=function(u,v,w,x,y){d.createLine({x1:u,y1:v,x2:w,y2:x}).setStroke({style:"Solid",width:1,cap:"round",color:y})};var b=1;for(g=1E3/f;b<g;b++){var h=0;var k=2E3;var l=c=f*b;var m=c%a?q:p;r(h,c,k,l,m)}b=1;for(g=2E3/f;b<g;b++)c=0,l=1E3,k=h=f*b,m=h%a?q:p,r(h,c,k,l,m);d.moveToBack();this.grid=d;this.util.attr(d,"id","grid");
return d}});n.setObject("dojox.drawing.plugins.drawing.Grid",e);return e});