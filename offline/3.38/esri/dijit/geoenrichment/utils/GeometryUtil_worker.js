// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
(function(a){a.addEventListener&&a.addEventListener("message",function(b){var c=b.data.rings;c.forEach(function(d){(new GeometryUtil_base.RingInfo(d)).generalize(b.data.maxAllowableOffset,.8)});a.postMessage&&a.postMessage({msgId:b.data.msgId,rings:c})},!1)})(this);