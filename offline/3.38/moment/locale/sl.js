//>>built
(function(f,e){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?e(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/sl",["../moment"],e):e(f.moment)})(this,function(f){function e(d,a,g,b){var c=d+" ";switch(g){case "s":return a||b?"nekaj sekund":"nekaj sekundami";case "ss":return 1===d?c+(a?"sekundo":"sekundi"):2===d?c+(a||b?"sekundi":"sekundah"):5>d?c+(a||b?"sekunde":"sekundah"):c+"sekund";case "m":return a?"ena minuta":"eno minuto";
case "mm":return 1===d?c+(a?"minuta":"minuto"):2===d?c+(a||b?"minuti":"minutama"):5>d?c+(a||b?"minute":"minutami"):c+(a||b?"minut":"minutami");case "h":return a?"ena ura":"eno uro";case "hh":return 1===d?c+(a?"ura":"uro"):2===d?c+(a||b?"uri":"urama"):5>d?c+(a||b?"ure":"urami"):c+(a||b?"ur":"urami");case "d":return a||b?"en dan":"enim dnem";case "dd":return 1===d?c+(a||b?"dan":"dnem"):2===d?c+(a||b?"dni":"dnevoma"):c+(a||b?"dni":"dnevi");case "M":return a||b?"en mesec":"enim mesecem";case "MM":return 1===
d?c+(a||b?"mesec":"mesecem"):2===d?c+(a||b?"meseca":"mesecema"):5>d?c+(a||b?"mesece":"meseci"):c+(a||b?"mesecev":"meseci");case "y":return a||b?"eno leto":"enim letom";case "yy":return 1===d?c+(a||b?"leto":"letom"):2===d?c+(a||b?"leti":"letoma"):5>d?c+(a||b?"leta":"leti"):c+(a||b?"let":"leti")}}return f.defineLocale("sl",{months:"januar februar marec april maj junij julij avgust september oktober november december".split(" "),monthsShort:"jan. feb. mar. apr. maj. jun. jul. avg. sep. okt. nov. dec.".split(" "),
monthsParseExact:!0,weekdays:"nedelja ponedeljek torek sreda \u010detrtek petek sobota".split(" "),weekdaysShort:"ned. pon. tor. sre. \u010det. pet. sob.".split(" "),weekdaysMin:"ne po to sr \u010de pe so".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";
case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[v\u010deraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prej\u0161njo] [nedeljo] [ob] LT";case 3:return"[prej\u0161njo] [sredo] [ob] LT";case 6:return"[prej\u0161njo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prej\u0161nji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"\u010dez %s",past:"pred %s",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,
dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})});