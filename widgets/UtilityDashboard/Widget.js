///////////////////////////////////////////////////////////////////////////
// Copyright © 2016 Robert Scheitlin. All Rights Reserved.
///////////////////////////////////////////////////////////////////////////

define([
  'dojo/_base/declare',
  'dojo/_base/lang',
  'jimu/BaseWidget',
  'jimu/WidgetManager',
  'dojo/request/xhr'
],
  function (
    declare,
    lang,
    BaseWidget,
    WidgetManager,
    xhr) {
    var clazz = declare([BaseWidget], {

      name: 'UrlButton',
      baseClass: 'widget-urlbutton',
      isOpening: false,

      onOpen: function () {
        return xhr("http://gisstg.moci.gov.qa/geoportal/sharing/rest/content/items/7cf8c386881c4eceb0b0643b6c17b13e?token="+sessionStorage.getItem('token')+"&f=json", {
          handleAs:'json',
          headers: {
            "X-Requested-With": null
          }
        }).then(lang.hitch(this, (res) => {
          if(res.error && res.error.code){
            //request manifest from AGOL item, and there is an error
            //error code may be: 400, 403
            return def.reject(res.error);
          }
          this.isOpening = true;
                //RJS ADD
                var ll;
                if (this.config.addCenterParameter) {
                  ll = this.map.extent.getCenter().getLatitude() + "," + this.map.extent.getCenter().getLongitude();
                }
                //RJS End Add
                //RJS Edit
                if (ll) {
  
                  window.open(this.config.LinkUrl + "?ll=" + ll, "_blank");
                } else {
                  window.open(this.config.LinkUrl, "_blank");
                }
        }));
      },
    });
    return clazz;
  });
