// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/constraints/templates/UseLimitations.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'resConst\',forInspire: true,label:\'${i18nArcGIS.codelist.RS_UseLimitations}\',\r\n        matchTopNode:[\r\n          {\r\n            qPath:\'LegConsts/inspireAccessUseConditions\',\r\n            qValue: null,\r\n            qMode: \'must\'\r\n          }\r\n        ]"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'LegConsts\',showHeader:false"\x3e\r\n    \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/HiddenElement" data-dojo-props\x3d"target:\'useConsts\'"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'RestrictCd\'"\x3e\r\n                    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute" data-dojo-props\x3d"target:\'value\',value:\'008\'"\x3e\r\n                    \x3c/div\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n    \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                data-dojo-props\x3d"target:\'inspireAccessUseConditions\',showHeader:false"\x3e\r\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n                    data-dojo-props\x3d"target:\'ConditionsAccUseCd\',showHeader:false"\x3e\r\n                    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n                        data-dojo-props\x3d"target:\'value\',showHeader:false,minOccurs:1"\x3e\r\n                        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n                            data-dojo-props\x3d"codelistType:\'RS_UseLimitations\'"\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n    \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/HiddenElement"\r\n                data-dojo-props\x3d"target:\'othConsts\',value:\'${i18nArcGIS.constraints.legal.othConsts}\'"\x3e\r\n            \x3c/div\x3e\r\n    \r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/constraints/UseLimitations","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/UseLimitations.html".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.constraints.UseLimitations",a,d);return a});