// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tasks/Date",["dojo/_base/declare","dojo/_base/lang","dojo/date/locale","dojo/has","../kernel"],function(a,d,c,e,f){a=a(null,{declaredClass:"esri.tasks.Date",constructor:function(b){b&&(b.format&&(this.format=b.format),this.date=c.parse(b.date,{selector:"date",datePattern:this.format}))},date:new Date,format:"EEE MMM dd HH:mm:ss zzz yyyy",toJson:function(){return{date:c.format(this.date,{selector:"date",datePattern:this.format}),format:this.format}}});e("extend-esri")&&d.setObject("tasks.Date",
a,f);return a});