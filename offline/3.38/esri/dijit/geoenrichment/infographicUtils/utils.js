// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/infographicUtils/utils",[],function(){return{getCeiling:function(a,b){if(0===a)return 0;if(0>a){a=-a;var c=-1}else c=1;var d=Math.pow(10,Math.ceil(Math.log(a)/Math.LN10)-1);a=2*Math.ceil(a/d/2)*d;b&&0===Math.log(a)/Math.LN10%1&&(a*=2);return a*c},supportsComparison:function(a,b){return"OneVar"===a||"AgePyramid"===a&&b||"RelatedVariables"===a&&b}}});