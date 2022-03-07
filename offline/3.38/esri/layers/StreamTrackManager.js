// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/StreamTrackManager","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../graphic ../geometry/Point ../geometry/Polyline ./TrackManager".split(" "),function(w,B,t,C,D,E,F,G,H){w=w([H],{declaredClass:"esri.layers._StreamTrackManager",constructor:function(a){this.inherited(arguments);var b=a.getMap().spatialReference;this.isWebMercator=b.isWebMercator();this.canWrap=b._isWrappable();this.wrapThreshold=this.isWebMercator?2.0037508342788905E7:180},initialize:function(a){this.inherited(arguments)},
addFeatures:function(a,b){function d(f,e){var q,l;h[f]||(h[f]=[]);f=h[f];if(0<m){e.length>m&&e.splice(0,e.length-m);var r=e.length+f.length;r>m&&(q=f.splice(0,r-m))}r=e.length;for(l=0;l<r;l+=1)f.push(e[l]);return{deletes:q,adds:e}}var k={},c={},g;if(b)return this.inherited(arguments),k;var h=this.trackMap;var p=this.layer;var n=p._trackIdField;var m=p.maximumTrackPoints||0;t.forEach(a,function(f){var e=f.attributes[n];f.visible&&(c[e]||(c[e]=[]),c[e].push(f))});for(g in c)c.hasOwnProperty(g)&&(p=
d(g,c[g]),k[g]=p);return k},removeFeatures:function(a){var b=[],d=this.layer.objectIdField,k=this.layer._trackIdField;a&&(t.forEach(a,function(c){var g;var h=c.attributes[k];var p=c.attributes[d];if(g=this.trackMap[h])for(c=0;c<g.length;c+=1){var n=g[c];if(n.attributes[d]===p){this.trackMap[h].splice(c,1);-1===t.indexOf(h)&&b.push(h);break}}},this),0<a.length&&this.refreshTracks(b))},drawTracks:function(a){function b(n){var m=g[n],f=m&&1<m.length,e=d.trackLineMap[n];e&&!f&&(k.remove(e),delete d.trackLineMap[n],
e=null);if(!f)return!1;f=[];for(var q=[],l,r=m.length,x=0;x<r;x++)if(l=m[x].geometry){l=l.normalize();var u=l.x,y=0,z=!1;A&&d.canWrap&&(y=u-A.x,Math.abs(y)>d.wrapThreshold&&(z=!0));z?(q.push([d.getWrappedX(u),l.y]),f.push(q.slice(0)),q=[[u,l.y]]):q.push([u,l.y]);var A=new F(u,l.y,h)}1<q.length&&f.push(q);m={};m[p]=n;if(f.length)if(e){for(var v=e.geometry;v.paths.length;)v.removePath(v.paths.length-1);f.forEach(function(I){v.addPath(I)});e.setGeometry(v)}else e=new E(new G({paths:f,spatialReference:h}),
null,m),k.add(e),d.trackLineMap[n]=e}var d=this,k=this.container,c;if(k){var g=this.trackMap;var h=this.map.spatialReference;var p=this.layer._trackIdField;if(a)t.forEach(a,function(n){b(n)});else for(c in g)g.hasOwnProperty(c)&&b(c)}},refreshTracks:function(a){function b(g){var h;g=d[g]||[];var p=g.length;for(h=0;h<p;h++)k._repaint(g[h],null,!0)}var d=this.trackMap,k=this.layer,c;this.drawTracks(a);if(a)t.forEach(a,function(g){b(g)});else for(c in d)d.hasOwnProperty(c)&&b(c)},getLatestObservations:function(){var a,
b=this.trackMap,d=[];for(a in b)if(b.hasOwnProperty(a)){var k=b[a];d.push(k[k.length-1])}return d},destroy:function(){this.inherited(arguments);this.trackLineMap=null},getWrappedX:function(a){var b=this.isWebMercator,d=b?2.0037508342788905E7:180;b=b?-2.0037508342788905E7:-180;return(0<a?b:d)-((0<a?d:b)-a)}});C("extend-esri")&&B.setObject("layers._StreamTrackManager",w,D);return w});