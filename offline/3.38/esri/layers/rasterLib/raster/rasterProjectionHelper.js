// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/raster/rasterProjectionHelper","dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/sniff ../../../kernel ../../../WKIDUnitConversion ../../../geometry/Extent ../../../geometry/projection ../../../geometry/webMercatorUtils ../../../SpatialReference ../../../geometry/Point".split(" "),function(y,z,D,G,H,I,v,m,E,F,w){y={requirePE:function(a,b){return!(a.equals(b)||a._canProject(b))},load:function(){var a=new D;if(!this._loadPromise)if(m.isSupported())this._loadPromise=
m.load();else{var b=new D;b.reject("projection engine is not supported on this version of the browser, please try with a modern browser");this._loadPromise=b.promise}this._loadPromise.isFulfilled()?this._loadPromise.isResolved()?a.resolve():this._loadPromise.isRejected()&&a.resolve():(this._pendingdfds=this._pendingdfds||[],this._pendingdfds.push(a),this._loadPromise.then(z.hitch(this,function(){this._pendingdfds.forEach(function(c){c.isFulfilled()||c.resolve()})}),z.hitch(this,function(){this._pendingdfds.forEach(function(c){c.isFulfilled()||
c.reject()})})));return a.promise},computeError:function(a,b){return[Math.abs((a[0]+a[4]+a[4*b.rows]+a[4*b.rows+4])/4-a[2*b.rows+2]),Math.abs((a[1]+a[5]+a[4*b.rows+1]+a[4*b.rows+5])/4-a[2*b.rows+3])]},getDefaultDatumTransformationForDataset:function(a,b,c){if(!(b&&a.spatialReference&&this.requirePE(a.spatialReference,b)&&m.isLoaded()))return null;a=new v(a.toJson());b=new F(b.toJson());return c?m.getTransformation(b,a.spatialReference,a):m.getTransformation(a.spatialReference,b,a)},project:function(a,
b,c){if(!b||a.spatialReference.equals(b))return a;var h=m.isLoaded()?m:E;"esri.geometry.Extent"===a.declaredClass?a=new v(a.toJson()):"esri.geometry.Point"===a.declaredClass&&(a=new w(a.toJson()));b=new F(b.toJson());(a=h.project(a,b))&&"esri.geometry.Extent"===a.declaredClass?(a=new v(a.toJson()),c&&(1E-5>Math.abs(a.xmin+180)&&1E-5>Math.abs(a.xmax-180)?(a.xmin=0,a.xmax=360):(0>a.xmin&&(a.xmin+=360,a.xmax+=360),0>a.xmax&&(a.xmax+=360)))):a&&"esri.geometry.Point"===a.declaredClass&&(a=new w(a.toJson()),
c&&0>a.x&&(a.x+=360));return a},projectResolution:function(a,b,c){var h=c.xmin+(c.xmax-c.xmin)/2;c=c.ymin+(c.ymax-c.ymin)/2;a=new v(h,c,h+a.x,c+a.y,a.spatialReference);a=this.project(a,b);return new w(a.xmax-a.xmin,a.ymax-a.ymin,b)},getProjectionOffsetGrid:function(a,b,c,h,k,n,q){null==q&&(q=[32,32]);var r=a.xmin,t=a.ymin,g=a.xmax,l=a.ymax,A=a.spatialReference,B=b.spatialReference,C=m.isLoaded()?m:E,p=k?-k:null,d=q[0]*c.x,u=q[1]*c.y;g={cols:Math.ceil((g-r)/d)+1,rows:Math.ceil((l-t)/u)+1};a=[];for(l=
0;l<g.cols;l++){var f=x;var x=[];for(c=0;c<g.rows;c++){var e=new w({x:r+d*l,y:t+u*c,spatialReference:A});e=C.project(e,B,n);if(!e)return null;h&&0>e.x&&(e.x+=360);x.push(e);0<l&&null!=p&&e.x<f[c].x&&(e.x+=k-p,e.x<f[c].x&&(e.x+=k-p));a.push((e.x-b.xmin)/(b.xmax-b.xmin));a.push((e.y-b.ymin)/(b.ymax-b.ymin))}}b=this.computeError(a,g);h=new Float32Array((g.cols-1)*(g.rows-1)*12);k=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]);n=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(l=0;l<g.cols-1;l++)for(c=0;c<g.rows-
1;c++){d=l*g.rows*2+2*c;r=a[d];t=a[d+1];x=a[d+2];A=a[d+3];d+=2*g.rows;B=a[d];C=a[d+1];p=a[d+2];u=a[d+3];f=0;e=12*(c*(g.cols-1)+l);for(d=0;3>d;d++)h[e++]=k[f++]*r+k[f++]*x+k[f++]*p;for(d=f=0;3>d;d++)h[e++]=k[f++]*t+k[f++]*A+k[f++]*u;for(d=f=0;3>d;d++)h[e++]=n[f++]*r+n[f++]*B+n[f++]*p;for(d=f=0;3>d;d++)h[e++]=n[f++]*t+n[f++]*C+n[f++]*u}return{offsets:a,error:b,coefficients:h,spacing:q,size:[g.cols-1,g.rows-1]}},getHalfWorldWidth:function(a){var b=a&&a.wkid;if(null!=b)return a.isWebMercator()&&(b=3857),
null==I[b]?180:J[b]}};G("extend-esri")&&z.setObject("layers.rasterLib.raster.rasterProjectionHelper",y,H);var J={3395:2.0037508342789244E7,3410:1.7334193943686873E7,3832:3339584.723798206,3857:2.0037508342788905E7,3975:1.7367530445161372E7,4087:2.0037508342789244E7,4088:2.0015108787169147E7,6933:1.7367530445161372E7,8858:7396237.374497803,8859:2465412.4581659334,32662:2.0037508342789244E7,53001:2.001508679602057E7,53002:1.000754339801029E7,53003:2.001508679602057E7,53004:2.001508679602057E7,53016:1.4152803599503474E7,
53017:1.7333573624304302E7,53025:7276828.3848298555,53031:1.0384677558821043E7,53034:2.001508679602057E7,53036:7389443.187332862,53037:2463147.729110953,53079:2.0015114352186374E7,53080:2.0015114352186374E7,54001:2.0037508342789244E7,54002:1.0018754171394624E7,54003:2.0037508342789244E7,54004:2.0037508342789244E7,54016:1.4168658027268292E7,54017:1.736753044516137E7,54025:7311399.09166516,54031:1.0396310810074743E7,54034:2.0037508342789244E7,54050:808820.9223376509,54053:1920897.3915568967,54079:2.0037508342789244E7,
54080:2.0037508342789244E7,54099:1.3524439768288724E7,54100:2.0037508342789244E7,54101:2.0037508342789244E7,102038:4297258.582585486,102299:5013965.117483125};return y});