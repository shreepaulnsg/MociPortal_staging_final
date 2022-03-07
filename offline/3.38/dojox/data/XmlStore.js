//>>built
define("dojox/data/XmlStore","dojo/_base/lang dojo/_base/declare dojo/_base/xhr dojo/data/util/simpleFetch dojo/_base/query dojo/_base/array dojo/_base/kernel dojo/data/util/filter dojox/xml/parser dojox/data/XmlItem".split(" "),function(x,u,r,A,B,y,n,C,v,D){u=u("dojox.data.XmlStore",null,{constructor:function(a){a&&(this.url=a.url,this.rootItem=a.rootItem||a.rootitem||this.rootItem,this.keyAttribute=a.keyAttribute||a.keyattribute||this.keyAttribute,this._attributeMap=a.attributeMap||a.attributemap,
this.label=a.label||this.label,this.sendQuery=a.sendQuery||a.sendquery||this.sendQuery,"urlPreventCache"in a&&(this.urlPreventCache=a.urlPreventCache?!0:!1));this._newItems=[];this._deletedItems=[];this._modifiedItems=[]},url:"",rootItem:"",keyAttribute:"",label:"",sendQuery:!1,attributeMap:null,urlPreventCache:!0,getValue:function(a,b,c){a=a.element;var d;if("tagName"===b)return a.nodeName;if("childNodes"===b){for(d=0;d<a.childNodes.length;d++){var e=a.childNodes[d];if(1===e.nodeType)return this._getItem(e)}return c}if("text()"===
b){for(d=0;d<a.childNodes.length;d++)if(e=a.childNodes[d],3===e.nodeType||4===e.nodeType)return e.nodeValue;return c}b=this._getAttribute(a.nodeName,b);if("@"===b.charAt(0))return b=b.substring(1),(b=a.getAttribute(b))?b:c;for(d=0;d<a.childNodes.length;d++)if(e=a.childNodes[d],1===e.nodeType&&e.nodeName===b)return this._getItem(e);return c},getValues:function(a,b){a=a.element;var c=[],d;if("tagName"===b)return[a.nodeName];if("childNodes"===b){for(d=0;d<a.childNodes.length;d++){var e=a.childNodes[d];
1===e.nodeType&&c.push(this._getItem(e))}return c}if("text()"===b){b=a.childNodes;for(d=0;d<b.length;d++)e=b[d],3!==e.nodeType&&4!==e.nodeType||c.push(e.nodeValue);return c}b=this._getAttribute(a.nodeName,b);if("@"===b.charAt(0))return b=b.substring(1),b=a.getAttribute(b),void 0!==b?[b]:[];for(d=0;d<a.childNodes.length;d++)e=a.childNodes[d],1===e.nodeType&&e.nodeName===b&&c.push(this._getItem(e));return c},getAttributes:function(a){a=a.element;var b=[],c;b.push("tagName");if(0<a.childNodes.length){var d=
{},e=!0,f=!1;for(c=0;c<a.childNodes.length;c++){var g=a.childNodes[c];1===g.nodeType?(e=g.nodeName,d[e]||(b.push(e),d[e]=e),e=!0):3===g.nodeType&&(f=!0)}e&&b.push("childNodes");f&&b.push("text()")}for(c=0;c<a.attributes.length;c++)b.push("@"+a.attributes[c].nodeName);if(this._attributeMap)for(var h in this._attributeMap)c=h.indexOf("."),0<c?h.substring(0,c)===a.nodeName&&b.push(h.substring(c+1)):b.push(h);return b},hasAttribute:function(a,b){return void 0!==this.getValue(a,b)},containsValue:function(a,
b,c){a=this.getValues(a,b);for(b=0;b<a.length;b++)if("string"===typeof c){if(a[b].toString&&a[b].toString()===c)return!0}else if(a[b]===c)return!0;return!1},isItem:function(a){return a&&a.element&&a.store&&a.store===this?!0:!1},isItemLoaded:function(a){return this.isItem(a)},loadItem:function(a){},getFeatures:function(){var a={"dojo.data.api.Read":!0,"dojo.data.api.Write":!0};this.sendQuery&&""===this.keyAttribute||(a["dojo.data.api.Identity"]=!0);return a},getLabel:function(a){if(""!==this.label&&
this.isItem(a)&&(a=this.getValue(a,this.label)))return a.toString()},getLabelAttributes:function(a){return""!==this.label?[this.label]:null},_fetchItems:function(a,b,c){var d=this._getFetchUrl(a);if(d){var e=this.sendQuery?{}:a,f=this;d=r.get({url:d,handleAs:"xml",preventCache:f.urlPreventCache});d.addCallback(function(g){(g=f._getItems(g,e))&&0<g.length?b(g,a):b([],a)});d.addErrback(function(g){c(g,a)})}else c(Error("No URL specified."),a)},_getFetchUrl:function(a){if(!this.sendQuery)return this.url;
var b=a.query;if(!b)return this.url;if(x.isString(b))return this.url+b;a="";for(var c in b){var d=b[c];d&&(a&&(a+="\x26"),a+=c+"\x3d"+d)}if(!a)return this.url;c=this.url;c=0>c.indexOf("?")?c+"?":c+"\x26";return c+a},_getItems:function(a,b){var c=null;b&&(c=b.query);var d=[],e=null;e=""!==this.rootItem?B(this.rootItem,a):a.documentElement.childNodes;b.queryOptions&&b.queryOptions.deep&&(e=this._flattenNodes(e));for(a=0;a<e.length;a++){var f=e[a];if(1==f.nodeType)if(f=this._getItem(f),c){var g=b.queryOptions?
b.queryOptions.ignoreCase:!1,h=!1,p=!0,l={},q;for(q in c){var k=c[q];"string"===typeof k?l[q]=C.patternToRegExp(k,g):k&&(l[q]=k)}for(var m in c){p=!1;var t=this.getValues(f,m);for(g=0;g<t.length;g++){if(k=t[g]){var z=c[m];"string"===typeof k&&l[m]?h=null!==k.match(l[m])?!0:!1:"object"===typeof k&&(h=k.toString&&l[m]?null!==k.toString().match(l[m])?!0:!1:"*"===z||z===k?!0:!1)}if(h)break}if(!h)break}(p||h)&&d.push(f)}else d.push(f)}y.forEach(d,function(w){w.element.parentNode&&w.element.parentNode.removeChild(w.element)},
this);return d},_flattenNodes:function(a){var b=[];if(a){var c;for(c=0;c<a.length;c++){var d=a[c];b.push(d);d.childNodes&&0<d.childNodes.length&&(b=b.concat(this._flattenNodes(d.childNodes)))}}return b},close:function(a){},newItem:function(a,b){a=a||{};var c=a.tagName;if(!c&&(c=this.rootItem,""===c))return null;var d=this._getDocument(),e=d.createElement(c);for(g in a)if("tagName"!==g)if("text()"===g){var f=d.createTextNode(a[g]);e.appendChild(f)}else{var g=this._getAttribute(c,g);if("@"===g.charAt(0))f=
g.substring(1),e.setAttribute(f,a[g]);else{var h=d.createElement(g);f=d.createTextNode(a[g]);h.appendChild(f);e.appendChild(h)}}a=this._getItem(e);this._newItems.push(a);b&&b.parent&&b.attribute&&((c=this.getValues(b.parent,b.attribute))&&0<c.length?(d=c.slice(0,c.length),1!==c.length&&c.slice(0,c.length),d.push(a),this.setValues(b.parent,b.attribute,d),this.getValues(b.parent,b.attribute)):this.setValue(b.parent,b.attribute,a));return a},deleteItem:function(a){var b=a.element;if(b.parentNode)return this._backupItem(a),
b.parentNode.removeChild(b),!0;this._forgetItem(a);this._deletedItems.push(a);return!0},setValue:function(a,b,c){if("tagName"===b)return!1;this._backupItem(a);a=a.element;if("childNodes"===b){var d=c.element;a.appendChild(d)}else if("text()"===b){for(;a.firstChild;)a.removeChild(a.firstChild);c=this._getDocument(a).createTextNode(c);a.appendChild(c)}else if(b=this._getAttribute(a.nodeName,b),"@"===b.charAt(0))d=b.substring(1),a.setAttribute(d,c);else{for(var e=0;e<a.childNodes.length;e++){var f=a.childNodes[e];
if(1===f.nodeType&&f.nodeName===b){d=f;break}}e=this._getDocument(a);if(d)for(;d.firstChild;)d.removeChild(d.firstChild);else d=e.createElement(b),a.appendChild(d);c=e.createTextNode(c);d.appendChild(c)}return!0},setValues:function(a,b,c){if("tagName"===b)return!1;this._backupItem(a);a=a.element;var d;if("childNodes"===b){for(;a.firstChild;)a.removeChild(a.firstChild);for(d=0;d<c.length;d++){var e=c[d].element;a.appendChild(e)}}else if("text()"===b){for(;a.firstChild;)a.removeChild(a.firstChild);
b="";for(d=0;d<c.length;d++)b+=c[d];var f=this._getDocument(a).createTextNode(b);a.appendChild(f)}else if(b=this._getAttribute(a.nodeName,b),"@"===b.charAt(0))b=b.substring(1),a.setAttribute(b,c[0]);else{for(d=a.childNodes.length-1;0<=d;d--)e=a.childNodes[d],1===e.nodeType&&e.nodeName===b&&a.removeChild(e);var g=this._getDocument(a);for(d=0;d<c.length;d++)e=g.createElement(b),f=g.createTextNode(c[d]),e.appendChild(f),a.appendChild(e)}return!0},unsetAttribute:function(a,b){if("tagName"===b)return!1;
this._backupItem(a);a=a.element;if("childNodes"===b||"text()"===b)for(;a.firstChild;)a.removeChild(a.firstChild);else if(b=this._getAttribute(a.nodeName,b),"@"===b.charAt(0))b=b.substring(1),a.removeAttribute(b);else for(var c=a.childNodes.length-1;0<=c;c--){var d=a.childNodes[c];1===d.nodeType&&d.nodeName===b&&a.removeChild(d)}return!0},save:function(a){a||(a={});var b;for(b=0;b<this._modifiedItems.length;b++)this._saveItem(this._modifiedItems[b],a,"PUT");for(b=0;b<this._newItems.length;b++)this._newItems[b].element.parentNode?
(this._newItems.splice(b,1),b--):this._saveItem(this._newItems[b],a,"POST");for(b=0;b<this._deletedItems.length;b++)this._saveItem(this._deletedItems[b],a,"DELETE")},revert:function(){this._newItems=[];this._restoreItems(this._deletedItems);this._deletedItems=[];this._restoreItems(this._modifiedItems);this._modifiedItems=[];return!0},isDirty:function(a){return a?(a=this._getRootElement(a.element),0<=this._getItemIndex(this._newItems,a)||0<=this._getItemIndex(this._deletedItems,a)||0<=this._getItemIndex(this._modifiedItems,
a)):0<this._newItems.length||0<this._deletedItems.length||0<this._modifiedItems.length},_saveItem:function(a,b,c){var d;if(d="PUT"===c?this._getPutUrl(a):"DELETE"===c?this._getDeleteUrl(a):this._getPostUrl(a)){d={url:d,method:c||"POST",contentType:"text/xml",handleAs:"xml"};"PUT"===c?(d.putData=this._getPutContent(a),c=r.put(d)):"DELETE"===c?c=r.del(d):(d.postData=this._getPostContent(a),c=r.post(d));var e=b.scope||n.global;var f=this;c.addCallback(function(g){f._forgetItem(a);b.onComplete&&b.onComplete.call(e)});
c.addErrback(function(g){b.onError&&b.onError.call(e,g)})}else b.onError&&(e=b.scope||n.global,b.onError.call(e,Error("No URL for saving content: "+this._getPostContent(a))))},_getPostUrl:function(a){return this.url},_getPutUrl:function(a){return this.url},_getDeleteUrl:function(a){var b=this.url;if(a&&""!==this.keyAttribute&&(a=this.getValue(a,this.keyAttribute))){var c="@"===this.keyAttribute.charAt(0)?this.keyAttribute.substring(1):this.keyAttribute;b+=0>b.indexOf("?")?"?":"\x26";b+=c+"\x3d"+a}return b},
_getPostContent:function(a){return"\x3c?xml version\x3d'1.0'?\x3e"+v.innerXML(a.element)},_getPutContent:function(a){return"\x3c?xml version\x3d'1.0'?\x3e"+v.innerXML(a.element)},_getAttribute:function(a,b){this._attributeMap&&((a=this._attributeMap[a+"."+b])?b=a:(a=this._attributeMap[b])&&(b=a));return b},_getItem:function(a){try{var b=null;""===this.keyAttribute&&(b=this._getXPath(a));return new D(a,this,b)}catch(c){console.log(c)}return null},_getItemIndex:function(a,b){for(var c=0;c<a.length;c++)if(a[c].element===
b)return c;return-1},_backupItem:function(a){var b=this._getRootElement(a.element);0<=this._getItemIndex(this._newItems,b)||0<=this._getItemIndex(this._modifiedItems,b)||(b!=a.element&&(a=this._getItem(b)),a._backup=b.cloneNode(!0),this._modifiedItems.push(a))},_restoreItems:function(a){y.forEach(a,function(b){b._backup&&(b.element=b._backup,b._backup=null)},this)},_forgetItem:function(a){a=a.element;var b=this._getItemIndex(this._newItems,a);0<=b&&this._newItems.splice(b,1);b=this._getItemIndex(this._deletedItems,
a);0<=b&&this._deletedItems.splice(b,1);b=this._getItemIndex(this._modifiedItems,a);0<=b&&this._modifiedItems.splice(b,1)},_getDocument:function(a){return a?a.ownerDocument:this._document?null:v.parse()},_getRootElement:function(a){for(;a.parentNode;)a=a.parentNode;return a},_getXPath:function(a){var b=null;if(!this.sendQuery){var c=a;for(b="";c&&c!=a.ownerDocument;){for(var d=0,e=c,f=c.nodeName;e;)(e=e.previousSibling)&&e.nodeName===f&&d++;d="/"+f+"["+d+"]";b=b?d+b:d;c=c.parentNode}}return b},getIdentity:function(a){if(this.isItem(a)){var b=
null;this.sendQuery&&""!==this.keyAttribute?b=this.getValue(a,this.keyAttribute).toString():this.serverQuery||(b=""!==this.keyAttribute?this.getValue(a,this.keyAttribute).toString():a.q);return b}throw Error("dojox.data.XmlStore: Object supplied to getIdentity is not an item");},getIdentityAttributes:function(a){if(this.isItem(a))return""!==this.keyAttribute?[this.keyAttribute]:null;throw Error("dojox.data.XmlStore: Object supplied to getIdentity is not an item");},fetchItemByIdentity:function(a){var b=
null,c=null,d=this,e=null;e=e=null;d.sendQuery?""!==d.keyAttribute?(b={query:{}},b.query[d.keyAttribute]=a.identity,e=this._getFetchUrl(b),b=function(f){var g=null;f&&(f=d._getItems(f,{}),1===f.length?g=f[0]:a.onError&&(f=a.scope||n.global,a.onError.call(f,Error("More than one item was returned from the server for the denoted identity"))));a.onItem&&(f=a.scope||n.global,a.onItem.call(f,g))},e={url:e,handleAs:"xml",preventCache:d.urlPreventCache},e=r.get(e),e.addCallback(b),a.onError&&e.addErrback(function(f){a.onError.call(a.scope||
n.global,f)})):a.onError&&a.onError.call(a.scope||n.global,Error("XmlStore is not told that the server to provides identity support.  No keyAttribute specified.")):(b=function(f){if(f)if(""!==d.keyAttribute){var g={query:{}};g.query[d.keyAttribute]=a.identity;g.queryOptions={deep:!0};g=d._getItems(f,g);c=a.scope||n.global;1===g.length?a.onItem&&a.onItem.call(c,g[0]):0===g.length?a.onItem&&a.onItem.call(c,null):a.onError&&a.onError.call(c,Error("Items array size for identity lookup greater than 1, invalid keyAttribute."))}else{g=
a.identity.split("/");var h=f;for(f=0;f<g.length;f++)if(g[f]&&""!==g[f]){var p=g[f];p=p.substring(0,p.length-1);var l=p.split("[");p=l[0];l=parseInt(l[1],10);var q=0;if(h)if(h=h.childNodes){var k,m=null;for(k=0;k<h.length;k++){var t=h[k];if(t.nodeName===p)if(q<l)q++;else{m=t;break}}h=m?m:null}else h=null;else break}g=null;h&&(g=d._getItem(h),g.element.parentNode&&g.element.parentNode.removeChild(g.element));a.onItem&&(c=a.scope||n.global,a.onItem.call(c,g))}},e=this._getFetchUrl(null),e={url:e,handleAs:"xml",
preventCache:d.urlPreventCache},e=r.get(e),e.addCallback(b),a.onError&&e.addErrback(function(f){a.onError.call(a.scope||n.global,f)}))}});x.extend(u,A);return u});