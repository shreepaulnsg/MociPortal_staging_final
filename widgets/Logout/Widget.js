

define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'jimu/BaseWidget',
    'jimu/WidgetManager'
  ],
  function(
    declare,
    lang,
    BaseWidget,
    WidgetManager) {
    var clazz = declare([BaseWidget], {

      name: 'UrlButton',
      baseClass: 'widget-urlbutton',
      isOpening: false,

      onOpen: function(){
        //  if(!this.isOpening){

          sessionStorage.setItem("UserType", "Public");

          window.location.reload();

          // var loc =window.location.href;
          // var pageUrl_EN = loc.split("?config");
          // //window.location.replace(pageUrl_EN[0]);
          // //var loc =window.location.href;
          // window.location.replace(pageUrl_EN[0] + "?config=configPublic.json");
        //  }
      }
//           this.isOpening = true;
// //RJS ADD
//           var ll;
//           if(this.config.addCenterParameter){
//             ll = this.map.extent.getCenter().getLatitude() + "," + this.map.extent.getCenter().getLongitude();
//           }
// //RJS End Add
// //RJS Edit
//           if(ll){
//             window.open(this.config.LinkUrl + "?ll=" + ll, "_blank");
//           }else{
//             window.open(this.config.LinkUrl, "_blank");
//           }
// //RJS End Edit
//           setTimeout(lang.hitch(this, function(){
//             this.isOpening = false;
//             WidgetManager.getInstance().closeWidget(this);
//           }), 300);
//         }
//       }
   });
    return clazz;
  });
