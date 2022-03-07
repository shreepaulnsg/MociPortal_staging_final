// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/RasterFunctionEditor/templates/RFxSRPicker.html":'\x3cdiv class\x3d"srPicker"\x3e\r\n  \x3cdiv class\x3d"input-group input-group-sm"\x3e\r\n    \x3cinput type\x3d"text" class\x3d"form-control font-1rem  ptp-6 pbp-6" data-dojo-attach-point\x3d"srsInputNode" /\x3e\r\n    \x3cspan tabindex\x3d"0" class\x3d"input-group-addon btn btn-transparent omp-input-group-addon-right mrp-10 clear-filter"\r\n      data-dojo-attach-point\x3d"nodeClearSRS" data-dojo-attach-event\x3d"click:reset"\x3e\x3c/span\x3e\r\n    \x3cdiv class\x3d"input-group-addon font-1rem  ptp-6 pbp-6"\x3e\r\n      \x3ca class\x3d"filter-down-arrow" href\x3d"javascript:void(0)" data-dojo-attach-event\x3d"click:showOptions"\r\n        aria-haspopup\x3d"true" aria-expanded\x3d"false" data-dojo-attach-point\x3d"srsButton"\x3e\x3c/a\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv id\x3d"{srconfig.id}" data-dojo-attach-point\x3d"srsTreeNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/RasterFunctionEditor/RFxSRPicker","dojo/_base/declare dojo/dom-class dojo/query dojo/on dojo/Evented dijit/registry dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/RFxSRPicker.html dojo/i18n!../../nls/jsapi ./srUtils dojo/NodeList dojo/NodeList-traverse".split(" "),function(p,f,g,l,q,r,t,u,v,w,x,y){return p("esriRFxSRPicker",[t,u,v,q],{templateString:w,idPrefix:"srsList",dismissContainer:null,dismissOutside:!0,category:1,_uniqueId:"",
treeviewStyle:"treeview-sm",rightIcon:"om-svg-chevron-right",constructor:function(a,b){this.domNode=b;this._i18n=x.analysisSettings;this.dismissContainer=a&&a.dismissContainer;this._uniqueId=r.getUniqueId(this.idPrefix);this.templateString=this.templateString.replace("{srconfig.id}",this._uniqueId);this.category=a&&null!=a.category?a.category:this.category;b=y.categories;switch(this.category){case 1:b={"Geographic Coordinate Systems":b["Geographic Coordinate Systems"],"Projected Coordinate Systems":b["Projected Coordinate Systems"]};
break;case 2:b={"Vertical Coordinate Systems":b["Vertical Coordinate Systems"]}}this.srCategories=b;this._flattedSRS=this._getFlattedSRS();this._l10nResources={"Geographic Coordinate Systems":this._i18n.geographicCS,"Projected Coordinate Systems":this._i18n.projCS};this.value=a&&a.value},postCreate:function(){var a=this.createTreeView(this.srCategories);this.srsTreeNode.innerHTML=a;this._leaves=g(".treeview a.leaf",this.domNode);this._divs=g(".treeview div",this.domNode);this._folders=g(".treeview .list-group-item:not(.leaf)",
this.domNode);this._icons=this._divs.prev().children("i");this._treeview=g(".treeview",this.domNode)[0];var b=this.srsInputNode,d=this._treeview;this.value&&this._populateSRSInput(this.value);this.dismissOutside&&this.own(l(this.dismissContainer||document,":not(.treeview):click",function(c){d.contains(c.target)||b.parentNode.contains(c.target)||f.remove(d,"in")}));this.own(l(this.domNode,".treeview a.leaf:click",function(c){c=c.target.innerText;f.remove(d,"in");this.setSR(c)}.bind(this)),l(this.domNode,
".treeview .list-group:click",function(c){if((c=c.target)&&c.matches(".list-group-item")){var e=c.dataset&&c.dataset.target;f.toggle(c,"open")}else c&&c.matches(".om-svg")&&(e=c.parentElement.dataset&&c.parentElement.dataset.target,f.toggle(c.parentElement,"open"));e&&this._toggleVisibility(e)}.bind(this)))},reset:function(){this.srsInputNode.value="";this._divs.removeClass("in");this._leaves.removeClass("hidden");this._folders.removeClass("hidden");this._searchText="";f.add(this.nodeClearSRS,"hidden")},
_getFlattedSRS:function(){function a(d,c){"object"===typeof c?Object.keys(c).forEach(function(e){a(e,c[e])}):b.push({wkid:d,name:c})}var b=[];a(null,this.srCategories);return b},createTreeView:function(a,b,d,c,e){null==b&&(b=0);d=d||this._uniqueId;if("object"===typeof a){var h=Object.keys(a),m=d+"-"+b;null==e&&(e=0);null==this.currentIndex&&(this.currentIndex=0);c='\x3ca class\x3d"list-group-item level'+b+'" data-target\x3d"#'+m+"-"+this.currentIndex+'" data-parent\x3d"#'+(d+"-"+(b-1)+"-"+e)+'"\x3e\x3ci class\x3d"om-svg '+
this.rightIcon+'"\x3e\x3c/i\x3e\x3ci class\x3d"om-svg om-svg-folder-close"\x3e\x3c/i\x3e'+(1===b?this._l10nResources[c]:c)+"\x3c/a\x3e";var n=this.currentIndex;e=this.treeviewStyle?this.treeviewStyle:"treeview-popup";h=h.map(function(k){k=this.createTreeView(a[k],b+1,d,k,n,this.currentIndex+1);this.currentIndex++;return k},this).join("");return 0===b?'\x3cdiv class\x3d"treeview '+e+' collapse"\x3e\x3cdiv class\x3d"list-group" id\x3d"'+m+'"\x3e'+h+"\x3c/div\x3e\x3c/div\x3e":c+'\x3cdiv class\x3d"collapse" id\x3d"'+
m+"-"+n+'"\x3e'+h+"\x3c/div\x3e"}return'\x3ca class\x3d"list-group-item level'+b+' leaf" tabIndex\x3d"0" role\x3d"listitem"\x3e\x3ci class\x3d"esri-icon-globe"\x3e\x3c/i\x3e\x3cspan\x3e'+a+"\x3c/span\x3e\x3c/a\x3e"},setSR:function(a){this._searchText=this.srsInputNode.value=a;f.remove(this.nodeClearSRS,"hidden")},getSR:function(a){var b=this.srsInputNode.value;a=(a=this._flattedSRS.find(function(d){return d.name.toLowerCase().trim()===b.toLowerCase().trim()}))||{wkid:0,name:b};a.wkid=parseInt(a.wkid);
return a},getSRWithID:function(a){if(a)return this._flattedSRS.find(function(b){return b.wkid.toLowerCase().trim()===a.toString()})},showOptions:function(){this._toggleVisibility("#"+this._uniqueId+" .treeview")},_toggleVisibility:function(a){f.toggle(g(a,this.domNode)[0],"in")},_populateSRSInput:function(){var a=this.getSRWithID(this.value.wkid);a&&this.setSR(a.name)},_getValueAttr:function(){var a=this.getSR(this.srsInputNode.value);return this.value={wkid:a.wkid,latestWkid:a.wkid}}})});