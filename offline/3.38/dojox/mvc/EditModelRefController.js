//>>built
define("dojox/mvc/EditModelRefController",["dojo/_base/declare","dojo/_base/lang","./getPlainValue","./getStateful","./ModelRefController"],function(f,c,g,h,k){return f("dojox.mvc.EditModelRefController",k,{getStatefulOptions:null,getPlainValueOptions:null,holdModelUntilCommit:!1,originalModel:null,sourceModel:null,_refOriginalModelProp:"originalModel",_refSourceModelProp:"sourceModel",_refEditModelProp:"model",postscript:function(a,d){for(var b in{getStatefulOptions:1,getPlainValueOptions:1,holdModelUntilCommit:1}){var e=
(a||{})[b];"undefined"!=typeof e&&(this[b]=e)}this.inherited(arguments)},set:function(a,d){if(a==this._refSourceModelProp){var b=d;this[this._refSourceModelProp]!==b&&(this.set(this._refOriginalModelProp,this.holdModelUntilCommit?b:this.cloneModel(b)),this.set(this._refEditModelProp,this.holdModelUntilCommit?this.cloneModel(b):b))}this.inherited(arguments)},cloneModel:function(a){a=c.isFunction((a||{}).set)&&c.isFunction((a||{}).watch)?g(a,this.getPlainValueOptions):a;return h(a,this.getStatefulOptions)},
commit:function(){this.set(this.holdModelUntilCommit?this._refSourceModelProp:this._refOriginalModelProp,this.cloneModel(this.get(this._refEditModelProp)))},reset:function(){this.set(this.holdModelUntilCommit?this._refEditModelProp:this._refSourceModelProp,this.cloneModel(this.get(this._refOriginalModelProp)))},hasControllerProperty:function(a){return this.inherited(arguments)||a==this._refOriginalModelProp||a==this._refSourceModelProp}})});