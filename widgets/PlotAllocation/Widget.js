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
      // PlotAllocationWidget code goes here

      //please note that this property is be set by the framework when widget is loaded.
      //templateString: template,

      baseClass: 'jimu-widget-PlotAllocation',
      report: Number,
      drpchange() {
        report = this.selectedReport.value;
      },
      demoFromHTMLbtn() {
        var pdf = new jsPDF('p', 'mm', 'a4');
        // source can be HTML-formatted string, or a reference
        // to an actual DOM element from which the text will be scraped.
        //source = '<div><table><tr><td><img src=images/PageLogo.png width=10% height=50></img></td></tr></table>Total No.of Plots & Area<img src=images/map.png width=20% height=200></img><table class=tableChange><tr><td><h1>Allocated and Remaining Plots</h1></td></tr></table><table><tr><th>Area</th><th>Industry Category</th><th>Allocated Plots</th><th>Area</th><th>Plots to be Allocated</th><th>Area</th><th>Plots to be Removed</th><th>Area</th><th>Reserved Plots</th><th>Area</th><th>Total No.ofPlots</th><th>Total Plot Area (m2)</th></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr></table></div>' //$('#content')[0];
        //source = '<div><img src="images/PageLogo.png" width=20 height=15 align="left" style="margin-right:30px;"/><h1>Plot Allocation Status</h1><img src=images/PlotAllocationStatus.png width=140 height=100></img><img src=images/TotalNoOfPlotsndArea.jpg></img></div>' //$('#content')[0];
        source = '<div><img src=images/PlotAllocationStatus.png width=140 height=100></img><img src=images/TotalNoOfPlotsndArea.jpg width=140 height=100></img></div>' //$('#content')[0];
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
      nextbtn() {
        // var pdfWindow = window.open('about:blank',  "window",'resizable=1,scrollbars=0,width=800,height=600');

        //     pdfWindow.document.write('<html><head><title>Window Title</title></head>');

        //     pdfWindow.document.write('<body><iframe src="" id="ifrm" name="ifrm" width="100%" height="100%"><div class="container"><div class="row-fluid"><table border=1><tr><th>Ratings</th><th>Text</th></tr><tr><td>1</td><td>asd</td></tr><tr><td>2</td><td>dfdsf</td></tr></table></div></div></iframe>');

        //     pdfWindow.document.write('</body></html>');

        //     pdfWindow.document.close();
        var newtab = window.open('about:blank', "window", "resizable=1,scrollbars=0,width=1350,height=750");
        newtab.document.write('<html><head><title>Window Title</title></head>');
        if (report == 1) {
          // newtab.document.write("<body><div id=dvContents style=padding: 5px; width:305px><div class=jimu-panel-title jimu-main-background title-normal></div><table cellspacing=0 rules=all border=0><tr border=0><td><img src='images/PageLogo.png' height=80></img></td><th colspan=11><h1 style=text-align: center; margin: 0px;>Total No.of Plots & Area</h1></th></tr><tr><td colspan=12><img src='images/map.png' width=1300 height=350)></img></td></tr><tr><th colspan=12><h1 style=text-align: center; margin: 0px;>(Allocated and Remaining Plots)</h1></th></tr><tr><th>Area</th><th>Industry Category</th><th>Allocated Plots</th><th>Area</th><th>Plots to be Allocated</th><th>Area</th><th>Plots to be Removed</th><th>Area</th><th>Reserved Plots</th><th>Area</th><th>Total No.ofPlots</th><th>Total Plot Area (m2)</th></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr></table></div><br/><input type=button  value=Print>");
          newtab.document.write("<html><head><link rel=stylesheet type=text/css  href=jimu.js/css/jimu-ie.css /></head><body><table class=tableChange><tr><td border:0px;text-align:center;margin: 0px 0px;padding: 0px;><img src=images/PageLogo.png height=80></img></td></tr><tr><td><h1>Total No.of Plots & Area</h1></td></tr></table><img src=images/map.png width=100% height=350></img><table class=tableChange><tr><td><h1>Allocated and Remaining Plots</h1></td></tr></table><table><tr><th>Area</th><th>Industry Category</th><th>Allocated Plots</th><th>Area</th><th>Plots to be Allocated</th><th>Area</th><th>Plots to be Removed</th><th>Area</th><th>Reserved Plots</th><th>Area</th><th>Total No.ofPlots</th><th>Total Plot Area (m2)</th></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr></table><br/><input type=button  value=Print></body></html>");
        } else if (report == 2) {
          newtab.document.write("<body><div id=dvContents style=border: 1px dotted black; padding: 5px; width:305px> <table cellspacing=0 rules=all border=1><tr><th><strong>PIN No</strong></th><th><strong>Plot No</strong></th><th><strong>Factory Name</strong></th><th><strong>Industry Category</strong></th><th><strong>Construction Status</strong></th><th><strong>Due Date</strong></th><th><strong>Delay in Days</strong></th></tr><tr><td>81040049</td><td>1011</td><td>Structure constuction work</td><td>32</td><td>Structure constuction work</td><td>20-Apr</td><td>84</td></tr><tr><td>81040066</td><td>2016</td><td>On-site finishing works</td><td>33</td><td>On-site finishing works</td><td>20-Mar</td><td>115</td></tr><tr><td>81040049</td><td>1011</td><td>Structure constuction work</td><td>32</td><td>Structure constuction work</td><td>20-Apr</td><td>84</td></tr><tr><td>81040049</td><td>1011</td><td>Structure constuction work</td><td>32</td><td>Structure constuction work</td><td>20-Apr</td><td>84</td></tr><tr><td>81040049</td><td>1011</td><td>Structure constuction work</td><td>32</td><td>Structure constuction work</td><td>20-Apr</td><td>84</td></tr><tr><td>81040049</td><td>1011</td><td>Structure constuction work</td><td>32</td><td>Structure constuction work</td><td>20-Apr</td><td>84</td></tr><tr><td>81040049</td><td>1011</td><td>Structure constuction work</td><td>32</td><td>Structure constuction work</td><td>20-Apr</td><td>84</td></tr><tr><td>810400834</td><td>5029</td><td>Getting ready for operating the factory</td><td>34</td><td>Getting ready for operating the factory</td><td>1-Jul</td><td>12</td></tr></table></div><br/><input type=button  value=Print>");
        } else if (report == 3) {
          newtab.document.write("<body><div id=dvContents style=border: 1px dotted black; padding: 5px; width:305px><table cellspacing=0 rules=all border=1><tr><th><strong>PIN No</strong></th><th><strong>Plot No</strong></th><th><strong>Factory Name</strong></th><th><strong>Industry Category</strong></th><th><strong>Payment Due Date</strong></th><th><strong>Delay in Days</strong></th></tr><tr><td>81040049</td><td>1011</td><td>Structure constuction work</td><td>32</td><td>20-Apr</td><td>84</td></tr><tr><td>81040066</td><td>2016</td><td>On-site finishing works</td><td>33</td><td>20-Mar</td><td>115</td></tr><tr><td>81040049</td><td>1011</td><td>Structure constuction work</td><td>32</td><td>20-Apr</td><td>84</td></tr><tr><td>81040049</td><td>1011</td><td>Structure constuction work</td><td>32</td><td>20-Apr</td><td>84</td></tr><tr><td>81040049</td><td>1011</td><td>Structure constuction work</td><td>32</td><td>20-Apr</td><td>84</td></tr><tr><td>81040049</td><td>1011</td><td>Structure constuction work</td><td>32</td><td>20-Apr</td><td>84</td></tr><tr><td>81040049</td><td>1011</td><td>Structure constuction work</td><td>32</td><td>20-Apr</td><td>84</td></tr><tr><td>810400834</td><td>5029</td><td>Getting ready for operating the factory</td><td>34</td><td>1-Jul</td><td>12</td></tr></table></div><br/><input type=button  value=Print>");
        } else if (report == 4) {
          // statments
        } else {
          // statments
          alert("Please select Report");
        }
        newtab.document.write('</body></html>');
        newtab.document.close();
      },

      // nextbtn: function () {
      //   var newtab = window.open("", "anotherWindow", "width=1350,height=750");
      //   newtab.document.write("<table border=1><tr><th colspan=12><h1 style=text-align: center; margin: 0px;>Total No.of Plots & Area</h1></th></tr><tr><th colspan=12><h1 style=text-align: center; margin: 0px;>(Allocated and Remaining Plots)</h1></th></tr><tr><th>Area</th><th>Industry Category</th><th>Allocated Plots</th><th>Area</th><th>Plots to be Allocated</th><th>Area</th><th>Plots to be Removed</th><th>Area</th><th>Reserved Plots</th><th>Area</th><th>Total No.ofPlots</th><th>Total Plot Area (m2)</th></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr><tr><td>Industrial Area</td><td>FOOD, BEVERAGES AND TOBACOO</td><td>103</td><td>591.539.00</td><td>4</td><td>13,510.00</td><td>8</td><td>39,905.00</td><td>1</td><td>7,193.00</td><td>115</td><td>644,954.00</td></tr></table>");
      // },

      // printTable: function () {
      //   var printWindow = window.open('', '', 'height=200,width=400');
      //   printWindow.document.write('<html><head><title>Table Contents</title>');

      //   //Print the Table CSS.
      //   var table_style = document.getElementById("table_style").innerHTML;
      //   printWindow.document.write('<style type = "text/css">');
      //   printWindow.document.write(table_style);
      //   printWindow.document.write('</style>');
      //   printWindow.document.write('</head>');

      //   //Print the DIV contents i.e. the HTML Table.
      //   printWindow.document.write('<body>');
      //   var divContents = document.getElementById("dvContents").innerHTML;
      //   printWindow.document.write(divContents);
      //   printWindow.document.write('</body>');

      //   printWindow.document.write('</html>');
      //   printWindow.document.close();
      //   printWindow.print();
      // },

      postCreate: function () {
        this.inherited(arguments);
        console.log('postCreate');
      },

      startup: function () {
        this.inherited(arguments);
        this.mapIdNode.innerHTML = 'map id:' + this.map.id;
        console.log('startup');
      },

      onOpen: function () {
        console.log('onOpen');
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