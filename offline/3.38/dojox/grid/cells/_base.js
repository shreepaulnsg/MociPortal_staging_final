//>>built
define("dojox/grid/cells/_base","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/event dojo/_base/connect dojo/_base/array dojo/_base/sniff dojo/dom dojo/dom-attr dojo/dom-construct dijit/_Widget ../util".split(" "),function(v,k,e,w,x,y,r,t,g,z,A,n){var B=k("dojox.grid._DeferredTextWidget",A,{deferred:null,_destroyOnRemove:!0,postCreate:function(){this.deferred&&this.deferred.addBoth(e.hitch(this,function(a){this.domNode&&(this.domNode.innerHTML=a)}))}}),u=function(){setTimeout(e.hitch.apply(v,
arguments),0)},h=k("dojox.grid.cells._Base",null,{styles:"",classes:"",editable:!1,alwaysEditing:!1,formatter:null,defaultValue:"...",value:null,hidden:!1,noresize:!1,draggable:!0,_valueProp:"value",_formatPending:!1,constructor:function(a){this._props=a||{};e.mixin(this,a);void 0===this.draggable&&(this.draggable=!0)},_defaultFormat:function(a,b){var c=this.grid.formatterScope||this,d=this.formatter;d&&c&&"string"==typeof d&&(d=this.formatter=c[d]);a=a!=this.defaultValue&&d?d.apply(c,b):a;if("undefined"==
typeof a)return this.defaultValue;a&&a.addBoth&&(a=new B({deferred:a},z.create("span",{innerHTML:this.defaultValue})));return a&&a.declaredClass&&a.startup?"\x3cdiv class\x3d'dojoxGridStubNode' linkWidget\x3d'"+a.id+"' cellIdx\x3d'"+this.index+"'\x3e"+this.defaultValue+"\x3c/div\x3e":a},format:function(a,b){var c=this.grid.edit.info;(b=this.get?this.get(a,b):this.value||this.defaultValue)&&b.replace&&this.grid.escapeHTMLInData&&(b=b.replace(/&(?![a-z0-9]{1,8};)/ig,"\x26amp;").replace(/</g,"\x26lt;"));
return this.editable&&(this.alwaysEditing||c.rowIndex==a&&c.cell==this)?this.formatEditing(c.value?c.value:b,a):this._defaultFormat(b,[b,a,this])},formatEditing:function(a,b){},getNode:function(a){return this.view.getCellNode(a,this.index)},getHeaderNode:function(){return this.view.getHeaderCellNode(this.index)},getEditNode:function(a){return(this.getNode(a)||0).firstChild||0},canResize:function(){var a=this.unitWidth;return a&&"auto"!==a},isFlex:function(){var a=this.unitWidth;return a&&e.isString(a)&&
("auto"==a||"%"==a.slice(-1))},applyEdit:function(a,b){this.getNode(b)&&this.grid.edit.applyCellEdit(a,this,b)},cancelEdit:function(a){this.grid.doCancelEdit(a)},_onEditBlur:function(a){this.grid.edit.isEditCell(a,this.index)&&this.grid.edit.apply()},registerOnBlur:function(a,b){this.commitOnBlur&&x.connect(a,"onblur",function(c){setTimeout(e.hitch(this,"_onEditBlur",b),250)})},needFormatNode:function(a,b){this._formatPending=!0;u(this,"_formatNode",a,b)},cancelFormatNode:function(){this._formatPending=
!1},_formatNode:function(a,b){this._formatPending&&(this._formatPending=!1,r("ie")||t.setSelectable(this.grid.domNode,!0),this.formatNode(this.getEditNode(b),a,b))},formatNode:function(a,b,c){r("ie")?u(this,"focus",c,a):this.focus(c,a)},dispatchEvent:function(a,b){if(a in this)return this[a](b)},getValue:function(a){return this.getEditNode(a)[this._valueProp]},setValue:function(a,b){(a=this.getEditNode(a))&&(a[this._valueProp]=b)},focus:function(a,b){a=b||this.getEditNode(a);try{n.fire(a,"focus"),
n.fire(a,"select")}catch(c){}},save:function(a){this.value=this.value||this.getValue(a)},restore:function(a){this.setValue(a,this.value)},_finish:function(a){t.setSelectable(this.grid.domNode,!1);this.cancelFormatNode()},apply:function(a){this.applyEdit(this.getValue(a),a);this._finish(a)},cancel:function(a){this.cancelEdit(a);this._finish(a)}});h.markupFactory=function(a,b){var c=e.trim(g.get(a,"formatter")||"");c&&(b.formatter=e.getObject(c)||c);if(c=e.trim(g.get(a,"get")||""))b.get=e.getObject(c);
c=function(d,f,p){var m=e.trim(g.get(a,d)||"");m&&(f[p||d]="false"!=m.toLowerCase())};c("sortDesc",b);c("editable",b);c("alwaysEditing",b);c("noresize",b);c("draggable",b);if(c=e.trim(g.get(a,"loadingText")||g.get(a,"defaultValue")||""))b.defaultValue=c;c=function(d,f,p){var m=e.trim(g.get(a,d)||"")||void 0;m&&(f[p||d]=m)};c("styles",b);c("headerStyles",b);c("cellStyles",b);c("classes",b);c("headerClasses",b);c("cellClasses",b)};var l=h.Cell=k("dojox.grid.cells.Cell",h,{constructor:function(){this.keyFilter=
this.keyFilter},keyFilter:null,formatEditing:function(a,b){this.needFormatNode(a,b);a&&a.replace&&(a=a.replace(/"/g,"\x26quot;"));return'\x3cinput class\x3d"dojoxGridInput" type\x3d"text" value\x3d"'+a+'"\x3e'},formatNode:function(a,b,c){this.inherited(arguments);this.registerOnBlur(a,c)},doKey:function(a){this.keyFilter&&-1==String.fromCharCode(a.charCode).search(this.keyFilter)&&w.stop(a)},_finish:function(a){this.inherited(arguments);var b=this.getEditNode(a);try{n.fire(b,"blur")}catch(c){}}});
l.markupFactory=function(a,b){h.markupFactory(a,b);if(a=e.trim(g.get(a,"keyFilter")||""))b.keyFilter=new RegExp(a)};(h.RowIndex=k("dojox.grid.cells.RowIndex",l,{name:"Row",postscript:function(){this.editable=!1},get:function(a){return a+1}})).markupFactory=function(a,b){l.markupFactory(a,b)};(h.Select=k("dojox.grid.cells.Select",l,{options:null,values:null,returnIndex:-1,constructor:function(a){this.values=this.values||this.options},formatEditing:function(a,b){this.needFormatNode(a,b);b=['\x3cselect class\x3d"dojoxGridSelect"\x3e'];
for(var c=0,d,f;void 0!==(d=this.options[c])&&void 0!==(f=this.values[c]);c++)f=f.replace?f.replace(/&/g,"\x26amp;").replace(/</g,"\x26lt;"):f,d=d.replace?d.replace(/&/g,"\x26amp;").replace(/</g,"\x26lt;"):d,b.push("\x3coption",a==f?" selected":"",' value\x3d"'+f+'"',"\x3e",d,"\x3c/option\x3e");b.push("\x3c/select\x3e");return b.join("")},_defaultFormat:function(a,b){var c=this.inherited(arguments);if(!this.formatter&&this.values&&this.options){var d=y.indexOf(this.values,c);0<=d&&(c=this.options[d])}return c},
getValue:function(a){var b=this.getEditNode(a);if(b)return a=b.selectedIndex,b=b.options[a],-1<this.returnIndex?a:b.value||b.innerHTML}})).markupFactory=function(a,b){l.markupFactory(a,b);var c=e.trim(g.get(a,"options")||"");if(c){var d=c.split(",");d[0]!=c&&(b.options=d)}if(a=e.trim(g.get(a,"values")||""))c=a.split(","),c[0]!=a&&(b.values=c)};var q=h.AlwaysEdit=k("dojox.grid.cells.AlwaysEdit",l,{alwaysEditing:!0,_formatNode:function(a,b){this.formatNode(this.getEditNode(b),a,b)},applyStaticValue:function(a){var b=
this.grid.edit;b.applyCellEdit(this.getValue(a),this,a);b.start(this,a,!0)}});q.markupFactory=function(a,b){l.markupFactory(a,b)};(h.Bool=k("dojox.grid.cells.Bool",q,{_valueProp:"checked",formatEditing:function(a,b){return'\x3cinput class\x3d"dojoxGridInput" type\x3d"checkbox"'+(a?' checked\x3d"checked"':"")+' style\x3d"width: auto" /\x3e'},doclick:function(a){"INPUT"==a.target.tagName&&this.applyStaticValue(a.rowIndex)}})).markupFactory=function(a,b){q.markupFactory(a,b)};return h});