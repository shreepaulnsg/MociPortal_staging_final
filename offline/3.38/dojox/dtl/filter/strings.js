//>>built
define("dojox/dtl/filter/strings","dojo/_base/lang dojo/_base/array dojox/string/tokenize dojox/string/sprintf ../filter/htmlstrings ../_base".split(" "),function(n,r,p,t,w,u){var g=n.getObject("filter.strings",!0,u);n.mixin(g,{_urlquote:function(a,b){b||(b="/");return p(a,/([^\w-_.])/g,function(c){if(-1==b.indexOf(c)){if(" "==c)return"+";for(c=c.charCodeAt(0).toString(16).toUpperCase();2>c.length;)c="0"+c;return"%"+c}return c}).join("")},addslashes:function(a){return a.replace(/\\/g,"\\\\").replace(/"/g,
'\\"').replace(/'/g,"\\'")},capfirst:function(a){a=""+a;return a.charAt(0).toUpperCase()+a.substring(1)},center:function(a,b){b=b||a.length;a+="";b-=a.length;b%2&&(a+=" ",--b);for(var c=0;c<b;c+=2)a=" "+a+" ";return a},cut:function(a,b){return(a+"").replace(new RegExp(b+""||"","g"),"")},_fix_ampersands:/&(?!(\w+|#\d+);)/g,fix_ampersands:function(a){return a.replace(g._fix_ampersands,"\x26amp;")},floatformat:function(a,b){b=parseInt(b||-1,10);a=parseFloat(a);if(!(a-a.toFixed(0))&&0>b)return a.toFixed();
a=a.toFixed(Math.abs(b));return 0>b?parseFloat(a)+"":a},iriencode:function(a){return g._urlquote(a,"/#%[]\x3d:;$\x26()+,!")},linenumbers:function(a){var b=dojox.dtl.filter;a=a.split("\n");for(var c=[],d=(a.length+"").length,e=0,f;e<a.length;e++)f=a[e],c.push(b.strings.ljust(e+1,d)+". "+dojox.dtl._base.escape(f));return c.join("\n")},ljust:function(a,b){a+="";for(b=parseInt(b,10);a.length<b;)a+=" ";return a},lower:function(a){return(a+"").toLowerCase()},make_list:function(a){var b=[];"number"==typeof a&&
(a+="");if(a.charAt){for(var c=0;c<a.length;c++)b.push(a.charAt(c));return b}if("object"==typeof a){for(c in a)b.push(a[c]);return b}return[]},rjust:function(a,b){a+="";for(b=parseInt(b,10);a.length<b;)a=" "+a;return a},slugify:function(a){a=a.replace(/[^\w\s-]/g,"").toLowerCase();return a.replace(/[\-\s]+/g,"-")},_strings:{},stringformat:function(a,b){b=""+b;var c=g._strings;c[b]||(c[b]=new t.Formatter("%"+b));return c[b].format(a)},title:function(a){for(var b,c="",d=0,e;d<a.length;d++)e=a.charAt(d),
c=" "!=b&&"\n"!=b&&"\t"!=b&&b?c+e.toLowerCase():c+e.toUpperCase(),b=e;return c},_truncatewords:/[ \n\r\t]/,truncatewords:function(a,b){b=parseInt(b,10);if(!b)return a;for(var c=0,d=a.length,e=0,f,h;c<a.length;c++){f=a.charAt(c);if(g._truncatewords.test(h)){if(!g._truncatewords.test(f)&&(++e,e==b))return a.substring(0,d+1)+" ..."}else g._truncatewords.test(f)||(d=c);h=f}return a},_truncate_words:/(&.*?;|<.*?>|(\w[\w\-]*))/g,_truncate_tag:/<(\/)?([^ ]+?)(?: (\/)| .*?)?>/,_truncate_singlets:{br:!0,col:!0,
link:!0,base:!0,img:!0,param:!0,area:!0,hr:!0,input:!0},truncatewords_html:function(a,b){b=parseInt(b,10);if(0>=b)return"";var c=0,d=[];a=p(a,g._truncate_words,function(h,k){if(k){++c;if(c<b)return k;if(c==b)return k+" ..."}var l=h.match(g._truncate_tag);if(l&&!(c>=b))return k=l[1],l=l[2].toLowerCase(),k||g._truncate_singlets[l]||(k?(k=r.indexOf(d,l),-1!=k&&(d=d.slice(k+1))):d.unshift(l)),h}).join("");a=a.replace(/\s+$/g,"");for(var e=0,f;f=d[e];e++)a+="\x3c/"+f+"\x3e";return a},upper:function(a){return a.toUpperCase()},
urlencode:function(a){return g._urlquote(a)},_urlize:/^((?:[(>]|&lt;)*)(.*?)((?:[.,)>\n]|&gt;)*)$/,_urlize2:/^\S+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+$/,urlize:function(a){return g.urlizetrunc(a)},urlizetrunc:function(a,b){b=parseInt(b);return p(a,/(\S+)/g,function(c){var d=g._urlize.exec(c);if(!d)return c;d=d[2];var e=0==d.indexOf("www."),f=-1!=d.indexOf("@"),h=-1!=d.indexOf(":"),k=0==d.indexOf("http://"),l=0==d.indexOf("https://"),v=/[a-zA-Z0-9]/.test(d.charAt(0)),q=d.substring(d.length-4),m=d;3<b&&
(m=m.substring(0,b-3)+"...");return e||!f&&!k&&d.length&&v&&(".org"==q||".net"==q||".com"==q)?'\x3ca href\x3d"http://'+d+'" rel\x3d"nofollow"\x3e'+m+"\x3c/a\x3e":k||l?'\x3ca href\x3d"'+d+'" rel\x3d"nofollow"\x3e'+m+"\x3c/a\x3e":f&&!e&&!h&&g._urlize2.test(d)?'\x3ca href\x3d"mailto:'+d+'"\x3e'+d+"\x3c/a\x3e":c}).join("")},wordcount:function(a){return(a=n.trim(a))?a.split(/\s+/g).length:0},wordwrap:function(a,b){b=parseInt(b);var c=[];a=a.split(/\s+/g);if(a.length){var d=a.shift();c.push(d);for(var e=
d.length-d.lastIndexOf("\n")-1,f=0;f<a.length;f++){d=a[f];var h=-1!=d.indexOf("\n")?d.split(/\n/g):[d];e+=h[0].length+1;b&&e>b?(c.push("\n"),e=h[h.length-1].length):(c.push(" "),1<h.length&&(e=h[h.length-1].length));c.push(d)}}return c.join("")}});return g});