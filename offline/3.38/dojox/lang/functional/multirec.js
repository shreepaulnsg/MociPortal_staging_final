//>>built
define("dojox/lang/functional/multirec",["dojo","dijit","dojox","dojo/require!dojox/lang/functional/lambda,dojox/lang/functional/util"],function(k,v,r){k.provide("dojox.lang.functional.multirec");k.require("dojox.lang.functional.lambda");k.require("dojox.lang.functional.util");(function(){var b=r.lang.functional,h=b.inlineLambda,t=["_y.r","_y.o"];b.multirec=function(a,e,f,g){var m={},c={},d=function(u){m[u]=1};if("string"==typeof a)a=h(a,"_x",d);else{var n=b.lambda(a);a="_c.apply(this, _x)";c["_c\x3d_t.c"]=
1}if("string"==typeof e)e=h(e,"_x",d);else{var l=b.lambda(e);e="_t.apply(this, _x)"}if("string"==typeof f)f=h(f,"_x",d);else{var p=b.lambda(f);f="_b.apply(this, _x)";c["_b\x3d_t.b"]=1}if("string"==typeof g)g=h(g,t,d);else{var q=b.lambda(g);g="_a.call(this, _y.r, _y.o)";c["_a\x3d_t.a"]=1}d=b.keys(m);c=b.keys(c);a=new Function([],"var _y\x3d{a:arguments},_x,_r,_z,_i".concat(d.length?","+d.join(","):"",c.length?",_t\x3darguments.callee,"+c.join(","):"",l?c.length?",_t\x3d_t.t":"_t\x3darguments.callee.t":
"",";for(;;){for(;;){if(_y.o){_r\x3d",g,";break}_x\x3d_y.a;if(",a,"){_r\x3d",e,";break}_y.o\x3d_x;_x\x3d",f,";_y.r\x3d[];_z\x3d_y;for(_i\x3d_x.length-1;_i\x3e\x3d0;--_i){_y\x3d{p:_y,a:_x[_i],z:_z}}}if(!(_z\x3d_y.z)){return _r}_z.r.push(_r);_y\x3d_y.p}"));n&&(a.c=n);l&&(a.t=l);p&&(a.b=p);q&&(a.a=q);return a}})()});