// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/VisibleScaleRangeSlider/recommendedScales",["dojo/_base/lang"],function(b){var a={_recommendedScales:{world:1E8,continent:5E7,countriesBig:25E6,countriesSmall:12E6,statesProvinces:6E6,stateProvince:3E6,counties:15E5,county:75E4,metropolitanArea:32E4,cities:16E4,city:8E4,town:4E4,neighborhood:2E4,streets:1E4,street:5E3,buildings:2500,building:1250,smallBuilding:800,rooms:400,room:100},getRecommendedScale:function(c){return a._recommendedScales[c]},all:function(){return b.clone(a._recommendedScales)}};
return a});