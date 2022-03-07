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

/*global define*/
define([
  'dojo/_base/declare',
  'dijit/_WidgetsInTemplateMixin',
  'jimu/BaseWidget',
  'dojo/_base/lang',
  'dojo/topic',
  'dojo/on',
  'dojo/dom-class',
  'dojo/dom-style',
  'dojo/keys',
  'dojo/query',
  'dojo/_base/array',
  'dijit/Tooltip',
  'dijit/registry',
  'esri/layers/GraphicsLayer',
  'esri/renderers/SimpleRenderer',
  'esri/symbols/PictureMarkerSymbol',
  'esri/symbols/SimpleMarkerSymbol',
  'jimu/utils',
  'jimu/dijit/CoordinateControl'
], function (
  dojoDeclare,
  _WidgetsInTemplateMixin,
  BaseWidget,
  dojoLang,
  dojoTopic,
  dojoOn,
  dojoDomClass,
  dojoDomStyle,
  dojoKeys,
  dojoQuery,
  dojoArray,
  dijitTooltip,
  dijitRegistry,
  EsriGraphicsLayer,
  EsriSimpleRenderer,
  EsriPictureMarkerSymbol,
  EsriSimpleMarkerSymbol,
  utils,
  CoordinateControl
) {
  'use strict';
  var cls = dojoDeclare([BaseWidget, _WidgetsInTemplateMixin], {
    baseClass: 'jimu-widget-cw',
    name: 'CW',
    uid: null,
    /**
     *
     **/
    postCreate: function () {
      this.openAtStartAysn = true; //’this’ is widget object
      this.uid = dijitRegistry.getUniqueId('cc');
      dojoTopic.subscribe(
        'REMOVECONTROL',
        dojoLang.hitch(this, this.removeControl)
      );

      dojoTopic.subscribe(
        'ADDNEWNOTATION',
        dojoLang.hitch(this, this.addOutputSrBtn)
      );

      this.coordTypes = [];

      var glsym = null;
      if (this.config) {
        if (this.config.symbols) {
          if (this.config.symbols.graphicLocationSymbol) {
            if (this.config.symbols.graphicLocationSymbol.hasOwnProperty("imageData")) {
              glsym = new EsriPictureMarkerSymbol(this.config.symbols.graphicLocationSymbol);
            } else {
              glsym = new EsriSimpleMarkerSymbol(this.config.symbols.graphicLocationSymbol);
            }
          } else {
            glsym = new EsriPictureMarkerSymbol(
              this.folderUrl + 'images/CoordinateLocation.png',
              26,
              26
            );
            glsym.setOffset(0, 13);
          }
        }

        if (this.config.initialCoords) {
          dojoArray.forEach(this.config.initialCoords,
            dojoLang.hitch(this, function (tData) {
              this.coordTypes.push(tData);
            }));
        } else {
          this.coordTypes = [{
              notation: 'DD',
              defaultFormat: "Y: N X: E"
            },
            {
              notation: 'DDM',
              defaultFormat: "A° B'N X° Y'E"
            },
            {
              notation: 'DMS',
              defaultFormat: "A° B' C\"N X° Y' Z\"E"
            },
            {
              notation: 'GARS',
              defaultFormat: "XYQK"
            },
            {
              notation: 'GEOREF',
              defaultFormat: "ABCDXY"
            },
            {
              notation: 'MGRS',
              defaultFormat: "ZSXY"
            },
            {
              notation: 'USNG',
              defaultFormat: "ZSXY"
            },
            {
              notation: 'UTM',
              defaultFormat: "ZH X Y"
            },
            {
              notation: 'UTM_H',
              defaultFormat: "ZH X Y"
            }
          ];
        }
      }

      // Create graphics layer
      if (!this.coordGLayer) {
        var glrenderer = new EsriSimpleRenderer(glsym);
        this.coordGLayer = new EsriGraphicsLayer();
        this.coordGLayer.spatialReference = this.map.spatialReference;
        this.coordGLayer.setRenderer(glrenderer);
        this.map.addLayer(this.coordGLayer);
      }

      this.own(dojoOn(
        this.addNewNotationDiv,
        'keydown',
        dojoLang.hitch(this, function (evt) {
          if (evt.keyCode === dojoKeys.ENTER || evt.keyCode === dojoKeys.SPACE) {
            this.addNotation();
          }
        })));
    },

    /**
     *
     **/
    removeControl: function (r) {
      r.destroyRecursive();
      this.setWidgetLastFocusNode();
    },

    /**
     *
     **/
    addOutputSrBtn: function (withType) {
      if (!withType) {
        withType.notation = 'DD';
        withType.defaultFormat = 'YN XE';
      }

      var cc = new CoordinateControl({
        parentWidget: this,
        input: false,
        currentClickPoint: this.inputControl.currentClickPoint,
        type: withType.notation,
        defaultFormat: withType.defaultFormat,
        label: withType.notation,
        showCopyButton: true,
        showDeleteButton: true,
        showFormatButton: true,
        nls: this.nls
      });

      this.own(dojoOn(cc, "expandButtonClicked", dojoLang.hitch(this, function () {
        this.setWidgetLastFocusNode();
      })));

      this.own(dojoOn(cc, "removeCoordsControl", dojoLang.hitch(this, function () {
        this.setWidgetLastFocusNode();
        this.addNewNotationDiv.focus();
      })));

      //cc.placeAt(this.outputtablecontainer, "after", this.addNewNotationDiv);
      cc.placeAt(this.outputtablecontainer);
      cc.startup();

      //update the new children with the current state of the widget

      var info = {
        state: this.state,
        themeName: this.appConfig.theme.name,
        isActive: true
      };
      dojoTopic.publish('CRDWIDGETSTATEDIDCHANGE', info);
      this.setWidgetLastFocusNode();
    },

    /**
     *
     **/
    startup: function () {
      this.inputControl = new CoordinateControl({
        parentWidget: this,
        label: this.nls.inputLabel,
        input: true,
        showCopyButton: true,
        type: this.config.hasOwnProperty("inputNotation") ? this.config.inputNotation : "DD",
        defaultFormat: this.config.hasOwnProperty("inputFormat") ? this.config.inputFormat : "YN XE",
        showFormatButton: true,
        showDrawPoint: true,
        drawButtonLabel: this.nls.addPointLabel,
        zoomScale: this.config.test.zoomScale,
        graphicsLayer: this.coordGLayer
      });
      this.inputControl.placeAt(this.inputcoordcontainer);
      this.inputControl.startup();
      if (this.inputControl._frmtdlg && this.inputControl._frmtdlg.content.prefixContainer.style.display === "") {
        if (this.config.hasOwnProperty("addSignPrefix")) {
          this.inputControl._frmtdlg.content.addSignChkBox.setValue(this.config.addSignPrefix);
        } else {
          this.inputControl._frmtdlg.content.addSignChkBox.setValue(false);
        }
      }
      utils.initFirstFocusNode(this.domNode, this.inputControl.coordtext);
      if (utils.isAutoFocusFirstNodeWidget(this)) {
        this.inputControl.coordtext.focus();
      }
      this._setTheme();

      // add default output coordinates
      dojoArray.forEach(this.coordTypes, function (itm) {
        this.addOutputSrBtn(itm);
      }, this);
      if (this.coordTypes.length === 0) {
        utils.initLastFocusNode(this.domNode, this.addNewNotationDiv);
      }

      // Change the "Copy to Clipboard" title to "Copy All"
      var nl = dojoQuery("span[title=" + this.nls.copyToClipboard + "]", this.inputControl.domNode);
      if (nl.length > 0) {
        nl[0].title = this.nls.copyAll;
      }
    },

    /**
     * Set the last focus node in the widget
     **/
    setWidgetLastFocusNode: function () {
      var focusNodes;
      focusNodes = utils.getFocusNodesInDom(
        this.outputtablecontainer.children[this.outputtablecontainer.children.length - 1]);
      //Check if readonly input textbox or copy btn's parent is hidden from the page
      //If yes, delete the node from focusable nodes array
      for (var i = focusNodes.length - 1; i >= 0; i--) {
        if (focusNodes[i] && ((dojoDomClass.contains(focusNodes[i], "cpbtn") &&
              dojoDomStyle.get(focusNodes[i].parentNode.parentNode, "display") === "none") ||
            ((dojoDomClass.contains(focusNodes[i], "crds")) &&
              dojoDomStyle.get(focusNodes[i].parentNode, "display") === "none"))) {
          focusNodes.splice(i, 1);
        }
      }
      //Set last focus node of the widget panel
      if (focusNodes && focusNodes.length > 0) {
        utils.initLastFocusNode(this.domNode, focusNodes[focusNodes.length - 1]);
      } else {
        utils.initLastFocusNode(this.domNode, this.addNewNotationDiv);
      }
    },

    /**
     * widget open event handler
     **/
    onOpen: function () {
      this.widgetManager.activateWidget(this);
    },

    /**
     * widget close event handler
     **/
    onClose: function () {
      this.setWidgetSleep(true);
    },

    onActive: function () {
      this.setWidgetSleep(false);
    },

    onDeActive: function () {
      this.setWidgetSleep(true);
    },

    /**
     * Determines the state of the widget
     **/
    setWidgetSleep: function (sleeping) {
      if (this.coordGLayer) {
        this.coordGLayer.setVisibility(!sleeping);
        this.map.setInfoWindowOnClick(sleeping);
      }

      //inform the children we are inactive
      var info = {
        state: this.state,
        themeName: this.appConfig.theme.name,
        isActive: !sleeping
      };
      dojoTopic.publish('CRDWIDGETSTATEDIDCHANGE', info);
    },

    addNotation: function () {
      this.addOutputSrBtn({
        notation: this.inputControl.type,
        defaultFormat: this.inputControl.defaultFormat
      });
      var n = this.addNewNotation;
      dijitTooltip.defaultPosition = ['above', 'below'];
      dijitTooltip.show(this.nls.notationAddedMessage, n);
      setTimeout(function () {
        dijitTooltip.hide(n);
      }, 2000);
    },

    //source:
    //https://stackoverflow.com/questions/9979415/dynamically-load-and-unload-stylesheets
    _removeStyleFile: function (filename, filetype) {
      //determine element type to create nodelist from
      var targetelement = null;
      if (filetype === "js") {
        targetelement = "script";
      } else if (filetype === "css") {
        targetelement = "link";
      } else {
        targetelement = "none";
      }
      //determine corresponding attribute to test for
      var targetattr = null;
      if (filetype === "js") {
        targetattr = "src";
      } else if (filetype === "css") {
        targetattr = "href";
      } else {
        targetattr = "none";
      }
      var allsuspects = document.getElementsByTagName(targetelement);
      //search backwards within nodelist for matching elements to remove
      for (var i = allsuspects.length; i >= 0; i--) {
        if (allsuspects[i] &&
          allsuspects[i].getAttribute(targetattr) !== null &&
          allsuspects[i].getAttribute(targetattr).indexOf(filename) !== -1) {
          //remove element by calling parentNode.removeChild()
          allsuspects[i].parentNode.removeChild(allsuspects[i]);
        }
      }
    },

    _setTheme: function () {
      //Check if DartTheme
      if (this.appConfig.theme.name === "DartTheme") {
        //Load appropriate CSS for dart theme
        utils.loadStyleLink('dartOverrideCSS', this.folderUrl + "css/dartTheme.css", null);
      } else {
        this._removeStyleFile('dartTheme.css', 'css');
      }

      //Check if LaunchpadTheme
      if (this.appConfig.theme.name === "LaunchpadTheme") {
        //Load appropriate CSS for dart theme
        utils.loadStyleLink('launchpadOverrideCSS', this.folderUrl + "css/launchpadTheme.css", null);
      } else {
        this._removeStyleFile('launchpadTheme.css', 'css');
      }
    }
  });
  return cls;
});