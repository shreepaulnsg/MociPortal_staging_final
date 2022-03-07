// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/infographicPanels/supportClasses/Prizm5Data_2020",["esri/dijit/geoenrichment/ReportPlayer/config","./prizm5_2020","dojo/i18n!esri/nls/jsapi"],function(d,h,c){function e(a,b){for(var f in a)if(b.test(f))return f;return null}function g(a){a=a+1+"";1===a.length&&(a="0"+a);return a}c=c.geoenrichment.dijit.Prizm5;var k={"01":{name:"The A\u2010List",urbanity:"Urban",hhIncome:"Very Wealthy",lifeStage:"Older Families \x26 Empty Nests"},"02":{name:"Wealthy \x26 Wise",urbanity:"Urban",
hhIncome:"Wealthy",lifeStage:"Older Families \x26 Empty Nests"},"03":{name:"Asian Sophisticates",urbanity:"Urban Fringe",hhIncome:"Upscale",lifeStage:"Large Diverse Families"},"04":{name:"Turbo Burbs",urbanity:"Suburban",hhIncome:"Upscale",lifeStage:"Middle\u2010Age Families"},"05":{name:"First\u2010Class Families",urbanity:"Suburban",hhIncome:"Upscale",lifeStage:"Large Diverse Families"},"06":{name:"Downtown Verve",urbanity:"Urban",hhIncome:"Upscale",lifeStage:"School\u2010Age Families"},"07":{name:"Mature \x26 Secure",
urbanity:"Urban Fringe",hhIncome:"Upscale",lifeStage:"Older Families \x26 Empty Nests"},"08":{name:"Multiculture\u2010ish",urbanity:"Suburban",hhIncome:"Upscale",lifeStage:"Large Diverse Families"},"09":{name:"Boomer Bliss",urbanity:"Suburban",hhIncome:"Upper\u2010Middle",lifeStage:"Older Families \x26 Empty Nests"},10:{name:"Asian Achievement",urbanity:"Urban Fringe",hhIncome:"Upper\u2010Middle",lifeStage:"Large Diverse Families"},11:{name:"Modern Suburbia",urbanity:"Suburban",hhIncome:"Upper\u2010Middle",
lifeStage:"Young Families"},12:{name:"Eat, Play, Love",urbanity:"Urban",hhIncome:"Upper\u2010Middle",lifeStage:"Very Young Singles \x26 Couples"},13:{name:"Vie de R\u00eave",urbanity:"Suburban",hhIncome:"Upscale",lifeStage:"Large Diverse Families"},14:{name:"Kick\u2010Back Country",urbanity:"Rural",hhIncome:"Upscale",lifeStage:"Middle\u2010Age Families"},15:{name:"South Asian Enterprise",urbanity:"Urban",hhIncome:"Upper\u2010Middle",lifeStage:"Large Diverse Families"},16:{name:"Savvy Seniors",urbanity:"Urban",
hhIncome:"Upper\u2010Middle",lifeStage:"Older Families \x26 Empty Nests"},17:{name:"Asian Avenues",urbanity:"Urban",hhIncome:"Middle",lifeStage:"Middle\u2010Age Families"},18:{name:"Multicultural Corners",urbanity:"Urban Fringe",hhIncome:"Upper\u2010Middle",lifeStage:"Large Diverse Families"},19:{name:"Family Mode",urbanity:"Suburban",hhIncome:"Upscale",lifeStage:"Middle\u2010Age Families"},20:{name:"New Asian Heights",urbanity:"Urban Fringe",hhIncome:"Lower\u2010Middle",lifeStage:"Younger Singles \x26 Couples"},
21:{name:"Scenic Retirement",urbanity:"Suburban",hhIncome:"Middle",lifeStage:"Mature Singles \x26 Couples"},22:{name:"Indieville",urbanity:"Urban",hhIncome:"Middle",lifeStage:"Younger Singles \x26 Couples"},23:{name:"Mid\u2010City Mellow",urbanity:"Urban",hhIncome:"Upper\u2010Middle",lifeStage:"Older Families \x26 Empty Nests"},24:{name:"All\u2010Terrain Families",urbanity:"Suburban",hhIncome:"Upper\u2010Middle",lifeStage:"Young Families"},25:{name:"Suburban Sports",urbanity:"Suburban",hhIncome:"Upper\u2010Middle",
lifeStage:"Middle\u2010Age Families"},26:{name:"Country Traditions",urbanity:"Rural",hhIncome:"Upper\u2010Middle",lifeStage:"Middle\u2010Age Families"},27:{name:"Diversit\u00e9 Nouvelle",urbanity:"Urban Fringe",hhIncome:"Middle",lifeStage:"Middle\u2010Age Families"},28:{name:"Latte Life",urbanity:"Urban",hhIncome:"Middle",lifeStage:"Very Young Singles \x26 Couples"},29:{name:"C'est Tiguidou",urbanity:"Suburban",hhIncome:"Upper\u2010Middle",lifeStage:"Middle\u2010Age Families"},30:{name:"South Asian Society",
urbanity:"Urban Fringe",hhIncome:"Middle",lifeStage:"Large Diverse Families"},31:{name:"Metro Melting Pot",urbanity:"Urban Fringe",hhIncome:"Middle",lifeStage:"Middle\u2010Age Families"},32:{name:"Diverse \x26 Determined",urbanity:"Urban Fringe",hhIncome:"Middle",lifeStage:"School\u2010Age Families"},33:{name:"New Country",urbanity:"Rural",hhIncome:"Middle",lifeStage:"Middle\u2010Age Families"},34:{name:"Familles Typiques",urbanity:"Suburban",hhIncome:"Middle",lifeStage:"Middle\u2010Age Families"},
35:{name:"Vie Dynamique",urbanity:"Suburban",hhIncome:"Middle",lifeStage:"Older Families \x26 Empty Nests"},36:{name:"Middle\u2010Class Mosaic",urbanity:"Urban",hhIncome:"Middle",lifeStage:"Middle\u2010Age Families"},37:{name:"Keep on Trucking",urbanity:"Town",hhIncome:"Upper\u2010Middle",lifeStage:"School\u2010Age Families"},38:{name:"Stressed in Suburbia",urbanity:"Suburban",hhIncome:"Middle",lifeStage:"Middle\u2010Age Families"},39:{name:"\u00c9volution Urbaine",urbanity:"Urban",hhIncome:"Middle",
lifeStage:"School\u2010Age Families"},40:{name:"Les \u00c9nerjeunes",urbanity:"Urban",hhIncome:"Lower\u2010Middle",lifeStage:"Very Young Singles \x26 Couples"},41:{name:"Down to Earth",urbanity:"Rural",hhIncome:"Middle",lifeStage:"Older Families \x26 Empty Nests"},42:{name:"Banlieues Tranquilles",urbanity:"Suburban",hhIncome:"Middle",lifeStage:"School\u2010Age Families"},43:{name:"Happy Medium",urbanity:"Suburban",hhIncome:"Middle",lifeStage:"Middle\u2010Age Families"},44:{name:"Un Grand Cru",urbanity:"Urban",
hhIncome:"Middle",lifeStage:"Mature Singles \x26 Couples"},45:{name:"Slow\u2010Lane Suburbs",urbanity:"Suburban",hhIncome:"Middle",lifeStage:"Older Families \x26 Empty Nests"},46:{name:"Patrimoine Rustique",urbanity:"Rural",hhIncome:"Middle",lifeStage:"Older Families \x26 Empty Nests"},47:{name:"Social Networkers",urbanity:"Urban",hhIncome:"Low",lifeStage:"Very Young Singles \x26 Couples"},48:{name:"Agri\u2010Biz",urbanity:"Rural",hhIncome:"Middle",lifeStage:"Middle\u2010Age Families"},49:{name:"Backcountry Boomers",
urbanity:"Rural",hhIncome:"Lower\u2010Middle",lifeStage:"Mature Singles \x26 Couples"},50:{name:"Country \x26 Western",urbanity:"Rural",hhIncome:"Middle",lifeStage:"Mature Singles \x26 Couples"},51:{name:"On Their Own Again",urbanity:"Urban",hhIncome:"Downscale",lifeStage:"Mature Singles \x26 Couples"},52:{name:"Friends \x26 Roomies",urbanity:"Urban",hhIncome:"Lower\u2010Middle",lifeStage:"Younger Singles \x26 Couples"},53:{name:"Silver Flats",urbanity:"Suburban",hhIncome:"Downscale",lifeStage:"Mature Singles \x26 Couples"},
54:{name:"Vie au Village",urbanity:"Rural",hhIncome:"Lower\u2010Middle",lifeStage:"Middle\u2010Age Families"},55:{name:"Enclaves Multiethniques",urbanity:"Urban",hhIncome:"Downscale",lifeStage:"School\u2010Age Families"},56:{name:"Jeunes Biculturels",urbanity:"Urban",hhIncome:"Downscale",lifeStage:"Younger Singles \x26 Couples"},57:{name:"Juggling Acts",urbanity:"Urban",hhIncome:"Lower\u2010Middle",lifeStage:"Younger Singles \x26 Couples"},58:{name:"Old Town Roads",urbanity:"Town",hhIncome:"Lower\u2010Middle",
lifeStage:"Older Families \x26 Empty Nests"},59:{name:"La Vie Simple",urbanity:"Suburban",hhIncome:"Lower\u2010Middle",lifeStage:"School\u2010Age Families"},60:{name:"Value Villagers",urbanity:"Urban",hhIncome:"Lower\u2010Middle",lifeStage:"School\u2010Age Families"},61:{name:"Came From Away",urbanity:"Urban",hhIncome:"Downscale",lifeStage:"Middle\u2010Age Families"},62:{name:"Suburban Recliners",urbanity:"Suburban",hhIncome:"Downscale",lifeStage:"Mature Singles \x26 Couples"},63:{name:"Amants de la Nature",
urbanity:"Rural",hhIncome:"Lower\u2010Middle",lifeStage:"Older Families \x26 Empty Nests"},64:{name:"Midtown Movers",urbanity:"Urban",hhIncome:"Lower\u2010Middle",lifeStage:"Middle\u2010Age Families"},65:{name:"\u00c2g\u00e9s \x26 Traditionnels",urbanity:"Urban",hhIncome:"Low",lifeStage:"Mature Singles \x26 Couples"},66:{name:"Indigenous Families",urbanity:"Town",hhIncome:"Lower\u2010Middle",lifeStage:"Large Diverse Families"},67:{name:"Just Getting By",urbanity:"Urban",hhIncome:"Low",lifeStage:"Younger Singles \x26 Couples"}},
l={Urban:"#DE332B","Urban Fringe":"#E6AB21",Suburban:"#F37A1FFF",Town:"#A4BB39",Rural:"#0D8482"};return{getFieldNameByIndex:function(a,b){a=g(a);return d.isPlayerOnServer?e(b,new RegExp("PZMD"+a+"_?HHD$")):"PZMD"+a+"_HHD"},getTotalFieldName:function(a){return d.isPlayerOnServer?e(a,/PZMD70_?HHD$/):"PZMD70_HHD"},getNumClassifiedSegments:function(){return 67},getSegmentInfoByIndex:function(a){a=g(a);var b=k[a];return{code:a,alias:b.name,color:l[b.urbanity],fields:[{label:c.hhIncome,value:b.hhIncome},
{label:c.urbanity,value:b.urbanity},{label:c.lifeStage,value:b.lifeStage}],imageUrl:h[a]}},getUrl:function(a){return"http://downloads.esri.com/esri_content_doc/dbl/int/canada_prizm/"+(a+1)+".pdf"}}});