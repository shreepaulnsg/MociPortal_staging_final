// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"esri/layers/labelLayerUtils/DynamicLabelClass":function(){define("dojo/_base/declare dojo/_base/lang dojo/has ../../kernel ../../geometry/Extent ../../geometry/Polygon".split(" "),function(J,H,O,M,K,N){J=J(null,{declaredClass:"esri.layers.labelLayerUtils.DynamicLabelClass",constructor:function(){this._preparedLabels=[];this._placedLabels=[];this._extent=null;this._y1=this._x1=this._y0=this._x0=this._ymax=this._ymin=this._xmax=this._xmin=0;this._scale=1},setMap:function(v,c){this._labelLayer=
c;this._xmin=v.extent.xmin;this._xmax=v.extent.xmax;this._ymin=v.extent.ymin;this._ymax=v.extent.ymax;this._scale=(this._xmax-this._xmin)/v.width},_process:function(v){this._preparedLabels=v;this._placedLabels=[];var c;for(v=this._preparedLabels.length-1;0<=v;v--){var b=this._preparedLabels[v],a=Math.min(b.labelWidth,b.labelHeight),k=b.labelWidth+0*a;a=b.labelHeight+0*a;var f=(c=b.options)&&void 0!==c.lineLabelPlacement?c.lineLabelPlacement:"PlaceAtCenter",g=c&&void 0!==c.lineLabelPosition?c.lineLabelPosition:
"Above",e=c&&void 0!==c.pointPriorities?c.pointPriorities:"AboveRight",h=[2,2,1,3,0,2,3,3,2];"AboveLeft"==e?h=[1,2,2,2,0,3,2,3,3]:"AboveCenter"==e?h=[2,1,2,2,0,2,3,3,3]:"AboveRight"==e?h=[2,2,1,3,0,2,3,3,2]:"CenterLeft"==e?h=[2,2,3,1,0,3,2,2,3]:"CenterCenter"==e?h=[0,0,0,0,1,0,0,0,0]:"CenterRight"==e?h=[3,2,2,3,0,1,3,2,2]:"BelowLeft"==e?h=[2,3,3,2,0,3,1,2,2]:"BelowCenter"==e?h=[3,3,3,2,0,2,2,1,2]:"BelowRight"==e&&(h=[3,3,2,3,0,2,2,2,1]);var m=c&&void 0!==c.labelRotation?c.labelRotation:!0;e=Math.PI/
180*b.angle;c=c&&void 0!==c.howManyLabels?c.howManyLabels:"OneLabel";if("point"==b.geometry.type)this._generatePointPositions(b,b.geometry.x,b.geometry.y,b.text,e,k,a,b.symbolWidth,b.symbolHeight,h);else if("multipoint"==b.geometry.type)for(f=b.geometry,g=0;g<f.points.length;g++)this._generatePointPositions(b,f.points[g][0],f.points[g][1],b.text,e,k,a,b.symbolWidth,b.symbolHeight,h);else"polyline"==b.geometry.type?this._generateLinePositions(b,b.geometry,b.text,k,a,2*b.symbolHeight+a,f,g,m):"polygon"==
b.geometry.type&&this._generatePolygonPositions(b,c,b.geometry,b.text,e,k,a)}return this._placedLabels},_generatePointPositions:function(v,c,b,a,k,f,g,e,h,m){e=(e+f)*this._scale;h=(h+g)*this._scale;var w,q;for(w=1;3>=w;w++)for(q=1;9>=q;q++)if(m[q-1]==w)switch(q){case 1:if(this._findPlace(v,a,c-e,b+h,k,f,g))return;break;case 2:if(this._findPlace(v,a,c,b+h,k,f,g))return;break;case 3:if(this._findPlace(v,a,c+e,b+h,k,f,g))return;break;case 4:if(this._findPlace(v,a,c-e,b,k,f,g))return;break;case 5:if(this._findPlace(v,
a,c,b,k,f,g))return;break;case 6:if(this._findPlace(v,a,c+e,b,k,f,g))return;break;case 7:if(this._findPlace(v,a,c-e,b-h,k,f,g))return;break;case 8:if(this._findPlace(v,a,c,b-h,k,f,g))return;break;case 9:if(this._findPlace(v,a,c+e,b-h,k,f,g))return}},_generateLinePositions:function(v,c,b,a,k,f,g,e,h){var m=a*this._scale*a*this._scale,w,q;for(w=0;w<c.paths.length;w++){var p=c.paths[w],r=p.length,u=Math.floor((r-1)/2),x=0!==(r-1)%2?1:-1;"PlaceAtStart"==g&&(u=0,x=1);"PlaceAtEnd"==g&&(u=r-2,x=-1);for(;0<=
u&&u<r-1;){for(q=u;q<r;q++){var y=p[u][0],A=p[u][1],B=p[q][0]-y,C=p[q][1]-A;if(B*B+C*C>m){for(var d=Math.atan2(C,B);d>Math.PI/2;)d-=Math.PI;for(;d<-(Math.PI/2);)d+=Math.PI;var l=Math.sin(d),t=Math.cos(d),E=0,G=0;"Above"==e&&(E=f*l*this._scale,G=f*t*this._scale);"Below"==e&&(E=-f*l*this._scale,G=-f*t*this._scale);if(1==q-u){if(this._clipLine(y,A,p[q][0],p[q][1])){y=this._x1-this._x0;var n=this._y1-this._y0;if(y*y+n*n>m&&(q=Math.atan2(n,y),B=a/2+2*k,A=B*this._scale*Math.cos(q),B=B*this._scale*Math.sin(q),
"PlaceAtStart"==g?(y=this._x0+A,n=this._y0+B):"PlaceAtEnd"==g?(y=this._x1-A,n=this._y1-B):(y=this._x0+y/2,n=this._y0+n/2),this._findPlace(v,b,y-E,n+G,h?-q:0,a,k)))return}}else{var F=0;for(n=u;n<=q;n++)F=Math.max(F,Math.abs((p[n][1]-A)*t-(p[n][0]-y)*l));if(F<k&&this._findPlace(v,b,y+B/2-E,A+C/2+G,h?-d:0,a,k))return}break}}u+=x}}},_generatePolygonPositions:function(v,c,b,a,k,f,g){if("ManyLabels"==c)for(c=0;c<b.rings.length;c++){var e=b.rings[c];N.prototype.isClockwise(e)&&(e=this._findCentroid(e,this._xmin,
this._ymin,this._xmax,this._ymax),this._findPlace(v,a,e[0],e[1],k,f,g))}else{e=this._findCentroidForFeature(b,this._xmin,this._ymin,this._xmax,this._ymax);var h=e[1],m=0;for(c=0;10>c;c++){m+=g/4;e=this._findCentroidForFeature(b,this._xmin,h+(m-g/4),this._xmax,h+(m+g/4));if(this._findPlace(v,a,e[0],e[1],k,f,g))break;e=this._findCentroidForFeature(b,this._xmin,h-(m+g/4),this._xmax,h-(m-g/4));if(this._findPlace(v,a,e[0],e[1],k,f,g))break}}},_findCentroid:function(v,c,b,a,k){var f=v.length,g=[0,0],e=
0,h=v[0][0],m=v[0][1];h>a&&(h=a);h<c&&(h=c);m>k&&(m=k);m<b&&(m=b);for(var w=1;w<f-1;w++){var q=v[w][0],p=v[w][1],r=v[w+1][0],u=v[w+1][1];q>a&&(q=a);q<c&&(q=c);p>k&&(p=k);p<b&&(p=b);r>a&&(r=a);r<c&&(r=c);u>k&&(u=k);u<b&&(u=b);var x=(q-h)*(u-m)-(r-h)*(p-m);g[0]+=x*(h+q+r);g[1]+=x*(m+p+u);e+=x}g[0]/=3*e;g[1]/=3*e;if(isNaN(g[0])||isNaN(g[1]))return g;b=[];this._fillBuffer(v,b,g);g[0]=this._sortBuffer(b,g[0],c,a);return g},_findCentroidForFeature:function(v,c,b,a,k){for(var f,g=0,e=[0,0],h=0;h<v.rings.length;h++){var m=
v.rings[h],w=m.length,q=m[0][0],p=m[0][1];q>a&&(q=a);q<c&&(q=c);p>k&&(p=k);p<b&&(p=b);for(f=1;f<w-1;f++){var r=m[f][0],u=m[f][1],x=m[f+1][0],y=m[f+1][1];r>a&&(r=a);r<c&&(r=c);u>k&&(u=k);u<b&&(u=b);x>a&&(x=a);x<c&&(x=c);y>k&&(y=k);y<b&&(y=b);var A=(r-q)*(y-p)-(x-q)*(u-p);e[0]+=A*(q+r+x);e[1]+=A*(p+u+y);g+=A}}e[0]/=3*g;e[1]/=3*g;if(isNaN(e[0])||isNaN(e[1]))return e;b=[];for(f=0;f<v.rings.length;f++)this._fillBuffer(v.rings[f],b,e);e[0]=this._sortBuffer(b,e[0],c,a);return e},_fillBuffer:function(v,c,
b){for(var a=v.length-1,k=v[0][1]>=v[a][1]?1:-1,f=0;f<=a;f++){var g=f,e=f+1;f==a&&(e=0);var h=v[g][0];g=v[g][1];var m=v[e][0];e=v[e][1];var w=e>=g?1:-1;if(g<=b[1]&&b[1]<=e||e<=b[1]&&b[1]<=g)b[1]!=g&&b[1]!=e?(c.push((b[1]-g)*(m-h)/(e-g)+h),k=w):b[1]==g&&b[1]!=e?(k!=w&&c.push(h),k=w):b[1]!=g&&b[1]==e?(c.push(m),k=w):b[1]==g&&b[1]==e&&(1==k&&c.push(h),c.push(m),k=w)}},_sortBuffer:function(v,c,b,a){var k=v.length;v.sort();if(0<k){for(var f=0,g=c=0;g<k-1;g+=2){var e=Math.abs(v[g+1]-v[g]);!(v[g]<=b&&v[g+
1]<=b||v[g]>=a&&v[g+1]>=a)&&e>f&&(f=e,c=g)}k=v[c];v=v[c+1];k>a&&(k=a);k<b&&(k=b);v>a&&(v=a);v<b&&(v=b);c=(k+v)/2}return c},_findPlace:function(v,c,b,a,k,f,g){if(isNaN(b)||isNaN(a))return!1;for(var e=0;e<this._placedLabels.length;e++){var h=this._placedLabels[e].angle,m=this._placedLabels[e].width*this._scale,w=this._placedLabels[e].height*this._scale,q=this._placedLabels[e].x-b,p=this._placedLabels[e].y-a;if(0===k&&0===h){if(this._findPlace2(-f*this._scale,-g*this._scale,f*this._scale,g*this._scale,
q-m,p-w,q+m,p+w))return!1}else{var r=new K(-f*this._scale,-g*this._scale,f*this._scale,g*this._scale,null),u=0,x=1;0!==k&&(u=Math.sin(k),x=Math.cos(k));var y=q*x-p*u;q=q*u+p*x;h-=k;u=Math.sin(h);x=Math.cos(h);var A=-m*x- -w*u;p=-m*u+-w*x;h=+m*x- -w*u;var B=+m*u+-w*x;m=y+A;w=q-p;u=y+h;x=q-B;A=y-A;p=q+p;y-=h;q+=B;h=new N;h.addRing([[m,w],[u,x],[A,p],[y,q],[m,w]]);if(r.intersects(h))return!1}}for(;k>Math.PI/2;)k-=Math.PI;for(;k<-(Math.PI/2);)k+=Math.PI;e={};e.layer=v;e.text=c;e.angle=k;e.x=b;e.y=a;e.width=
f;e.height=g;this._placedLabels.push(e);return!0},_findPlace2:function(v,c,b,a,k,f,g,e){return(v>=k&&v<=g||b>=k&&b<=g||v<=k&&b>=g)&&(c>=f&&c<=e||a>=f&&a<=e||c<=f&&a>=e)?!0:!1},_clipLine:function(v,c,b,a){for(var k=this._code(v,c),f=this._code(b,a);0!==k||0!==f;){if(0!==(k&f))return!1;var g=b-v,e=a-c;0!==k?(v<this._xmin?(c+=e*(this._xmin-v)/g,v=this._xmin):v>this._xmax?(c+=e*(this._xmax-v)/g,v=this._xmax):c<this._ymin?(v+=g*(this._ymin-c)/e,c=this._ymin):c>this._ymax&&(v+=g*(this._ymax-c)/e,c=this._ymax),
k=this._code(v,c)):(b<this._xmin?(a+=e*(this._xmin-b)/g,b=this._xmin):b>this._xmax?(a+=e*(this._xmax-b)/g,b=this._xmax):a<this._ymin?(b+=g*(this._ymin-a)/e,a=this._ymin):a>this._ymax&&(b+=g*(this._ymax-a)/e,a=this._ymax),f=this._code(b,a))}this._x0=v;this._y0=c;this._x1=b;this._y1=a;return!0},_code:function(v,c){var b=0;v<this._xmin&&(b+=8);v>this._xmax&&(b+=4);c<this._ymin&&(b+=2);c>this._ymax&&(b+=1);return b}});O("extend-esri")&&H.setObject("layers.labelLayerUtils.DynamicLabelClass",J,M);return J})},
"esri/layers/labelLayerUtils/StaticLabelClass":function(){define("dojo/_base/declare dojo/_base/lang dojo/has ../../kernel ../../geometry/Extent ../../geometry/Point ../../geometry/Polygon".split(" "),function(J,H,O,M,K,N,v){return J(null,{declaredClass:"esri.layers.labelLayerUtils.StaticLabel",constructor:function(){this._preparedLabels=[];this._placedLabels=[];this._extent=null;this._ymax=this._ymin=this._xmax=this._xmin=0;this._scale=1;this._LINE_STEP_CONST=1.5;this._POLYGON_X_STEP_CONST=1;this._POLYGON_Y_STEP_CONST=
.75;this._OVERRUN=2},setMap:function(c,b){this._labelLayer=b;this._map=c;this._xmin=c.extent.xmin;this._xmax=c.extent.xmax;this._ymin=c.extent.ymin;this._ymax=c.extent.ymax;this._scale=(this._xmax-this._xmin)/c.width},_process:function(c){var b;this._preparedLabels=c;this._placedLabels=[];for(c=this._preparedLabels.length-1;0<=c;c--){var a=this._preparedLabels[c];var k=a.labelWidth;var f=a.labelHeight;var g=(b=a.options)&&b.lineLabelPlacement?b.lineLabelPlacement:"PlaceAtCenter";var e=b&&b.lineLabelPosition?
b.lineLabelPosition:"Above";var h=b&&b.labelRotation?b.labelRotation:!0;var m=Math.PI/180*a.angle;var w=b&&b.howManyLabels?b.howManyLabels:"OneLabel";var q=[];if("point"===a.geometry.type)this._generatePointPositions(a.geometry.x,a.geometry.y,a.text,m,k,f,a.symbolWidth,a.symbolHeight,b,q);else if("multipoint"===a.geometry.type)for(h=0;h<a.geometry.points.length;h++)this._generatePointPositions(a.geometry.points[h][0],a.geometry.points[h][1],a.text,m,k,f,a.symbolWidth,a.symbolHeight,b,q);else if("polyline"===
a.geometry.type)if("PlaceAtStart"===g)this._generateLinePositionsPlaceAtStart(a.geometry,!0,a.text,k,f,2*a.symbolHeight+f,g,e,h,q);else if("PlaceAtEnd"===g)this._generateLinePositionsPlaceAtEnd(a.geometry,!0,a.text,k,f,2*a.symbolHeight+f,g,e,h,q);else{b=[];var p=a.geometry.getExtent(),r=this._map.extent;if(p.getWidth()<k*this._scale/this._OVERRUN&&p.getHeight()<k*this._scale/this._OVERRUN)continue;else.5*p.getWidth()<r.getWidth()&&.5*p.getHeight()<r.getHeight()?this._generateLinePositionsPlaceAtCenter(a.geometry,
!1,.1*Math.min(this._map.width,this._map.height)*this._scale,a.text,k,f,2*a.symbolHeight+f,g,e,h,b):this._generateLinePositionsPlaceAtCenter(a.geometry,!0,.2*Math.min(this._map.width,this._map.height)*this._scale,a.text,k,f,2*a.symbolHeight+f,g,e,h,b);this._postSorting(r,b,q)}else if("polygon"===a.geometry.type){g=[];for(h=0;h<a.geometry.rings.length;h++)e=a.geometry.rings[h],1<a.geometry.rings.length&&!v.prototype.isClockwise(e)||(b=this._calcRingExtent(e),b.xmax-b.xmin<4*k*this._scale/this._OVERRUN&&
b.ymax-b.ymin<4*f*this._scale/this._OVERRUN||g.push(e));g.sort(function(u,x){return x.length-u.length});for(h=0;h<g.length;h++)this._generatePolygonPositionsForManyLabels(g[h],a.geometry.spatialReference,a.text,m,k,f,q)}for(h=0;h<q.length&&(g=q[h].x,e=q[h].y,void 0!==q[h].angle&&(m=q[h].angle),b=this._findPlace(a,a.text,g,e,m,k,f),"OneLabel"!==w||!b||!this._labelLayer._isWithinScreenArea(new N(g,e,a.geometry.spatialReference)));h++);}return this._placedLabels},_generatePointPositions:function(c,b,
a,k,f,g,e,h,m,w){a=m&&m.pointPriorities?m.pointPriorities:"AboveRight";f=(e+f)*this._scale;g=(h+g)*this._scale;switch(a.toLowerCase()){case "aboveleft":c-=f;b+=g;break;case "abovecenter":b+=g;break;case "aboveright":c+=f;b+=g;break;case "centerleft":c-=f;break;case "centercenter":break;case "centerright":c+=f;break;case "belowleft":c-=f;b-=g;break;case "belowcenter":b-=g;break;case "belowright":c+=f;b-=g;break;default:return}w.push({x:c,y:b})},_generateLinePositionsPlaceAtStart:function(c,b,a,k,f,
g,e,h,m,w){e=k*this._scale;var q=this._LINE_STEP_CONST*Math.min(this._map.width,this._map.height)*this._scale,p,r;for(p=0;p<c.paths.length;p++){var u=c.paths[p],x=e,y=0;for(r=0;r<u.length-1;r++){var A=u[r][0];var B=u[r][1];var C=u[r+1][0];var d=u[r+1][1];var l=C-A;var t=d-B;l=Math.sqrt(l*l+t*t);y+l>x?(y=this._generatePositionsOnLine(c.spatialReference,b,x,q,y,A,B,C,d,a,k,f,g,h,m,w),x=q):y+=l}}},_generateLinePositionsPlaceAtEnd:function(c,b,a,k,f,g,e,h,m,w){e=k*this._scale;var q=this._LINE_STEP_CONST*
Math.min(this._map.width,this._map.height)*this._scale,p,r;for(p=0;p<c.paths.length;p++){var u=c.paths[p],x=e,y=0;for(r=u.length-2;0<=r;r--){var A=u[r+1][0];var B=u[r+1][1];var C=u[r][0];var d=u[r][1];var l=C-A;var t=d-B;l=Math.sqrt(l*l+t*t);y+l>x?(y=this._generatePositionsOnLine(c.spatialReference,b,x,q,y,A,B,C,d,a,k,f,g,h,m,w),x=q):y+=l}}},_generateLinePositionsPlaceAtCenter:function(c,b,a,k,f,g,e,h,m,w,q){var p;for(h=0;h<c.paths.length;h++){var r=c.paths[h];if(!(2>r.length)){if(2==r.length){var u=
r[0];var x=r[1];var y=u[0];u=u[1];r=x[0];var A=x[1];var B=(r-y)*(r-y)+(A-u)*(A-u);var C=Math.atan2(A-u,r-y);A=Math.cos(C);C=Math.sin(C);r=[];var d=y;for(var l=u;(d-y)*(d-y)+(l-u)*(l-u)<B;)r.push([d,l]),d+=a/2*A,l+=a/2*C;r.push(x)}var t=0;for(x=0;x<r.length-1;x++)y=r[x][0],u=r[x][1],B=r[x+1][0],A=r[x+1][1],C=B-y,d=A-u,t+=Math.sqrt(C*C+d*d);for(x=l=0;x<r.length-1;x++){y=r[x][0];u=r[x][1];B=r[x+1][0];A=r[x+1][1];C=B-y;d=A-u;C=Math.sqrt(C*C+d*d);if(l+C>t/2)break;l+=C}x==r.length-1&&x--;y=r[x][0];u=r[x][1];
B=r[x+1][0];A=r[x+1][1];C=B-y;d=A-u;l=t/2-l;C=Math.atan2(d,C);d=y+l*Math.cos(C);C=u+l*Math.sin(C);y=this._angleAndShifts(y,u,B,A,e,m,w);q.push({x:d+y.shiftX,y:C+y.shiftY,angle:y.angle});t=d;var E=C;l=0;for(p=x;p<r.length-1;p++)p==x?(y=t,u=E):(y=r[p][0],u=r[p][1]),B=r[p+1][0],A=r[p+1][1],C=B-y,d=A-u,C=Math.sqrt(C*C+d*d),l=l+C>a?this._generatePositionsOnLine(c.spatialReference,b,a,a,l,y,u,B,A,k,f,g,e,m,w,q):l+C;l=0;for(p=x;0<=p;p--)p==x?(y=t,u=E):(y=r[p+1][0],u=r[p+1][1]),B=r[p][0],A=r[p][1],C=B-y,
d=A-u,C=Math.sqrt(C*C+d*d),l=l+C>a?this._generatePositionsOnLine(c.spatialReference,b,a,a,l,y,u,B,A,k,f,g,e,m,w,q):l+C}}},_generatePositionsOnLine:function(c,b,a,k,f,g,e,h,m,w,q,p,r,u,x,y){w=Math.atan2(m-e,h-g);q=g;p=e;var A=q,B=p;do if(f=a-f,q+=f*Math.cos(w),p+=f*Math.sin(w),this._belongs(q,p,g,e,h,m))f=this._angleAndShifts(g,e,h,m,r,u,x),a=q+f.shiftX,B=p+f.shiftY,b?this._labelLayer._isWithinScreenArea(new K(a,B,a,B,c))&&y.push({x:a,y:B,angle:f.angle}):y.push({x:a,y:B,angle:f.angle}),A=q,B=p,f=0,
a=k;else return c=h-A,m-=B,Math.sqrt(c*c+m*m);while(1)},_postSorting:function(c,b,a){if(c&&0<b.length){var k=.5*(c.xmin+c.xmax);c=.5*(c.ymin+c.ymax);for(var f=b[0].x,g=b[0].y,e=Math.sqrt((f-k)*(f-k)+(g-c)*(g-c)),h=b[0].angle,m=0;m<b.length;m++){var w=b[m].x,q=b[m].y,p=Math.sqrt((w-k)*(w-k)+(q-c)*(q-c));p<e&&(f=w,g=q,e=p,h=b[m].angle)}a.push({x:f,y:g,angle:h})}},_belongs:function(c,b,a,k,f,g){if(f==a&&g==k)return!1;if(f>a){if(c>f||c<a)return!1}else if(c<f||c>a)return!1;if(g>k){if(b>g||b<k)return!1}else if(b<
g||b>k)return!1;return!0},_angleAndShifts:function(c,b,a,k,f,g,e){for(c=Math.atan2(k-b,a-c);c>Math.PI/2;)c-=Math.PI;for(;c<-(Math.PI/2);)c+=Math.PI;k=Math.sin(c);var h=Math.cos(c);a=b=0;"Above"==g&&(b=f*k*this._scale,a=f*h*this._scale);"Below"==g&&(b=-f*k*this._scale,a=-f*h*this._scale);f=[];f.angle=e?-c:0;f.shiftX=-b;f.shiftY=a;return f},_generatePolygonPositionsForManyLabels:function(c,b,a,k,f,g,e){f=this._findCentroidForRing(c);k=f[0];var h=f[1],m=this._calcRingExtent(c);f=m.xmin;g=m.ymin;var w=
m.xmax;m=m.ymax;var q=(m-g)/(this._map.height*this._scale);if(!(10<(w-f)/(this._map.width*this._scale)&&10<q)){var p=!0;if(w-f>this._map.width*this._scale||m-g>this._map.height*this._scale)p=!1;q=this._map.width*this._scale*(p?.1875:.5);p=this._map.height*this._scale*(p?.1875:.5);var r=!0,u=!0,x=0;do{h+=(x%2?-1:1)*x*p;if(this._scanRingByX(a,b,c,k,h,f,w,q,e))break;h<g&&(r=!1);h>m&&(u=!1);x++}while(r||u)}},_scanRingByX:function(c,b,a,k,f,g,e,h,m){var w=!0,q=!0,p=0,r=1E3;do{k+=(p%2?-1:1)*p*h;var u=this._movePointInsideRing(a,
k,f),x=this._labelLayer._isWithinScreenArea(new K(u,f,u,f,b)),y=this._isPointWithinRing(c,a,u,f);if(x&&y)return m.push({x:u,y:f}),!0;k<g&&(w=!1);k>e&&(q=!1);p++;r--;if(0>=r)return!0}while(w||q);return!1},_movePointInsideRing:function(c,b,a){for(var k=[],f=c.length-1,g=c[0][1]>=c[f][1]?1:-1,e=0;e<=f;e++){var h=e,m=e+1;e==f&&(m=0);var w=c[h][0];h=c[h][1];var q=c[m][0];m=c[m][1];var p=m>=h?1:-1;if(h<=a&&a<=m||m<=a&&a<=h)a!=h&&a!=m?(k.push((a-h)*(q-w)/(m-h)+w),g=p):a==h&&a!=m?(g!=p&&k.push(w),g=p):a!=
h&&a==m?(k.push(q),g=p):a==h&&a==m&&(1==g&&k.push(w),k.push(q),g=p)}k.sort(function(r,u){return r-u});c=k.length;if(0<c){for(e=a=b=0;e<c-1;e+=2)f=Math.abs(k[e+1]-k[e]),f>b&&(b=f,a=e);b=(k[a]+k[a+1])/2}return b},_calcRingExtent:function(c){var b;var a=new K;for(b=0;b<c.length-1;b++){var k=c[b][0],f=c[b][1];if(void 0===a.xmin||k<a.xmin)a.xmin=k;if(void 0===a.ymin||f<a.ymin)a.ymin=f;if(void 0===a.xmax||k>a.xmax)a.xmax=k;if(void 0===a.ymax||f>a.ymax)a.ymax=f}return a},_isPointWithinPolygon:function(c,
b,a,k){var f;for(f=0;f<b.rings.length;f++)if(this._isPointWithinRing(c,b.rings[f],a,k))return!0;return!1},_isPointWithinRing:function(c,b,a,k){var f=[],g=b.length;for(c=0;c<g-1;c++){var e=b[c][0];var h=b[c][1];var m=b[c+1][0];var w=b[c+1][1];if(e!=m||h!=w){if(h==w)if(k==h)f.push(e);else continue;e==m?(h<w&&k>=h&&k<w&&f.push(e),h>w&&k<=h&&k>w&&f.push(e)):(h=(m-e)/(w-h)*(k-h)+e,e<m&&h>=e&&h<m&&f.push(h),e>m&&h<=e&&h>m&&f.push(h))}}f.sort(function(q,p){return q-p});for(c=0;c<f.length-1;c++)if(e=f[c],
m=f[c+1],a>=e&&a<m)if(c%2)break;else return!0;return!1},_findCentroidForRing:function(c){for(var b=c.length,a=[0,0],k=0,f=c[0][0],g=c[0][1],e=1;e<b-1;e++){var h=c[e][0],m=c[e][1],w=c[e+1][0],q=c[e+1][1],p=(h-f)*(q-g)-(w-f)*(m-g);a[0]+=p*(f+h+w);a[1]+=p*(g+m+q);k+=p}a[0]/=3*k;a[1]/=3*k;return a},_findCentroidForFeature:function(c){for(var b=0,a=[0,0],k=0;k<c.rings.length;k++)for(var f=c.rings[k],g=f.length,e=f[0][0],h=f[0][1],m=1;m<g-1;m++){var w=f[m][0],q=f[m][1],p=f[m+1][0],r=f[m+1][1],u=(w-e)*(r-
h)-(p-e)*(q-h);a[0]+=u*(e+w+p);a[1]+=u*(h+q+r);b+=u}a[0]/=3*b;a[1]/=3*b;return a},_findPlace:function(c,b,a,k,f,g,e){if(isNaN(a)||isNaN(k))return!1;for(var h=0;h<this._placedLabels.length;h++){var m=this._placedLabels[h].angle,w=this._placedLabels[h].width*this._scale,q=this._placedLabels[h].height*this._scale,p=this._placedLabels[h].x-a,r=this._placedLabels[h].y-k;if(0===f&&0===m){if(this._findPlace2(-g*this._scale,-e*this._scale,g*this._scale,e*this._scale,p-w,r-q,p+w,r+q))return!1}else{var u=new K(-g*
this._scale,-e*this._scale,g*this._scale,e*this._scale,null),x=0,y=1;0!==f&&(x=Math.sin(f),y=Math.cos(f));var A=p*y-r*x;p=p*x+r*y;m-=f;x=Math.sin(m);y=Math.cos(m);var B=-w*y- -q*x;r=-w*x+-q*y;m=+w*y- -q*x;var C=+w*x+-q*y;w=A+B;q=p-r;x=A+m;y=p-C;B=A-B;r=p+r;A-=m;p+=C;m=new v;m.addRing([[w,q],[x,y],[B,r],[A,p],[w,q]]);if(u.intersects(m))return!1}}for(;f>Math.PI/2;)f-=Math.PI;for(;f<-(Math.PI/2);)f+=Math.PI;h={};h.layer=c;h.text=b;h.angle=f;h.x=a;h.y=k;h.width=g;h.height=e;this._placedLabels.push(h);
return!0},_findPlace2:function(c,b,a,k,f,g,e,h){return(c>=f&&c<=e||a>=f&&a<=e||c<=f&&a>=e)&&(b>=g&&b<=h||k>=g&&k<=h||b<=g&&k>=h)?!0:!1}})})},"*noref":1}});
define("esri/layers/LabelLayer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/i18n!dojo/cldr/nls/number dojo/number dojo/has dojox/gfx/_base ../kernel ../lang ../graphic ../PopupInfo ../ArcadeExpression ../core/timerUtils ../symbols/TextSymbol ../symbols/ShieldLabelSymbol ../geometry/Extent ../geometry/Point ../geometry/webMercatorUtils ../renderers/SimpleRenderer ../arcadeProfiles/labelingProfile ./labelLayerUtils/DynamicLabelClass ./labelLayerUtils/StaticLabelClass ./GraphicsLayer ./LabelClass".split(" "),function(J,
H,O,M,K,N,v,c,b,a,k,f,g,e,h,m,w,q,p,r,u,x,y,A,B){function C(d){return"sizeInfo"===d.type}J=J(A,{declaredClass:"esri.layers.LabelLayer",constructor:function(d){this._refreshLabels=H.hitch(this,this._refreshLabels);this.id="labels";this.featureLayers=[];this._featureLayerInfos=[];this._preparedLabels=[];this._engineType="STATIC";this._mapEventHandlers=[];d&&(d.id&&(this.id=d.id),d.mode&&(this._engineType="DYNAMIC"===d.mode.toUpperCase()?"DYNAMIC":"STATIC"))},_setMap:function(d){this._mapEventHandlers.push(d.on("extent-change",
H.hitch(this,"_handleLevelChange")));var l=this.inherited(arguments);this.refresh();return l},_unsetMap:function(){var d;for(d=0;d<this._mapEventHandlers.length;d++)M.disconnect(this._mapEventHandlers[d]);this.refresh();e.clearTimeout(this._refreshHandle);this._refreshHandle=null;this.inherited(arguments)},setAlgorithmType:function(d){this._engineType=d&&"DYNAMIC"===d.toUpperCase()?"DYNAMIC":"STATIC";this.refresh()},addFeatureLayer:function(d,l,t,E){if(!this.getFeatureLayer(d.layerId)){var G=[];G.push(d.on("update-end",
H.hitch(this,"refresh")));G.push(d.on("suspend",H.hitch(this,"refresh")));G.push(d.on("resume",H.hitch(this,"refresh")));G.push(d.on("edits-complete",H.hitch(this,"refresh")));G.push(d.on("labeling-info-change",H.hitch(this,"refresh")));G.push(d.on("time-extent-change",H.hitch(this,"refresh")));G.push(d.on("show-labels-change",H.hitch(this,"refresh")));G.push(d.on("feature-reduction-change",H.hitch(this,"refresh")));this._featureLayerInfos.push({FeatureLayer:d,LabelExpressionInfo:t,LabelingOptions:E,
LabelRenderer:l,EventHandlers:G});this.featureLayers.push(d);this.refresh()}},getFeatureLayer:function(d){var l;for(l=0;l<this.featureLayers.length;l++){var t=this.featureLayers[l];if(void 0!==t&&t.id==d)return t}return null},removeFeatureLayer:function(d){d=this.getFeatureLayer(d);if(void 0!==d){var l=O.indexOf(this.featureLayers,d);if(-1<l){this.featureLayers.splice(l,1);for(d=0;d<this._featureLayerInfos[l].EventHandlers.length;d++)M.disconnect(this._featureLayerInfos[l].EventHandlers[d]);this._featureLayerInfos.splice(l,
1);this.refresh()}}},removeAllFeatureLayers:function(){var d;for(d=0;d<this.featureLayers.length;d++){for(var l=0;l<this._featureLayerInfos[d].EventHandlers.length;l++)M.disconnect(this._featureLayerInfos[d].EventHandlers[l]);this.featureLayers=[];this._featureLayerInfos=[]}this.refresh()},getFeatureLayers:function(){return this.featureLayers},getFeatureLayerInfo:function(d){var l;for(l=0;l<this.featureLayers.length;l++){var t=this.featureLayers[l];if(void 0!==t&&t.id==d)return this._featureLayerInfos[l]}return null},
refresh:function(){null==this._refreshHandle&&(this._refreshHandle=e.setTimeout(this._refreshLabels,e.priority.LOW))},_handleLevelChange:function(d){d.levelChange&&this.clear();this.refresh()},_refreshLabels:function(d){this._refreshHandle=null;var l=[],t,E="DYNAMIC"===this._engineType?new x:new y;if(this._map){E.setMap(this._map,this);this._preparedLabels=[];for(d=0;d<this.featureLayers.length;d++){var G=this.featureLayers[d];if(G.visible&&G.showLabels&&G.visibleAtMapScale&&!G._suspended){var n=
this._featureLayerInfos[d];var F=this._convertOptions(null);if(n.LabelRenderer){if(l=G.labelingInfo)if(t=l[0]){var D=this._getLabelExpression(t);F=this._convertOptions(t)}var z=n.LabelRenderer;n.LabelExpressionInfo&&(D=n.LabelExpressionInfo);n.LabelingOptions&&(F=this._convertOptions(null),void 0!==n.LabelingOptions.pointPriorities&&(l=n.LabelingOptions.pointPriorities,F.pointPriorities="above-center"==l||"AboveCenter"==l||"esriServerPointLabelPlacementAboveCenter"==l?"AboveCenter":"above-left"==
l||"AboveLeft"==l||"esriServerPointLabelPlacementAboveLeft"==l?"AboveLeft":"above-right"==l||"AboveRight"==l||"esriServerPointLabelPlacementAboveRight"==l?"AboveRight":"below-center"==l||"BelowCenter"==l||"esriServerPointLabelPlacementBelowCenter"==l?"BelowCenter":"below-left"==l||"BelowLeft"==l||"esriServerPointLabelPlacementBelowLeft"==l?"BelowLeft":"below-right"==l||"BelowRight"==l||"esriServerPointLabelPlacementBelowRight"==l?"BelowRight":"center-center"==l||"CenterCenter"==l||"esriServerPointLabelPlacementCenterCenter"==
l?"CenterCenter":"center-left"==l||"CenterLeft"==l||"esriServerPointLabelPlacementCenterLeft"==l?"CenterLeft":"center-right"==l||"CenterRight"==l||"esriServerPointLabelPlacementCenterRight"==l?"CenterRight":"AboveRight"),void 0!==n.LabelingOptions.lineLabelPlacement&&(F.lineLabelPlacement=n.LabelingOptions.lineLabelPlacement),void 0!==n.LabelingOptions.lineLabelPosition&&(F.lineLabelPosition=n.LabelingOptions.lineLabelPosition),void 0!==n.LabelingOptions.labelRotation&&(F.labelRotation=n.LabelingOptions.labelRotation),
void 0!==n.LabelingOptions.howManyLabels&&(F.howManyLabels=n.LabelingOptions.howManyLabels));z instanceof B&&(D=this._getLabelExpression(z),z=new r(z.symbol),F=this._convertOptions(z));this._addLabels(G,z,D,F)}else if(l=G.labelingInfo)for(n=l.length-1;0<=n;n--)if(t=l[n])z=new B(t instanceof B?t.toJson():t),D=this._getLabelExpression(t),F=this._convertOptions(t),this._addLabels(G,z,D,F)}}D=E._process(this._preparedLabels);this.clear();this.drawLabels(this._map,D)}},drawLabels:function(d,l){this._scale=
(d.extent.xmax-d.extent.xmin)/d.width;var t;for(t=0;t<l.length;t++){var E=l[t],G=E.x,n=E.y,F=E.text,D=E.angle,z=E.layer.labelSymbol;"polyline"==E.layer.geometry.type&&E.layer.options.labelRotation&&z.setAngle(180/Math.PI*D);z.setText(F);z instanceof h&&(F=z.getHeight(),G-=.25*F*this._scale*Math.sin(D),n-=.33*F*this._scale);D=new k(new q(G,n,d.extent.spatialReference));D.setParentGraphic(E.layer.graphic);D.setSymbol(z);this.add(D)}},_addLabels:function(d,l,t,E){var G;if(this._isWithinScaleRange(l.minScale,
l.maxScale)&&t&&""!==t){var n=this._map,F=!d.url&&!n.spatialReference.equals(d.spatialReference);for(G=0;G<d.graphics.length;G++){var D=d.graphics[G];if(!1!==D.visible&&!D._suspended){var z=D.geometry;if(F){if(!p.canProject(z,n))continue;z=p.project(z,n)}if(z&&this._isWhere(l.where,D.attributes)&&this._isWithinScreenArea(z)){var I=this._buildLabelText(t,D,d.fields,E);this._addLabel(I,l,d.renderer,D,E,z,n)}}}}},_isWithinScreenArea:function(d){d="point"===d.type?new w(d.x,d.y,d.x,d.y,d.spatialReference):
d.getExtent();if(void 0===d)return!1;d=this._intersects(this._map,d);return null===d||0===d.length?!1:!0},_isWithinScaleRange:function(d,l){var t=this._map.getScale();return 0<d&&t>=d||0<l&&t<l?!1:!0},_isWhere:function(d,l){try{if(!d)return!0;if(d){var t=d.split(" ");if(3===t.length)return this._sqlEquation(l[this._removeQuotes(t[0])],t[1],this._removeQuotes(t[2]));if(7===t.length){var E=this._sqlEquation(l[this._removeQuotes(t[0])],t[1],this._removeQuotes(t[2])),G=t[3],n=this._sqlEquation(l[this._removeQuotes(t[4])],
t[5],this._removeQuotes(t[6]));switch(G){case "AND":return E&&n;case "OR":return E||n}}}return!1}catch(F){console.log("Error.: can't parse \x3d "+d)}},_sqlEquation:function(d,l,t){switch(l){case "\x3d":return d==t?!0:!1;case "\x3c\x3e":return d!=t?!0:!1;case "\x3e":return d>t?!0:!1;case "\x3e\x3d":return d>=t?!0:!1;case "\x3c":return d<t?!0:!1;case "\x3c\x3d":return d<=t?!0:!1}return!1},_removeQuotes:function(d){var l=d.indexOf('"'),t=d.lastIndexOf('"');if(-1!=l&&-1!=t)return d.substr(1,d.length-
2);l=d.indexOf("'");t=d.lastIndexOf("'");return-1!=l&&-1!=t?d.substr(1,d.length-2):d},_getSizeInfo:function(d){return d?d.sizeInfo||O.filter(d.visualVariables,C)[0]:null},_addLabel:function(d,l,t,E,G,n,F){var D;if(d&&""!==H.trim(d)&&l){d=d.replace(/[\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/g," ");var z=l.getSymbol(E);z instanceof h?(z=new h(z.toJson()),z.setVerticalAlignment("baseline"),z.setHorizontalAlignment("center")):z=z instanceof m?new m(z.toJson()):new h;z.setText(d);
l.symbol=z;if(D=this._getProportionalSize(l.sizeInfo,E.attributes))z instanceof h?z.setSize(D):z instanceof m&&(z.setWidth(D),z.setHeight(D));var I=D=0;if(t){var L=t.getSymbol(E);var P=this._getSizeInfo(t);if((t=P?t.getSize(E,{sizeInfo:P,resolution:F.getResolutionInMeters()}):E.size)&&null!==t)D=I=t;else if(L)if("simplemarkersymbol"==L.type)I=D=L.size;else if("picturemarkersymbol"==L.type)D=L.width,I=L.height;else if("simplelinesymbol"==L.type||"cartographiclinesymbol"==L.type)D=L.width}t={};t.graphic=
E;t.options=G;t.geometry=n;t.labelRenderer=l;t.labelSymbol=z;t.labelWidth=z.getWidth()/2;t.labelHeight=z.getHeight()/2;t.symbolWidth=c.normalizedLength(D)/2;t.symbolHeight=c.normalizedLength(I)/2;t.text=d;t.angle=z.angle;this._preparedLabels.push(t)}},_buildLabelText:function(d,l,t,E){if(E.hasExpression)return d=u.getEvalOptions({expression:E.arcadeExpr,feature:l,layer:l.getLayer(),spatialReference:this._map.spatialReference}),l=l.evaluateExpression(E.arcadeExpr,d),a.isDefined(l)?""+l:"";var G=l.attributes;
return d.replace(/{[^}]*}/g,function(n){var F,D=n;for(F=0;F<t.length;F++)if("{"+t[F].name+"}"==n){D=G[t[F].name];var z=t[F].domain;if(z&&H.isObject(z)){if("codedValue"==z.type&&E.useCodedValues)for(F=D,n=0;n<z.codedValues.length;n++)if(z.codedValues[n].code==F){D=z.codedValues[n].name;break}break}z=t[F].type;if(E.fieldInfos){var I=E.fieldInfos;for(F=0;F<I.length;F++)if("{"+I[F].fieldName+"}"==n){n=I[F].format;"esriFieldTypeDate"==z?D=a.substitute({myKey:D},"${myKey}",{format:{myKey:H.mixin({formatType:"DateFormat"},
f.prototype._dateFormatsJson[n&&n.dateFormat||"shortDate"])}}):"esriFieldTypeInteger"!=z&&"esriFieldTypeSingle"!=z&&"esriFieldTypeSmallInteger"!=z&&"esriFieldTypeLong"!=z&&"esriFieldTypeDouble"!=z||!n||(D=N.format(D,{places:n.places}),n.digitSeparator||K.group&&(D=D.replace(new RegExp("\\"+K.group,"g"),"")));break}}break}else D="";return null==D?"":D})},_getLabelExpression:function(d){var l="";d.labelExpressionInfo?l=d.labelExpressionInfo.value||d.labelExpressionInfo.expression:this._validSyntax(d.labelExpression)&&
(l=this._convertLabelExpression(d.labelExpression));return l},_validSyntax:function(d){return/^(\s*\[[^\]]+\]\s*)+$/i.test(d)},_convertLabelExpression:function(d){return d.replace(/\[/g,"{").replace(/\]/g,"}")},_getProportionalSize:function(d,l){if(!d)return null;l=a.substitute(l,"${"+d.field+"}",{first:!0});return!(d.minSize&&d.maxSize&&d.minDataValue&&d.maxDataValue&&l)||0>=d.maxDataValue-d.minDataValue?null:(d.maxSize-d.minSize)/(d.maxDataValue-d.minDataValue)*(l-d.minDataValue)+d.minSize},_convertOptions:function(d){var l=
!0,t="shortDate",E=null,G=null,n="",F=!0;if(d&&(d.format&&(t=d.format.dateFormat,E={places:d.format.places,digitSeparator:d.format.digitSeparator}),G=d.fieldInfos,n=d.labelPlacement,null!=d.useCodedValues&&(l=d.useCodedValues),d=d.labelExpressionInfo)){var D=d.expression;if(D&&!d.value){var z=!0;var I=new g({expression:D,returnType:"string",profile:u})}}if("always-horizontal"==n||"esriServerPolygonPlacementAlwaysHorizontal"==n)F=!1;return{useCodedValues:l,dateFormat:t,numberFormat:E,fieldInfos:G,
pointPriorities:"above-center"==n||"esriServerPointLabelPlacementAboveCenter"==n?"AboveCenter":"above-left"==n||"esriServerPointLabelPlacementAboveLeft"==n?"AboveLeft":"above-right"==n||"esriServerPointLabelPlacementAboveRight"==n?"AboveRight":"below-center"==n||"esriServerPointLabelPlacementBelowCenter"==n?"BelowCenter":"below-left"==n||"esriServerPointLabelPlacementBelowLeft"==n?"BelowLeft":"below-right"==n||"esriServerPointLabelPlacementBelowRight"==n?"BelowRight":"center-center"==n||"esriServerPointLabelPlacementCenterCenter"==
n?"CenterCenter":"center-left"==n||"esriServerPointLabelPlacementCenterLeft"==n?"CenterLeft":"center-right"==n||"esriServerPointLabelPlacementCenterRight"==n?"CenterRight":"AboveRight",lineLabelPlacement:"above-start"==n||"below-start"==n||"center-start"==n?"PlaceAtStart":"above-end"==n||"below-end"==n||"center-end"==n?"PlaceAtEnd":"PlaceAtCenter",lineLabelPosition:"above-after"==n||"esriServerLinePlacementAboveAfter"==n||"above-along"==n||"esriServerLinePlacementAboveAlong"==n||"above-before"==n||
"esriServerLinePlacementAboveBefore"==n||"above-start"==n||"esriServerLinePlacementAboveStart"==n||"above-end"==n||"esriServerLinePlacementAboveEnd"==n?"Above":"below-after"==n||"esriServerLinePlacementBelowAfter"==n||"below-along"==n||"esriServerLinePlacementBelowAlong"==n||"below-before"==n||"esriServerLinePlacementBelowBefore"==n||"below-start"==n||"esriServerLinePlacementBelowStart"==n||"below-end"==n||"esriServerLinePlacementBelowEnd"==n?"Below":"center-after"==n||"esriServerLinePlacementCenterAfter"==
n||"center-along"==n||"esriServerLinePlacementCenterAlong"==n||"center-before"==n||"esriServerLinePlacementCenterBefore"==n||"center-start"==n||"esriServerLinePlacementCenterStart"==n||"center-end"==n||"esriServerLinePlacementCenterEnd"==n?"OnLine":"Above",labelRotation:F,howManyLabels:"OneLabel",hasExpression:z,arcadeExpr:I}}});v("extend-esri")&&H.setObject("layers.LabelLayer",J,b);return J});