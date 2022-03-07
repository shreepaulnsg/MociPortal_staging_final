// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/arcade/functions/featuresetbase","require exports ../ArcadePortal ../Dictionary ../Dictionary ../Feature ../featureSetCollection ../featureSetUtils ../languageUtils ../featureset/actions/Adapted ../featureset/actions/AttributeFilter ../featureset/actions/OrderBy ../featureset/actions/Top ../featureset/sources/Empty ../featureset/sources/FeatureLayerMemory ../featureset/support/OrderbyClause ../featureset/support/shared ../featureset/support/sqlUtils ./fieldStats ../polyfill/promiseUtils ../polyfill/sql/WhereClause ../../layers/FeatureLayer ../../layers/Field".split(" "),
function(ka,O,P,I,G,J,X,B,f,w,Y,ca,da,ea,fa,ha,Q,Z,R,A,z,S,K){function ia(e,g,p,d){if(1===d.length){if(f.isArray(d[0]))return R.calculateStat(e,d[0],-1);if(f.isImmutableArray(d[0]))return R.calculateStat(e,d[0].toArray(),-1)}return R.calculateStat(e,d,-1)}function T(e,g,p){var d=e.getVariables();if(0<d.length){for(var k=[],a=0;a<d.length;a++)k.push(g.evaluateIdentifier(p,{name:d[a]}));return A.all(k).then(function(b){for(var n={},h=0;h<d.length;h++)n[d[h]]=b[h];e.parameters=n;return e})}return A.resolve(e)}
function r(e,g,p){void 0===p&&(p=null);for(var d in e)if(d.toLowerCase()===g.toLowerCase())return e[d];return p}function aa(e){if(null===e)return null;var g={type:r(e,"type",""),name:r(e,"name","")};if("range"===g.type)g.range=r(e,"range",[]);else{g.codedValues=[];var p=0;for(e=r(e,"codedValues",[]);p<e.length;p++){var d=e[p];g.codedValues.push({name:r(d,"name",""),code:r(d,"code",null)})}}return g}function U(e){if(null===e)return null;var g={},p=r(e,"wkt",null);null!==p&&(g.wkt=p);e=r(e,"wkid",null);
null!==e&&(g.wkid=e);return g}function ba(e){if(null===e)return null;var g={hasZ:r(e,"hasz",!1),hasM:r(e,"hasm",!1)},p=r(e,"spatialreference",null);p&&(g.spatialReference=U(p));p=r(e,"x",null);if(null!==p)return g.x=p,g.y=r(e,"y",null),g;p=r(e,"rings",null);if(null!==p)return g.rings=p,g;p=r(e,"paths",null);if(null!==p)return g.paths=p,g;p=r(e,"points",null);if(null!==p)return g.points=p,g;p=0;for(var d="xmin xmax ymin ymax zmin zmax mmin mmax".split(" ");p<d.length;p++){var k=d[p],a=r(e,k,null);
null!==a&&(g[k]=a)}return g}Object.defineProperty(O,"__esModule",{value:!0});O.registerFunctions=void 0;O.registerFunctions=function(e){"async"===e.mode&&(e.functions.getuser=function(g,p){return e.standardFunctionAsync(g,p,function(d,k,a){f.pcCheck(a,1,2);var b=f.defaultUndefined(a[1],""),n=!0===b;b=!0===b||!1===b?"":f.toString(b);if(a[0]instanceof P)return d=null,g.services&&g.services.portal&&(d=g.services.portal),d=B.getPortal(a[0],d),B.lookupUser(d,b,n).then(function(m){if(m){m=JSON.parse(JSON.stringify(m));
for(var c=0,l=["lastLogin","created","modified"];c<l.length;c++){var q=l[c];void 0!==m[q]&&null!==m[q]&&(m[q]=new Date(m[q]))}return I.convertObjectToArcadeDictionary(m)}return null});var h=null;f.isFeatureSet(a[0])&&(h=a[0]);if(h)return n=!1,b?null:h.load().then(function(){return h.getOwningSystemUrl()}).then(function(m){if(!m)return b?null:h.getIdentityUser().then(function(l){return l?I.convertObjectToArcadeDictionary({username:l}):null});var c=null;g.services&&g.services.portal&&(c=g.services.portal);
c=B.getPortal(new P(m),c);return B.lookupUser(c,b,n).then(function(l){if(l){l=JSON.parse(JSON.stringify(l));for(var q=0,t=["lastLogin","created","modified"];q<t.length;q++){var u=t[q];void 0!==l[u]&&null!==l[u]&&(l[u]=new Date(l[u]))}return I.convertObjectToArcadeDictionary(l)}return null})});throw Error("Invalid Parameter");})},e.signatures.push({name:"getuser",min:"1",max:"2"}),e.functions.featuresetbyid=function(g,p){return e.standardFunctionAsync(g,p,function(d,k,a){f.pcCheck(a,2,4);if(a[0]instanceof
X){d=f.toString(a[1]);k=f.defaultUndefined(a[2],null);var b=f.toBoolean(f.defaultUndefined(a[3],!0));null===k&&(k=["*"]);if(!1===f.isArray(k))throw Error("Invalid Parameter");return a[0].featureSetById(d,b,k)}throw Error("Invalid Parameter");})},e.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),e.functions.getfeatureset=function(g,p){return e.standardFunctionAsync(g,p,function(d,k,a){f.pcCheck(a,1,2);if(a[0]instanceof J)return d=f.defaultUndefined(a[1],"datasource"),null===d&&(d="datasource"),
d=f.toString(d).toLowerCase(),B.convertToFeatureSet(a[0]._layer,d,g.lrucache,g.interceptor,g.spatialReference);throw Error("Invalid Parameter");})},e.signatures.push({name:"getfeatureset",min:"1",max:"2"}),e.functions.featuresetbyportalitem=function(g,p){return e.standardFunctionAsync(g,p,function(d,k,a){f.pcCheck(a,2,5);if(null===a[0])throw Error("Portal is required");if(a[0]instanceof P){d=f.toString(a[1]);k=f.toString(a[2]);var b=f.defaultUndefined(a[3],null),n=f.toBoolean(f.defaultUndefined(a[4],
!0));null===b&&(b=["*"]);if(!1===f.isArray(b))throw Error("Invalid Parameter");var h=null;g.services&&g.services.portal&&(h=g.services.portal);h=B.getPortal(a[0],h);return B.constructFeatureSetFromPortalItem(d,k,g.spatialReference,b,n,h,g.lrucache,g.interceptor)}if(!1===f.isString(a[0]))throw Error("Portal is required");d=f.toString(a[0]);k=f.toString(a[1]);b=f.defaultUndefined(a[2],null);a=f.toBoolean(f.defaultUndefined(a[3],!0));null===b&&(b=["*"]);if(!1===f.isArray(b))throw Error("Invalid Parameter");
if(g.services&&g.services.portal)return B.constructFeatureSetFromPortalItem(d,k,g.spatialReference,b,a,g.services.portal,g.lrucache,g.interceptor);throw Error("Portal is required");})},e.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),e.functions.featuresetbyname=function(g,p){return e.standardFunctionAsync(g,p,function(d,k,a){f.pcCheck(a,2,4);if(a[0]instanceof X){d=f.toString(a[1]);k=f.defaultUndefined(a[2],null);var b=f.toBoolean(f.defaultUndefined(a[3],!0));null===k&&(k=["*"]);
if(!1===f.isArray(k))throw Error("Invalid Parameter");return a[0].featureSetByName(d,b,k)}throw Error("Invalid Parameter");})},e.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),e.functions.featureset=function(g,p){return e.standardFunction(g,p,function(d,k,a){f.pcCheck(a,1,1);k=a[0];d={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(f.isString(k))k=JSON.parse(k),void 0!==k.layerDefinition?(d.layerDefinition=
k.layerDefinition,d.featureSet=k.featureSet,k.layerDefinition.spatialReference&&(d.layerDefinition.spatialReference=k.layerDefinition.spatialReference)):(d.featureSet.features=k.features,d.featureSet.geometryType=k.geometryType,d.layerDefinition.geometryType=d.featureSet.geometryType,d.layerDefinition.objectIdField=k.objectIdFieldName,d.layerDefinition.typeIdField=k.typeIdFieldName,d.layerDefinition.globalIdField=k.globalIdFieldName,d.layerDefinition.fields=k.fields,k.spatialReference&&(d.layerDefinition.spatialReference=
k.spatialReference));else if(a[0]instanceof I){k=JSON.parse(a[0].castToText());var b=r(k,"layerdefinition");if(null!==b){d.layerDefinition.geometryType=r(b,"geometrytype","");d.featureSet.geometryType=d.layerDefinition.geometryType;d.layerDefinition.globalIdField=r(b,"globalidfield","");d.layerDefinition.objectIdField=r(b,"objectidfield","");d.layerDefinition.typeIdField=r(b,"typeidfield","");if(a=r(b,"spatialreference",null))d.layerDefinition.spatialReference=U(a);a=0;for(var n=r(b,"fields",[]);a<
n.length;a++)b=n[a],b={name:r(b,"name",""),alias:r(b,"alias",""),type:r(b,"type",""),nullable:r(b,"nullable",!0),editable:r(b,"editable",!0),length:r(b,"length",null),domain:aa(r(b,"domain"))},d.layerDefinition.fields.push(b);if(k=r(k,"featureset",null)){a={};b=0;for(n=d.layerDefinition.fields;b<n.length;b++){var h=n[b];a[h.name.toLowerCase()]=h.name}for(var m=0,c=r(k,"features",[]);m<c.length;m++){k=c[m];b={};n=r(k,"attributes",{});for(h in n)b[a[h.toLowerCase()]]=n[h];d.featureSet.features.push({attributes:b,
geometry:ba(r(k,"geometry",null))})}}}else{d.layerDefinition.geometryType=r(k,"geometrytype","");d.featureSet.geometryType=d.layerDefinition.geometryType;d.layerDefinition.objectIdField=r(k,"objectidfieldname","");d.layerDefinition.typeIdField=r(k,"typeidfieldname","");if(a=r(k,"spatialreference",null))d.layerDefinition.spatialReference=U(a);a=0;for(n=r(k,"fields",[]);a<n.length;a++)b=n[a],b={name:r(b,"name",""),alias:r(b,"alias",""),type:r(b,"type",""),nullable:r(b,"nullable",!0),editable:r(b,"editable",
!0),length:r(b,"length",null),domain:aa(r(b,"domain"))},d.layerDefinition.fields.push(b);a={};b=0;for(n=d.layerDefinition.fields;b<n.length;b++)h=n[b],a[h.name.toLowerCase()]=h.name;m=0;for(c=r(k,"features",[]);m<c.length;m++){k=c[m];b={};n=r(k,"attributes",{});for(h in n)b[a[h.toLowerCase()]]=n[h];d.featureSet.features.push({attributes:b,geometry:ba(r(k,"geometry",null))})}}}else throw Error("Invalid Parameter");if(d.layerDefinition&&d.featureSet){b:{h=0;for(k=" esriGeometryPoint esriGeometryPolyline esriGeometryPolygon esriGeometryMultipoint esriGeometryEnvelope".split(" ");h<
k.length;h++)if(k[h]===d.layerDefinition.geometryType){h=!0;break b}h=!1}h=!1===h||null===d.layerDefinition.objectIdField||""===d.layerDefinition.objectIdField||!1===f.isArray(d.layerDefinition.fields)||!1===f.isArray(d.featureSet.features)?!1:!0}else h=!1;if(!1===h)throw Error("Invalid Parameter");return fa.create(d,g.spatialReference)})},e.signatures.push({name:"featureset",min:"1",max:"1"}),e.functions.filter=function(g,p){return e.standardFunctionAsync(g,p,function(d,k,a){f.pcCheck(a,2,2);return f.isFeatureSet(a[0])?
a[0].load().then(function(b){var n=z.WhereClause.create(a[1],b.getFieldsIndex()),h=n.getVariables();if(0<h.length){b=[];for(var m=0;m<h.length;m++)b.push(e.evaluateIdentifier(g,{name:h[m]}));return A.all(b).then(function(c){for(var l={},q=0;q<h.length;q++)l[h[q]]=c[q];n.parameters=l;return new Y({parentfeatureset:a[0],whereclause:n})})}return A.resolve(new Y({parentfeatureset:a[0],whereclause:n}))}):e.failDefferred("Filter cannot accept this parameter type")})},e.signatures.push({name:"filter",min:"2",
max:"2"}),e.functions.orderby=function(g,p){return e.standardFunctionAsync(g,p,function(d,k,a){f.pcCheck(a,2,2);return f.isFeatureSet(a[0])?(d=new ha(a[1]),A.resolve(new ca({parentfeatureset:a[0],orderbyclause:d}))):e.failDefferred("Order cannot accept this parameter type")})},e.signatures.push({name:"orderby",min:"2",max:"2"}),e.functions.top=function(g,p){return e.standardFunctionAsync(g,p,function(d,k,a){f.pcCheck(a,2,2);return f.isFeatureSet(a[0])?A.resolve(new da({parentfeatureset:a[0],topnum:a[1]})):
f.isArray(a[0])?f.toNumber(a[1])>=a[0].length?a[0].slice(0):a[0].slice(0,f.toNumber(a[1])):f.isImmutableArray(a[0])?f.toNumber(a[1])>=a[0].length()?a[0].slice(0):a[0].slice(0,f.toNumber(a[1])):e.failDefferred("Top cannot accept this parameter type")})},e.signatures.push({name:"top",min:"2",max:"2"}),e.functions.first=function(g,p){return e.standardFunctionAsync(g,p,function(d,k,a){f.pcCheck(a,1,1);return f.isFeatureSet(a[0])?a[0].first(d.abortSignal).then(function(b){if(null!==b){var n=J.createFromGraphicLikeObject(b.geometry,
b.attributes,a[0]);n._underlyingGraphic=b;b=n}return b}):f.isArray(a[0])?0===a[0].length?A.resolve(null):A.resolve(a[0][0]):f.isImmutableArray(a[0])?0===a[0].length()?A.resolve(null):A.resolve(a[0].get(0)):null})},e.signatures.push({name:"first",min:"1",max:"1"}),e.functions.attachments=function(g,p){return e.standardFunctionAsync(g,p,function(d,k,a){f.pcCheck(a,1,2);var b=-1,n=-1,h=null,m=!1;if(1<a.length)if(a[1]instanceof I)a[1].hasField("minsize")&&(b=f.toNumber(a[1].field("minsize"))),a[1].hasField("metadata")&&
(m=f.toBoolean(a[1].field("metadata"))),a[1].hasField("maxsize")&&(n=f.toNumber(a[1].field("maxsize"))),a[1].hasField("types")&&(d=f.toStringArray(a[1].field("types"),!1),0<d.length&&(h=d));else if(null!==a[1])throw Error("Invalid Parameter");if(a[0]instanceof J){var c=a[0]._layer;c instanceof S&&(c=B.constructFeatureSet(c,g.spatialReference,["*"],!0,g.lrucache,g.interceptor));return null===c||!1===f.isFeatureSet(c)?[]:c.load().then(function(){return c.queryAttachments(a[0].field(c.objectIdField),
b,n,h,m)})}if(null===a[0])return[];throw Error("Invalid Parameter");})},e.signatures.push({name:"attachments",min:"1",max:"2"}),e.functions.featuresetbyrelationshipname=function(g,p){return e.standardFunctionAsync(g,p,function(d,k,a){f.pcCheck(a,2,4);var b=a[0],n=f.toString(a[1]),h=f.defaultUndefined(a[2],null),m=f.toBoolean(f.defaultUndefined(a[3],!0));null===h&&(h=["*"]);if(!1===f.isArray(h))throw Error("Invalid Parameter");if(null===a[0])return null;if(!(a[0]instanceof J))throw Error("Invalid Parameter");
d=b._layer;d instanceof S&&(d=B.constructFeatureSet(d,g.spatialReference,["*"],!0,g.lrucache,g.interceptor));return null===d||!1===f.isFeatureSet(d)?null:d.load().then(function(c){var l=c.relationshipMetaData().filter(function(t){return t.name===n});if(0===l.length)return null;if(void 0!==l[0].relationshipTableId&&null!==l[0].relationshipTableId&&-1<l[0].relationshipTableId)return B.constructFeatureSetFromRelationship(c,l[0],b.field(c.objectIdField),c.spatialReference,h,m,g.lrucache,g.interceptor);
var q=c.serviceUrl();if(!q)return null;q="/"===q.charAt(q.length-1)?q+l[0].relatedTableId.toString():q+"/"+l[0].relatedTableId.toString();return B.constructFeatureSetFromUrl(q,c.spatialReference,h,m,g.lrucache,g.interceptor).then(function(t){return t.load().then(function(){return t.relationshipMetaData()}).then(function(u){u=u.filter(function(E){return E.id===l[0].id});if(!1===b.hasField(l[0].keyField)||null===b.field(l[0].keyField))return c.getFeatureByObjectId(b.field(c.objectIdField),[l[0].keyField]).then(function(E){if(E){var y=
z.WhereClause.create(u[0].keyField+"\x3d @id",t.getFieldsIndex());y.parameters={id:E.attributes[l[0].keyField]};return t.filter(y)}return new ea({parentfeatureset:t})});var x=z.WhereClause.create(u[0].keyField+"\x3d @id",t.getFieldsIndex());x.parameters={id:b.field(l[0].keyField)};return t.filter(x)})})})})},e.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),e.functions.featuresetbyassociation=function(g,p){return e.standardFunctionAsync(g,p,function(d,k,a){f.pcCheck(a,2,3);
var b=a[0],n=f.toString(f.defaultUndefined(a[1],"")).toLowerCase(),h=f.isString(a[2])?f.toString(a[2]):null;if(null===a[0])return null;if(!(a[0]instanceof J))throw Error("Invalid Parameter");var m=b._layer;m instanceof S&&(m=B.constructFeatureSet(m,g.spatialReference,["*"],!0,g.lrucache,g.interceptor));return null===m||!1===f.isFeatureSet(m)?null:m.load().then(function(){var c=m.serviceUrl();return B.constructAssociationMetaDataFeatureSetFromUrl(c,g.spatialReference)}).then(function(c){var l=null,
q=null,t=!1;if(null!==h&&""!==h&&void 0!==h){for(var u=0,x=c.terminals;u<x.length;u++){var E=x[u];E.terminalName===h&&(q=E.terminalId)}null===q&&(t=!0)}var y=c.associations.getFieldsIndex();u=y.get("TOGLOBALID").name;x=y.get("FROMGLOBALID").name;var V=y.get("TOTERMINALID").name,W=y.get("FROMTERMINALID").name,L=y.get("FROMNETWORKSOURCEID").name,M=y.get("TONETWORKSOURCEID").name,D=y.get("ASSOCIATIONTYPE").name;E=y.get("ISCONTENTVISIBLE").name;for(var ja=y.get("OBJECTID").name,H=0,N=m.fields;H<N.length;H++){var v=
N[H];if("esriFieldTypeGlobalID"===v.type){l=b.field(v.name);break}}var F=null;H=new w.SqlExpressionAdapted(new K({name:"percentalong",alias:"percentalong",type:"esrFieldTypeDouble"}),z.WhereClause.create("0",c.associations.getFieldsIndex()));N=new w.SqlExpressionAdapted(new K({name:"side",alias:"side",type:"esrFieldTypeString"}),z.WhereClause.create("''",c.associations.getFieldsIndex()));v={};for(var C in c.lkp)v[C]=c.lkp[C].sourceId;C=new w.StringToCodeAdapted(new K({name:"classname",alias:"classname",
type:"esriFieldTypeString"}),null,v);v="";switch(n){case "midspan":v="(("+u+"\x3d'"+l+"') OR ( "+x+"\x3d'"+l+"')) AND ("+D+" IN (5))";C.codefield=z.WhereClause.create("CASE WHEN ("+u+"\x3d'"+l+"') THEN "+L+" ELSE "+M+" END",c.associations.getFieldsIndex());q=Q.cloneField(w.AdaptedFeatureSet.findField(c.associations.fields,x));q.name="globalid";q.alias="globalid";F=new w.SqlExpressionAdapted(q,z.WhereClause.create("CASE WHEN ("+x+"\x3d'"+l+"') THEN "+u+" ELSE "+x+" END",c.associations.getFieldsIndex()));
H=4<=c.unVersion?new w.OriginalField(w.AdaptedFeatureSet.findField(c.associations.fields,y.get("PERCENTALONG").name)):new w.SqlExpressionAdapted(new K({name:"percentalong",alias:"percentalong",type:"esrFieldTypeDouble"}),z.WhereClause.create("0",c.associations.getFieldsIndex()));break;case "junctionedge":v="(("+u+"\x3d'"+l+"') OR ( "+x+"\x3d'"+l+"')) AND ("+D+" IN (4,6))";C.codefield=z.WhereClause.create("CASE WHEN ("+u+"\x3d'"+l+"') THEN "+L+" ELSE "+M+" END",c.associations.getFieldsIndex());q=Q.cloneField(w.AdaptedFeatureSet.findField(c.associations.fields,
x));q.name="globalid";q.alias="globalid";F=new w.SqlExpressionAdapted(q,z.WhereClause.create("CASE WHEN ("+x+"\x3d'"+l+"') THEN "+u+" ELSE "+x+" END",c.associations.getFieldsIndex()));N=new w.SqlExpressionAdapted(new K({name:"side",alias:"side",type:"esrFieldTypeString"}),z.WhereClause.create("CASE WHEN ("+D+"\x3d4) THEN 'from' ELSE 'to' END",c.associations.getFieldsIndex()));break;case "connected":y=u+"\x3d'@T'";D=x+"\x3d'@T'";null!==q&&(y+=" AND "+V+"\x3d@A",D+=" AND "+W+"\x3d@A");v=f.multiReplace("(("+
y+") OR ("+D+"))","@T",l);y=f.multiReplace(y,"@T",l);null!==q&&(y=f.multiReplace(y,"@A",q.toString()),v=f.multiReplace(v,"@A",q.toString()));C.codefield=z.WhereClause.create("CASE WHEN "+y+(" THEN "+L+" ELSE "+M+" END"),c.associations.getFieldsIndex());l=Q.cloneField(w.AdaptedFeatureSet.findField(c.associations.fields,x));l.name="globalid";l.alias="globalid";F=new w.SqlExpressionAdapted(l,z.WhereClause.create("CASE WHEN "+y+(" THEN "+x+" ELSE "+u+" END"),c.associations.getFieldsIndex()));break;case "container":v=
u+"\x3d'"+l+"' AND "+D+" \x3d 2",null!==q&&(v+=" AND "+V+" \x3d "+q.toString()),C.codefield=L,v="( "+v+" )",F=new w.FieldRename(w.AdaptedFeatureSet.findField(c.associations.fields,x),"globalid","globalid");case "content":v="("+x+"\x3d'"+l+"' AND "+D+" \x3d 2)";null!==q&&(v+=" AND "+W+" \x3d "+q.toString());C.codefield=M;v="( "+v+" )";F=new w.FieldRename(w.AdaptedFeatureSet.findField(c.associations.fields,u),"globalid","globalid");break;case "structure":v="("+u+"\x3d'"+l+"' AND "+D+" \x3d 3)";null!==
q&&(v+=" AND "+V+" \x3d "+q.toString());C.codefield=L;v="( "+v+" )";F=new w.FieldRename(w.AdaptedFeatureSet.findField(c.associations.fields,x),"globalid","globalId");break;case "attached":v="("+x+"\x3d'"+l+"' AND "+D+" \x3d 3)";null!==q&&(v+=" AND "+W+" \x3d "+q.toString());C.codefield=M;v="( "+v+" )";F=new w.FieldRename(w.AdaptedFeatureSet.findField(c.associations.fields,u),"globalid","globalId");break;default:throw Error("Invalid Parameter");}t&&(v="1 \x3c\x3e 1");return new w.AdaptedFeatureSet({parentfeatureset:c.associations,
adaptedFields:[new w.OriginalField(w.AdaptedFeatureSet.findField(c.associations.fields,ja)),new w.OriginalField(w.AdaptedFeatureSet.findField(c.associations.fields,E)),F,N,C,H],extraFilter:v?z.WhereClause.create(v,c.associations.getFieldsIndex()):null})})})},e.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),e.functions.groupby=function(g,p){return e.standardFunctionAsync(g,p,function(d,k,a){f.pcCheck(a,3,3);return f.isFeatureSet(a[0])?a[0].load().then(function(b){var n=[],h=[],m=
!1,c=[];if(f.isString(a[1]))c.push(a[1]);else if(a[1]instanceof G)c.push(a[1]);else if(f.isArray(a[1]))c=a[1];else if(f.isImmutableArray(a[1]))c=a[1].toArray();else return e.failDefferred("Illegal Value: GroupBy");for(var l=0,q=c;l<q.length;l++){var t=q[l];if(f.isString(t))c=z.WhereClause.create(f.toString(t),b.getFieldsIndex()),t=!0===Z.isSingleField(c)?f.toString(t):"%%%%FIELDNAME",n.push({name:t,expression:c}),"%%%%FIELDNAME"===t&&(m=!0);else if(t instanceof G){var u=t.hasField("name")?t.field("name"):
"%%%%FIELDNAME";c=t.hasField("expression")?t.field("expression"):"";"%%%%FIELDNAME"===u&&(m=!0);if(!u)return e.failDefferred("Illegal Value: GroupBy");n.push({name:u,expression:z.WhereClause.create(c?c:u,b.getFieldsIndex())})}else return e.failDefferred("Illegal Value: GroupBy")}c=[];if(f.isString(a[2]))c.push(a[2]);else if(f.isArray(a[2]))c=a[2];else if(f.isImmutableArray(a[2]))c=a[2].toArray();else if(a[2]instanceof G)c.push(a[2]);else return e.failDefferred("Illegal Value: GroupBy");l=0;for(q=
c;l<q.length;l++)if(t=q[l],t instanceof G){u=t.hasField("name")?t.field("name"):"";var x=t.hasField("statistic")?t.field("statistic"):"";c=t.hasField("expression")?t.field("expression"):"";if(!u||!x||!c)return e.failDefferred("Illegal Value: GroupBy");h.push({name:u,statistic:x.toLowerCase(),expression:z.WhereClause.create(c,b.getFieldsIndex())})}else return e.failDefferred("Illegal Value: GroupBy");if(m){m={};c=0;for(t=b.fields;c<t.length;c++)b=t[c],m[b.name.toLowerCase()]=1;for(c=0;c<n.length;c++)b=
n[c],"%%%%FIELDNAME"!==b.name&&(m[b.name.toLowerCase()]=1);for(c=0;c<h.length;c++)b=h[c],"%%%%FIELDNAME"!==b.name&&(m[b.name.toLowerCase()]=1);for(t=c=0;t<n.length;t++)if(b=n[t],"%%%%FIELDNAME"===b.name){for(;1===m["field_"+c.toString()];)c++;m["field_"+c.toString()]=1;b.name="FIELD_"+c.toString()}}b=[];for(c=0;c<n.length;c++)m=n[c],b.push(T(m.expression,e,g));for(c=0;c<h.length;c++)m=h[c],b.push(T(m.expression,e,g));return 0<b.length?A.all(b).then(function(){return A.resolve(a[0].groupby(n,h))}):
A.resolve(a[0].groupby(n,h))}):e.failDefferred("Illegal Value: GroupBy")})},e.signatures.push({name:"groupby",min:"3",max:"3"}),e.functions.distinct=function(g,p){return e.standardFunctionAsync(g,p,function(d,k,a){return f.isFeatureSet(a[0])?(f.pcCheck(a,2,2),a[0].load().then(function(b){var n=[],h=[];if(f.isString(a[1]))h.push(a[1]);else if(a[1]instanceof G)h.push(a[1]);else if(f.isArray(a[1]))h=a[1];else if(f.isImmutableArray(a[1]))h=a[1].toArray();else return e.failDefferred("Illegal Value: GroupBy");
for(var m=!1,c=0;c<h.length;c++){var l=h[c];if(f.isString(l)){var q=z.WhereClause.create(f.toString(l),b.getFieldsIndex());l=!0===Z.isSingleField(q)?f.toString(l):"%%%%FIELDNAME";n.push({name:l,expression:q});"%%%%FIELDNAME"===l&&(m=!0)}else if(l instanceof G){var t=l.hasField("name")?l.field("name"):"%%%%FIELDNAME";q=l.hasField("expression")?l.field("expression"):"";"%%%%FIELDNAME"===t&&(m=!0);if(!t)return e.failDefferred("Illegal Value: GroupBy");n.push({name:t,expression:z.WhereClause.create(q?
q:t,b.getFieldsIndex())})}else return e.failDefferred("Illegal Value: GroupBy")}if(m){m={};c=0;for(h=b.fields;c<h.length;c++)b=h[c],m[b.name.toLowerCase()]=1;for(c=0;c<n.length;c++)b=n[c],"%%%%FIELDNAME"!==b.name&&(m[b.name.toLowerCase()]=1);for(h=c=0;h<n.length;h++)if(b=n[h],"%%%%FIELDNAME"===b.name){for(;1===m["field_"+c.toString()];)c++;m["field_"+c.toString()]=1;b.name="FIELD_"+c.toString()}}b=[];for(m=0;m<n.length;m++)b.push(T(n[m].expression,e,g));return 0<b.length?A.all(b).then(function(){return A.resolve(a[0].groupby(n,
[]))}):A.resolve(a[0].groupby(n,[]))})):ia("distinct",d,k,a)})})}});