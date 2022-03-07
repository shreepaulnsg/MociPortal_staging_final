// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/clustering/statUtils",["dojo/_base/lang","../support/attributeUtils"],function(l,f){function g(a){return"number"===typeof a&&!isNaN(a)&&Infinity!==a&&-Infinity!==a}var k={sum:{initialize:function(){return{count:0,sum:null}},updateCellStat:function(a,b){g(b)&&(a.count++,a.sum+=b)},updateClusterStat:function(a,b){b.count&&(a.count+=b.count,a.sum+=b.sum)},summarize:function(a){return a.sum}},avg:{initialize:function(a){return{count:0,sum:null,avg:null,sum_cosine:null,sum_sine:null}},
updateCellStat:function(a,b,c){g(b)&&(a.count++,c.isAngular?(c.isArithmetic||(b=-1*b+90),a.sum_cosine+=Math.cos(b*Math.PI/180),a.sum_sine+=Math.sin(b*Math.PI/180)):a.sum+=b)},updateClusterStat:function(a,b,c){b.count&&(a.count+=b.count,c.isAngular?(a.sum_cosine+=b.sum_cosine,a.sum_sine+=b.sum_sine):a.sum+=b.sum)},summarize:function(a,b){if(0<a.count){var c=a.count;b.isAngular?(c=180*Math.atan2(a.sum_sine/c,a.sum_cosine/c)/Math.PI,b.isArithmetic||(c=-1*(c-90)),a.avg=0>c?c+360:c):(a.avg=a.sum/c,b.isDate&&
(a.avg=Math.ceil(a.avg)))}return a.avg}},type:{initialize:function(){return{uvInfos:{}}},updateCellStat:function(a,b){if(null==b||""===b||"string"===typeof b&&""===l.trim(b))b=null;a=a.uvInfos;null==a[b]?a[b]={count:1,value:b}:a[b].count++},updateClusterStat:function(a,b){a=a.uvInfos;b=b.uvInfos;for(var c in b){var d=b[c];null==a[c]?a[c]={count:d.count,value:d.value}:a[c].count+=d.count}},summarize:function(a){a=a.uvInfos;var b,c=-Infinity;for(b in a){var d=a[b];if(d.count>c){c=d.count;var h=d.value}else d.count===
c&&(h=null)}return h}}},e={isSupportedStatisticType:function(a){return k.hasOwnProperty(a)},getStatisticFunctions:function(a){return k[a]},getStatisticId:function(a,b){var c=f.getAttributeIdSource(a);a=c&&f.getAttributeId(c)||a.field;return b+"_"+a},getClusterField:function(a,b){return"cluster_"+e.getStatisticId(a,b)},getStatisticHash:function(a,b){b=[e.getStatisticId(a,b)];a.attributeType&&b.push(a.attributeType.toLowerCase());a.rotationType&&b.push(a.rotationType.toLowerCase());return b.join("_")}};
return e});