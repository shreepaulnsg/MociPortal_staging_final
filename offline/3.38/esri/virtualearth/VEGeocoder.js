// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/virtualearth/VEGeocoder","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/has ../kernel ../urlUtils ../tasks/Task ./VEGeocodeResult ../deferredUtils ../request".split(" "),function(f,c,n,p,q,r,m,t,u,v,w){f=f(t,{declaredClass:"esri.virtualearth.VEGeocoder",constructor:function(a){try{if(a=c.mixin({bingMapsKey:null},a||{}),this.url=m.getProtocolForWebResource()+"//serverapi.arcgisonline.com/veadaptor/production/services/geocode/geocode",this._url=m.urlToObject(this.url),
this._queue=[],this.bingMapsKey=a.bingMapsKey,this.culture=a.culture||"en-US",this._errorHandler=c.hitch(this,this._errorHandler),this._addressToLocationsHandler=c.hitch(this,this._addressToLocationsHandler),!this.bingMapsKey)throw Error("BingMapsKey must be provided.");}catch(d){throw this.onError(d),d;}},addressToLocations:function(a,d,g){if(this.bingMapsKey){var k=c.mixin({},this._url.query,{query:a,token:this.bingMapsKey,culture:this.culture}),h=this._addressToLocationsHandler,e=this._errorHandler,
b=new p(v._dfdCanceller);b._pendingDfd=w({url:this._url.path,content:k,callbackParamName:"callback",load:function(l,x){h(l,x,d,g,b)},error:function(l){e(l,g,b)}});return b}console.debug("Server token not retrieved. Queing request to be executed after server token retrieved.");this._queue.push(arguments)},_addressToLocationsHandler:function(a,d,g,k,h){try{n.forEach(a,function(e,b){a[b]=new u(e)}),this._successHandler([a],"onAddressToLocationsComplete",g,h)}catch(e){this._errorHandler(e,k,h)}},onAddressToLocationsComplete:function(){},
setBingMapsKey:function(a){this.bingMapsKey=a},setCulture:function(a){this.culture=a}});q("extend-esri")&&c.setObject("virtualearth.VEGeocoder",f,r);return f});