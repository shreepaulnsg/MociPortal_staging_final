// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/lineMeshUtil","require exports ../../../../core/screenUtils ./color ./LineTess ./MeshData ./number ./TileClipper ./Utils ./visualVariablesUtils".split(" "),function(ia,X,ba,ca,f,da,L,ea,fa,ha){function Y(n,g,h,G,x){"butt"===x?r.buttCap(n,g,h):"round"===x?r.roundCap(n,g,h,G,f.getNumberOfSlices(Math.PI),G===f.CapPosition.START?-1:1):"square"===x?r.squareCap(n,g,h,G):(r.buttCap(n,g,h),console.error("Unknown cap type!"))}function U(n,g,h,G,x,y,H,d,
J,k,C,I){var D=0,c;for(c=0;c<C.vectors.count;++c){var E=C.vectors.items[c].vector[0],A=C.vectors.items[c].vector[1],t=C.vectors.items[c].texCoords[0],v=C.vectors.items[c].texCoords[1],p=C.vectors.items[c].direction[0],q=C.vectors.items[c].direction[1],e=J+D;++D;I.push(L.i1616to32(n,g),H,G,L.i8888to32(Math.round(31*E),Math.round(31*A),Math.round(31*t),Math.round(31*v)),L.i1616to32(h,31*d),L.i1616to32(x[0],x[1]),L.i1616to32(y[0],y[1]),L.i8888to32(Math.round(31*p),Math.round(31*q),0,0));k&&I.push(k.size,
k.color,k.opacity);C.vectors.items[c].base={index:e,point:[n,g]}}return D}function Z(n,g,h){r.bridge(Q,n,g);for(n=0;n<Q.count;++n)g=Q.items[n],h.push(g.v1.base.index,g.v2.base.index,g.v3.base.index)}Object.defineProperty(X,"__esModule",{value:!0});var r=new f.Tessellator({distanceAlongCorrection:!0}),R=new Float32Array(1),V=new Uint32Array(R.buffer),S=[f.allocExtrudeVectors(),f.allocExtrudeVectors()],aa=f.allocExtrudeVectors(),Q=f.allocTriangles(20),W=f.allocTriangles(20),N=new ea.TileClipper(0,0,
0,1,8);N.setExtent(512);X.createLineMeshData=function(n,g,h,G,x,y,H){var d=null!=G?G.spriteMosaicItem:null,J=y.geometry,k=!fa.isPictureSymbol(H)&&H.color?ca.copyAndPremultiply(H.color):[255,255,255,1];G=L.numTo32(n);x=Math.round(x*ba.pt2px(0<H.width?.5*(H.width+1/x):0));H=null!=d;var C=h.vvColor||h.vvOpacity||h.vvSizeMinMaxValue||h.vvSizeScaleStops||h.vvSizeFieldStops||h.vvSizeUnitValue,I=0,D=0,c=0;if(C){c=g.vvFields;I=c.opacity?g.getValue(y,c.opacity):0;D=c.color?g.getValue(y,c.color):0;c=c.size&&
!h.vvSizeScaleStops?g.getValue(y,c.size):0;h.vvSizeUnitValue&&(c=ha.getVisualVariableSizeValueRepresentationRatio(c,g.vvRanges.size.unitValue.valueRepresentation));if(null===c||isNaN(c))c=NaN;if(null===D||isNaN(D))D=NaN;if(null===I||isNaN(I))I=NaN;R[0]=c;c=V[0];R[0]=I;I=V[0];R[0]=D;D=V[0]}g=L.i8888to32(k[0],k[1],k[2],k[3]);h=[0,0];y=[0,0];if(d){k=d.rect.x;var E=d.rect.y,A=d.width;d=d.height;h[0]=k+1;h[1]=E+1;y[0]=k+1+A;y[1]=E+1+d}k=J.rings||J.paths;J=[];E=k.length;A=0;for(var t=!1;A<E;){var v=k[A];
d=[];N.reset(2);var p=v[0][0],q=v[0][1];if(t)N.moveTo(p,q);else{if(-8>p||520<p||-8>q||520<q){t=!0;continue}d.push({x:p,y:q})}for(var e=!1,M=v.length,u=1;u<M;++u)if(p+=v[u][0],q+=v[u][1],t)N.lineTo(p,q);else{if(-8>p||520<p||-8>q||520<q){e=!0;break}d.push({x:p,y:q})}if(e)t=!0;else{if(t){if(t=N.resultWithStarts())for(d=0;d<t.length;d++)J.push(t[d])}else J.push({line:d,start:0});A++;t=!1}}k=0;E=[];A=[];for(t=0;t<J.length;t++)if(q=J[t],d=q.line,!(2>d.length)){v=d.length;e=d[0];M=d[v-1];p=M.x-e.x;e=M.y-
e.y;p=1E-6>p*p+e*e;var K=q.start%65535;q=S[1];e=void 0;M=C?{size:c,color:D,opacity:I}:null;for(e=0;e<v;++e){var F=d[e];u=q===S[e%2]?S[(e+1)%2]:S[e%2];if(e<v-1||!p||H){a:{var l=u,m=e,z=d,w=v,T=p,B=z[m],a=[void 0,void 0],b=[void 0,void 0];if(0<m&&m<w-1){var O=z[(m+w-1)%w],P=z[(m+1)%w];f.normalize(a,[B.x-O.x,B.y-O.y]);f.normalize(b,[P.x-B.x,P.y-B.y])}else if(0===m)P=z[(m+1)%w],f.normalize(b,[P.x-B.x,P.y-B.y]),T?(z=z[w-2],f.normalize(a,[B.x-z.x,B.y-z.y])):a=b;else if(m===w-1)O=z[(m+w-1)%w],f.normalize(a,
[B.x-O.x,B.y-O.y]),T?(z=z[1],f.normalize(b,[z.x-B.x,z.y-B.y])):b=a;else{console.error("Vertex index 'i' out of range.");break a}T||0!==m?T||m!==w-1?(m=f.getRads(a,b),m>Math.PI-.05?r.rectJoin(l,a,b):.1>m?.05>m?r.fastMiterJoin(l,a,b):m<f.MITER_SAFE_RADS?r.miterJoin(l,a,b):r.bevelJoin(l,a,b,f.SYSTEM_MAG_LIMIT):(w=f.getNumberOfSlices(m),2.3>m?2>w||.5>m?r.bevelJoin(l,a,b,1):r.roundJoin(l,a,b,w):r.unitRoundJoin(l,a,b,w))):Y(l,a,b,f.CapPosition.END,"round"):Y(l,a,b,f.CapPosition.START,"round")}k+=U(F.x,
F.y,K,g,h,y,G,x,k,M,u,E);if(u.capCenter&&(!p||e!==v-1))for(b=void 0,a=A,r.pie(W,u),b=0;b<W.count;++b)l=W.items[b],a.push(l.v1.base.index,l.v2.base.index,l.v3.base.index);p&&0===e&&!H&&f.copyExtrudeVectors(aa,u)}else f.copyExtrudeVectors(u,aa);0<e&&Z(q,u,A);e<v-1&&(a=d[e+1],b=[a.x-F.x,a.y-F.y],l=f.length(b),b=[b[0]/l,b[1]/l],l=K+l,65535<l?(m=(65535-K)/(l-K),K=F.x+(a.x-F.x)*m,F=F.y+(a.y-F.y)*m,a=q,r.buttCap(a,b,b),k+=U(K,F,65535,g,h,y,n,x,k,M,a,E),r.bridge(Q,u,a),Z(u,a,A),r.buttCap(a,b,b),k+=U(K,F,
0,g,h,y,n,x,k,M,a,E),K=l-65535):(K=l,q=u))}}n=new da;n.update({geometry:E},k,A);return n}});