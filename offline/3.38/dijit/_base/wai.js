//>>built
define("dijit/_base/wai",["dojo/dom-attr","dojo/_base/lang","../main","../hccss"],function(c,e,f){e.mixin(f,{hasWaiRole:function(a,b){a=this.getWaiRole(a);return b?-1<a.indexOf(b):0<a.length},getWaiRole:function(a){return e.trim((c.get(a,"role")||"").replace("wairole:",""))},setWaiRole:function(a,b){c.set(a,"role",b)},removeWaiRole:function(a,b){var d=c.get(a,"role");d&&(b?(b=e.trim((" "+d+" ").replace(" "+b+" "," ")),c.set(a,"role",b)):a.removeAttribute("role"))},hasWaiState:function(a,b){return a.hasAttribute?
a.hasAttribute("aria-"+b):!!a.getAttribute("aria-"+b)},getWaiState:function(a,b){return a.getAttribute("aria-"+b)||""},setWaiState:function(a,b,d){a.setAttribute("aria-"+b,d)},removeWaiState:function(a,b){a.removeAttribute("aria-"+b)}});return f});