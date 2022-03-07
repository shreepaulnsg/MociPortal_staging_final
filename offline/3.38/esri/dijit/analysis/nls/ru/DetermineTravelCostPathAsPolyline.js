// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ru/DetermineTravelCostPathAsPolyline",{inputSourceLayerLabel:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0440\u0430\u0441\u0442\u0440\u043e\u0432\u044b\u0439 \u0438\u043b\u0438 \u0432\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0439 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u0441\u043b\u043e\u0439 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043f\u0443\u0442\u0438 \u043e\u0442",inputCostRasterLabel:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u0441\u0442\u0440\u043e\u0432\u044b\u0439 \u0441\u043b\u043e\u0439 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f",
inputDestinationLayerLabel:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u0441\u0442\u0440\u043e\u0432\u044b\u0439 \u0438\u043b\u0438 \u0432\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0439 \u0441\u043b\u043e\u0439 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043f\u0443\u0442\u0435\u0439",pathTypeLabel:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c\u044b\u0445 \u043f\u0443\u0442\u0435\u0439 (\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e)",
bestSingle:"\u041e\u0434\u0438\u043d \u043d\u0430\u0438\u043b\u0443\u0447\u0448\u0438\u0439",eachCell:"\u0414\u043e \u043a\u0430\u0436\u0434\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438",eachZone:"\u0414\u043e \u043a\u0430\u0436\u0434\u043e\u0439 \u0437\u043e\u043d\u044b",destinationField:"\u0412\u044b\u0431\u043e\u0440 \u043f\u043e\u043b\u044f \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u043f\u0443\u043d\u043a\u0442\u0430 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",
outputPolylineName:"\u0418\u043c\u044f \u0438\u0442\u043e\u0433\u043e\u0432\u043e\u0439 \u043f\u043e\u043b\u0438\u043b\u0438\u043d\u0438\u0438",outputLayerName:"\u041e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432 \u0432\u0438\u0434\u0435 \u043f\u043e\u043b\u0438\u043b\u0438\u043d\u0438\u0438 ${layername}",drawDestinationPointLayerName:"\u0426\u0435\u043b\u0435\u0432\u044b\u0435 \u0442\u043e\u0447\u043a\u0438",
drawSourcePointLayerName:"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0435 \u0442\u043e\u0447\u043a\u0438",itemDescription:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0439 \u0441\u043b\u043e\u0439, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u043c \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u0443\u0442\u0438 \u0432 \u0432\u0438\u0434\u0435 \u043f\u043e\u043b\u0438\u043b\u0438\u043d\u0438\u0438 \u0434\u043b\u044f ${layername}. ",
itemTags:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0430\u043d\u0430\u043b\u0438\u0437\u0430, \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u0443\u0442\u044c \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432 \u0432\u0438\u0434\u0435 \u043f\u043e\u043b\u0438\u043b\u0438\u043d\u0438\u0438, ${layername} ${fieldname}",itemSnippet:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0439 \u0441\u043b\u043e\u0439, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u043c \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u0443\u0442\u044c \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432 \u0432\u0438\u0434\u0435 \u043f\u043e\u043b\u0438\u043b\u0438\u043d\u0438\u0438.",
missingMessage:"\u0421\u043b\u043e\u0439 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u0435\u043d \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0441\u043b\u043e\u044f \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430",noValueMessage:"\u042d\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c",
placeHolder:"--\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043b\u043e\u0439--"});