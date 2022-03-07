// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/th/CalculateDistance",{inputLayerLabel:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e41\u0e23\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e2b\u0e23\u0e37\u0e2d\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e15\u0e31\u0e49\u0e07\u0e02\u0e2d\u0e07\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e04\u0e33\u0e19\u0e27\u0e13\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07\u0e44\u0e1b\u0e22\u0e31\u0e07",inputRaster:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e41\u0e23\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e2b\u0e23\u0e37\u0e2d\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e08\u0e30\u0e43\u0e0a\u0e49\u0e41\u0e2a\u0e14\u0e07\u0e2d\u0e38\u0e1b\u0e2a\u0e23\u0e23\u0e04 (\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01)",
maxDistanceLabel:"\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14\u0e43\u0e19\u0e01\u0e32\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13 (\u0e44\u0e21\u0e48\u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a)",outputCellSize:"\u0e02\u0e19\u0e32\u0e14\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c (\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01)",distanceMethod:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07",resultDistLayerName:"\u0e0a\u0e37\u0e48\u0e2d\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c",
resultDirectionLayerName:"\u0e0a\u0e37\u0e48\u0e2d\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c (\u0e44\u0e21\u0e48\u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a)",resultAllocationLayerName:"\u0e0a\u0e37\u0e48\u0e2d\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e23\u0e23\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c (\u0e44\u0e21\u0e48\u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a)",
outputBackDirectionName:"\u0e0a\u0e37\u0e48\u0e2d\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a\u0e02\u0e2d\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c (\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01)",outputLayerName:"\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07\u0e17\u0e35\u0e48\u0e04\u0e33\u0e19\u0e27\u0e13\u0e02\u0e2d\u0e07 ${layername}",allocationFieldLabel:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e23\u0e23 (\u0e44\u0e21\u0e48\u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a)",
itemDescription:"\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e01\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e19\u0e27\u0e13\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07\u0e43\u0e19 ${layerName} ",itemTags:"\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c, \u0e04\u0e33\u0e19\u0e27\u0e13\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07, ${layername} ${fieldname}",
itemSnippet:"\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19\u0e08\u0e32\u0e01\u0e04\u0e33\u0e19\u0e27\u0e13\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07",planar:"\u0e01\u0e23\u0e32\u0e1f\u0e40\u0e0a\u0e34\u0e07\u0e23\u0e30\u0e19\u0e32\u0e1a",geodesic:"\u0e40\u0e23\u0e02\u0e32\u0e04\u0e13\u0e34\u0e15\u0e02\u0e2d\u0e07\u0e1c\u0e34\u0e27\u0e2b\u0e19\u0e49\u0e32\u0e42\u0e04\u0e49\u0e07",
selectDistance:"-- \u0e40\u0e25\u0e37\u0e2d\u0e01 --"});