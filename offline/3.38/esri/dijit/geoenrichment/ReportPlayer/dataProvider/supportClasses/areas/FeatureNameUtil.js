// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/areas/FeatureNameUtil",[],function(){return{_nameScores:[/^name$/i,/^title$/i,/(^name)|(name$)/i,/(^title)|(title$)/i],guessFeatureName:function(a){var d=Object.keys(a.attributes),b;this._nameScores.some(function(e){return d.some(function(c){if(e.test(c))return b=c,!0})});return a.attributes[b]||""}}});