// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/support/domainUtils","dojo/_base/lang dojo/has ../../kernel ../RangeDomain ../CodedValueDomain ../InheritedDomain".split(" "),function(d,e,f,g,h,k){var c={fromJson:function(a){if(a)switch(a.type){case "range":var b=new g(a);break;case "codedValue":b=new h(a);break;case "inherited":b=new k(a)}return b}};e("extend-esri")&&d.setObject("layers.support.domainUtils",c,f);return c});