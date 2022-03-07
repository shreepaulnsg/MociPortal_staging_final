// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterFormats/JpgPlus",["dojo/_base/declare","./Zlib","./Jpg"],function(m,n,p){return m(null,{constructor:function(){},decode:function(a){var c=new Uint8Array(a);a=new p;a.parse(c);var g=a.numComponents,f=a.getData(a.width,a.height,!0),h=a.width*a.height,k=a.eof,b=0,d=0,e=0;if(k<c.length-1){d=(new n(c.subarray(k))).getBytes();var l=new Uint8Array(h);for(b=c=0;b<d.length;b++)for(e=7;0<=e;e--)l[c++]=d[b]>>e&1}c=[];if(1===g)c=[f,f,f];else{for(b=0;3>b;b++)g=new Uint8Array(h),c.push(g);
for(d=e=0;d<h;d++)for(b=0;3>b;b++)c[b][d]=f[e++]}return{width:a.width,height:a.height,pixels:c,mask:l}}})});