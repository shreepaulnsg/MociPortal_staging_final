// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/symbols/support/jsonUtils","require exports ../../core/Error ../../core/Warning ../LabelSymbol3D ../LineSymbol3D ../MeshSymbol3D ../PictureFillSymbol ../PictureMarkerSymbol ../PointSymbol3D ../PolygonSymbol3D ../SimpleFillSymbol ../SimpleLineSymbol ../SimpleMarkerSymbol ../Symbol3D ../TextSymbol ../WebStyleSymbol ../callouts/LineCallout3D ./symbolConversion".split(" "),function(D,d,k,l,m,n,p,q,r,t,u,v,w,x,y,z,f,A,B){function g(a,c,b){c=a?C[a.type]||null:null;if(c)return c=
new c,c.read(a,b),c;b&&b.messages&&a&&b.messages.push(new l("symbol:unsupported","Symbols of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:b}));return null}function h(a,c,b){if(!a)return null;if(!b||"web-scene"!==b.origin||a.isInstanceOf(y)||a.isInstanceOf(f))return a.write(c,b);var e=B.to3D(a);if(e.symbol)return e.symbol.write(c,b);b.messages&&b.messages.push(new k("symbol:unsupported","Symbols of type '"+a.declaredClass+"' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView",
{symbol:a,context:b,error:e.error}));return null}Object.defineProperty(d,"__esModule",{value:!0});var C={esriSMS:x,esriPMS:r,esriTS:z,esriSLS:w,esriSFS:v,esriPFS:q,PointSymbol3D:t,LineSymbol3D:n,PolygonSymbol3D:u,MeshSymbol3D:p,LabelSymbol3D:m,styleSymbolReference:f};d.read=g;d.writeTarget=function(a,c,b,e){(a=h(a,{},e))&&(c[b]=a)};d.write=h;d.fromJSON=function(a,c){return g(a,null,c)};d.readCallout3D=function(a,c){if(!a||!a.type)return null;var b=null;switch(a.type){case "line":b=new A}b&&b.read(a,
c);return b}});