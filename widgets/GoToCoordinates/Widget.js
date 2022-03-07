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
define(['dojo/_base/declare', 'jimu/WidgetManager', 'jimu/BaseWidget', 'dojo/on',
  "dojo/_base/lang", "dojo/store/Memory", "dojo/data/ItemFileReadStore", "dijit/form/ComboBox",
  "esri/geometry/Geometry", "esri/geometry/Point", "esri/tasks/GeometryService", "esri/symbols/Symbol",
  "esri/symbols/SimpleMarkerSymbol", "esri/symbols/PictureMarkerSymbol",
  "esri/Color", "esri/graphic", "esri/tasks/ProjectParameters", "esri/SpatialReference"],
  function (declare, WidgetManager, BaseWidget, on, lang, Memory, ItemFileReadStore,
    ComboBox, Geometry, Point, GeometryService, Symbol, SimpleMarkerSymbol,
    PictureMarkerSymbol, Color, Graphic, ProjectParameters, SpatialReference, dom) {

    var hostUrl = window.location.href.includes('#') ? window.location.href.replace("#", "") : window.location.href;
    var pinIcon = new PictureMarkerSymbol(hostUrl + "/widgets/GoToCoordinates/images/ESRI_Pin.png", 50, 50).setOffset(0, 25)
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // SearchAllWidget code goes here

      //please note that this property is be set by the framework when widget is loaded.
      //templateString: template,
      baseClass: 'jimu-widget-GoToCoordinates',
      inSr: null,
      gsvc: "",
      postCreate: function () {
        this.inherited(arguments);
        inSr = 4326;
        gsvc = this.config.geomService;
        console.log('postCreate');
      },

      startup: function () {
        this.inherited(arguments);
        //this.panel.position.height =100;
        var curMap = this.map;
        this.loadUnits();
        var wd = WidgetManager.getInstance();
        // this.own(on("selUnits", "change",this.cmbchange));
        console.log('startup');
        document.getElementById("errMsg").style.display = "none"
        $('input[name="rbMUnits"]').change(function () {
          //alert("Changed"); 
          if ($('#LatLong').is(':checked')) {
            $('#lblMUnits1').text("Latitude");
            $('#lblMUnits2').text("Longitude");
            // btnZoom this.map.spatialReference.wkid           
          } else {
            $('#lblMUnits1').text("Easting");
            $('#lblMUnits2').text("Northing");
          }
        });

      },
      _clrValues: function () {
        this.map.graphics.clear();
        document.getElementById("txtLongrEast").value = '';
        document.getElementById("txtLatrNorth").value = '';
      },
      _onClickZoombtn: function () {
        var curMap = this.map;
        if ($('#LatLong').is(':checked')) {
          var x = document.getElementById("txtLongrEast").value;
          var y = document.getElementById("txtLatrNorth").value;
          var WGSpoint = new Point(x, y, new SpatialReference(4326));
          var projectParm = new ProjectParameters();
          projectParm.geometries = [WGSpoint];
          projectParm.outSR = new SpatialReference({
            wkid: 102100,
          });
          esriConfig.defaults.geometryService.project(projectParm).then(
            function (res) {
              //console.log(res);
              var long = res[0].x;
              var lat = res[0].y;
              // var spatilref = res[0].spatialReference.wkid;
              var newsubpoint = new esri.geometry.Point(long, lat, new SpatialReference(res[0].spatialReference.wkid));
              var graphic = new Graphic(newsubpoint, pinIcon);
              curMap.centerAndZoom(newsubpoint, 14);//zoom level
              curMap.graphics.add(graphic);
            },
            function (error) {
              console.log(error);
            }
          );
          // curMap.centerAndZoom(WGSpoint, 8);
        } else {
          var x = document.getElementById("txtLongrEast").value;
          var y = document.getElementById("txtLatrNorth").value;
          var WGSpoint = new Point(x, y, new SpatialReference(2932));
          var projectParm = new ProjectParameters();
          projectParm.geometries = [WGSpoint];
          projectParm.outSR = new SpatialReference({
            wkid: 102100,
          });
          esriConfig.defaults.geometryService.project(projectParm).then(
            function (res) {
              //console.log(res);
              var long = res[0].x;
              var lat = res[0].y;
              // var spatilref = res[0].spatialReference.wkid;
              var newsubpoint = new esri.geometry.Point(long, lat, new SpatialReference(res[0].spatialReference.wkid));
              var graphic = new Graphic(newsubpoint, pinIcon);
              curMap.centerAndZoom(newsubpoint, 14);//zoom level
              curMap.graphics.add(graphic);
            },
            function (error) {
              console.log(error);
            }
          );
        }
      },
      cmbchange: function (value) {
        inSr = value;
      },
      onOpen: function () {
        console.log('onOpen');
      },
      loadUnits: function () {
        var memoryStore = new Memory({
          data: []
        });
        var cmbData = memoryStore.data;
        cmbData.push({ name: "Latitude/Longitude", id: 4326 });
        cmbData.push({ name: "Meters", id: 2932 });
        // var comboBox1  =dojo.byId("selUnits");
        // comboBox1.attr("searchAttr","name");
        // comboBox1.attr("store", cmbData);
        var comboBox1 = new ComboBox({
          id: "mapUnits",
          store: memoryStore,
          searchAttr: "name",
          autocomplete: true
        }, "selUnits");
        //comboBox1.set('style', {width: '100%', height: '30px', fontSize: '30px', margin: '0px 0px 10px 0px'});
        this.own(on(comboBox1, "change", this.cmbchange));
        comboBox1.set("value", "Latitude/Longitude");
        comboBox1.startup();
      },

      onClose: function () {
        console.log('onClose');
        this.map.graphics.clear();
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

    });
  });