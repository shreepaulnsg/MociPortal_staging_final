// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/arcade/functions/convertdirection",["require","exports","../Dictionary","../languageUtils"],function(da,g,H,m){function y(a){if(!1===m.isString(a))throw Error("Invalid Parameter");return a}function B(a,b){b=Math.pow(10,b);return Math.round(a*b)/b}function T(a){a=+a;return isFinite(a)?a-a%1||(0>a?-0:0===a?a:0):a}function r(a){var b=parseFloat(a.toString().replace(T(a).toString(),"0"))*((0<a)-(0>a)||+a);return 0>a?{fraction:b,integer:Math.ceil(a)}:{fraction:b,integer:Math.floor(a)}}function t(a,
b){switch(a){case 0:return"SHORT"===b?"N":"North";case 1:return"SHORT"===b?"E":"East";case 2:return"SHORT"===b?"S":"South";case 3:return"SHORT"===b?"W":"West"}}function C(a,b,c){for(;a.length<c;)a=b+a;return a}function D(a,b){return a-Math.floor(a/b)*b}function E(a){switch(a){case 6:case 1:return 360;case 4:return U;case 5:return 400;case 2:return 1296E3;case 7:return 60;case 8:return 60;default:throw Error("Unnexpected evaluations");}}function I(a){switch(a.toUpperCase().trim()){case "NORTH":case "NORTHAZIMUTH":case "NORTH AZIMUTH":return 1;
case "POLAR":return 2;case "QUADRANT":return 3;case "SOUTH":case "SOUTHAZIMUTH":case "SOUTH AZIMUTH":return 4}throw Error("Unsupported direction type");}function J(a){switch(a.toUpperCase().trim()){case "D":case "DD":case "DECIMALDEGREE":case "DECIMAL DEGREE":case "DEGREE":case "DECIMALDEGREES":case "DECIMAL DEGREES":case "DEGREES":return 1;case "DMS":case "DEGREESMINUTESSECONDS":case "DEGREES MINUTES SECONDS":return 3;case "R":case "RAD":case "RADS":case "RADIAN":case "RADIANS":return 4;case "G":case "GON":case "GONS":case "GRAD":case "GRADS":case "GRADIAN":case "GRADIANS":return 5}throw Error("Unsupported units");
}function K(a,b,c){var d=null;switch(b){case 1:d=g.preciseMultiply(a,3600);break;case 2:d=a;break;case 5:d=g.preciseMultiply(a,3240);break;case 4:d=g.preciseMultiply(a,L);break;default:throw Error("Unnexpected evaluation");}switch(c){case 1:return g.preciseDivide(d,3600);case 2:return d;case 5:return g.preciseDivide(d,3240);case 4:return d/L;default:throw Error("Unnexpected evaluation");}}function z(a){switch(a){case 1:case 6:case 3:return 1;case 5:return 5;case 7:return 7;case 4:return 4;case 2:case 8:return 2}}
function V(a){switch(m.toNumber(a)){case 1:return{first:0,second:1};case 2:return{first:2,second:1};case 3:return{first:2,second:3};case 4:return{first:0,second:3}}return null}function M(a){switch(a.toUpperCase().trim()){case "N":case "NORTH":return 0;case "E":case "EAST":return 1;case "S":case "SOUTH":return 2;case "W":case "WEST":return 3}return null}function u(a){a=parseFloat(a);if(m.isNumber(a)){if(isNaN(a))throw Error("Invalid conversion");return a}throw Error("Invalid conversion");}function F(a,
b,c){var d=3===c,e=null,h=null,k=0,f=0;f=0;if(d){if(2>a.length)throw Error("Conversion Error");f=1;(h=V(m.toString(a[a.length-1])))?(e=h.first,h=h.second):(k=1,e=M(m.toString(a[0])),h=M(m.toString(a[a.length-1])));if(null===e||null===h)throw Error("Invalid Conversion");}switch(b){case 1:case 4:case 5:if(0===a.length)throw Error("Invalid Conversion");return d?q.createFromAngleMeridianAndDirection(p.createFromAngleAndUnits(u(a[k]),z(b)),e,h):q.createFromAngleAndDirection(p.createFromAngleAndUnits(u(a[k]),
z(b)),c);case 3:f=a.length-f-k;if(3===f)return a=p.createFromDegreesMinutesSeconds(u(a[k]),u(a[k+1]),u(a[k+2])),d?q.createFromAngleMeridianAndDirection(a,e,h):q.createFromAngleAndDirection(a,c);if(1===f)return a=u(a[k]),a=v.number_to_dms(a),a=p.createFromDegreesMinutesSeconds(a.m_degrees,a.m_minutes,a.m_seconds),d?q.createFromAngleMeridianAndDirection(a,e,h):q.createFromAngleAndDirection(a,c)}throw Error("Conversion Error");}function W(a){for(var b=[" ","-","/","'",'"',"\\","^","\u00b0",N,"\t","\r",
"\n","*"],c="",d=0;d<a.length;d++){var e=a.charAt(d);c=-1!==b.indexOf(e)?c+"RRSPLITRRSPLITRR":c+e}return c.split("RRSPLITRRSPLITRR").filter(function(h){return""!==h})}function G(a,b,c){for(var d={padding:0,rounding:0,newpos:b},e=!1;b<a.length;){var h=a[b];if(h===c)e?d.rounding++:d.padding++,b++;else if("."===h)e=!0,b++;else break}d.newpos=b-1;return d}Object.defineProperty(g,"__esModule",{value:!0});g.convertDirection=g.preciseDivide=g.preciseMultiply=g.preciseMinus=g.preciseAdd=void 0;var A=function(a){return function(b,
c,d){d=d||14;return+a(b,c).toFixed(d)}},X=function(a,b){return a+b},Y=function(a,b){return a-b},Z=function(a,b){return a*b},aa=function(a,b){return a/b};g.preciseAdd=function(a,b,c){return A(X)(a,b,c)};g.preciseMinus=function(a,b,c){return A(Y)(a,b,c)};g.preciseMultiply=function(a,b,c){return A(Z)(a,b,c)};g.preciseDivide=function(a,b,c){return A(aa)(a,b,c)};var U=2*Math.PI,L=648E3/Math.PI,N=String.fromCharCode(7501),O;(function(a){a[a.north=0]="north";a[a.east=1]="east";a[a.south=2]="south";a[a.west=
3]="west"})(O||(O={}));var P;(function(a){a[a.decimal_degrees=1]="decimal_degrees";a[a.seconds=2]="seconds";a[a.degrees_minutes_seconds=3]="degrees_minutes_seconds";a[a.radians=4]="radians";a[a.gradians=5]="gradians";a[a.truncated_degrees=6]="truncated_degrees";a[a.fractional_degree_minutes=7]="fractional_degree_minutes";a[a.fractional_minute_seconds=8]="fractional_minute_seconds"})(P||(P={}));var Q;(function(a){a[a.north_azimuth=1]="north_azimuth";a[a.polar=2]="polar";a[a.quadrant=3]="quadrant";
a[a.south_azimuth=4]="south_azimuth"})(Q||(Q={}));var R;(function(a){a[a.meridian=0]="meridian";a[a.direction=1]="direction"})(R||(R={}));var v=function(){function a(b,c,d){this.m_degrees=b;this.m_minutes=c;this.m_seconds=d}a.prototype.get_field=function(b){switch(b){case 1:case 6:return this.m_degrees;case 7:return this.m_minutes;case 2:case 8:return this.m_seconds;default:throw Error("Unnexpected evaluation");}};a.seconds_to_DMS=function(b){var c=r(b).fraction;b=r(b).integer;var d=Math.floor(b/
3600);b-=3600*d;var e=Math.floor(b/60);return new a(d,e,b-60*e+c)};a.number_to_dms=function(b){var c=r(b).fraction;b=r(b).integer;var d=g.preciseMultiply(r(100*c).fraction,100);c=r(100*c).integer;return new a(b,c,d)};a.prototype.format=function(b,c){c=B(this.m_seconds,c);var d=this.m_minutes,e=this.m_degrees;if(2===b||8===b)60<=c&&(c-=60,++d),60<=d&&(d=0,++e),360<=e&&(e=0);else if(7===b)c=0,d=30<=this.m_seconds?this.m_minutes+1:this.m_minutes,e=this.m_degrees,60<=d&&(d=0,++e),360<=e&&(e=0);else if(1===
b||6===b)b=g.preciseDivide(this.m_seconds,3600),c=g.preciseDivide(this.m_minutes,60),e=Math.round(this.m_degrees+c+b),c=d=0;return new a(e,d,c)};a.DMS_to_seconds=function(b,c,d){return 3600*b+60*c+d};return a}(),ba=function(){function a(b,c,d){this.meridian=b;this.angle=c;this.direction=d}a.prototype.fetch_azimuth=function(b){return 0===b?this.meridian:this.direction};return a}(),q=function(){function a(b){this.m_angle=b}a.createFromAngleAndDirection=function(b,c){return new a(new p(a.convertDirectionFormat(b.extract_angular_units(2),
c,1)))};a.prototype.getAngle=function(b){var c=this.m_angle.extract_angular_units(2);switch(b){case 1:case 4:case 2:return b=new p(a.convertDirectionFormat(c,1,b));case 3:return b=a.seconds_north_azimuth_to_quadrant(c),b=new p(b.angle)}};a.prototype.getMeridian=function(b){var c=this.m_angle.extract_angular_units(2);switch(b){case 1:return 0;case 4:return 2;case 2:return 1;case 3:return a.seconds_north_azimuth_to_quadrant(c).meridian}};a.prototype.getDirection=function(b){var c=this.m_angle.extract_angular_units(2);
switch(b){case 1:return 1;case 4:return 3;case 2:return 0;case 3:return a.seconds_north_azimuth_to_quadrant(c).direction}};a.seconds_north_azimuth_to_quadrant=function(b){var c=324E3>=b||972E3<=b?0:2;return new ba(c,0===c?Math.min(1296E3-b,b):Math.abs(b-648E3),648E3<b?3:1)};a.createFromAngleMeridianAndDirection=function(b,c,d){return new a(new p(a.secondsQuadrantToNorthAzimuth(b.extract_angular_units(2),c,d)))};a.secondsQuadrantToNorthAzimuth=function(b,c,d){return 0===c?1===d?b:1296E3-b:1===d?648E3-
b:648E3+b};a.convertDirectionFormat=function(b,c,d){var e=0;switch(c){case 1:e=b;break;case 2:e=324E3-b;break;case 3:throw Error("Unnexpected evaluation");case 4:e=b+648E3}b=0;switch(d){case 1:b=e;break;case 2:b=324E3-e;break;case 3:throw Error("Unnexpected evaluation");case 4:b=e-648E3}b%=1296E3;return 0>b?1296E3+b:b};return a}(),p=function(){function a(b){this.m_seconds=b}a.createFromAngleAndUnits=function(b,c){return new a(K(b,c,2))};a.prototype.extract_angular_units=function(b){return K(this.m_seconds,
2,z(b))};a.createFromDegreesMinutesSeconds=function(b,c,d){return new a(g.preciseAdd(g.preciseAdd(g.preciseMultiply(b,3600),g.preciseMultiply(c,60)),d))};return a}(),ca=function(){function a(b,c,d,e){this.m_view=b;this.m_angle=c;this.m_merdian=d;this.m_direction=e;this.m_formatted_dms=this.m_dms=null}a.createFromStringAndBearing=function(b,c,d){return new a(b,c.getAngle(d),c.getMeridian(d),c.getDirection(d))};a.prototype.fetch_angle=function(){return this.m_angle};a.prototype.fetch_meridian=function(){return this.m_merdian};
a.prototype.fetch_direction=function(){return this.m_direction};a.prototype.fetch_m_view=function(){return this.m_view};a.prototype.fetch_dms=function(){null===this.m_dms&&this.calculate_dms();return this.m_dms};a.prototype.fetch_formatted_dms=function(){null===this.m_formatted_dms&&this.calculate_dms();return this.m_formatted_dms};a.prototype.calculate_dms=function(){var b=null,c=6,d=0;for(b=0;b<this.m_view.length;b++){var e=this.m_view[b];switch(e){case "m":b=G(this.m_view,b,e);c=6===c?7:c;b=b.newpos;
continue;case "s":b=G(this.m_view,b,e),c=8,d=d<b.rounding?b.rounding:d,b=b.newpos}}this.m_dms=v.seconds_to_DMS(this.m_angle.extract_angular_units(2));this.m_formatted_dms=v.seconds_to_DMS(this.m_angle.extract_angular_units(2)).format(c,d)};return a}();g.convertDirection=function(a,b,c){if(!(b instanceof H))throw Error("Invalid Parameter");if(!1===b.hasField("directionType"))throw Error("Invalid Parameter - Missing directionType");if(!1===b.hasField("angleType"))throw Error("Invalid Parameter - Missing directionType");
var d=I(y(b.field("directiontype")));b=J(y(b.field("angletype")));if(m.isNumber(a)){a=m.toNumber(a);if(3===d)throw Error("Conversion error");3===b?(a=v.number_to_dms(a),b=q.createFromAngleAndDirection(p.createFromDegreesMinutesSeconds(a.m_degrees,a.m_minutes,a.m_seconds),d)):b=q.createFromAngleAndDirection(p.createFromAngleAndUnits(a,z(b)),d)}else if(m.isString(a))b=F(W(a),b,d);else if(m.isArray(a))b=F(a,b,d);else if(m.isImmutableArray(a))b=F(a.toArray(),b,d);else throw Error("Conversion Error");
if(!(c instanceof H))throw Error("Invalid Parameter");if(!1===c.hasField("directionType"))throw Error("Invalid Parameter - Missing directionType");if(!1===c.hasField("outputType"))throw Error("Invalid Parameter - Missing directionType");d=I(y(c.field("directiontype")));a=c.hasField("angleType")?J(y(c.field("angletype"))):null;var e=y(c.field("outputType")).toUpperCase().trim();if(!d||!e)throw Error("Conversion error");if(!(a||"TEXT"===e&&c.hasField("format")))throw Error("Invalid unit");switch(e){case "VALUE":if(3===
d||3===a)return c=b,b=c.getAngle(d),3===d&&3===a?(a=v.seconds_to_DMS(b.extract_angular_units(2)),d=[t(c.getMeridian(d),"SHORT"),a.m_degrees,a.m_minutes,a.m_seconds,t(c.getDirection(d),"SHORT")]):3===a?(a=v.seconds_to_DMS(b.extract_angular_units(2)),d=[a.m_degrees,a.m_minutes,a.m_seconds]):d=3===d?[t(c.getMeridian(d),"SHORT"),b.extract_angular_units(a),t(c.getDirection(d),"SHORT")]:[b.extract_angular_units(a)],d;c=b;if((b=z(a))&&3!==a)d=c.getAngle(d).extract_angular_units(b);else throw Error("Conversion Error");
return d;case "TEXT":e="";c.hasField("format")&&(e=m.toString(c.field("format")));if(null===e||""===e){c="";switch(a){case 1:c=3===d?"DD.DD\u00b0":"DDD.DD\u00b0";break;case 3:c=3===d?"dd\u00b0 mm' ss\"":"ddd\u00b0 mm' ss.ss\"";break;case 4:c="R.RR";break;case 5:c="GGG.GG"+N;break;default:throw Error("Conversion error");}3===d&&(c="p "+c+" b");e=c}c=b;a=e;var h="",k=null,f=null;b=ca.createFromStringAndBearing(a,c,d);e={D:1,d:6,m:7,s:8,R:4,G:5};for(f=0;f<a.length;f++){var l=a[f];switch(l){case "[":k=
a;l={escaped:"",newpos:f};for(f++;f<k.length;){var w=k[f];f++;if("]"===w)break;l.escaped+=w}l.newpos=f-1;k=l;h+=k.escaped;f=k.newpos;continue;case "D":case "d":case "m":case "s":case "R":case "G":k=G(a,f,l);f=c.getAngle(d);a:{l=e[l];w=k.padding;var n=k.rounding,S=b,x=null;switch(l){case 1:case 4:case 5:x=D(B(f.extract_angular_units(l),n),E(l));f=C(x.toFixed(n),"0",w+n+(0<n?1:0));break a;case 6:case 7:x=D(S.fetch_formatted_dms().get_field(l),E(l));f=C(x.toFixed(n),"0",w+n+(0<n?1:0));break a;case 8:x=
D(B(S.fetch_dms().get_field(l),n),E(l));f=C(x.toFixed(n),"0",w+n+(0<n?1:0));break a;default:throw Error("Unnexepected evaluation");}}h+=f;f=k.newpos;continue;case "P":case "p":h+=t(b.fetch_meridian(),"p"===l?"SHORT":"LONG");continue;case "B":case "b":h+=t(b.fetch_direction(),"b"===l?"SHORT":"LONG");continue;default:h+=l}}return h;default:throw Error("Invalid Parameter");}}});