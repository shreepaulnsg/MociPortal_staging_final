// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/webgl/lib/glsl-tokenizer/index",["./lib/literals","./lib/operators","./lib/builtins"],function(A,t,B){"use strict;";var C="block-comment line-comment preprocessor operator integer float ident builtin keyword whitespace eof integer".split(" ");return function(){function g(f){f.length&&n.push({type:C[d],data:f,position:h,line:u,column:q})}function D(){c=c.length?[]:c;if("/"===e&&"*"===a)return h=k+b-1,d=0,e=a,b+1;if("/"===e&&"/"===a)return h=k+b-1,d=1,e=a,b+1;if("#"===
a)return d=2,h=k+b,b;if(/\s/.test(a))return d=9,h=k+b,b;v=/\d/.test(a);w=/[^\w_]/.test(a);h=k+b;d=v?4:w?3:9999;return b}function x(){if(("\r"===a||"\n"===a)&&"\\"!==e)return g(c.join("")),d=999,b;c.push(a);e=a;return b+1}function E(){if("."===e&&/\d/.test(a))return d=5,b;if("/"===e&&"*"===a)return d=0,b;if("/"===e&&"/"===a)return d=1,b;if("."===a&&c.length){for(;r(c););d=5;return b}if(";"===a||")"===a||"("===a){if(c.length)for(;r(c););g(a);d=999;return b+1}var f=2===c.length&&"\x3d"!==a;if(/[\w_\d\s]/.test(a)||
f){for(;r(c););d=999;return b}c.push(a);e=a;return b+1}function r(f){var m=0;do{var y=t.indexOf(f.slice(0,f.length+m).join(""));var p=t[y];if(-1===y){if(0<m--+f.length)continue;p=f.slice(0,1).join("")}g(p);h+=p.length;c=c.slice(p.length);return c.length}while(1)}function F(){if("."===a||/[eE]/.test(a))return c.push(a),d=5,e=a,b+1;if("x"===a&&1===c.length&&"0"===c[0])return d=11,c.push(a),e=a,b+1;if(/[^\d]/.test(a))return g(c.join("")),d=999,b;c.push(a);e=a;return b+1}function G(){"f"===a&&(c.push(a),
e=a,b+=1);if(/[eE]/.test(a)||"-"===a&&/[eE]/.test(e))return c.push(a),e=a,b+1;if(/[^\d]/.test(a))return g(c.join("")),d=999,b;c.push(a);e=a;return b+1}var b=0,k=0,d=999,a,e,c=[],n=[],u=1,q=0,h=0,v=!1,w=!1,l="",z;return function(f){n=[];if(null!==f){f=f.replace?f.replace(/\r\n/g,"\n"):f;b=0;l+=f;for(z=l.length;a=l[b],b<z;){f=b;switch(d){case 0:"/"===a&&"*"===e?(c.push(a),g(c.join("")),d=999):(c.push(a),e=a);b+=1;break;case 1:b=x();break;case 2:b=x();break;case 3:b=E();break;case 4:b=F();break;case 11:/[^a-fA-F0-9]/.test(a)?
(g(c.join("")),d=999):(c.push(a),e=a,b+=1);break;case 5:b=G();break;case 9999:if(/[^\d\w_]/.test(a)){var m=c.join("");d=-1<A.indexOf(m)?8:-1<B.indexOf(m)?7:6;g(c.join(""));d=999}else c.push(a),e=a,b+=1;break;case 9:/[^\s]/g.test(a)?(g(c.join("")),d=999):(c.push(a),e=a,b+=1);break;case 999:b=D()}if(f!==b)switch(l[f]){case "\n":q=0;++u;break;default:++q}}k+=b;l=l.slice(b);return n}c.length&&g(c.join(""));d=10;g("(eof)");return n}}});