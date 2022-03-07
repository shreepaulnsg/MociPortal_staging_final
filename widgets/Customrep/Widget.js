///////////////////////////////////////////////////////////////////////////
// Report Widget
// The widget is implemented to do the following:
// 1. Read the report types from configuration in dropdown
// 2. Use draw tool to select area of interest
// 3. Based on report type selected and draw tool input provided generate report in new window by clicking on generate report button
// 4. Validation and error messages are shown within widget
///////////////////////////////////////////////////////////////////////////
define(["dojo/parser", "esri/config",
    "esri/layers/ArcGISDynamicMapServiceLayer",
    "esri/geometry/Extent",
    'dojo/_base/declare',
    'jimu/BaseWidget',
    'jimu/dijit/Report',
    'jimu/MapManager',
    'jimu/dijit/PageUtils',
    "esri/urlUtils",
    "esri/arcgis/utils",
    'esri/tasks/query',
    'esri/tasks/QueryTask',
    "esri/graphic",
    "esri/layers/GraphicsLayer",
    "esri/symbols/SimpleFillSymbol",
    "esri/symbols/SimpleLineSymbol",
    'dojo/_base/array', 'dojo/_base/lang',
    'dojo/on',
    'dojo/dom', 'jimu/utils', 'jimu/portalUrlUtils', 'dojo/_base/html'],
    function (parser, esriConfig, ArcGISDynamicMapServiceLayer, Extent, declare, BaseWidget, Report, MapManager, PageUtils, urlUtils, arcgisUtils, Query, QueryTask, Graphic, GraphicsLayer, SimpleFillSymbol, SimpleLineSymbol, array, lang, on, dom, jimuUtils, portalUrlUtils, html) {
        //To create a widget, you need to derive from BaseWidget.
        return declare([BaseWidget], {
            // DemoWidget code goes here

            //please note that this property is be set by the framework when widget is loaded.
            //templateString: template,

            baseClass: 'jimu-widget-demo',
            // selectedReport: Number,
            reportData: any = "1",
            format: string = "pdf",
            reportTitle: string,
            reportTemplate: string,
            dynamicLayer: string,
            print_map: null,
            plotAllocationMap: null,
            constructionStatusMap: null,
            delayedPaymentsMap: null,
            factoryMap: null,
            dynamicMap: null,
            _createPrintMap: function (report) {
                var reportMapItemId;
                switch (report) {
                    case "0":
                        reportMapItemId = "5076ae91c40d4faab84edcb8da660496";
                        break;
                    case "1":
                        reportMapItemId = "7b912e5c0a794dbf9d98ae704ba8a80f";
                        break;
                    case "2":
                        reportMapItemId = "f77f7a76a5f744edbc3d0ade1885cca0";
                        break;
                    case "3":
                        reportMapItemId = "75e9506f2b004bec86ef5e759fa303b8";
                        break;
                    default:
                        reportMapItemId = "5076ae91c40d4faab84edcb8da660496";
                }
                var initialExtent = new Extent({
                    "xmax": 5726968.294434576,
                    "xmin": 5718278.359781177,
                    "ymax": 2896709.0270397244,
                    "ymin": 2893422.234823375,
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
                    this.dynamicMap = map;
                    this.setConfig();
                }));
            },


            onReportChange() {
                selectedReport = this.selectedReport.value;
                if (this.reportData == "1")
                    this._createPrintMap(selectedReport);
            },
            drpDatachange() {
                this.reportData = this.selectedReportData.value;
                if (this.reportData == "1") {
                    this.rdoNo.disabled = true;
                } else {
                    this.rdoNo.disabled = false;
                }
            },
            postCreate: function () {
                app = {};
                this.inherited(arguments);
                print_map = this.printmap;
                plotCoordinates = [];
                factoryDeatails = [];
            },

            startup: function () {
                this.inherited(arguments);
                this._initRadios();
                this._createPrintMap("0");
            },
            setConfig: function () {
                if (this.selectedReport.value == 0) {
                    this.reportTemplate = "Plot_Allocation";
                    this.reportTitle = "Plot Allocation Report";
                    // this.dynamicMap = this.plotAllocationMap;
                    this.dynamicLayer = "https://gisstg.moci.gov.qa/server/rest/services/Moci/AllocationStatus/MapServer/1";
                }
                if (this.selectedReport.value == 1) {
                    this.reportTemplate = "Construction_Status";
                    this.reportTitle = "Construction Status Report";
                    // this.dynamicMap = this.constructionStatusMap;
                    this.dynamicLayer = "https://gisstg.moci.gov.qa/server/rest/services/Moci/ProjectStatus/MapServer/0";
                }
                if (this.selectedReport.value == 2) {
                    this.reportTemplate = "Delayed_Payments";
                    this.reportTitle = "Delayed Payments Report";
                    // this.dynamicMap = this.delayedPaymentsMap;
                    this.dynamicLayer = "https://gisstg.moci.gov.qa/server/rest/services/Moci/Delayed_Payments/MapServer/0";
                }
                if (this.selectedReport.value == 3) {
                    this.reportTemplate = "Factory";
                    this.reportTitle = "Factory Report";
                    // this.dynamicMap = this.factoryMap;
                    this.dynamicLayer = "https://gisstg.moci.gov.qa/server/rest/services/Moci/FactoryReport/MapServer/0";
                }

            },
            drpPinchange() {
                var fqueryTask = new QueryTask(this.dynamicLayer);
                var fquery = new Query();
                fquery.returnGeometry = true;
                fquery.outFields = ["PIN_NO", "FIRM_AR_NAME", "PLOT_NO", "PLOT_AREA", "LICENSE_NO", "INDUSTRIAL_REG_NO", "FIRM_STATUS_AR", "LICENSE_STATUS_AR_DESC", "PHASE_DESCRIPTION_DESC", "ISIC_MAIN_AR", "ISIC_SUBGROUP_I_AR", "ISIC_SUBGROUP_II_AR"];
                fquery.where = "PIN_NO=" + this.selectedPin.value
                fquery.outSpatialReference = this.dynamicMap.spatialReference;
                // When resolved, returns features and graphics that satisfy the query.
                fqueryTask.execute(fquery).then((results) => {
                    plotCoordinates = results.features[0].geometry.rings;
                    factoryDeatails = results.features[0].attributes;
                    var qryFeatures = results.features;
                    if (qryFeatures.length > 0) {
                        // const symb = {
                        //     type: "simple-fill",
                        //     color: [255, 255, 0, 0.25],  // Orange, opacity 80%
                        //     outline: {
                        //         color: [0, 255, 255],
                        //         width: 2
                        //     }
                        // };

                           const symb = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                                new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                                new Color([0,255, 255]), 2),new Color([255,255,0,0.25])
                              );
                        this.dynamicMap.graphics.clear();
                        var geomExtent = null;
                        var fcount = 0;
                        // var graphicsLayer = new GraphicsLayer({opacity:0.20});
                        qryFeatures.forEach(feature => {
                            var graphic = new Graphic(feature.geometry, symb);
                            this.dynamicMap.graphics.add(graphic);
                            // Create a polygon geometry
                            // const polygon = {
                            //     type: "polygon", // autocasts as new Polygon()
                            //     rings: feature.geometry.rings
                            // };


                            // Add the geometry and symbol to a new graphic
                            // const polygonGraphic = new Graphic({
                            //     geometry: polygon,
                            //     symbol: symb
                            // });
                            // graphicsLayer.add(new Graphic(feature.geometry, symb));
                            // this.dynamicMap.graphics.add(graphic);
                            fcount = fcount + 1;
                            if (!geomExtent) {
                                geomExtent = graphic.geometry.getExtent();
                            }
                            else {
                                var curExt = graphic.geometry.getExtent();
                                var newExt = geomExtent.union(graphic.geometry.getExtent());
                                geomExtent = newExt;
                            }
                        });

                        this.dynamicMap.setExtent(geomExtent.expand(2));
                    }
                });
            },
            _initReport: function () {
                var DatosReporte2 = [];
                var printData = [];
                this.report = new Report({
                    footNotes: this.reportTitle,
                    printTaskUrl: "https://gisstg.moci.gov.qa/server/rest/services/ExportWebMap/GPServer/Export%20Web%20Map",
                    reportLayout: {
                        "pageSize": this.reportData == "1" ? PageUtils.PageSizes.A3 : PageUtils.PageSizes.A4,
                        "orientation": PageUtils.Orientation.Landscape
                    }
                });
                if (this.reportData == "1") {

                    printData = [
                        {
                            //addPageBreak: true,
                            type: "map",
                            map: this.dynamicMap
                        }
                    ];
                    if (this.format == "pdf") {
                        this.report.print(this.reportTemplate, this.reportTitle, printData, "images/app-logo - Copy.png");
                    }
                }
                if (this.reportData == "2") {
                    var queryTask;
                    if (this.reportTemplate != "Plot_Allocation") {
                        queryTask = new QueryTask(this.dynamicLayer);
                    } else {
                        queryTask = new QueryTask("https://gisstg.moci.gov.qa/server/rest/services/Moci/AllocationStatus/MapServer/2");
                    }
                    var query = new Query();
                    var RECIEPT_ALLOCATION_SIGNE;
                    var allocation_date, DUE_DATE;
                    var options = { month: 'long', day: 'numeric', year: 'numeric' };
                    var Delay_in_Days;
                    let arLocale = Intl.NumberFormat('ar');
                    query.returnGeometry = false;
                    if (this.reportTemplate == "Plot_Allocation") {
                        query.outFields = ["LOCATION_AR", "CANCEL_STATUS ", "no_of_plots ", "total_area"];
                    }
                    else if (this.reportTemplate == "Construction_Status") {
                        query.outFields = ["FIRM_AR_NAME", "PIN_NO", "PLOT_NO", "PLOT_AREA", "CONTRACTOR_NAME_AR", "ENGINEER_NAME", "PHASE_DESCRIPTION_DESC",
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
                        query.outFields = ["FIRM_AR_NAME", "PIN_NO", "PLOT_NO", "PLOT_AREA", "ISIC_MAIN_AR_DESC", "COUNT_PAYMENTS_DUE", "SUM_PAY_VALUE", "ALLOCATION_DATE"];
                    }
                    else {
                        query.outFields = ["PIN_NO", "PLOT_NO", "FIRM_EN_NAME", "FIRM_STATUS_DESC", "COUNT_PAYMENTS", "SUM_PAY_VALUE", "RECIEPT_ALLOCATION_SIGNE", "BLOCKS_AREA"];
                    }
                    query.where = "1=1";
                    if (this.reportTemplate == "Plot_Allocation") {
                        if (this.format == "excel") {
                            DatosReporte2[0] = ["Industrial Area - SubLocations", "Allocation Status", "No of Plots", "Total Area"];
                        }
                        var i = 0;
                        queryTask.execute(query, lang.hitch(this, function (results) {
                            DatosReporte = array.map(results.features, (feature) => {
                                i++;
                                if (feature.attributes["RECIEPT_ALLOCATION_SIGNE"]) {
                                    RECIEPT_ALLOCATION_SIGNE = new Date(feature.attributes["RECIEPT_ALLOCATION_SIGNE"]);
                                    // Delay_in_Days = Math.round((new Date() - RECIEPT_ALLOCATION_SIGNE) / (1000 * 60 * 60 * 24));
                                    RECIEPT_ALLOCATION_SIGNE = RECIEPT_ALLOCATION_SIGNE.toLocaleDateString("ar", options);
                                } else {
                                    RECIEPT_ALLOCATION_SIGNE = feature.attributes["RECIEPT_ALLOCATION_SIGNE"];
                                }
                                if (this.reportTemplate == "Plot_Allocation") {
                                    Datos = [feature.attributes["LOCATION_AR"], feature.attributes["CANCEL_STATUS"], feature.attributes["no_of_plots"], feature.attributes["total_area"]];
                                }
                                DatosReporte2.push(Datos);
                                var cols = ["Industrial Area - SubLocations", "Allocation Status", "No of Plots", "Total Area"];
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
                                    query.outFields = ["sub_location_en", "isic_main_ar", "cancel_status", "no_of_plots", "total_area"];
                                    query.where = "1=1";
                                    queryTask = new QueryTask("https://gisstg.moci.gov.qa/server/rest/services/Moci/AllocationStatus/MapServer/3");
                                    queryTask.execute(query, lang.hitch(this, function (results) {
                                        if (this.format == "excel") {
                                            this._createCSV(DatosReporte2, "Plot Allocation Summary Report");
                                        }
                                        Datos = [];
                                        DatosReporte2 = [];
                                        if (this.format == "excel") {
                                            DatosReporte2[0] = ["Industrial Area -SubLocations", "Industry Classifcation", "Allocation Status", "No of Plots", "Total Area"];
                                        }
                                        DatosReporte = array.map(results.features, (feature) => {
                                            if (this.reportTemplate == "Plot_Allocation") {
                                                Datos = [feature.attributes["sub_location_en"], feature.attributes["isic_main_ar"], feature.attributes["cancel_status"], feature.attributes["no_of_plots"], feature.attributes["total_area"]];
                                            }
                                            DatosReporte2.push(Datos);
                                        });
                                        cols = ["Industrial Area -SubLocations", "Industry Classifcation", "Allocation Status", "No of Plots", "Total Area"];
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
                    else if (this.reportTemplate == "Factory") {
                        if (this.format == "excel") {
                            DatosReporte2[0] = ["id", "x", "y"];
                        }
                        Datos = [];
                        DatosReporte2 = [];
                        for (var i = 0; i < plotCoordinates[0].length; i++) {
                            Datos = [i + 1, plotCoordinates[0][i][0], plotCoordinates[0][i][1]]
                            DatosReporte2.push(Datos);
                        }
                        cols = ["id", "x", "y"];
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
                        Datos = [];
                        DatosReporte2 = [];
                        if (this.format == "excel") {
                            DatosReporte2[0] = ["FIRM_AR_NAME", "PIN_NO", "PLOT_NO", "PLOT_AREA", "LICENSE_NO", "INDUSTRIAL_REG_NO", "FIRM_STATUS_AR", "LICENSE_STATUS_AR_DESC", "PHASE_DESCRIPTION_DESC", "ISIC_MAIN_AR", "ISIC_SUBGROUP_I_AR", "ISIC_SUBGROUP_II_AR"];
                        }
                        if (this.reportTemplate == "Factory") {
                            Datos = [factoryDeatails["FIRM_AR_NAME"], factoryDeatails["PIN_NO"], factoryDeatails["PLOT_NO"], factoryDeatails["PLOT_AREA"], factoryDeatails["LICENSE_NO"],
                            factoryDeatails["INDUSTRIAL_REG_NO"], factoryDeatails["FIRM_STATUS_AR"], factoryDeatails["LICENSE_STATUS_AR_DESC"], factoryDeatails["PHASE_DESCRIPTION_DESC"], factoryDeatails["ISIC_MAIN_AR"], factoryDeatails["ISIC_SUBGROUP_I_AR"], factoryDeatails["ISIC_SUBGROUP_II_AR"]];
                        }
                        DatosReporte2.push(Datos);
                        cols = ["FIRM_AR_NAME", "PIN_NO", "PLOT_NO", "PLOT_AREA", "LICENSE_NO", "INDUSTRIAL_REG_NO", "FIRM_STATUS_AR", "LICENSE_STATUS_AR_DESC", "PHASE_DESCRIPTION_DESC", "ISIC_MAIN_AR", "ISIC_SUBGROUP_I_AR", "ISIC_SUBGROUP_II_AR"];
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
                        } else {
                            this._createCSV(DatosReporte2, this.reportTitle);
                        }
                    }
                    else {
                        queryTask.execute(query, lang.hitch(this, function (results) {
                            if (this.format == "excel") {
                                if (this.reportTemplate == "Construction_Status") {
                                    DatosReporte2[0] = ["Firm Name", "Pin Number", "Plot Number", "Plot Area", "Contractor Name", "Engineer Responsible", "Current Project Stage", "Expected End Date", "Delay in Days"];
                                }
                                else if (this.reportTemplate == "Delayed_Payments") {
                                    DatosReporte2[0] = ["Firm Name (AR)", "Pin Number", "Plot Number", "Plot Area", "Industry Classification", "Count of Payments Due", "Total Due", "Allocated Date"];
                                }
                                else {
                                    DatosReporte2[0] = ["PIN_NO", "PLOT_NO", "FIRM_EN_NAME", "FIRM_STATUS_DESC", "COUNT_PAYMENTS", "SUM_PAY_VALUE", "RECIEPT_ALLOCATION_SIGNE", "BLOCKS_AREA"];
                                }
                            }
                            DatosReporte = array.map(results.features, (feature) => {
                                if (feature.attributes["ALLOCATION_DATE"]) {
                                    allocation_date = new Date(feature.attributes["ALLOCATION_DATE"]);
                                    Delay_in_Days = Math.round((new Date() - allocation_date) / (1000 * 60 * 60 * 24));
                                    allocation_date = allocation_date.toLocaleDateString("ar", options);
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
                                                DUE_DATE = DUE_DATE.toLocaleDateString("ar", options);
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

                                    Datos = [feature.attributes["FIRM_AR_NAME"], feature.attributes["PIN_NO"], feature.attributes["PLOT_NO"], feature.attributes["PLOT_AREA"], feature.attributes["CONTRACTOR_NAME_AR"], feature.attributes["ENGINEER_NAME"], feature.attributes["PHASE_DESCRIPTION_DESC"], DUE_DATE, Delay_in_Days];
                                }
                                else if (this.reportTemplate == "Delayed_Payments") {
                                    Datos = [feature.attributes["FIRM_AR_NAME"], feature.attributes["PIN_NO"], feature.attributes["PLOT_NO"], feature.attributes["PLOT_AREA"], feature.attributes["ISIC_MAIN_AR_DESC"], feature.attributes["COUNT_PAYMENTS_DUE"], feature.attributes["SUM_PAY_VALUE"], allocation_date];
                                }
                                else {
                                    Datos = [feature.attributes["PIN_NO"], feature.attributes["PLOT_NO"], feature.attributes["FIRM_EN_NAME"], feature.attributes["FIRM_STATUS_DESC"], feature.attributes["COUNT_PAYMENTS"], arLocale.format(feature.attributes["SUM_PAY_VALUE"]), RECIEPT_ALLOCATION_SIGNE, feature.attributes["BLOCKS_AREA"]];
                                }
                                DatosReporte2.push(Datos);
                            });
                            var cols = this.reportTemplate == "Delayed_Payments" ? ["Firm Name (AR)", "Pin Number", "Plot Number", "Plot Area", "Industry Classification", "Count of Payments Due", "Total Due", "Allocated Date"] : ["Firm Name", "Pin Number", "Plot Number", "Plot Area", "Contractor Name", "Engineer Responsible", "Current Project Stage", "Expected End Date", "Delay in Days"];
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
            }

        });
    });
