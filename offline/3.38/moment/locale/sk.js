//>>built
(function(f,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/sk",["../moment"],a):a(f.moment)})(this,function(f){function a(b,c,g,d){var e=b+" ";switch(g){case "s":return c||d?"p\u00e1r sek\u00fand":"p\u00e1r sekundami";case "ss":return c||d?e+(1<b&&5>b?"sekundy":"sek\u00fand"):e+"sekundami";case "m":return c?"min\u00fata":d?"min\u00fatu":"min\u00fatou";case "mm":return c||d?
e+(1<b&&5>b?"min\u00faty":"min\u00fat"):e+"min\u00fatami";case "h":return c?"hodina":d?"hodinu":"hodinou";case "hh":return c||d?e+(1<b&&5>b?"hodiny":"hod\u00edn"):e+"hodinami";case "d":return c||d?"de\u0148":"d\u0148om";case "dd":return c||d?e+(1<b&&5>b?"dni":"dn\u00ed"):e+"d\u0148ami";case "M":return c||d?"mesiac":"mesiacom";case "MM":return c||d?e+(1<b&&5>b?"mesiace":"mesiacov"):e+"mesiacmi";case "y":return c||d?"rok":"rokom";case "yy":return c||d?e+(1<b&&5>b?"roky":"rokov"):e+"rokmi"}}return f.defineLocale("sk",
{months:"janu\u00e1r febru\u00e1r marec apr\u00edl m\u00e1j j\u00fan j\u00fal august september okt\u00f3ber november december".split(" "),monthsShort:"jan feb mar apr m\u00e1j j\u00fan j\u00fal aug sep okt nov dec".split(" "),weekdays:"nede\u013ea pondelok utorok streda \u0161tvrtok piatok sobota".split(" "),weekdaysShort:"ne po ut st \u0161t pi so".split(" "),weekdaysMin:"ne po ut st \u0161t pi so".split(" "),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",
LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nede\u013eu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo \u0161tvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[v\u010dera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minul\u00fa nede\u013eu o] LT";case 1:case 2:return"[minul\u00fd] dddd [o] LT";case 3:return"[minul\u00fa stredu o] LT";
case 4:case 5:return"[minul\u00fd] dddd [o] LT";case 6:return"[minul\u00fa sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:a,ss:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})});