// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/mobile/GesturesUtil",["dojo/on","../DnDUtil","../animation/Animator","dojo/domReady!"],function(q,z,A){var p={},B=window._dev_emulateMultiTouch,C=window._dev_logTouch,x={_animation:null,_measures:null,start:function(){this._animation&&this._animation.stop();this._animation=null;this._measures=[];this._addMeasurePoint(0,0)},_addMeasurePoint:function(e,a){for(;9<this._measures.length;)this._measures.shift();var h={time:(new Date).getTime(),dx:e,dy:a},l=this._measures[this._measures.length-
1];this._measures.push(h);l&&(h.vx=e/(h.time-l.time),h.vy=a/(h.time-l.time))},notifyScrolled:function(e,a){this._addMeasurePoint(e,a)},flyScroll:function(e){if(!(2>this._measures.length)){var a=(new Date).getTime(),h=0,l=0,m=0;this._measures.forEach(function(f,g){"number"!==typeof f.vx||100<a-f.time||(h+=f.vx,l+=f.vy,m++)});if(m){h/=m;l/=m;var r=h,t=l;this._animation=A.animateProperty({duration:750,properties:{p:{start:0,end:1,easing:"sineOut"}},progressFunction:function(f,g,n){f=(new Date).getTime();
g=f-a;a=f;e(r*g,t*g);r=h*(1-n);t=l*(1-n)}})}}}};p.preventDefaultSiteBehavior=function(){document.body.style.touchAction="none"};p.preventDefaultOverflow=function(e){return e&&q(e,"touchmove",function(a){a.preventDefault()})};p.preventDoubleTapZoom=function(e){var a=(new Date).getTime();var h=q(e,"touchstart",function(l){var m=(new Date).getTime();300>m-a&&l.preventDefault();a=m});return{remove:function(){h.remove()}}};p.enableGesturesOnNode=function(e,a){function h(b,d){if(a.logDiv){if(1E3<a.logDiv.innerHTML.length||
d)a.logDiv.innerHTML="";a.logDiv.innerHTML+=b+"\x3cbr/\x3e"}}function l(b,d){var k=b.x-d.x;b=b.y-d.y;return Math.sqrt(k*k+b*b)}function m(b){a.enableFlyingScroll&&x.start();for(var d=0;d<b.changedTouches.length;d++){var k=b.changedTouches[d];f[k.identifier]={x:k.clientX,y:k.clientY}}h("Num touches "+b.touches.length);2===b.touches.length&&(a.canZoom&&!a.canZoom(b)?h("Can't zoom"):(d=f[b.touches[0].identifier],b=f[b.touches[1].identifier],d&&b?(g=l(d,b),h("Start distance: "+Math.round(g))):f={}))}
function r(b){if(2===b.touches.length){b.preventDefault();var d=b.touches[0];b=b.touches[1];var k=f[d.identifier],u=f[b.identifier];if(k&&u&&g){if(k.x=d.clientX,k.y=d.clientY,u.x=b.clientX,u.y=b.clientY,d=l(k,u),k=Math.abs(g-d),h("Diff: "+Math.round(k),!0),k>n){h("Zoom");if(g<d)a.onZoomIn();else a.onZoomOut();g=d}}else f={}}else if(1===b.touches.length)if(a.canScroll&&!a.canScroll(b)||b.preventDefault(),d=b.touches[0],k=f[d.identifier]){u=k.x-d.clientX;var y=k.y-d.clientY;k.x=d.clientX;k.y=d.clientY;
if(!a.canScroll||a.canScroll(b))a.onScrollChanged(u,y),a.enableFlyingScroll&&x.notifyScrolled(u,y)}else f={}}function t(b){for(var d=0;d<b.changedTouches.length;d++)delete f[b.changedTouches[d].identifier];g=0;h("Num touches "+b.touches.length,!b.touches.length);a.enableFlyingScroll&&x.flyScroll(a.onScrollChanged)}if(e){p.preventDefaultSiteBehavior();var f={},g=0,n=a.zoomTolerance||50;if(B)p.dev_addMultiTouchEmulation(e,m,r,t);else var c=q(e,"touchstart",m),v=q(e,"touchmove",r),w=q(e,"touchend",t);
C&&(a.logDiv=p.dev_createLogLabel());return{remove:function(){f=null;c.remove();v.remove();w.remove()}}}};p.dev_addMultiTouchEmulation=function(e,a,h,l){function m(f,g,n){g={type:f,clientX:n&&n.clientX,clientY:n&&n.clientY,changedTouches:[g.getTouch()],touches:[],preventDefault:function(){n&&n.preventDefault()}};r.isOn&&g.touches.push(r.getTouch());t.isOn&&g.touches.push(t.getTouch());switch(f){case "touchstart":a(g);break;case "touchmove":h(g);break;case "touchend":l(g)}}e=function(f,g,n){var c=
this;c.x=g;c.y=n;c.isOn=!1;c.node=document.createElement("div");c.node.style.width="50px";c.node.style.height="50px";c.node.style.borderRadius="50%";c.node.style.cursor="pointer";c.node.style.position="absolute";c.node.style.zIndex="10000";document.body.appendChild(c.node);z.addNoDragClickHandler(c.node,function(){c.isOn=!c.isOn;c._updateStateColor();m(c.isOn?"touchstart":"touchend",c,null)},{tolerance:5});var v,w;q(c.node,"touchstart",function(b){v=b.clientX;w=b.clientY;q.once(document.body,"touchend",
function(){v=void 0})});q(c.node,"touchmove",function(b){if(void 0!==v){b.preventDefault();var d=b.clientX-v,k=b.clientY-w;v=b.clientX;w=b.clientY;c.x+=d;c.y+=k;c._updateNodePosition();c.isOn&&m("touchmove",c,b)}});c._updateStateColor=function(){c.node.style.backgroundColor=c.isOn?"#00FF00":"#CCCCCC"};c._updateNodePosition=function(){c.node.style.left=c.x-c.node.clientWidth/2+"px";c.node.style.top=c.y-c.node.clientHeight/2+"px"};c._updateStateColor();c._updateNodePosition();c.getTouch=function(){return{identifier:f,
clientX:c.x,clientY:c.y}}};var r=new e("touch_0",100,100),t=new e("touch_1",200,200)};p.dev_createLogLabel=function(){var e=document.createElement("div");document.body.appendChild(e);var a=e.style;a.position="absolute";a.zIndex="10000";a.right="0px";a.bottom="0px";a.width="150px";a.height="100px";a.backgroundColor="gray";a.color="white";a.overflow="auto";a.padding="3px";return e};return p});