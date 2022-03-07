// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/form/tools/GeoExtentDialog","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/aspect dojo/dom-class dojo/dom-construct dojo/has dijit/_WidgetBase dojo/i18n!../../nls/i18nBase dijit/Dialog ./GeoExtent ../../../../kernel".split(" "),function(d,b,q,f,g,r,h,k,l,m,n,p){d=d([k],{dialog:null,title:l.geoExtent.title,gxeDocument:null,xmin:null,ymin:null,xmax:null,ymax:null,postCreate:function(){this.inherited(arguments)},onChange:function(a){},show:function(){var a=null,
c=new n({dialogBroker:this,gxeDocument:this.gxeDocument,xmin:this.xmin,ymin:this.ymin,xmax:this.xmax,ymax:this.ymax,onOkClick:b.hitch(this,function(e){if(e)this.onChange(e);a&&a.hide()}),onCancelClick:b.hitch(this,function(){a&&a.hide()})});a=this.dialog=new m({"class":"gxeDialog gxePopupDialog",title:this.title,content:c,autofocus:!1});this.isLeftToRight()||g.add(a.domNode,"gxeRtl");this.own(f.after(a,"_position",function(){c._map&&c._map.reposition()},!0));this.own(a.on("hide",b.hitch(this,function(){setTimeout(b.hitch(this,
function(){c.destroyRecursive(!1);a.destroyRecursive(!1);this.destroyRecursive(!1)}),300)})));a.show().then(function(){c.initialize()})}});h("extend-esri")&&b.setObject("dijit.metadata.form.tools.GeoExtentDialog",d,p);return d});