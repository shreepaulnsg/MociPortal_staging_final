//>>built
define("xstyle/css",["require"],function(l){function m(a,c,e){var g=document.documentElement;a=g.insertBefore(document.createElement(a),g.firstChild);a.id=c;c=(a.currentStyle||getComputedStyle(a,null)||{})[e];g.removeChild(a);return c}return{load:function(a,c,e,g){function h(b){var k=m("x-parse",null,"content"),n=b&&(b.sheet||b.styleSheet);k&&"none"!=k&&"normal"!=k?c([eval(k)],function(p){b?p.process(b,e):(p.processAll(),e(n))}):e(n)}var f=c.toUrl(a);if(f.match(/!$/)){var q={wait:!1};f=f.slice(0,
-1)}var d=c.cache&&c.cache["url:"+f];if(null!=d)d.xCss&&(d=d.cssText),"string"==typeof d?l(["./core/load-css"],function(b){h(b.insertCss(d))}):h();else{if("none"==m("div",a.replace(/\//g,"-").replace(/\..*/,"")+"-loaded","display"))return h();l(["./core/load-css"],function(b){b(f,h,q)})}}}});