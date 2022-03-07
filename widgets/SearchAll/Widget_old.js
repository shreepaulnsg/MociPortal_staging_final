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
define(['dojo/_base/declare', 'jimu/BaseWidget','jimu/WidgetManager', 'dojo/on', "dojo/_base/lang", 'dojo/_base/array', "dojo/store/Memory", "dojo/data/ItemFileReadStore", "dijit/form/ComboBox", "esri/request", "esri/tasks/query", "esri/tasks/QueryTask", "esri/layers/FeatureLayer", "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/Color", "esri/graphic", 'jimu/utils',"dojo/dom", "dijit/form/Button"],
function(declare, BaseWidget,WidgetManager, on, lang,  array, Memory,  ItemFileReadStore, ComboBox, esriRequest, Query, QueryTask, FeatureLayer, SimpleFillSymbol, SimpleLineSymbol, Color, Graphic, utils, dom) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {
    // SearchAllWidget code goes here

    //please note that this property is be set by the framework when widget is loaded.
    //templateString: template,

    baseClass: 'jimu-widget-SearchAll',
    featuresData:[],
    productService:"",
    firmService:"",
    plotsService:"",
    searchCondition:"",
    indNameVal:"",
    indCatgVal:"",
    plotNoVal:"",
    pinNoVal:null,
    firmStatusVal:"",
    plotStatusVal:"",
    industryMap:null,
    pinValues:"",
    contStVal:"",
    prodVal:"",
    licVal:"",
    regVal:"",
    ownerVal:"",
    symb:null,
    clearitems:"",
    searchType:"",
    searchCombination:null,
    plotStatusService:"",
    domainsService:"",
    domainsList:null,
    domainsListReverse:null,
    connectedService:"",
    searchObj:null,
    gasConnected:"",
    tseConnected:"",
    sewerConnected:"",
    errTextObj:null,
    prodDb:"",
    prodDomainDb:"",
    prodCode:null,
    ownerCode:null,
    wManager:null,
    postCreate: function() {
      this.inherited(arguments);
      searchObj= this;
      industryMap = this.map;
      plotStatusService = this.config.plotStService;
      productService = this.config.prodService;
      firmService = this.config.firmService;
      plotsService = this.config.plotService;
      domainsService = this.config.domainService;
      connectedService = this.config.utilityAllocService;
      prodDb = this.config.productsDB;
      prodDomainDb = this.config.productsDomainDB;
      searchCondition="";
      indNameVal="";
      indCatgVal="";
      plotNoVal=0;
      pinNoVal=0;
      firmStatusVal="";
      plotStatusVal=0;
      pinValues = "";
      contStVal="";
      prodVal="";
      licVal="";
      regVal="";
      ownerVal="";
      symb =null;
      clearitems = false;
      searchType="firm",
      multiCriteriaCond="";
      domainsList = {};
      domainsListReverse = {};
      gasConnected="Yes";
      tseConnected="Yes";
      sewerConnected="Yes";
      errTextObj= null;
      prodCode = {};
      ownerCode = {};
      this.wManager = WidgetManager.getInstance();
     },

    startup: function() {
      this.inherited(arguments);
      this.readIndDomains("Domain_name IN ('ISIC_AR')");
      this.readDomains("Domain_name IN ('Allocation_Status','Firm_Status_AR','Project_Phase')");        
      //this.readProdDomains("Domain_name IN ('Products_AR')");  
      errTextObj = dojo.byId("errMsg");
      errTextObj.innerText = "";    
      
      // dojo.byId('investors').style.display='none';
        this.panel.position.height =500;
        // var panel = this.getPanel();panel.position.height = 480;panel.setPosition(panel.position);panel.panelManager.normalizePanel(panel);
        // dojo.byId('industraial').style.display='none';
       
        if(sessionStorage.getItem("UserType")=="Public"){
          // alert('Public') 
             dojo.byId('industraial').style.display='none';
             dojo.byId('investors').style.display='none';
         }
         else if(sessionStorage.getItem("UserType")=="Investor"){
          // alert('Investor') 
             dojo.byId('industraial').style.display='none';
         }
         else if(sessionStorage.getItem("UserType")=="DeptViewer1"){
          // alert('DeptViewer1') 
         }
         else if(sessionStorage.getItem("UserType")=="DeptViewer2"){
          // alert('DeptViewer2') 
         }
         else if(sessionStorage.getItem("UserType")=="DeptEditor"){
          // alert('DeptEditor') 
         }
         else{
           dojo.byId('industraial').style.display='none';
           dojo.byId('investors').style.display='none';
          // alert('default Public') 
         }
         
       // dojo.byId('industraial').style.display='none';
       // dojo.byId('investors').style.display='none';
       // dojo.byId('public').style.display='none';

        var _IndustryClassification,_SelectFirmName,_SelectLicenseStatus,
        _SelectPINNo,_SelectPlotNo,_SelectLandStatus,_SelectConstructionStatus,_SelectProduct,
        _SelectLincenseNo,_SelectRegistrationNo,_SelectOwnerName;
      
        var pageUrl = window.location.href;
        if (!pageUrl.includes("?locale=ar")) {          
          _IndustryClassification = "Select Industry Classification";
          _SelectFirmName="Select Firm Name";
          _SelectLicenseStatus="Select License Status";
          _SelectPINNo="Select PIN No";
          _SelectPlotNo="Select Plot No";
          _SelectLandStatus="Select Land Status";
          _SelectConstructionStatus="Select Construction Status";
          _SelectProduct="Select Product";
          _SelectLincenseNo="Select License No";
          _SelectRegistrationNo="Select Registration No";
          _SelectOwnerName="Select Owner Name";
            }else{
          _IndustryClassification ="قُم بتحديد تصنيف الصناعة"; 
          _SelectFirmName="أختار اسم الشركة"; 
          _SelectLicenseStatus="حدد حالة الشركة"; 
          _SelectPINNo="حدد رقم التعريف (PIN)"; 
          _SelectPlotNo="حدد قطعة الأرض"; 
          _SelectLandStatus="حدد حالة الأرض"; 
          _SelectConstructionStatus="حدد حالة البناء"; 
          _SelectProduct="حدد المنتج"; 
          _SelectLincenseNo="حدد رقم الرخصة"; 
          _SelectRegistrationNo="حدد رقم التسجيل"; 
          _SelectOwnerName="حدد اسم المالك";
        }


      this.createCombo("indName","cbIndName","field",_SelectFirmName);
      this.createCombo("indCategory","cbIndCategory","field",_IndustryClassification);
      this.createCombo("firmStatus","cbfirmStatus","field",_SelectLicenseStatus);
      this.createCombo("pinNo","cbPinNo","field",_SelectPINNo);
      this.createCombo("plotNo","cbPlotNo","field",_SelectPlotNo);
      this.createCombo("plotStatus","cbPlotStatus","field",_SelectLandStatus);
      this.createCombo("constStatus","cbConstStatus","field",_SelectConstructionStatus);      
      this.createCombo("product","cbproduct","field",_SelectProduct);
      this.createCombo("licenseNo","cbLicenseNo","field",_SelectLincenseNo);
      this.createCombo("regNo","cbRegNo","field",_SelectRegistrationNo);
      this.createCombo("ownerName","cbOwnerName","field",_SelectOwnerName);
      
      // this.createCombo("indName","cbIndName","field","Select Firm Name");
      // this.createCombo("indCategory","cbIndCategory","field","Select Industry Classification");
      // this.createCombo("firmStatus","cbfirmStatus","field","Select License Status");
      // this.createCombo("pinNo","cbPinNo","field","Select PIN No");
      // this.createCombo("plotNo","cbPlotNo","field","Select Plot No");
      // this.createCombo("plotStatus","cbPlotStatus","field","Select Land Status");
      // this.createCombo("constStatus","cbConstStatus","field","Select Construction Status");      
      // this.createCombo("product","cbproduct","field","Select Product");
      // this.createCombo("licenseNo","cbLicenseNo","field","Select License No");
      // this.createCombo("regNo","cbRegNo","field","Select Registration No");
      // this.createCombo("ownerName","cbOwnerName","field","Select Owner Name");
      
      var searchDiv = dom.byId("divSearch");
      on(searchDiv, "click",this.searchValues);
      var clearDiv = dom.byId("divClear");
      on(clearDiv, "click",this.reloadData);
      var gasYes = dom.byId("radGasYes");
       on(gasYes, "click",this.checkGasConnected);
       var gasNo = dom.byId("radGasNo");
      on(gasNo, "click",this.checkGasConnected);
      var tseYes = dom.byId("radTseYes");
      on(tseYes, "click",this.checkTseConnected);
      
      var tseNo = dom.byId("radTseNo");
      on(tseNo, "click",this.checkTseConnected);

      var sewYes = dom.byId("radSewYes");
      on(sewYes, "click",this.checkSewConnected);
      var sewNo = dom.byId("radSewNo");
      on(sewNo, "click",this.checkSewConnected);

      var chk_tseConnected = dom.byId("chk_ConnectedToTSE"); 
      on(chk_tseConnected, "change",this.tse_checkChangeEvent);
      var chk_sewerConnected = dom.byId("chk_ConnectedToSEW"); 
      on(chk_sewerConnected, "change",this.sew_checkChangeEvent);
      var chk_gasConnected = dom.byId("chk_ConnectedToGas");
      on(chk_gasConnected, "change",this.gas_checkChangeEvent);
                 
      $(document).on('change', ".connectedCheckBox", function() { 
        $(".connectedCheckBox").not(this).prop('checked', false); 
      });
      this.attWidget = this._getATWidget();

    },

    tse_checkChangeEvent: function(obj){
      //alert(obj.target.value)
      if(obj.target.value == "Yes"){
        obj.target.value = "No"
      }else{
        obj.target.value = "Yes"
      }
    },
    sew_checkChangeEvent: function(obj){
      //alert(obj.target.value)
      if(obj.target.value == "Yes"){
        obj.target.value = "No"
      }else{
        obj.target.value = "Yes"
      }
    },
    gas_checkChangeEvent: function(obj){
      //alert(obj.target.value)
      if(obj.target.value == "Yes"){
        obj.target.value = "No"
      }else{
        obj.target.value = "Yes"
      }
    },


    checkGasConnected: function(gasobj){
        gasConnected = gasobj.target.value;
    },

    checkTseConnected: function(obj){
       tseConnected = obj.target.value;
    },

    checkSewConnected: function(obj){
      sewerConnected = obj.target.value;
    },

    onOpen: function(){
      //industryMap.graphics.clear();  
      errTextObj.innerText = "";
    },

    readDomains: function(whereCond){
      var domQuery = new Query();
      domQuery.where = whereCond;
      domQuery.returnGeometry=false;
      domQuery.outFields = ["*"];
      var domQueryTask = new QueryTask(domainsService);
      domQueryTask.execute(domQuery).then(function(domainsRec){
        var resultDomains = domainsRec.features;
        var domName = "";
        resultDomains.forEach(rowDomain => { 
            domName = rowDomain.attributes["Domain_name"];
            if(domName in domainsList){
              var dom =  domainsList[domName];
              var domReverse = domainsListReverse[domName];
              dom[rowDomain.attributes["Domain_code"]] = rowDomain.attributes["Domain_value"];
              domReverse[rowDomain.attributes["Domain_value"]] = rowDomain.attributes["Domain_code"];
              domainsList[domName] = dom;
              domainsListReverse[domName] = domReverse;
            }
            else{
              var domList = domListReverse={};
              domList[rowDomain.attributes["Domain_code"]] = rowDomain.attributes["Domain_value"];
              domListReverse[rowDomain.attributes["Domain_value"]] = rowDomain.attributes["Domain_code"];
              domainsList[domName] = domList;
              domainsListReverse[domName] = domListReverse;
            }
        });
        searchObj.getFirmDetails("firm",firmService);
        searchObj.getFirmDetails("plot",plotStatusService);
        searchObj.getFirmDetails("prod",productService);
      });
    },

    readProdDomains: function(whereCond){
      var domQuery = new Query();
      domQuery.where = whereCond;
      domQuery.returnGeometry=false;
      domQuery.outFields = ["*"];
      var domQueryTask = new QueryTask(domainsService);
      domQueryTask.execute(domQuery).then(function(domainsRec){
        var resultDomains = domainsRec.features;
        var domName = "";
        resultDomains.forEach(rowDomain => { 
            domName = rowDomain.attributes["Domain_name"];
            if(domName in domainsList){
              var dom =  domainsList[domName];
              var domReverse = domainsListReverse[domName];
              dom[rowDomain.attributes["Domain_code"]] = rowDomain.attributes["Domain_value"];
              domReverse[rowDomain.attributes["Domain_value"]] = rowDomain.attributes["Domain_code"];
              domainsList[domName] = dom;
              domainsListReverse[domName] = domReverse;
            }
            else{
              var domList = domListReverse={};
              domList[rowDomain.attributes["Domain_code"]] = rowDomain.attributes["Domain_value"];
              domListReverse[rowDomain.attributes["Domain_value"]] = rowDomain.attributes["Domain_code"];
              domainsList[domName] = domList;
              domainsListReverse[domName] = domListReverse;
            }
        });
        searchObj.getFirmDetails("prod",productService);
      });
    },

    readIndDomains: function(whereCond){
      var domQuery = new Query();
      domQuery.where = whereCond;
      domQuery.returnGeometry=false;
      domQuery.outFields = ["*"];
      var domQueryTask = new QueryTask(domainsService);
      domQueryTask.execute(domQuery).then(function(domainsRec){
        var resultDomains = domainsRec.features;
        var domName = "";
        resultDomains.forEach(rowDomain => { 
            domName = rowDomain.attributes["Domain_name"];
            if(domName in domainsList){
              var dom =  domainsList[domName];
              var domReverse = domainsListReverse[domName];
              dom[rowDomain.attributes["Domain_code"]] = rowDomain.attributes["Domain_value"];
              domReverse[rowDomain.attributes["Domain_value"]] = rowDomain.attributes["Domain_code"];
              domainsList[domName] = dom;
              domainsListReverse[domName] = domReverse;
            }
            else{
              var domList = domListReverse={};
              domList[rowDomain.attributes["Domain_code"]] = rowDomain.attributes["Domain_value"];
              domListReverse[rowDomain.attributes["Domain_value"]] = rowDomain.attributes["Domain_code"];
              domainsList[domName] = domList;
              domainsListReverse[domName] = domListReverse;
            }
        });
        searchObj.getFirmDetails("ind",firmService);
      });
    },

    createCombo:function (name,id,data,placeholdertext){
      var memoryStore = new Memory({
        data: []
    });

      var comboBox1 = new ComboBox({
        id:name,
        store: memoryStore,
        searchAttr: "name",
        autocomplete: true,
        fetchProperties:{sort:[{attribute:"name",descending:false}]},
        placeholder: placeholdertext,
        //MaxLength : 3
    }, name);
      comboBox1.set('style', {width: '100%', height: '30px', fontSize: '30px', margin: '0px 0px 10px 0px'});
      this.own(on(comboBox1, "change",this.cmbchange));
      comboBox1.startup();
    },
    cmbchange:function(value){
      clearitems = false;
      searchType="firm";
      errTextObj.innerText = "";
      if(this.id =="indCategory"){
        indCatgVal = value.split("-")[0];
        clearitems =true;
        multiCriteriaCond = "ISIC_MAIN_AR="+indCatgVal;
        searchObj.getFirmDetails_ind(multiCriteriaCond,firmService);
        // searchObj.getFirmDetails_category("prod",productService,multiCriteriaCond);
        // searchObj.getFirmDetails_category("plot",plotStatusService,multiCriteriaCond);
      }
      else if(this.id =="indName"){
        indNameVal = value;
        multiCriteriaCond="FIRM_AR_NAME=N'"+indNameVal+"'";
      }
      else if(this.id =="firmStatus"){
        firmStatusVal = searchObj.getDomCode("Firm_Status_AR",value);
        multiCriteriaCond="FIRM_STATUS_AR="+firmStatusVal;
      }
      else if(this.id =="pinNo"){
        pinNoVal = value;
        searchType="plot";
        multiCriteriaCond="PIN_NO="+pinNoVal;
      }
      else if(this.id =="plotNo"){
        searchType="plot";
        plotNoVal = value;
        multiCriteriaCond="PLOT_NO='"+plotNoVal+"'";
      }
      else if(this.id =="plotStatus"){
        searchType="plot";
        plotNoVal = searchObj.getDomCode("Allocation_Status",value);
        multiCriteriaCond="PLOT_STATUS="+plotNoVal;
      }
      else if(this.id =="constStatus"){
        contStVal = searchObj.getDomCode("Project_Phase",value);
        multiCriteriaCond="PHASE_DESCRIPTION="+contStVal;
      }
      else if(this.id =="product"){
       
        searchType="prod";
        //prodVal = searchObj.getDomCode("Products_AR",value);
        prodVal =prodCode[value];

        //alert(prodVal)
        multiCriteriaCond="PRODUCT_NAME_AR="+prodVal;
      }
      else if(this.id =="licenseNo"){
        licVal = value;
        multiCriteriaCond="LICENSE_NO='"+licVal+"'";
      }
      else if(this.id =="regNo"){
        regVal = value;
        multiCriteriaCond="INDUSTRIAL_REG_NO='"+regVal+"'";
      }
      else if(this.id =="ownerName"){
        //ownerVal = value;
        ownerVal = ownerCode[value]; 
        multiCriteriaCond="OWNER_NAME=N'"+ownerVal+"'";
      }
  },
  getDomCode:function(dName,fldValue){
     var dcode =0;
     if(dName in domainsListReverse){
       var dlist = domainsListReverse[dName];
       if(fldValue in dlist){
        dcode = dlist[fldValue]; 
       }
     }
     else{
       errTextObj.innerText = dName + " - domain not found";
     }
     return dcode;
  },

  getFirmDetails:function(serviceType,serviceName){
    var query = new Query();
    query.where = "PIN_NO is not NULL";
    query.returnGeometry=false;
    query.outFields = ["*"];
    this.queryTask = new QueryTask(serviceName);
    if(serviceType == "firm"){
      this.queryTask.execute(query, lang.hitch(this, this.firmPopulateList));
    }
    else if(serviceType == "ind"){
      this.queryTask.execute(query, lang.hitch(this, this.constPopulateList));
    }
    else if(serviceType == "prod"){
      this.queryTask.execute(query, lang.hitch(this, this.prodPopulateList));
    }
    else if(serviceType == "plot"){
      this.queryTask.execute(query, lang.hitch(this, this.plotStPopulateList));
    }
    
  },
  getFirmDetails_category:function(serviceType,serviceName,indCatCondition){
    var query = new Query();
    query.where = indCatCondition;
    query.returnGeometry=false;
    query.outFields = ["*"];
    this.qTask = new QueryTask(serviceName);
    if(serviceType == "ind"){
      this.qTask.execute(query, lang.hitch(this, this.constPopulateList));
    }
    if(serviceType == "prod"){
      this.qTask.execute(query, lang.hitch(this, this.prodPopulateList));
    }
    else if(serviceType == "plot"){
      this.qTask.execute(query, lang.hitch(this, this.plotStPopulateList));
    }
  },

  getFirmDetails_ind:function(cond,serviceName){
    var query = new Query();
    query.where = cond;
    query.returnGeometry=false;
    query.outFields = ["*"];
    this.queryTask = new QueryTask(serviceName);
    this.queryTask.execute(query, lang.hitch(this, this.indPopulateList));
  },
  indPopulateList:function(res){
    var rows = res.features;
    this.loadData('indName',"FIRM_AR_NAME",rows,"");
    this.loadData('firmStatus',"FIRM_STATUS_AR",rows,"Firm_Status_AR");
    this.loadData('pinNo',"PIN_NO",rows,"");
    this.loadData('plotNo',"PLOT_NO",rows,"");
    this.loadData('constStatus',"PHASE_DESCRIPTION",rows,"Project_Phase"); 
    this.loadData('regNo',"INDUSTRIAL_REG_NO",rows,"");
    this.loadData('licenseNo',"LICENSE_NO",rows,"");
    this.loadData('ownerName',"OWNER_NAME",rows,"");
    var cnd = "PIN_NO in ("
    for(var cnt=0; cnt<rows.length;cnt++){
       if(cnt == 0){
         cnd = cnd +rows[cnt].attributes["PIN_NO"];
       }
       else{
         cnd =cnd +","+rows[cnt].attributes["PIN_NO"];
       }
    }
    cnd = cnd+")";
    searchObj.getFirmDetails_category("prod",productService,cnd);
    searchObj.getFirmDetails_category("plot",plotStatusService,cnd);
  },
  firmPopulateList:function(results){
    var rows = results.features;
    this.loadData('indName',"FIRM_AR_NAME",rows,"");    
    this.loadData('firmStatus',"FIRM_STATUS_AR",rows,"Firm_Status_AR");
    this.loadData('regNo',"INDUSTRIAL_REG_NO",rows,"");
    this.loadData('licenseNo',"LICENSE_NO",rows,"");
    this.loadData('ownerName',"OWNER_NAME",rows,"");
    this.loadData('constStatus',"PHASE_DESCRIPTION",rows,"Project_Phase");  
  },

  constPopulateList:function(results){
    var constrows = results.features;
    this.loadData('indCategory',"ISIC_MAIN_AR",constrows,"ISIC_AR");
  },
  prodPopulateList:function(results){
    var prodtrows = results.features;
    this.loadData('product',prodDomainDb+".Domain_value",prodtrows,"");
  },
  plotStPopulateList:function(results){
    var plotrows = results.features;
    this.loadData('pinNo',"PIN_NO",plotrows,"");
    this.loadData('plotNo',"PLOT_NO",plotrows,"");
    this.loadData('plotStatus',"PLOT_STATUS",plotrows,"Allocation_Status");
  },

  loadData:function(cmbid,cmbfld,rowData,fieldDomainName){
    if(rowData.length == 0){
          return;
    }
    var cmb = dijit.byId(cmbid);
      cmb.store.data = [];
      var cmbData = [];
      var uniqData = [];
      var indx =0;
      var domainValies = {};
      clearitems = true;

      if(fieldDomainName != "" && fieldDomainName != undefined){
        domainValies = domainsList[fieldDomainName];
      }
      
      if(fieldDomainName == ""){
        if(cmbid == "product"){
          rowData.forEach(prow => {
            var prowVal =prow.attributes[cmbfld];
            //alert(prowVal)
            if(!(prowVal in prodCode)){

              if(prowVal.length>72){
                prowVal = prowVal.substr(prowVal.length - 70);
              }  
              var PRODUCT_NAME_AR = prow.attributes["ISSGIS.DBO.Products.PRODUCT_NAME_AR"];
              
              prodCode[prowVal] = PRODUCT_NAME_AR;//.substring(0, 50);;
            }
            if(prowVal != null && (uniqData.indexOf(prowVal)< 0)){
                cmbData.push({ 
                  name:prowVal,
                  //name:prowVal.substring(0, 70),
                   id:indx
                });
                indx = indx +1;
                uniqData.push(prowVal);
              }
          });
        }
        else if(cmbid == "ownerName"){
          //alert("ownerName")

          rowData.forEach(prow => {
            var prowVal =prow.attributes[cmbfld];
            //console.log(prowVal)
            //alert(prowVal)

            if(prowVal){
            if(!(prowVal in ownerCode)){

              if(prowVal.length>72){
                prowVal = prowVal.substr(prowVal.length - 70);
              }   
              ownerCode[prowVal] = prow.attributes[cmbfld]; 
            }
            if(prowVal != null && (uniqData.indexOf(prowVal)< 0)){
                cmbData.push({ 
                  name:prowVal,
                  //name:prowVal.substring(0, 70),
                   id:indx
                });
                indx = indx +1;
                uniqData.push(prowVal);
              }

            }
          });
        }
        else{
          rowData.forEach(row => {
            var rowVal =row.attributes[cmbfld];
            if(rowVal != null && (uniqData.indexOf(rowVal)< 0)){
                cmbData.push({
                  name:rowVal,
                   id:indx
                });
                indx = indx +1;
                uniqData.push(rowVal);
              }
          });
       }
      }
      else{
      rowData.forEach(row => {
        var rowValCode =row.attributes[cmbfld];
        var code = rowValCode;
        if(rowValCode in domainValies)
            rowValCode = domainValies[rowValCode];
        if(cmbid == "indCategory"){
          var indVal =code+"-"+rowValCode;
          rowValCode = indVal;
        }
        if(rowValCode != null && (uniqData.indexOf(rowValCode)< 0)){
            cmbData.push({
              name:rowValCode, id:indx
            });
            indx = indx +1;
            uniqData.push(rowValCode);
        }
      });
    }

      var dStore = new Memory({
        data: cmbData
    });
    cmb.store = dStore;
    if(clearitems){ 
        cmb.set("value","");
    }
    uniqData = [];
  },
  
  searchValues:function(){
            
    errTextObj.innerText = "Search InProgress";
    var srchCondition = "";
    var svcName = "";

    var chk_tseConnected = dom.byId("chk_ConnectedToTSE");
    var chk_gasConnected = dom.byId("chk_ConnectedToGas");
    var chk_sewConnected = dom.byId("chk_ConnectedToSEW");
    // if(chk_tseConnected.value == "Yes" || chk_gasConnected.value == "Yes"|| chk_sewConnected.value == "Yes"){
    //   searchObj.queryConnected("");
    //   return;
    // }

    if(indNameVal == "" && indCatgVal == "" && firmStatusVal == "" && contStVal == "" && prodVal == "" && licVal == "" && regVal== "" && ownerVal=="" && plotNoVal== 0 && pinNoVal == 0 && plotStatusVal==0){
      if(chk_tseConnected.value == "Yes" || chk_gasConnected.value == "Yes"|| chk_sewConnected.value == "Yes"){

        searchObj.queryConnected("");
        return;
      }else{
        errTextObj.innerText = "Select atleast one value from list";
        return;
      }
      
    } 
    industryMap.graphics.clear();     
    
    if(searchType == "firm"){
      svcName = firmService;
    }
    else if(searchType == "prod"){
      svcName = productService;
    }
    else if(searchType == "plot"){
      svcName = plotStatusService;
    }
    if(indCatgVal != ""){
      srchCondition ="ISIC_MAIN_AR="+indCatgVal;
      if(searchType == "firm"){
          var isSingle = false;
        if((multiCriteriaCond != srchCondition) &&(multiCriteriaCond != "")){
          srchCondition =srchCondition+" and "+multiCriteriaCond;
        }   
        else{
          multiCriteriaCond = srchCondition;
          if(chk_tseConnected.value == "Yes" || chk_gasConnected.value == "Yes"|| chk_sewConnected.value == "Yes"){
            isSingle = true;
          }
          
        }     
        searchObj.queryRecs(multiCriteriaCond,svcName,isSingle);
        
      }

      else if((searchType == "plot") || (searchType == "prod")){
        searchObj.queryRecs(multiCriteriaCond,svcName,false);
      }
      
    }
    else{
      searchObj.queryRecs(multiCriteriaCond,svcName,false);
    }
  },

  queryConnected:function(Pins){
    var cond = "";//pinValues +" and TSE_CONNECTED='"+tseConnected+"' and GAS_CONNECTED='"+gasConnected+"'";
                 
    var chk_tseConnected = dom.byId("chk_ConnectedToTSE");
    var chk_sewConnected = dom.byId("chk_ConnectedToSEW");
    var chk_gasConnected = dom.byId("chk_ConnectedToGas");



    var int_tseConnected = 0; 
    var int_sewConnected = 0; 
    var int_gasConnected = 0;
    if(tseConnected == "Yes"){
      int_tseConnected = 1;
    }
    if(sewerConnected == "Yes"){
      int_sewConnected = 1;
    }
    if(gasConnected == "Yes"){
      int_gasConnected = 1;
    }

    // if(chk_tseConnected.value == "Yes" && chk_gasConnected.value == "Yes"){
    //   cond = "TSE_CONNECTED_EN="+int_tseConnected+" and GAS_CONNECTED_EN="+int_gasConnected;                
    // }

    if(chk_tseConnected.value == "Yes"){
      cond = "TSE_CONNECTED_EN="+int_tseConnected;   
    }
    if(chk_sewConnected.value == "Yes"){
      cond = "SEWER_CONNECTED_EN="+int_sewConnected;   
    }
    if(chk_gasConnected.value == "Yes"){
      cond = "GAS_CONNECTED_EN="+int_gasConnected;   
    }
   
    if(Pins!=""){
      cond = Pins+" and "+cond
    }
    if(chk_tseConnected.value == "Yes" || chk_gasConnected.value == "Yes" || chk_sewConnected.value == "Yes"){

     var condition =  cond.replace('PIN IN','PIN_NO IN')
      
      //console.log(cond)
      searchObj.queryConnectedRecs(condition,connectedService);            
    }
    
  },
  _getATWidget: function(){
    if (this.wManager) {
      var widgetCfg = this._getWidgetConfig('AttributeTable');
      if(widgetCfg){
        var attWidget = this.wManager.getWidgetByLabel(widgetCfg.label);
        return attWidget;
      }else{
        console.warn('The Attribute Table Widget is not configured in this app.');
        return null;
      }
    }
  },
  _getWidgetConfig: function(widgetName) {
    var widgetCnfg = null;
    array.some(this.wManager.appConfig.widgetPool.widgets, function(aWidget) {
      if(aWidget.name == widgetName) {
        widgetCnfg = aWidget;
        return true;
      }
      return false;
    });
    if(!widgetCnfg) {
      /*Check OnScreen widgets if not found in widgetPool*/
      array.some(this.wManager.appConfig.widgetOnScreen.widgets, function(aWidget) {
        if(aWidget.name == widgetName) {
          widgetCnfg = aWidget;
          return true;
        }
        return false;
      });
    }
    if(!widgetCnfg) {
      /*Check OnScreen groups widgets if not found in OnScreen widgets*/
      array.map(this.wManager.appConfig.widgetOnScreen.groups, function(aGroup) {
        array.some(aGroup.widgets, function(aWidget) {
          if(aWidget.name == widgetName) {
            widgetCnfg = aWidget;
            return true;
          }
          return false;
        });
      });
    }
    return widgetCnfg;
  },
  _openResultInAttributeTable: function (currentLayer) {
    // var layerConfig = this.config.layers[this.currentLayerIndex];
    // var lyrZoomExistsAndTrue = (layerConfig.hasOwnProperty("autozoomtoresults") && !layerConfig.autozoomtoresults)?false:true;
    // if (this.autozoomtoresults && lyrZoomExistsAndTrue) {
    //   setTimeout(lang.hitch(this, function () {
    //     this.zoomall();
    //   }), 300);
    // }
    var layerInfo = this.operLayerInfos.getLayerInfoById(currentLayer.id);

    //Adjust field info based on config
    if(!layerConfig.fields.all){
      var adjFldInfos = [];
      array.map(layerInfo.layerObject.fields, lang.hitch(this, function (fieldInfo){
        var cnfgFldObj = this._getConfigFieldObject(fieldInfo.name, this.currentLayerIndex);
        if(cnfgFldObj){
          adjFldInfos.push({
            fieldName: cnfgFldObj.name,
            label: cnfgFldObj.alias,
            show: true,
            format: this._convertFormatInfo(cnfgFldObj)
          });
        }
      }));
      layerInfo.originOperLayer.popupInfo = {
        fieldInfos: adjFldInfos
      }
    }

    this.publishData({
      'target': 'AttributeTable',
      'layer': layerInfo
    });
  },
  queryRecs:function(searchCondition, service,isSingle){
        var thiss = this;
        var queryFeat = new Query();
        queryFeat.where = searchCondition;
        queryFeat.returnGeometry=false;
        queryFeat.outFields = ["*"];
        this.queryTask = new QueryTask(service);    
        this.queryTask.execute(queryFeat).then(function(results){
          var resultFeatures = results.features;
          pinValues = "";
          // console.log("aa")
          // console.log(searchCondition)
          // console.log(resultFeatures)
          resultFeatures.forEach(feature => {
            var  firmPin = feature.attributes["PIN_NO"];
            //alert(firmPin)
            if(firmPin == undefined || firmPin == null){
              firmPin = feature.attributes["ISSGIS.DBO.Products.PIN_NO"];
            }
           // alert(firmPin)
            //var  firmPin = feature.attributes["ISSGIS.DBO.Products.PIN_NO"];
            if(firmPin != null){
              if(pinValues == "" || (typeof pinValues === 'undefined')){
                pinValues = "PIN IN("+firmPin;
              }
              else {
                pinValues =  pinValues +","+firmPin;
              }
           }
          });
            if(resultFeatures.length > 0){
              if(pinValues == ""){
                errTextObj.innerText = "For this criteria PIN has null value";
                
              }
              else{
               
                pinValues = pinValues +")";

               

               // alert(pinValues)
                //console.log(resultFeatures)

                if(isSingle){

                  searchObj.queryConnected(pinValues);
                }else{
                  searchObj.zoomToData(pinValues);
                }
                
                

              }
              if (this.attWidget === undefined) {
                this.attWidget = thiss._getATWidget();
              }
            }
          });
    },

    queryConnectedRecs:function(searchCondition, service){
      // alert(searchCondition)
      var queryFeat = new Query();
      queryFeat.where = searchCondition;
      queryFeat.returnGeometry=false;
      queryFeat.outFields = ["*"];
      var queryTask = new QueryTask(service);    
      queryTask.execute(queryFeat).then(function(results){
        var resultFeatures = results.features;
        if( results.features.length > 0){
        pinValues = "";
        //console.log("bb")
        //  console.log(resultFeatures)
        resultFeatures.forEach(feature => {
          //var  firmPin = feature.attributes["PIN_NO"];
          
          var  firmPin = feature.attributes["PIN_NO"];
          if(firmPin != null){
            if(pinValues == "" || (typeof pinValues === 'undefined')){
              pinValues = "PIN IN("+firmPin;
            }
            else {
              pinValues =  pinValues +","+firmPin;
            }
         }
        });
          if(resultFeatures.length > 0){
            if(pinValues == ""){
              errTextObj.innerText = "For this criteria PIN has null value";
            }
            else{
              pinValues = pinValues +")";
              //alert("tse_gas querying") 
              searchObj.zoomToData(pinValues)
            }
          }
        }
        else{
          var pageUrl = window.location.href;
        if (!pageUrl.includes("?locale=ar")) {  
          errTextObj.innerText ="No feature found for this criteria";
        }else{
          errTextObj.innerText ="لا يوجد نتائج بحث";

        }

          indNameVal="";firmStatusVal="";contStVal="";prodVal="";licVal="";regVal="";ownerVal="";
            plotNoVal=0;
            pinNoVal=0;
            plotStatusVal=0;
        }

        },function(error){
          console.log(error)
        });
  },

    zoomToData:function(pinNocondition){
      var queryFeat = new Query();
        queryFeat.where = pinNocondition;
        queryFeat.returnGeometry=true;
        queryFeat.outFields = ["*"];
        queryFeat.outSpatialReference = industryMap.spatialReference;
        this.queryTask = new QueryTask(plotsService);    
        this.queryTask.execute(queryFeat).then(function(results){
          var qryFeatures = results.features;
          if(qryFeatures.length > 0){
           symb = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
            new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
            new Color([0, 132, 255]), 2),new Color([58, 133, 232,0.5])
            //new Color([0,255, 255]), 2),new Color([255,255,0,0.25])
          );
          industryMap.graphics.clear();
          var geomExtent = null;
          var fcount = 0;
          qryFeatures.forEach(feature => {
            var graphic = new Graphic(feature.geometry,symb);
            industryMap.graphics.add(graphic);
            fcount = fcount +1;
            if(!geomExtent){
                geomExtent = graphic.geometry.getExtent();
            }
            else{
              var curExt = graphic.geometry.getExtent();
              var newExt  = geomExtent.union(graphic.geometry.getExtent());
              geomExtent = newExt;
            }
         });
          industryMap.setExtent(geomExtent.expand(2));
          errTextObj.innerText ="";   
        
            indNameVal=firmStatusVal=contStVal=prodVal=licVal=regVal=ownerVal="";
            plotNoVal=0;
            pinNoVal=0;
            plotStatusVal=0;
           }
           else{
             errTextObj.innerText ="No feature found for this criteria";
             indNameVal="";firmStatusVal="";contStVal="";prodVal="";licVal="";regVal="";ownerVal="";
            plotNoVal=0;
            pinNoVal=0;
            plotStatusVal=0;
           }
        });
        
    },

    reloadData:function(){
      errTextObj.innerText = "";
      multiCriteriaCond = "";
      industryMap.graphics.clear();
      //searchObj.getFirmDetails("ind",firmService);
      var indCmb = dijit.byId('indCategory');
      indCmb.set("value","");
      searchObj.getFirmDetails("prod",productService);
      searchObj.getFirmDetails("firm",firmService);
      searchObj.getFirmDetails("plot",plotStatusService);      
      iindNameVal="";firmStatusVal="";contStVal="";prodVal="";licVal="";regVal="";ownerVal="";
      plotNoVal=0;
      pinNoVal=0;
      plotStatusVal=0;
    },

    onClose: function(){
      //industryMap.graphics.clear();
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

  });
});