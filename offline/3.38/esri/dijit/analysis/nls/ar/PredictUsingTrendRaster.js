// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ar/PredictUsingTrendRaster",{toolDefine:"\u0627\u0644\u062a\u0646\u0628\u0624 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0628\u064a\u0627\u0646\u0627\u062a \u0646\u0642\u0637\u064a\u0629 \u0644\u0644\u0627\u062a\u062c\u0627\u0647",outputLayerName:"${layername}_predict",variablesLabel:"\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u062a\u063a\u064a\u0631 (\u0627\u0644\u0645\u062a\u063a\u064a\u0631\u0627\u062a) \u0627\u0644\u0630\u064a \u0633\u064a\u062a\u0645 \u0627\u0644\u062a\u0646\u0628\u0624 \u0628\u0647",
variablesListLabel:"\u0627\u0644\u0645\u062a\u063a\u064a\u0631\u0627\u062a [\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0628\u0639\u062f] (\u0627\u0644\u0648\u0635\u0641)",dimensionDefinitionLabel:"\u0627\u062e\u062a\u0631 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629 \u0641\u064a \u062a\u0648\u0641\u064a\u0631 \u0642\u064a\u0645 \u0623\u0628\u0639\u0627\u062f \u0627\u0644\u062a\u0646\u0628\u0624",dimensionValuesLabel:"\u062d\u062f\u062f \u0642\u064a\u0645\u0629 (\u0642\u064a\u0645) \u0627\u0644\u0628\u064f\u0639\u062f \u0644\u0644\u062a\u0646\u0628\u0624",
dimensionIntervalLabel:"\u062d\u062f\u062f \u0641\u0627\u0635\u0644 \u0627\u0644\u0628\u064f\u0639\u062f \u0644\u0644\u062a\u0646\u0628\u0624",intervalValueLabel:"\u062d\u062f\u062f \u0639\u062f\u062f \u0627\u0644\u062e\u0637\u0648\u0627\u062a \u0628\u064a\u0646 \u0642\u064a\u0645\u062a\u064a \u0627\u0644\u0628\u062f\u0627\u064a\u0629 \u0648\u0627\u0644\u0646\u0647\u0627\u064a\u0629",intervalUnitLabel:"\u0627\u062e\u062a\u0631 \u0627\u0644\u0648\u062d\u062f\u0629 \u0627\u0644\u062a\u064a \u0633\u064a\u062a\u0645 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0647\u0627 \u0644\u0641\u0627\u0635\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0632\u0645\u0646\u064a\u0629",
startLabel:"\u0642\u064a\u0645\u0629 \u0627\u0644\u0628\u062f\u0627\u064a\u0629",endLabel:"\u0642\u064a\u0645\u0629 \u0627\u0644\u0646\u0647\u0627\u064a\u0629",byValueLabel:"\u0627\u0644\u0642\u064a\u0645\u0629 \u062d\u0633\u0628",byIntervalLabel:"\u062d\u0633\u0628 \u0627\u0644\u0641\u0627\u0635\u0644 \u0627\u0644\u0632\u0645\u0646\u064a",hours:"\u0633\u0627\u0639\u0627\u062a",days:"\u0627\u0644\u0623\u064a\u0627\u0645",weeks:"\u0623\u0633\u0627\u0628\u064a\u0639",months:"\u0623\u0634\u0647\u0631",
years:"\u0633\u0646\u0648\u0627\u062a",custom:"\u062a\u062e\u0635\u064a\u0635",itemDescription:"\u062e\u062f\u0645\u0629 \u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u064f\u0646\u0634\u0623\u0629 \u0645\u0646 \u0627\u0644\u062a\u0646\u0628\u0624 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0646\u0642\u0637\u064a\u0629 \u0644\u0644\u0627\u062a\u062c\u0627\u0647",itemTags:"\u0646\u062a\u064a\u062c\u0629 \u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0646\u0642\u0637\u064a\u0629\u060c \u0627\u0644\u062a\u0646\u0628\u0624 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0646\u0642\u0637\u064a\u0629\u060c ${layername}",
itemSnippet:"\u062e\u062f\u0645\u0629 \u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u064f\u0646\u0634\u0623\u0629 \u0645\u0646 \u0627\u0644\u062a\u0646\u0628\u0624 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0646\u0642\u0637\u064a\u0629 \u0644\u0644\u0627\u062a\u062c\u0627\u0647"});