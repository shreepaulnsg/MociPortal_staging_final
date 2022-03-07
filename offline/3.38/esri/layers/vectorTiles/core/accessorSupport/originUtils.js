// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/accessorSupport/originUtils",["require","exports","../MultiOriginJSONSupport"],function(f,c,e){Object.defineProperty(c,"__esModule",{value:!0});c.updateOrigins=function(b){b&&b.writtenProperties&&b.writtenProperties.forEach(function(a){var d=a.target;a.newOrigin&&a.oldOrigin!==a.newOrigin&&d.isInstanceOf(e)&&d.updateOrigin(a.propName,a.newOrigin)})}});