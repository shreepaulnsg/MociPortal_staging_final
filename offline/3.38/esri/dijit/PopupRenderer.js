// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/PopupRenderer","require dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/array dojo/_base/kernel dojo/sniff dojo/query dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-style ../libs/sanitizer/Sanitizer dojox/html/entities dijit/_Widget dijit/_Templated ../kernel ../lang ../urlUtils ./_EventedWidget dojo/i18n!../nls/jsapi dojo/NodeList-dom".split(" "),function(D,t,z,n,r,k,E,Q,F,h,f,p,A,G,u,H,I,J,K,B,L,C){var M=0,v=C.widgets.popup,N=C.widgets.templatePicker;
t=t([L,H,I],{declaredClass:"esri.dijit._PopupRenderer",_sanitizer:new G({whiteList:{span:["class"],dd:[],dl:[],dt:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],sub:[],sup:[],animate:[],animatetransform:[],circle:[],clippath:[],defs:[],ellipse:[],g:[],image:[],line:[],lineargradient:[],marker:[],mask:[],path:[],pattern:[],polygon:[],polyline:[],radialgradient:[],rect:[],stop:[],svg:[],"switch":[],symbol:[],text:[],textpath:[],tspan:[],use:[]}},!0),constructor:function(){this._nls=n.mixin({},v)},templateString:"\x3cdiv class\x3d'esriViewPopup'\x3e\x3cdiv class\x3d'statusSection hidden' dojoAttachPoint\x3d'_status'\x3e\x3c/div\x3e\x3cdiv class\x3d'mainSection'\x3e\x3cdiv class\x3d'header' dojoAttachPoint\x3d'_title'\x3e\x3c/div\x3e\x3cdiv class\x3d'hzLine'\x3e\x3c/div\x3e\x3cdiv dojoAttachPoint\x3d'_description'\x3e\x3c/div\x3e\x3cdiv class\x3d'break'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'attachmentsSection hidden'\x3e\x3cdiv\x3e${_nls.NLS_attach}:\x3c/div\x3e\x3cul dojoAttachPoint\x3d'_attachmentsList'\x3e\x3c/ul\x3e\x3cdiv class\x3d'break'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'mediaSection hidden'\x3e\x3cdiv class\x3d'header' dojoAttachPoint\x3d'_mediaTitle'\x3e\x3c/div\x3e\x3cdiv class\x3d'hzLine'\x3e\x3c/div\x3e\x3cdiv class\x3d'caption' dojoAttachPoint\x3d'_mediaCaption'\x3e\x3c/div\x3e\x3cdiv class\x3d'gallery' dojoAttachPoint\x3d'_gallery'\x3e\x3cdiv class\x3d'mediaHandle prev' dojoAttachPoint\x3d'_prevMedia' dojoAttachEvent\x3d'onclick: _goToPrevMedia'\x3e\x3c/div\x3e\x3cdiv class\x3d'mediaHandle next' dojoAttachPoint\x3d'_nextMedia' dojoAttachEvent\x3d'onclick: _goToNextMedia'\x3e\x3c/div\x3e\x3cul class\x3d'summary'\x3e\x3cli class\x3d'image mediaCount hidden' dojoAttachPoint\x3d'_imageCount'\x3e0\x3c/li\x3e\x3cli class\x3d'image mediaIcon hidden'\x3e\x3c/li\x3e\x3cli class\x3d'chart mediaCount hidden' dojoAttachPoint\x3d'_chartCount'\x3e0\x3c/li\x3e\x3cli class\x3d'chart mediaIcon hidden'\x3e\x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'frame' dojoAttachPoint\x3d'_mediaFrame'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'editSummarySection hidden' dojoAttachPoint\x3d'_editSummarySection'\x3e\x3cdiv class\x3d'break'\x3e\x3c/div\x3e\x3cdiv class\x3d'break hidden' dojoAttachPoint\x3d'_mediaBreak'\x3e\x3c/div\x3e\x3cdiv class\x3d'editSummary' dojoAttachPoint\x3d'_editSummary'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e",
showTitle:!0,startup:function(){this.inherited(arguments);this._showStatus(N.loading);this._contentDfd=this.template.getComponents(this.graphic).then(n.hitch(this,this._handleComponentsSuccess)).otherwise(n.hitch(this,this._handleComponentsError))},destroy:function(){this._contentDfd&&this._contentDfd.cancel();this._attachmentsDfd&&this._attachmentsDfd.cancel();this._destroyFrame();this.template=this.graphic=this._nls=this._mediaInfos=this._mediaPtr=this._contentDfd=this._attachmentsDfd=null;this.inherited(arguments)},
_goToPrevMedia:function(){0>this._mediaPtr-1||(this._mediaPtr--,this._updateUI(),this._displayMedia())},_goToNextMedia:function(){this._mediaPtr+1!==this._mediaInfos.length&&(this._mediaPtr++,this._updateUI(),this._displayMedia())},_updateUI:function(){var b=this._mediaInfos,c=b.length,a=this.domNode,d=this._prevMedia,e=this._nextMedia;if(1<c){var g=0,l=0;r.forEach(b,function(q){"image"===q.type?g++:-1!==q.type.indexOf("chart")&&l++});g&&(h.set(this._imageCount,"innerHTML",g),k.query(".summary .image",
a).removeClass("hidden"));l&&(h.set(this._chartCount,"innerHTML",l),k.query(".summary .chart",a).removeClass("hidden"))}else k.query(".summary",a).addClass("hidden"),f.add(d,"hidden"),f.add(e,"hidden");b=this._mediaPtr;0===b?f.add(d,"hidden"):f.remove(d,"hidden");b===c-1?f.add(e,"hidden"):f.remove(e,"hidden");this._destroyFrame()},_displayMedia:function(){var b=this._mediaInfos[this._mediaPtr],c=b.title,a=b.caption,d=k.query(".mediaSection .hzLine",this.domNode)[0];h.set(this._mediaTitle,"innerHTML",
this._sanitizer.sanitize(c));f[c?"remove":"add"](this._mediaTitle,"hidden");h.set(this._mediaCaption,"innerHTML",this._sanitizer.sanitize(a));f[a?"remove":"add"](this._mediaCaption,"hidden");f[c&&a?"remove":"add"](d,"hidden");this._rid=null;if("image"===b.type)this._showImage(b);else{var e=this;c=["dojox/charting/Chart2D","dojox/charting/action2d/Tooltip"];a=b.value.theme||this.chartTheme;n.isString(a)&&(a=a.replace(/\./gi,"/"),-1===a.indexOf("/")&&(a="dojox/charting/themes/"+a));a||(a="./Rainbow");
c.push(a);try{var g=this._rid=M++;D(c,function(l,q,w){g===e._rid&&(e._rid=null,e._showChart(b.type,b.value,l,q,w))})}catch(l){console.log("PopupRenderer: error loading modules")}}},_preventNewTab:function(b){return(b=b&&n.trim(b).toLowerCase())&&(0===b.indexOf("mailto:")||0===b.indexOf("tel:"))},_showImage:function(b){f.add(this._mediaFrame,"image");var c=A.get(this._gallery,"height"),a=b.value,d=u.decode(a.linkURL);a=u.decode(a.sourceURL);var e;d&&(e=p.create("a",{href:d,target:this._preventNewTab(d)?
"":"_blank"},this._mediaFrame));d=b.refreshInterval?this._addURLParameter(a,"timestamp",Date.now()):a;p.create("img",{className:"esriPopupMediaImage",src:d},e||this._mediaFrame);var g=k.query(".esriPopupMediaImage",this._mediaFrame)[0];this._imageLoadHandle=z.connect(g,"onload",this,function(){this._clearImageHandles();this._imageLoaded(g,c);this._initImageRefresh(b)})},_addURLParameter:function(b,c,a){var d=-1===b.indexOf("?")?"?":"\x26";return b+d+c+"\x3d"+a},_initImageRefresh:function(b){if(b.refreshInterval){var c=
6E4*b.refreshInterval;this._imageRefreshHandle=setTimeout(n.hitch(this,function(){this._destroyFrame();this._showImage(b)}),c)}},_clearImageHandles:function(){z.disconnect(this._imageLoadHandle);this._imageLoadHandle=null;clearTimeout(this._imageRefreshHandle);this._imageRefreshHandle=null},_showChart:function(b,c,a,d,e){f.remove(this._mediaFrame,"image");a=this._chart=new a(p.create("div",{"class":"chart"},this._mediaFrame),{margins:{l:4,t:4,r:4,b:4}});e&&a.setTheme(e);switch(b){case "piechart":a.addPlot("default",
{type:"Pie",labels:!1});a.addSeries("Series A",c.fields);break;case "linechart":a.addPlot("default",{type:"Markers"});a.addAxis("x",{min:0,majorTicks:!1,minorTicks:!1,majorLabels:!1,minorLabels:!1});a.addAxis("y",{includeZero:!0,vertical:!0,fixUpper:"minor"});r.forEach(c.fields,function(g,l){g.x=l+1});a.addSeries("Series A",c.fields);break;case "columnchart":a.addPlot("default",{type:"Columns",gap:3});a.addAxis("y",{includeZero:!0,vertical:!0,fixUpper:"minor"});a.addSeries("Series A",c.fields);break;
case "barchart":a.addPlot("default",{type:"Bars",gap:3}),a.addAxis("x",{includeZero:!0,fixUpper:"minor",minorLabels:!1}),a.addAxis("y",{vertical:!0,majorTicks:!1,minorTicks:!1,majorLabels:!1,minorLabels:!1}),a.addSeries("Series A",c.fields)}this._action=new d(a);a.render()},_destroyFrame:function(){this._rid=null;this._clearImageHandles();this._chart&&(this._chart.destroy(),this._chart=null);this._action&&(this._action.destroy(),this._action=null);h.set(this._mediaFrame,"innerHTML","")},_imageLoaded:function(b,
c){var a=b.height;a<c&&A.set(b,"marginTop",Math.round((c-a)/2)+"px")},_attListHandler:function(b,c){if(b===this._attachmentsDfd){this._attachmentsDfd=null;var a="";c instanceof Error||!c||!c.length||r.forEach(c,function(d){a+="\x3cli\x3e";a+="\x3ca href\x3d'"+B.addProxy(d.url)+"' target\x3d'_blank'\x3e"+(d.name||"[No name]")+"\x3c/a\x3e";a+="\x3c/li\x3e"});h.set(this._attachmentsList,"innerHTML",a||"\x3cli\x3e"+this._nls.NLS_noAttach+"\x3c/li\x3e")}},_createLinkIfURI:function(b,c){var a=B.getURIInfo(b);
if(a){var d=b.match(a.pattern);b=d&&d[2];d=u.decode(d[1]);p.create("a",{target:"_blank",href:d,title:d,innerHTML:this._sanitizer.sanitize(K.substitute({appName:a.appName,hierPart:b},a.label))},c)}else h.set(c,"innerHTML",this._sanitizer.sanitize(b))},_showStatus:function(b){h.set(this._status,"innerHTML",b);f.remove(this._status,"hidden");k.query(".mainSection",this.domNode).addClass("hidden")},_hideStatus:function(){h.set(this._status,"innerHTML","");f.add(this._status,"hidden");k.query(".mainSection",
this.domNode).removeClass("hidden")},_handleComponentsSuccess:function(b){if(b){this._hideStatus();var c=this.showTitle?b.title:"",a=b.description,d=b.fields,e=b.mediaInfos,g=this.domNode,l=this._nls,q=this,w=this.template,O=this.graphic;this._prevMedia.title=l.NLS_prevMedia;this._nextMedia.title=l.NLS_nextMedia;h.set(this._title,"innerHTML",this._sanitizer.sanitize(c));c||f.add(this._title,"hidden");if(!b.hasDescription&&d&&(a="",d=r.map(d,function(m){var x=p.create("tr",{vAlign:"top"});p.create("td",
{className:"attrName",innerHTML:this._sanitizer.sanitize(m[0])},x);var P=p.create("td",{className:"attrValue"},x);this._createLinkIfURI(m[1],P);return x},this),d.length)){var y=p.create("table",{className:"attrTable",cellPadding:"0px",cellSpacing:"0px"});r.forEach(d,function(m){y.appendChild(m)})}y?(this._description.appendChild(y),a=!0):h.set(this._description,"innerHTML",this._sanitizer.sanitize(a));a||f.add(this._description,"hidden");k.query("a",this._description).forEach(function(m){q._preventNewTab(m.href)?
"_blank"===m.target&&h.remove(m,"target"):h.set(m,"target","_blank")});c&&a?k.query(".mainSection .hzLine",g).removeClass("hidden"):c||a?k.query(".mainSection .hzLine",g).addClass("hidden"):k.query(".mainSection",g).addClass("hidden");if(c=this._attachmentsDfd=w.getAttachments(O))c.addBoth(n.hitch(this,this._attListHandler,c)),h.set(this._attachmentsList,"innerHTML","\x3cli\x3e"+l.NLS_searching+"...\x3c/li\x3e"),k.query(".attachmentsSection",g).removeClass("hidden");e&&e.length&&(k.query(".mediaSection",
g).removeClass("hidden"),F.setSelectable(this._mediaFrame,!1),this._mediaInfos=e,this._mediaPtr=0,this._updateUI(),this._displayMedia());b.editSummary&&(h.set(this._editSummary,"innerHTML",this._sanitizer.sanitize(b.editSummary)),e&&e.length&&f.remove(this._mediaBreak,"hidden"),f.remove(this._editSummarySection,"hidden"));this.emit("content-update")}else this._showStatus(v.NLS_noInfo)},_handleComponentsError:function(b){b&&"cancel"===b.dojoType||(console.log("PopupRenderer: error loading template",
b),this._showStatus(v.NLS_noInfo))}});E("extend-esri")&&n.setObject("dijit._PopupRenderer",t,J);return t});