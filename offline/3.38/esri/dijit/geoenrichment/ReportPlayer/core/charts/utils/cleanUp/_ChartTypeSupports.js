// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/cleanUp/_ChartTypeSupports","esri/dijit/geoenrichment/utils/ObjectUtil esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartTypes ./chartTypes/classic/_ColumnBarLike ./chartTypes/classic/_LineLike ./chartTypes/classic/_Pie ./chartTypes/graphic/_ColumnBarLike ./chartTypes/graphic/_ColumnBarPictureLike ./chartTypes/graphic/_LineLike ./chartTypes/graphic/_Pie ./chartTypes/graphic/_Donut ./chartTypes/graphic/_Ring ./chartTypes/graphic/_Gauge ./chartTypes/graphic/_Waffle".split(" "),
function(h,a,k,l,m,n,p,q,r,t,u,v,w){var g={},c={};c[a.COLUMN]=c[a.BAR]=k;c[a.LINE]=l;c[a.PIE]=m;var b={};b[a.COLUMN]=b[a.BAR]=n;b[a.PICTURE_COLUMN]=b[a.PICTURE_BAR]=p;b[a.LINE]=b[a.VERTICAL_LINE]=q;b[a.PIE]=r;b[a.DONUT]=t;b[a.RING]=u;b[a.GAUGE]=v;b[a.WAFFLE]=w;g.cleanUpJsonForChartType=function(e,d){return h.filterByPattern(e,(d?b:c)[e.type])};g.supportsProperty=function(e,d,x){d=d.split(".");var f=(x?b:c)[e];d.forEach(function(y){f=f&&f[y]});return!!f};return g});