//>>built
define("dgrid1/extensions/CompoundColumns",["dojo/_base/lang","dojo/_base/declare","dojo/sniff","dojo/query","../util/misc"],function(r,w,x,t,y){return w(null,{configStructure:function(){function a(u,h,z,g){var n=0,A=function(){},k,p;y.each(u,function(d,B){"string"===typeof d&&(d={label:d});u instanceof Array||d.field||(d.field=B);p=(k=d.children)&&!1!==d.showChildHeaders;d.parentColumn=g;k?null==d.id?d.id=(g&&g.id||h-1)+"-"+f.length:g&&g.id&&(d.id=g.id+"-"+d.id):(e.push(d),f.push(r.delegate(d,{renderHeaderCell:A})),
n++);p||(d=r.delegate(d,{rowSpan:-h}));k&&(n+=d.colSpan=a(k,h+1,p,d));z&&(c[h]||(c[h]=[])).push(d)},this);return n}var b=this.subRows&&this.subRows[0]||this.columns,c=[[]],f=c[0],e=[];c[0].className="dgrid-spacer-row";a(b,1,!0);b=c.length;var l,m;for(l=0;l<b;l++){var v=c[l];for(m=0;m<v.length;m++){var q=v[m];1>q.rowSpan&&(q.rowSpan+=b)}}e=[e];e.headerRows=c;this.subRows=e;this.inherited(arguments)},renderHeader:function(){var a,b=this.subRows[0],c=this.subRows.headerRows[0];this.inherited(arguments);
for(a=b.length;a--;)b[a].headerNode=c[a].headerNode},_findSortArrowParent:function(){var a=this.inherited(arguments),b=t(".dgrid-spacer-row",this.headerNode)[0];if(a&&b.contains(a))return a=a.columnId,a=t(".dgrid-column-"+a,this.headerNode),a[a.length-1]},_configColumn:function(a,b,c){var f=a.parentColumn,e=a.id;f&&(e=0===e.indexOf(c)?e.substring(c.length):e,c=f.id+"-",e=a.id=c+e);this.inherited(arguments,[a,b,c])},cell:function(a,b){if("object"!==typeof b){var c=this.column(b);c&&(b=c.id)}return this.inherited(arguments,
[a,b])},column:function(a){var b=this.inherited(arguments);if(null==b&&"object"!==typeof a){var c="-"+a,f=c.length,e;for(e in this.columns)if(-1!==e.indexOf(c,e.length-f))return this.columns[e]}return b},_updateCompoundHiddenStates:function(a,b){a=this.columns[a];var c;if(!a||a.hidden!==b)for(;a&&a.parentColumn;){a=a.parentColumn;if(c=a.colSpan+=b?-1:1)a.headerNode.colSpan=c;1!==c||b?!c&&b&&this._hideColumn(a.id):this._showColumn(a.id)}},_hideColumn:function(a){var b=this;this._updateCompoundHiddenStates(a,
!0);this.inherited(arguments);x("ff")&&(this.headerNode.style.display="none",setTimeout(function(){b.headerNode.style.display="";b.resize()},0))},_showColumn:function(a){this._updateCompoundHiddenStates(a,!1);this.inherited(arguments)},_getResizedColumnWidths:function(){var a=0,b=this.columns,c;for(c in b)a+=b[c].headerNode.offsetWidth;return{totalWidth:a,lastColId:this.subRows[0][this.subRows[0].length-1].id}}})});