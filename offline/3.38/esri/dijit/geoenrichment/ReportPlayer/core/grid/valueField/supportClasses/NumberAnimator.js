// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/valueField/supportClasses/NumberAnimator",["esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState"],function(c,d){return{animateNumber:function(a,b,e){d.isAnimationSuspended||(a.set("value","0"),a.__numberAnimation&&a.__numberAnimation.stop(),a.__numberAnimation=c.animateProperty({duration:375,properties:{p:{start:0,end:b,easing:"quadOut"}},progressFunction:function(g,h,f){a.domNode&&a.set("value",
e(b*f))},endFunction:function(){delete a.__numberAnimation}}))}}});