// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/TimeExtent","require exports ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/JSONSupport ./core/accessorSupport/decorators".split(" "),function(r,t,n,h,p,e){var q={milliseconds:{getter:"getUTCMilliseconds",setter:"setUTCMilliseconds",multiplier:1},seconds:{getter:"getUTCSeconds",setter:"setUTCSeconds",multiplier:1},minutes:{getter:"getUTCMinutes",setter:"setUTCMinutes",multiplier:1},hours:{getter:"getUTCHours",setter:"setUTCHours",multiplier:1},
days:{getter:"getUTCDate",setter:"setUTCDate",multiplier:1},weeks:{getter:"getUTCDate",setter:"setUTCDate",multiplier:7},months:{getter:"getUTCMonth",setter:"setUTCMonth",multiplier:1},years:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:1},decades:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:10},centuries:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:100}};return function(m){function c(a,b){a=m.call(this)||this;a.endTime=null;a.startTime=null;return a}n(c,
m);var l=c;c.prototype.normalizeCtorArgs=function(a,b){return!a||a instanceof Date?{startTime:a,endTime:b}:a};c.prototype.readEndTime=function(a,b){return null!=b.endTime?new Date(b.endTime):null};c.prototype.writeEndTime=function(a,b,d){b.endTime=a?a.getTime():null};c.prototype.readStartTime=function(a,b){return null!=b.startTime?new Date(b.startTime):null};c.prototype.writeStartTime=function(a,b,d){b.startTime=a?a.getTime():null};c.prototype.clone=function(){return new l({endTime:this.endTime,startTime:this.startTime})};
c.prototype.intersection=function(a){if(!a)return null;var b=this.startTime?this.startTime.getTime():-Infinity,d=this.endTime?this.endTime.getTime():Infinity,f=a.startTime?a.startTime.getTime():-Infinity;a=a.endTime?a.endTime.getTime():Infinity;var g,k;f>=b&&f<=d?g=f:b>=f&&b<=a&&(g=b);d>=f&&d<=a?k=d:a>=b&&a<=d&&(k=a);if(isNaN(g)||isNaN(k))return null;b=new l;b.startTime=-Infinity===g?null:new Date(g);b.endTime=Infinity===k?null:new Date(k);return b};c.prototype.offset=function(a,b){var d=new l,f=
this.startTime,g=this.endTime;f&&(d.startTime=this._offsetDate(f,a,b));g&&(d.endTime=this._offsetDate(g,a,b));return d};c.prototype._offsetDate=function(a,b,d){a=new Date(a.getTime());b&&d&&(d=q[d],a[d.setter](a[d.getter]()+b*d.multiplier));return a};h([e.property({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"endTime",void 0);h([e.reader("endTime")],c.prototype,"readEndTime",null);h([e.writer("endTime")],c.prototype,"writeEndTime",null);h([e.property({type:Date,json:{write:{allowNull:!0}}})],
c.prototype,"startTime",void 0);h([e.reader("startTime")],c.prototype,"readStartTime",null);h([e.writer("startTime")],c.prototype,"writeStartTime",null);return c=l=h([e.subclass("esri.TimeExtent")],c)}(e.declared(p))});