// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/base/etc/dateUtil","dojo/_base/lang dojo/_base/array dojo/has dojo/date/locale dojo/date dojo/date/stamp ../../../../kernel".split(" "),function(d,c,e,b,k,l,f){c={formatDate:function(a){return b.format(a,{datePattern:"yyyy-MM-dd",selector:"date"})},formatDateTime:function(a){var g=b.format(a,{datePattern:"yyyy-MM-dd",selector:"date"}),h=b.format(a,{timePattern:"HH:mm:ss.SSS",selector:"time"});a=b.format(a,{timePattern:"ZZZZ",selector:"time"});a=a.replace("GMT","");return g+
"T"+h+a}};e("extend-esri")&&d.setObject("dijit.metadata.base.etc.dateUtil",c,f);return c});