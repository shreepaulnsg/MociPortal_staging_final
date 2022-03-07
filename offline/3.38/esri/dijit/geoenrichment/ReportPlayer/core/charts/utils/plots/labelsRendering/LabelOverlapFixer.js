// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/labelsRendering/LabelOverlapFixer",["dojo/_base/lang"],function(E){function C(c,p,h,m){for(var u,f=0,b=p.length;f<b;f++){var v=p[f],g;if(g=v!==c){var q=c;g=v;var w=m;if(1===h)var k=!1;else{var x=q.w*h/2,d=g.w*h/2;k=q.x+x;x=q.x+q.w-x;var a=g.x+d;d=g.x+g.w-d;k=a>=k&&a<=x||k>=a&&k<=d}k&&(1===w?k=!1:(d=q.h*w/2,k=g.h*w/2,w=q.y+d,q=q.y+q.h-d,d=g.y+k,g=g.y+g.h-k,k=d>=w&&d<=q||w>=d&&w<=g));g=k}g&&(u=u||[],u.push(v))}return u}function F(c,
p,h){var m={boxWithMaxOverlappingNeighbours:null},u=0;c.forEach(function(f){var b=C(f,c,p,h);f._numOverlaps=b?b.length:0;f._overlappingBoxes=b;f._numOverlaps>u&&(u=f._numOverlaps,m.boxWithMaxOverlappingNeighbours=f)});return m}var D={},G={hideIncorrectLabels:function(c,p,h,m,u){for(c=c.filter(function(b,v){v=p[b._index];if(Math.abs(v.x-b.x)>2*b.w||Math.abs(v.y-b.y)>3*b.h||b.x<h.minX-3||b.x>h.maxX-b.w+3||b.y<h.minY-3||b.y>h.maxY-b.h+3)b.hidden=!0;return!b.hidden});;){var f=F(c,m,u);if(f.boxWithMaxOverlappingNeighbours)f.boxWithMaxOverlappingNeighbours.hidden=
!0,f=c.indexOf(f.boxWithMaxOverlappingNeighbours),-1!==f&&c.splice(f,1);else break}}};D.fixLabelsOverlap=function(c,p,h,m,u){function f(){c.sort(function(z,A){return z.x-A.x});v&&c.sort(function(z,A){return A.y-z.y});for(var a=0,y=c.length;a<y;a++){var n=c[a],B=C(n,c,w,k);if(B){a=0;for(y=B.length;a<y;a++){var e=B[a],l=v?-(e.y+e.h-n.y+q):!1;!1!==l&&e.y+l<d.minY-3&&(l=!1);var r=b&&n.x<e.x?n.x+n.w-e.x+g:!1;!1!==r&&e.x+r>d.maxX-e.w+3&&(r=!1);var t=b&&n.x>e.x?e.x+e.w-n.x+g:!1;!1!==t&&n.x+t>d.maxX-n.w+
3&&(t=!1);if(!1!==l||!1!==r||!1!==t)l&&!1===r&&!1===t?e.y+=l:!1===l&&r&&!1===t?e.x+=r:!1===l&&!1===r&&t?n.x+=t:l&&r&&!1===t?-l<r?e.y+=l:e.x+=r:l&&!1===r&&t&&(-l<t?e.y+=l:n.x+=t)}return!0}}}var b=m.allowXShift,v=m.allowYShift,g=m.xGap||0,q=m.yGap||0,w=m.xTolerance||0,k=m.yTolerance||0,x={};c.forEach(function(a,y){x[y]=E.mixin({},a);a._index=y});var d={minX:h.l+1,maxX:p.width-h.r,minY:h.t,maxY:p.height-h.b+11};c.forEach(function(a){a.x=Math.max(a.x,d.minX);a.x=Math.min(a.x+a.w,d.maxX)-a.w;a.y=Math.max(a.y,
d.minY);a.y=Math.min(a.y+a.h,d.maxY)-a.h});for(p=0;50>p&&f();p++);G.hideIncorrectLabels(c,x,d,w,k)};return D});