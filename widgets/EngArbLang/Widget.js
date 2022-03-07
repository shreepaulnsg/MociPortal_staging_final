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
define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function (declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // DemoWidget code goes here

      //please note that this property is be set by the framework when widget is loaded.
      //templateString: template,

      baseClass: 'jimu-widget-demo',

      postCreate: function () {
        this.inherited(arguments);
        console.log('postCreate');
      },

      startup: function () {
        this.inherited(arguments);
        this.mapIdNode.innerHTML = 'map id:' + this.map.id;
        console.log('startup');

        setInterval(function () {
          $("[alt='Arabic']").addClass("EngArbLang1");
          var img = $(".EngArbLang1").attr("src", "/MociPortal/widgets/EngArbLang/images/EN.png?wab_dv=2.20");

          $(".EngArbLang1").closest("div").mouseleave(function () {

            var img = $(".EngArbLang1").attr("src", "/MociPortal/widgets/EngArbLang/images/EN.png?wab_dv=2.20");

          });
          $(".EngArbLang1").closest("div").mouseover(function () {
            setInterval(function () {
              $("[alt='Arabic']").addClass("EngArbLang1");
            }, 1000);
            var img = $(".EngArbLang1").attr("src", "/MociPortal/widgets/EngArbLang/images/EN1.png?wab_dv=2.20");

          });
        }, 1000);
        //alert(window.location.href);
        var pageUrl = window.location.href;
        if (pageUrl.includes("?locale=ar")) {
          
          var pageUrl_EN = pageUrl.split("?locale=ar");
          window.location.replace(pageUrl_EN[0]);
          var img = $(".EngArbLang1").attr("src", "/MociPortal/widgets/EngArbLang/images/EN.png?wab_dv=2.20");
        }
        else {
          var loc =window.location.href;
          loc = loc.replace("#","");
          //alert(loc)
          window.location.replace(loc + "?locale=ar");
          var img = $(".EngArbLang1").attr("src", "/MociPortal/widgets/EngArbLang/images/EN.png?wab_dv=2.20");

        }


        // $("[alt='Arabic']").addClass("EngArbLang");

        // //var img = $(".EngArbLang").attr("src", "/MociPortal/widgets/EngArbLang/images/EN1.png?wab_dv=2.20");
        // $(".EngArbLang").closest("div").mouseleave(function () {

        //   var img = $(".EngArbLang").attr("src", "/MociPortal/widgets/EngArbLang/images/EN1.png?wab_dv=2.20");

        // });
        // $(".EngArbLang").closest("div").mouseover(function () {

        //   var img = $(".EngArbLang").attr("src", "/MociPortal/widgets/EngArbLang/images/EN.png?wab_dv=2.20");

        // });
      },

      onOpen: function () {
        if (!utils.isInConfigOrPreviewWindow()) {
          var isFirstKey = this._getCookieKey();
          var isfirst = cookie(isFirstKey);
          if (esriLang.isDefined(isfirst) && isfirst.toString() === 'false') {
            this.close();
          }
        }
        // Just focus on first node (content DOM).
        utils.focusFirstFocusNode(this.domNode);

        this._eventShow();
      },

      onClose: function () {
        console.log('onClose');
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