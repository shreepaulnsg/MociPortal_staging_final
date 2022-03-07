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
    name: 'Zoomin',
    label: 'Zoomin',
    baseClass: 'jimu-widget-Zoomin',
    
    startup: function() {
      this.inherited(arguments);
      var pageUrl = window.location.href;
      if (pageUrl.includes("?locale=ar")) {        
        var pnode = domConstruct.toDom("<div title='تكبير المدي'  class='jimu-widget-onscreen-icon ZoomButton_ar'></div>");
        }else{
      var pnode = domConstruct.toDom("<div title='Zoom In'  class='jimu-widget-onscreen-icon ZoomButton_en'></div>");
        }
      var node = domConstruct.toDom("<img src='widgets/Zoomin/images/icon.png' class='_zoomin' ></img>");
      html.place(node, pnode);
      html.place(pnode, this.domNode);
      var navToolbar = new Navigation(this.map);
      on(pnode, 'click', function(evt){
        if (domClass.contains(pnode, 'jimu-state-selected')){
          domClass.remove(pnode, "jimu-state-selected");
          navToolbar.deactivate()
        }else{
          domClass.remove(pnode, "jimu-state-selected");
          navToolbar.deactivate()
          domClass.add(pnode, "jimu-state-selected");
          navToolbar.activate(Navigation.ZOOM_IN);
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