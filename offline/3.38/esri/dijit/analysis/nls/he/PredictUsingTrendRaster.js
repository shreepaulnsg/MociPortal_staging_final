// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/he/PredictUsingTrendRaster",{toolDefine:"\u05d7\u05d9\u05d6\u05d5\u05d9 \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05e8\u05e1\u05d8\u05e8 \u05e7\u05d5 \u05de\u05d2\u05de\u05d4",outputLayerName:"${layername}_predict",variablesLabel:"\u05d1\u05d7\u05e8 \u05d0\u05ea \u05d4\u05de\u05e9\u05ea\u05e0\u05d4/\u05d9\u05dd \u05dc\u05d7\u05d9\u05d6\u05d5\u05d9",variablesListLabel:"\u05de\u05e9\u05ea\u05e0\u05d9\u05dd [Dimension Info] (\u05ea\u05d9\u05d0\u05d5\u05e8)",dimensionDefinitionLabel:"\u05d1\u05d7\u05e8 \u05d0\u05ea \u05d4\u05e9\u05d9\u05d8\u05d4 \u05e9\u05d1\u05d4 \u05e0\u05e2\u05e9\u05d4 \u05e9\u05d9\u05de\u05d5\u05e9 \u05dc\u05e6\u05d5\u05e8\u05da \u05d7\u05d9\u05d6\u05d5\u05d9 \u05e2\u05e8\u05db\u05d9 \u05de\u05de\u05d3",
dimensionValuesLabel:"\u05e6\u05d9\u05d9\u05df \u05e2\u05e8\u05da/\u05d9 \u05de\u05de\u05d3 \u05dc\u05d7\u05d9\u05d6\u05d5\u05d9",dimensionIntervalLabel:"\u05e6\u05d9\u05d9\u05df \u05de\u05e8\u05d5\u05d5\u05d7 \u05de\u05de\u05d3 \u05dc\u05d7\u05d9\u05d6\u05d5\u05d9",intervalValueLabel:"\u05e6\u05d9\u05d9\u05df \u05d0\u05ea \u05de\u05e1\u05e4\u05e8 \u05d4\u05e6\u05e2\u05d3\u05d9\u05dd \u05d1\u05d9\u05df \u05e2\u05e8\u05db\u05d9 \u05d4\u05d4\u05ea\u05d7\u05dc\u05d4 \u05d5\u05d4\u05e1\u05d9\u05d5\u05dd",
intervalUnitLabel:"\u05d1\u05d7\u05e8 \u05d0\u05ea \u05d4\u05d9\u05d7\u05d9\u05d3\u05d4 \u05e9\u05d1\u05d4 \u05d9\u05e2\u05e9\u05d4 \u05e9\u05d9\u05de\u05d5\u05e9 \u05e2\u05d1\u05d5\u05e8 \u05de\u05e8\u05d5\u05d5\u05d7 \u05e2\u05e8\u05da \u05d4\u05d6\u05de\u05df",startLabel:"\u05e2\u05e8\u05da \u05d4\u05ea\u05d7\u05dc\u05d4",endLabel:"\u05e2\u05e8\u05da \u05e1\u05d9\u05d5\u05dd",byValueLabel:"\u05dc\u05e4\u05d9 \u05e2\u05e8\u05da",byIntervalLabel:"\u05dc\u05e4\u05d9 \u05de\u05e8\u05d5\u05d5\u05d7",
hours:"\u05e9\u05e2\u05d5\u05ea",days:"\u05d9\u05de\u05d9\u05dd",weeks:"\u05e9\u05d1\u05d5\u05e2\u05d5\u05ea",months:"\u05d7\u05d5\u05d3\u05e9\u05d9\u05dd",years:"\u05e9\u05e0\u05d9\u05dd",custom:"\u05de\u05d5\u05ea\u05d0\u05dd",itemDescription:"\u05e0\u05d9\u05ea\u05d5\u05d7 \u05e9\u05d9\u05e8\u05d5\u05ea \u05d4\u05ea\u05de\u05d5\u05e0\u05d4 \u05e9\u05e0\u05d5\u05e6\u05e8 \u05de\u05d7\u05d9\u05d6\u05d5\u05d9 \u05ea\u05d5\u05da \u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05e8\u05e1\u05d8\u05e8 \u05e7\u05d5 \u05de\u05d2\u05de\u05d4",
itemTags:"\u05ea\u05d5\u05e6\u05d0\u05ea \u05e0\u05d9\u05ea\u05d5\u05d7 \u05e8\u05e1\u05d8\u05e8, \u05d7\u05d9\u05d6\u05d5\u05d9 \u05ea\u05d5\u05da \u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05e8\u05e1\u05d8\u05e8 \u05e7\u05d5 \u05de\u05d2\u05de\u05d4, ${layername}",itemSnippet:"\u05e0\u05d9\u05ea\u05d5\u05d7 \u05e9\u05d9\u05e8\u05d5\u05ea \u05d4\u05ea\u05de\u05d5\u05e0\u05d4 \u05e9\u05e0\u05d5\u05e6\u05e8 \u05de\u05d7\u05d9\u05d6\u05d5\u05d9 \u05ea\u05d5\u05da \u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05e8\u05e1\u05d8\u05e8 \u05e7\u05d5 \u05de\u05d2\u05de\u05d4"});