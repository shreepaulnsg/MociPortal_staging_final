// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/gridLayoutCalcUtils/rows/_RowModifierLoose","dojo/_base/lang dojox/uuid/generateRandomUuid ../GridLayoutCalculatorQueryUtil ../GridElementBoxCalculator ./RowDataUtil ../../GridQueryUtil".split(" "),function(p,q,r,t,m,u){var l={collectRowBoxes:function(b,a){for(var d=[],g=0;g<b.columns.length;){var f=b.columns[g],e=this._createEmptyBox();f=r.getColumnSpannedFields(b,a,f.field)||[f.field];e.elements=this._getFieldsElements(b,a,f);this._measureBox(e);
var c=d[d.length-1];c&&(c.nextSibling=e,e.prevSibling=c);d.push(e);g+=f.length}return d},_createEmptyBox:function(){return{id:q(),box:null,elements:[],overlappingBoxes:[],overlappingBoxesCache:{},prevSibling:null,nextSibling:null}},_getFieldsElements:function(b,a,d){var g=[];d.forEach(function(f){f={data:a,dataIndex:a.index,field:f,box:t.calcDataBox(b,a,f,{places:2})};g.push(f)});return g},_measureBox:function(b){var a=0;b.elements.forEach(function(d){a+=d.box.w});b.box={x:b.elements[0].box.x,y:b.elements[0].box.y,
h:b.elements[0].box.h,w:a}},mergeBoxesForBottomRow:function(b){var a=this._createEmptyBox();b.forEach(function(d){d.elements.forEach(function(g){a.elements.push({data:null,field:g.field,box:p.clone(g.box)})})});this._measureBox(a);a.box.h=1E6;return[a]},getBoxAtField:function(b,a){return b.filter(function(d){return d.elements[0].field===a})[0]}},v={buildInfluenceTree:function(b,a,d){function g(f,e){(e?a:b).forEach(function(c){var h;if(h=!c.overlappingBoxesCache[f.id]){h=f.box;var k=c.box;h=!(h.x+
.5>=k.x+k.w||h.x+h.w<=k.x+.5)}h&&(f.overlappingBoxes.push(c),f.overlappingBoxesCache[c.id]=!0)});f.overlappingBoxes.forEach(function(c){g(c,!e)})}d=l.getBoxAtField(b,d);g(d,!0);return d}},w={applyForce:function(b,a,d){function g(e,c){var h=e.elements[0];h.data&&m.setDataHeight(b,h.data,h.field,m.getDataHeight(b,h.data,h.field)+(c?-1:1)*f,!0);e.overlappingBoxes.forEach(function(k){g(k,!c)})}var f=this._checkDelta(b,a,d);g(a,!1)},_checkDelta:function(b,a,d){function g(c,h){0!==e&&(h?0>e||(e=Math.min(e,
c.box.h-f),c.prevSibling&&(e=Math.min(e,c.prevSibling.box.y+c.prevSibling.box.h-f-c.box.y)),c.nextSibling&&(e=Math.min(e,c.nextSibling.box.y+c.nextSibling.box.h-f-c.box.y))):0<e||(e=Math.max(e,-(c.box.h-f)),c.prevSibling&&(e=Math.max(e,-(c.box.y+c.box.h-(c.prevSibling.box.y+f)))),c.nextSibling&&(e=Math.max(e,-(c.box.y+c.box.h-(c.nextSibling.box.y+f))))),c.overlappingBoxes.forEach(function(k){g(k,!h)}))}var f=b.layoutDefaults.rowMinHeight;d=Math.max(d,f);var e=d-a.box.h;g(a,!1);return e}},n={_getInluencedStartBox:function(b,
a,d){var g=b.rows[a.index+1];a=l.collectRowBoxes(b,a);b=g?l.collectRowBoxes(b,g):l.mergeBoxesForBottomRow(a);return v.buildInfluenceTree(a,b,d)},getAffectedCells:function(b,a,d){function g(e){if(e.elements[0].data){var c=u.querySingleCell(b,{rowIndex:e.elements[0].data.index,columnField:e.elements[0].field,considerSpans:!0});c&&f.push(c)}e.overlappingBoxes.forEach(g)}var f=[];a=this._getInluencedStartBox(b,a,d);g(a);return f},adjustRowCell:function(b,a,d,g){a=this._getInluencedStartBox(b,a,d);w.applyForce(b,
a,g)}};return{adjustRowHeight:function(b,a,d,g){n.adjustRowCell(b,a,d,g)},getAffectedCells:function(b,a,d){return n.getAffectedCells(b,a,d)}}});