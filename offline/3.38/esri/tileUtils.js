// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tileUtils",["dojo/_base/array","dojo/has","./kernel","./geometry/Point","./geometry/Extent"],function(v,w,x,y,r){var u={_addFrameInfo:function(b,c){var a,e,f=2*c.origin[1],g=c.origin[0],h=b.origin.x,d=b.width,k;v.forEach(b.lods,function(m){a=Math.round(f/m.resolution);e=Math.ceil(a/d);k=Math.floor((g-h)/(d*m.resolution));m._frameInfo||(m._frameInfo=[e,k,k+e-1,a])})},getContainingTileCoords:function(b,c,a){var e=b.origin;a=a.resolution;return{row:Math.floor((e.y-c.y)/(b.height*a)),col:Math.floor((c.x-
e.x)/(b.width*a))}},getCandidateTileInfo:function(b,c,a){var e=b.width;var f=b.height,g=a.xmax-a.xmin,h=a.ymax-a.ymin,d=b.__tileInfo===c,k=d?b.getMinZoom():-1;d=d?b.getMaxZoom():-1;var m=-1,n=c.lods,p=Math.abs,q;d=-1<d?d:n.length-1;for(k=-1<k?k:0;k<=d;k++)if(q=n[k]){var t=g>h?p(h-f*q.resolution):p(g-e*q.resolution);if(0>m||t<=m){var l=q;m=t}else break}e=l;l=e.resolution;f=(a.xmin+a.xmax)/2;g=(a.ymin+a.ymax)/2;h=b.width/2*l;l*=b.height/2;f=new r(f-h,g-l,f+h,g+l,a.spatialReference);a=new y(f.xmin,f.ymax,
a.spatialReference);d=e.resolution;h=c.width;g=c.height;c=c.origin;b=b.__visibleDelta;l=Math.floor;n=h*d;p=g*d;d=l((c.y-a.y)/p);m=l((a.x-c.x)/n);k=c.y-d*p;c=l(Math.abs((a.x-(c.x+m*n))*h/n))+b.x;b=l(Math.abs((a.y-k)*g/p))+b.y;return{tile:{point:a,coords:{row:d,col:m},offsets:{x:c,y:b}},lod:e,extent:f}},getTileExtent:function(b,c,a,e){var f=b.origin;c=b.lods[c].resolution;var g=b.width,h=b.height;return new r(e*c*g+f.x,f.y-(a+1)*c*h,(e+1)*c*g+f.x,f.y-a*c*h,b.spatialReference)}};w("extend-esri")&&(x.TileUtils=
u);return u});