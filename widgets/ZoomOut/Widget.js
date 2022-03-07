/*global define, dojo, dijit, require, esri, console, setTimeout*/
define(['dojo/_base/declare',
  'jimu/BaseWidget',
  'dojo/_base/html',
  'dojo/on',
  'dojo/dom-construct',
  'dojo/dom-class',
  'esri/toolbars/navigation'
],
function(declare, BaseWidget, html, on, domConstruct, domClass, Navigation) {
  var clazz = declare([BaseWidget], {
    name: 'ZoomOut',
    label: 'Zoom Out',
    baseClass: 'jimu-widget-ZoomOut',
    
    startup: function() {
      this.inherited(arguments);
      var pageUrl = window.location.href;
      if (pageUrl.includes("?locale=ar")) {        
      var pnode = domConstruct.toDom("<div title='تصغير المدي' class='jimu-widget-onscreen-icon ZoomButton_ar'></div>");
      }else{
        var pnode = domConstruct.toDom("<div title='Zoom Out' class='jimu-widget-onscreen-icon ZoomButton_en'></div>");
      }
      var node = domConstruct.toDom("<img src='widgets/ZoomOut/images/icon.png' class='_zoomout'></img>");
      html.place(node, pnode);
      html.place(pnode, this.domNode);
      var navToolbar = new Navigation(this.map);
      on(pnode, 'click', function(evt){
        //map.setMapCursor("url(widgets/ZoomOut/images/icon.png),auto")
        if (domClass.contains(pnode, 'jimu-state-selected')){
          domClass.remove(pnode, "jimu-state-selected");
          navToolbar.deactivate()
        }else{
          domClass.add(pnode, "jimu-state-selected");
          navToolbar.activate(Navigation.ZOOM_OUT);
        }
        console.info('button clicked');
      });
    }
  });

  clazz.hasStyle = false;
  clazz.hasUIFile = false;
  clazz.hasLocale = false;
  clazz.hasConfig = false;
  clazz.inPanel = false;
  return clazz;
});