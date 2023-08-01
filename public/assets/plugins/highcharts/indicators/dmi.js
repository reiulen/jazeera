/*
 Highstock JS v10.1.0 (2022-04-29)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Rafal Sebestjanski

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define("highcharts/indicators/dmi",["highcharts","highcharts/modules/stock"],function(h){c(h);c.Highcharts=h;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function h(c,e,g,h){c.hasOwnProperty(e)||(c[e]=h.apply(null,g),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:c[e]}})))}
c=c?c._modules:{};h(c,"Stock/Indicators/MultipleLinesComposition.js",[c["Core/Series/SeriesRegistry.js"],c["Core/Utilities.js"]],function(c,e){var g=c.seriesTypes.sma,h=e.defined,v=e.error,n=e.merge,k;(function(e){function k(b){var a,d=[];b=b||this.points;if(this.fillGraph&&this.nextPoints){if((a=g.prototype.getGraphPath.call(this,this.nextPoints))&&a.length){a[0][0]="L";d=g.prototype.getGraphPath.call(this,b);a=a.slice(0,d.length);for(var f=a.length-1;0<=f;f--)d.push(a[f])}}else d=g.prototype.getGraphPath.apply(this,
arguments);return d}function w(){var b=this,d=b.linesApiNames,l=b.areaLinesNames,f=b.points,p=b.options,y=b.graph,m={options:{gapSize:p.gapSize}},e=[],t=b.getTranslatedLinesNames(b.pointValKey),w=f.length,u;t.forEach(function(b,a){for(e[a]=[];w--;)u=f[w],e[a].push({x:u.x,plotX:u.plotX,plotY:u[b],isNull:!h(u[b])});w=f.length});if(this.userOptions.fillColor&&l.length){var x=t.indexOf(a(l[0]));x=e[x];l=1===l.length?f:e[t.indexOf(a(l[1]))];t=b.color;b.points=l;b.nextPoints=x;b.color=this.userOptions.fillColor;
b.options=n(f,m);b.graph=b.area;b.fillGraph=!0;c.seriesTypes.sma.prototype.drawGraph.call(b);b.area=b.graph;delete b.nextPoints;delete b.fillGraph;b.color=t}d.forEach(function(a,d){e[d]?(b.points=e[d],p[a]?b.options=n(p[a].styles,m):v('Error: "There is no '+a+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),b.graph=b["graph"+a],g.prototype.drawGraph.call(b),b["graph"+a]=b.graph):v('Error: "'+a+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});
b.points=f;b.options=p;b.graph=y;g.prototype.drawGraph.call(b)}function y(b){var d=[];(this.pointArrayMap||[]).forEach(function(c){c!==b&&d.push(a(c))});return d}function a(a){return"plot"+a.charAt(0).toUpperCase()+a.slice(1)}function d(a){var b=[];(this.pointArrayMap||[]).forEach(function(d){b.push(a[d])});return b}function p(){var a=this,d=a.pointArrayMap,c=[],f;c=a.getTranslatedLinesNames();g.prototype.translate.apply(a,arguments);a.points.forEach(function(b){d.forEach(function(d,p){f=b[d];a.dataModify&&
(f=a.dataModify.modifyValue(f));null!==f&&(b[c[p]]=a.yAxis.toPixels(f,!0))})})}var t=[],u=["bottomLine"],x=["top","bottom"],B=["top"];e.compose=function(a){if(-1===t.indexOf(a)){t.push(a);var b=a.prototype;b.linesApiNames=b.linesApiNames||u.slice();b.pointArrayMap=b.pointArrayMap||x.slice();b.pointValKey=b.pointValKey||"top";b.areaLinesNames=b.areaLinesNames||B.slice();b.drawGraph=w;b.getGraphPath=k;b.toYData=d;b.translate=p;b.getTranslatedLinesNames=y}return a}})(k||(k={}));return k});h(c,"Stock/Indicators/DMI/DMIIndicator.js",
[c["Stock/Indicators/MultipleLinesComposition.js"],c["Core/Series/SeriesRegistry.js"],c["Core/Utilities.js"]],function(c,e,g){var h=this&&this.__extends||function(){var c=function(e,a){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])};return c(e,a)};return function(e,a){function d(){this.constructor=e}c(e,a);e.prototype=null===a?Object.create(a):(d.prototype=a.prototype,new d)}}(),v=e.seriesTypes.sma,
n=g.correctFloat,k=g.extend,z=g.isArray,A=g.merge;g=function(c){function e(){var a=null!==c&&c.apply(this,arguments)||this;a.options=void 0;return a}h(e,c);e.prototype.calculateDM=function(a,d,c){var e=a[d][1],g=a[d][2],p=a[d-1][1];a=a[d-1][2];return n(e-p>a-g?c?Math.max(e-p,0):0:c?0:Math.max(a-g,0))};e.prototype.calculateDI=function(a,d){return a/d*100};e.prototype.calculateDX=function(a,d){return n(Math.abs(a-d)/Math.abs(a+d)*100)};e.prototype.smoothValues=function(a,d,c){return n(a-a/c+d)};e.prototype.getTR=
function(a,d){return n(Math.max(a[1]-a[2],d?Math.abs(a[1]-d[3]):0,d?Math.abs(a[2]-d[3]):0))};e.prototype.getValues=function(a,d){d=d.period;var c=a.xData,e=(a=a.yData)?a.length:0,g=[],h=[],n=[];if(!(c.length<=d)&&z(a[0])&&4===a[0].length){var b=0,k=0,l=0,f;for(f=1;f<e;f++)if(f<=d){var q=this.calculateDM(a,f,!0);var r=this.calculateDM(a,f);var m=this.getTR(a[f],a[f-1]);b+=q;k+=r;l+=m;f===d&&(m=this.calculateDI(b,l),r=this.calculateDI(k,l),q=this.calculateDX(b,k),g.push([c[f],q,m,r]),h.push(c[f]),n.push([q,
m,r]))}else q=this.calculateDM(a,f,!0),r=this.calculateDM(a,f),m=this.getTR(a[f],a[f-1]),b=this.smoothValues(b,q,d),k=this.smoothValues(k,r,d),l=this.smoothValues(l,m,d),m=this.calculateDI(b,l),r=this.calculateDI(k,l),q=this.calculateDX(b,k),g.push([c[f],q,m,r]),h.push(c[f]),n.push([q,m,r]);return{values:g,xData:h,yData:n}}};e.defaultOptions=A(v.defaultOptions,{params:{index:void 0},marker:{enabled:!1},tooltip:{pointFormat:'<span style="color: {point.color}">\u25cf</span><b> {series.name}</b><br/><span style="color: {point.color}">DX</span>: {point.y}<br/><span style="color: {point.series.options.plusDILine.styles.lineColor}">+DI</span>: {point.plusDI}<br/><span style="color: {point.series.options.minusDILine.styles.lineColor}">-DI</span>: {point.minusDI}<br/>'},
plusDILine:{styles:{lineWidth:1,lineColor:"#06b535"}},minusDILine:{styles:{lineWidth:1,lineColor:"#f21313"}},dataGrouping:{approximation:"averages"}});return e}(v);k(g.prototype,{areaLinesNames:[],nameBase:"DMI",linesApiNames:["plusDILine","minusDILine"],pointArrayMap:["y","plusDI","minusDI"],parallelArrays:["x","y","plusDI","minusDI"],pointValKey:"y"});c.compose(g);e.registerSeriesType("dmi",g);"";return g});h(c,"masters/indicators/dmi.src.js",[],function(){})});
//# sourceMappingURL=dmi.js.map