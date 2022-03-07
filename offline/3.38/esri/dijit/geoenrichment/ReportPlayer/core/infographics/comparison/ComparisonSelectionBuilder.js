// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/comparison/ComparisonSelectionBuilder","dojo/_base/declare dojo/_base/lang dojo/aspect dojo/on esri/dijit/geoenrichment/when dojo/dom-class dojo/dom-construct ../../comparison/ComparisonSelect esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/MouseUtil esri/dijit/geoenrichment/utils/TooltipUtil dojo/i18n!esri/nls/jsapi".split(" "),function(w,x,q,y,z,A,r,B,C,t,u,l){l=l.geoenrichment.dijit.ReportPlayer.ComparisonTableInfographic;
return w(null,{grid:null,groups:null,fields:null,selectedLevelsCache:null,additionalColumnsCache:null,variablesInColumns:!1,isEditMode:!1,simplifySelectionForSingleGeography:!0,numThisAreas:1,constructor:function(a){x.mixin(this,a);this.grid.own(q.after(this.grid,"refresh",this._initDropDowns.bind(this)));this.grid.canSortCellFunc=function(b){return!t.isMouseOver(b.__geographySelect&&b.__geographySelect.domNode)&&!t.isMouseOver(b.__removeAdditionalColumnOrRowButton)};this._initDropDowns()},_initDropDowns:function(){var a;
z(this.grid.getRenderPromise(),function(){if(this.variablesInColumns){var b=this.grid.getSortRowIndexMapping();a=this.grid.queryCells({columnIndex:0});if(b){var k=[];a.forEach(function(d,n){k[b[n]]=d});a=k}}else a=this.grid.queryCells({rowIndex:0});a.shift();for(var h=0;h<this.numThisAreas;h++)a.shift();this._addDropDownsToCells(a)}.bind(this))},_addDropDownsToCells:function(a){a.forEach(function(b,k){this._addDropDownToCell(b,this.groups[k])},this)},_addDropDownToCell:function(a,b){function k(){var c=
a.getFullStyle();d.style.paddingLeft=d.style.paddingRight=c.horizontalPadding+"px";var e=a.getContentWidth()-2+"px";n.style.maxWidth=d.style.width=e;f?f.domNode.style.maxWidth=e:g.style.maxWidth=e;d.style.textAlign=c.horizontalAlign;n.style.height=n.style.lineHeight=a.getContentHeight()/2+"px";g.style.height=g.style.lineHeight=a.getContentHeight()/2+"px";m&&(m.style.top=(g.clientHeight-m.clientHeight)/2+"px")}var h=this;a.__addDropDownCleanUp&&a.__addDropDownCleanUp();if(b.features.length){var d=
r.create("div",{"class":"esriGEComparisonSelectionBuilder_root"}),n=r.create("div",{innerHTML:b.label,"class":"esriGEComparisonSelectionBuilder_title TrimWithEllipses"},d),g=r.create("div",{"class":"esriGEComparisonSelectionBuilder_select"},d);if(1<b.features.length||!this.simplifySelectionForSingleGeography){var f=(new B({"class":"esriGEOnDemandSelectNoBackground",fields:this.fields,canAddFeatures:!0,addFeatureMessage:this.variablesInColumns?l.showInSeparateRow:l.showInSeparateColumn,featureIsAlreadyAddedMessage:l.alreadyAdded,
onFeatureSelected:function(c,e){h.onFeatureSelected(c,e)},isFeatureAdded:function(c,e){return(h.selectedLevelsCache[b.levelId]||b.features[0].attributes.StdGeographyID)===e?!0:(c=h.additionalColumnsCache[b.levelId])&&-1!==c.indexOf(e)},onAddFeature:function(c,e){h.onAddFeature(c,e)}})).placeAt(g);a.own(f);f.setGroups([b]);f.setValue(b.levelId,this.selectedLevelsCache[b.levelId]||b.features[0].attributes.StdGeographyID);var v=a.getFullStyle().color;f.selectedLabel.style.color=v;f.arrow.style.borderTopColor=
v}else if(g.innerHTML=b.features[0].attributes.StdGeographyName,A.add(g,"TrimWithEllipses"),b.isRemovable){g.style.position="relative";var m=r.create("div",{"class":"esriGEComparisonTableInfographic_removeButton"},g);u.setTooltipToNode(m,this.variablesInColumns?l.removeRow:l.removeColumn);y(m,"click",function(c){c.stopPropagation();h.onRemoveAdditionalFeature(b.levelId,b.additionalFeatureId)});a.__removeAdditionalColumnOrRowButton=m}var p=[];p.push(q.after(a,"setWidth",k));p.push(q.after(a,"setHeight",
k));p.push(q.after(this.grid,"renderCell",function(c){c===a&&h._addDropDownToCell(a,b)},!0));p.forEach(function(c){a.own(c)});C.enableContentAbsolute(g,!this.isEditMode,{isTransparent:!0});a.setContent(d);a.set("value","");k();a.__addDropDownCleanUp=function(){p.forEach(function(c){c.remove()});f&&f.destroy();delete a.__addDropDownCleanUp};a.__geographySelect=f;u.autoTooltip(d)}},onFeatureSelected:function(a,b){},onAddFeature:function(a,b){},onRemoveAdditionalFeature:function(a,b){}})});