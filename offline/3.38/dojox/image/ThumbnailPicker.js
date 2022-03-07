//>>built
define("dojox/image/ThumbnailPicker",["dojo","dijit","dojox","dojo/require!dojox/fx/scroll,dojo/fx/easing,dojo/fx,dijit/_Widget,dijit/_Templated"],function(b,n,p){b.provide("dojox.image.ThumbnailPicker");b.experimental("dojox.image.ThumbnailPicker");b.require("dojox.fx.scroll");b.require("dojo.fx.easing");b.require("dojo.fx");b.require("dijit._Widget");b.require("dijit._Templated");b.declare("dojox.image.ThumbnailPicker",[n._Widget,n._Templated],{imageStore:null,request:null,size:500,thumbHeight:75,
thumbWidth:100,useLoadNotifier:!1,useHyperlink:!1,hyperlinkTarget:"new",isClickable:!0,isScrollable:!0,isHorizontal:!0,autoLoad:!0,linkAttr:"link",imageThumbAttr:"imageUrlThumb",imageLargeAttr:"imageUrl",pageSize:20,titleAttr:"title",templateString:b.cache("dojox.image","resources/ThumbnailPicker.html",'\x3cdiv dojoAttachPoint\x3d"outerNode" class\x3d"thumbOuter"\x3e\r\n\t\x3cdiv dojoAttachPoint\x3d"navPrev" class\x3d"thumbNav thumbClickable"\x3e\r\n\t  \x3cimg src\x3d"" dojoAttachPoint\x3d"navPrevImg"/\x3e    \r\n\t\x3c/div\x3e\r\n\t\x3cdiv dojoAttachPoint\x3d"thumbScroller" class\x3d"thumbScroller"\x3e\r\n\t  \x3cdiv dojoAttachPoint\x3d"thumbsNode" class\x3d"thumbWrapper"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv dojoAttachPoint\x3d"navNext" class\x3d"thumbNav thumbClickable"\x3e\r\n\t  \x3cimg src\x3d"" dojoAttachPoint\x3d"navNextImg"/\x3e  \r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'),
_thumbs:[],_thumbIndex:0,_maxPhotos:0,_loadedImages:{},baseClass:"ThumbnailPicker",cellClass:"Thumbnail",postCreate:function(){this.inherited(arguments);this.pageSize=Number(this.pageSize);this._scrollerSize=this.size-102;var a=this._sizeProperty=this.isHorizontal?"width":"height";b.style(this.outerNode,"textAlign","center");b.style(this.outerNode,a,this.size+"px");b.style(this.thumbScroller,a,this._scrollerSize+"px");this.useHyperlink&&b.subscribe(this.getClickTopicName(),this,function(c){if(c=this.imageStore.getValue(c.data,
this.linkAttr))"new"==this.hyperlinkTarget?window.open(c):window.location=c});this.isClickable&&b.addClass(this.thumbsNode,"thumbClickable");this._totalSize=0;a=this.isHorizontal?"Horiz":"Vert";b.addClass(this.navPrev,"prev"+a);b.addClass(this.navNext,"next"+a);b.addClass(this.thumbsNode,"thumb"+a);b.addClass(this.outerNode,"thumb"+a);b.attr(this.navNextImg,"src",this._blankGif);b.attr(this.navPrevImg,"src",this._blankGif);this.connect(this.navPrev,"onclick","_prev");this.connect(this.navNext,"onclick",
"_next");this.isHorizontal?(this._sizeAttr="offsetWidth",this._scrollAttr="scrollLeft"):(this._sizeAttr="offsetHeight",this._scrollAttr="scrollTop");this._updateNavControls();this.init()},init:function(){if(this.isInitialized)return!1;this.isInitialized=!0;this.imageStore&&this.request&&this._loadNextPage();return!0},getClickTopicName:function(){return this.id+"/select"},getShowTopicName:function(){return this.id+"/show"},setDataStore:function(a,c,e){this.reset();this.request={query:{},start:c.start||
0,count:c.count||10,onBegin:b.hitch(this,function(d){this._maxPhotos=d})};c.query&&b.mixin(this.request.query,c.query);e&&b.forEach(["imageThumbAttr","imageLargeAttr","linkAttr","titleAttr"],function(d){e[d]&&(this[d]=e[d])},this);this.request.start=0;this.request.count=this.pageSize;this.imageStore=a;this._loadInProgress=!1;this.init()||this._loadNextPage()},reset:function(){this._loadedImages={};b.forEach(this._thumbs,function(a){a&&a.parentNode&&b.destroy(a)});this._thumbs=[];this.isInitialized=
!1;this._noImages=!0},isVisible:function(a){a=this._thumbs[a];if(!a)return!1;var c=this.isHorizontal?"offsetLeft":"offsetTop",e=this.isHorizontal?"offsetWidth":"offsetHeight",d=this.isHorizontal?"scrollLeft":"scrollTop";c=a[c]-this.thumbsNode[c];return c>=this.thumbScroller[d]&&c+a[e]<=this.thumbScroller[d]+this._scrollerSize},resize:function(a){var c=this.isHorizontal?"w":"h",e=0;0<this._thumbs.length&&0==b.marginBox(this._thumbs[0]).w||(b.forEach(this._thumbs,b.hitch(this,function(d){var f=b.marginBox(d.firstChild);
e+=Number(f[c])+10;this.useLoadNotifier&&0<f.w&&b.style(d.lastChild,"width",f.w-4+"px");b.style(d,"width",f.w+"px")})),b.style(this.thumbsNode,this._sizeProperty,e+"px"),this._updateNavControls())},_next:function(){for(var a=this.isHorizontal?"offsetLeft":"offsetTop",c=this.isHorizontal?"offsetWidth":"offsetHeight",e=this.thumbsNode[a],d=this._thumbs[this._thumbIndex][a]-e,f,g=this._thumbIndex+1;g<this._thumbs.length;g++)if(f=this._thumbs[g],f[a]-e+f[c]-d>this._scrollerSize){this._showThumbs(g);break}},
_prev:function(){if(0!=this.thumbScroller[this.isHorizontal?"scrollLeft":"scrollTop"]){for(var a=this.isHorizontal?"offsetLeft":"offsetTop",c=this._thumbs[this._thumbIndex][a]-this.thumbsNode[a],e,d=this._thumbIndex-1;-1<d;d--)if(e=this._thumbs[d],c-e[a]>this._scrollerSize){this._showThumbs(d+1);return}this._showThumbs(0)}},_checkLoad:function(a,c){b.publish(this.getShowTopicName(),[{index:c}]);this._updateNavControls();this._loadingImages={};this._thumbIndex=c;this.thumbsNode.offsetWidth-a.offsetLeft<
2*this._scrollerSize&&this._loadNextPage()},_showThumbs:function(a){a=Math.min(Math.max(a,0),this._maxPhotos);if(!(a>=this._maxPhotos)){var c=this._thumbs[a];if(c){var e=c.offsetLeft-this.thumbsNode.offsetLeft,d=c.offsetTop-this.thumbsNode.offsetTop,f=this.isHorizontal?e:d;f>=this.thumbScroller[this._scrollAttr]&&f+c[this._sizeAttr]<=this.thumbScroller[this._scrollAttr]+this._scrollerSize||(this.isScrollable?p.fx.smoothScroll({target:this.isHorizontal?{x:e,y:0}:{x:0,y:d},win:this.thumbScroller,duration:300,
easing:b.fx.easing.easeOut,onEnd:b.hitch(this,"_checkLoad",c,a)}).play(10):(this.isHorizontal?this.thumbScroller.scrollLeft=e:this.thumbScroller.scrollTop=d,this._checkLoad(c,a)))}}},markImageLoaded:function(a){var c=b.byId("loadingDiv_"+this.id+"_"+a);c&&this._setThumbClass(c,"thumbLoaded");this._loadedImages[a]=!0},_setThumbClass:function(a,c){this.autoLoad&&b.addClass(a,c)},_loadNextPage:function(){if(!this._loadInProgress){this._loadInProgress=!0;for(var a=this.request.start+(this._noImages?0:
this.pageSize),c=a;c<this._thumbs.length&&this._thumbs[c];)c++;var e=this.imageStore;this.request.onComplete=b.hitch(this,function(d,f){if(e==this.imageStore)if(d&&d.length){var g=0,h=b.hitch(this,function(){if(g>=d.length)this._loadInProgress=!1;else{var k=g++;this._loadImage(d[k],c+k,h)}});h();this._updateNavControls()}else this._loadInProgress=!1});this.request.onError=b.hitch(this,function(){this._loadInProgress=!1;console.log("Error getting items")});this.request.start=a;this._noImages=!1;this.imageStore.fetch(this.request)}},
_loadImage:function(a,c,e){var d=this.imageStore,f=d.getValue(a,this.imageThumbAttr),g=b.create("div",{id:"img_"+this.id+"_"+c,"class":this.cellClass}),h=b.create("img",{},g);h._index=c;h._data=a;this._thumbs[c]=g;if(this.useLoadNotifier){var k=b.create("div",{id:"loadingDiv_"+this.id+"_"+c},g);this._setThumbClass(k,this._loadedImages[c]?"thumbLoaded":"thumbNotifier")}c=b.marginBox(this.thumbsNode);if(this.isHorizontal){k=this.thumbWidth;var l="w"}else k=this.thumbHeight,l="h";c=c[l];l=this.thumbScroller.scrollLeft;
var q=this.thumbScroller.scrollTop;b.style(this.thumbsNode,this._sizeProperty,c+k+20+"px");this.thumbScroller.scrollLeft=l;this.thumbScroller.scrollTop=q;this.thumbsNode.appendChild(g);b.connect(h,"onload",this,b.hitch(this,function(){if(d!=this.imageStore)return!1;this.resize();setTimeout(e,0);return!1}));b.connect(h,"onclick",this,function(m){b.publish(this.getClickTopicName(),[{index:m.target._index,data:m.target._data,url:h.getAttribute("src"),largeUrl:this.imageStore.getValue(a,this.imageLargeAttr),
title:this.imageStore.getValue(a,this.titleAttr),link:this.imageStore.getValue(a,this.linkAttr)}]);b.query("."+this.cellClass,this.thumbsNode).removeClass(this.cellClass+"Selected");b.addClass(m.target.parentNode,this.cellClass+"Selected");return!1});b.addClass(h,"imageGalleryThumb");h.setAttribute("src",f);(f=this.imageStore.getValue(a,this.titleAttr))&&h.setAttribute("title",f);this._updateNavControls()},_updateNavControls:function(){var a=function(d,f){f=f?"addClass":"removeClass";b[f](d,"enabled");
b[f](d,"thumbClickable")},c=this.isHorizontal?"scrollLeft":"scrollTop",e=this.isHorizontal?"offsetWidth":"offsetHeight";a(this.navPrev,0<this.thumbScroller[c]);a(this.navNext,this.thumbScroller[c]+this._scrollerSize<this.thumbsNode[e])}})});