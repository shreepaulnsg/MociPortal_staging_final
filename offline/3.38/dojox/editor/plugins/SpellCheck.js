//>>built
define("dojox/editor/plugins/SpellCheck","dojo dijit dojo/io/script dijit/popup dijit/_Widget dijit/_Templated dijit/_editor/_Plugin dijit/form/TextBox dijit/form/DropDownButton dijit/TooltipDialog dijit/form/MultiSelect dijit/Menu dojo/i18n!dojox/editor/plugins/nls/SpellCheck".split(" "),function(f,l,T,N,O,P,Q){f.experimental("dojox.editor.plugins.SpellCheck");var K=f.declare("dojox.editor.plugins._spellCheckControl",[O,P],{widgetsInTemplate:!0,templateString:"\x3ctable role\x3d'presentation' class\x3d'dijitEditorSpellCheckTable'\x3e\x3ctr\x3e\x3ctd colspan\x3d'3' class\x3d'alignBottom'\x3e\x3clabel for\x3d'${textId}' id\x3d'${textId}_label'\x3e${unfound}\x3c/label\x3e\x3cdiv class\x3d'dijitEditorSpellCheckBusyIcon' id\x3d'${id}_progressIcon'\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd class\x3d'dijitEditorSpellCheckBox'\x3e\x3cinput dojoType\x3d'dijit.form.TextBox' required\x3d'false' intermediateChanges\x3d'true' class\x3d'dijitEditorSpellCheckBox' dojoAttachPoint\x3d'unfoundTextBox' id\x3d'${textId}'/\x3e\x3c/td\x3e\x3ctd\x3e\x3cbutton dojoType\x3d'dijit.form.Button' class\x3d'blockButton' dojoAttachPoint\x3d'skipButton'\x3e${skip}\x3c/button\x3e\x3c/td\x3e\x3ctd\x3e\x3cbutton dojoType\x3d'dijit.form.Button' class\x3d'blockButton' dojoAttachPoint\x3d'skipAllButton'\x3e${skipAll}\x3c/button\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd class\x3d'alignBottom'\x3e\x3clabel for\x3d'${selectId}'\x3e${suggestions}\x3c/td\x3e\x3c/label\x3e\x3ctd colspan\x3d'2'\x3e\x3cbutton dojoType\x3d'dijit.form.Button' class\x3d'blockButton' dojoAttachPoint\x3d'toDicButton'\x3e${toDic}\x3c/button\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3cselect dojoType\x3d'dijit.form.MultiSelect' id\x3d'${selectId}' class\x3d'dijitEditorSpellCheckBox listHeight' dojoAttachPoint\x3d'suggestionSelect'\x3e\x3c/select\x3e\x3c/td\x3e\x3ctd colspan\x3d'2'\x3e\x3cbutton dojoType\x3d'dijit.form.Button' class\x3d'blockButton' dojoAttachPoint\x3d'replaceButton'\x3e${replace}\x3c/button\x3e\x3cdiv class\x3d'topMargin'\x3e\x3cbutton dojoType\x3d'dijit.form.Button' class\x3d'blockButton' dojoAttachPoint\x3d'replaceAllButton'\x3e${replaceAll}\x3c/button\x3e\x3cdiv\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3cdiv class\x3d'topMargin'\x3e\x3cbutton dojoType\x3d'dijit.form.Button' dojoAttachPoint\x3d'cancelButton'\x3e${cancel}\x3c/button\x3e\x3c/div\x3e\x3c/td\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e",
constructor:function(){this.isOpen=this.isChanged=this.ignoreChange=!1;this.closable=!0},postMixInProperties:function(){this.id=l.getUniqueId(this.declaredClass.replace(/\./g,"_"));this.textId=this.id+"_textBox";this.selectId=this.id+"_select"},postCreate:function(){var a=this.suggestionSelect;f.removeAttr(a.domNode,"multiple");a.addItems=function(b){var c=this,e=null;b&&0<b.length&&f.forEach(b,function(d,g){e=f.create("option",{innerHTML:d,value:d},c.domNode);0==g&&(e.selected=!0)})};a.removeItems=
function(){f.empty(this.domNode)};a.deselectAll=function(){this.containerNode.selectedIndex=-1};this.connect(this,"onKeyPress","_cancel");this.connect(this.unfoundTextBox,"onKeyPress","_enter");this.connect(this.unfoundTextBox,"onChange","_unfoundTextBoxChange");this.connect(this.suggestionSelect,"onKeyPress","_enter");this.connect(this.skipButton,"onClick","onSkip");this.connect(this.skipAllButton,"onClick","onSkipAll");this.connect(this.toDicButton,"onClick","onAddToDic");this.connect(this.replaceButton,
"onClick","onReplace");this.connect(this.replaceAllButton,"onClick","onReplaceAll");this.connect(this.cancelButton,"onClick","onCancel")},onSkip:function(){},onSkipAll:function(){},onAddToDic:function(){},onReplace:function(){},onReplaceAll:function(){},onCancel:function(){},onEnter:function(){},focus:function(){this.unfoundTextBox.focus()},_cancel:function(a){a.keyCode==f.keys.ESCAPE&&(this.onCancel(),f.stopEvent(a))},_enter:function(a){a.keyCode==f.keys.ENTER&&(this.onEnter(),f.stopEvent(a))},_unfoundTextBoxChange:function(){var a=
this.textId+"_label";this.ignoreChange?f.byId(a).innerHTML=this.unfound:(f.byId(a).innerHTML=this.replaceWith,this.isChanged=!0,this.suggestionSelect.deselectAll())},_setUnfoundWordAttr:function(a){this.unfoundTextBox.set("value",a||"")},_getUnfoundWordAttr:function(){return this.unfoundTextBox.get("value")},_setSuggestionListAttr:function(a){var b=this.suggestionSelect;a=a||[];b.removeItems();b.addItems(a)},_getSelectedWordAttr:function(){var a=this.suggestionSelect.getSelected();return a&&0<a.length?
a[0].value:this.unfoundTextBox.get("value")},_setDisabledAttr:function(a){this.skipButton.set("disabled",a);this.skipAllButton.set("disabled",a);this.toDicButton.set("disabled",a);this.replaceButton.set("disabled",a);this.replaceAllButton.set("disabled",a)},_setInProgressAttr:function(a){f.toggleClass(this.id+"_progressIcon","hidden",!a)}}),L=f.declare("dojox.editor.plugins._SpellCheckScriptMultiPart",null,{ACTION_QUERY:"query",ACTION_UPDATE:"update",callbackHandle:"callback",maxBufferLength:100,
delimiter:" ",label:"response",_timeout:3E4,SEC:1E3,constructor:function(){this.serviceEndPoint="";this._queue=[];this.isWorking=!1;this.exArgs=null;this._counter=0},send:function(a,b){var c=this,e=this.delimiter,d=this.maxBufferLength,g=this.label,E=this.serviceEndPoint,A=this.callbackHandle,z=this.exArgs,B=this._timeout,q=0,h=0;this._result||(this._result=[]);b=b||this.ACTION_QUERY;var u=function(){var n=[],m=0;if(a&&0<a.length){c.isWorking=!0;var w=a.length;do{q=h+1;if((h+=d)>w)h=w;else for(;e&&
a.charAt(h)!=e&&h<=w;)h++;n.push({l:q,r:h});m++}while(h<w);f.forEach(n,function(r,p){var k={url:E,action:b,timeout:B,callbackParamName:A,handle:function(t,x){if(++c._counter<=this.size&&!(t instanceof Error)&&t[g]&&f.isArray(t[g])){var F=this.offset;f.forEach(t[g],function(y){y.offset+=F});c._result[this.number]=t[g]}c._counter==this.size&&(c._finalizeCollection(this.action),c.isWorking=!1,0<c._queue.length&&c._queue.shift()())}};k.content=z?f.mixin(z,{action:b,content:a.substring(r.l-1,r.r)}):{action:b,
content:a.substring(r.l-1,r.r)};k.size=m;k.number=p;k.offset=r.l-1;f.io.script.get(k)})}};c.isWorking?c._queue.push(u):u()},_finalizeCollection:function(a){for(var b=this._result,c=b.length,e=0;e<c;e++){var d=b.shift();b=b.concat(d)}if(a==this.ACTION_QUERY)this.onLoad(b);this._counter=0;this._result=[]},onLoad:function(a){},setWaitingTime:function(a){this._timeout=a*this.SEC}}),I=f.declare("dojox.editor.plugins.SpellCheck",[Q],{url:"",bufferLength:100,interactive:!1,timeout:30,button:null,_editor:null,
exArgs:null,_cursorSpan:'\x3cspan class\x3d"cursorPlaceHolder"\x3e\x3c/span\x3e',_cursorSelector:"cursorPlaceHolder",_incorrectWordsSpan:"\x3cspan class\x3d'incorrectWordPlaceHolder'\x3e${text}\x3c/span\x3e",_ignoredIncorrectStyle:{cursor:"inherit",borderBottom:"none",backgroundColor:"transparent"},_normalIncorrectStyle:{cursor:"pointer",borderBottom:"1px dotted red",backgroundColor:"yellow"},_highlightedIncorrectStyle:{borderBottom:"1px dotted red",backgroundColor:"#b3b3ff"},_selector:"incorrectWordPlaceHolder",
_maxItemNumber:3,constructor:function(){this._spanList=[];this._cache={};this._enabled=!0;this._iterator=0},setEditor:function(a){this._editor=a;this._initButton();this._setNetwork();this._connectUp()},_initButton:function(){var a=this,b=this._strings=f.i18n.getLocalization("dojox.editor.plugins","SpellCheck"),c=this._dialog=new l.TooltipDialog;c.set("content",this._dialogContent=new K({unfound:b.unfound,skip:b.skip,skipAll:b.skipAll,toDic:b.toDic,suggestions:b.suggestions,replaceWith:b.replaceWith,
replace:b.replace,replaceAll:b.replaceAll,cancel:b.cancel}));this.button=new l.form.DropDownButton({label:b.widgetLabel,showLabel:!1,iconClass:"dijitEditorSpellCheckIcon",dropDown:c,id:l.getUniqueId(this.declaredClass.replace(/\./g,"_"))+"_dialogPane",closeDropDown:function(e){if(a._dialogContent.closable){a._dialogContent.isOpen=!1;if(f.isIE){var d=a._iterator,g=a._spanList;d<g.length&&0<=d&&f.style(g[d],a._normalIncorrectStyle)}this._opened&&(N.close(this.dropDown),e&&this.focus(),this._opened=
!1,this.state="")}}});a._dialogContent.isOpen=!1;c.domNode.setAttribute("aria-label",this._strings.widgetLabel)},_setNetwork:function(){var a=this.exArgs;if(!this._service){var b=this._service=new L;b.serviceEndPoint=this.url;b.maxBufferLength=this.bufferLength;b.setWaitingTime(this.timeout);a&&(delete a.name,delete a.url,delete a.interactive,delete a.timeout,b.exArgs=a)}},_connectUp:function(){var a=this._editor,b=this._dialogContent;this.connect(this.button,"set","_disabled");this.connect(this._service,
"onLoad","_loadData");this.connect(this._dialog,"onOpen","_openDialog");this.connect(a,"onKeyPress","_keyPress");this.connect(a,"onLoad","_submitContent");this.connect(b,"onSkip","_skip");this.connect(b,"onSkipAll","_skipAll");this.connect(b,"onAddToDic","_add");this.connect(b,"onReplace","_replace");this.connect(b,"onReplaceAll","_replaceAll");this.connect(b,"onCancel","_cancel");this.connect(b,"onEnter","_enter");a.contentPostFilters.push(this._spellCheckFilter);f.publish(l._scopeName+".Editor.plugin.SpellCheck.getParser",
[this]);this.parser||console.error("Can not get the word parser!")},_disabled:function(a,b){"disabled"==a&&(b?(this._iterator=0,this._spanList=[]):this.interactive&&!b&&this._service&&this._submitContent(!0),this._enabled=!b)},_keyPress:function(a){if(this.interactive){var b=a.charCode;a.altKey||b!=f.keys.SPACE?(a.ctrlKey&&(118==b||86==b)||!a.ctrlKey&&a.charCode)&&this._submitContent(!0):this._submitContent()}},_loadData:function(a){var b=this._cache,c=this._editor.get("value"),e=this._dialogContent;
this._iterator=0;f.forEach(a,function(d){b[d.text]=d.suggestion;b[d.text].correct=!1});this._enabled&&(e.closable=!1,this._markIncorrectWords(c,b),e.closable=!0,this._dialogContent.isOpen&&(this._iterator=-1,this._skip()))},_openDialog:function(){var a=this._dialogContent;a.ignoreChange=!0;a.set("unfoundWord","");a.set("suggestionList",null);a.set("disabled",!0);a.set("inProgress",!0);a.isOpen=!0;a.closable=!1;this._submitContent();a.closable=!0},_skip:function(a,b){var c=this._dialogContent;a=this._spanList||
[];var e=a.length,d=this._iterator;c.closable=!1;c.isChanged=!1;c.ignoreChange=!0;for(!b&&0<=d&&d<e&&this._skipWord(d);++d<e&&1==a[d].edited;);d<e?(this._iterator=d,this._populateDialog(d),this._selectWord(d)):(this._iterator=-1,c.set("unfoundWord",this._strings.msg),c.set("suggestionList",null),c.set("disabled",!0),c.set("inProgress",!1));setTimeout(function(){f.isWebKit&&c.skipButton.focus();c.focus();c.ignoreChange=!1;c.closable=!0},0)},_skipAll:function(){this._dialogContent.closable=!1;this._skipWordAll(this._iterator);
this._skip()},_add:function(){var a=this._dialogContent;a.closable=!1;a.isOpen=!0;this._addWord(this._iterator,a.get("unfoundWord"));this._skip()},_replace:function(){var a=this._dialogContent,b=this._iterator,c=a.get("selectedWord");a.closable=!1;this._replaceWord(b,c);this._skip(null,!0)},_replaceAll:function(){var a=this._dialogContent,b=this._spanList,c=b.length,e=b[this._iterator].innerHTML.toLowerCase(),d=a.get("selectedWord");a.closable=!1;for(a=0;a<c;a++)b[a].innerHTML.toLowerCase()==e&&this._replaceWord(a,
d);this._skip(null,!0)},_cancel:function(){this._dialogContent.closable=!0;this._editor.focus()},_enter:function(){this._dialogContent.isChanged?this._replace():this._skip()},_query:function(a){var b=this._service,c=this._cache;a=this.parser.parseIntoWords(this._html2Text(a))||[];var e=[];f.forEach(a,function(d){d=d.toLowerCase();c[d]||(c[d]=[],c[d].correct=!0,e.push(d))});0<e.length?b.send(e.join(" ")):b.isWorking||this._loadData([])},_html2Text:function(a){for(var b=[],c=!1,e=a?a.length:0,d=0;d<
e;d++)"\x3c"==a.charAt(d)&&(c=!0),1==c?b.push(" "):b.push(a.charAt(d)),"\x3e"==a.charAt(d)&&(c=!1);return b.join("")},_getBookmark:function(a){var b=this._editor,c=this._cursorSpan;b.execCommand("inserthtml",c);b=b.get("value");c=b.indexOf(c);for(var e=-1;++e<c&&a.charAt(e)==b.charAt(e););return e},_moveToBookmark:function(){var a=this._editor,b=f.query("."+this._cursorSelector,a.document);if(b=b&&b[0])a._sCall("selectElement",[b]),a._sCall("collapse",[!0]),(a=b.parentNode)&&a.removeChild(b)},_submitContent:function(a){if(a){var b=
this;this._delayHandler&&(clearTimeout(this._delayHandler),this._delayHandler=null);setTimeout(function(){b._query(b._editor.get("value"))},3E3)}else this._query(this._editor.get("value"))},_populateDialog:function(a){var b=this._spanList,c=this._cache,e=this._dialogContent;e.set("disabled",!1);a<b.length&&0<b.length&&(a=b[a].innerHTML,e.set("unfoundWord",a),e.set("suggestionList",c[a.toLowerCase()]),e.set("inProgress",!1))},_markIncorrectWords:function(a,b){var c=this,e=this.parser,d=this._editor,
g=this._incorrectWordsSpan,E=this._normalIncorrectStyle,A=this._selector,z=e.parseIntoWords(this._html2Text(a).toLowerCase());e=e.getIndices();var B=this._cursorSpan,q=this._getBookmark(a),h=!1,u=a.split(""),n=null;for(n=z.length-1;0<=n;n--){var m=z[n];if(b[m]&&!b[m].correct){m=e[n];var w=z[n].length,r=m+w;r<=q&&!h&&(u.splice(q,0,B),h=!0);u.splice(m,w,f.string.substitute(g,{text:a.substring(m,r)}));m<q&&q<r&&!h&&(h=u[m].split(""),h.splice(39+q-m,0,B),u[m]=h.join(""),h=!0)}}h||(u.splice(q,0,B),h=!0);
d.set("value",u.join(""));d._cursorToStart=!1;this._moveToBookmark();n=this._spanList=f.query("."+this._selector,d.document);n.forEach(function(p,k){p.id=A+k});this.interactive||delete E.cursor;n.style(E);this.interactive&&(c._contextMenu&&(c._contextMenu.uninitialize(),c._contextMenu=null),c._contextMenu=new l.Menu({targetNodeIds:[d.iframe],bindDomNode:function(p){p=f.byId(p);if("iframe"==p.tagName.toLowerCase()){var k=p;this._iframeContentWindow(k);var t=f.body(d.document)}else t=p==f.body()?f.doc.documentElement:
p;var x={node:p,iframe:k};f.attr(p,"_dijitMenu"+this.id,this._bindings.push(x));var F=f.hitch(this,function(y){return[f.connect(y,this.leftClickToOpen?"onclick":"oncontextmenu",this,function(v){var C=v.target,G=c._strings;if(f.hasClass(C,A)&&!C.edited){f.stopEvent(v);var R=c._maxItemNumber,H=C.id.substring(A.length),J=b[C.innerHTML.toLowerCase()],M=J.length;this.destroyDescendants();if(0==M)this.addChild(new l.MenuItem({label:G.iMsg,disabled:!0}));else for(var D=0;D<R&&D<M;D++)this.addChild(new l.MenuItem({label:J[D],
onClick:function(){var S=J[D];return function(){c._replaceWord(H,S);d.focus()}}()}));this.addChild(new l.MenuSeparator);this.addChild(new l.MenuItem({label:G.iSkip,onClick:function(){c._skipWord(H);d.focus()}}));this.addChild(new l.MenuItem({label:G.iSkipAll,onClick:function(){c._skipWordAll(H);d.focus()}}));this.addChild(new l.MenuSeparator);this.addChild(new l.MenuItem({label:G.toDic,onClick:function(){c._addWord(H);d.focus()}}));this._scheduleOpen(C,k,{x:v.pageX,y:v.pageY})}}),f.connect(y,"onkeydown",
this,function(v){v.shiftKey&&v.keyCode==f.keys.F10&&(f.stopEvent(v),this._scheduleOpen(v.target,k))})]});x.connects=t?F(t):[];k&&(x.onloadHandler=f.hitch(this,function(){this._iframeContentWindow(k);var y=f.body(d.document);x.connects=F(y)}),k.addEventListener?k.addEventListener("load",x.onloadHandler,!1):k.attachEvent("onload",x.onloadHandler))}}))},_selectWord:function(a){var b=this._editor,c=this._spanList;a<c.length&&0<c.length&&(b._sCall("selectElement",[c[a]]),b._sCall("collapse",[!0]),this._findText(c[a].innerHTML,
!1,!1),f.isIE&&f.style(c[a],this._highlightedIncorrectStyle))},_replaceWord:function(a,b){var c=this._spanList;c[a].innerHTML=b;f.style(c[a],this._ignoredIncorrectStyle);c[a].edited=!0},_skipWord:function(a){var b=this._spanList;f.style(b[a],this._ignoredIncorrectStyle);this._cache[b[a].innerHTML.toLowerCase()].correct=!0;b[a].edited=!0},_skipWordAll:function(a,b){var c=this._spanList,e=c.length;b=b||c[a].innerHTML.toLowerCase();for(a=0;a<e;a++)c[a].edited||c[a].innerHTML.toLowerCase()!=b||this._skipWord(a)},
_addWord:function(a,b){var c=this._service;c.send(b||this._spanList[a].innerHTML.toLowerCase(),c.ACTION_UPDATE);this._skipWordAll(a,b)},_findText:function(a,b,c){var e=this._editor,d=e.window,g=!1;a&&(d.find?g=d.find(a,b,c,!1,!1,!1,!1):(d=e.document,d.selection&&(this._editor.focus(),e=d.body.createTextRange(),(g=d.selection?d.selection.createRange():null)&&(c?e.setEndPoint("EndToStart",g):e.setEndPoint("StartToEnd",g)),b=b?4:0,c&&(b|=1),(g=e.findText(a,e.text.length,b))&&e.select())));return g},
_spellCheckFilter:function(a){return a.replace(/<span class=["']incorrectWordPlaceHolder["'].*?>(.*?)<\/span>/g,"$1")}});I._SpellCheckControl=K;I._SpellCheckScriptMultiPart=L;f.subscribe(l._scopeName+".Editor.getPlugin",null,function(a){a.plugin||"spellcheck"!==a.args.name.toLowerCase()||(a.plugin=new I({url:"url"in a.args?a.args.url:"",interactive:"interactive"in a.args?a.args.interactive:!1,bufferLength:"bufferLength"in a.args?a.args.bufferLength:100,timeout:"timeout"in a.args?a.args.timeout:30,
exArgs:a.args}))});return I});