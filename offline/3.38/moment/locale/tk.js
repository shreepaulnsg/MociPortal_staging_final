//>>built
(function(d,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/tk",["../moment"],a):a(d.moment)})(this,function(d){var a={1:"'inji",5:"'inji",8:"'inji",70:"'inji",80:"'inji",2:"'nji",7:"'nji",20:"'nji",50:"'nji",3:"'\u00fcnji",4:"'\u00fcnji",100:"'\u00fcnji",6:"'njy",9:"'unjy",10:"'unjy",30:"'unjy",60:"'ynjy",90:"'ynjy"};return d.defineLocale("tk",{months:"\u00ddanwar Fewral Mart Aprel Ma\u00fd I\u00fdun I\u00fdul Awgust Sent\u00fdabr Okt\u00fdabr No\u00fdabr Dekabr".split(" "),
monthsShort:"\u00ddan Few Mar Apr Ma\u00fd I\u00fdn I\u00fdl Awg Sen Okt No\u00fd Dek".split(" "),weekdays:"\u00ddek\u015fenbe Du\u015fenbe Si\u015fenbe \u00c7ar\u015fenbe Pen\u015fenbe Anna \u015eenbe".split(" "),weekdaysShort:"\u00ddek Du\u015f Si\u015f \u00c7ar Pen Ann \u015een".split(" "),weekdaysMin:"\u00ddk D\u015f S\u015f \u00c7r Pn An \u015en".split(" "),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bug\u00fcn sagat] LT",
nextDay:"[ertir sagat] LT",nextWeek:"[indiki] dddd [sagat] LT",lastDay:"[d\u00fc\u00fdn] LT",lastWeek:"[ge\u00e7en] dddd [sagat] LT",sameElse:"L"},relativeTime:{future:"%s so\u0148",past:"%s \u00f6\u0148",s:"birn\u00e4\u00e7e sekunt",m:"bir minut",mm:"%d minut",h:"bir sagat",hh:"%d sagat",d:"bir g\u00fcn",dd:"%d g\u00fcn",M:"bir a\u00fd",MM:"%d a\u00fd",y:"bir \u00fdyl",yy:"%d \u00fdyl"},ordinal:function(b,c){switch(c){case "d":case "D":case "Do":case "DD":return b;default:if(0===b)return b+"'unjy";
c=b%10;return b+(a[c]||a[b%100-c]||a[100<=b?100:null])}},week:{dow:1,doy:7}})});