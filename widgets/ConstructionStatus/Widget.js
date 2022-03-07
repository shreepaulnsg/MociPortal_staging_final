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
function(declare, BaseWidget) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {
    // ConstructionStatusWidget code goes here

    //please note that this property is be set by the framework when widget is loaded.
    //templateString: template,

    baseClass: 'jimu-widget-ConstructionStatus',
    demoFromHTMLbtn() {
      var pdf = new jsPDF('p', 'mm', 'a4');
      // source can be HTML-formatted string, or a reference
      // to an actual DOM element from which the text will be scraped.
      //source = '<div><table><tr><td><img src=images/PageLogo.png width=10% height=50></img></td></tr></table>Total No.of Plots & Area<img src=images/map.png width=20% height=200></img><table class=tableChange><tr><td><h1>Allocated and Remaining Plots</h1></td></tr></table><table><tr><th>Area</th><th>Industry Category</th><th>Allocated Plots</th><th>Area</th><th>Plots to be Allocated</th><th>Area</th><th>Plots to be Removed</th><th>Area</th><th>Reserved Plots</th><th>Area</th><th>Total No.ofPlots</th><th>Total Plot Area (m2)</th></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr></table></div>' //$('#content')[0];
      source = '<div><img src=images/ConstructionStatus.jpg width=150 height=90></img><img src=images/construction.png width=150 height=80></img></div>' //$('#content')[0];
      // we support special element handlers. Register them with jQuery-style 
      // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
      // There is no support for any other type of selectors 
      // (class, of compound) at this time.
      specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function (element, renderer) {
          // true = "handled elsewhere, bypass text extraction"
          return true
        }
      };
      margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
      };
      // all coords and widths are in jsPDF instance's declared units
      // 'inches' in this case
      pdf.fromHTML(
        source, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, { // y coord
        'width': margins.width, // max width of content on PDF
        'elementHandlers': specialElementHandlers
      },

        function (dispose) {
          // dispose: object with X, Y of the last line add to the PDF 
          //          this allow the insertion of new lines after html
          pdf.save('Test.pdf');
        }, margins
      );
    },
    postCreate: function() {
      this.inherited(arguments);
      console.log('postCreate');
    },

    startup: function() {
      this.inherited(arguments);
      this.mapIdNode.innerHTML = 'map id:' + this.map.id;
      console.log('startup');
    },

    onOpen: function(){
      console.log('onOpen');
    },

    onClose: function(){
      console.log('onClose');
    },

    onMinimize: function(){
      console.log('onMinimize');
    },

    onMaximize: function(){
      console.log('onMaximize');
    },

    onSignIn: function(credential){
      /* jshint unused:false*/
      console.log('onSignIn');
    },

    onSignOut: function(){
      console.log('onSignOut');
    },

    showVertexCount: function(count){
      this.vertexCount.innerHTML = 'The vertex count is: ' + count;
    }
  });
});