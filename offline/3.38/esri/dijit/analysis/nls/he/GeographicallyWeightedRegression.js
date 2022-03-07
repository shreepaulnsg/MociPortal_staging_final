// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/he/GeographicallyWeightedRegression",{chooseLayer:"\u05d1\u05d7\u05e8 \u05e9\u05db\u05d1\u05d4 \u05dc\u05e0\u05d9\u05ea\u05d5\u05d7",chooseField:"\u05d1\u05d7\u05e8 \u05d0\u05ea \u05d4\u05e9\u05d3\u05d5\u05ea \u05dc\u05d9\u05e6\u05d9\u05e8\u05ea \u05de\u05d5\u05d3\u05dc",chooseExplanatoryField:"\u05d1\u05d7\u05e8 \u05d0\u05ea \u05d4\u05e9\u05d3\u05d5\u05ea \u05d4\u05de\u05e1\u05d1\u05d9\u05e8\u05d9\u05dd",chooseNeighborhood:"\u05d1\u05d7\u05e8 \u05db\u05d9\u05e6\u05d3 \u05d4\u05e9\u05db\u05d5\u05e0\u05d4 \u05ea\u05d9\u05e7\u05d1\u05e2",
distanceBand:"\u05d8\u05d5\u05d5\u05d7 \u05de\u05e8\u05d7\u05e7",numNeighbors:"\u05de\u05e1\u05e4\u05e8 \u05d4\u05e9\u05db\u05e0\u05d9\u05dd",chooseWeighted:"\u05d1\u05d7\u05e8 \u05db\u05d9\u05e6\u05d3 \u05d9\u05e9\u05d5\u05d9\u05d5\u05ea \u05e9\u05db\u05d5\u05e0\u05d4 \u05e0\u05e9\u05e7\u05dc\u05d5\u05ea",bisquare:"Bisquare",gaussian:"Gaussian",resultLayerName:"\u05e9\u05dd \u05e9\u05db\u05d1\u05ea \u05d4\u05ea\u05d5\u05e6\u05d0\u05d4",outputLayerName:"GWR ${inputLayerName}",distanceBandWarning:"\u05e2\u05e8\u05da \u05e2\u05e8\u05d5\u05e5 \u05d4\u05de\u05e8\u05d7\u05e7 \u05d7\u05d9\u05d9\u05d1 \u05dc\u05d4\u05d9\u05d5\u05ea \u05d1\u05d9\u05df ${min} \u05dc-${max}",
numNeighborsWarning:"\u05de\u05e1\u05e4\u05e8 \u05d4\u05e9\u05db\u05e0\u05d9\u05dd \u05d7\u05d9\u05d9\u05d1 \u05dc\u05d4\u05d9\u05d5\u05ea \u05d1\u05d9\u05df ${min} \u05dc-${max}",explanatoryFieldsWarning:"\u05d1\u05d7\u05e8 \u05dc\u05e4\u05d7\u05d5\u05ea \u05e9\u05d3\u05d4 \u05de\u05e1\u05d1\u05d9\u05e8 \u05d0\u05d7\u05d3",explanatoryLayerWarning:"\u05d4\u05e9\u05db\u05d1\u05d4 \u05e9\u05e0\u05d1\u05d7\u05e8\u05d4 \u05dc\u05d0 \u05de\u05db\u05d9\u05dc\u05d4 \u05e9\u05d3\u05d5\u05ea \u05de\u05e1\u05d1\u05d9\u05e8\u05d9\u05dd \u05d7\u05d5\u05e7\u05d9\u05d9\u05dd \u05db\u05dc\u05e9\u05d4\u05dd, \u05d1\u05d7\u05e8 \u05e9\u05db\u05d1\u05d4 \u05d0\u05d7\u05e8\u05ea.",
inputLayerWarning:"\u05d4\u05e9\u05db\u05d1\u05d4 \u05e9\u05e0\u05d1\u05d7\u05e8\u05d4 \u05dc\u05d0 \u05de\u05db\u05d9\u05dc\u05d4 \u05e9\u05d3\u05d5\u05ea \u05de\u05e1\u05e4\u05e8\u05d9\u05d9\u05dd \u05db\u05dc\u05e9\u05d4\u05dd \u05dc\u05de\u05d9\u05d3\u05d5\u05dc, \u05d1\u05d7\u05e8 \u05e9\u05db\u05d1\u05d4 \u05d0\u05d7\u05e8\u05ea.",itemDescription:"\u05e9\u05db\u05d1\u05ea \u05d9\u05e9\u05d5\u05d9\u05d5\u05ea \u05e9\u05e0\u05d5\u05e6\u05e8\u05d4 \u05de\u05d4\u05e8\u05e6\u05ea \u05e4\u05ea\u05e8\u05d5\u05e0\u05d5\u05ea '\u05e8\u05d2\u05e8\u05e1\u05d9\u05d4 \u05de\u05e9\u05d5\u05e7\u05dc\u05dc\u05ea \u05d2\u05d9\u05d0\u05d5\u05d2\u05e8\u05e4\u05d9\u05ea'.",
itemTags:"\u05ea\u05d5\u05e6\u05d0\u05ea \u05e0\u05d9\u05ea\u05d5\u05d7, \u05e8\u05d2\u05e8\u05e1\u05d9\u05d4 \u05de\u05e9\u05d5\u05e7\u05dc\u05dc\u05ea \u05d2\u05d9\u05d0\u05d5\u05d2\u05e8\u05e4\u05d9\u05ea, ${inputLayerName}, \u05d4\u05ea\u05d0\u05de\u05d4",itemSnippet:"\u05e9\u05db\u05d1\u05ea \u05d9\u05e9\u05d5\u05d9\u05d5\u05ea \u05e9\u05e0\u05d5\u05e6\u05e8\u05d4 \u05de\u05db\u05dc\u05d9 \u05e8\u05d2\u05e8\u05e1\u05d9\u05d4 \u05de\u05e9\u05d5\u05e7\u05dc\u05dc\u05ea \u05d2\u05d9\u05d0\u05d5\u05d2\u05e8\u05e4\u05d9\u05ea'"});