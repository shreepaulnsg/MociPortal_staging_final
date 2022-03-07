// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/tile/nls/RasterWorker_nb",{"dojo/cldr/nls/number":{decimal:",",group:"\u00a0",list:";",percentSign:"%",plusSign:"+",minusSign:"\u2212",approximatelySign:"ca.",exponential:"E",superscriptingExponent:"\u00d7",perMille:"\u2030",infinity:"\u221e",nan:"NaN",timeSeparator:".",decimalFormat:"#,##0.###","decimalFormat-long":"000 billioner","decimalFormat-short":"000\u00a0bill'.'",scientificFormat:"#E0",percentFormat:"#,##0\u00a0%","currencySpacing-beforeCurrency-currencyMatch":"[[:^S:]\x26[:^Z:]]",
"currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-insertBetween":"\u00a0","currencySpacing-afterCurrency-currencyMatch":"[[:^S:]\x26[:^Z:]]","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-afterCurrency-insertBetween":"\u00a0",currencyFormat:"\u00a4\u00a0#,##0.00","currencyFormat-short":"\u00a4\u00a0000\u00a0bill'.'",_localized:{}},"dojo/cldr/nls/gregorian":{"months-format-abbr":"jan. feb. mar. apr. mai jun. jul. aug. sep. okt. nov. des.".split(" "),
"months-format-narrow":"JFMAMJJASOND".split(""),"months-format-wide":"januar februar mars april mai juni juli august september oktober november desember".split(" "),"months-standAlone-abbr":"jan feb mar apr mai jun jul aug sep okt nov des".split(" "),"months-standAlone-narrow":"JFMAMJJASOND".split(""),"months-standAlone-wide":"januar februar mars april mai juni juli august september oktober november desember".split(" "),"days-format-abbr":"s\u00f8n. man. tir. ons. tor. fre. l\u00f8r.".split(" "),
"days-format-narrow":"SMTOTFL".split(""),"days-format-short":"s\u00f8. ma. ti. on. to. fr. l\u00f8.".split(" "),"days-format-wide":"s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),"days-standAlone-abbr":"s\u00f8n. man. tir. ons. tor. fre. l\u00f8r.".split(" "),"days-standAlone-narrow":"SMTOTFL".split(""),"days-standAlone-short":"s\u00f8. ma. ti. on. to. fr. l\u00f8.".split(" "),"days-standAlone-wide":"s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),
"quarters-format-abbr":["K1","K2","K3","K4"],"quarters-format-narrow":["1.","2.","3.","4."],"quarters-format-wide":["1. kvartal","2. kvartal","3. kvartal","4. kvartal"],"quarters-standAlone-abbr":["K1","K2","K3","K4"],"quarters-standAlone-narrow":["1.","2.","3.","4."],"quarters-standAlone-wide":["1. kvartal","2. kvartal","3. kvartal","4. kvartal"],"dayPeriods-format-abbr-am":"a.m.","dayPeriods-format-abbr-pm":"p.m.","dayPeriods-format-narrow-am":"a","dayPeriods-format-narrow-pm":"p","dayPeriods-format-wide-am":"a.m.",
"dayPeriods-format-wide-pm":"p.m.","dayPeriods-standAlone-abbr-am":"a.m.","dayPeriods-standAlone-abbr-pm":"p.m.","dayPeriods-standAlone-narrow-am":"a.m.","dayPeriods-standAlone-narrow-pm":"p.m.","dayPeriods-standAlone-wide-am":"a.m.","dayPeriods-standAlone-wide-pm":"p.m.",eraNames:["f\u00f8r Kristus","etter Kristus"],eraAbbr:["f.Kr.","e.Kr."],eraNarrow:["f.Kr.","e.Kr.","vt."],"dateFormat-full":"EEEE d. MMMM y","dateFormat-long":"d. MMMM y","dateFormat-medium":"d. MMM y","dateFormat-short":"dd.MM.y",
"timeFormat-full":"HH.mm.ss zzzz","timeFormat-long":"HH.mm.ss z","timeFormat-medium":"HH.mm.ss","timeFormat-short":"HH.mm","dateTimeFormat-full":"{1} 'kl'. {0}","dateTimeFormat-long":"{1} 'kl'. {0}","dateTimeFormat-medium":"{1}, {0}","dateTimeFormat-short":"{1}, {0}","dateFormatItem-Bh":"h B","dateFormatItem-Bhm":"h:mm B","dateFormatItem-Bhms":"h:mm:ss B","dateFormatItem-d":"d.","dateFormatItem-E":"ccc","dateFormatItem-EBhm":"E h:mm B","dateFormatItem-EBhms":"E h:mm:ss B","dateFormatItem-Ed":"E d.",
"dateFormatItem-Ehm":"E h:mm a","dateFormatItem-EHm":"E 'kl'. HH:mm","dateFormatItem-Ehms":"E h:mm:ss a","dateFormatItem-EHms":"E 'kl'. HH:mm:ss","dateFormatItem-Gy":"y G","dateFormatItem-GyMMM":"MMM y G","dateFormatItem-GyMMMd":"d. MMM y G","dateFormatItem-GyMMMEd":"E d. MMM y G","dateFormatItem-h":"h a","dateFormatItem-H":"HH","dateFormatItem-hm":"h:mm a","dateFormatItem-Hm":"HH:mm","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hmsv":"h:mm:ss a v","dateFormatItem-Hmsv":"HH:mm:ss v",
"dateFormatItem-hmv":"h:mm a v","dateFormatItem-Hmv":"HH:mm v","dateFormatItem-M":"L.","dateFormatItem-Md":"d.M.","dateFormatItem-MEd":"E d.M.","dateFormatItem-MMM":"LLL","dateFormatItem-MMMd":"d. MMM","dateFormatItem-MMMEd":"E d. MMM","dateFormatItem-MMMMd":"d. MMMM","dateFormatItem-MMMMW":"W. 'uke' 'i' MMMM","dateFormatItem-ms":"mm:ss","dateFormatItem-y":"y","dateFormatItem-yM":"M.y","dateFormatItem-yMd":"d.M.y","dateFormatItem-yMEd":"E d.M.y","dateFormatItem-yMMM":"MMM y","dateFormatItem-yMMMd":"d. MMM y",
"dateFormatItem-yMMMEd":"E d. MMM y","dateFormatItem-yMMMM":"MMMM y","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yQQQQ":"QQQQ y","dateFormatItem-yw":"'uke' w 'i' Y","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateTimeFormats-appendItem-Era":"{1} {0}","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})",
"dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","dateTimeFormats-appendItem-Year":"{1} {0}","field-era":"tidsalder","field-era-short":"tidsalder","field-era-narrow":"tidsalder","field-year":"\u00e5r","field-year-relative+-1":"i fjor","field-year-relative+0":"i \u00e5r","field-year-relative+1":"neste \u00e5r","field-year-short":"\u00e5r","field-year-short-relative+-1":"i fjor","field-year-short-relative+0":"i \u00e5r",
"field-year-short-relative+1":"neste \u00e5r","field-year-narrow":"\u00e5r","field-year-narrow-relative+-1":"i fjor","field-year-narrow-relative+0":"i \u00e5r","field-year-narrow-relative+1":"neste \u00e5r","field-quarter":"kvartal","field-quarter-relative+-1":"forrige kvartal","field-quarter-relative+0":"dette kvartalet","field-quarter-relative+1":"neste kvartal","field-quarter-short":"kv.","field-quarter-short-relative+-1":"forrige kv.","field-quarter-short-relative+0":"dette kv.","field-quarter-short-relative+1":"neste kv.",
"field-quarter-narrow":"kv.","field-quarter-narrow-relative+-1":"forrige kv.","field-quarter-narrow-relative+0":"dette kv.","field-quarter-narrow-relative+1":"neste kv.","field-month":"m\u00e5ned","field-month-relative+-1":"forrige m\u00e5ned","field-month-relative+0":"denne m\u00e5neden","field-month-relative+1":"neste m\u00e5ned","field-month-short":"mnd.","field-month-short-relative+-1":"forrige md.","field-month-short-relative+0":"denne md.","field-month-short-relative+1":"neste md.","field-month-narrow":"md.",
"field-month-narrow-relative+-1":"forrige md.","field-month-narrow-relative+0":"denne md.","field-month-narrow-relative+1":"neste md.","field-week":"uke","field-week-relative+-1":"forrige uke","field-week-relative+0":"denne uken","field-week-relative+1":"neste uke","field-week-short":"uke","field-week-short-relative+-1":"forrige uke","field-week-short-relative+0":"denne uken","field-week-short-relative+1":"neste uke","field-week-narrow":"u.","field-week-narrow-relative+-1":"forrige uke","field-week-narrow-relative+0":"denne uken",
"field-week-narrow-relative+1":"neste uke","field-weekOfMonth":"uke i m\u00e5neden","field-weekOfMonth-short":"uke i mnd.","field-weekOfMonth-narrow":"uke i md.","field-day":"dag","field-day-relative+-1":"i g\u00e5r","field-day-relative+0":"i dag","field-day-relative+1":"i morgen","field-day-short":"dag","field-day-short-relative+-1":"i g\u00e5r","field-day-short-relative+0":"i dag","field-day-short-relative+1":"i morgen","field-day-narrow":"d.","field-day-narrow-relative+-1":"i g\u00e5r","field-day-narrow-relative+0":"i dag",
"field-day-narrow-relative+1":"i morgen","field-dayOfYear":"dag i \u00e5ret","field-dayOfYear-short":"dag i \u00e5ret","field-dayOfYear-narrow":"d. i \u00e5ret","field-weekday":"ukedag","field-weekday-short":"ukedag","field-weekday-narrow":"uked.","field-weekdayOfMonth":"ukedag i m\u00e5neden","field-weekdayOfMonth-short":"uked. i mnd.","field-weekdayOfMonth-narrow":"uked. i md.","field-sun-relative+-1":"forrige s\u00f8ndag","field-sun-relative+0":"s\u00f8ndag","field-sun-relative+1":"neste s\u00f8ndag",
"field-sun-short-relative+-1":"sist s\u00f8n.","field-sun-short-relative+0":"denne s\u00f8n.","field-sun-short-relative+1":"neste s\u00f8n.","field-sun-narrow-relative+-1":"sist s\u00f8.","field-sun-narrow-relative+0":"denne s\u00f8.","field-sun-narrow-relative+1":"neste s\u00f8.","field-mon-relative+-1":"forrige mandag","field-mon-relative+0":"mandag","field-mon-relative+1":"neste mandag","field-mon-short-relative+-1":"sist man.","field-mon-short-relative+0":"denne man.","field-mon-short-relative+1":"neste man.",
"field-mon-narrow-relative+-1":"sist ma.","field-mon-narrow-relative+0":"denne ma.","field-mon-narrow-relative+1":"neste ma.","field-tue-relative+-1":"forrige tirsdag","field-tue-relative+0":"tirsdag","field-tue-relative+1":"neste tirsdag","field-tue-short-relative+-1":"sist tir.","field-tue-short-relative+0":"denne tir.","field-tue-short-relative+1":"neste tir.","field-tue-narrow-relative+-1":"sist ti.","field-tue-narrow-relative+0":"denne ti.","field-tue-narrow-relative+1":"neste ti.","field-wed-relative+-1":"forrige onsdag",
"field-wed-relative+0":"onsdag","field-wed-relative+1":"neste onsdag","field-wed-short-relative+-1":"sist ons.","field-wed-short-relative+0":"denne ons.","field-wed-short-relative+1":"neste ons.","field-wed-narrow-relative+-1":"sist on.","field-wed-narrow-relative+0":"denne on.","field-wed-narrow-relative+1":"neste on.","field-thu-relative+-1":"forrige torsdag","field-thu-relative+0":"torsdag","field-thu-relative+1":"neste torsdag","field-thu-short-relative+-1":"sist tor.","field-thu-short-relative+0":"denne tor.",
"field-thu-short-relative+1":"neste tor.","field-thu-narrow-relative+-1":"sist to.","field-thu-narrow-relative+0":"denne to.","field-thu-narrow-relative+1":"neste to.","field-fri-relative+-1":"forrige fredag","field-fri-relative+0":"fredag","field-fri-relative+1":"neste fredag","field-fri-short-relative+-1":"sist fre.","field-fri-short-relative+0":"denne fre.","field-fri-short-relative+1":"neste fre.","field-fri-narrow-relative+-1":"sist fr.","field-fri-narrow-relative+0":"denne fr.","field-fri-narrow-relative+1":"neste fr.",
"field-sat-relative+-1":"forrige l\u00f8rdag","field-sat-relative+0":"l\u00f8rdag","field-sat-relative+1":"neste l\u00f8rdag","field-sat-short-relative+-1":"sist l\u00f8r.","field-sat-short-relative+0":"denne l\u00f8r.","field-sat-short-relative+1":"neste l\u00f8r.","field-sat-narrow-relative+-1":"sist l\u00f8.","field-sat-narrow-relative+0":"denne l\u00f8.","field-sat-narrow-relative+1":"neste l\u00f8.","field-dayperiod-short":"am/pm","field-dayperiod":"a.m./p.m.","field-dayperiod-narrow":"am/pm",
"field-hour":"time","field-hour-relative+0":"denne timen","field-hour-short":"t","field-hour-short-relative+0":"this hour","field-hour-narrow":"t","field-hour-narrow-relative+0":"this hour","field-minute":"minutt","field-minute-relative+0":"dette minuttet","field-minute-short":"min","field-minute-short-relative+0":"this minute","field-minute-narrow":"m","field-minute-narrow-relative+0":"this minute","field-second":"sekund","field-second-relative+0":"n\u00e5","field-second-short":"sek","field-second-short-relative+0":"n\u00e5",
"field-second-narrow":"s","field-second-narrow-relative+0":"n\u00e5","field-zone":"tidssone","field-zone-short":"tidssone","field-zone-narrow":"tidssone","dayPeriods-format-abbr-midnight":"midn.","dayPeriods-format-abbr-morning1":"morg.","dayPeriods-format-abbr-morning2":"form.","dayPeriods-format-abbr-afternoon1":"etterm.","dayPeriods-format-abbr-evening1":"kveld","dayPeriods-format-abbr-night1":"natt","dayPeriods-format-narrow-midnight":"mn.","dayPeriods-format-narrow-morning1":"mg.","dayPeriods-format-narrow-morning2":"fm.",
"dayPeriods-format-narrow-afternoon1":"em.","dayPeriods-format-narrow-evening1":"kv.","dayPeriods-format-narrow-night1":"nt.","dayPeriods-format-wide-midnight":"midnatt","dayPeriods-format-wide-morning1":"p\u00e5 morgenen","dayPeriods-format-wide-morning2":"p\u00e5 formiddagen","dayPeriods-format-wide-afternoon1":"p\u00e5 ettermiddagen","dayPeriods-format-wide-evening1":"p\u00e5 kvelden","dayPeriods-format-wide-night1":"p\u00e5 natten","dayPeriods-standAlone-abbr-midnight":"midn.","dayPeriods-standAlone-abbr-morning1":"morg.",
"dayPeriods-standAlone-abbr-morning2":"form.","dayPeriods-standAlone-abbr-afternoon1":"etterm.","dayPeriods-standAlone-abbr-evening1":"kveld","dayPeriods-standAlone-abbr-night1":"natt","dayPeriods-standAlone-narrow-midnight":"mn.","dayPeriods-standAlone-narrow-morning1":"mg.","dayPeriods-standAlone-narrow-morning2":"fm.","dayPeriods-standAlone-narrow-afternoon1":"em.","dayPeriods-standAlone-narrow-evening1":"kv.","dayPeriods-standAlone-narrow-night1":"nt.","dayPeriods-standAlone-wide-midnight":"midnatt",
"dayPeriods-standAlone-wide-morning1":"morgen","dayPeriods-standAlone-wide-morning2":"formiddag","dayPeriods-standAlone-wide-afternoon1":"ettermiddag","dayPeriods-standAlone-wide-evening1":"kveld","dayPeriods-standAlone-wide-night1":"natt","dateFormatItem-MMdd":"d.M.","dateFormatItem-yMM":"MM.y","field-day-relative+-2":"i forg\u00e5rs","field-day-relative+2":"i overmorgen","field-day-short-relative+-2":"i forg\u00e5rs","field-day-short-relative+2":"i overmorgen","field-day-narrow-relative+-2":"-2 d.",
"field-day-narrow-relative+2":"+2 d.",_localized:{}}});