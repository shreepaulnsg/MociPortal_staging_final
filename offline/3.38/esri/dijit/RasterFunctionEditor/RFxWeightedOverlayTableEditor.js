// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/RasterFunctionEditor/templates/RFxWeightedOverlayTableEditor.html":"\x3cdiv class\x3d'esri-rfx-weighted-overlay-editor'\x3e\r\n  \x3ctable class\x3d'esri-rfx-args-editor__table'\x3e\r\n    \x3ctr class\x3d'esri-rfx-args-editor__tr--arg-name'\x3e\r\n      \x3ctd data-dojo-attach-point\x3d'weightedOverlayTableLabel'\x3e${_i18n.weightedOverlayTable}\x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr class\x3d\"esri-rfx-args-editor__tr--arg-widget\"\x3e\r\n      \x3ctd\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d'gridNode1'\x3e\x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n\r\n    \x3ctr class\x3d'esri-rfx-args-editor__tr--arg-row' data-dojo-attach-point\x3d'sumOfInfluenceRow'\x3e\r\n      \x3ctd\x3e\r\n        \x3cdiv class\x3d\"esri-rfx-args-editor__div--arg-td\"\x3e\r\n          \x3cspan class\x3d\"esri-rfx-args-editor__span--left\" data-dojo-attach-point\x3d'sumOfInfluenceLabel'\x3e${_i18n.sumOfInfluence}\x3c/span\x3e\r\n          \x3cspan class\x3d\"esri-rfx-args-editor__span--right\" data-dojo-attach-point\x3d'sumOfInfluence'\x3e100\x3c/span\x3e\r\n        \x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n\r\n    \x3ctr class\x3d'esri-rfx-args-editor__tr--arg-name'\x3e\r\n      \x3ctd data-dojo-attach-point\x3d'remapTableLabel'\x3e${_i18n.remapTable}\x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr class\x3d\"esri-rfx-args-editor__tr--arg-widget\"\x3e\r\n      \x3ctd\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d'gridNode2'\x3e\x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n\r\n    \x3ctr class\x3d'esri-rfx-args-editor__tr--arg-row' data-dojo-attach-point\x3d'scalesRow'\x3e\r\n      \x3ctd\x3e\r\n        \x3cdiv class\x3d\"esri-rfx-args-editor__div--arg-td\"\x3e\r\n          \x3cspan class\x3d\"esri-rfx-args-editor__span--left\" data-dojo-attach-point\x3d'scalesLabel'\x3e${_i18n.scales}\x3c/span\x3e\r\n          \x3cspan class\x3d\"esri-rfx-args-editor__span--right\" data-dojo-attach-point\x3d'scalesSpan'\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/RasterFunctionEditor/RFxScalesInput\" data-dojo-attach-point\x3d\"scalesInput\"\x3e\x3c/div\x3e\r\n          \x3c/span\x3e\r\n        \x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e\r\n"}});
define("esri/dijit/RasterFunctionEditor/RFxWeightedOverlayTableEditor","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Evented dojo/has ../../kernel dojo/i18n!../../nls/jsapi dojo/text!./templates/RFxWeightedOverlayTableEditor.html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./EditableGridMixin ./RFxGridBase ./utils".split(" "),function(t,p,u,v,w,x,y,z,A,B,C,D,q,E){t=t("RFxWeightedOverlayTableEditor",[A,B,C,v,D],{templateString:z,baseClass:"esriRFxWeightedOverlayTableEditor",
dataTypes_weightedOverlayGrid:[q.DATA_TYPES.raster,q.DATA_TYPES.long,q.DATA_TYPES.field],fieldNames_weightedOverlayGrid:["layer","influence","field"],dataTypes_remapGrid:[q.DATA_TYPES.string,q.DATA_TYPES.scale],fieldNames_remapGrid:["value","scale"],_grid1:null,_grid2:null,_selectedRowId:null,_data1:null,constructor:function(a){this.inherited(arguments);this._i18n=y.widgets.rasterFunctionEditor.rfxWeightedOverlayTableEditor},postCreate:function(){this.inherited(arguments);this._initializeGrids();
this._data1=this._copyData(this._grid1.data);this._addEventHandlers();this._grid1.startup();this._grid2.startup();this.scalesInput.startup()},_initializeGrids:function(){var a=this._getGridSchemas();var c=a[0];a=a[1];var b=this._readArgValues();var d=b[0];var e=b[1];b=b[2];this._grid1=new q({schema:c,data:d,hasIdColumn:!0,inputLayers:this.inputLayers,allowScalar:this.allowScalar,browseProperties:this.browseProperties},this.gridNode1);this._grid2=new q({schema:a,data:e,hasIdColumn:!0,inputLayers:this.inputLayers,
allowScalar:this.allowScalar,browseProperties:this.browseProperties},this.gridNode2);this.scalesInput._setEvalFromTo(b[0].value,b[1].value)},_getGridSchemas:function(){var a=this.fieldNames_weightedOverlayGrid.map(function(b,d){return{label:this._i18n[b],name:b,dataType:this.dataTypes_weightedOverlayGrid[d]}},this),c=this.fieldNames_remapGrid.map(function(b,d){return{label:this._i18n[b],name:b,dataType:this.dataTypes_remapGrid[d]}},this);return[a,c]},_addEventHandlers:function(){this.own(this._grid1._grid.on(".dgrid-content .dgrid-row:click",
p.hitch(this,function(a){a=this._grid1._grid.row(a);a.data.idNum!==this._selectedRowId&&(this._selectedRowId=a.data.idNum,this._handleRowSelect(a))})),this._grid1.on("grid-data-change",p.hitch(this,function(a){this._updateArgValues_weightedOverlayGrid(a)})),this._grid2.on("grid-data-change",p.hitch(this,function(a){this._updateArgValues_remapGrid(a)})),this.scalesInput.on("change",p.hitch(this,function(){this._updateArgValues_scalesInput()})))},_handleRowSelect:function(a){this.inputArgs&&a&&a.data&&
a.data.layer&&a.data.field&&this._refreshRemapTable()},_refreshRemapTable:function(){this._grid2.updateStoreValue(this._getRemapGridData());this._grid2._grid.refresh();this._updateArgValues_scalesInput()},_getRemapGridData:function(){var a=this.inputArgs.Remaps,c=this._selectedRowId-1,b=[];if(0>c||c>a.value.length-1)return b;a.value&&a.value[c]&&a.value[c].split(";").forEach(function(d,e){(e=d.trim().match(/(?:[^\s']+|'[^']*')+/g))&&2===e.length&&(d=e[0],e=e[1],-1<d.indexOf("'")&&(d=d.replace(/[']+/g,
"")),b.push({value:d,scale:e}))});return b},_initLayerRemapStr:function(a,c){var b=a.layerArg.input,d;if(b&&b.value&&b.value.name){b=b.getSelectedLayer(b.value.name);var e="",f=a.idNum,g=this.inputArgs.Remaps,k=this.inputArgs.Fields;b&&b.hasRasterAttributeTable?b.getRasterAttributeTable({renderingRule:b.renderingRule}).then(p.hitch(this,function(l){var h=l&&l.features;if(h){l=l&&l.fields;var n=[],F=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString"];
l&&l.length&&(n=u.filter(l,function(m){return-1<u.indexOf(F,m.type)}),a.field=a.field||n[0].name);d=a.field;(h=h.map(function(m){return m.attributes[d]}).filter(function(m,r,G){return G.indexOf(m)===r}))&&1<h.length&&!isNaN(h[0])&&h.sort(function(m,r){return m-r});e=h.map(function(m,r){"string"===typeof m&&(m=-1<m.indexOf(" ")?"'"+m+"'":m);return m+" "+(r+1)}).join(" ; ");k.value.splice(f-1,1,d);g.value.length===c&&g.value.splice(f-1,1,e);g.value.length<c&&g.value.splice(f-1,0,e);this._refreshRemapTable()}})):
(g.value.length===c&&g.value.splice(f-1,1,e),g.value.length<c&&g.value.splice(f-1,0,e),this._refreshRemapTable())}},_deleteLayerRemapStr:function(a){this.inputArgs.Remaps.value.splice(a-1,1)},_copyData:function(a){var c=[];if(a&&!(1>a.length))return a.forEach(function(b){c.push({id:b.id,idNum:b.idNum,layer:b.layer,influence:b.influence,field:b.field})}),c},_gridDataComparer:function(a){return function(c){return 0===a.filter(function(b){return"*"!==b.idNum&&b.id===c.id&&(!b.layer&&!c.layer||b.layer&&
c.layer&&!b.layer.value&&!c.layer.value||b.layer&&c.layer&&b.layer.value&&c.layer.value&&b.layer.value.name===c.layer.value.name&&b.layer.value.url===c.layer.value.url)&&(!b.influence&&!c.influence||b.influence&&c.influence&&b.influence==c.influence)&&(!b.field&&!c.field||b.field&&c.field&&b.field===c.field)}).length&&"*"!==c.idNum}},_updateArgValues_weightedOverlayGrid:function(){var a=this.inputArgs,c=this._grid1.getStoreValue();if(a){var b=a.Rasters,d=a.Fields,e=a.Influences;a=a.Remaps;var f=0;
b&&(b.value={type:E.ARGUMENT_ARRAY_TYPE,elements:[]});d&&(d.value=[]);e&&(e.value=[]);if(c&&Array.isArray(c)){c.forEach(p.hitch(this,function(h){if("*"!==h.idNum&&h&&h.layerArg&&h.layerArg.input){b&&b.value&&b.value.elements.push(h.layer);if(e&&e.value){if(!h.influence||""===h.influence||isNaN(h.influence))h.influence=1===h.idNum?100:0;var n=h.influence/100;f+=n;e.value.push(n)}d&&d.value&&d.value.push(h.fieldArg.value)}}));this._updateSumOfInfluence(f);if(!this._data1&&1<c.length){var g=c[0];var k=
c[0]}if(this._data1){k=c.filter(this._gridDataComparer(this._data1))[0];var l=this._data1.filter(this._gridDataComparer(c))[0];if(!k&&!l)return;c.length>this._data1.length?g=c[k.idNum-1]:c.length<this._data1.length?(this._deleteLayerRemapStr(l.idNum),this._selectedRowId=l.idNum):c.length===this._data1.length&&k.influence==l.influence&&(g=c[k.idNum-1])}a&&a.value&&g&&g.layerArg.input.value&&(this._selectedRowId=k.idNum,this._initLayerRemapStr(g,c.length-1));this._data1=this._copyData(c)}}},_updateArgValues_remapGrid:function(){var a=
this.inputArgs,c=this._grid2.getStoreValue();if(a){var b=a.Remaps;b&&b.value&&0<this._selectedRowId&&(b.value[this._selectedRowId-1]="");if(c&&Array.isArray(c)){var d="",e=c.length-1;c.forEach(p.hitch(this,function(f,g){if("*"===f.idNum)f.scaleArg=f.scaleArg||{},f.scaleArg.evalValues=[a.EvalFrom.value,a.EvalTo.value];else{f.scale=f.scale||f.scaleArg.value;if(f.value&&f.scale){var k=f.value;f=f.scale;"string"===typeof k&&(k=-1<k.indexOf(" ")?"'"+k+"'":k);d+=k+" "+f}g<e-1&&(d+=" ; ")}}));b.value[this._selectedRowId-
1]=d}}},_updateArgValues_scalesInput:function(){var a=this.scalesInput.scalesComboBox;a.value&&(a=a.value.replace(/\s/g,"").split("-"),2!==a.length||a[0]>a[1]||(this.inputArgs.EvalFrom.value=parseInt(a[0],10),this.inputArgs.EvalTo.value=parseInt(a[1],10),this._updateScaleSelectStore(a),this._updateScaleSelectValue()))},_updateSumOfInfluence:function(a){a=Math.round(100*a);this.sumOfInfluence.innerText=a;100<a?this.sumOfInfluence.classList.add("color-red"):this.sumOfInfluence.classList.remove("color-red")},
_updateScaleSelectStore:function(a){this._grid2.getStoreValue().forEach(function(c){c.scaleArg&&(c.scaleArg.evalValues=a,"*"!==c.idNum&&c.scaleArg.setScaleOptions())})},_updateScaleSelectValue:function(){this._grid2.getStoreValue().forEach(function(a){a.scaleArg&&"*"!==a.idNum&&a.scaleArg.set("value",a.scale)})},_readArgValues:function(){if(this.inputArgs){var a=[],c=[],b=[],d=0,e=this.inputArgs,f=e.Rasters,g=e.Fields,k=e.Influences,l=e.Remaps,h=e.EvalFrom;e=e.EvalTo;if(f&&g&&k&&l){var n=Math.max(f.value&&
f.value.elements&&f.value.elements.length||0,g.value&&g.value.length||0,k.value&&k.value.length||0,l.value&&l.value.length||0);b.push(h);b.push(e);l.value=l.value||[];if(isNaN(n)||0===n)return[a,c,b]}for(;d<n;)a.push({layer:f.value&&f.value.elements&&f.value.elements[d],field:g.value&&g.value[d],influence:k.value&&(100*k.value[d]||(d?0:100))}),d+=1;if(0<l.value.length)a&&0<a.length&&a[0].layer.value&&a[0].field&&(this._selectedRowId=1,c=this._getRemapGridData());else for(d=0;d<n;d++)l.value.push("");
return[a,c,b]}}});w("extend-esri")&&p.setObject("dijit.RasterFunctionEditor.RFxWeightedOverlayTableEditor",t,x);return t});