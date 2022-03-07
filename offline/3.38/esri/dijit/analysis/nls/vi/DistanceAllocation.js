// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/vi/DistanceAllocation",{inputSourceRasterOrFeatures:"Ch\u1ecdn raster ngu\u1ed3n ho\u1eb7c \u0111\u1ed1i t\u01b0\u1ee3ng",sourceField:"Tr\u01b0\u1eddng ngu\u1ed3n (t\u00f9y ch\u1ecdn)",outputDistanceAllocationRasterName:"Tr\u1ea3 v\u1ec1 t\u00ean raster ph\u00e2n b\u1ed5 kho\u1ea3ng c\u00e1ch",inputBarrierRasterOrFeatures:"Ch\u1ecdn c\u00e1c \u0111\u1ed1i t\u01b0\u1ee3ng ho\u1eb7c raster r\u00e0o c\u1ea3n (t\u00f9y ch\u1ecdn)",inputSurfaceRaster:"Ch\u1ecdn raster b\u1ec1 m\u1eb7t (t\u00f9y ch\u1ecdn)",
inputCostRaster:"Ch\u1ecdn raster chi ph\u00ed (t\u00f9y ch\u1ecdn)",inputVerticalRaster:"Ch\u1ecdn raster d\u1ecdc (t\u00f9y ch\u1ecdn)",verticalFactor:"H\u1ec7 s\u1ed1 d\u1ecdc (t\u00f9y ch\u1ecdn)",inputHorizontalRaster:"Ch\u1ecdn raster ngang (t\u00f9y ch\u1ecdn)",horizontalFactor:"H\u1ec7 s\u1ed1 ngang (t\u00f9y ch\u1ecdn)",outputLayerName:"Ph\u00e2n b\u1ed5 kho\u1ea3ng c\u00e1ch ${layername}",outputDistanceAccumulationRasterName:"Tr\u1ea3 v\u1ec1 t\u00ean raster t\u00edch l\u0169y kho\u1ea3ng c\u00e1ch (t\u00f9y ch\u1ecdn)",
outputBackDirectionRasterName:"Tr\u1ea3 v\u1ec1 t\u00ean raster h\u01b0\u1edbng ng\u01b0\u1ee3c (t\u00f9y ch\u1ecdn)",outputSourceDirectionRasterName:"Tr\u1ea3 v\u1ec1 t\u00ean raster h\u01b0\u1edbng ngu\u1ed3n (t\u00f9y ch\u1ecdn)",outputSourceLocationRasterName:"Tr\u1ea3 v\u1ec1 t\u00ean raster v\u1ecb tr\u00ed ngu\u1ed3n (t\u00f9y ch\u1ecdn)",sourceInitialAccumulation:"T\u00edch l\u0169y ban \u0111\u1ea7u",sourceMaximumAccumulation:"T\u00edch l\u0169y t\u1ed1i \u0111a",sourceCostMultiplier:"B\u1ed9i s\u1ed1 chi ph\u00ed",
sourceDirection:"H\u01b0\u1edbng di chuy\u1ec3n",distanceMethod:"Ph\u01b0\u01a1ng ph\u00e1p kho\u1ea3ng c\u00e1ch",sourceCharacteristicOptions:"T\u00f9y ch\u1ecdn \u0111\u1eb7c \u0111i\u1ec3m ngu\u1ed3n",itemDescription:"L\u1edbp \u0111\u1ed1i t\u01b0\u1ee3ng \u0111\u01b0\u1ee3c t\u1ea1o ra t\u1eeb vi\u1ec7c ch\u1ea1y Ph\u00e2n b\u1ed5 Kho\u1ea3ng c\u00e1ch tr\u00ean ${layername}. ",itemTags:"K\u1ebft qu\u1ea3 Ph\u00e2n t\u00edch, Ph\u00e2n b\u1ed5 Kho\u1ea3ng c\u00e1ch, ${layername} ${fieldname}",
itemSnippet:"L\u1edbp \u0111\u1ed1i t\u01b0\u1ee3ng \u0111\u01b0\u1ee3c t\u1ea1o ra t\u1eeb Ph\u00e2n b\u1ed5 Kho\u1ea3ng c\u00e1ch.",invalidNumber:"Nh\u1eadp m\u1ed9t s\u1ed1 h\u1ee3p l\u1ec7.",or:"ho\u1eb7c",toSource:"\u0110\u1ebfn ngu\u1ed3n",fromSource:"T\u1eeb ngu\u1ed3n",planar:"Ph\u1eb3ng",geoDesic:"Tr\u1eafc \u0111\u1ecba",uniqueId:"ID duy nh\u1ea5t",binary:"Nh\u1ecb ph\u00e2n",linear:"Tuy\u1ebfn t\u00ednh",inverseLinear:"Tuy\u1ebfn t\u00ednh ngh\u1ecbch \u0111\u1ea3o",forward:"V\u1ec1 ph\u00eda tr\u01b0\u1edbc",
symmetricLinear:"Tuy\u1ebfn t\u00ednh \u0111\u1ed1i x\u1ee9ng",symmetricInverseLinear:"Tuy\u1ebfn t\u00ednh ngh\u1ecbch \u0111\u1ea3o \u0111\u1ed1i x\u1ee9ng",cos:"Cos",sec:"Sec",cosSec:"Cos \u00e2\u20ac\u201c Sec",secCos:"Sec \u00e2\u20ac\u201c Cos",zeroFactor:"H\u1ec7 s\u1ed1 kh\u00f4ng",lowCutAngle:"G\u00f3c c\u1eaft th\u1ea5p",highCutAngle:"G\u00f3c c\u1eaft cao",cutAngle:"G\u00f3c c\u1eaft",slope:"Slope (\u0110\u1ed9 d\u1ed1c)",power:"L\u0169y th\u1eeba",cosPower:"L\u0169y th\u1eeba Cos",secPower:"L\u0169y th\u1eeba Sec",
sideValue:"Gi\u00e1 tr\u1ecb b\u00ean",selectField:"Ch\u1ecdn tr\u01b0\u1eddng"});