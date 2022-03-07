// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/Parsers",["esri/dijit/geoenrichment/Deferred","require"],function(e,f){var c={},a={},b;c.initialize=function(){if(b)return b.promise;b=new e;f("./DocumentParser ./ChartConverterPtoE ./InfographicConverterPtoE ./SectionParser ./FieldParser ./FilterParser ./SortingParser ../../../supportClasses/templateJsonUtils/fieldInfo/utils".split(" "),function(d,g,h,k,l,m,n,p){a.document=d;a.chart=g;a.infographic=h;a.section=
k;a.field=l;a.filter=m;a.sorting=n;p.init().then(b.resolve)});return b.promise};c.getParser=function(d){return a[d]};return c});