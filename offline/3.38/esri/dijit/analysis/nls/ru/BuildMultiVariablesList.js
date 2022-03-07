// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ru/BuildMultiVariablesList",{chooseInputLayer:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0445\u043e\u0434\u043d\u043e\u0439 \u0441\u043b\u043e\u0439",addAVar:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e",distToNearest:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0434\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0433\u043e",attrOfInterest:"\u0410\u0442\u0440\u0438\u0431\u0443\u0442 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0433\u043e",
summaryNearby:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u043b\u0438\u0437\u043b\u0435\u0436\u0430\u0449\u0438\u0445",summaryIntersecting:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u0435\u0440\u0435\u0441\u0435\u043a\u0430\u044e\u0449\u0438\u0445",distToNearestLabel:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043e\u0442 \u0446\u0435\u043d\u0442\u0440\u0430 \u0431\u0438\u043d\u0430 \u0434\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u0441\u043b\u043e\u044f",
attrOfInterestLabel:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044f \u043e\u0442 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u0441\u043b\u043e\u044f",summaryNearbyLabel:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0445 \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043e\u0442 \u0446\u0435\u043d\u0442\u0440\u0430 \u0431\u0438\u043d\u0430",
summaryIntersectingLabel:"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043f\u0435\u0440\u0435\u0441\u0435\u043a\u0430\u044e\u0449\u0438\u0445 \u0431\u0438\u043d",maxDistancefromCtr:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043e\u0442 \u0446\u0435\u043d\u0442\u0440\u0430 \u0431\u0438\u043d\u0430",
fieldToIncude:"\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u043c\u043e\u0435 \u043f\u043e\u043b\u0435",statstoCalculate:"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u043c\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",summFeatuesWithin:"\u0421\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445",layerChangeWarnMsg:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u0441\u043b\u043e\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u044b, \u0435\u0441\u043b\u0438 \u0432\u0445\u043e\u0434\u043d\u043e\u0439 \u0441\u043b\u043e\u0439 \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d",
validationErrorMsg:"\u041f\u0435\u0440\u0435\u0434 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u043d\u043e\u0432\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0438\u0441\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",atleastOneVarMsg:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c\u0443 \u0441\u043b\u043e\u044e \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e"});