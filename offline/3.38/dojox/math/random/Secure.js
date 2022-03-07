//>>built
define("dojox/math/random/Secure",["dojo"],function(e){e.declare("dojox.math.random.Secure",null,{constructor:function(a,c){this.prng=a;var b=this.pool=Array(a.size),d=this.pptr=0;for(a=a.size;d<a;){var f=Math.floor(65536*Math.random());b[d++]=f>>>8;b[d++]=f&255}this.seedTime();c||(this.h=[e.connect(e.body(),"onclick",this,"seedTime"),e.connect(e.body(),"onkeypress",this,"seedTime")])},destroy:function(){this.h&&e.forEach(this.h,e.disconnect)},nextBytes:function(a){var c=this.state;if(!c){this.seedTime();
c=this.state=this.prng();c.init(this.pool);for(var b=this.pool,d=0,f=b.length;d<f;b[d++]=0);this.pptr=0}d=0;for(f=a.length;d<f;++d)a[d]=c.next()},seedTime:function(){this._seed_int((new Date).getTime())},_seed_int:function(a){var c=this.pool,b=this.pptr;c[b++]^=a&255;c[b++]^=a>>8&255;c[b++]^=a>>16&255;c[b++]^=a>>24&255;b>=this.prng.size&&(b-=this.prng.size);this.pptr=b}});return dojox.math.random.Secure});