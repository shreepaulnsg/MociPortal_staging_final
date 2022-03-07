// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/MaterialManager","require exports ./enums ./MaterialInfoUtils ./shaders/fillShaderSnippets ./shaders/iconShaderSnippets ./shaders/labelShaderSnippets ./shaders/lineShaderSnippets ./shaders/textShaderSnippets ../../../webgl/ShaderVariations".split(" "),function(r,t,f,k,l,m,n,p,q,g){return function(){function h(){this._programRep=new Map;this.isInitialize=!1}h.prototype.dispose=function(){this._fillShaderVariations&&(this._fillShaderVariations.dispose(),
this._fillShaderVariations=null);this._lineShaderVariations&&(this._lineShaderVariations.dispose(),this._lineShaderVariations=null);this._iconShaderVariations&&(this._iconShaderVariations.dispose(),this._iconShaderVariations=null);this._textShaderVariations&&(this._textShaderVariations.dispose(),this._textShaderVariations=null);0!==this._programRep.size&&(this._programRep.forEach(function(a){return a.dispose()}),this._programRep.clear())};h.prototype.initialize=function(a){if(!this.isInitialize){var b=
new g("label",["labelVS","labelFS"],[],n,a);b.addDefine("ID","ID",[!0,!0],"ID");b.addDefine("HIGHLIGHT","HIGHLIGHT",[!1,!1],"HIGHLIGHT");b.addDefine("SDF","SDF",[!1,!1],"SDF");b.addDefine("VV_SIZE_MIN_MAX_VALUE","VV_SIZE_MIN_MAX_VALUE",[!1,!1],"VV_SIZE_MIN_MAX_VALUE");b.addDefine("VV_SIZE_SCALE_STOPS","VV_SIZE_SCALE_STOPS",[!1,!1],"VV_SIZE_SCALE_STOPS");b.addDefine("VV_SIZE_FIELD_STOPS","VV_SIZE_FIELD_STOPS",[!1,!1],"VV_SIZE_FIELD_STOPS");b.addDefine("VV_SIZE_UNIT_VALUE","VV_SIZE_UNIT_VALUE",[!1,
!1],"VV_SIZE_UNIT_VALUE");b.addDefine("VV_COLOR","VV_COLOR",[!0,!1],"VV_COLOR");b.addDefine("VV_ROTATION","VV_ROTATION",[!1,!1],"VV_ROTATION");b.addDefine("VV_OPACITY","VV_OPACITY",[!0,!1],"VV_OPACITY");b.addDefine("VERTEX_VISIBILITY","VERTEX_VISIBILITY",[!1,!1],"VERTEX_VISIBILITY");b.addDefine("PATTERN","PATTERN",[!1,!1],"PATTERN");b.addDefine("HEATMAP","HEATMAP",[!1,!1],"HEATMAP");var d=new g("text",["textVS","textFS"],[],q,a);d.addDefine("ID","ID",[!0,!0],"ID");d.addDefine("HIGHLIGHT","HIGHLIGHT",
[!1,!1],"HIGHLIGHT");d.addDefine("SDF","SDF",[!1,!1],"SDF");d.addDefine("VV_SIZE_MIN_MAX_VALUE","VV_SIZE_MIN_MAX_VALUE",[!0,!1],"VV_SIZE_MIN_MAX_VALUE");d.addDefine("VV_SIZE_SCALE_STOPS","VV_SIZE_SCALE_STOPS",[!0,!1],"VV_SIZE_SCALE_STOPS");d.addDefine("VV_SIZE_FIELD_STOPS","VV_SIZE_FIELD_STOPS",[!0,!1],"VV_SIZE_FIELD_STOPS");d.addDefine("VV_SIZE_UNIT_VALUE","VV_SIZE_UNIT_VALUE",[!0,!1],"VV_SIZE_UNIT_VALUE");d.addDefine("VV_COLOR","VV_COLOR",[!0,!1],"VV_COLOR");d.addDefine("VV_ROTATION","VV_ROTATION",
[!0,!1],"VV_ROTATION");d.addDefine("VV_OPACITY","VV_OPACITY",[!0,!1],"VV_OPACITY");d.addDefine("VERTEX_VISIBILITY","VERTEX_VISIBILITY",[!1,!1],"VERTEX_VISIBILITY");d.addDefine("PATTERN","PATTERN",[!1,!1],"PATTERN");d.addDefine("HEATMAP","HEATMAP",[!1,!1],"HEATMAP");var c=new g("icon",["iconVS","iconFS"],[],m,a);c.addDefine("ID","ID",[!0,!0],"ID");c.addDefine("HIGHLIGHT","HIGHLIGHT",[!0,!0],"HIGHLIGHT");c.addDefine("SDF","SDF",[!0,!0],"SDF");c.addDefine("VV_SIZE_MIN_MAX_VALUE","VV_SIZE_MIN_MAX_VALUE",
[!0,!1],"VV_SIZE_MIN_MAX_VALUE");c.addDefine("VV_SIZE_SCALE_STOPS","VV_SIZE_SCALE_STOPS",[!0,!1],"VV_SIZE_SCALE_STOPS");c.addDefine("VV_SIZE_FIELD_STOPS","VV_SIZE_FIELD_STOPS",[!0,!1],"VV_SIZE_FIELD_STOPS");c.addDefine("VV_SIZE_UNIT_VALUE","VV_SIZE_UNIT_VALUE",[!0,!1],"VV_SIZE_UNIT_VALUE");c.addDefine("VV_COLOR","VV_COLOR",[!0,!1],"VV_COLOR");c.addDefine("VV_ROTATION","VV_ROTATION",[!0,!1],"VV_ROTATION");c.addDefine("VV_OPACITY","VV_OPACITY",[!0,!1],"VV_OPACITY");c.addDefine("VERTEX_VISIBILITY","VERTEX_VISIBILITY",
[!1,!1],"VERTEX_VISIBILITY");c.addDefine("PATTERN","PATTERN",[!0,!0],"PATTERN");c.addDefine("HEATMAP","HEATMAP",[!0,!0],"HEATMAP");var e=new g("fill",["fillVS","fillFS"],[],l,a);e.addDefine("ID","ID",[!0,!0],"ID");e.addDefine("HIGHLIGHT","HIGHLIGHT",[!0,!0],"HIGHLIGHT");e.addDefine("SDF","SDF",[!1,!1],"SDF");e.addDefine("VV_SIZE_MIN_MAX_VALUE","VV_SIZE_MIN_MAX_VALUE",[!1,!1],"VV_SIZE_MIN_MAX_VALUE");e.addDefine("VV_SIZE_SCALE_STOPS","VV_SIZE_SCALE_STOPS",[!1,!1],"VV_SIZE_SCALE_STOPS");e.addDefine("VV_SIZE_FIELD_STOPS",
"VV_SIZE_FIELD_STOPS",[!1,!1],"VV_SIZE_FIELD_STOPS");e.addDefine("VV_SIZE_UNIT_VALUE","VV_SIZE_UNIT_VALUE",[!1,!1],"VV_SIZE_UNIT_VALUE");e.addDefine("VV_COLOR","VV_COLOR",[!0,!1],"VV_COLOR");e.addDefine("VV_ROTATION","VV_ROTATION",[!1,!1],"VV_ROTATION");e.addDefine("VV_OPACITY","VV_OPACITY",[!0,!1],"VV_OPACITY");e.addDefine("VERTEX_VISIBILITY","VERTEX_VISIBILITY",[!1,!1],"VERTEX_VISIBILITY");e.addDefine("PATTERN","PATTERN",[!0,!0],"PATTERN");e.addDefine("HEATMAP","HEATMAP",[!1,!1],"HEATMAP");a=new g("line",
["lineVS","lineFS"],[],p,a);a.addDefine("ID","ID",[!0,!0],"ID");a.addDefine("HIGHLIGHT","HIGHLIGHT",[!0,!0],"HIGHLIGHT");a.addDefine("SDF","SDF",[!0,!0],"SDF");a.addDefine("VV_SIZE_MIN_MAX_VALUE","VV_SIZE_MIN_MAX_VALUE",[!0,!1],"VV_SIZE_MIN_MAX_VALUE");a.addDefine("VV_SIZE_SCALE_STOPS","VV_SIZE_SCALE_STOPS",[!0,!1],"VV_SIZE_SCALE_STOPS");a.addDefine("VV_SIZE_FIELD_STOPS","VV_SIZE_FIELD_STOPS",[!0,!1],"VV_SIZE_FIELD_STOPS");a.addDefine("VV_SIZE_UNIT_VALUE","VV_SIZE_UNIT_VALUE",[!0,!1],"VV_SIZE_UNIT_VALUE");
a.addDefine("VV_COLOR","VV_COLOR",[!0,!1],"VV_COLOR");a.addDefine("VV_ROTATION","VV_ROTATION",[!0,!1],"VV_ROTATION");a.addDefine("VV_OPACITY","VV_OPACITY",[!0,!1],"VV_OPACITY");a.addDefine("VERTEX_VISIBILITY","VERTEX_VISIBILITY",[!1,!1],"VERTEX_VISIBILITY");a.addDefine("PATTERN","PATTERN",[!0,!0],"PATTERN");a.addDefine("HEATMAP","HEATMAP",[!1,!1],"HEATMAP");this._labelShaderVariations=b;this._textShaderVariations=d;this._fillShaderVariations=e;this._iconShaderVariations=c;this._lineShaderVariations=
a;this.isInitialize=!0}};h.prototype.getProgram=function(a,b,d){a|=b===f.WGLDrawPhase.HITTEST?8:0;a|=b===f.WGLDrawPhase.HIGHLIGHT?16:0;if(this._programRep[a])return this._programRep[a];if(!(this._iconShaderVariations&&this._fillShaderVariations&&this._lineShaderVariations&&this._labelShaderVariations))return null;b=k.getMaterialVariations(a);switch(b.geometryType){case f.WGLGeometryType.MARKER:var c=this._iconShaderVariations.getProgram(b.variations,null,null,d);break;case f.WGLGeometryType.TEXT:c=
this._textShaderVariations.getProgram(b.variations,null,null,d);break;case f.WGLGeometryType.LABEL:c=this._labelShaderVariations.getProgram(b.variations,null,null,d);break;case f.WGLGeometryType.FILL:c=this._fillShaderVariations.getProgram(b.variations,null,null,d);break;case f.WGLGeometryType.LINE:c=this._lineShaderVariations.getProgram(b.variations,null,null,d)}c&&(this._programRep[a]=c);return c};return h}()});