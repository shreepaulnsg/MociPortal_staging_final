//>>built
define("dojox/encoding/crypto/SimpleAES",["../base64","./_base"],function(z,p){function k(b,e){for(var f=e.length/4-1,a=[[],[],[],[]],c=0;16>c;c++)a[c%4][Math.floor(c/4)]=b[c];a=n(a,e,0,4);for(c=1;c<f;c++){a=q(a,4);a=r(a,4);for(b=0;4>b;b++){for(var d=Array(4),g=Array(4),h=0;4>h;h++)d[h]=a[h][b],g[h]=a[h][b]&128?a[h][b]<<1^283:a[h][b]<<1;a[0][b]=g[0]^d[1]^g[1]^d[2]^d[3];a[1][b]=d[0]^g[1]^d[2]^g[2]^d[3];a[2][b]=d[0]^d[1]^g[2]^d[3]^g[3];a[3][b]=d[0]^g[0]^d[1]^d[2]^g[3]}a=n(a,e,c,4)}a=q(a,4);a=r(a,4);
a=n(a,e,f,4);e=Array(16);for(c=0;16>c;c++)e[c]=a[c%4][Math.floor(c/4)];return e}function q(b,e){for(var f=0;4>f;f++)for(var a=0;a<e;a++)b[f][a]=t[b[f][a]];return b}function r(b,e){for(var f=Array(4),a=1;4>a;a++){for(var c=0;4>c;c++)f[c]=b[a][(c+a)%e];for(c=0;4>c;c++)b[a][c]=f[c]}return b}function n(b,e,f,a){for(var c=0;4>c;c++)for(var d=0;d<a;d++)b[c][d]^=e[4*f+d][c];return b}function l(b){for(var e=b.length/4,f=e+6,a=Array(4*(f+1)),c=Array(4),d=0;d<e;d++)a[d]=[b[4*d],b[4*d+1],b[4*d+2],b[4*d+3]];
for(d=e;d<4*(f+1);d++){a[d]=Array(4);for(b=0;4>b;b++)c[b]=a[d-1][b];if(0==d%e){c[4]=c[0];for(b=0;4>b;b++)c[b]=c[b+1];c=u(c);for(b=0;4>b;b++)c[b]^=y[d/e][b]}else 6<e&&4==d%e&&(c=u(c));for(b=0;4>b;b++)a[d][b]=a[d-e][b]^c[b]}return a}function u(b){for(var e=0;4>e;e++)b[e]=t[b[e]];return b}function v(b){var e=[];b.replace(/(..)/g,function(f){e.push(parseInt(f,16))});return e}var t=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,
183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,
231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],y=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]];p.SimpleAES=new function(){this.encrypt=function(b,e){for(var f=Array(32),a=0;32>a;a++)f[a]=
e.charCodeAt(a)&255;f=k(f,l(f));f=f.concat(f.slice(0,16));e=Array(16);var c=(new Date).getTime();for(a=0;4>a;a++)e[a]=c>>>8*a&255;for(a=0;4>a;a++)e[a+4]=c/4294967296>>>8*a&255;c=l(f);var d=Math.ceil(b.length/16);f=Array(d);for(var g=0;g<d;g++){for(a=0;4>a;a++)e[15-a]=g>>>8*a&255;for(a=0;4>a;a++)e[15-a-4]=g/4294967296>>>8*a;var h=k(e,c),m=g<d-1?16:(b.length-1)%16+1,w="";for(a=0;a<m;a++){var x=b.charCodeAt(16*g+a)^h[a];w+=(16>x?"0":"")+x.toString(16)}f[g]=w}b="";for(a=0;8>a;a++)b+=(16>e[a]?"0":"")+
e[a].toString(16);b=b+" "+f.join(" ");return b};this.decrypt=function(b,e){for(var f=Array(32),a=0;32>a;a++)f[a]=e.charCodeAt(a)&255;a=l(f);a=k(f,a);a=a.concat(a.slice(0,16));e=l(a);b=b.split(" ");f=Array(16);f=v(b[0]);for(var c=Array(b.length-1),d=1;d<b.length;d++){for(a=0;4>a;a++)f[15-a]=d-1>>>8*a&255;for(a=0;4>a;a++)f[15-a-4]=d/4294967296-1>>>8*a&255;var g=k(f,e),h="",m=v(b[d]);for(a=0;a<m.length;a++)b[d].charCodeAt(a),h+=String.fromCharCode(m[a]^g[a]);c[d-1]=h}b=c.join("");return b}};return p.SimpleAES});