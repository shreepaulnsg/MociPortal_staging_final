// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/comparison/jsonBuilder/_StatsCollector",["dojo/_base/lang","../../../comparison/ComparisonListUtil","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/stdGeographies/StdGeographiesUtil"],function(w,x,y){var u={getStats:function(k,e,f,a,d){var l=[],p=[],n=[],m=0,q=0,g=1<e.length?"shortName":"name";e.forEach(function(c,r){var t=w.mixin({},c.data);k&&(l.push(t),t.StdGeographyName=a&&a[r][g],t.__thisAreaIndex=r);p=p.concat(c.comparisonLevels)});
e=u._comparisonLevelsToGroups(p);var b=e.groups;m+=l.length;b.forEach(function(c){m+=c.features.length});d=u._collectRangesAndFilterAttributes(l,b,d);var h=l.filter(function(c){return!!c}).length;q+=h;b.forEach(function(c){q+=c.features.length});var v={};b.forEach(function(c){c.cache={};c.features.forEach(function(t){c.cache[t.attributes.StdGeographyID]=t});var r=c.cache[f[c.levelId]]||c.features[0];n.push(r&&r.attributes);r&&(v[c.levelId]=c)});return{ranges:d,thisAreas:l,shownGeographiesInGroup:n,
groups:v,numThisAreas:h,numAreasTotal:m,numAreasShown:q,allGeographies:e.features.map(function(c){return c.attributes})}},_comparisonLevelsToGroups:function(k){var e=[],f=[];k.forEach(function(a){if(a.StdGeographyID){var d=a.StdGeographyID+";"+a.StdGeographyLevel+";"+a.StdGeographyName+";";e[d]||(e[d]=!0,a.StdGeographyName&&(d=y.getAreaName(a),d!==a.StdGeographyName&&(a.StdGeographyName=d)),f.push({attributes:a}))}else console.log("Error: Can't add a feature to a group.")});return{features:f,groups:x.getFeatureGroups(f)}},
_collectRangesAndFilterAttributes:function(k,e,f){function a(g){n.forEach(function(b){var h=g[b.fieldName];isNaN(h)||(b.min=Math.min(b.min,h),b.max=Math.max(b.max,h),b.dataArray.push(h))})}function d(g){return!n.some(function(b){var h=f[b.fieldName];b=g[b.fieldName];return h&&(b<h.min||b>h.max)})}if(f){var l={};f.forEach(function(g){l[g.fieldName]=g});f=l}var p=k[0]||e[0]&&e[0].features[0]&&e[0].features[0].attributes,n=[],m;for(m in p)if("__thisAreaIndex"!==m){var q=p[m];"number"!==typeof q||isNaN(q)||
n.push({fieldName:m,min:Infinity,max:-Infinity,dataArray:[]})}k.forEach(function(g,b){a(g);f&&!d(g)&&(k[b]=void 0)});e.forEach(function(g){g.features=g.features.filter(function(b){a(b.attributes);return!f||d(b.attributes)})});return n},applyFieldsToRanges:function(k,e){var f={};k.forEach(function(a){f[a.name]=a});return e.filter(function(a){var d=f[a.fieldName];if(!d)return!1;a.alias=d.label;a.decimals=d.decimals;return!0})}};return u});