//>>built
define("dojox/app/controllers/Load","require dojo/_base/lang dojo/_base/declare dojo/on dojo/Deferred dojo/when dojo/dom-style ../Controller".split(" "),function(q,l,r,u,p,k,v,t,w){return r("dojox.app.controllers.Load",t,{_waitingQueue:[],constructor:function(a,b){this.events={"app-init":this.init,"app-load":this.load}},init:function(a){k(this.createView(a.parent,null,null,{templateString:a.templateString,controller:a.controller},null,a.type),function(b){k(b.start(),a.callback)})},load:function(a){this.app.log("in app/controllers/Load event.viewId\x3d"+
a.viewId+" event \x3d",a);for(var b=[],c=(a.viewId||"").split("+");0<c.length;){var f=c.shift();b.push(f)}var d;this.proceedLoadViewDef=new p;if(b&&1<b.length){for(var g=0;g<b.length-1;g++)c=l.clone(a),c.callback=null,c.viewId=b[g],this._waitingQueue.push(c);this.proceedLoadView(this._waitingQueue.shift());k(this.proceedLoadViewDef,l.hitch(this,function(){var e=l.clone(a);e.viewId=b[g];return d=this.loadView(e)}))}else return d=this.loadView(a)},proceedLoadView:function(a){var b=this.loadView(a);
k(b,l.hitch(this,function(){this.app.log("in app/controllers/Load proceedLoadView back from loadView for event",a);var c=this._waitingQueue.shift();c?(this.app.log("in app/controllers/Load proceedLoadView back from loadView calling this.proceedLoadView(nextEvt) for ",c),this.proceedLoadView(c)):(this._waitingQueue=[],this.proceedLoadViewDef.resolve())}))},loadView:function(a){var b=a.parent||this.app,c=(a.viewId||"").split(","),f=c.shift();c=c.join(",");var d=a.params||"";this._defaultHasPlus=this._handleDefault=
!1;b=this.loadChild(b,f,c,d,a);a.callback&&k(b,l.hitch(this,function(){this._handleDefault&&!a.initLoad&&(this.app.log("logTransitions:",""," emit app-transition this.childViews\x3d["+this.childViews+"]"),this.app.emit("app-transition",{viewId:this.childViews,defaultView:!0,forceTransitionNone:a.forceTransitionNone,opts:{params:d}}));a.callback(this._handleDefault,this._defaultHasPlus)}));return b},createChild:function(a,b,c,f){var d=a.id+"_"+b;!f&&a.views[b]&&a.views[b].defaultParams&&(f=a.views[b].defaultParams);
if(c=a.children[d])return f&&(c.params=f),this.app.log("in app/controllers/Load createChild view is already loaded so return the loaded view with the new parms ",c),c;var g=new p;k(this.createView(a,d,b,null,f,a.views[b].type),function(e){a.children[d]=e;k(e.start(),function(m){g.resolve(m)})});return g},createView:function(a,b,c,f,d,g){var e=new p,m=this.app;q([g?g:"../View"],function(h){h=new h(l.mixin({app:m,id:b,name:c,parent:a},{params:d},f));e.resolve(h)});return e},loadChild:function(a,b,c,
f,d){if(!a)throw Error("No parent for Child '"+b+"'.");if(!b){var g=a.defaultView?a.defaultView.split(","):"default";a.defaultView&&!d.initLoad?(g=this._getViewNamesFromDefaults(a),this.app.log("logTransitions:","Load:loadChild","setting _handleDefault true for parent.defaultView childViews\x3d["+g+"]"),this._handleDefault=!0,0<=a.defaultView.indexOf("+")&&(this._defaultHasPlus=!0)):(b=g.shift(),c=g.join(","))}var e=new p;try{var m=this.createChild(a,b,c,f)}catch(h){return console.warn("logTransitions:",
"","emit reject load exception for \x3d["+b+"]",h),e.reject("load child '"+b+"' error."),e.promise}k(m,l.hitch(this,function(h){if(!c&&h.defaultView){var n=this._getViewNamesFromDefaults(h);this.app.log("logTransitions:","Load:loadChild"," setting _handleDefault \x3d true child.defaultView childViews\x3d["+n+"]");this._handleDefault=!0;0<=h.defaultView.indexOf("+")&&(this._defaultHasPlus=!0);this.childViews=n;e.resolve()}n=c.split(",");b=n.shift();c=n.join(",");b?(h=this.loadChild(h,b,c,f,d),k(h,
function(){e.resolve()},function(){e.reject("load child '"+b+"' error.")})):e.resolve()}),function(){console.warn("loadChildDeferred.REJECT() for ["+b+"] subIds\x3d["+c+"]");e.reject("load child '"+b+"' error.")});return e.promise},_getViewNamesFromDefaults:function(a){for(var b=a.parent,c=a.name,f="";b!==this.app;)c=b.name+","+c,b=b.parent;a=a.defaultView.split("+");for(var d in a)a[d]=c+","+a[d];return f=a.join("+")}})});