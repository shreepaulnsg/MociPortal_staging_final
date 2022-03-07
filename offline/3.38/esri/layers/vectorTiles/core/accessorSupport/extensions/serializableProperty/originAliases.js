// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/accessorSupport/extensions/serializableProperty/originAliases",["require","exports"],function(k,d){Object.defineProperty(d,"__esModule",{value:!0});d.process=function(a){if(a.json&&a.json.origins){var b=a.json.origins,e={"web-document":["web-scene","web-map"]};a=function(c){if(b[c]){var f=b[c];e[c].forEach(function(g){b[g]=f});delete b[c]}};for(var h in e)a(h)}}});