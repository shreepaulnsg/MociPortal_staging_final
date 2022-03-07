///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define(['dojo/_base/declare', 'jimu/BaseWidget', 'dojo/on', 'dojo/_base/lang', "esri/layers/FeatureLayer", "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/Color", "esri/graphic", 'esri/tasks/query', 'esri/tasks/QueryTask', 'esri/toolbars/draw', "dojo/i18n!esri/nls/jsapi", 'jimu/MapManager','dojo/domReady!'],

function(declare, BaseWidget, on, lang, FeatureLayer, SimpleFillSymbol, SimpleLineSymbol, Color, Graphic, Query, QueryTask, Draw,esriBundle,  MapManager) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {
    //please note that this property is be set by the framework when widget is loaded.
    //templateString: template,

    baseClass: 'jimu-widget-UpdateAttributes',
    drawGra:null,
    pin:"",
    plotCoverage:"",
    plotcoveragePerc:"",
    permArea:"",
    permAreaPerc:"",
    plantingArea:"",
    plantingAreaPerc:"",
    buildFrontPerc:"",
    buildheight:"",
    coolMethod:"",
    eleDemand:"",
    waterDemand:"",
    sewerLoad:"",
    gasConnected:"",
    tseconnected:"",
    errobj:null,
    planRegRec:null,
    utilRec:null,
    plots:"",
    planningReg:"",
    utilityAllocation:"",
    graSymb:null,
    updateAttribute:null,
    clearData:null,
    postCreate: function() {
      this.inherited(arguments);
      pin = 0;
      errobj= null;
      plots = this.config.indPlots;
      planningReg = this.config.planRegulation;
      utilityAllocation= this.config.utilAllocation;
      graSymb = null;
      updateAttribute  = null;
      clearData = null;
      //console.log('postCreate');
    },

    startup: function() {
      this.inherited(arguments);

      plotCoverage = dojo.byId("txtPlotCover");
      plotcoveragePerc = dojo.byId("txtPlotCoverPerc");
      permArea = dojo.byId("txtPermArea");
      permAreaPerc = dojo.byId("txtPermAreaPerc");
      plantingArea = dojo.byId("txtPlantArea");
      plantingAreaPerc = dojo.byId("txtPlantAreaPerc");
      buildFrontPerc = dojo.byId("txtBuildFrontPerc");
      buildheight = dojo.byId("txtBuildHeight");

      coolMethod = dojo.byId("txtCoolMet");
      eleDemand = dojo.byId("txtEleDemand");
      waterDemand = dojo.byId("txtPotWaterDemand");
      sewerLoad = dojo.byId("txtSewLoad");
      gasConnected = dojo.byId("txtGasConn");
      tseconnected = dojo.byId("txtTseConn");

      errobj = dojo.byId("errMsg");
      errobj.innerText = "";
      
      var selectGraphic = dojo.byId("drawGeom");
      on(selectGraphic, "click", lang.hitch(this, function() {
        this.getSelectedFeatures();
      }));
      clearData = dojo.byId("clearValues");
      on(clearData, "click", lang.hitch(this, function() {
        this.clearTextValues();
      }));
      updateAttribute = dojo.byId("updAttributes");
      on(updateAttribute, "click", lang.hitch(this, function() {
        this.updateAttributes();
      }));
      // this.mapIdNode.innerHTML = 'map id:' + this.map.id;
      //dojo.byId('errpane').style.display='none';
      //console.log('startup')
      ;
    },
    
    getSelectedFeatures : function(){
      errobj.innerText = "";
      
       this.disablePopup();
        drawGra = new Draw(this.map);
        esri.bundle.toolbars.draw.addPoint = "Click on plot to get attributes";
        drawGra.activate(Draw.POINT);
        drawGra.on("draw-complete", lang.hitch(this, function(evt){
          this.map.graphics.clear();
          this.selectedFeatInfo(evt);  
          drawGra.deactivate();
        }));
    },


    selectedFeatInfo: function(evt){
      var geom = evt.geometry;

      var fl = new FeatureLayer(plots);
      var query = new Query();
      query.returnGeometry = true;
      query.outFields = ["*"];
      query.geometry= geom;
      fl.queryFeatures(query, lang.hitch(this, function(resultFeat){
        graSymb = new SimpleFillSymbol(SimpleFillSymbol.STYLE_NULL,
          new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
          new Color([0,255,255]), 3),new Color([255,0,0,0.25])
        );
  
        var plotGraphic = new Graphic(resultFeat.features[0].geometry,graSymb);
        this.map.graphics.add(plotGraphic);

          pin  = resultFeat.features[0].attributes["PIN"];
          this.getPlanRegAttr(pin);
          this.getUtilityAttr(pin);
          this.enablePopup();
          this.enableElements();
          document.getElementById("updAttributes").style.pointerEvents = 'auto';
          document.getElementById("clearValues").style.pointerEvents = 'auto';          
      }));
    },
     
    disablePopup: function(){
      var mapMgr  = MapManager.getInstance();
      mapMgr.disableWebMapPopup();
    },

    enablePopup: function(){
      var mapMgr  = MapManager.getInstance();
      mapMgr.enableWebMapPopup();
    },

    getPlanRegAttr: function(pinNo){
      var planOutFieldList = ["OBJECTID","PLOT_COVERAGE_SQM","PLOT_COVERAGE_PERCENT","PERMEABLE_AREA_SQM","PERMEABLE_AREA_PERCENT","PLANTING_AREA_SQM","PLANTING_AREA_PERCENT","BUILDING_FRONTAGE_PERCENT","BUILDING_HEIGHT"];
      var planQry  = this.createQuery(pinNo, planOutFieldList);
      var planQryTask = new QueryTask(planningReg);
      planQryTask.execute(planQry, lang.hitch(this, function(planRecs){
        if(planRecs.features.length > 0){
            planRegRec = planRecs.features[0];
            plotCoverage.value = planRecs.features[0].attributes.PLOT_COVERAGE_SQM;
            if(plotCoverage.value == ""){plotCoverage.value =0;}
            plotcoveragePerc.value =planRecs.features[0].attributes.PLOT_COVERAGE_PERCENT;
            if(plotcoveragePerc.value == ""){plotcoveragePerc.value =0;}
            permArea.value = planRecs.features[0].attributes.PERMEABLE_AREA_SQM;
            if(permArea.value == ""){permArea.value =0;}
            permAreaPerc.value =planRecs.features[0].attributes.PERMEABLE_AREA_PERCENT;
            if(permAreaPerc.value == ""){permAreaPerc.value =0;}
            plantingArea.value = planRecs.features[0].attributes.PLANTING_AREA_SQM;
            if(plantingArea.value == ""){plantingArea.value =0;}
            plantingAreaPerc.value = planRecs.features[0].attributes.PLANTING_AREA_PERCENT;
            if(plantingAreaPerc.value == ""){plantingAreaPerc.value =0;}
            buildFrontPerc.value = planRecs.features[0].attributes.BUILDING_FRONTAGE_PERCENT;
            if(buildFrontPerc.value == ""){buildFrontPerc.value =0;}
            buildheight.value = planRecs.features[0].attributes.BUILDING_HEIGHT;
            if(buildheight.value == ""){buildheight.value =0;}
        }
        else{
          errobj.innerText = "key Planning Regulation records not found for this plot";
        }
      }));
    },

    createQuery: function(pinNo,fideldList){
      var qry = new Query();
      qry.returnGeometry = false;
      qry.outFields = fideldList;
      qry.where= "PIN_NO="+pinNo;
      return qry;
    },

    getUtilityAttr: function(pinNo){
      var utilOutFieldList = ["OBJECTID","COOLING_METHOD","ELEC_DEMAND_LOAD_KVA","POTABLE_WATER_CM_PER_DAY","SEWERAGE_CM_PER_DAY","GAS_CONNECTED","TSE_CONNECTED"];
      var utilQry  = this.createQuery(pinNo, utilOutFieldList);
      var utilQryTask = new QueryTask(utilityAllocation);
      utilQryTask.execute(utilQry, function(utilRecs){
        if(utilRecs.features.length > 0){
          utilRec = utilRecs.features[0];
          
          if( utilRecs.features[0].attributes.COOLING_METHOD === null){
              coolMethod.value = "";
              coolMethod.placeholder ="";
          }
          else{
            coolMethod.value = utilRecs.features[0].attributes.COOLING_METHOD;
          }
          eleDemand.value = utilRecs.features[0].attributes.ELEC_DEMAND_LOAD_KVA;
          if(eleDemand.value == ""){eleDemand.value =0;}
          waterDemand.value =utilRecs.features[0].attributes.POTABLE_WATER_CM_PER_DAY;
          if(waterDemand.value == ""){waterDemand.value =0;}
          sewerLoad.value = utilRecs.features[0].attributes.SEWERAGE_CM_PER_DAY;
          if(sewerLoad.value == ""){sewerLoad.value =0;}
          if( utilRecs.features[0].attributes.GAS_CONNECTED === null){
            gasConnected.value = "";
            gasConnected.placeholder ="";
        }
        else{
          gasConnected.value = utilRecs.features[0].attributes.GAS_CONNECTED;
        }
        if( utilRecs.features[0].attributes.TSE_CONNECTED === null){
          tseconnected.value = "";
          tseconnected.placeholder ="";
      }
      else{
        tseconnected.value = utilRecs.features[0].attributes.TSE_CONNECTED;
      }

        }
        else{
          errobj.innerText = "Utility Allocation records not found for this plot";
        }
      });
    },
    onOpen: function(){
      errobj.innerText ="";
      pin = 0;
     this.disableElements();
     this.clearTextValues();
    },

    disableElements: function(){
      plotCoverage.disabled  = true;
      plotCoverage.placeholder = "Click On Plot To Get Value";
      plotcoveragePerc.disabled = true;
      plotcoveragePerc.placeholder = "Click On Plot To Get Value";
      permArea.disabled = true;
      permArea.placeholder = "Click On Plot To Get Value";
      permAreaPerc.disabled= true;
      permAreaPerc.placeholder = "Click On Plot To Get Value";
      plantingArea.disabled = true;
      plantingArea.placeholder = "Click On Plot To Get Value";
      plantingAreaPerc.disabled = true;
      plantingAreaPerc.placeholder = "Click On Plot To Get Value";
      buildFrontPerc.disabled = true;
      buildFrontPerc.placeholder = "Click On Plot To Get Value";
      buildheight.disabled = true;
      buildheight.placeholder = "Click On Plot To Get Value";

      coolMethod.disabled = true;
      coolMethod.placeholder = "Click On Plot To Get Value";
      eleDemand.disabled = true;
      eleDemand.placeholder = "Click On Plot To Get Value";
      waterDemand.disabled = true;
      waterDemand.placeholder = "Click On Plot To Get Value";
      sewerLoad.disabled = true;
      sewerLoad.placeholder = "Click On Plot To Get Value";
      gasConnected.disabled = true;
      gasConnected.placeholder = "Click On Plot To Get Value";
      tseconnected.disabled = true;
      tseconnected.placeholder = "Click On Plot To Get Value";

      document.getElementById("updAttributes").style.pointerEvents = 'none';
      document.getElementById("clearValues").style.pointerEvents = 'none';
      
    },

    enableElements: function(){
      plotCoverage.disabled  = false;
      plotcoveragePerc.disabled = false;
      permArea.disabled = false;
      permAreaPerc.disabled= false;
      plantingArea.disabled = false;
      plantingAreaPerc.disabled = false;
      buildFrontPerc.disabled = false;
      buildheight.disabled = false;

      coolMethod.disabled = false;
      eleDemand.disabled = false;
      waterDemand.disabled = false;
      sewerLoad.disabled = false;
      gasConnected.disabled = false;
      tseconnected.disabled = false;
      updateAttribute.disabled = false;
    },
    
    updateAttributes:function(){
      errobj.innerText ="";
      if(pin == 0){
        errobj.innerText ="Select plot and get attribute values";
        return;
      }
      var planRegLayer = new FeatureLayer(planningReg);
      var planAttr = {};
      planAttr["OBJECTID"] = planRegRec.attributes.OBJECTID;
      if(isNaN(plotCoverage.value)){
        errobj.innerText = "Plot Coverage should be number";
        return;
      }
      else{
        planAttr["PLOT_COVERAGE_SQM"] = plotCoverage.value;
      }
     
      if(isNaN(plotcoveragePerc.value)){
        errobj.innerText = "Plot Coverage(%) should be number";
        return;
      }
      else{
        planAttr["PLOT_COVERAGE_PERCENT"] = plotcoveragePerc.value;
      }
      if(isNaN(permAreaPerc.value)){
        errobj.innerText = "Permeabe Area(%) should be number";
        return;
      }
      else{
        planAttr["PERMEABLE_AREA_PERCENT"] = permAreaPerc.value;
      }
      if(isNaN(permArea.value)){
        errobj.innerText = "Permeable Area should be number";
        return;
      }
      else{
        planAttr["PERMEABLE_AREA_SQM"] = permArea.value;
      }
      if(isNaN(plantingArea.value)){
        errobj.innerText = "planting Area should be number";
        return;
      }
      else{
        planAttr["PLANTING_AREA_SQM"] = plantingArea.value;
      }
      if(isNaN(plantingAreaPerc.value)){
        errobj.innerText = "plantingArea(%) should be number";
        return;
      }
      else{
        planAttr["PLANTING_AREA_PERCENT"] = plantingAreaPerc.value;
      }
      if(isNaN(buildFrontPerc.value)){
        errobj.innerText = "Buildering Front(%) should be number";
        return;
      }
      else{
        planAttr["BUILDING_FRONTAGE_PERCENT"] = buildFrontPerc.value;
      }
      if(isNaN(buildheight.value)){
        errobj.innerText = "Building Height  should be number";
        return;
      }
      else{
        planAttr["BUILDING_HEIGHT"] = buildheight.value;
      }
      planRegRec.attributes = planAttr;
      planRegLayer.applyEdits("",[planRegRec],"",onResult, onFail);
      function onResult(res)
                {
                  if(errobj.innerText == ""){
                    errobj.innerText = "Planning Reulations Attributes Update Were Completed";
                  }
                  else{
                    errobj.innerText +=  " and Planning Reulations Attributes Update Were Completed";
                  }
                }
                
                function onFail(obj)
                {
                  if(errobj.innerText == ""){
                    errobj.innerText = "Planning Reulations Attributes Update Were Failed";
                  }
                  else{
                    errobj.innerText +=  " and Planning Reulations Attributes Update Were Failed";
                  }
                }

                var utilityAllocLayer = new FeatureLayer(utilityAllocation);
                var utilAttr ={};
                utilAttr["OBJECTID"] =  utilRec.attributes.OBJECTID;
                if(coolMethod.value != ""){
                  utilAttr["COOLING_METHOD"] = coolMethod.value;
                }
                
                if(isNaN(eleDemand.value)){
                  errobj.innerText = "Electric Demand should be number";
                  return;
                }
                else{
                  utilAttr["ELEC_DEMAND_LOAD_KVA"] = eleDemand.value;
                }
                if(isNaN(waterDemand.value)){
                  errobj.innerText = "Potable Water Demand should be number";
                  return;
                }
                else{
                  utilAttr["POTABLE_WATER_CM_PER_DAY"] = waterDemand.value;
                }
                if(isNaN(sewerLoad.value)){
                  errobj.innerText = "Sewarage load should be number";
                  return;
                }
                else{
                  utilAttr["SEWERAGE_CM_PER_DAY"] = sewerLoad.value;
                }
                utilAttr["GAS_CONNECTED"] = null;
                if(gasConnected.value != ""){
                  utilAttr["GAS_CONNECTED"] = gasConnected.value;
                }
                utilAttr["TSE_CONNECTED"] = null;
                if(tseconnected.value != ""){
                  utilAttr["TSE_CONNECTED"] = tseconnected.value;
                }
                utilRec.attributes = utilAttr;
                utilityAllocLayer.applyEdits("",[utilRec],"", onUtilitySuccess, onUtilityFail);
                function onUtilitySuccess(obj)
                      {
                        if(errobj.innerText == ""){
                          errobj.innerText = "Utility Allocation Attributes Update Were Completed";
                        }
                        else{
                          errobj.innerText +=  " and Utility Allocation Attributes Update Were Completed";
                        }
                      }
                function onUtilityFail(obj)
                      {
                        if(errobj.innerText == ""){
                          errobj.innerText = "Utility Allocation Attributes Update Were Failed";
                        }
                        else{
                          errobj.innerText +=  " and Utility Allocation Attributes Update Were Failed";
                        }
                      }
    },
    
    clearTextValues: function(){
      this.map.graphics.clear();
      this.disableElements();
      pin = 0;
      errobj.innerText ="";

      plotCoverage.value = "";
      plotcoveragePerc.value = "";
      permArea.value = "";
      permAreaPerc.value ="";
      plantingArea.value = "";
      plantingAreaPerc.value = "";
      buildFrontPerc.value ="";
      buildheight.value = "";

      coolMethod.value = "";
      eleDemand.value =  "";
      waterDemand.value =  "";
      sewerLoad.value =  "";
      gasConnected.value =  "";
      tseconnected.value =  "";
    },

    onClose: function(){
      console.log('onClose');
      this.map.graphics.clear();
    },

    onMinimize: function(){
      console.log('onMinimize');
    },

    onMaximize: function(){
      console.log('onMaximize');
    },

    onSignIn: function(credential){
      /* jshint unused:false*/
      console.log('onSignIn');
    },

    onSignOut: function(){
      console.log('onSignOut');
    },

    showVertexCount: function(count){
      this.vertexCount.innerHTML = 'The vertex count is: ' + count;
    }
  });
});