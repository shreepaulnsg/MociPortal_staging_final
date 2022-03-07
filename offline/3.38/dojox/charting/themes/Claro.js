//>>built
define("dojox/charting/themes/Claro",["../Theme","dojox/gfx/gradutils","./common"],function(c,l,g){var d=c.generateGradient,e={type:"linear",space:"shape",x1:0,y1:0,x2:0,y2:100};g.Claro=new c({chart:{fill:{type:"linear",x1:0,x2:0,y1:0,y2:100,colors:[{offset:0,color:"#dbdbdb"},{offset:1,color:"#efefef"}]},stroke:{color:"#b5bcc7"}},plotarea:{fill:{type:"linear",x1:0,x2:0,y1:0,y2:100,colors:[{offset:0,color:"#dbdbdb"},{offset:1,color:"#efefef"}]}},axis:{stroke:{color:"#888c76",width:1},tick:{color:"#888c76",
position:"center",font:"normal normal normal 7pt Verdana, Arial, sans-serif",fontColor:"#888c76"}},series:{stroke:{width:2.5,color:"#fff"},outline:null,font:"normal normal normal 7pt Verdana, Arial, sans-serif",fontColor:"#131313"},marker:{stroke:{width:1.25,color:"#131313"},outline:{width:1.25,color:"#131313"},font:"normal normal normal 8pt Verdana, Arial, sans-serif",fontColor:"#131313"},seriesThemes:[{fill:d(e,"#2a6ead","#3a99f2")},{fill:d(e,"#613e04","#996106")},{fill:d(e,"#0e3961","#155896")},
{fill:d(e,"#55aafa","#3f7fba")},{fill:d(e,"#ad7b2a","#db9b35")}],markerThemes:[{fill:"#2a6ead",stroke:{color:"#fff"}},{fill:"#613e04",stroke:{color:"#fff"}},{fill:"#0e3961",stroke:{color:"#fff"}},{fill:"#55aafa",stroke:{color:"#fff"}},{fill:"#ad7b2a",stroke:{color:"#fff"}}]});g.Claro.next=function(a,h,m){var f="line"==a;if(f||"area"==a){var b=this.seriesThemes[this._current%this.seriesThemes.length];var k=this.markerThemes[this._current%this.markerThemes.length];b.fill.space="plot";f&&(b.stroke={width:4,
color:b.fill.colors[0].color});k.outline={width:1.25,color:k.fill};f=c.prototype.next.apply(this,arguments);delete b.outline;delete b.stroke;b.fill.space="shape";return f}return"candlestick"==a?(b=this.seriesThemes[this._current%this.seriesThemes.length],b.fill.space="plot",b.stroke={width:1,color:b.fill.colors[0].color},f=c.prototype.next.apply(this,arguments)):c.prototype.next.apply(this,arguments)};g.Claro.post=function(a,h){a=c.prototype.post.apply(this,arguments);"slice"!=h&&"circle"!=h||!a.series.fill||
"radial"!=a.series.fill.type||(a.series.fill=l.reverse(a.series.fill));return a};return g.Claro});