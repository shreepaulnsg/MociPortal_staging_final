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

define(['dojo/_base/declare',
  'dijit/_WidgetBase',
  "libs/qrcode"
],
function(declare, _WidgetBase) {
  return declare([_WidgetBase], {
    /* global QRCode*/
    // summary:
    //    the params format:
    //       {
    //         text: "content",
    //         width:
    //         height:
    //         colorDark:    default value #231F20
    //         colorLight:   default value "#ffffff"
    //         correctLevel: default value QRCode.CorrectLevel.H
    //       }

    'baseClass': 'jimu-qrcode',
    declaredClass: 'jimu.dijit.QRCode',

    postCreate: function(){
      new QRCode(this.domNode, {
        text: this.text,
        width: this.width || 128,
        height: this.height || 128,
        colorDark: this.colorDark || " #231F20",
        colorLight: this.colorLight || "#ffffff",
        correctLevel: this.correctLevel || QRCode.CorrectLevel.L
      });
    }

  });
});