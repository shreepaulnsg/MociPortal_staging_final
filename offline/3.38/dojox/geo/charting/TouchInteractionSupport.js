//>>built
define("dojox/geo/charting/TouchInteractionSupport",["dojo/_base/lang","dojo/_base/declare","dojo/_base/event","dojo/_base/connect","dojo/_base/window"],function(g,k,f,d,h){return k("dojox.geo.charting.TouchInteractionSupport",null,{_map:null,_centerTouchLocation:null,_touchMoveListener:null,_touchEndListener:null,_touchEndTapListener:null,_touchStartListener:null,_initialFingerSpacing:null,_initialScale:null,_tapCount:null,_tapThreshold:null,_lastTap:null,_doubleTapPerformed:!1,_oneFingerTouch:!1,
_tapCancel:!1,constructor:function(a){this._map=a;this._centerTouchLocation={x:0,y:0};this._tapCount=0;this._lastTap={x:0,y:0};this._tapThreshold=100},connect:function(){this._touchStartListener=this._map.surface.connect("touchstart",this,this._touchStartHandler)},disconnect:function(){this._touchStartListener&&(d.disconnect(this._touchStartListener),this._touchStartListener=null)},_getTouchBarycenter:function(a){var b=a.touches;a=b[0];var c=null;c=1<b.length?b[1]:b[0];b=this._map._getContainerBounds();
return{x:(a.pageX+c.pageX)/2-b.x,y:(a.pageY+c.pageY)/2-b.y}},_getFingerSpacing:function(a){a=a.touches;var b=-1;2<=a.length&&(b=a[1].pageX-a[0].pageX,a=a[1].pageY-a[0].pageY,b=Math.sqrt(b*b+a*a));return b},_isDoubleTap:function(a){var b=!1;a=a.touches;if(0<this._tapCount&&1==a.length){var c=a[0].pageX-this._lastTap.x,e=a[0].pageY-this._lastTap.y;c*c+e*e<this._tapThreshold?b=!0:this._tapCount=0}this._tapCount++;this._lastTap.x=a[0].pageX;this._lastTap.y=a[0].pageY;setTimeout(g.hitch(this,function(){this._tapCount=
0}),300);return b},_doubleTapHandler:function(a){var b=this._getFeatureFromTouchEvent(a);b?this._map.fitToMapArea(b._bbox,15,!0):(a=a.touches,b=this._map._getContainerBounds(),a=this._map.screenCoordsToMapCoords(a[0].pageX-b.x,a[0].pageY-b.y),this._map.setMapCenterAndScale(a.x,a.y,2*this._map.getMapScale(),!0))},_getFeatureFromTouchEvent:function(a){var b=null;a.gfxTarget&&a.gfxTarget.getParent&&(b=this._map.mapObj.features[a.gfxTarget.getParent().id]);return b},_touchStartHandler:function(a){f.stop(a);
this._oneFingerTouch=1==a.touches.length;this._tapCancel=!this._oneFingerTouch;this._doubleTapPerformed=!1;if(this._isDoubleTap(a))this._doubleTapHandler(a),this._doubleTapPerformed=!0;else{var b=this._getTouchBarycenter(a);b=this._map.screenCoordsToMapCoords(b.x,b.y);this._centerTouchLocation.x=b.x;this._centerTouchLocation.y=b.y;this._initialFingerSpacing=this._getFingerSpacing(a);this._initialScale=this._map.getMapScale();this._touchMoveListener||(this._touchMoveListener=d.connect(h.global,"touchmove",
this,this._touchMoveHandler));this._touchEndTapListener||(this._touchEndTapListener=this._map.surface.connect("touchend",this,this._touchEndTapHandler));this._touchEndListener||(this._touchEndListener=d.connect(h.global,"touchend",this,this._touchEndHandler))}},_touchEndTapHandler:function(a){0==a.touches.length&&(this._oneFingerTouch&&!this._tapCancel&&(this._oneFingerTouch=!1,setTimeout(g.hitch(this,function(){if(!this._doubleTapPerformed){var b=a.changedTouches[0].pageX-this._lastTap.x,c=a.changedTouches[0].pageY-
this._lastTap.y;b*b+c*c<this._tapThreshold&&this._singleTapHandler(a)}}),350)),this._tapCancel=!1)},_touchEndHandler:function(a){f.stop(a);0==a.touches.length?(this._touchMoveListener&&(d.disconnect(this._touchMoveListener),this._touchMoveListener=null),this._touchEndListener&&(d.disconnect(this._touchEndListener),this._touchEndListener=null)):(a=this._getTouchBarycenter(a),a=this._map.screenCoordsToMapCoords(a.x,a.y),this._centerTouchLocation.x=a.x,this._centerTouchLocation.y=a.y)},_singleTapHandler:function(a){var b=
this._getFeatureFromTouchEvent(a);if(b)b._onclickHandler(a);else{for(var c in this._map.mapObj.features)this._map.mapObj.features[c].select(!1);this._map.onFeatureClick(null)}},_touchMoveHandler:function(a){f.stop(a);if(!this._tapCancel){var b=a.touches[0].pageX-this._lastTap.x,c=a.touches[0].pageY-this._lastTap.y;b*b+c*c>this._tapThreshold&&(this._tapCancel=!0)}b=this._getTouchBarycenter(a);c=this._map.screenCoordsToMapCoords(b.x,b.y);b=c.x-this._centerTouchLocation.x;c=c.y-this._centerTouchLocation.y;
var e=1;2<=a.touches.length&&(e=this._getFingerSpacing(a)/this._initialFingerSpacing,this._map.setMapScale(this._initialScale*e));a=this._map.getMapCenter();this._map.setMapCenter(a.x-b,a.y-c)}})});