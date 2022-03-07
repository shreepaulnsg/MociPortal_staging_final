// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ar/ClassifyObjectsUsingDeepLearning",{toolDefine:"\u062a\u0635\u0646\u064a\u0641 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0634\u0627\u0645\u0644",inputFeaturesLabel:"\u0627\u062e\u062a\u0631 \u0637\u0628\u0642\u0629 \u0645\u0639\u0627\u0644\u0645 \u0644\u0644\u0643\u0627\u0626\u0646\u0627\u062a (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",outputLayerName:"${layername}_classifiedObjects",
modelLabel:"\u0627\u062e\u062a\u0631 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0639\u0645\u064a\u0642 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0644\u062a\u0635\u0646\u064a\u0641 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a",modelArgsLabel:"\u062a\u062d\u062f\u064a\u062f \u0648\u0633\u064a\u0637\u0627\u062a \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0634\u0627\u0645\u0644",classLabelFieldLabel:"\u062d\u062f\u062f \u0627\u0633\u0645 \u0645\u062d\u062f\u062f \u062a\u0633\u0645\u064a\u0629 \u0627\u0644\u062a\u0635\u0646\u064a\u0641 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",
processingModeLabel:"\u0648\u0636\u0639 \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629",processAsMosaicLabel:"\u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 \u0643\u0635\u0648\u0631\u0629 \u0641\u0633\u064a\u0641\u0633\u0627\u0621",processAsItemsLabel:"\u0645\u0639\u0627\u0644\u062c\u0629 \u062c\u0645\u064a\u0639 \u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0646\u0642\u0637\u064a\u0629 \u0628\u0634\u0643\u0644 \u0645\u0646\u0641\u0635\u0644",queryModelArgsMsg:"\u062c\u0627\u0631 \u0627\u0644\u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0639\u0646 \u0648\u0633\u064a\u0637\u0627\u062a \u0627\u0644\u0646\u0645\u0648\u0630\u062c...",
queryModelArgsErrMsg:"\u0641\u0634\u0644 \u0627\u0644\u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0639\u0646 \u0648\u0633\u0627\u0626\u0637 \u0627\u0644\u0646\u0645\u0648\u0630\u062c.",valueLabel:"\u0627\u0644\u0642\u064a\u0645\u0629",nameLabel:"\u0627\u0644\u0627\u0633\u0645",analysisLayerLabel:"\u0627\u062e\u062a\u0631 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629 \u0644\u062a\u0635\u0646\u064a\u0641 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a",
itemDescription:"\u062a\u062d\u0644\u064a\u0644 \u062e\u062f\u0645\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u0645\u0646 \u062a\u0635\u0646\u064a\u0641 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0634\u0627\u0645\u0644",itemTags:"\u0646\u062a\u064a\u062c\u0629 \u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0646\u0642\u0637\u064a\u0629\u060c \u062a\u0635\u0646\u064a\u0641 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0634\u0627\u0645\u0644\u060c ${layername}",
itemSnippet:"\u062a\u062d\u0644\u064a\u0644 \u062e\u062f\u0645\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u0645\u0646 \u062a\u0635\u0646\u064a\u0641 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0634\u0627\u0645\u0644"});