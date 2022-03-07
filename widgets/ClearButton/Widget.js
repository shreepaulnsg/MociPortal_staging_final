/*global define, dojo, dijit, require, esri, console, setTimeout*/
define(['dojo/_base/declare',
  'jimu/BaseWidget',
  'dojo/_base/html',
  'dojo/on',
  'dojo/dom-construct',
  'dojo/dom-class'
],
function(declare, BaseWidget, html, on, domConstruct, domClass) {
  var clazz = declare([BaseWidget], {
    name: 'ClearButton',
    label: 'ClearButton',
    baseClass: 'jimu-widget-ClearButton',
    
    startup: function() {
      this.inherited(arguments);
      var pageUrl = window.location.href;
      
      var curMap = this.map;
      $(".ClearButton").click(function () {
        //alert("button clicked img") ;
        setTimeout(() => {
          curMap.graphics.clear();
          $(".ClearButton").closest("div").removeClass("jimu-state-selected")
        }, 500);
       

      });
      $(".ClearButton").click();

    }
  });

  clazz.hasStyle = false;
  clazz.hasUIFile = false;
  clazz.hasLocale = false;
  clazz.hasConfig = false;
  clazz.inPanel = false;
  return clazz;
});