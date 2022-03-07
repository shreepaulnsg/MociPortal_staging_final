// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/tile/nls/RasterWorker_sl",{"dojo/cldr/nls/number":{decimal:",",group:".",list:";",percentSign:"%",plusSign:"+",minusSign:"\u2212",approximatelySign:"~",exponential:"e",superscriptingExponent:"\u00d7",perMille:"\u2030",infinity:"\u221e",nan:"NaN",timeSeparator:":",decimalFormat:"#,##0.###","decimalFormat-long":"000 bilijonov","decimalFormat-short":"000\u00a0bil'.'",scientificFormat:"#E0",percentFormat:"#,##0\u00a0%","currencySpacing-beforeCurrency-currencyMatch":"[[:^S:]\x26[:^Z:]]",
"currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-insertBetween":"\u00a0","currencySpacing-afterCurrency-currencyMatch":"[[:^S:]\x26[:^Z:]]","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-afterCurrency-insertBetween":"\u00a0",currencyFormat:"#,##0.00\u00a0\u00a4;(#,##0.00\u00a0\u00a4)","currencyFormat-short":"000\u00a0bil'.'\u00a0\u00a4",_localized:{}},"dojo/cldr/nls/gregorian":{"months-format-abbr":"jan. feb. mar. apr. maj jun. jul. avg. sep. okt. nov. dec.".split(" "),
"months-format-narrow":"jfmamjjasond".split(""),"months-format-wide":"januar februar marec april maj junij julij avgust september oktober november december".split(" "),"months-standAlone-abbr":"jan. feb. mar. apr. maj jun. jul. avg. sep. okt. nov. dec.".split(" "),"months-standAlone-narrow":"jfmamjjasond".split(""),"months-standAlone-wide":"januar februar marec april maj junij julij avgust september oktober november december".split(" "),"days-format-abbr":"ned. pon. tor. sre. \u010det. pet. sob.".split(" "),
"days-format-narrow":"npts\u010dps".split(""),"days-format-short":"ned. pon. tor. sre. \u010det. pet. sob.".split(" "),"days-format-wide":"nedelja ponedeljek torek sreda \u010detrtek petek sobota".split(" "),"days-standAlone-abbr":"ned. pon. tor. sre. \u010det. pet. sob.".split(" "),"days-standAlone-narrow":"npts\u010dps".split(""),"days-standAlone-short":"ned. pon. tor. sre. \u010det. pet. sob.".split(" "),"days-standAlone-wide":"nedelja ponedeljek torek sreda \u010detrtek petek sobota".split(" "),
"quarters-format-abbr":["1. \u010det.","2. \u010det.","3. \u010det.","4. \u010det."],"quarters-format-narrow":["1","2","3","4"],"quarters-format-wide":["1. \u010detrtletje","2. \u010detrtletje","3. \u010detrtletje","4. \u010detrtletje"],"quarters-standAlone-abbr":["1. \u010det.","2. \u010det.","3. \u010det.","4. \u010det."],"quarters-standAlone-narrow":["1","2","3","4"],"quarters-standAlone-wide":["1. \u010detrtletje","2. \u010detrtletje","3. \u010detrtletje","4. \u010detrtletje"],"dayPeriods-format-abbr-am":"dop.",
"dayPeriods-format-abbr-pm":"pop.","dayPeriods-format-narrow-am":"d","dayPeriods-format-narrow-pm":"p","dayPeriods-format-wide-am":"dop.","dayPeriods-format-wide-pm":"pop.","dayPeriods-standAlone-abbr-am":"dop.","dayPeriods-standAlone-abbr-pm":"pop.","dayPeriods-standAlone-narrow-am":"d","dayPeriods-standAlone-narrow-pm":"p","dayPeriods-standAlone-wide-am":"dopoldne","dayPeriods-standAlone-wide-pm":"popoldne",eraNames:["pred Kristusom","po Kristusu"],eraAbbr:["pr. Kr.","po Kr."],eraNarrow:["pr. Kr.",
"po Kr."],"dateFormat-full":"EEEE, dd. MMMM y","dateFormat-long":"dd. MMMM y","dateFormat-medium":"d. MMM y","dateFormat-short":"d. MM. yy","timeFormat-full":"HH:mm:ss zzzz","timeFormat-long":"HH:mm:ss z","timeFormat-medium":"HH:mm:ss","timeFormat-short":"HH:mm","dateTimeFormat-full":"{1} {0}","dateTimeFormat-long":"{1} {0}","dateTimeFormat-medium":"{1} {0}","dateTimeFormat-short":"{1} {0}","dateFormatItem-Bh":"h B","dateFormatItem-Bhm":"h:mm B","dateFormatItem-Bhms":"h:mm:ss B","dateFormatItem-d":"d.",
"dateFormatItem-E":"ccc","dateFormatItem-EBhm":"E h:mm B","dateFormatItem-EBhms":"E h:mm:ss B","dateFormatItem-Ed":"E, d.","dateFormatItem-Ehm":"E, h:mm a","dateFormatItem-EHm":"E HH:mm","dateFormatItem-Ehms":"E, h:mm:ss a","dateFormatItem-EHms":"E HH:mm:ss","dateFormatItem-Gy":"y G","dateFormatItem-GyMMM":"MMM y G","dateFormatItem-GyMMMd":"d. MMM y G","dateFormatItem-GyMMMEd":"E, d. MMM y G","dateFormatItem-h":"h a","dateFormatItem-H":"HH'h'","dateFormatItem-hm":"h:mm a","dateFormatItem-Hm":"HH:mm",
"dateFormatItem-hms":"h:mm:ss a","dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hmsv":"h:mm:ss a v","dateFormatItem-Hmsv":"HH:mm:ss v","dateFormatItem-hmv":"h:mm a v","dateFormatItem-Hmv":"HH:mm v","dateFormatItem-M":"L","dateFormatItem-Md":"d. M.","dateFormatItem-MEd":"E, d. M.","dateFormatItem-MMM":"LLL","dateFormatItem-MMMd":"d. MMM","dateFormatItem-MMMEd":"E, d. MMM","dateFormatItem-MMMMd":"d. MMMM","dateFormatItem-MMMMW":"MMMM: W. 'teden'","dateFormatItem-ms":"mm:ss","dateFormatItem-y":"y",
"dateFormatItem-yM":"M/y","dateFormatItem-yMd":"d. M. y","dateFormatItem-yMEd":"E, d. M. y","dateFormatItem-yMMM":"MMM y","dateFormatItem-yMMMd":"d. MMM y","dateFormatItem-yMMMEd":"E, d. MMM y","dateFormatItem-yMMMM":"MMMM y","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yQQQQ":"QQQQ y","dateFormatItem-yw":"w. 'teden' 'leta' Y","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateTimeFormats-appendItem-Era":"{1} {0}","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})",
"dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","dateTimeFormats-appendItem-Year":"{1} {0}","field-era":"doba","field-era-short":"doba","field-era-narrow":"doba","field-year":"leto","field-year-relative+-1":"lani","field-year-relative+0":"letos",
"field-year-relative+1":"naslednje leto","field-year-short":"leto","field-year-short-relative+-1":"lani","field-year-short-relative+0":"letos","field-year-short-relative+1":"naslednje leto","field-year-narrow":"leto","field-year-narrow-relative+-1":"lani","field-year-narrow-relative+0":"letos","field-year-narrow-relative+1":"naslednje leto","field-quarter":"\u010detrtletje","field-quarter-relative+-1":"zadnje \u010detrtletje","field-quarter-relative+0":"to \u010detrtletje","field-quarter-relative+1":"naslednje \u010detrtletje",
"field-quarter-short":"\u010detrtl.","field-quarter-short-relative+-1":"zadnje \u010detrtletje","field-quarter-short-relative+0":"to \u010detrtletje","field-quarter-short-relative+1":"naslednje \u010detrtletje","field-quarter-narrow":"\u010detr.","field-quarter-narrow-relative+-1":"zadnje \u010detrtletje","field-quarter-narrow-relative+0":"to \u010detrtletje","field-quarter-narrow-relative+1":"naslednje \u010detrtletje","field-month":"mesec","field-month-relative+-1":"prej\u0161nji mesec","field-month-relative+0":"ta mesec",
"field-month-relative+1":"naslednji mesec","field-month-short":"mes.","field-month-short-relative+-1":"prej\u0161nji mesec","field-month-short-relative+0":"ta mesec","field-month-short-relative+1":"naslednji mesec","field-month-narrow":"mes.","field-month-narrow-relative+-1":"prej\u0161nji mesec","field-month-narrow-relative+0":"ta mesec","field-month-narrow-relative+1":"naslednji mesec","field-week":"teden","field-week-relative+-1":"prej\u0161nji teden","field-week-relative+0":"ta teden","field-week-relative+1":"naslednji teden",
"field-week-short":"ted.","field-week-short-relative+-1":"prej\u0161nji teden","field-week-short-relative+0":"ta teden","field-week-short-relative+1":"naslednji teden","field-week-narrow":"ted.","field-week-narrow-relative+-1":"prej\u0161nji teden","field-week-narrow-relative+0":"ta teden","field-week-narrow-relative+1":"naslednji teden","field-weekOfMonth":"teden meseca","field-weekOfMonth-short":"ted. v mes.","field-weekOfMonth-narrow":"teden meseca","field-day":"dan","field-day-relative+-1":"v\u010deraj",
"field-day-relative+0":"danes","field-day-relative+1":"jutri","field-day-short":"dan","field-day-short-relative+-1":"v\u010deraj","field-day-short-relative+0":"danes","field-day-short-relative+1":"jutri","field-day-narrow":"dan","field-day-narrow-relative+-1":"v\u010deraj","field-day-narrow-relative+0":"danes","field-day-narrow-relative+1":"jutri","field-dayOfYear":"dan leta","field-dayOfYear-short":"dan leta","field-dayOfYear-narrow":"dan leta","field-weekday":"dan v tednu","field-weekday-short":"dan v tednu",
"field-weekday-narrow":"dan v tednu","field-weekdayOfMonth":"dan meseca","field-weekdayOfMonth-short":"dan meseca","field-weekdayOfMonth-narrow":"dan v mes.","field-sun-relative+-1":"prej\u0161njo nedeljo","field-sun-relative+0":"to nedeljo","field-sun-relative+1":"naslednjo nedeljo","field-sun-short-relative+-1":"prej\u0161njo ned.","field-sun-short-relative+0":"to ned.","field-sun-short-relative+1":"naslednjo ned.","field-sun-narrow-relative+-1":"prej\u0161. ned.","field-sun-narrow-relative+0":"to ned.",
"field-sun-narrow-relative+1":"nasl. ned.","field-mon-relative+-1":"prej\u0161nji ponedeljek","field-mon-relative+0":"ta ponedeljek","field-mon-relative+1":"naslednji ponedeljek","field-mon-short-relative+-1":"prej\u0161nji pon.","field-mon-short-relative+0":"ta pon.","field-mon-short-relative+1":"naslednji pon.","field-mon-narrow-relative+-1":"prej\u0161. pon.","field-mon-narrow-relative+0":"ta pon.","field-mon-narrow-relative+1":"nasl. pon.","field-tue-relative+-1":"prej\u0161nji torek","field-tue-relative+0":"ta torek",
"field-tue-relative+1":"naslednji torek","field-tue-short-relative+-1":"prej\u0161nji tor.","field-tue-short-relative+0":"ta tor.","field-tue-short-relative+1":"naslednji tor.","field-tue-narrow-relative+-1":"prej\u0161. tor.","field-tue-narrow-relative+0":"ta tor.","field-tue-narrow-relative+1":"nasl. tor.","field-wed-relative+-1":"prej\u0161njo sredo","field-wed-relative+0":"to sredo","field-wed-relative+1":"naslednjo sredo","field-wed-short-relative+-1":"prej\u0161njo sre.","field-wed-short-relative+0":"to sre.",
"field-wed-short-relative+1":"naslednjo sre.","field-wed-narrow-relative+-1":"prej\u0161. sre.","field-wed-narrow-relative+0":"to sre.","field-wed-narrow-relative+1":"nasl. sre.","field-thu-relative+-1":"prej\u0161nji \u010detrtek","field-thu-relative+0":"ta \u010detrtek","field-thu-relative+1":"naslednji \u010detrtek","field-thu-short-relative+-1":"prej\u0161nji \u010det.","field-thu-short-relative+0":"ta \u010det.","field-thu-short-relative+1":"naslednji \u010det.","field-thu-narrow-relative+-1":"prej\u0161. \u010det.",
"field-thu-narrow-relative+0":"ta \u010det.","field-thu-narrow-relative+1":"nasl. \u010det.","field-fri-relative+-1":"prej\u0161nji petek","field-fri-relative+0":"ta petek","field-fri-relative+1":"naslednji petek","field-fri-short-relative+-1":"prej\u0161nji pet.","field-fri-short-relative+0":"ta pet.","field-fri-short-relative+1":"naslednji pet.","field-fri-narrow-relative+-1":"prej\u0161. pet.","field-fri-narrow-relative+0":"ta pet.","field-fri-narrow-relative+1":"nasl. pet.","field-sat-relative+-1":"prej\u0161njo soboto",
"field-sat-relative+0":"to soboto","field-sat-relative+1":"naslednjo soboto","field-sat-short-relative+-1":"prej\u0161njo sob.","field-sat-short-relative+0":"to sob.","field-sat-short-relative+1":"naslednjo sob.","field-sat-narrow-relative+-1":"prej\u0161. sob.","field-sat-narrow-relative+0":"to sob.","field-sat-narrow-relative+1":"nasl. sob.","field-dayperiod-short":"dop/pop","field-dayperiod":"dop/pop","field-dayperiod-narrow":"dop/pop","field-hour":"ura","field-hour-relative+0":"v tej uri","field-hour-short":"ura",
"field-hour-short-relative+0":"this hour","field-hour-narrow":"h","field-hour-narrow-relative+0":"this hour","field-minute":"minuta","field-minute-relative+0":"to minuto","field-minute-short":"min.","field-minute-short-relative+0":"this minute","field-minute-narrow":"min","field-minute-narrow-relative+0":"this minute","field-second":"sekunda","field-second-relative+0":"zdaj","field-second-short":"sek.","field-second-short-relative+0":"now","field-second-narrow":"s","field-second-narrow-relative+0":"now",
"field-zone":"\u010dasovni pas","field-zone-short":"\u010dasovni pas","field-zone-narrow":"\u010dasovni pas","dayPeriods-format-abbr-midnight":"opoln.","dayPeriods-format-abbr-noon":"opold.","dayPeriods-format-abbr-morning1":"zjut.","dayPeriods-format-abbr-morning2":"dop.","dayPeriods-format-abbr-afternoon1":"pop.","dayPeriods-format-abbr-evening1":"zve\u010d.","dayPeriods-format-abbr-night1":"pono\u010di","dayPeriods-format-narrow-midnight":"24.00","dayPeriods-format-narrow-noon":"12.00","dayPeriods-format-narrow-morning1":"zj",
"dayPeriods-format-narrow-morning2":"d","dayPeriods-format-narrow-afternoon1":"p","dayPeriods-format-narrow-evening1":"zv","dayPeriods-format-narrow-night1":"po","dayPeriods-format-wide-midnight":"opolno\u010di","dayPeriods-format-wide-noon":"opoldne","dayPeriods-format-wide-morning1":"zjutraj","dayPeriods-format-wide-morning2":"dopoldan","dayPeriods-format-wide-afternoon1":"popoldan","dayPeriods-format-wide-evening1":"zve\u010der","dayPeriods-format-wide-night1":"pono\u010di","dayPeriods-standAlone-abbr-midnight":"poln.",
"dayPeriods-standAlone-abbr-noon":"pold.","dayPeriods-standAlone-abbr-morning1":"jut.","dayPeriods-standAlone-abbr-morning2":"dop.","dayPeriods-standAlone-abbr-afternoon1":"pop.","dayPeriods-standAlone-abbr-evening1":"zve\u010d.","dayPeriods-standAlone-abbr-night1":"no\u010d","dayPeriods-standAlone-narrow-midnight":"24.00","dayPeriods-standAlone-narrow-noon":"12.00","dayPeriods-standAlone-narrow-morning1":"j","dayPeriods-standAlone-narrow-morning2":"d","dayPeriods-standAlone-narrow-afternoon1":"p",
"dayPeriods-standAlone-narrow-evening1":"v","dayPeriods-standAlone-narrow-night1":"n","dayPeriods-standAlone-wide-midnight":"polno\u010d","dayPeriods-standAlone-wide-noon":"poldne","dayPeriods-standAlone-wide-morning1":"jutro","dayPeriods-standAlone-wide-morning2":"dopoldne","dayPeriods-standAlone-wide-afternoon1":"popoldne","dayPeriods-standAlone-wide-evening1":"ve\u010der","dayPeriods-standAlone-wide-night1":"no\u010d","dateFormatItem-GyM":"MMM y G","field-day-relative+-2":"predv\u010deraj\u0161njim",
"field-day-relative+2":"pojutri\u0161njem","field-day-short-relative+-2":"predv\u010deraj\u0161njim","field-day-short-relative+2":"pojutri\u0161njem","field-day-narrow-relative+-2":"predv\u010deraj\u0161njim","field-day-narrow-relative+2":"pojutri\u0161njem",_localized:{}}});