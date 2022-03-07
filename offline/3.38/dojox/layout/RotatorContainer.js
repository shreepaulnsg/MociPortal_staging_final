//>>built
define("dojox/layout/RotatorContainer","dojo/_base/declare dojo/_base/html dojo/_base/connect dojo/_base/lang dojo/_base/array dojo/_base/fx dojo/fx dijit/_base/manager dijit/layout/StackContainer dijit/layout/StackController dijit/_Widget dijit/_Templated dijit/_Contained".split(" "),function(k,e,c,f,g,l,n,p,h,q,r,m,t){h=k("dojox.layout.RotatorContainer",[h,m],{templateString:'\x3cdiv class\x3d"dojoxRotatorContainer"\x3e\x3cdiv dojoAttachPoint\x3d"tabNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"dojoxRotatorPager" dojoAttachPoint\x3d"pagerNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"dojoxRotatorContent" dojoAttachPoint\x3d"containerNode"\x3e\x3c/div\x3e\x3c/div\x3e',
showTabs:!0,transitionDelay:5E3,transition:"fade",transitionDuration:1E3,autoStart:!0,suspendOnHover:!1,pauseOnManualChange:null,reverse:!1,pagerId:"",cycles:-1,pagerClass:"dojox.layout.RotatorPager",postCreate:function(){this.inherited(arguments);e.style(this.domNode,"position","relative");this.cycles-0==this.cycles&&-1!=this.cycles?this.cycles++:this.cycles=-1;null===this.pauseOnManualChange&&(this.pauseOnManualChange=!this.suspendOnHover);var a=this.id||"rotator"+(new Date).getTime();a=new q({containerId:a},
this.tabNode);this.tabNode=a.domNode;this._stackController=a;e.style(this.tabNode,"display",this.showTabs?"":"none");this.connect(a,"onButtonClick","_manualChange");this._subscriptions=[c.subscribe(this.id+"-cycle",this,"_cycle"),c.subscribe(this.id+"-state",this,"_state")];a=Math.round(.75*this.transitionDelay);a<this.transitionDuration&&(this.transitionDuration=a);this.suspendOnHover&&(this.connect(this.domNode,"onmouseover","_onMouseOver"),this.connect(this.domNode,"onmouseout","_onMouseOut"))},
startup:function(){if(!this._started){for(var a=this.getChildren(),b=0,d=a.length;b<d;b++)if(a[b].declaredClass==this.pagerClass){this.pagerNode.appendChild(a[b].domNode);break}this.inherited(arguments);this.autoStart?setTimeout(f.hitch(this,"_play"),10):this._updatePager()}},destroy:function(){g.forEach(this._subscriptions,c.unsubscribe);this.inherited(arguments)},_setShowTabsAttr:function(a){this.showTabs=a;e.style(this.tabNode,"display",a?"":"none")},_updatePager:function(){var a=this.getChildren();
c.publish(this.id+"-update",[this._playing,g.indexOf(a,this.selectedChildWidget)+1,a.length])},_onMouseOver:function(){this._resetTimer();this._over=!0},_onMouseOut:function(){this._over=!1;this._playing&&(clearTimeout(this._timer),this._timer=setTimeout(f.hitch(this,"_play",!0),200))},_resetTimer:function(){clearTimeout(this._timer);this._timer=null},_cycle:function(a){(a instanceof Boolean||"boolean"==typeof a)&&this._manualChange();var b=this.getChildren(),d=b.length;a=g.indexOf(b,this.selectedChildWidget)+
(!1===a||!0!==a&&this.reverse?-1:1);this.selectChild(b[a<d?0>a?d-1:a:0]);this._updatePager()},_manualChange:function(){this.pauseOnManualChange&&(this._playing=!1);this.cycles=-1},_play:function(a){this._playing=!0;this._resetTimer();!0!==a&&0<this.cycles&&this.cycles--;0==this.cycles?this._pause():this.suspendOnHover&&this._over||!this.transitionDelay||(this._timer=setTimeout(f.hitch(this,"_cycle"),this.selectedChildWidget.domNode.getAttribute("transitionDelay")||this.transitionDelay));this._updatePager()},
_pause:function(){this._playing=!1;this._resetTimer()},_state:function(a){a?(this.cycles=-1,this._play()):this._pause()},_transition:function(a,b){this._resetTimer();if(b&&this.transitionDuration)switch(this.transition){case "fade":this._fade(a,b);return}this._transitionEnd();this.inherited(arguments)},_transitionEnd:function(){this._playing?this._play():this._updatePager()},_fade:function(a,b){this._styleNode(b.domNode,1,1);this._styleNode(a.domNode,0,2);this._showChild(a);this.doLayout&&a.resize&&
a.resize(this._containerContentBox||this._contentBox);var d={duration:this.transitionDuration};a=n.combine([l.fadeOut(f.mixin({node:b.domNode},d)),l.fadeIn(f.mixin({node:a.domNode},d))]);this.connect(a,"onEnd",f.hitch(this,function(){this._hideChild(b);this._transitionEnd()}));a.play()},_styleNode:function(a,b,d){e.style(a,"opacity",b);e.style(a,"zIndex",d);e.style(a,"position","absolute")}});k("dojox.layout.RotatorPager",[r,m,t],{widgetsInTemplate:!0,rotatorId:"",postMixInProperties:function(){this.templateString=
"\x3cdiv\x3e"+this.srcNodeRef.innerHTML+"\x3c/div\x3e"},postCreate:function(){var a=p.byId(this.rotatorId)||this.getParent();a&&"dojox.layout.RotatorContainer"==a.declaredClass&&(this.previous&&c.connect(this.previous,"onClick",function(){c.publish(a.id+"-cycle",[!1])}),this.next&&c.connect(this.next,"onClick",function(){c.publish(a.id+"-cycle",[!0])}),this.playPause&&c.connect(this.playPause,"onClick",function(){this.set("label",this.checked?"Pause":"Play");c.publish(a.id+"-state",[this.checked])}),
this._subscriptions=[c.subscribe(a.id+"-state",this,"_state"),c.subscribe(a.id+"-update",this,"_update")])},destroy:function(){g.forEach(this._subscriptions,c.unsubscribe);this.inherited(arguments)},_state:function(a){this.playPause&&this.playPause.checked!=a&&(this.playPause.set("label",a?"Pause":"Play"),this.playPause.set("checked",a))},_update:function(a,b,d){this._state(a);this.current&&b&&(this.current.innerHTML=b);this.total&&d&&(this.total.innerHTML=d)}});return h});