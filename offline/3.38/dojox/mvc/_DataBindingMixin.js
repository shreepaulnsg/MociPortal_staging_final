//>>built
define("dojox/mvc/_DataBindingMixin","dojo/_base/kernel dojo/_base/lang dojo/_base/array dojo/_base/declare dojo/Stateful dijit/registry".split(" "),function(m,g,l,n,p,k){m.deprecated("dojox.mvc._DataBindingMixin","Use dojox/mvc/at for data binding.");return n("dojox.mvc._DataBindingMixin",null,{ref:null,isValid:function(){var a=this.get("valid");return"undefined"!=typeof a?a:this.get("binding")?this.get("binding").get("valid"):!0},_dbstartup:function(){this._databound||(this._unwatchArray(this._viewWatchHandles),
this._viewWatchHandles=[this.watch("ref",function(a,b,c){this._databound&&b!==c&&this._setupBinding()}),this.watch("value",function(a,b,c){this._databound&&(a=this.get("binding"))&&(c&&b&&b.valueOf()===c.valueOf()||a.set("value",c))})],this._beingBound=!0,this._setupBinding(),delete this._beingBound,this._databound=!0)},_setupBinding:function(a){if(this.ref){var b=this.ref;if(b&&g.isFunction(b.toPlainObject))var c=b;else if(/^\s*expr\s*:\s*/.test(b))b=b.replace(/^\s*expr\s*:\s*/,""),c=g.getObject(b);
else if(/^\s*rel\s*:\s*/.test(b))b=b.replace(/^\s*rel\s*:\s*/,""),(a=a||this._getParentBindingFromDOM())&&(c=g.getObject(""+b,!1,a));else if(/^\s*widget\s*:\s*/.test(b))b=b.replace(/^\s*widget\s*:\s*/,""),c=b.split("."),1==c.length?c=k.byId(b).get("binding"):(a=k.byId(c.shift()).get("binding"),c=g.getObject(c.join("."),!1,a));else if(a=a||this._getParentBindingFromDOM())c=g.getObject(""+b,!1,a);else try{var d=g.getObject(""+b)||{};g.isFunction(d.set)&&g.isFunction(d.watch)&&(c=d)}catch(e){-1==b.indexOf("${")&&
console.warn("dojox/mvc/_DataBindingMixin: '"+this.domNode+"' widget with illegal ref not evaluating to a dojo/Stateful node: '"+b+"'")}c&&(g.isFunction(c.toPlainObject)?(this.binding=c,this[this._relTargetProp||"target"]!==c&&this.set(this._relTargetProp||"target",c),this._updateBinding("binding",null,c)):console.warn("dojox/mvc/_DataBindingMixin: '"+this.domNode+"' widget with illegal ref not evaluating to a dojo/Stateful node: '"+b+"'"))}},_isEqual:function(a,b){return a===b||isNaN(a)&&"number"===
typeof a&&isNaN(b)&&"number"===typeof b},_updateBinding:function(a,b,c){this._unwatchArray(this._modelWatchHandles);if((a=this.get("binding"))&&g.isFunction(a.watch)){var d=this;this._modelWatchHandles=[a.watch("value",function(e,h,f){d._isEqual(h,f)||d._isEqual(d.get("value"),f)||d.set("value",f)}),a.watch("valid",function(e,h,f){d._updateProperty(e,h,f,!0);f!==d.get(e)&&d.validate&&g.isFunction(d.validate)&&d.validate()}),a.watch("required",function(e,h,f){d._updateProperty(e,h,f,!1,e,f)}),a.watch("readOnly",
function(e,h,f){d._updateProperty(e,h,f,!1,e,f)}),a.watch("relevant",function(e,h,f){d._updateProperty(e,h,f,!1,"disabled",!f)})];a=a.get("value");null!=a&&this.set("value",a)}this._updateChildBindings()},_updateProperty:function(a,b,c,d,e,h){b!==c&&(null===c&&void 0!==d&&(c=d),c!==this.get("binding").get(a)&&this.get("binding").set(a,c),e&&this.set(e,h))},_updateChildBindings:function(a){var b=this.get("binding")||a;b&&!this._beingBound&&l.forEach(k.findWidgets(this.domNode),function(c){c.ref&&c._setupBinding?
c._setupBinding(b):c._updateChildBindings(b)})},_getParentBindingFromDOM:function(){for(var a=this.domNode.parentNode,b;a&&!((a=k.getEnclosingWidget(a))&&(b=a.get("binding"))&&g.isFunction(b.toPlainObject));)a=a?a.domNode.parentNode:null;return b},_unwatchArray:function(a){l.forEach(a,function(b){b.unwatch()})}})});