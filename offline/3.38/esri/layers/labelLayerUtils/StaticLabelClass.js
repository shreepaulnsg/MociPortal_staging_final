// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/labelLayerUtils/StaticLabelClass","dojo/_base/declare dojo/_base/lang dojo/has ../../kernel ../../geometry/Extent ../../geometry/Point ../../geometry/Polygon".split(" "),function(D,F,G,H,A,E,B){return D(null,{declaredClass:"esri.layers.labelLayerUtils.StaticLabel",constructor:function(){this._preparedLabels=[];this._placedLabels=[];this._extent=null;this._ymax=this._ymin=this._xmax=this._xmin=0;this._scale=1;this._LINE_STEP_CONST=1.5;this._POLYGON_X_STEP_CONST=1;this._POLYGON_Y_STEP_CONST=
.75;this._OVERRUN=2},setMap:function(c,e){this._labelLayer=e;this._map=c;this._xmin=c.extent.xmin;this._xmax=c.extent.xmax;this._ymin=c.extent.ymin;this._ymax=c.extent.ymax;this._scale=(this._xmax-this._xmin)/c.width},_process:function(c){var e;this._preparedLabels=c;this._placedLabels=[];for(c=this._preparedLabels.length-1;0<=c;c--){var a=this._preparedLabels[c];var f=a.labelWidth;var b=a.labelHeight;var k=(e=a.options)&&e.lineLabelPlacement?e.lineLabelPlacement:"PlaceAtCenter";var h=e&&e.lineLabelPosition?
e.lineLabelPosition:"Above";var d=e&&e.labelRotation?e.labelRotation:!0;var g=Math.PI/180*a.angle;var r=e&&e.howManyLabels?e.howManyLabels:"OneLabel";var n=[];if("point"===a.geometry.type)this._generatePointPositions(a.geometry.x,a.geometry.y,a.text,g,f,b,a.symbolWidth,a.symbolHeight,e,n);else if("multipoint"===a.geometry.type)for(d=0;d<a.geometry.points.length;d++)this._generatePointPositions(a.geometry.points[d][0],a.geometry.points[d][1],a.text,g,f,b,a.symbolWidth,a.symbolHeight,e,n);else if("polyline"===
a.geometry.type)if("PlaceAtStart"===k)this._generateLinePositionsPlaceAtStart(a.geometry,!0,a.text,f,b,2*a.symbolHeight+b,k,h,d,n);else if("PlaceAtEnd"===k)this._generateLinePositionsPlaceAtEnd(a.geometry,!0,a.text,f,b,2*a.symbolHeight+b,k,h,d,n);else{e=[];var m=a.geometry.getExtent(),l=this._map.extent;if(m.getWidth()<f*this._scale/this._OVERRUN&&m.getHeight()<f*this._scale/this._OVERRUN)continue;else.5*m.getWidth()<l.getWidth()&&.5*m.getHeight()<l.getHeight()?this._generateLinePositionsPlaceAtCenter(a.geometry,
!1,.1*Math.min(this._map.width,this._map.height)*this._scale,a.text,f,b,2*a.symbolHeight+b,k,h,d,e):this._generateLinePositionsPlaceAtCenter(a.geometry,!0,.2*Math.min(this._map.width,this._map.height)*this._scale,a.text,f,b,2*a.symbolHeight+b,k,h,d,e);this._postSorting(l,e,n)}else if("polygon"===a.geometry.type){k=[];for(d=0;d<a.geometry.rings.length;d++)h=a.geometry.rings[d],1<a.geometry.rings.length&&!B.prototype.isClockwise(h)||(e=this._calcRingExtent(h),e.xmax-e.xmin<4*f*this._scale/this._OVERRUN&&
e.ymax-e.ymin<4*b*this._scale/this._OVERRUN||k.push(h));k.sort(function(p,q){return q.length-p.length});for(d=0;d<k.length;d++)this._generatePolygonPositionsForManyLabels(k[d],a.geometry.spatialReference,a.text,g,f,b,n)}for(d=0;d<n.length&&(k=n[d].x,h=n[d].y,void 0!==n[d].angle&&(g=n[d].angle),e=this._findPlace(a,a.text,k,h,g,f,b),"OneLabel"!==r||!e||!this._labelLayer._isWithinScreenArea(new E(k,h,a.geometry.spatialReference)));d++);}return this._placedLabels},_generatePointPositions:function(c,e,
a,f,b,k,h,d,g,r){a=g&&g.pointPriorities?g.pointPriorities:"AboveRight";b=(h+b)*this._scale;k=(d+k)*this._scale;switch(a.toLowerCase()){case "aboveleft":c-=b;e+=k;break;case "abovecenter":e+=k;break;case "aboveright":c+=b;e+=k;break;case "centerleft":c-=b;break;case "centercenter":break;case "centerright":c+=b;break;case "belowleft":c-=b;e-=k;break;case "belowcenter":e-=k;break;case "belowright":c+=b;e-=k;break;default:return}r.push({x:c,y:e})},_generateLinePositionsPlaceAtStart:function(c,e,a,f,b,
k,h,d,g,r){h=f*this._scale;var n=this._LINE_STEP_CONST*Math.min(this._map.width,this._map.height)*this._scale,m,l;for(m=0;m<c.paths.length;m++){var p=c.paths[m],q=h,t=0;for(l=0;l<p.length-1;l++){var v=p[l][0];var w=p[l][1];var u=p[l+1][0];var y=p[l+1][1];var x=u-v;var z=y-w;x=Math.sqrt(x*x+z*z);t+x>q?(t=this._generatePositionsOnLine(c.spatialReference,e,q,n,t,v,w,u,y,a,f,b,k,d,g,r),q=n):t+=x}}},_generateLinePositionsPlaceAtEnd:function(c,e,a,f,b,k,h,d,g,r){h=f*this._scale;var n=this._LINE_STEP_CONST*
Math.min(this._map.width,this._map.height)*this._scale,m,l;for(m=0;m<c.paths.length;m++){var p=c.paths[m],q=h,t=0;for(l=p.length-2;0<=l;l--){var v=p[l+1][0];var w=p[l+1][1];var u=p[l][0];var y=p[l][1];var x=u-v;var z=y-w;x=Math.sqrt(x*x+z*z);t+x>q?(t=this._generatePositionsOnLine(c.spatialReference,e,q,n,t,v,w,u,y,a,f,b,k,d,g,r),q=n):t+=x}}},_generateLinePositionsPlaceAtCenter:function(c,e,a,f,b,k,h,d,g,r,n){var m;for(d=0;d<c.paths.length;d++){var l=c.paths[d];if(!(2>l.length)){if(2==l.length){var p=
l[0];var q=l[1];var t=p[0];p=p[1];l=q[0];var v=q[1];var w=(l-t)*(l-t)+(v-p)*(v-p);var u=Math.atan2(v-p,l-t);v=Math.cos(u);u=Math.sin(u);l=[];var y=t;for(var x=p;(y-t)*(y-t)+(x-p)*(x-p)<w;)l.push([y,x]),y+=a/2*v,x+=a/2*u;l.push(q)}var z=0;for(q=0;q<l.length-1;q++)t=l[q][0],p=l[q][1],w=l[q+1][0],v=l[q+1][1],u=w-t,y=v-p,z+=Math.sqrt(u*u+y*y);for(q=x=0;q<l.length-1;q++){t=l[q][0];p=l[q][1];w=l[q+1][0];v=l[q+1][1];u=w-t;y=v-p;u=Math.sqrt(u*u+y*y);if(x+u>z/2)break;x+=u}q==l.length-1&&q--;t=l[q][0];p=l[q][1];
w=l[q+1][0];v=l[q+1][1];u=w-t;y=v-p;x=z/2-x;u=Math.atan2(y,u);y=t+x*Math.cos(u);u=p+x*Math.sin(u);t=this._angleAndShifts(t,p,w,v,h,g,r);n.push({x:y+t.shiftX,y:u+t.shiftY,angle:t.angle});z=y;var C=u;x=0;for(m=q;m<l.length-1;m++)m==q?(t=z,p=C):(t=l[m][0],p=l[m][1]),w=l[m+1][0],v=l[m+1][1],u=w-t,y=v-p,u=Math.sqrt(u*u+y*y),x=x+u>a?this._generatePositionsOnLine(c.spatialReference,e,a,a,x,t,p,w,v,f,b,k,h,g,r,n):x+u;x=0;for(m=q;0<=m;m--)m==q?(t=z,p=C):(t=l[m+1][0],p=l[m+1][1]),w=l[m][0],v=l[m][1],u=w-t,
y=v-p,u=Math.sqrt(u*u+y*y),x=x+u>a?this._generatePositionsOnLine(c.spatialReference,e,a,a,x,t,p,w,v,f,b,k,h,g,r,n):x+u}}},_generatePositionsOnLine:function(c,e,a,f,b,k,h,d,g,r,n,m,l,p,q,t){r=Math.atan2(g-h,d-k);n=k;m=h;var v=n,w=m;do if(b=a-b,n+=b*Math.cos(r),m+=b*Math.sin(r),this._belongs(n,m,k,h,d,g))b=this._angleAndShifts(k,h,d,g,l,p,q),a=n+b.shiftX,w=m+b.shiftY,e?this._labelLayer._isWithinScreenArea(new A(a,w,a,w,c))&&t.push({x:a,y:w,angle:b.angle}):t.push({x:a,y:w,angle:b.angle}),v=n,w=m,b=0,
a=f;else return c=d-v,g-=w,Math.sqrt(c*c+g*g);while(1)},_postSorting:function(c,e,a){if(c&&0<e.length){var f=.5*(c.xmin+c.xmax);c=.5*(c.ymin+c.ymax);for(var b=e[0].x,k=e[0].y,h=Math.sqrt((b-f)*(b-f)+(k-c)*(k-c)),d=e[0].angle,g=0;g<e.length;g++){var r=e[g].x,n=e[g].y,m=Math.sqrt((r-f)*(r-f)+(n-c)*(n-c));m<h&&(b=r,k=n,h=m,d=e[g].angle)}a.push({x:b,y:k,angle:d})}},_belongs:function(c,e,a,f,b,k){if(b==a&&k==f)return!1;if(b>a){if(c>b||c<a)return!1}else if(c<b||c>a)return!1;if(k>f){if(e>k||e<f)return!1}else if(e<
k||e>f)return!1;return!0},_angleAndShifts:function(c,e,a,f,b,k,h){for(c=Math.atan2(f-e,a-c);c>Math.PI/2;)c-=Math.PI;for(;c<-(Math.PI/2);)c+=Math.PI;f=Math.sin(c);var d=Math.cos(c);a=e=0;"Above"==k&&(e=b*f*this._scale,a=b*d*this._scale);"Below"==k&&(e=-b*f*this._scale,a=-b*d*this._scale);b=[];b.angle=h?-c:0;b.shiftX=-e;b.shiftY=a;return b},_generatePolygonPositionsForManyLabels:function(c,e,a,f,b,k,h){b=this._findCentroidForRing(c);f=b[0];var d=b[1],g=this._calcRingExtent(c);b=g.xmin;k=g.ymin;var r=
g.xmax;g=g.ymax;var n=(g-k)/(this._map.height*this._scale);if(!(10<(r-b)/(this._map.width*this._scale)&&10<n)){var m=!0;if(r-b>this._map.width*this._scale||g-k>this._map.height*this._scale)m=!1;n=this._map.width*this._scale*(m?.1875:.5);m=this._map.height*this._scale*(m?.1875:.5);var l=!0,p=!0,q=0;do{d+=(q%2?-1:1)*q*m;if(this._scanRingByX(a,e,c,f,d,b,r,n,h))break;d<k&&(l=!1);d>g&&(p=!1);q++}while(l||p)}},_scanRingByX:function(c,e,a,f,b,k,h,d,g){var r=!0,n=!0,m=0,l=1E3;do{f+=(m%2?-1:1)*m*d;var p=this._movePointInsideRing(a,
f,b),q=this._labelLayer._isWithinScreenArea(new A(p,b,p,b,e)),t=this._isPointWithinRing(c,a,p,b);if(q&&t)return g.push({x:p,y:b}),!0;f<k&&(r=!1);f>h&&(n=!1);m++;l--;if(0>=l)return!0}while(r||n);return!1},_movePointInsideRing:function(c,e,a){for(var f=[],b=c.length-1,k=c[0][1]>=c[b][1]?1:-1,h=0;h<=b;h++){var d=h,g=h+1;h==b&&(g=0);var r=c[d][0];d=c[d][1];var n=c[g][0];g=c[g][1];var m=g>=d?1:-1;if(d<=a&&a<=g||g<=a&&a<=d)a!=d&&a!=g?(f.push((a-d)*(n-r)/(g-d)+r),k=m):a==d&&a!=g?(k!=m&&f.push(r),k=m):a!=
d&&a==g?(f.push(n),k=m):a==d&&a==g&&(1==k&&f.push(r),f.push(n),k=m)}f.sort(function(l,p){return l-p});c=f.length;if(0<c){for(h=a=e=0;h<c-1;h+=2)b=Math.abs(f[h+1]-f[h]),b>e&&(e=b,a=h);e=(f[a]+f[a+1])/2}return e},_calcRingExtent:function(c){var e;var a=new A;for(e=0;e<c.length-1;e++){var f=c[e][0],b=c[e][1];if(void 0===a.xmin||f<a.xmin)a.xmin=f;if(void 0===a.ymin||b<a.ymin)a.ymin=b;if(void 0===a.xmax||f>a.xmax)a.xmax=f;if(void 0===a.ymax||b>a.ymax)a.ymax=b}return a},_isPointWithinPolygon:function(c,
e,a,f){var b;for(b=0;b<e.rings.length;b++)if(this._isPointWithinRing(c,e.rings[b],a,f))return!0;return!1},_isPointWithinRing:function(c,e,a,f){var b=[],k=e.length;for(c=0;c<k-1;c++){var h=e[c][0];var d=e[c][1];var g=e[c+1][0];var r=e[c+1][1];if(h!=g||d!=r){if(d==r)if(f==d)b.push(h);else continue;h==g?(d<r&&f>=d&&f<r&&b.push(h),d>r&&f<=d&&f>r&&b.push(h)):(d=(g-h)/(r-d)*(f-d)+h,h<g&&d>=h&&d<g&&b.push(d),h>g&&d<=h&&d>g&&b.push(d))}}b.sort(function(n,m){return n-m});for(c=0;c<b.length-1;c++)if(h=b[c],
g=b[c+1],a>=h&&a<g)if(c%2)break;else return!0;return!1},_findCentroidForRing:function(c){for(var e=c.length,a=[0,0],f=0,b=c[0][0],k=c[0][1],h=1;h<e-1;h++){var d=c[h][0],g=c[h][1],r=c[h+1][0],n=c[h+1][1],m=(d-b)*(n-k)-(r-b)*(g-k);a[0]+=m*(b+d+r);a[1]+=m*(k+g+n);f+=m}a[0]/=3*f;a[1]/=3*f;return a},_findCentroidForFeature:function(c){for(var e=0,a=[0,0],f=0;f<c.rings.length;f++)for(var b=c.rings[f],k=b.length,h=b[0][0],d=b[0][1],g=1;g<k-1;g++){var r=b[g][0],n=b[g][1],m=b[g+1][0],l=b[g+1][1],p=(r-h)*(l-
d)-(m-h)*(n-d);a[0]+=p*(h+r+m);a[1]+=p*(d+n+l);e+=p}a[0]/=3*e;a[1]/=3*e;return a},_findPlace:function(c,e,a,f,b,k,h){if(isNaN(a)||isNaN(f))return!1;for(var d=0;d<this._placedLabels.length;d++){var g=this._placedLabels[d].angle,r=this._placedLabels[d].width*this._scale,n=this._placedLabels[d].height*this._scale,m=this._placedLabels[d].x-a,l=this._placedLabels[d].y-f;if(0===b&&0===g){if(this._findPlace2(-k*this._scale,-h*this._scale,k*this._scale,h*this._scale,m-r,l-n,m+r,l+n))return!1}else{var p=new A(-k*
this._scale,-h*this._scale,k*this._scale,h*this._scale,null),q=0,t=1;0!==b&&(q=Math.sin(b),t=Math.cos(b));var v=m*t-l*q;m=m*q+l*t;g-=b;q=Math.sin(g);t=Math.cos(g);var w=-r*t- -n*q;l=-r*q+-n*t;g=+r*t- -n*q;var u=+r*q+-n*t;r=v+w;n=m-l;q=v+g;t=m-u;w=v-w;l=m+l;v-=g;m+=u;g=new B;g.addRing([[r,n],[q,t],[w,l],[v,m],[r,n]]);if(p.intersects(g))return!1}}for(;b>Math.PI/2;)b-=Math.PI;for(;b<-(Math.PI/2);)b+=Math.PI;d={};d.layer=c;d.text=e;d.angle=b;d.x=a;d.y=f;d.width=k;d.height=h;this._placedLabels.push(d);
return!0},_findPlace2:function(c,e,a,f,b,k,h,d){return(c>=b&&c<=h||a>=b&&a<=h||c<=b&&a>=h)&&(e>=k&&e<=d||f>=k&&f<=d||e<=k&&f>=d)?!0:!1}})});