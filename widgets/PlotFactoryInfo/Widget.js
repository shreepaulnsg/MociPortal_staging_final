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
define(['dojo/_base/declare', 'jimu/BaseWidget', 'dojo/parser', "esri/tasks/IdentifyTask",
  "esri/tasks/IdentifyParameters", "dojo/on",
  'dijit/layout/TabContainer', 'dijit/layout/ContentPane', "esri/layers/FeatureLayer",
  'dojo/_base/lang', 'esri/tasks/query',
  "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/Color",
  "esri/tasks/ProjectParameters",'esri/graphic',"esri/SpatialReference","esri/geometry/projection", 'esri/tasks/QueryTask',"esri/geometry/Point", 'esri/toolbars/draw', 'jimu/MapManager',
  'dojo/domReady!'],

  function (declare, BaseWidget, parser, IdentifyTask, IdentifyParameters, on, TabContainer,
     ContentPane, FeatureLayer,
    lang, Query,
    SimpleFillSymbol, SimpleLineSymbol, Color,ProjectParameters,Graphic,SpatialReference,projection, QueryTask,Point, Draw, MapManager) {

    var mainMap;
    var tc = "", PlotNo = "",
      PinNo = "",
      Area = "",
      PlotStatus = "",
      PlotLocation = "", 
      FinalPlotStatus = "",
      FinalPlotLocation = "",

      FirmName_AR = "",
      FirmName_EN = "",
      OwnerName = "",
      FirmLocation_AR = "",
      FirmLocation_EN = "",
      MunicipalityName_EN = "",
      MunicipalityName_AR = "",
      QARS = "",
      LicenseNo = "",
      RegistrationNo = "",
      ReceiptAllocationDate = "",
      ISICCode = "",
      IndustryClassification_AR = "",
      IndustryClassification_EN = "",
      LicenseStatus_AR = "",
      LicenseStatus_EN = "",
      AllocationStatus = "",
      ConstructionStatus = "",
      errobj = null,
      plotDetailsArray = null,
      firmDetailsArray = null,
      PaymentStatus = "",
      landSurveyLayer = "",
      firmLayer = "",
      plotLayer = "",
      conLayer = "",
      
      cp1 = ""
      cp2 = ""
      cp3 = ""
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // PlotFactoryInfoWidget code goes here

      //please note that this property is be set by the framework when widget is loaded.
      //templateString: template,

      baseClass: 'jimu-widget-PlotFactoryInfo',

      postCreate: function () {
        this.inherited(arguments);
        console.log('postCreate');
        PinNo = 0;
        errobj = null;
        landSurveyLayer = this.config.LandplanSurveyPlot,
          plotLayer = this.config.plotDetails,
          firmLayer = this.config.firmDetails,
          
          domains = this.config.domainDetails
          conLayer = this.config.connectedDetails
      },
      

 

      startup: function () {
        this.inherited(arguments);
        var curMap = this.map
        mainMap = curMap;

        var selectGraphic = dojo.byId("myDiv");
        on(selectGraphic, "click", lang.hitch(this, function () {
          
          this.getSelectedFeatures();
        }));
        var clearData = dojo.byId("clrBtn");
        on(clearData, "click", lang.hitch(this, function () {
          this.clearTextValues();
          mainMap.graphics.clear();
        }));

        // this.mapIdNode.innerHTML = 'map id:' + this.map.id;
        tc = new TabContainer({
          style: "height: 100%; width: 100%;border:ridge"
        }, "tc1-prog");

        var pageUrl = window.location.href;
        var _PlotNo,_PINNo,_Area,_PlotStatus,_Factory,_OwnerName,_LicenseNo,_RegistrationNo,_ContactInfo,_CancelStatus,
            _ConstructionStatus,_AllocationDate,_ISICCode,_ISICName,_PaymentStatus,_LicenseStatus,_FirmName,_IndustryClassification;
            
            var _rightClass = '';
            if (!pageUrl.includes("?locale=ar")) {
          
          _PlotNo="Plot No";
          _PINNo="PIN No";
          _Area="Area";
          _PlotStatus="Plot Status";
          _Factory="Factory";
          _OwnerName="Owner Name";
          _LicenseNo="License No";
          _RegistrationNo="Registration No";
          _ContactInfo="Contact Info";
          _CancelStatus="Cancel Status";
          _ConstructionStatus="Construction Status";
          _AllocationDate="Allocation Date";
          _ISICCode="ISIC Code";
          _ISICName="ISIC Name";
          _PaymentStatus="Payment Status";  
          _IndustryClassification="Industry Classification";   
          _LicenseStatus="License Status";  
          _FirmName="Firm Name"; 
                    
          _FirmInfo = "Firm Info";
          _UtilityInfo = "Utility Info";
          _PlotInfo = "Plot Info";
          _Location = "Location";
          _MunicipalityName = "Municipality Name";
          _ReceiptAllocationDate = "Receipt Allocation Date"
          _AllocationStatus = "Allocation Status";
          _QARS = "Address (Building No , Street No , District No )";
          _GAS = "Connected To Gas";
          _TSC = "Connected To TSE";
          _SEWER = "Connected To Sewer";
  
        }
        else {
          _rightClass = 'rightClass'

          _PlotNo="القطعة رقم",
          _PINNo="رقم التعريف الشخصي";
          _Area="منطقة";
          _PlotStatus="حاله الأرض";
          _Factory="مصنع";
          _OwnerName="اسم المالك";
          _LicenseNo="رقم الرخصة";
          _RegistrationNo="رقم التسجيل";
          _ContactInfo="معلومات الاتصال";
          _CancelStatus="إلغاء الحالة";
          _ConstructionStatus="حالة البناء";
          _AllocationDate="تاريخ التخصيص";
          _ISICCode="كود ISIC";
          _ISICName="اسم ISIC";
          _PaymentStatus="حالة الدفع و السداد";
          _IndustryClassification="تصنيف الصناعة";
          _LicenseStatus="حاله الشركة";
          _FirmName="اسم الشركة";

          _FirmInfo = "معلومات المصنع";
          _PlotInfo = "معلومات الأرض";
          _UtilityInfo = "خدمات";
          _Location = "موقع";
          _MunicipalityName = "اسم البلدية";
          _ReceiptAllocationDate = "تاريخ إيصال التخصيص"
          _AllocationStatus = "حالة التخصيص";
          _QARS = "عنوان (مبني , شارع , منطقة)";
          _GAS =  "متصل بالغاز";
          _TSC =  "متصل بـ TSE";
          _SEWER = "متصل بـ Sewer";
        }
         cp1 = new ContentPane({
          title: _PlotInfo,//"Plot Info",
          content: `<table id='plotInfoTable' style='width:100%;'>
          <tr><td class='infolablels `+_rightClass+`'>`+_PlotNo+`</td><td id='pltPlotNo' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_PINNo+`</td> <td id='pltPinNo' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_Area+`</td><td id='pltArea' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_PlotStatus+`</td><td id='pltStatus' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_Location+`</td><td id='pltLocation' class='infovals `+_rightClass+`'></td></tr> 
          <tr><td class='infolablels `+_rightClass+`'>`+_QARS+`</td><td id='frmQARS' class='infovals `+_rightClass+`'></td></tr> 
          
          </table>`,
          style: "left: 0px;top: 0px;height: 100%; width: 100%;",
          selected: true
        });
        tc.addChild(cp1);

         cp2 = new ContentPane({
          title: _FirmInfo,//"Firm Info",
          content: `<table id='firmInfoTable'  style='width:100%;'>
          <tr><td class='infolablels `+_rightClass+`'>`+_FirmName+`</td><td id='frmName' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_OwnerName+`</td><td id='frmOwnerName' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_Location+`</td><td id='frmLocation' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_MunicipalityName+`</td><td id='frmMncpName' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_LicenseNo+`</td><td id='frmLicenseNo' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_RegistrationNo+`</td><td id='frmRegNo' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_ReceiptAllocationDate+`</td><td id='frmRctAltDate' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_ISICCode+`</td><td id='frmISICCode' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_IndustryClassification+`</td><td id='frmIndClass' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_LicenseStatus+`</td><td id='frmLicStatus' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_AllocationStatus+`</td><td id='frmAllStatus' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_ConstructionStatus+`</td><td id='frmCnstStatus' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_PaymentStatus+`</td><td id='frmPaymentStatus' class='infovals `+_rightClass+`'></td></tr> </table>`,
          style: "left: 0px;top: 0px;height: 100%; width: 100%;",
        });
        tc.addChild(cp2);

        cp3 = new ContentPane({
          title: _UtilityInfo,//"Utility Info",
          content: `<table id='conInfoTable' style='width:100%;'> 
          <tr><td class='infolablels `+_rightClass+`'>`+_GAS+`</td><td id='frmGAS' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_TSC+`</td><td id='frmTSE' class='infovals `+_rightClass+`'></td></tr>
          <tr><td class='infolablels `+_rightClass+`'>`+_SEWER+`</td><td id='frmSEWER' class='infovals `+_rightClass+`'></td></tr>
          
          </table>`,
          style: "left: 0px;top: 0px;height: 100%; width: 100%;", 
        });
        tc.addChild(cp3);

        tc.startup();

        // console.log('startup');
        //plot_factory_layer = new FeatureLayer()
        //this.map.addLayer(plot_factory_layer);
        curMap.on("click", this.doIdentify);

        identifyTask = new IdentifyTask("https://gisstg.moci.gov.qa/server/rest/services/Moci/IndustrialPlot/MapServer")

        identifyParams = new IdentifyParameters();
        //identifyParams.tolerance = 3;
        identifyParams.returnGeometry = true;
        identifyParams.layerIds = [0, 1, 2];
        identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_ALL;
        identifyParams.width = this.map.width;
        identifyParams.height = this.map.height;
      },
        getSelectedFeatures: function () {
        this.disablePopup();
        this.clearTextValues();
        drawGra = new Draw(this.map);
        esri.bundle.toolbars.draw.addPoint = "Click on plot to get attributes";
        drawGra.activate(Draw.POINT);
        drawGra._hideTooltip();
        drawGra.on("draw-complete", lang.hitch(this, function (evt) {
         // this.map.on("click", lang.hitch(this, function (evt) {
          //alert("clicked")
          this.selectedFeatInfo(evt);
          drawGra.deactivate();
        }));
      },
      // selectedFeatInfo_old: function (evt) { 
      //   var geom = evt.geographicGeometry; 
      //   var fl = new QueryTask(plotLayer);
      //   var query = new Query();
      //   query.returnGeometry = true;
      //   query.outFields = ["*"];
      //   //2932
      //   var point_4326 = new Point(geom);
      //   var projectParm = new ProjectParameters();
      //   projectParm.geometries = [point_4326];
      //   projectParm.outSR = new SpatialReference({
      //     wkid: 2932,
      //   });
      //   esriConfig.defaults.geometryService.project(projectParm).then(
      //     function (res) {
      //       var long = res[0].x;
      //       var lat = res[0].y;
      //       var newsubpoint = new esri.geometry.Point(long, lat, new SpatialReference(res[0].spatialReference.wkid));
      //       query.geometry = newsubpoint;
      //       fl.execute(query, lang.hitch(this, this.fl_showResults));
      //     }); 
      // },

      selectedFeatInfo: function (evt) {
        var geom = evt.geometry;
        //var geom = evt.geographicGeometry;
        var fl = new FeatureLayer(landSurveyLayer);
        //var fl = new QueryTask(plotLayer);
        var query = new Query();
        query.returnGeometry = true;
        query.outFields = ["*"];
        query.geometry = geom;
         
        fl.queryFeatures(query, lang.hitch(this, function (resultFeat) {
          console.log(resultFeat)
          if (resultFeat.features.length > 0) {
          graSymb = new SimpleFillSymbol(SimpleFillSymbol.STYLE_NULL,
            new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
            new Color([0,255,255]), 3),new Color([255,0,0,0.25])
          );
    
          var plotGraphic = new Graphic(resultFeat.features[0].geometry,graSymb);
          this.map.graphics.add(plotGraphic);

          PinNo = resultFeat.features[0].attributes["PIN"];
          //PinNo = resultFeat.features[0].attributes["PIN_NO"];
         // alert(PinNo)
          this.getPlotDetails(PinNo);
          this.getFirmDetails(PinNo);
          // this.TabCreator();
          this.enablePopup();
            }else{
              $("#errMsg_plot_firm").text("Feature Not Found");
              //alert("Feature Not Found");
            }
        }));

      },
      fl_showResults: function (resultFeat) {
        console.log(resultFeat)
        if (resultFeat.features.length > 0) {
        PinNo = resultFeat.features[0].attributes["PIN_NO"];
      //  alert(resultFeat.features.length)
        this.getPlotDetails(PinNo);
        this.getFirmDetails(PinNo);
        // this.TabCreator();
        this.enablePopup();
      }
      },
      getPlotDetails: function (PinNo) {
        var plotOutFieldList = ["PLOT_NO", "PLOT_AREA", "PLOT_STATUS", "LOCATION_AR", "LOCATIONS_EN","OBJECTID"];
        var plotQry = this.createQuery(PinNo, plotOutFieldList);
        var plotQryTask = new QueryTask(plotLayer);
        plotQryTask.execute(plotQry, lang.hitch(this, function (plotRecs) {
          if (plotRecs.features.length > 0) {

            // var domainQryTask = new QueryTask(domains);
            // domainQryTask.execute()

            plotDetailsArray = plotRecs.features[0].attributes;

            PlotNo = plotRecs.features[0].attributes.PLOT_NO;
            $("#pltPlotNo").html(PlotNo)
            PinNo = PinNo;
            $("#pltPinNo").html(PinNo)

            Area = plotRecs.features[0].attributes.PLOT_AREA;

            $("#pltArea").html(Area)

           
            
            PlotStatus = plotRecs.features[0].attributes.PLOT_STATUS;
            PlotLocation = plotRecs.features[0].attributes.LOCATIONS_EN;

            var domainNames=["'Locations_EN'","'Allocation_Status'"];
            var domainCodes= "\'"+PlotLocation +"\',"+"\'"+PlotStatus+"\'";

            var domainsQry = this.domainQuery(domainNames, domainCodes);
            var domainQryTask = new QueryTask(domains);
            domainQryTask.execute(domainsQry, lang.hitch(this, function (domainValues) {
              if(domainValues.features.length > 0){
                for (let index = 0; index < domainValues.features.length; index++) {
                  const element = domainValues.features[index].attributes;
                  if(element.Domain_name=="Locations_EN"){
                   FinalPlotLocation = element.Domain_value;
                  
                   var staticloc = 'المنطقة الصناعية - الصناعات الصغيرة والمتوسطة';
                   if(window.location.href.includes("/?locale=ar") ){
                   if(FinalPlotLocation = 'Doha - Small & Medium Industrial Area'){
                    FinalPlotLocation = staticloc;
                   } 
                  }
                  $("#pltLocation").html(FinalPlotLocation)

                   //alert(PlotLocation)
                  }
                  else if(element.Domain_name=="Allocation_Status"){
                  FinalPlotStatus = element.Domain_value;
                  $("#pltStatus").html(FinalPlotStatus)

                  //alert(PlotStatus)
                  }
                //alert(FinalPlotLocation)  
               // tc.addChild(cp1);
                }
                 // cp1.content= "<table style='width:100%;'><tr><td class='infolablels'>Plot No.</td><td class='infovals'>" + PlotNo + "</td></tr><tr><td class='infolablels'>PIN No.</td> <td class='infovals'>" + PinNo + "</td></tr><tr><td class='infolablels'>Area</td><td class='infovals'>" + Area + " Sqm</td></tr><tr><td class='infolablels'>Plot Status</td><td class='infovals'>" + FinalPlotStatus + "</td></tr><tr><td class='infolablels'>Location</td><td class='infovals'>" + FinalPlotLocation + "</td></tr><tr><td colspan='2'  class='pics'><a href='../widgets/PlotFactoryInfo/images/plot1.png' class='imgname'>Picture1</tr><tr><td colspan='2' class='pics'><a href='../widgets/PlotFactoryInfo/images/plot1.png' class='imgname'>Picture2</tr></table>"
                              
              }
              else{
                $("#errMsg_plot_firm").text("Plot Info Not Found");
                //alert("Plot Info Not Found")
                //console.log("Failed"+domainValues);
              }
            }))
            
            var objId = plotRecs.features[0].attributes.OBJECTID;
            //alert("paul_plot_ "+objId);
 
            var plotimageQry = new Query();
            var plotImgQueryURL= plotLayer+"/queryAttachments?objectIds="+objId+"&returnUrl=true&globalIds=&definitionExpression=&attachmentTypes=&resultOffset=&resultRecordCount=&f=pjson"
  
            $('.plot_firm_pics_row').remove();

            var plotsimageQryTask = new QueryTask(plotImgQueryURL); 
            plotsimageQryTask.execute(plotimageQry, lang.hitch(this, function (plotimages) {
                
              console.log(plotimages)
              if(plotimages.attachmentGroups){
              if(plotimages.attachmentGroups[0].attachmentInfos.length > 0){
                for (let index = 0; index < plotimages.attachmentGroups[0].attachmentInfos.length; index++) {
    
                  // alert(plotimages.attachmentGroups[0].attachmentInfos[index].name);
                  // alert(plotimages.attachmentGroups[0].attachmentInfos[index].url);
                  //https://gisstg.moci.gov.qa/server/rest/services/Moci/IndustrialPlot/MapServer/8/11550/attachments/1
                  var imageUrl = plotimages.attachmentGroups[0].attachmentInfos[index].url;
                  var imageId = plotimages.attachmentGroups[0].attachmentInfos[index].id;
                  if(!imageUrl){
                    imageUrl =plotLayer+"/"+objId+"/attachments/"+imageId;
                  }
                  var imageRow = `<tr class="plot_firm_pics_row"> <td colspan="2" class="pics">
                  <a href="#" 
                  onclick="window.open('`+imageUrl+`')"
                   class="imgname">`+plotimages.attachmentGroups[0].attachmentInfos[index].name+`</a>
                  </td>
                  </tr>`;
    
                  var tableBody = $("#plotInfoTable tbody");
                  tableBody.append(imageRow); 

                }}}}));


                
                var conFieldList = ["GAS_CONNECTED_EN", "TSE_CONNECTED_EN", "SEWER_CONNECTED_EN", "PIN_NO"];
                var conQry = this.createQuery(PinNo, conFieldList);

                var conQryTask = new QueryTask(conLayer); 
                conQryTask.execute(conQry, lang.hitch(this, function (plotRecs) {
                    
                  if (plotRecs.features.length > 0) {

                    // var domainQryTask = new QueryTask(domains);
                    // domainQryTask.execute()
        
                    plotDetailsArray = plotRecs.features[0].attributes;
        
                    var gas = plotRecs.features[0].attributes.GAS_CONNECTED_EN;
                    var tse = plotRecs.features[0].attributes.TSE_CONNECTED_EN;
                    var sewer = plotRecs.features[0].attributes.SEWER_CONNECTED_EN; 
                     if(gas == 1){ gas = "Yes"  } if(gas == 0){ gas = "No"}
                     if(tse == 1){ tse = "Yes"  } if(tse == 0){ tse = "No"}
                     if(sewer == 1){ sewer = "Yes"  } if(sewer == 0){ sewer = "No"}
                     
                    $("#frmGAS").html(gas);
                    $("#frmTSE").html(tse);
                    $("#frmSEWER").html(sewer);

                  } 
                
                }));

// GAS_CONNECTED_EN
// TSE_CONNECTED_EN
// SEWER_CONNECTED_EN
// PIN_NO


          }
          else {
            //errobj.innerText = "key Planning Regulation records not found for this plot";
          }
        }));
       
      },
      
      clearTextValues : function() {

        this.map.graphics.clear();
        //plots
        $("#pltPlotNo").html('');
        $("#pltPinNo").html('');
        $("#pltArea").html('');
        $("#pltLocation").html('');
       $("#pltStatus").html('');


       //firms
       $("#frmName").html(''); 
       $("#frmOwnerName").html('');
       $("#frmQARS").html('');
       $("#frmGAS").html('');
       $("#frmTSE").html('');
       $("#frmSEWER").html('');
       $("#frmLicenseNo").html('');
       $("#frmRegNo").html('');
       $("#frmRctAltDate").html('');
       $("#frmISICCode").html('');

       $("#frmIndClass").html(''); 
        $("#frmIndClass_AR").html(''); 
        $("#frmLocation_AR").html(''); 
        $("#frmLocation").html(''); 
        $("#frmMncpName").html(''); 
        $("#frmLicStatus_AR").html(''); 
        $("#frmLicStatus").html(''); 
        $("#frmAllStatus").html(''); 
        $("#frmCnstStatus").html('');

        //attachments
        $('.plot_firm_pics_row').remove();

        $("#errMsg_plot_firm").text("");
      },
      createQuery: function (pinNo, fideldList) {
        var qry = new Query();
        qry.returnGeometry = false;
        qry.outFields = fideldList;
        qry.where = "PIN_NO=" + pinNo;
        return qry;
      },
      
      getFirmDetails: function (pinNo) {
        var firmOutFieldList = ["*"];
        var FirmQry = this.createQuery(pinNo, firmOutFieldList);
        var FirmQryTask = new QueryTask(firmLayer);
         
        FirmQryTask.execute(FirmQry, function (firmRecs) {
          if (firmRecs.features.length > 0) {
            utilRec = firmRecs.features[0];

            FirmName_AR = firmRecs.features[0].attributes.FIRM_AR_NAME;
            FirmName_EN = firmRecs.features[0].attributes.FIRM_EN_NAME;
            
            if(window.location.href.includes("/?locale=ar") ){
              $("#frmName").html(FirmName_AR);
            }else{
              $("#frmName").html(FirmName_EN);
            }

            OwnerName = firmRecs.features[0].attributes.OWNER_NAME;
            $("#frmOwnerName").html(OwnerName);
            FirmLocation_AR = firmRecs.features[0].attributes.LOCATION_NAME_AR;
            FirmLocation_EN = firmRecs.features[0].attributes.LOCATION_NAME_EN;
            MunicipalityName_EN = firmRecs.features[0].attributes.MUNICIPALITY_NAME_AR;
            MunicipalityName_AR = firmRecs.features[0].attributes.MUNICIPALITY_NAME_AR;            
            QARS = firmRecs.features[0].attributes.BUILDING_NO + " , " + firmRecs.features[0].attributes.STREET_NO + " , " + firmRecs.features[0].attributes.ZONE_NO;
            $("#frmQARS").html(QARS);

      //       $("#frmGAS").html('');
      //  $("#frmTSE").html('');
      //  $("#frmSEWER").html('');


            LicenseNo = firmRecs.features[0].attributes.LICENSE_NO;
            $("#frmLicenseNo").html(LicenseNo);
            RegistrationNo = firmRecs.features[0].attributes.INDUSTRIAL_REG_NO;
            $("#frmRegNo").html(RegistrationNo);
            ReceiptAllocationDate = firmRecs.features[0].attributes.ALLOCATION_DATE;
            var options = { month: 'long', day: 'numeric', year: 'numeric' };
            var date = window.location.href.includes("/?locale=ar") ? new Date(ReceiptAllocationDate).toLocaleDateString("ar", options) : new Date(ReceiptAllocationDate).toLocaleDateString(undefined, options);

            //var date = new Date(ReceiptAllocationDate).toLocaleDateString(undefined, options);
            //alert(date)
            $("#frmRctAltDate").html(date);
            ISICCode = firmRecs.features[0].attributes.ISIC_MAIN_EN;
            $("#frmISICCode").html(ISICCode);
            IndustryClassification_EN = firmRecs.features[0].attributes.ISIC_MAIN_EN;
            IndustryClassification_AR = firmRecs.features[0].attributes.ISIC_MAIN_AR;
            LicenseStatus_EN = firmRecs.features[0].attributes.LICENSE_STATUS_EN;
            LicenseStatus_AR = firmRecs.features[0].attributes.LICENSE_STATUS_AR;
            //AllocationStatus = firmRecs.features[0].attributes.CANCEL_STATUS;
            AllocationStatus = firmRecs.features[0].attributes.CANCEL_STATUS;
            ConstructionStatus = firmRecs.features[0].attributes.PHASE_DESCRIPTION;
 

            var domainNames=["'ISIC_EN'","'ISIC_AR'","'Locations_AR'","'Locations_EN'",
            "'Municipalities_AR'","'License_Status_AR'","'License_Status_EN'",
            "'Cancel_Status'","'Project_Phase'"];
            var domainCodes= "\'"+IndustryClassification_EN +"\',"+"\'"+IndustryClassification_AR+"\',"
            +"\'"+FirmLocation_AR+"\',"+"\'"+FirmLocation_EN+"\',"+"\'"+MunicipalityName_AR+"\',"
            +"\'"+LicenseStatus_AR+"\',"+"\'"+LicenseStatus_EN+"\',"
            +"\'"+AllocationStatus+"\',"+"\'"+ConstructionStatus+"\'";


            //var firmdomainsQry = this.domainQuery(domainNames, domainCodes);
            var firmdomainsQry = new Query();
            firmdomainsQry.returnGeometry = false;
            firmdomainsQry.outFields = ["*"];
            firmdomainsQry.where = "Domain_name IN (" + domainNames + ") and Domain_code IN (" + domainCodes +")";
            
            var firmsdomainQryTask = new QueryTask(domains);
            firmsdomainQryTask.execute(firmdomainsQry, lang.hitch(this, function (domainValues) {
              if(domainValues.features.length > 0){
                for (let index = 0; index < domainValues.features.length; index++) {
                  const element = domainValues.features[index].attributes;
                  if(element.Domain_name=="ISIC_EN" && element.Domain_code==IndustryClassification_EN){
                    IndustryClassification_EN = element.Domain_value;
                    $("#frmIndClass").html(IndustryClassification_EN);

                  }
                  else if(element.Domain_name=="ISIC_AR" && element.Domain_code==IndustryClassification_AR){
                    IndustryClassification_AR = element.Domain_value;
                    $("#frmIndClass_AR").html(IndustryClassification_AR);
                  }
                  else if(element.Domain_name=="Locations_AR" && element.Domain_code==FirmLocation_AR){
                    FirmLocation_AR = element.Domain_value;
                    $("#frmLocation_AR").html(FirmLocation_AR);

                  }
                  else if(element.Domain_name=="Locations_EN" && element.Domain_code==FirmLocation_EN){
                    FirmLocation_EN = element.Domain_value;

                    if(window.location.href.includes("/?locale=ar") ){
                    var staticloc = 'المنطقة الصناعية - الصناعات الصغيرة والمتوسطة';
                    if(FirmLocation_EN = 'Doha - Small & Medium Industrial Area'){
                      FirmLocation_EN = staticloc;
                    }
                  }
                    $("#frmLocation").html(FirmLocation_EN);
 
                  }
                  else if(element.Domain_name=="Municipalities_AR" && element.Domain_code==MunicipalityName_AR){
                    MunicipalityName_AR = element.Domain_value;
                    $("#frmMncpName").html(MunicipalityName_AR);

                  }
                  else if(element.Domain_name=="License_Status_AR" && element.Domain_code==LicenseStatus_AR){
                    LicenseStatus_AR = element.Domain_value;
                    $("#frmLicStatus_AR").html(LicenseStatus_AR);

                  }
                  else if(element.Domain_name=="License_Status_EN" && element.Domain_code==LicenseStatus_EN){
                    LicenseStatus_EN = element.Domain_value;
                    $("#frmLicStatus").html(LicenseStatus_EN);

                  }
                  else if(element.Domain_name=="Cancel_Status" && element.Domain_code==AllocationStatus){
                    AllocationStatus = element.Domain_value;
                    $("#frmAllStatus").html(AllocationStatus);

                  }
                  else if(element.Domain_name=="Project_Phase" && element.Domain_code==ConstructionStatus){
                    ConstructionStatus = element.Domain_value;
                    $("#frmCnstStatus").html(ConstructionStatus);

                  }
                  //Payment Status
                  //not yet done
                 
                }
                // cp1.content= "<table style='width:100%;'><tr><td class='infolablels'>Plot No.</td><td class='infovals'>" + PlotNo + "</td></tr><tr><td class='infolablels'>PIN No.</td> <td class='infovals'>" + PinNo + "</td></tr><tr><td class='infolablels'>Area</td><td class='infovals'>" + Area + " Sqm</td></tr><tr><td class='infolablels'>Plot Status</td><td class='infovals'>" + FinalPlotStatus + "</td></tr><tr><td class='infolablels'>Location</td><td class='infovals'>" + FinalPlotLocation + "</td></tr><tr><td colspan='2'  class='pics'><a href='../widgets/PlotFactoryInfo/images/plot1.png' class='imgname'>Picture1</tr><tr><td colspan='2' class='pics'><a href='../widgets/PlotFactoryInfo/images/plot1.png' class='imgname'>Picture2</tr></table>"
                              
              }
              else{
                //console.log("Failed"+domainValues);
              }
            }))



            var objId = firmRecs.features[0].attributes.OBJECTID;
            //alert("paul_firm_ "+objId);
 
            var firmimageQry = new Query();
            var firmImgQueryURL= firmLayer+"/queryAttachments?objectIds="+objId+"&returnUrl=true&globalIds=&definitionExpression=&attachmentTypes=&resultOffset=&resultRecordCount=&f=pjson"
  
            $('.plot_firm_pics_row').remove();

        var firmsimageQryTask = new QueryTask(firmImgQueryURL); 
        firmsimageQryTask.execute(firmimageQry, lang.hitch(this, function (Firmimages) {

         // console.log(Firmimages) 
            if(Firmimages.attachmentGroups){
              if(Firmimages.attachmentGroups[0].attachmentInfos.length > 0){
                for (let index = 0; index < Firmimages.attachmentGroups[0].attachmentInfos.length; index++) {
    
                  // alert(Firmimages.attachmentGroups[0].attachmentInfos[index].name);
                  // alert(Firmimages.attachmentGroups[0].attachmentInfos[index].url);
                  var imageUrl = Firmimages.attachmentGroups[0].attachmentInfos[index].url;
                  var imageId = Firmimages.attachmentGroups[0].attachmentInfos[index].id;
                  if(!imageUrl){
                    imageUrl =firmLayer+"/"+objId+"/attachments/"+imageId;
                  }

                  var imageRow = `<tr class="plot_firm_pics_row"> <td colspan="2" class="pics">
                  <a href="#" 
                  onclick="window.open('`+imageUrl+`')"
                   class="imgname">`+Firmimages.attachmentGroups[0].attachmentInfos[index].name+`</a>
                  </td>
                  </tr>`;
    
                  var tableBody = $("#firmInfoTable tbody");
                  tableBody.append(imageRow); 
                  

                }}}}));

          }
          else {
            $("#errMsg_plot_firm").text("Firm Info Not Found");
           // alert("Firm Info Not Found")
          //81070017
           // errobj.innerText = "Utility Allocation records not found for this plot";
          }
        });
      },


    


      domainQuery: function (name, code) {
        var qry = new Query();
        qry.returnGeometry = false;
        qry.outFields = ["*"];
        qry.where = "Domain_name IN (" + name + ") and Domain_code IN (" + code +")";
        return qry;
      },
      disablePopup: function () {
        var mapMgr = MapManager.getInstance();
        mapMgr.disableWebMapPopup();
      },

      enablePopup: function () {
        var mapMgr = MapManager.getInstance();
        mapMgr.enableWebMapPopup();
      },
      doIdentify: function (event) {
        console.log(mainMap);
        //this.map.graphics.clear();
        identifyParams.geometry = event.mapPoint;
        identifyParams.mapExtent = mainMap.extent;
        identifyTask.execute(identifyParams, function (idResults) {

          this.addToTable(idResults, event);
        });
      },
      addToTable: function (idResults, event) {
        // bldgResults = { displayFieldName: null, features: [] };
        // parcelResults = { displayFieldName: null, features: [] };

        for (var i = 0, il = idResults.length; i < il; i++) {
          var idResult = idResults[i];
          // if (idResult.layerId === 1) {
          //   if (!bldgResults.displayFieldName) { bldgResults.displayFieldName = idResult.displayFieldName; }
          //   bldgResults.features.push(idResult.feature);
          // }
          // else if (idResult.layerId === 2) {
          //   if (!parcelResults.displayFieldName) { parcelResults.displayFieldName = idResult.displayFieldName; }
          //   parcelResults.features.push(idResult.feature);
          // }
        }
        registry.byId("bldgTab").set("content", buildingResultTabContent(bldgResults));
        registry.byId("parcelTab").set("content", parcelResultTabContent(parcelResults));

        map.infoWindow.show(event.screenPoint,
          map.getInfoWindowAnchor(event.screenPoint));
      },

      buildingResultTabContent: function (results) {
        var template = "";
        var features = results.features;

        template += "<i>Total features returned: " + features.length + "</i>";
        template += "<table border='1'>";
        template += "<tr><th>ID</th><th>Address</th></tr>";

        var parcelId;
        var fullSiteAddress;
        for (var i = 0, il = features.length; i < il; i++) {
          parcelId = features[i].attributes['PARCELID'];
          fullSiteAddress = features[i].attributes['Full Site Address'];

          template += "<tr>";
          template += "<td>" + parcelId + " <a href='#' onclick='showFeature(bldgResults.features[" + i + "]); return false;'>(show)</a></td>";
          template += "<td>" + fullSiteAddress + "</td>";
          template += "</tr>";
        }

        template += "</table>";

        return template;
      },

      parcelResultTabContent: function (results) {
        var template = "";
        var features = results.features;

        template = "<i>Total features returned: " + features.length + "</i>";
        template += "<table border='1'>";
        template += "<tr><th>ID</th><th>Year Built</th><th>School District</th><th>Description</th></tr>";

        var parcelIdNumber;
        var residentialYearBuilt;
        var schoolDistrictDescription;
        var propertyDescription;
        for (var i = 0, il = features.length; i < il; i++) {
          parcelIdNumber = features[i].attributes['Parcel Identification Number'];
          residentialYearBuilt = features[i].attributes['Residential Year Built'];
          schoolDistrictDescription = features[i].attributes['School District Description'];
          propertyDescription = features[i].attributes['Property Description'];

          template += "<tr>";
          template += "<td>" + parcelIdNumber + " <a href='#' onclick='showFeature(parcelResults.features[" + i + "]); return false;'>(show)</a></td>";
          template += "<td>" + residentialYearBuilt + "</td>";
          template += "<td>" + schoolDistrictDescription + "</td>";
          template += "<td>" + propertyDescription + "</td>";
          template += "</tr>";
        }

        template += "</table>";

        return template;
      },

      onOpen: function () {
        console.log('onOpen');
        //alert("onopen")
        //this.clearTextValues();
      },

      onClose: function () {
        console.log('onClose');
        //this.clearTextValues();
      },

      onMinimize: function () {
        console.log('onMinimize');
      },

      onMaximize: function () {
        console.log('onMaximize');
      },

      onSignIn: function (credential) {
        /* jshint unused:false*/
        console.log('onSignIn');
      },

      onSignOut: function () {
        console.log('onSignOut');
      },

      showVertexCount: function (count) {
        this.vertexCount.innerHTML = 'The vertex count is: ' + count;
      }
    });
  });