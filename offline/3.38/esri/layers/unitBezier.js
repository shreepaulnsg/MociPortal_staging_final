// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/unitBezier",[],function(){var a=function(c,h,k,t){function u(d,g){var e;g=null==g?1E-6:g;var b=d;for(e=0;8>e;e++){var m=((p*b+n)*b+l)*b-d;if(Math.abs(m)<g)return b;var f=(3*p*b+2*n)*b+l;if(1E-6>Math.abs(f))break;b-=m/f}f=0;e=1;b=d;if(b<f)return f;if(b>e)return e;for(;f<e;){m=((p*b+n)*b+l)*b;if(Math.abs(m-d)<g)break;d>m?f=b:e=b;b=.5*(e-f)+f}return b}var l=3*c,n=3*(k-c)-l,p=1-l-n,q=3*h,r=3*(t-h)-q,v=1-q-r;return function(d,g){d=u(d,g);return((v*d+r)*d+q)*d}},w=/^cubic-bezier\((.*)\)/;
a.parse=function(c){var h=a[c]||null;!h&&(c=w.exec(c))&&(c=c[1].split(",").map(function(k){return parseFloat(k.trim())}),4!==c.length||c.some(function(k){return isNaN(k)})||(h=a.apply(a,c)));return h};a.ease=a(.25,.1,.25,1);a.linear=a(0,0,1,1);a.easeIn=a["ease-in"]=a(.42,0,1,1);a.easeOut=a["ease-out"]=a(0,0,.58,1);a.easeInOut=a["ease-in-out"]=a(.42,0,.58,1);return a});