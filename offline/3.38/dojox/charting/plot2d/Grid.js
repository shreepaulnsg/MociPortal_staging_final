//>>built
define("dojox/charting/plot2d/Grid","dojo/_base/lang dojo/_base/declare dojo/_base/array dojo/sniff ./CartesianBase ./common dojox/lang/utils dojox/gfx/fx".split(" "),function(m,t,p,k,u,v,q,w){var r=function(a,c){return a.value-c.value};return t("dojox.charting.plot2d.Grid",u,{defaultParams:{hMajorLines:!0,hMinorLines:!1,vMajorLines:!0,vMinorLines:!1,hStripes:!1,vStripes:!1,animate:null,enableCache:!1,renderOnAxis:!0},optionalParams:{majorHLine:{},minorHLine:{},majorVLine:{},minorVLine:{},hFill:{},
vFill:{},hAlternateFill:{},vAlternateFill:{}},constructor:function(a,c){this.opt=m.clone(this.defaultParams);q.updateWithObject(this.opt,c);q.updateWithPattern(this.opt,c,this.optionalParams);this.animate=this.opt.animate;this.opt.enableCache&&(this._lineFreePool=[],this._lineUsePool=[],this._rectFreePool=[],this._rectUsePool=[])},addSeries:function(a){return this},getSeriesStats:function(){return m.delegate(v.defaultStats)},cleanGroup:function(){this.inherited(arguments);this.opt.enableCache&&(this._lineFreePool=
this._lineFreePool.concat(this._lineUsePool),this._lineUsePool=[],this._rectFreePool=this._rectFreePool.concat(this._rectUsePool),this._rectUsePool=[])},createLine:function(a,c){if(this.opt.enableCache&&0<this._lineFreePool.length){var d=this._lineFreePool.pop();d.setShape(c);a.add(d)}else d=a.createLine(c);this.opt.enableCache&&this._lineUsePool.push(d);return d},createRect:function(a,c){if(this.opt.enableCache&&0<this._rectFreePool.length){var d=this._rectFreePool.pop();d.setShape(c);a.add(d)}else d=
a.createRect(c);this.opt.enableCache&&this._rectUsePool.push(d);return d},render:function(a,c){if(this.zoom)return this.performZoom(a,c);this.dirty=this.isDirty();if(!this.dirty)return this;this.cleanGroup();var d=this.getGroup(),b=this.chart.theme;(k("ios")&&6>k("ios")||k("android")||k("safari")&&!k("ios"))&&d.createRect({x:c.l,y:c.t,width:Math.max(0,a.width-c.l-c.r),height:Math.max(0,a.height-c.t-c.b)});if(this._vAxis){var e=this._vAxis.getTicks();var g=this._vAxis.getScaler();if(null!=e&&null!=
g){var h=g.scaler.getTransformerFromModel(g);this.opt.hStripes&&this._renderHRect(e,b.grid,a,c,g,h);this.opt.hMinorLines&&(d=this.opt.minorHLine||b.grid&&b.grid.minorLine||b.axis.minorTick,this._renderHLines(e.minor,d,a,c,g,h));this.opt.hMajorLines&&(d=this.opt.majorHLine||b.grid&&b.grid.majorLine||b.axis.majorTick,this._renderHLines(e.major,d,a,c,g,h))}}this._hAxis&&(e=this._hAxis.getTicks(),g=this._hAxis.getScaler(),null!=e&&null!=g&&(h=g.scaler.getTransformerFromModel(g),this.opt.vStripes&&this._renderVRect(e,
b.grid,a,c,g,h),e&&this.opt.vMinorLines&&(d=this.opt.minorVLine||b.grid&&b.grid.minorLine||b.axis.minorTick,this._renderVLines(e.minor,d,a,c,g,h)),e&&this.opt.vMajorLines&&(d=this.opt.majorVLine||b.grid&&b.grid.majorLine||b.axis.majorTick,this._renderVLines(e.major,d,a,c,g,h))));this.dirty=!1;return this},_renderHLines:function(a,c,d,b,e,g){var h=this.getGroup();p.forEach(a,function(f){if(this.opt.renderOnAxis||f.value!=(this._vAxis.opt.leftBottom?e.bounds.from:e.bounds.to))f=d.height-b.b-g(f.value),
f=this.createLine(h,{x1:b.l,y1:f,x2:d.width-b.r,y2:f}).setStroke(c),this.animate&&this._animateGrid(f,"h",b.l,b.r+b.l-d.width)},this)},_renderVLines:function(a,c,d,b,e,g){var h=this.getGroup();p.forEach(a,function(f){if(this.opt.renderOnAxis||f.value!=(this._hAxis.opt.leftBottom?e.bounds.from:e.bounds.to))f=b.l+g(f.value),f=this.createLine(h,{x1:f,y1:b.t,x2:f,y2:d.height-b.b}).setStroke(c),this.animate&&this._animateGrid(f,"v",d.height-b.b,d.height-b.b-b.t)},this)},_renderHRect:function(a,c,d,b,e,
g){a=a.major.concat(a.minor);a.sort(r);a[0].value>e.bounds.from&&a.splice(0,0,{value:e.bounds.from});a[a.length-1].value<e.bounds.to&&a.push({value:e.bounds.to});e=this.getGroup();for(var h=0;h<a.length-1;h++){var f=a[h];var l=d.height-b.b-g(f.value);var n=d.height-b.b-g(a[h+1].value);if(f=0==h%2?this.opt.hAlternateFill||c&&c.alternateFill:this.opt.hFill||c&&c.fill)f=this.createRect(e,{x:b.l,y:l,width:d.width-b.r,height:l-n}).setFill(f),this.animate&&this._animateGrid(f,"h",b.l,b.r+b.l-d.width)}},
_renderVRect:function(a,c,d,b,e,g){a=a.major.concat(a.minor);a.sort(r);a[0].value>e.bounds.from&&a.splice(0,0,{value:e.bounds.from});a[a.length-1].value<e.bounds.to&&a.push({value:e.bounds.to});e=this.getGroup();for(var h=0;h<a.length-1;h++){var f=a[h];var l=b.l+g(f.value);var n=b.l+g(a[h+1].value);if(f=0==h%2?this.opt.vAlternateFill||c&&c.alternateFill:this.opt.vFill||c&&c.fill)f=this.createRect(e,{x:l,y:b.t,width:n-l,height:d.width-b.r}).setFill(f),this.animate&&this._animateGrid(f,"v",d.height-
b.b,d.height-b.b-b.t)}},_animateGrid:function(a,c,d,b){w.animateTransform(m.delegate({shape:a,duration:1200,transform:[{name:"translate",start:"h"==c?[d,0]:[0,d],end:[0,0]},{name:"scale",start:"h"==c?[1/b,1]:[1,1/b],end:[1,1]},{name:"original"}]},this.animate)).play()}})});