// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/support/arcadeUtils",["require","exports","esri/renderers/arcadeUtils","esri/arcade/Dictionary"],function(f,b,c,e){Object.defineProperty(b,"__esModule",{value:!0});b.createSyntaxTree=function(a){return c.createSyntaxTree(a)};b.createFunction=function(a,d){return c.createFunction(a,d)};b.createExecContext=function(a,d){return c.createExecContext(a,d)};b.executeFunction=function(a,d){return c.executeFunction(a,d)};b.extractFieldNames=function(a){return c.extractFieldNames(a)};
b.getViewInfo=function(a){if(a&&a.viewingMode&&null!=a.scale&&a.spatialReference)return{view:new e({viewingMode:a.viewingMode,scale:a.scale}),sr:a.spatialReference}}});