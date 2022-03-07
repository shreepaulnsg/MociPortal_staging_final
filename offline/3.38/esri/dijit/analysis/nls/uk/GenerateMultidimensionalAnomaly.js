// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/uk/GenerateMultidimensionalAnomaly",{toolDefine:"\u0417\u0433\u0435\u043d\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u0431\u0430\u0433\u0430\u0442\u043e\u0432\u0438\u043c\u0456\u0440\u043d\u0443 \u0430\u043d\u043e\u043c\u0430\u043b\u0456\u044e",outputLayerName:"${layername}_anomaly",variablesLabel:"\u041e\u0431\u0440\u0430\u0442\u0438 \u0437\u043c\u0456\u043d\u043d\u0443(\u0456), \u0434\u043b\u044f \u044f\u043a\u0438\u0445 \u0431\u0443\u0434\u0443\u0442\u044c \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u0456 \u0430\u043d\u043e\u043c\u0430\u043b\u0456\u0457",
variablesListLabel:"\u0417\u043c\u0456\u043d\u043d\u0456 [\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u0432\u0438\u043c\u0456\u0440] (\u043e\u043f\u0438\u0441)",methodLabel:"\u041e\u0431\u0440\u0430\u0442\u0438 \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u0430\u043d\u043e\u043c\u0430\u043b\u0456\u0457",calculationIntervalLabel:"\u041e\u0431\u0440\u0430\u0442\u0438 \u0447\u0430\u0441\u043e\u0432\u0438\u0439 \u0456\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0434\u043b\u044f \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044f \u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",
differenceFromMean:"\u0412\u0456\u0434\u043c\u0456\u043d\u043d\u0456\u0441\u0442\u044c \u0432\u0456\u0434 \u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e\u0433\u043e",percentDifferenceFromMean:"\u0412\u0456\u0434\u0441\u043e\u0442\u043a\u043e\u0432\u0430 \u0432\u0456\u0434\u043c\u0456\u043d\u043d\u0456\u0441\u0442\u044c \u0432\u0456\u0434 \u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e\u0433\u043e",percentOfMean:"\u0412\u0456\u0434\u0441\u043e\u0442\u043e\u043a \u0432\u0456\u0434 \u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e\u0433\u043e",
zScore:"Z-\u043e\u0446\u0456\u043d\u043a\u0430",differenceFromMedian:"\u0412\u0456\u0434\u043c\u0456\u043d\u043d\u0456\u0441\u0442\u044c \u0432\u0456\u0434 \u043c\u0435\u0434\u0456\u0430\u043d\u0438",percentDifferenceFromMedian:"\u0412\u0456\u0434\u0441\u043e\u0442\u043a\u043e\u0432\u0430 \u0432\u0456\u0434\u043c\u0456\u043d\u043d\u0456\u0441\u0442\u044c \u0432\u0456\u0434 \u043c\u0435\u0434\u0456\u0430\u043d\u0438",percentOfMedian:"\u0412\u0456\u0434\u0441\u043e\u0442\u043e\u043a \u0432\u0456\u0434 \u043c\u0435\u0434\u0456\u0430\u043d\u0438",
all:"\u0412\u0441\u0456",yearly:"\u0429\u043e\u0440\u0456\u0447\u043d\u0438\u0439",recurringMonthly:"\u041f\u043e\u0432\u0442\u043e\u0440\u044e\u0432\u0430\u043d\u0438\u0439 \u0449\u043e\u043c\u0456\u0441\u044f\u0447\u043d\u0438\u0439",recurringWeekly:"\u041f\u043e\u0432\u0442\u043e\u0440\u044e\u0432\u0430\u043d\u0438\u0439 \u0449\u043e\u0442\u0438\u0436\u043d\u0435\u0432\u0438\u0439",recurringDaily:"\u041f\u043e\u0432\u0442\u043e\u0440\u044e\u0432\u0430\u043d\u0438\u0439 \u0449\u043e\u0434\u0435\u043d\u043d\u0438\u0439",
hourly:"\u0429\u043e\u0433\u043e\u0434\u0438\u043d\u0438",externalRaster:"\u0417\u043e\u0432\u043d\u0456\u0448\u043d\u0456\u0439 \u0440\u0430\u0441\u0442\u0440",meanRaster:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0448\u0430\u0440 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c \u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u044f\u043a \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f",ignoreNodataLabel:"\u0406\u0433\u043d\u043e\u0440\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0432 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u0456",
ignore:"\u0406\u0433\u043d\u043e\u0440\u0443\u0432\u0430\u0442\u0438",analysisLayerLabel:"\u041e\u0431\u0440\u0430\u0442\u0438 \u0431\u0430\u0433\u0430\u0442\u043e\u0432\u0438\u043c\u0456\u0440\u043d\u0438\u0439 \u0448\u0430\u0440 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u0430\u043d\u043e\u043c\u0430\u043b\u0456\u0457",itemDescription:"\u0410\u043d\u0430\u043b\u0456\u0442\u0438\u0447\u043d\u0438\u0439 \u0441\u0435\u0440\u0432\u0456\u0441 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c, \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456 \u0433\u0435\u043d\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u0431\u0430\u0433\u0430\u0442\u043e\u0432\u0438\u043c\u0456\u0440\u043d\u043e\u0457 \u0430\u043d\u043e\u043c\u0430\u043b\u0456\u0457",
itemTags:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u0430\u0441\u0442\u0440\u043e\u0432\u043e\u0433\u043e \u0430\u043d\u0430\u043b\u0456\u0437\u0443, \u0417\u0433\u0435\u043d\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u0431\u0430\u0433\u0430\u0442\u043e\u0432\u0438\u043c\u0456\u0440\u043d\u0443 \u0430\u043d\u043e\u043c\u0430\u043b\u0456\u044e, ${layername}",itemSnippet:"\u0410\u043d\u0430\u043b\u0456\u0442\u0438\u0447\u043d\u0438\u0439 \u0441\u0435\u0440\u0432\u0456\u0441 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c, \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456 \u0433\u0435\u043d\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u0431\u0430\u0433\u0430\u0442\u043e\u0432\u0438\u043c\u0456\u0440\u043d\u043e\u0457 \u0430\u043d\u043e\u043c\u0430\u043b\u0456\u0457"});