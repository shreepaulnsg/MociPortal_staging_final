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

define([
  'dojo/_base/declare',
  'jimu/BaseWidget',
  'jimu/portalUtils',
  'dojo/_base/array',
  "dojo/store/Memory",
  "dijit/form/ComboBox",
  'dojo/_base/lang',
  'dojo/Deferred',
  "jimu/dijit/Message",
  'jimu/dijit/LoadingIndicator',
  './Print',
  "esri/request",
  'jimu/portalUrlUtils',
  'esri/arcgis/utils',
  'dojo/_base/html',
  'jimu/utils',
  "esri/geometry/Extent",
  'jimu/dijit/PageUtils',
  'esri/tasks/query',
  'esri/tasks/QueryTask',
  "esri/graphic",
  "esri/layers/GraphicsLayer",
  "esri/symbols/SimpleFillSymbol",
  "esri/symbols/SimpleLineSymbol",
  'dojo/on',
  'dojo/_base/html',
  'esri/Color',
  "esri/symbols/TextSymbol",
  "esri/geometry/Point", "esri/SpatialReference", "esri/symbols/SimpleMarkerSymbol", "esri/tasks/GeometryService", "esri/symbols/Font", "dojo/number",
],
  function (
    declare, BaseWidget, portalUtils, array, Memory, ComboBox, lang, Deferred,
    Message, LoadingIndicator, Report, esriRequest,
    portalUrlUtils, arcgisUtils, html, jimuUtils, Extent, PageUtils, Query, QueryTask, Graphic, GraphicsLayer, SimpleFillSymbol, SimpleLineSymbol, on, html, Color, TextSymbol, Point, SpatialReference, SimpleMarkerSymbol, GeometryService, Font, number
  ) {
    return declare([BaseWidget], {
      baseClass: 'jimu-widget-print',
      name: 'Reports',
      className: 'esri.widgets.Print',
      _portalPrintTaskURL: null,
      reportData: any = "1",
      format: string = "pdf",
      reportTitle: string,
      reportTemplate: string,
      dynamicLayer: string,
      print_map: null,
      dynamicMap: any = null,
      customTextElement: any = null,
      defaultCustomTextElement: any = null,
      multiCriteriaCond: "",
      _createPrintMap: function (report) {
        var reportMapItemId;
        // document.getElementById("aprint").style.pointerEvents = "none";
        // document.getElementById("aprint").style.cursor = "default";
         switch (report) {
          case "0"://plot allocation
            reportMapItemId = window.location.href.includes("/?locale=ar") ? "da8ea2e6ca1a42d6b3d32259fcbaa147" : "5076ae91c40d4faab84edcb8da660496";
            break;
          case "1"://project status
            reportMapItemId = window.location.href.includes("/?locale=ar") ? "7602da55a7c6492c831022a4ade916bf" : "7b912e5c0a794dbf9d98ae704ba8a80f";
            break;
          case "2"://Delayed Payments
            reportMapItemId = window.location.href.includes("/?locale=ar") ? "dd7c7dae66c6406b8fd3aea92342561b" : "f77f7a76a5f744edbc3d0ade1885cca0";
            break;
          case "3":
            reportMapItemId = "f3d3cf5a18fa4e52b50aba4efd770e91";
            break;
          default:
            reportMapItemId = "5076ae91c40d4faab84edcb8da660496";
        }
        var initialExtent = new Extent({
           "xmax": 5725815.369063433,
          "xmin": 5716513.938183993,
          "ymax": 2896686.7328092344,
          "ymin": 2892998.6461944794,
          "spatialReference": {
            "wkid": 102100
          }
        });
        var portalUrl = "http://gisstg.moci.gov.qa/geoportal";// portalUrlUtils.getStandardPortalUrl(portalUrl);
        var itemUrl = "http://gisstg.moci.gov.qa/geoportal/sharing/rest/content/items";//portalUrlUtils.getBaseItemUrl(portalUrl)
        arcgisUtils.arcgisUrl = itemUrl;
        var mapDiv = html.create('div', {
          id: "printMap",
          style: lang.mixin({
            display: 'none',
            position: 'absolute',
            backgroundColor: '#EEEEEE',
            overflow: 'hidden',
            minWidth: '1px',
            minHeight: '1px'
          }, jimuUtils.getPositionStyle({ left: 0, top: 40, right: 0, bottom: 0 }))
        }, "jimu-layout-manager");
        var mapDef = arcgisUtils.createMap(reportMapItemId, mapDiv, { mapOptions: { extent: initialExtent } });
        mapDef.then(lang.hitch(this, (response) => {
          var map = response.map;
          map.itemInfo = response.itemInfo;
          // document.getElementById("aprint").style.pointerEvents = "auto";
          // document.getElementById("aprint").style.cursor = "pointer";
          dynamicMap = map;
          this.setConfig();
        }));
      },

      onFilterChange() {
        if (this.selectedFilter.value == "0") {
          document.getElementById("firm").style.display = "none";
          document.getElementById("pin").style.display = "";
          document.getElementById("plot").style.display = "none";
        }
        if (this.selectedFilter.value == "1") {
          document.getElementById("pin").style.display = "none";
          document.getElementById("firm").style.display = "";
          document.getElementById("plot").style.display = "none";
        }
        if (this.selectedFilter.value == "2") {
          document.getElementById("pin").style.display = "none";
          document.getElementById("firm").style.display = "none";
          document.getElementById("plot").style.display = "";
        }
      },
      onReportChange() {
        selectedReport = this.selectedReport.value;
        if (this.reportData == "1") {
          this._createPrintMap(selectedReport);
        }
        if (selectedReport == "3") {
          document.getElementById("pinNo_r").value="";
          document.getElementById("firmName").value="";
          document.getElementById("plotno").value="";
          this.selectedFilter.value = "0";
          document.getElementById("factoryFilter").style.display = "";
          document.getElementById("pin").style.display = "";
          document.getElementById("output").style.display = "none";
          document.getElementById("fileType").style.display = "none";
        } else {
          document.getElementById("factoryFilter").style.display = "none";
          document.getElementById("pin").style.display = "none";
          document.getElementById("firm").style.display = "none";
          document.getElementById("plot").style.display = "none";
          document.getElementById("output").style.display = "";
          document.getElementById("fileType").style.display = "";
        }
      },
      drpDatachange() {
        this.reportData = this.selectedReportData.value;
        if (this.reportData == "1") {
          this._createPrintMap(selectedReport);
          this.rdoNo.disabled = true;
        } else {
          this.rdoNo.disabled = false;
        }
      },
      setConfig: function () {
        defaultCustomTextElement = [{
          Date: ""
        }];
        if (this.selectedReport.value == 0) {
          this.reportTemplate = "Plot_Allocation";
          this.reportTitle = this.nls.Ptitle;
          dynamicLayer = window.location.href.includes("/?locale=ar") ? "https://gisstg.moci.gov.qa/server/rest/services/Moci/AllocationStatus_AR/MapServer/1" : "https://gisstg.moci.gov.qa/server/rest/services/Moci/AllocationStatus/MapServer/1";
        }
        if (this.selectedReport.value == 1) {
          this.reportTemplate = "Construction_Status";
          this.reportTitle = this.nls.Ctitle; //"Construction Status Report";
          dynamicLayer = window.location.href.includes("/?locale=ar") ? "https://gisstg.moci.gov.qa/server/rest/services/Moci/ProjectStatus_AR/MapServer/1" : "https://gisstg.moci.gov.qa/server/rest/services/Moci/ProjectStatus/MapServer/1";
        }
        if (this.selectedReport.value == 2) {
          this.reportTemplate = "Delayed_Payments";
          this.reportTitle = this.nls.Dtitle; //"Delayed Payments Report";
          dynamicLayer = window.location.href.includes("/?locale=ar") ? "https://gisstg.moci.gov.qa/server/rest/services/Moci/Delayed_Payments_AR/MapServer/0" : "https://gisstg.moci.gov.qa/server/rest/services/Moci/Delayed_Payments/MapServer/0";
        }
        if (this.selectedReport.value == 3) {
          this.reportTemplate = "Factory-Report";
          this.reportTitle = this.nls.Ftitle; //"Factory Report";
          dynamicLayer = "https://gisstg.moci.gov.qa/server/rest/services/Moci/FactoryReport/MapServer/0";
        }

      },
      drpPinchange(value) {
        geometryService = new GeometryService("http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");
        dynamicMap.graphics.clear();
        if (this.id == "pinNo_r") {
          pinNoVal = value;
          multiCriteriaCond = "PIN_NO=" + pinNoVal;
        }
        else if (this.id == "firmName") {
          indNameVal = value;
          multiCriteriaCond = "FIRM_AR_NAME=N'" + indNameVal + "'";
        }
        else if (this.id == "plotno") {
          plotVal = value;
          multiCriteriaCond = "PLOT_NO=N'" + plotVal + "'";
        }
        var fqueryTask = new QueryTask(dynamicLayer);
        var fquery = new Query();
        fquery.returnGeometry = true;
        fquery.outFields = ["LICENSE_STATUS_EN_DESC", "ISIC_SUBGROUP_II_AR_DESC", "ISIC_SUBGROUP_II_EN_DESC", "ISIC_SUBGROUP_I_AR_DESC", "ISIC_SUBGROUP_I_EN_DESC", "FIRM_STATUS_AR_DESC", "ISIC_MAIN_EN_DESC", "ISIC_MAIN_AR_DESC", "PIN_NO", "FIRM_AR_NAME", "PLOT_NO", "PLOT_AREA", "LICENSE_NO", "INDUSTRIAL_REG_NO", "FIRM_STATUS_AR", "LICENSE_STATUS_AR_DESC", "PHASE_DESCRIPTION_DESC", "ISIC_MAIN_AR", "ISIC_SUBGROUP_I_AR", "ISIC_SUBGROUP_II_AR"];
        fquery.where = multiCriteriaCond;
        fquery.outSpatialReference = dynamicMap.spatialReference;
        // When resolved, returns features and graphics that satisfy the query.
        fqueryTask.execute(fquery).then((results) => {
          plotCoordinates = results.features[0].geometry.rings;
          factoryDeatails = results.features[0].attributes;
          var qryFeatures = results.features;
          if (qryFeatures.length > 0) {
            customTextElement = [
              { "Factory Name": window.location.href.includes("/?locale=ar") ? factoryDeatails["FIRM_AR_NAME"] : "" },
              { "PIN_No": factoryDeatails["PIN_NO"] ? factoryDeatails["PIN_NO"].toString() : "" },
              { "Plot No": factoryDeatails["PLOT_NO"] ? factoryDeatails["PLOT_NO"] : "" },
              { "License No": factoryDeatails["LICENSE_NO"] ? factoryDeatails["LICENSE_NO"] : "" },
              { "Registration No": factoryDeatails["INDUSTRIAL_REG_NO"] },
              { "Firm Status": window.location.href.includes("/?locale=ar") ? factoryDeatails["FIRM_STATUS_AR_DESC"] : '' },
              { "Land Status": window.location.href.includes("/?locale=ar") ? factoryDeatails["LICENSE_STATUS_AR_DESC"] : factoryDeatails["LICENSE_STATUS_EN_DESC"] },
              { "Project Phase": factoryDeatails["PHASE_DESCRIPTION_DESC"] },
              { "ISIC Main": window.location.href.includes("/?locale=ar") ? factoryDeatails["ISIC_MAIN_AR_DESC"] : factoryDeatails["ISIC_MAIN_EN_DESC"] },
              { "ISICSubgroup1": window.location.href.includes("/?locale=ar") ? factoryDeatails["ISIC_SUBGROUP_I_AR_DESC"] : factoryDeatails["ISIC_SUBGROUP_I_EN_DESC"] },
              { "ISICSubgroup2": window.location.href.includes("/?locale=ar") ? factoryDeatails["ISIC_SUBGROUP_II_AR_DESC"] : factoryDeatails["ISIC_SUBGROUP_II_EN_DESC"] }
            ];
            var printCoArrayLen = 24;
            var xcorobj, ycorobj, sobj;
            for (var i = 1; i <= printCoArrayLen; i++) {
              xcorobj = {}, ycorobj = {}; sobj = {};
              let xvalue = plotCoordinates[0][i] ? plotCoordinates[0][i][0].toFixed(2).toString() : "";
              xcorobj['X' + i] = xvalue;
              let yvalue = plotCoordinates[0][i] ? plotCoordinates[0][i][1].toFixed(2).toString() : "";
              ycorobj['Y' + i] = yvalue;
              let svalue = plotCoordinates[0][i] ? i : "";
              sobj['S' + i] = svalue;
              if (plotCoordinates[0][i]) {
                var point = new Point(plotCoordinates[0][i][0], plotCoordinates[0][i][1], new SpatialReference({ wkid: 102100 }));
                //var font = new Font("10px", Font.STYLE_ITALIC, Font.VARIANT_NORMAL, Font.WEIGHT_BOLD, "Courier");
		var font = new Font("18px", Font.STYLE_NORMAL, Font.VARIANT_NORMAL, Font.WEIGHT_BOLD, "Times");                
		// var textSymbol = new TextSymbol(
                //   "X: " + number.format(plotCoordinates[0][i][0]) + ", Y: " + number.format(plotCoordinates[0][i][1]),
                //   font, new Color([0, 0, 0]));
                var symbol = new SimpleMarkerSymbol(
                  SimpleMarkerSymbol.STYLE_CIRCLE, 
                  30, 
                  new SimpleLineSymbol(
                    SimpleLineSymbol.STYLE_SOLID, 
                    new Color([141, 0, 52, 0.9]), 
                    2
                  ), new Color([200, 235, 254, 0.5]));
                var markerSymbol = new SimpleMarkerSymbol({
                  "color": [200, 235, 254, 0],
                  "size": 21,
                  "overlap":false,
                  "angle": 30,
                  "xoffset": 0,
                  "yoffset": 0,
                  "type": "esriSMS",
                  "style": "esriSMSCircle",
                  "outline": {
                     "color": [141, 0, 52],
                    "width": 2.0,
                    "type": "esriSLS",
                    "style": "esriSLSSolid"
                  }
                });
                
                var textSymbol = new TextSymbol(
                  number.format(i),
                  //font, new Color([0, 0, 0]));
		            font, new Color([255,0,0]));
                var labelPointGraphic = new Graphic(point, textSymbol.setOffset(0,-4));
                var markerGraphic = new Graphic(point, symbol);
                // add the label point graphic to the map
                dynamicMap.graphics.add(labelPointGraphic);
                dynamicMap.graphics.add(markerGraphic);
              }

              customTextElement.push(xcorobj);
              customTextElement.push(ycorobj);
              customTextElement.push(sobj);
            }

            const symb = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
              new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                new Color([141, 1, 52]), 2), new Color([255, 255, 0, 0.25])
            );

            var geomExtent = null;
            var fcount = 0;
            qryFeatures.forEach(feature => {
              var graphic = new Graphic(feature.geometry, symb);
              var test = new TextSymbol(value);
              var pnt = feature.geometry.getExtent().getCenter();
              var lblGra = new Graphic(pnt, test);
              dynamicMap.graphics.add(lblGra);
              dynamicMap.graphics.add(graphic);
              fcount = fcount + 1;
              if (!geomExtent) {
                geomExtent = graphic.geometry.getExtent();
              }
              else {
                var curExt = graphic.geometry.getExtent();
                var newExt = geomExtent.union(graphic.geometry.getExtent());
                geomExtent = newExt;
              }
              // geometryService.simplify([feature.geometry], getLabelPoints);
            });
            dynamicMap.setExtent(geomExtent.expand(2));
          }
          function getLabelPoints(geometries) {
            if (geometries[0].rings.length > 0) {
              geometryService.labelPoints(geometries, function (labelPoints) { // callback
                var font = new Font("20px", Font.STYLE_NORMAL, Font.VARIANT_NORMAL, Font.WEIGHT_BOLDER);
                array.forEach(labelPoints, function (labelPoint) {
                  // create a text symbol
                  var textSymbol = new TextSymbol(
                    "X: " + number.format(labelPoint.x) + ", Y: " + number.format(labelPoint.y),
                    font, new Color([0, 0, 0]));
                  var labelPointGraphic = new Graphic(labelPoint, textSymbol);

                  // add the label point graphic to the map
                  dynamicMap.graphics.add(labelPointGraphic);
                });
              });
            } else {
              alert("Invalid Polygon - must have at least 3 points");
            }
          }
        });
      },
      _initReport: function () {
        var DatosReporte2 = [];
        var printData = [];
        this.report = new Report({
          footNotes: this.reportTitle,
          //printTaskUrl: this.reportTemplate == "Factory" ? "https://gisstg.moci.gov.qa/server/rest/services/Moci/ExportWebMap2/GPServer/Export%20Web%20Map" : "https://gisstg.moci.gov.qa/server/rest/services/Moci/ExportWebMap/GPServer/Export%20Web%20Map",
          printTaskUrl: window.location.href.includes("/?locale=ar") ? "https://gisstg.moci.gov.qa/server/rest/services/Moci/ExportWebMap_AR/GPServer/Export%20Web%20Map" : "https://gisstg.moci.gov.qa/server/rest/services/ExportWebMap2/GPServer/Export%20Web%20Map",
          reportLayout: {
            "pageSize": this.reportData == "1" && this.reportTemplate != "Factory-Report" ? PageUtils.PageSizes.A3 : PageUtils.PageSizes.A4,
            "orientation": PageUtils.Orientation.Landscape
          }
        });
        if (this.reportTemplate == "Factory-Report") {
          printData = [
            {
              //addPageBreak: true,
              type: "map",
              map: dynamicMap
            }
          ];
          this.report.print(this.reportTemplate, this.reportTitle, printData, "images/app-logo - Copy.png", this.reportTemplate == "Factory-Report" ? customTextElement : defaultCustomTextElement);
        }
        if (this.reportData == "1" && this.reportTemplate != "Factory-Report") {
          printData = [
            {
              //addPageBreak: true,
              type: "map",
              map: dynamicMap
            }
          ];
          if (this.format == "pdf") {
            this.report.print(this.reportTemplate, this.reportTitle, printData, "images/app-logo - Copy.png", this.reportTemplate == "Factory-Report" ? customTextElement : defaultCustomTextElement);
          }
        }
        if (this.reportData == "2" && this.reportTemplate != "Factory-Report") {
          var queryTask;
          if (this.reportTemplate != "Plot_Allocation") {
            queryTask = new QueryTask(dynamicLayer);
          } else {
            queryTask = new QueryTask("https://gisstg.moci.gov.qa/server/rest/services/Moci/AllocationStatus/MapServer/3");
          }
          var query = new Query();
          var RECIEPT_ALLOCATION_SIGNE;
          var allocation_date, DUE_DATE;
          var options = { month: 'long', day: 'numeric', year: 'numeric' };
          var Delay_in_Days;
          let arLocale = Intl.NumberFormat('ar');
          query.returnGeometry = false;
          if (this.reportTemplate == "Plot_Allocation") {
            query.outFields = ["LOCATION_AR", "CANCEL_STATUS ", "NO_OF_PLOTS", "TOTAL_AREA"];
          }
          else if (this.reportTemplate == "Construction_Status") {
            query.outFields = ["FIRM_NAME_EN", "FIRM_AR_NAME", "PIN_NO", "PLOT_NO", "PLOT_AREA", "CONTRACTOR_NAME_AR", "CONTRACTOR_NAME_EN", "ENGINEER_NAME", "PHASE_DESCRIPTION_DESC",
              "PREPARE_COMPLETION_STATUS",
              "PREPARE_END_DATE",
              "EXCAVATIONS_COMPLETION_STATUS",
              "EXCAVATIONS_END_DATE",
              "CONCRETING_COMPLETION_STATUS",
              "CONCRETING_END_DATE", "HANGAR_CONSTRUCTION_STATUS",
              "HANGAR_CONSTRUCTION_END_DATE", "WALL_CONSTRUCTION_STATUS", "WALL_CONSTRUCTION_END_DATE",
              "EXTERNAL_WORK_STATUS", "EXTERNAL_WORK_END_DATE", "INITIAL_OPERATION_STATUS", "INITIAL_OPERATION_END_DATE", "allocation_date"];
          }
          else if (this.reportTemplate == "Delayed_Payments") {
            query.outFields = ["FIRM_EN_NAME", "FIRM_AR_NAME", "PIN_NO", "PLOT_NO", "PLOT_AREA", "ISIC_MAIN_AR_DESC", "ISIC_MAIN_EN_DESC", "COUNT_PAYMENTS_DUE", "SUM_PAY_VALUE", "ALLOCATION_DATE"];
          }
          else {
            query.outFields = ["PIN_NO", "PLOT_NO", "FIRM_EN_NAME", "FIRM_STATUS_DESC", "COUNT_PAYMENTS", "SUM_PAY_VALUE", "RECIEPT_ALLOCATION_SIGNE", "BLOCKS_AREA"];
          }
          query.where = "1=1";
          if (this.reportTemplate == "Plot_Allocation") {
            if (this.format == "excel") {
              DatosReporte2[0] = [this.nls.PIndustrialareasubLocation, this.nls.Pallocationstatus, this.nls.Pnoofplots, this.nls.Ptotalarea];
            }
            var i = 0;
            queryTask.execute(query, lang.hitch(this, function (results) {
              DatosReporte = array.map(results.features, (feature) => {
                i++;
                if (feature.attributes["RECIEPT_ALLOCATION_SIGNE"]) {
                  RECIEPT_ALLOCATION_SIGNE = new Date(feature.attributes["RECIEPT_ALLOCATION_SIGNE"]);
                  // Delay_in_Days = Math.round((new Date() - RECIEPT_ALLOCATION_SIGNE) / (1000 * 60 * 60 * 24));
                  RECIEPT_ALLOCATION_SIGNE = window.location.href.includes("/?locale=ar") ? RECIEPT_ALLOCATION_SIGNE.toLocaleDateString("ar", options) : RECIEPT_ALLOCATION_SIGNE.toLocaleDateString(undefined, options);
                } else {
                  RECIEPT_ALLOCATION_SIGNE = feature.attributes["RECIEPT_ALLOCATION_SIGNE"];
                }
                if (this.reportTemplate == "Plot_Allocation") {
                  Datos = [feature.attributes["LOCATION_AR"], feature.attributes["CANCEL_STATUS"], feature.attributes["NO_OF_PLOTS"], feature.attributes["TOTAL_AREA"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" Sqm"];
                }
                DatosReporte2.push(Datos);
                var cols = [this.nls.PIndustrialareasubLocation, this.nls.Pallocationstatus, this.nls.Pnoofplots, this.nls.Ptotalarea];
                printData = [
                  {
                    addPageBreak: false,
                    type: "table",
                    tableCols: 5,
                    data: {
                      showRowIndex: false,
                      rows: DatosReporte2,
                      cols: cols
                    }
                  }
                ];
                if (i == results.features.length) {
                  query = new Query();
                  query.returnGeometry = false;
                  query.outFields = ["SUB_LOCATION_EN", "ISIC_MAIN_AR", "CANCEL_STATUS", "NO_OF_PLOTS", "TOTAL_AREA"];
                  query.where = "1=1";
                  queryTask = new QueryTask("https://gisstg.moci.gov.qa/server/rest/services/Moci/AllocationStatus/MapServer/4");
                  queryTask.execute(query, lang.hitch(this, function (results) {
                    if (this.format == "excel") {
                      this._createCSV(DatosReporte2, "Plot Allocation Summary Report");
                    }
                    Datos = [];
                    DatosReporte2 = [];
                    if (this.format == "excel") {
                      DatosReporte2[0] = [this.nls.PIndustrialareasubLocation, this.nls.Pindustryclassification, this.nls.Pallocationstatus, this.nls.Pnoofplots, this.nls.Ptotalarea];
                    }
                    DatosReporte = array.map(results.features, (feature) => {
                      if (this.reportTemplate == "Plot_Allocation") {
                        Datos = [feature.attributes["SUB_LOCATION_EN"], window.location.href.includes("/?locale=ar") ? feature.attributes["ISIC_MAIN_AR"] : feature.attributes["ISIC_MAIN_AR"], feature.attributes["CANCEL_STATUS"], feature.attributes["NO_OF_PLOTS"], feature.attributes["TOTAL_AREA"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" Sqm"];
                      }
                      DatosReporte2.push(Datos);
                    });
                    cols = [this.nls.PIndustrialareasubLocation, this.nls.Pindustryclassification, this.nls.Pallocationstatus, this.nls.Pnoofplots, this.nls.Ptotalarea];
                    printData.push({
                      addPageBreak: false,
                      type: "table",
                      tableCols: 5,
                      data: {
                        showRowIndex: false,
                        rows: DatosReporte2,
                        cols: cols
                      }
                    });
                    if (this.format == "pdf") {
                      this.report.print(this.reportTemplate, this.reportTitle, printData, "images/app-logo.png");
                    }
                    else {
                      this._createCSV(DatosReporte2, "Plot Allocation Detailed Report");
                    }
                  }));

                }
              });
            }));
          }
          else {
            queryTask.execute(query, lang.hitch(this, function (results) {
              if (this.format == "excel") {
                if (this.reportTemplate == "Construction_Status") {
                  DatosReporte2[0] = [this.nls.Cfirmname, this.nls.Cpinnumber, this.nls.Cplotnumber, this.nls.Cplotarea, this.nls.Ccontractorname, this.nls.Cengineerresponsible, this.nls.Ccurrentprojectstage, this.nls.Cexpectedenddate, this.nls.Cdelayindays];
                }
                if (this.reportTemplate == "Delayed_Payments") {
                  DatosReporte2[0] = [this.nls.Cfirmname, this.nls.Dpinnumber, this.nls.Dplotnumber, this.nls.Dplotarea, this.nls.Dindustryclassification, this.nls.Dcountofpaymentsdue, this.nls.Dtotaldue, this.nls.Dallocateddate];
                }
                // else {
                //   DatosReporte2[0] = ["PIN_NO", "PLOT_NO", "FIRM_EN_NAME", "FIRM_STATUS_DESC", "COUNT_PAYMENTS", "SUM_PAY_VALUE", "RECIEPT_ALLOCATION_SIGNE", "BLOCKS_AREA"];
                // }
              }
              DatosReporte = array.map(results.features, (feature) => {
                if (feature.attributes["ALLOCATION_DATE"]) {
                  allocation_date = new Date(feature.attributes["ALLOCATION_DATE"]);
                  Delay_in_Days = Math.round((new Date() - allocation_date) / (1000 * 60 * 60 * 24));
                  allocation_date = window.location.href.includes("/?locale=ar") ? allocation_date.toLocaleDateString("ar", options) : allocation_date.toLocaleDateString(undefined, options);
                } else {
                  allocation_date = feature.attributes["allocation_date"];
                }

                if (this.reportTemplate == "Construction_Status") {
                  const statusList = {
                    PREPARE_COMPLETION_STATUS: "PREPARE_END_DATE",
                    EXCAVATIONS_COMPLETION_STATUS: "EXCAVATIONS_END_DATE",
                    CONCRETING_COMPLETION_STATUS: "CONCRETING_END_DATE",
                    HANGAR_CONSTRUCTION_STATUS: "HANGAR_CONSTRUCTION_END_DATE",
                    WALL_CONSTRUCTION_STATUS: "WALL_CONSTRUCTION_END_DATE",
                    EXTERNAL_WORK_STATUS: "EXTERNAL_WORK_END_DATE",
                    INITIAL_OPERATION_STATUS: "INITIAL_OPERATION_END_DATE"
                    //OPERATION_STATUS: "OPERATION_STATUS"
                  };

                  for (const [key, value] of Object.entries(statusList)) {
                    console.log(key, value);
                    if (feature.attributes[key] == 0) {
                      if (feature.attributes[value]) {
                        DUE_DATE = new Date(feature.attributes[value]);
                        Delay_in_Days = Math.round((new Date() - DUE_DATE) / (1000 * 60 * 60 * 24));
                        DUE_DATE = window.location.href.includes("/?locale=ar") ? DUE_DATE.toLocaleDateString("ar", options) : DUE_DATE.toLocaleDateString(undefined, options);
                        break;
                      } else {
                        DUE_DATE = '';
                        Delay_in_Days = '';
                      }
                    } else {
                      DUE_DATE = '';
                      Delay_in_Days = '';
                    }
                  }

                  Datos = [window.location.href.includes("/?locale=ar") ? feature.attributes["FIRM_AR_NAME"] : feature.attributes["FIRM_NAME_EN"], feature.attributes["PIN_NO"], feature.attributes["PLOT_NO"], feature.attributes["PLOT_AREA"], window.location.href.includes("/?locale=ar") ? feature.attributes["CONTRACTOR_NAME_AR"] : feature.attributes["CONTRACTOR_NAME_EN"], feature.attributes["ENGINEER_NAME"], feature.attributes["PHASE_DESCRIPTION_DESC"], DUE_DATE, Delay_in_Days];
                }
                else if (this.reportTemplate == "Delayed_Payments") {
                  Datos = [window.location.href.includes("/?locale=ar") ? feature.attributes["FIRM_AR_NAME"] : feature.attributes["FIRM_EN_NAME"], feature.attributes["PIN_NO"], feature.attributes["PLOT_NO"], feature.attributes["PLOT_AREA"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" Sqm", window.location.href.includes("/?locale=ar") ? feature.attributes["ISIC_MAIN_AR_DESC"] : feature.attributes["ISIC_MAIN_EN_DESC"], feature.attributes["COUNT_PAYMENTS_DUE"], feature.attributes["SUM_PAY_VALUE"], allocation_date];
                }
                else {
                  Datos = [feature.attributes["PIN_NO"], feature.attributes["PLOT_NO"], feature.attributes["FIRM_EN_NAME"], feature.attributes["FIRM_STATUS_DESC"], feature.attributes["COUNT_PAYMENTS"], arLocale.format(feature.attributes["SUM_PAY_VALUE"]), RECIEPT_ALLOCATION_SIGNE, feature.attributes["BLOCKS_AREA"]];
                }
                DatosReporte2.push(Datos);
              });
              var cols = this.reportTemplate == "Delayed_Payments" ? [this.nls.Cfirmname, this.nls.Dpinnumber, this.nls.Dplotnumber, this.nls.Dplotarea, this.nls.Dindustryclassification, this.nls.Dcountofpaymentsdue, this.nls.Dtotaldue, this.nls.Dallocateddate] : [this.nls.Cfirmname, this.nls.Cpinnumber, this.nls.Cplotnumber, this.nls.Cplotarea, this.nls.Ccontractorname, this.nls.Cengineerresponsible, this.nls.Ccurrentprojectstage, this.nls.Cexpectedenddate, this.nls.Cdelayindays];
              printData = [
                {
                  addPageBreak: false,
                  type: "table",
                  tableCols: 5,
                  data: {
                    showRowIndex: false,
                    rows: DatosReporte2,
                    cols: cols
                  }
                }
              ];
              if (this.format == "pdf") {
                this.report.print(this.reportTemplate, this.reportTitle, printData, "images/app-logo.png");
              } else {
                this._createCSV(DatosReporte2, this.reportTitle);
              }
            }));
          }

        }
      },
      _createCSV(DatosReporte2, title) {
        // Create CSV file object and feed our
        // csv_data into it
        var csvData = [];
        DatosReporte2.map(Item => {
          Item[2] = Item[2] === null ? '' : `\"${Item[2]}\"`;
          csvData.push(Item);
        });
        CSVFile = new Blob(["\ufeff", csvData.join('\n')], { type: "text/csv" });

        // Create to temporary link to initiate
        // download process
        var temp_link = document.createElement('a');

        // Download csv file
        temp_link.download = title + ".csv";
        var url = window.URL.createObjectURL(CSVFile);
        temp_link.href = url;

        // This link should not be displayed
        temp_link.style.display = "none";
        document.body.appendChild(temp_link);

        // Automatically click the link to trigger download
        temp_link.click();
        document.body.removeChild(temp_link);
      },
      _initRadios: function () {
        var group = "radio_" + jimuUtils.getRandomString();
        this.rdoYes.name = group;
        this.rdoNo.name = group;
        jimuUtils.combineRadioCheckBoxWithLabel(this.rdoYes, this.rdoYesLabel);
        jimuUtils.combineRadioCheckBoxWithLabel(this.rdoNo, this.rdoNoLabel);
        this.own(on(this.rdoYes, 'click', lang.hitch(this, this._onChangeRadio)));
        this.own(on(this.rdoNo, 'click', lang.hitch(this, this._onChangeRadio)));
      },
      _onChangeRadio: function (e) {
        this.format = e.currentTarget.value;
      },
      _onClickReportBtn: function () {
        this.setConfig();
        this._initReport();
      },


      postCreate: function () {
        this.inherited(arguments);
        this.shelter = new LoadingIndicator({
          hidden: true
        });
        this.shelter.placeAt(this.domNode);
        this.shelter.startup();
        print_map = this.printmap;
        plotCoordinates = [];
        factoryDeatails = [];
      },

      startup: function () {
        this.inherited(arguments);
        this.shelter.show();
        this._initRadios();
        this._createPrintMap("0");

        var _SelectPINNo,_SelectFirmName,_SelectPlotNo;
      
        var pageUrl = window.location.href;
        if (!pageUrl.includes("?locale=ar")) {    
          _SelectPINNo="Select PIN No";
          _SelectFirmName="Select Firm Name";  
          _SelectPlotNo="Select Plot No";
        }else{
          _SelectPINNo="حدد رقم التعريف (PIN)"; 
          _SelectFirmName="أختار اسم الشركة";
          _SelectPlotNo="Select Plot No";
        }


        this.createCombo("firmName", "cbfirmName", "field", _SelectFirmName);
        this.createCombo("pinNo_r", "cbPinNo", "field", _SelectPINNo);
        this.createCombo("plotno", "cbPlotNo", "field", _SelectPlotNo);
        this.getFirmDetails();
      },
      createCombo: function (name, id, data, placeholdertext) {
        var memoryStore = new Memory({
          data: []
        });
        var comboBox1 = new ComboBox({
          id: name,
          store: memoryStore,
          searchAttr: "name",
          autocomplete: true,
          fetchProperties: { sort: [{ attribute: "name", descending: false }] },
          placeholder: placeholdertext,
          //MaxLength: 3
        }, name);
        comboBox1.set('style', { width: '100%', height: '30px', fontSize: '30px', margin: '0px 0px 10px 0px' });
        this.own(on(comboBox1, "change", this.drpPinchange));
        comboBox1.startup();
      },
      getFirmDetails: function () {
        var query = new Query();
        query.where = "PIN_NO is not NULL";
        query.returnGeometry = false;
        query.outFields = ["PIN_NO,FIRM_AR_NAME,PLOT_NO"];
        this.queryTask = new QueryTask("https://gisstg.moci.gov.qa/server/rest/services/Moci/FactoryReport/MapServer/0");
        // if(serviceType == "firm"){
        this.queryTask.execute(query, lang.hitch(this, this.firmPopulateList));
        // }
        // else if(serviceType == "ind"){
        //   this.queryTask.execute(query, lang.hitch(this, this.constPopulateList));
        // }
      },
      firmPopulateList: function (results) {
        var rows = results.features;
        this.loadData('firmName', "FIRM_AR_NAME", rows, "");
        this.loadData('pinNo_r', "PIN_NO", rows, "");
        this.loadData('plotno', "PLOT_NO", rows, "");
      },

      loadData: function (cmbid, cmbfld, rowData, fieldDomainName) {
        if (rowData.length == 0) {
          return;
        }
        var cmb = dijit.byId(cmbid);
        cmb.store.data = [];
        var cmbData = [];
        var uniqData = [];
        var indx = 0;
        var domainValies = {};
        clearitems = true;

        if (fieldDomainName != "" && fieldDomainName != undefined) {
          domainValies = domainsList[fieldDomainName];
        }

        if (fieldDomainName == "") {
          if (cmbid == "product") {
            rowData.forEach(prow => {
              var prowVal = prow.attributes[cmbfld];
              //alert(prowVal)
              if (!(prowVal in prodCode)) {

                if (prowVal.length > 72) {
                  prowVal = prowVal.substr(prowVal.length - 70);
                }
                var PRODUCT_NAME_AR = prow.attributes["ISSGIS.DBO.Products.PRODUCT_NAME_AR"];

                prodCode[prowVal] = PRODUCT_NAME_AR;//.substring(0, 50);;
              }
              if (prowVal != null && (uniqData.indexOf(prowVal) < 0)) {
                cmbData.push({
                  name: prowVal,
                  //name:prowVal.substring(0, 70),
                  id: indx
                });
                indx = indx + 1;
                uniqData.push(prowVal);
              }
            });
          }
          else {
            rowData.forEach(row => {
              var rowVal = row.attributes[cmbfld];
              if (rowVal != null && (uniqData.indexOf(rowVal) < 0)) {
                cmbData.push({
                  name: rowVal, id: indx
                });
                indx = indx + 1;
                uniqData.push(rowVal);
              }
            });
          }
        }
        else {
          rowData.forEach(row => {
            var rowValCode = row.attributes[cmbfld];
            var code = rowValCode;
            if (rowValCode in domainValies)
              rowValCode = domainValies[rowValCode];
            if (cmbid == "indCategory") {
              var indVal = code + "-" + rowValCode;
              rowValCode = indVal;
            }
            if (rowValCode != null && (uniqData.indexOf(rowValCode) < 0)) {
              cmbData.push({
                name: rowValCode, id: indx
              });
              indx = indx + 1;
              uniqData.push(rowValCode);
            }
          });
        }

        var dStore = new Memory({
          data: cmbData
        });
        cmb.store = dStore;
        if (clearitems) {
          cmb.set("value", "");
        }
        uniqData = [];
      },

      destroy: function () {
        if (this.print) {
          this.print.closeSettings();
        }
        this.inherited(arguments);
      },

      onClose: function () {
        if (this.print) {
          this.print.closeSettings();
        }
      },
      _initPrinter: function () {
        this._getPrintTaskURL(this.appConfig.portalUrl)
          .then(lang.hitch(this, (printServiceUrl) => {
            this.shelter.show();
            var asyncDef = this.isAsync(printServiceUrl);
            asyncDef.then(lang.hitch(this, (async) => {
              this.print = new Print({
                map: this.map,
                appConfig: this.appConfig,
                printTaskURL: printServiceUrl,
                defaultAuthor: this.config.defaultAuthor,
                defaultCopyright: this.config.defaultCopyright,
                copyrightEditable: this.config.copyrightEditable !== false,
                defaultTitle: this.config.defaultTitle,
                defaultFormat: this.config.defaultFormat,
                defaultLayout: this.config.defaultLayout,
                // showAdvancedOption: this.config.showAdvancedOption !== false,
                nls: this.nls,
                async: async
              });
              this.print.placeAt(this.printNode);
              this.print.startup();
            }), lang.hitch(this, function (err) {
              new Message({
                message: err.message
              });
            })).always(lang.hitch(this, function () {
              this.shelter.hide();
            }));
          }), lang.hitch(this, function (err) {
            new Message({
              message: err
            });
            console.error(err);
            this.shelter.hide();
          }));
      },


      _getPrintTaskURL: function (portalUrl) {
        var printDef = new Deferred();
        if (this.config && this.config.serviceURL) {
          printDef.resolve(this.config.serviceURL);
          return printDef;
        }
        var def = portalUtils.getPortalSelfInfo(portalUrl);
        def.then(lang.hitch(this, function (response) {
          var printServiceUrl = response && response.helperServices &&
            response.helperServices.printTask && response.helperServices.printTask.url;
          if (printServiceUrl) {
            printDef.resolve(printServiceUrl);
          } else {
            printDef.reject('error');
          }
        }), lang.hitch(this, function (err) {
          new Message({
            message: this.nls.portalConnectionError
          });
          printDef.reject('error');
          console.error(err);
        }));

        return printDef;
      },

      isAsync: function (serviceURL) {
        var def = new Deferred();
        // portal own print url: portalname/arcgis/sharing/tools/newPrint
        var serviceUrl = portalUrlUtils.setHttpProtocol(serviceURL);
        var portalNewPrintUrl = portalUrlUtils.getNewPrintUrl(this.appConfig.portalUrl);

        if (serviceUrl === portalNewPrintUrl ||
          /sharing\/tools\/newPrint$/.test(serviceUrl)) {
          def.resolve(false);
        } else {
          esriRequest({
            url: serviceURL,
            content: {
              f: "json"
            },
            callbackParamName: "callback",
            handleAs: "json",
            timeout: 60000,
            load: lang.hitch(this, function (response) {
              if (response.executionType === "esriExecutionTypeAsynchronous") {
                def.resolve(true);
              } else {
                def.resolve(false);
              }
            }),
            error: lang.hitch(this, function (err) {
              def.reject(err);
            })
          });
        }

        return def;
      },

      onSignIn: function (user) {
        user = user || {};
        if (user.userId && this.print) {
          this.print.updateAuthor(user.userId);
        }
      }
    });
  });