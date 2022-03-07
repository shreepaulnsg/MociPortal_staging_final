// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"esri/arcgis/csv":function(){define("dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/sniff dojo/number dojox/data/CsvStore ../kernel ../config ../request ../SpatialReference ../geometry/jsonUtils ../geometry/webMercatorUtils".split(" "),function(z,g,A,B,q,m,a,e,h,b,c,l){function n(d){var k=0,r="";g.forEach([","," ",";","|","\t"],function(x){var w=d.split(x).length;w>k&&(k=w,r=x)});return r}function C(d,k){if(!d||"[object Date]"!==Object.prototype.toString.call(d)||isNaN(d.getTime()))return!1;
d=!0;if(B("chrome")&&/\d+\W*$/.test(k)){if(k.match(/[^0-9a-zA-Z\s]/))return!1;if(k=k.match(/[a-zA-Z]{2,}/)){d=!1;for(var r=0,x=k.length,w=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i;!d&&r<=x&&!(d=!w.test(k[r]));)r++;d=!d}}return d}function v(d,k,r){var x=d.indexOf("\n");x=z.trim(d.substr(0,x));var w=k.columnDelimiter;w||(w=n(x));var y=new m({data:d,separator:w});y.fetch({onComplete:function(H,
D){D=0;var f={layerDefinition:k.layerDefinition,featureSet:{features:[],geometryType:"esriGeometryPoint"}},F=f.layerDefinition.objectIdField,p=f.layerDefinition.fields;F||g.some(p,function(t){return"esriFieldTypeOID"===t.type?(F=t.name,!0):!1})||(p.push({name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1}),F="__OBJECTID");var L=y._attributes,W=[],R=[];g.forEach(p,function(t){"esriFieldTypeDate"===t.type?W.push(t.name):("esriFieldTypeDouble"===t.type||"esriFieldTypeInteger"===
t.type)&&R.push(t.name)});if(k.locationInfo&&"coordinates"===k.locationInfo.locationType){var J=k.locationInfo.latitudeFieldName;var K=k.locationInfo.longitudeFieldName}else g.forEach(L,function(t){var I=g.indexOf(M,t.toLowerCase());-1!==I&&(J=t);I=g.indexOf(P,t.toLowerCase());-1!==I&&(K=t)}),J&&K&&(k.locationInfo={locationType:"coordinates",latitudeFieldName:J,longitudeFieldName:K});if(J&&K){-1===g.indexOf(R,J)&&R.push(J);-1===g.indexOf(R,K)&&R.push(K);if(z.isArray(k.outFields)&&-1===g.indexOf(k.outFields,
"*"))var S=k.outFields;g.forEach(L,function(t){g.some(p,function(I){return t===I.name})||p.push({name:t,alias:t,type:t===J||t===K?"esriFieldTypeDouble":"esriFieldTypeString"})});L=0;var Y=H.length;for(L;L<Y;L++){var T=H[L],U=y.getAttributes(T),N={};g.forEach(U,function(t){if(t&&(t===J||t===K||!S||-1<g.indexOf(S,t))){var I=t;0===t.length&&g.forEach(p,function(Z,X){Z.name==="attribute_"+(X-1)&&(t="attribute_"+(X-1))});if(-1<g.indexOf(W,t)){I=y.getValue(T,I);var O=new Date(I);N[t]=C(O,I)?O.getTime():
null}else-1<g.indexOf(R,t)?(O=q.parse(y.getValue(T,I)),t!==J&&t!==K||!(isNaN(O)||181<Math.abs(O))||(O=parseFloat(y.getValue(T,I))),isNaN(O)?N[t]=null:N[t]=O):N[t]=y.getValue(T,I)}});N[F]=D;D++;U=N[J];var V=N[K];null==V||null==U||isNaN(U)||isNaN(V)||(S&&-1===g.indexOf(S,J)&&delete N[J],S&&-1===g.indexOf(S,K)&&delete N[K],f.featureSet.features.push({geometry:{x:V,y:U,spatialReference:{wkid:4326}},attributes:N}))}f.layerDefinition.name="csv";r&&r(f)}else setTimeout(function(){console.error("File does not seem to contain fields with point coordinates.")},
1),r&&r(null,Error("File does not seem to contain fields with point coordinates."))},onError:function(H){console.error("Error fetching items from CSV store: ",H);r&&r(null,H)}});return!0}function u(d,k,r,x,w,y){0===d.length&&w(null);var H=c.getGeometryType(k),D=[];g.forEach(d,function(f){f=new H(f);f.spatialReference=r;D.push(f)},this);k=[102113,102100,3857];r.wkid&&4326===r.wkid&&x.wkid&&-1<g.indexOf(k,x.wkid)?(g.forEach(D,function(f){f.xmin?(f.xmin=Math.max(f.xmin,-180),f.xmax=Math.min(f.xmax,180),
f.ymin=Math.max(f.ymin,-89.99),f.ymax=Math.min(f.ymax,89.99)):f.rings?g.forEach(f.rings,function(F){g.forEach(F,function(p){p[0]=Math.min(Math.max(p[0],-180),180);p[1]=Math.min(Math.max(p[1],-89.99),89.99)},this)},this):f.paths?g.forEach(f.paths,function(F){g.forEach(F,function(p){p[0]=Math.min(Math.max(p[0],-180),180);p[1]=Math.min(Math.max(p[1],-89.99),89.99)},this)},this):f.x&&(f.x=Math.min(Math.max(f.x,-180),180),f.y=Math.min(Math.max(f.y,-89.99),89.99))},this),d=[],g.forEach(D,function(f){f=
l.geographicToWebMercator(f);102100!==x.wkid&&(f.spatialReference=x);d.push(f.toJson())},this),w(d)):null!==r.wkid&&-1<g.indexOf(k,r.wkid)&&null!==x.wkid&&4326===x.wkid?(d=[],g.forEach(D,function(f){d.push(l.webMercatorToGeographic(f).toJson())},this),w(d)):(k=function(f,F){f&&f.length===d.length?(d=[],g.forEach(f,function(p){p&&(p.rings&&0<p.rings.length&&0<p.rings[0].length&&0<p.rings[0][0].length&&!isNaN(p.rings[0][0][0])&&!isNaN(p.rings[0][0][1])||p.paths&&0<p.paths.length&&0<p.paths[0].length&&
0<p.paths[0][0].length&&!isNaN(p.paths[0][0][0])&&!isNaN(p.paths[0][0][1])||p.xmin&&!isNaN(p.xmin)&&p.ymin&&!isNaN(p.ymin)||p.x&&!isNaN(p.x)&&p.y&&!isNaN(p.y))?d.push(p.toJson()):d.push(null)},this),w(d)):y(f,F)},e.defaults.geometryService?e.defaults.geometryService.project(D,x,z.hitch(this,k),y):w(null))}function G(d,k){var r=[102113,102100,3857];return d&&k&&d.wkid===k.wkid&&d.wkt===k.wkt||d&&k&&d.wkid&&k.wkid&&-1<g.indexOf(r,d.wkid)&&-1<g.indexOf(r,k.wkid)?!0:!1}function E(d,k,r,x){if(d.featureSet&&
0!==d.featureSet.features.length)if(G(r,k))x(d);else{var w=function(f){var F=[];g.forEach(d.featureSet.features,function(p,L){f[L]&&(p.geometry=f[L],F.push(p))},this);x(d)},y=function(f,F){console.error("error projecting featureSet ("+d.layerDefinition.name+"). Final try.");x(d)},H=function(f,F){console.error("error projecting featureSet ("+d.layerDefinition.name+"). Try one more time.");u(D,d.featureSet.geometryType,k,r,z.hitch(this,w),z.hitch(this,y))};if(d.featureSet.features&&0<d.featureSet.features.length){var D=
[];g.forEach(d.featureSet.features,function(f){if(f.geometry.toJson)D.push(f.geometry);else{var F=c.getGeometryType(d.featureSet.geometryType);D.push(new F(f.geometry))}});k.toJson||(k=new b(k));r.toJson||(r=new b(r));u(D,d.featureSet.geometryType,k,r,z.hitch(this,w),z.hitch(this,H))}else x(d)}}var M="lat latitude y ycenter latitude83 latdecdeg point-y lat_dd".split(" "),P="lon lng long longitude x xcenter longitude83 longdecdeg point-x long_dd".split(" "),Q={latFieldStrings:M,longFieldStrings:P,
buildCSVFeatureCollection:function(d){var k=new A,r=function(w,y){y?k.errback(y):k.callback(w)},x={url:d.url,handleAs:"text",load:function(w){v(w,d,z.hitch(this,r))},error:function(w){k.errback(w);console.error("error: "+w)}};-1<d.url.indexOf("arcgis.com")&&-1<d.url.indexOf("/content/items")&&-1<d.url.indexOf("/data")&&(x.headers={"Content-Type":""});h(x,{usePost:!1});return k},projectFeatureCollection:function(d,k,r){var x=new A;r||(r=new b({wkid:4326}));E(d,r,k,z.hitch(this,function(w){x.callback(w)}));
return x},generateDefaultPopupInfo:function(d){var k={esriFieldTypeDouble:1,esriFieldTypeSingle:1},r={esriFieldTypeInteger:1,esriFieldTypeSmallInteger:1},x={esriFieldTypeDate:1},w=null;d=g.map(d.layerDefinition.fields,z.hitch(this,function(y){"NAME"===y.name.toUpperCase()&&(w=y.name);var H="esriFieldTypeOID"!==y.type&&"esriFieldTypeGlobalID"!==y.type&&"esriFieldTypeGeometry"!==y.type,D=null;if(H){var f=y.name.toLowerCase();if(-1<",stretched value,fnode_,tnode_,lpoly_,rpoly_,poly_,subclass,subclass_,rings_ok,rings_nok,".indexOf(","+
f+",")||-1<f.indexOf("area")||-1<f.indexOf("length")||-1<f.indexOf("shape")||-1<f.indexOf("perimeter")||-1<f.indexOf("objectid")||f.indexOf("_")===f.length-1||f.indexOf("_i")===f.length-2&&1<f.length)H=!1;y.type in r?D={places:0,digitSeparator:!0}:y.type in k?D={places:2,digitSeparator:!0}:y.type in x&&(D={dateFormat:"shortDateShortTime"})}return z.mixin({},{fieldName:y.name,label:y.alias,isEditable:!0,tooltip:"",visible:H,format:D,stringFieldOption:"textbox"})}));return{title:w?"{"+w+"}":"",fieldInfos:d,
description:null,showAttachments:!1,mediaInfos:[]}},_getSeparator:n,_isValidDate:C,_processCsvData:v,_projectGeometries:u,_sameSpatialReference:G,_projectFeatureSet:E};B("extend-esri")&&z.setObject("arcgis.csv",Q,a);return Q})},"dojox/data/CsvStore":function(){define("dojo/_base/lang dojo/_base/declare dojo/_base/xhr dojo/_base/kernel dojo/data/util/filter dojo/data/util/simpleFetch".split(" "),function(z,g,A,B,q,m){g=g("dojox.data.CsvStore",null,{constructor:function(a){this._attributes=[];this._attributeIndexes=
{};this._dataArray=[];this._arrayOfAllItems=[];this._loadFinished=!1;a.url&&(this.url=a.url);this._csvData=a.data;a.label?this.label=a.label:""===this.label&&(this.label=void 0);this._storeProp="_csvStore";this._idProp="_csvId";this._features={"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0};this._loadInProgress=!1;this._queuedFetches=[];this.identifier=a.identifier;""===this.identifier?delete this.identifier:this._idMap={};"separator"in a&&(this.separator=a.separator);"urlPreventCache"in a&&
(this.urlPreventCache=a.urlPreventCache?!0:!1)},url:"",label:"",identifier:"",separator:",",urlPreventCache:!1,_assertIsItem:function(a){if(!this.isItem(a))throw Error(this.declaredClass+": a function was passed an item argument that was not an item");},_getIndex:function(a){a=this.getIdentity(a);this.identifier&&(a=this._idMap[a]);return a},getValue:function(a,e,h){this._assertIsItem(a);var b=h;if("string"===typeof e)e=this._attributeIndexes[e],null!=e&&(b=this._dataArray[this._getIndex(a)][e]||
h);else throw Error(this.declaredClass+": a function was passed an attribute argument that was not a string");return b},getValues:function(a,e){return(a=this.getValue(a,e))?[a]:[]},getAttributes:function(a){this._assertIsItem(a);var e=[];a=this._dataArray[this._getIndex(a)];for(var h=0;h<a.length;h++)""!==a[h]&&e.push(this._attributes[h]);return e},hasAttribute:function(a,e){this._assertIsItem(a);if("string"===typeof e)return e=this._attributeIndexes[e],a=this._dataArray[this._getIndex(a)],"undefined"!==
typeof e&&e<a.length&&""!==a[e];throw Error(this.declaredClass+": a function was passed an attribute argument that was not a string");},containsValue:function(a,e,h){var b=void 0;"string"===typeof h&&(b=q.patternToRegExp(h,!1));return this._containsValue(a,e,h,b)},_containsValue:function(a,e,h,b){a=this.getValues(a,e);for(e=0;e<a.length;++e){var c=a[e];if("string"===typeof c&&b)return null!==c.match(b);if(h===c)return!0}return!1},isItem:function(a){if(a&&a[this._storeProp]===this)if(a=a[this._idProp],
this.identifier){if(this._dataArray[this._idMap[a]])return!0}else if(0<=a&&a<this._dataArray.length)return!0;return!1},isItemLoaded:function(a){return this.isItem(a)},loadItem:function(a){},getFeatures:function(){return this._features},getLabel:function(a){if(this.label&&this.isItem(a))return this.getValue(a,this.label)},getLabelAttributes:function(a){return this.label?[this.label]:null},_fetchItems:function(a,e,h){var b=this,c=function(v,u){var G=null;if(v.query){var E;G=[];var M=v.queryOptions?
v.queryOptions.ignoreCase:!1,P={};for(E in v.query){var Q=v.query[E];"string"===typeof Q&&(P[E]=q.patternToRegExp(Q,M))}for(M=0;M<u.length;++M){var d=!0,k=u[M];for(E in v.query)Q=v.query[E],b._containsValue(k,E,Q,P[E])||(d=!1);d&&G.push(k)}}else G=u.slice(0,u.length);e(G,v)};if(this._loadFinished)c(a,this._arrayOfAllItems);else if(""!==this.url)if(this._loadInProgress)this._queuedFetches.push({args:a,filter:c});else{this._loadInProgress=!0;var l=A.get({url:b.url,handleAs:"text",preventCache:b.urlPreventCache});
l.addCallback(function(v){try{b._processData(v),c(a,b._arrayOfAllItems),b._handleQueuedFetches()}catch(u){h(u,a)}});l.addErrback(function(v){b._loadInProgress=!1;if(h)h(v,a);else throw v;});var n=null;a.abort&&(n=a.abort);a.abort=function(){var v=l;v&&-1===v.fired&&(v.cancel(),v=null);n&&n.call(a)}}else if(this._csvData)try{this._processData(this._csvData),this._csvData=null,c(a,this._arrayOfAllItems)}catch(v){h(v,a)}else{var C=Error(this.declaredClass+": No CSV source data was provided as either URL or String data input.");
if(h)h(C,a);else throw C;}},close:function(a){},_getArrayOfArraysFromCsvFileContents:function(a){if(z.isString(a)){var e=/^\s+/g,h=/\s+$/g,b=/""/g,c=[],l=this._splitLines(a);for(a=0;a<l.length;++a){var n=l[a];if(0<n.length){n=n.split(this.separator);for(var C=0;C<n.length;){var v=n[C].replace(e,""),u=v.replace(h,""),G=u.charAt(0),E=u.charAt(u.length-1),M=u.charAt(u.length-2),P=u.charAt(u.length-3);if(2===u.length&&'""'==u)n[C]="";else if('"'==G&&('"'!=E||'"'==E&&'"'==M&&'"'!=P)){if(C+1===n.length)return;
n[C]=v+this.separator+n[C+1];n.splice(C+1,1)}else'"'==G&&'"'==E&&(u=u.slice(1,u.length-1),u=u.replace(b,'"')),n[C]=u,C+=1}c.push(n)}}this._attributes=c.shift();for(a=0;a<this._attributes.length;a++)this._attributeIndexes[this._attributes[a]]=a;this._dataArray=c}},_splitLines:function(a){var e=[],h,b="",c=!1;for(h=0;h<a.length;h++){var l=a.charAt(h);switch(l){case '"':c=!c;b+=l;break;case "\r":c?b+=l:(e.push(b),b="",h<a.length-1&&"\n"==a.charAt(h+1)&&h++);break;case "\n":c?b+=l:(e.push(b),b="");break;
default:b+=l}}""!==b&&e.push(b);return e},_processData:function(a){this._getArrayOfArraysFromCsvFileContents(a);this._arrayOfAllItems=[];if(this.identifier&&void 0===this._attributeIndexes[this.identifier])throw Error(this.declaredClass+": Identity specified is not a column header in the data set.");for(a=0;a<this._dataArray.length;a++){var e=a;this.identifier&&(e=this._dataArray[a][this._attributeIndexes[this.identifier]],this._idMap[e]=a);this._arrayOfAllItems.push(this._createItemFromIdentity(e))}this._loadFinished=
!0;this._loadInProgress=!1},_createItemFromIdentity:function(a){var e={};e[this._storeProp]=this;e[this._idProp]=a;return e},getIdentity:function(a){return this.isItem(a)?a[this._idProp]:null},fetchItemByIdentity:function(a){var e=a.scope?a.scope:B.global;if(this._loadFinished){var h=this._createItemFromIdentity(a.identity);this.isItem(h)||(h=null);a.onItem&&a.onItem.call(e,h)}else{var b=this;if(""!==this.url)this._loadInProgress?this._queuedFetches.push({args:a}):(this._loadInProgress=!0,h=A.get({url:b.url,
handleAs:"text"}),h.addCallback(function(c){try{b._processData(c);var l=b._createItemFromIdentity(a.identity);b.isItem(l)||(l=null);a.onItem&&a.onItem.call(e,l);b._handleQueuedFetches()}catch(n){a.onError&&a.onError.call(e,n)}}),h.addErrback(function(c){this._loadInProgress=!1;a.onError&&a.onError.call(e,c)}));else if(this._csvData)try{b._processData(b._csvData),b._csvData=null,h=b._createItemFromIdentity(a.identity),b.isItem(h)||(h=null),a.onItem&&a.onItem.call(e,h)}catch(c){a.onError&&a.onError.call(e,
c)}}},getIdentityAttributes:function(a){return this.identifier?[this.identifier]:null},_handleQueuedFetches:function(){if(0<this._queuedFetches.length){for(var a=0;a<this._queuedFetches.length;a++){var e=this._queuedFetches[a],h=e.filter,b=e.args;h?h(b,this._arrayOfAllItems):this.fetchItemByIdentity(e.args)}this._queuedFetches=[]}}});z.extend(g,m);return g})},"dojo/data/util/filter":function(){define(["../../_base/lang"],function(z){var g={};z.setObject("dojo.data.util.filter",g);g.patternToRegExp=
function(A,B){for(var q="^",m=null,a=0;a<A.length;a++)switch(m=A.charAt(a),m){case "\\":q+=m;a++;q+=A.charAt(a);break;case "*":q+=".*";break;case "?":q+=".";break;case "$":case "^":case "/":case "+":case ".":case "|":case "(":case ")":case "{":case "}":case "[":case "]":q+="\\";default:q+=m}q+="$";return B?new RegExp(q,"mi"):new RegExp(q,"m")};return g})},"dojo/data/util/simpleFetch":function(){define(["../../_base/lang","../../_base/kernel","./sorter"],function(z,g,A){var B={};z.setObject("dojo.data.util.simpleFetch",
B);B.errorHandler=function(q,m){m.onError&&m.onError.call(m.scope||g.global,q,m)};B.fetchHandler=function(q,m){var a=m.abort||null,e=!1,h=m.start?m.start:0,b=m.count&&Infinity!==m.count?h+m.count:q.length;m.abort=function(){e=!0;a&&a.call(m)};var c=m.scope||g.global;m.store||(m.store=this);m.onBegin&&m.onBegin.call(c,q.length,m);m.sort&&q.sort(A.createSortFunction(m.sort,this));if(m.onItem)for(var l=h;l<q.length&&l<b;++l){var n=q[l];e||m.onItem.call(c,n,m)}m.onComplete&&!e&&(l=null,m.onItem||(l=q.slice(h,
b)),m.onComplete.call(c,l,m))};B.fetch=function(q){q=q||{};q.store||(q.store=this);this._fetchItems(q,z.hitch(this,"fetchHandler"),z.hitch(this,"errorHandler"));return q};return B})},"dojo/data/util/sorter":function(){define(["../../_base/lang"],function(z){var g={};z.setObject("dojo.data.util.sorter",g);g.basicComparator=function(A,B){var q=-1;null===A&&(A=void 0);null===B&&(B=void 0);if(A==B)q=0;else if(A>B||null==A)q=1;return q};g.createSortFunction=function(A,B){function q(n,C,v,u){return function(G,
E){G=u.getValue(G,n);E=u.getValue(E,n);return C*v(G,E)}}for(var m=[],a,e=B.comparatorMap,h=g.basicComparator,b=0;b<A.length;b++){a=A[b];var c=a.attribute;if(c){a=a.descending?-1:1;var l=h;e&&("string"!==typeof c&&"toString"in c&&(c=c.toString()),l=e[c]||h);m.push(q(c,a,l,B))}}return function(n,C){for(var v=0;v<m.length;){var u=m[v++](n,C);if(0!==u)return u}return 0}};return g})},"*noref":1}});
define("esri/layers/CSVLayer","dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../arcgis/csv ./FeatureLayer ../geometry/Extent ../tasks/FeatureSet".split(" "),function(z,g,A,B,q,m,a,e,h){g=g(a,{declaredClass:"esri.layers.CSVLayer",_preventInit:!0,_fieldTypeMap:{Date:"esriFieldTypeDate",Number:"esriFieldTypeDouble",String:"esriFieldTypeString"},constructor:function(b,c){this.url=b;c=A.mixin({},c);this.columnDelimiter=c.columnDelimiter;this.latitudeFieldName=c.latitudeFieldName;
this.longitudeFieldName=c.longitudeFieldName;b=c.layerDefinition;b||(b={fields:c.fields||[],geometryType:"esriGeometryPoint",copyrightText:c.copyright},c.fields&&z.forEach(c.fields,function(l){l.type=this._fieldTypeMap[l.type||"String"];l.alias||(l.alias=l.name)},this));this._buildCsvFcParam={url:this.url,columnDelimiter:this.columnDelimiter,layerDefinition:b,outFields:c.outFields};this.latitudeFieldName&&this.longitudeFieldName&&(this._buildCsvFcParam.locationInfo={locationType:"coordinates",latitudeFieldName:this.latitudeFieldName,
longitudeFieldName:this.longitudeFieldName});this._projectFeatures=A.hitch(this,this._projectFeatures);this._addFeatures=A.hitch(this,this._addFeatures);this._initCSVLayer(c)},refresh:function(){this._fireUpdateStart();this.applyEdits(null,null,this.graphics);this._loadFeatures()},_isWebGLCompatible:function(){return!1},_setMap:function(b){var c=this.inherited(arguments);this._fireUpdateStart();this._projectFeatures(this._csvFC).then(this._addFeatures).otherwise(this._errorHandler);this._csvFC=null;
return c},_initCSVLayer:function(b){var c=this;m.buildCSVFeatureCollection(this._buildCsvFcParam).then(function(l){!c._buildCsvFcParam.locationInfo||c.latitudeFieldName&&c.longitudeFieldName||(c.latitudeFieldName=c._buildCsvFcParam.locationInfo.latitudeFieldName,c.longitudeFieldName=c._buildCsvFcParam.locationInfo.longitudeFieldName);c._csvFC=l;var n=l.layerDefinition;n.extent=c._getFCExtent(l);b.outFields||(b.outFields=["*"]);b.timeInfo&&(n.timeInfo=b.timeInfo);c._initFeatureLayer({layerDefinition:n},
b)}).otherwise(this._errorHandler)},_loadFeatures:function(){m.buildCSVFeatureCollection(this._buildCsvFcParam).then(this._projectFeatures).then(this._addFeatures).otherwise(this._errorHandler)},_projectFeatures:function(b){return m.projectFeatureCollection(b,this._map.spatialReference)},_addFeatures:function(b){b=new h(b.featureSet);this.applyEdits(b.features,null,null);this._fireUpdateEnd()},_getFCExtent:function(b){if(b&&b.featureSet&&b.featureSet.features){b=b.featureSet.features;var c=b.length;
if(1<c){var l=b[0].geometry;var n=new e(l.x,l.y,l.x,l.y);for(--c;0<c;c--)l=b[c].geometry,n.xmin=Math.min(n.xmin,l.x),n.ymin=Math.min(n.ymin,l.y),n.xmax=Math.max(n.xmax,l.x),n.ymax=Math.max(n.ymax,l.y);0>=n.getWidth()&&0>=n.getHeight()&&(n=null)}}return n}});B("extend-esri")&&A.setObject("layers.CSVLayer",g,q);return g});