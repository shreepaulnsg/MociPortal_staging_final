// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/PortalManager",["dojo/Deferred","dojo/on","esri/dijit/geoenrichment/when","esri/arcgis/Portal","../../../utils/CacheUtil"],function(f,g,h,e,k){return{getSignedInPortal:function(b){var c=k.get("PortalManager.portal");if(!c[b]){var d=new f;c[b]=d.promise;var a=new e.Portal(b);g(a,"load",function(){a.user?d.resolve({user:new e.PortalUser({portal:a,credential:{userId:a.user.username,server:a.url,token:"",expires:9999999999999,creationTime:9999999999999,
scope:"portal",resources:[a.portalUrl]}}),portal:a}):h(a.signIn()).then(function(l){d.resolve({user:l,portal:a})})})}return c[b]}}});