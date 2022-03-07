// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/editing/EditOperationBase",["dojo/_base/array","dojo/_base/declare","dojo/has","../../kernel","../../OperationBase"],function(b,a,e,f,g){a=a(g,{declaredClass:"esri.EditOperationBase",updateIds:function(c,h,k,l){b.forEach(h,function(d,q){var m=d[c.objectIdField];b.forEach(k,function(n,p){m===n&&(d[c.objectIdField]=l[p])})})}});e("extend-esri")&&(f.EditOperationBase=a);return a});