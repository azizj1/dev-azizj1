!function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],d=0,m=[];d<i.length;d++)o=i[d],a[o]&&m.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);m.length;)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([302,1]),n()}({130:function(e,t,n){e.exports={notesCell:"_3ItD",notes:"t681"}},15:function(e,t,n){e.exports={root:"_30wG",graphs:"_30hW",mobileLinePie:"_3vCH",line:"_2jJv",pie:"_1lio",lineFull:"_1WAf"}},16:function(e,t,n){e.exports={row:"_113a",isHeader:"SiYi",mainRow:"_3VbQ",expandableContentButton:"_3h67",link:"EASB",subRow:"eh2d",isOpen:"_2aTM",isExpandable:"cn-X",hasLink:"_1ssK",pivotLabel:"_16WC",expandableContentLabel:"s4m0",linkLabel:"ssMH",cell:"_2Ml-",hideOnPivot:"pR_5",right:"_2aGq",cellContent:"_32H4",center:"_1Xa-",cellLabel:"_21SM",hasExpandableContent:"_2Rst",hasLinks:"_6UnJ"}},23:function(e,t,n){e.exports={error:"_2yyZ",clip:"MKxW",shadow:"_397p",digit:"_21jO",msg:"_2czz",triangle:"_3Dm3",container:"_1lDU"}},27:function(e,t,n){e.exports={root:"_1oxC",stripe:"_2coe",lockedStripe:"_2q9i",duration:"_16a5",white:"_1Kx1",blue:"_2Cl8",purple:"_3vul",brown:"nXM6",black:"TJq7",selected:"_1Ztn"}},289:function(e,t,n){},296:function(e,t,n){e.exports={root:"FMCn"}},297:function(e,t,n){e.exports={root:"_2C5n"}},302:function(e,t,n){n(303),n(505),n(506),n(507),n(509),e.exports=n(555)},506:function(e,t){!function(e){e.addEventListener("DOMContentLoaded",function(){({animate:function(e){var t=new Date,n=setInterval(function(){var r=(new Date-t)/e.duration;r>1&&(r=1),e.progress=r;var a=e.delta(r);e.step(a),1==r&&(clearInterval(n),e.complete&&e.complete())},e.delay||10)},fadeOut:function(e,t){this.animate({duration:t.duration,delta:function(e){return e=this.progress,.5-Math.cos(e*Math.PI)},complete:t.complete,step:function(t){e.style.opacity=1-t}})}}).fadeOut(e.getElementById("preloader"),{duration:1e3,complete:function(){e.getElementById("preloader").style.display="none"}})})}(document)},507:function(e,t,n){},509:function(e,t,n){},540:function(e,t,n){var r={"./af":166,"./af.js":166,"./ar":167,"./ar-dz":168,"./ar-dz.js":168,"./ar-kw":169,"./ar-kw.js":169,"./ar-ly":170,"./ar-ly.js":170,"./ar-ma":171,"./ar-ma.js":171,"./ar-sa":172,"./ar-sa.js":172,"./ar-tn":173,"./ar-tn.js":173,"./ar.js":167,"./az":174,"./az.js":174,"./be":175,"./be.js":175,"./bg":176,"./bg.js":176,"./bm":177,"./bm.js":177,"./bn":178,"./bn.js":178,"./bo":179,"./bo.js":179,"./br":180,"./br.js":180,"./bs":181,"./bs.js":181,"./ca":182,"./ca.js":182,"./cs":183,"./cs.js":183,"./cv":184,"./cv.js":184,"./cy":185,"./cy.js":185,"./da":186,"./da.js":186,"./de":187,"./de-at":188,"./de-at.js":188,"./de-ch":189,"./de-ch.js":189,"./de.js":187,"./dv":190,"./dv.js":190,"./el":191,"./el.js":191,"./en-au":192,"./en-au.js":192,"./en-ca":193,"./en-ca.js":193,"./en-gb":194,"./en-gb.js":194,"./en-ie":195,"./en-ie.js":195,"./en-il":196,"./en-il.js":196,"./en-nz":197,"./en-nz.js":197,"./eo":198,"./eo.js":198,"./es":199,"./es-do":200,"./es-do.js":200,"./es-us":201,"./es-us.js":201,"./es.js":199,"./et":202,"./et.js":202,"./eu":203,"./eu.js":203,"./fa":204,"./fa.js":204,"./fi":205,"./fi.js":205,"./fo":206,"./fo.js":206,"./fr":207,"./fr-ca":208,"./fr-ca.js":208,"./fr-ch":209,"./fr-ch.js":209,"./fr.js":207,"./fy":210,"./fy.js":210,"./gd":211,"./gd.js":211,"./gl":212,"./gl.js":212,"./gom-latn":213,"./gom-latn.js":213,"./gu":214,"./gu.js":214,"./he":215,"./he.js":215,"./hi":216,"./hi.js":216,"./hr":217,"./hr.js":217,"./hu":218,"./hu.js":218,"./hy-am":219,"./hy-am.js":219,"./id":220,"./id.js":220,"./is":221,"./is.js":221,"./it":222,"./it.js":222,"./ja":223,"./ja.js":223,"./jv":224,"./jv.js":224,"./ka":225,"./ka.js":225,"./kk":226,"./kk.js":226,"./km":227,"./km.js":227,"./kn":228,"./kn.js":228,"./ko":229,"./ko.js":229,"./ky":230,"./ky.js":230,"./lb":231,"./lb.js":231,"./lo":232,"./lo.js":232,"./lt":233,"./lt.js":233,"./lv":234,"./lv.js":234,"./me":235,"./me.js":235,"./mi":236,"./mi.js":236,"./mk":237,"./mk.js":237,"./ml":238,"./ml.js":238,"./mn":239,"./mn.js":239,"./mr":240,"./mr.js":240,"./ms":241,"./ms-my":242,"./ms-my.js":242,"./ms.js":241,"./mt":243,"./mt.js":243,"./my":244,"./my.js":244,"./nb":245,"./nb.js":245,"./ne":246,"./ne.js":246,"./nl":247,"./nl-be":248,"./nl-be.js":248,"./nl.js":247,"./nn":249,"./nn.js":249,"./pa-in":250,"./pa-in.js":250,"./pl":251,"./pl.js":251,"./pt":252,"./pt-br":253,"./pt-br.js":253,"./pt.js":252,"./ro":254,"./ro.js":254,"./ru":255,"./ru.js":255,"./sd":256,"./sd.js":256,"./se":257,"./se.js":257,"./si":258,"./si.js":258,"./sk":259,"./sk.js":259,"./sl":260,"./sl.js":260,"./sq":261,"./sq.js":261,"./sr":262,"./sr-cyrl":263,"./sr-cyrl.js":263,"./sr.js":262,"./ss":264,"./ss.js":264,"./sv":265,"./sv.js":265,"./sw":266,"./sw.js":266,"./ta":267,"./ta.js":267,"./te":268,"./te.js":268,"./tet":269,"./tet.js":269,"./tg":270,"./tg.js":270,"./th":271,"./th.js":271,"./tl-ph":272,"./tl-ph.js":272,"./tlh":273,"./tlh.js":273,"./tr":274,"./tr.js":274,"./tzl":275,"./tzl.js":275,"./tzm":276,"./tzm-latn":277,"./tzm-latn.js":277,"./tzm.js":276,"./ug-cn":278,"./ug-cn.js":278,"./uk":279,"./uk.js":279,"./ur":280,"./ur.js":280,"./uz":281,"./uz-latn":282,"./uz-latn.js":282,"./uz.js":281,"./vi":283,"./vi.js":283,"./x-pseudo":284,"./x-pseudo.js":284,"./yo":285,"./yo.js":285,"./zh-cn":286,"./zh-cn.js":286,"./zh-hk":287,"./zh-hk.js":287,"./zh-tw":288,"./zh-tw.js":288};function a(e){var t=s(e);return n(t)}function s(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=540},552:function(e,t,n){},555:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(42),s=n(95),o=n(557),i=n(559),l=n(558),c=n(56),u=n(293);function d(e){return e}var m={hasError:!1,code:null,message:null,details:null,time:null},p={stats:null,loading:!1,error:m};var h,f=Object(c.c)({bjj:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BJJ_STATS_REQUEST":return Object.assign({},e,{loading:!0});case"GET_BJJ_STATS_SUCCESS":return Object.assign({},e,{stats:t.payload.stats,loading:!1,error:Object.assign({},m)});case"GET_BJJ_STATS_FAILURE":return Object.assign({},e,{loading:!1,error:Object.assign({},t.payload)});default:return d(t),e}}}),v=n(26),y=n.n(v),g=n(22),E=n(8),b=n.n(E),k=n(9),j=n.n(k),w=n(11),x=n.n(w),N=n(10),O=n.n(N),T=n(12),_=n.n(T),C=n(92),H=n.n(C),M=n(294),S=function(e){function t(e,n){var r;return b()(this,t),r=x()(this,O()(t).call(this,e)),Object.setPrototypeOf(H()(H()(r)),t.prototype),r.response=n,r}return _()(t,e),j()(t,[{key:"getBody",value:function(){return g.a(this,void 0,void 0,y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.response.json();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}))}}]),t}(n.n(M)()(Error));!function(e){e[e.Unknown=0]="Unknown"}(h||(h={}));function P(e){return e&&e.type&&e.type.indexOf("UNHANDLED_API_ERROR")>=0}function A(e){return e&&e.type&&e.type.indexOf("UNHANDLED_CLIENT_ERROR")>=0}function B(e){return g.a(this,void 0,void 0,y.a.mark(function t(){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getBody();case 2:if(!(n=t.sent)||!n.message){t.next=6;break}return t.abrupt("return",{code:h.Unknown,details:n.message});case 6:return t.abrupt("return",{code:h.Unknown,details:null});case 7:case"end":return t.stop()}},t,this)}))}function L(e,t,n){return{type:e,payload:{code:t,details:n,time:new Date,message:function(e){switch(e){case h.Unknown:return"Something went wrong. Try again later.";default:return d(e),"Something went wrong. Try again later."}}(t),hasError:!0}}}var R=function(e){var t=e.dispatch;return function(e){return function(n){return g.a(void 0,void 0,void 0,y.a.mark(function r(){var a,s,o,i,l,c,u;return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(a=e(n),!P(n)){r.next=16;break}if(s=n.payload,o=s.err,i=s.handledAction,!(n.payload.err instanceof S)){r.next=13;break}return r.next=7,B(o);case 7:l=r.sent,c=l.code,u=l.details,t(L(i,c,u)),r.next=14;break;case 13:t(L(i,h.Unknown));case 14:r.next=17;break;case 16:A(n)&&t(L(n.payload.handledAction,n.payload.code));case 17:return r.abrupt("return",a);case 18:case"end":return r.stop()}},r,this)}))}}};var W=n(23),z=n(13),D=r.createElement("h2",null,"Sorry! Page not found");var G,V,U,I,J,F=n(52),Q=n.n(F),Z=n(43),K=n.n(Z);!function(e){e[e.Morning=0]="Morning",e[e.Afternoon=1]="Afternoon",e[e.Evening=2]="Evening",e[e.Unknown=3]="Unknown"}(G||(G={})),function(e){e[e.Gi=0]="Gi",e[e.NoGi=1]="NoGi",e[e.Unknown=2]="Unknown"}(V||(V={})),function(e){e[e.Fundamental=0]="Fundamental",e[e.AllLevels=1]="AllLevels",e[e.Advanced=2]="Advanced",e[e.Unknown=3]="Unknown"}(U||(U={})),function(e){e[e.White=0]="White",e[e.Blue=1]="Blue",e[e.Purple=2]="Purple",e[e.Brown=3]="Brown",e[e.Black=4]="Black"}(I||(I={})),function(e){e[e.Header=0]="Header",e[e.Overview=1]="Overview",e[e.Promotions=2]="Promotions",e[e.WeeklyHours=3]="WeeklyHours",e[e.ClassType=4]="ClassType",e[e.ClassTime=5]="ClassTime",e[e.DayOfWeek=6]="DayOfWeek"}(J||(J={}));function q(e){if(e.status>=200&&e.status<300)return e;throw new S("".concat(e.status,": ").concat(e.statusText),e)}function X(e){return new Headers(Object.assign({"Content-Type":"application/json",Accept:"application/json"},null!=e?{Authorization:"".concat(e)}:{}))}function Y(e){return e.json()}var $=new(function(){function e(){b()(this,e)}return j()(e,[{key:"getBjjStats",value:function(){return g.a(this,void 0,void 0,y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://devapi.azizj1.com","/v1/calendars/fitness/bjj"),{headers:X()}).then(q).then(Y);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}))}}]),e}());function ee(e,t){return{type:"UNHANDLED_API_ERROR",payload:{err:e,handledAction:t}}}function te(e){return{type:"GET_BJJ_STATS_SUCCESS",payload:{stats:e}}}var ne=n(96);var re=n(97);function ae(e){var t=e.type,n=e.message,a=e.onDismiss,s=e.className;return r.createElement("div",{className:z(re.alert,re["alert-".concat(t)],s)},n,a&&r.createElement("span",{className:re.dismiss,onClick:a},"Dismiss"))}var se=n(76),oe=r.createElement("span",null),ie=function(e){function t(){var e;return b()(this,t),(e=x()(this,O()(t).apply(this,arguments))).handleScroll=function(t){return function(){return e.props.scrollTo(t)}},e}return _()(t,e),j()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.menuVisible,a=t.toggleVisibility,s=t.sections;return[r.createElement("a",{href:"javascript:;",className:z(se.menuLink,K()({},se.active,n)),key:"1",onClick:a},oe),r.createElement("div",{key:"2",className:z(se.menu,K()({},se.active,n))},r.createElement("div",{className:"pure-menu"},r.createElement("a",{className:"pure-menu-heading",href:"javascript:;",onClick:this.handleScroll(J.Header)},"Jiu-Jitsu"),r.createElement("ul",{className:"pure-menu-list"},s.filter(function(e,t){return t>0}).map(function(t){return r.createElement("li",{key:t.type,className:z("pure-menu-item",{"pure-menu-selected":t.selected})},r.createElement("a",{href:"javascript:;",className:z("pure-menu-link",{"menu-item-divided":t.divider}),onClick:e.handleScroll(t.type)},t.name||J[t.type]))}))))]}}]),t}(r.PureComponent),le=n(41),ce=n(93),ue=n.n(ce),de=function(e){return e.bjj.stats&&e.bjj.stats.classes||[]},me=function(e,t,n){return ue()(e).concat([{x:new Date(t.start).getTime(),y:t.durationHours+(e[n-1]||{y:0}).y}])},pe=Object(le.createSelector)(de,function(e){return{gi:e.filter(function(e){return e.type===V.Gi}).reduce(me,[]),noGi:e.filter(function(e){return e.type===V.NoGi}).reduce(me,[])}}),he=n(35),fe=n(36),ve=n.n(fe),ye=n(15),ge=n(295),Ee={title:{text:void 0},credits:{enabled:!1},xAxis:{type:"datetime"},yAxis:{title:{text:"Cumulative hours"}},plotOptions:{pie:{dataLabels:{distance:-70,color:"white",formatter:function(){return"<div class='hcCenter'>"+"<span>".concat(this.point.name,"</span><span>").concat(this.y,"hrs (").concat(Math.round(this.percentage),"%)</span>")+"</div>"},useHTML:!0},tooltip:{pointFormatter:function(){return'<span style="color:'.concat(this.color,'">●</span>')+"<b>".concat(this.y,"</b>hrs (").concat(Math.round(this.percentage),"%)<br/>")}}}},responsive:{rules:[{condition:{maxWidth:769},chartOptions:{yAxis:{title:""}}}]}},be=function(e){return null==e},ke=function(e){return ge.tz(e,"America/Chicago").format("dddd, MMM Do, h:mma")};function je(){if(be(this.x))return'<span style="font-size: 10px">'.concat(this.key,"</span><br/>")+'<span style="color:'.concat(this.color,'">●</span>')+"<b>".concat(this.y,"hrs</b> (").concat(Math.round(this.percentage),"%)<br/>");var e=ke(this.key);return'<span style="font-size: 10px">'.concat(e,"</span><br/>")+'<span style="color:'.concat(this.color,'">●</span>')+" ".concat(this.series.name,": <b>").concat(this.y,"hrs</b> cumulative<br/>")}function we(e,t){var n=Object.assign({},Ee,{series:t,tooltip:{formatter:je}});return{lineOptions:n,pieOptions:Object.assign({},Ee,{chart:{type:"pie"},series:[{data:e}]}),mobilePieOptions:Object.assign({},n,{series:ue()(t).concat([{id:"pie",name:"All-time",type:"pie",data:e,center:[50,60],size:100,showInLegend:!1,dataLabels:{enabled:!1}}])})}}var xe=["#2ecc71","#3498db"],Ne=r.createElement("h2",null,"Gi vs. NoGi"),Oe=function(e){function t(){return b()(this,t),x()(this,O()(t).apply(this,arguments))}return _()(t,e),j()(t,[{key:"render",value:function(){var e=this.props,t=e.stats,n=t.gi,a=t.noGi,s=e.totalNoGiHours,o=we([{name:"Gi",y:e.totalGiHours,color:xe[0]},{name:"NoGi",y:s,color:xe[1]}],[{id:"gi",name:"Gi",color:xe[0],data:n,type:"line"},{id:"noGi",name:"NoGi",color:xe[1],data:a,type:"line"}]),i=o.lineOptions,l=o.pieOptions,c=o.mobilePieOptions;return r.createElement("div",{className:ye.root},Ne,r.createElement("div",{className:ye.graphs},r.createElement("div",{className:ye.line},r.createElement(ve.a,{highcharts:he,options:i})),r.createElement("div",{className:ye.pie},r.createElement(ve.a,{highcharts:he,options:l})),r.createElement("div",{className:ye.mobileLinePie},r.createElement(ve.a,{highcharts:he,options:c}))))}}]),t}(r.PureComponent),Te=Object(le.createSelector)(de,function(e){return{morning:e.filter(function(e){return e.classTime===G.Morning}).reduce(me,[]),afternoon:e.filter(function(e){return e.classTime===G.Afternoon}).reduce(me,[]),evening:e.filter(function(e){return e.classTime===G.Evening}).reduce(me,[])}}),_e=["#e67e22","#9b59b6","#34495e"],Ce=r.createElement("h2",null,"Time of day"),He=function(e){function t(){return b()(this,t),x()(this,O()(t).apply(this,arguments))}return _()(t,e),j()(t,[{key:"render",value:function(){var e=this.props,t=e.stats,n=t.morning,a=t.afternoon,s=t.evening,o=e.totalMorningHours,i=e.totalAfternoonHours,l=e.totalEveningHours,c=we([{name:"Morning",y:o,color:_e[0]},{name:"Afternoon",y:i,color:_e[1]},{name:"Evening",y:l,color:_e[2]}],[{name:"Morning",color:_e[0],data:n,type:"line"},{name:"Afternoon",color:_e[1],data:a,type:"line"},{name:"Evening",color:_e[2],data:s,type:"line"}]),u=c.lineOptions,d=c.pieOptions,m=c.mobilePieOptions;return r.createElement("div",{className:ye.root},Ce,r.createElement("div",{className:ye.graphs},r.createElement("div",{className:ye.line},r.createElement(ve.a,{highcharts:he,options:u})),r.createElement("div",{className:ye.pie},r.createElement(ve.a,{highcharts:he,options:d})),r.createElement("div",{className:ye.mobileLinePie},r.createElement(ve.a,{highcharts:he,options:m}))))}}]),t}(r.PureComponent),Me=n(2),Se=Object(le.createSelector)(de,function(e){return e.filter(function(e){return!e.isAllDay}).reduce(function(e,t){var n=e.pop(),r=Me.parseZone(t.start,Me.ISO_8601,!0);if(null==n?n=Ae(t.durationHours,r):n.weekKey===Pe(r)&&(n.hours+=t.durationHours),e.push(n),null!=n&&n.weekKey!==Pe(r)){var a=Ae(t.durationHours,r);e.push(a)}return e},[])}),Pe=function(e){return 100*e.year()+e.isoWeek()},Ae=function(e,t){return{hours:e,startTime:parseInt(t.clone().isoWeekday(1).format("x"),10),week:function(e){return e.clone().isoWeekday(1).format("MMM Do")+" to "+e.clone().isoWeekday(7).format("MMM Do")}(t),weekKey:Pe(t)}},Be=Object(le.createSelector)(Se,function(e){return e.map(function(e){return{x:e.startTime,y:e.hours,week:e.week}})}),Le=Object(le.createSelector)(Se,function(e){return e.reduce(function(e,t,n){return n%4==0?e.push({x:t.startTime,y:t.hours/4,week:t.week}):e[e.length-1]={x:t.startTime,y:e[e.length-1].y+t.hours/4,week:t.week},e},[])}),Re=n(296),We=function(e){function t(){return b()(this,t),x()(this,O()(t).apply(this,arguments))}return _()(t,e),j()(t,[{key:"render",value:function(){var e=this,t=this.props.keyValues;return r.createElement("div",{className:Re.root},t.map(function(t,n){return e.renderKeyValuePair(t.key,t.value,n)}))}},{key:"renderKeyValuePair",value:function(e,t,n){var a,s;switch(e.toLowerCase()){case"width":a="width",s="http://schema.org/QuantitativeValue";break;case"height":a="height",s="http://schema.org/QuantitativeValue";break;case"depth":a="depth",s="http://schema.org/QuantitativeValue";break;case"weight":a="weight",s="http://schema.org/QuantitativeValue";break;case"color":a="color",s="http://schema.org/Text";break;default:a="additionalProperty",s="http://schema.org/PropertyValue"}return r.createElement("dl",{itemProp:a,itemScope:!0,itemType:s,key:n},r.createElement("dt",{itemProp:"name"},e),r.createElement("dd",{itemProp:"value"},this.renderValueNode(t)))}},{key:"renderValueNode",value:function(e,t){var n=this;switch(t=t||"key".concat(Math.random().toString()),e.constructor){case String:return r.createElement("div",{key:t},e);case Array:return e.map(function(e,t){return n.renderValueNode(e,t)});case Object:return this.isValueUrl(e)?r.createElement("a",{href:e.url,key:t},e.value):this.renderValueNode(e.value);default:return null}}},{key:"isValueUrl",value:function(e){return null!=e.url}}]),t}(r.PureComponent),ze=r.createElement("h2",null,"Overview"),De=function(e){function t(){var e;return b()(this,t),(e=x()(this,O()(t).apply(this,arguments))).readableHours=function(e){return"".concat(Math.floor(e)," hours ").concat(Math.round(60*(e-Math.floor(e)))," mins")},e}return _()(t,e),j()(t,[{key:"render",value:function(){var e=this.props.stats,t=e.trainingDuration,n=e.totalHours,a=e.totalClasses,s=e.avgHrsPerWeek,o=e.avgClassesPerWeek,i=e.avgHourPerClass;return r.createElement("div",{className:ye.root},ze,r.createElement(We,{keyValues:[{key:"Training duration",value:t},{key:"Total hours",value:n+" hours"},{key:"Total classes",value:a+" classes"},{key:"Avg hours/wk",value:this.readableHours(s)+" /wk"},{key:"Avg classes/wk",value:Math.round(10*o)/10+" classes/wk"},{key:"Avg hours/class",value:this.readableHours(i)+" /class"}]}))}}]),t}(r.PureComponent),Ge=r.createElement("svg",{className:"sicon",viewBox:"0 0 24 24",preserveAspectRatio:"xMinYMin meet",version:"1.1"},r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}));var Ve=n(27),Ue=r.createElement(function(){return Ge},null);function Ie(e){var t=e.promotions,n=e.color,a=t.filter(function(e){return e.color===n&&e.stripes>0});return 0===a.length?Ue:r.createElement("div",null,a.map(function(e){return[r.createElement("div",{className:Ve.duration,key:"".concat(n,"-").concat(e.stripes,"-1")},r.createElement("span",null,e.timeItTook),r.createElement("span",null,Math.round(e.hoursItTook),"hrs")),!e.isNextPromotion&&r.createElement("div",{className:z(Ve.stripe),key:"".concat(n,"-").concat(e.stripes,"-2")})]}))}var Je=r.createElement("span",null,"White Belt"),Fe=r.createElement("span",null,"Blue Belt"),Qe=r.createElement("span",null,"Purple Belt"),Ze=r.createElement("span",null,"Brown Belt"),Ke=r.createElement("span",null,"Black Belt"),qe=function(e){function t(){return b()(this,t),x()(this,O()(t).apply(this,arguments))}return _()(t,e),j()(t,[{key:"render",value:function(){var e=this.props.promotions;if(e.length<=1)return null;var t=e[e.length-2].color,n=function(e){return t===e};return r.createElement("div",{className:Ve.root},r.createElement("div",{className:z(Ve.white,K()({},Ve.selected,n(I.White)))},Je,r.createElement(Ie,{promotions:e,color:I.White})),r.createElement("div",{className:z(Ve.blue,K()({},Ve.selected,n(I.Blue)))},Fe,r.createElement(Ie,{promotions:e,color:I.Blue})),r.createElement("div",{className:z(Ve.purple,K()({},Ve.selected,n(I.Purple)))},Qe,r.createElement(Ie,{promotions:e,color:I.Purple})),r.createElement("div",{className:z(Ve.brown,K()({},Ve.selected,n(I.Brown)))},Ze,r.createElement(Ie,{promotions:e,color:I.Brown})),r.createElement("div",{className:z(Ve.black,K()({},Ve.selected,n(I.Black)))},Ke,r.createElement(Ie,{promotions:e,color:I.Black})))}}]),t}(r.PureComponent);function Xe(e){var t=e.reduce(function(e,t){var n=Me.parseZone(t.start,Me.ISO_8601,!0).isoWeekday();return e[n]?e[n].y+=t.durationHours:e[n]={x:Ye[n-1],y:t.durationHours,week:n},e},$e());return Object.keys(t).map(function(e){return t[parseInt(e,10)]})}var Ye=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],$e=function(){return{1:{x:Ye[0],y:0,week:1},2:{x:Ye[1],y:0,week:2},3:{x:Ye[2],y:0,week:3},4:{x:Ye[3],y:0,week:4},5:{x:Ye[4],y:0,week:5},6:{x:Ye[5],y:0,week:6},7:{x:Ye[6],y:0,week:7}}},et=Object(le.createSelector)(de,function(e){return{morning:Xe(e.filter(function(e){return e.classTime===G.Morning})),afternoon:Xe(e.filter(function(e){return e.classTime===G.Afternoon})),evening:Xe(e.filter(function(e){return e.classTime===G.Evening}))}}),tt=["#e67e22","#9b59b6","#34495e"],nt=r.createElement("h2",null,"Day of Week"),rt=function(e){function t(){return b()(this,t),x()(this,O()(t).apply(this,arguments))}return _()(t,e),j()(t,[{key:"render",value:function(){var e=this.props.stats,t=Object.assign({},Ee,{chart:{type:"column"},xAxis:{type:void 0,categories:Ye},yAxis:{title:{text:"Hours"},stackLabels:{enabled:!0,format:"{total}hrs"}},tooltip:{valueSuffix:"hrs",shared:!0},plotOptions:{column:{stacking:"normal"}},series:[{name:"Morning",data:e.morning.map(function(e){return e.y}),color:tt[0]},{name:"Afternoon",data:e.afternoon.map(function(e){return e.y}),color:tt[1]},{name:"Evening",data:e.evening.map(function(e){return e.y}),color:tt[2]}]});return r.createElement("div",{className:ye.root},nt,r.createElement("div",{className:ye.graphs},r.createElement("div",{className:ye.lineFull},r.createElement(ve.a,{highcharts:he,options:t}))))}}]),t}(r.PureComponent),at=["#3498db","#2ecc71"],st=r.createElement("h3",null,"Weekly hours over Time"),ot=function(e){function t(){return b()(this,t),x()(this,O()(t).apply(this,arguments))}return _()(t,e),j()(t,[{key:"render",value:function(){var e=this.props,t=e.stats,n=e.statsSma,a=Object.assign({},Ee,{series:[{name:"Weekly Hours",color:at[0],data:t,type:"column"},{name:"Moving Average",color:at[1],data:n,type:"spline"}],plotOptions:{spline:{lineWidth:1.5,marker:{enabled:!1},dashStyle:"dash"}},yAxis:{title:{text:"Hours"}},legend:{enabled:!1},tooltip:{formatter:function(){return'<span style="font-size: 10px">'.concat(this.point.options.week,"</span><br/>")+'<span style="color:'.concat(this.color,'">●</span>')+" ".concat(this.series.name,": <b>").concat(this.y,"hrs</b><br/>")}}});return r.createElement("div",{className:ye.root},st,r.createElement("div",{className:ye.graphs},r.createElement("div",{className:ye.lineFull},r.createElement(ve.a,{highcharts:he,options:a}))))}}]),t}(r.PureComponent),it=n(297),lt=r.createElement("span",null," | "),ct=r.createElement("a",{href:"https://github.com/azizj1/bjj-analytics",target:"_blank"},"Source Code");var ut=n(67),dt=n(298),mt=n(16),pt=n(299),ht=n.n(pt),ft=n(98),vt=function(e){function t(){var e;return b()(this,t),(e=x()(this,O()(t).apply(this,arguments))).handleEnter=function(t){t.style.overflow="hidden",e.openHeight=t.clientHeight,t.style.height="0",t.clientHeight},e.handleEntering=function(t){t.style.height=e.openHeight+"px"},e.handleEntered=function(e){e.style.height="",e.style.overflow=""},e.handleExit=function(e){e.style.height="auto",e.style.height=e.clientHeight+"px",e.clientHeight},e.handleExiting=function(e){e.style.height="0"},e.handleExited=function(e){e.style.height=""},e}return _()(t,e),j()(t,[{key:"render",value:function(){var e=this.props,t=e.collapsed,n=e.element,a=e.className,s=g.b(e,["collapsed","element","className"]),o=z(ft.root,t?ft.collapsed:ft.expanded,a);return r.createElement(ht.a,{in:!t,timeout:600,onEnter:this.handleEnter,onEntered:this.handleEntered,onEntering:this.handleEntering,onExit:this.handleExit,onExited:this.handleExited,onExiting:this.handleExiting},r.createElement(n,Object.assign({},s,{className:o})))}}]),t}(r.PureComponent);vt.defaultProps={element:"div"};n(289);var yt=r.createElement("path",{d:"M10,17L15,12L10,7V17Z"});var gt=r.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"});var Et=r.createElement(function(e){var t=e.size;return r.createElement("svg",{className:"sicon",viewBox:"0 0 24 24",preserveAspectRatio:"xMinYMin meet",version:"1.1",width:t,height:t},yt)},{size:"1.25em"}),bt=r.createElement(function(e){var t=e.size;return r.createElement("svg",{className:"sicon",viewBox:"0 0 24 24",preserveAspectRatio:"xMinYMin meet",version:"1.1",width:t,height:t},gt)},{size:"1.25em"}),kt=function(e){function t(e){var n;return b()(this,t),(n=x()(this,O()(t).call(this,e))).handleExpandClick=function(){!n.state.isOpen&&n.props.onExpand&&n.props.onExpand(),n.props.expandableContent&&n.setState(function(e){return{isOpen:!e.isOpen}})},n.state={isOpen:!1},n}return _()(t,e),j()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.className,s=t.href,o=t.isHeader,i=t.expandableContent,l=t.pivotLabel,c=g.b(t,["children","className","href","isHeader","expandableContent","pivotLabel"]);delete c.onExpand;var u=z(mt.row,a,i&&mt.isExpandable,s&&mt.hasLink,this.state.isOpen&&mt.isOpen,o&&mt.isHeader);return r.createElement(wt.Consumer,null,function(t){var a=t.expandableContentLabel,o=t.linkLabel;return r.createElement("div",Q()({className:u},c),r.createElement("div",{className:mt.mainRow},l&&r.createElement("div",{className:mt.pivotLabel},l),n,i&&a&&r.createElement("div",{className:mt.expandableContentButton,onClick:e.handleExpandClick},Et,r.createElement("span",{className:mt.expandableContentLabel},a)),s&&o&&r.createElement("a",{className:mt.link,href:s},r.createElement("span",{className:mt.linkLabel},o),bt)),e.renderExpandableContent())})}},{key:"renderExpandableContent",value:function(){var e=this.props.expandableContent,t=this.state.isOpen;return r.createElement(vt,{className:mt.subRow,collapsed:!t},r.createElement("div",null,e))}}]),t}(r.PureComponent),jt=function(e){function t(){return b()(this,t),x()(this,O()(t).apply(this,arguments))}return _()(t,e),j()(t,[{key:"render",value:function(){var e=this.props,t=e.alignment,n=e.children,a=e.className,s=e.hideOnPivot,o=e.label,i=e.widthWeighting,l=g.b(e,["alignment","children","className","hideOnPivot","label","widthWeighting"]),c=z(mt.cell,a,s&&mt.hideOnPivot,t&&mt[t]);return r.createElement("div",Q()({className:c,style:{flexGrow:i,msFlexPositive:i}},l),o&&r.createElement("div",{className:mt.cellLabel},o),r.createElement("div",{className:mt.cellContent},n))}}]),t}(r.PureComponent);jt.defaultProps={widthWeighting:1};var wt=r.createContext({expandableContentLabel:"",linkLabel:""}),xt=function(e){function t(){return b()(this,t),x()(this,O()(t).apply(this,arguments))}return _()(t,e),j()(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.expandableContentLabel,s=e.linkLabel,o=g.b(e,["children","className","expandableContentLabel","linkLabel"]),i=z("c-data-grid",n,null!=a&&mt.hasExpandableContent,null!=s&&mt.hasLinks);return r.createElement("div",Q()({className:i},o),r.createElement(wt.Provider,{value:{expandableContentLabel:a,linkLabel:s}},t),t)}}]),t}(r.PureComponent),Nt=n(130),Ot=r.createElement("h2",null,"Classes"),Tt=r.createElement(kt,{isHeader:!0},r.createElement(jt,{widthWeighting:2,hideOnPivot:!0},"When"),r.createElement(jt,{widthWeighting:2},"Name"),r.createElement(jt,null,"Duration"),r.createElement(jt,null,"Taught By"),r.createElement(jt,{widthWeighting:5},"Notes"));function _t(e){var t=e.classes;return r.createElement("div",{className:ye.root},Ot,r.createElement(xt,{expandableContentLabel:"Detailed Notes"},Tt,t.filter(function(e){return!e.isAllDay}).reverse().map(function(e,t){return r.createElement(kt,{key:t,pivotLabel:ke(e.start),expandableContent:function(e){var t={__html:null};null!=e&&""!==e.trim()&&(t=dt(e,{sanitize:!0}));return r.createElement("div",{className:Nt.notesCell},r.createElement("div",{className:Nt.notes,dangerouslySetInnerHTML:{__html:t}}))}(e.notes)},r.createElement(jt,{label:"When",widthWeighting:2,hideOnPivot:!0},ke(e.start)),r.createElement(jt,{label:"Name",widthWeighting:2},e.title),r.createElement(jt,{label:"Duration"},e.durationHours,"hrs"),r.createElement(jt,{label:"Taught By"},e.taughtBy),r.createElement(jt,{widthWeighting:5},e.notesTldr))})))}var Ct={getBjjStats:function(){var e=this;return function(t){return g.a(e,void 0,void 0,y.a.mark(function e(){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_BJJ_STATS_REQUEST",payload:void 0}),e.prev=1,e.next=4,$.getBjjStats();case 4:n=e.sent,t(te(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(ee(e.t0,"GET_BJJ_STATS_FAILURE"));case 11:case"end":return e.stop()}},e,this,[[1,8]])}))}}},Ht=[{type:J.Header},{type:J.Overview,selected:!0},{type:J.WeeklyHours,name:"Weekly Hours"},{type:J.Promotions},{type:J.ClassType,name:"Gi vs. NoGi",divider:!0},{type:J.ClassTime,name:"Time of Day"},{type:J.DayOfWeek,name:"Day of Week",divider:!0}],Mt=r.createElement("h1",null,"Jiu-Jitsu Analysis"),St=r.createElement(function(){return r.createElement("div",{className:ne.spinner},r.createElement("div",{className:ne.doubleBounce1}),r.createElement("div",{className:ne.doubleBounce2}))},null),Pt=r.createElement(function(){return r.createElement("div",{className:it.root},"Created by Aziz Javed © 2018",lt,ct)},null),At=function(e){function t(e){var n;return b()(this,t),(n=x()(this,O()(t).call(this,e))).toggleMenu=function(){return n.setState(function(e){return{menuVisible:!e.menuVisible}})},n.handleContentClick=function(){return n.state.menuVisible&&n.toggleMenu()},n.scrollTo=function(e){switch(e){case J.Header:window.scrollTo(0,a.findDOMNode(n.headerRef.current).offsetTop-50);break;case J.Overview:window.scrollTo(0,a.findDOMNode(n.overviewRef.current).offsetTop-50);break;case J.WeeklyHours:window.scrollTo(0,a.findDOMNode(n.weeklyHoursRef.current).offsetTop-50);break;case J.Promotions:window.scrollTo(0,a.findDOMNode(n.promotionRef.current).offsetTop-50);break;case J.ClassType:window.scrollTo(0,a.findDOMNode(n.classTypeRef.current).offsetTop-50);break;case J.ClassTime:window.scrollTo(0,a.findDOMNode(n.classTimeRef.current).offsetTop-50);break;case J.DayOfWeek:window.scrollTo(0,a.findDOMNode(n.dayOfWeekRef.current).offsetTop-50)}},n.state={menuVisible:!1,sections:Ht},n.headerRef=r.createRef(),n.overviewRef=r.createRef(),n.weeklyHoursRef=r.createRef(),n.promotionRef=r.createRef(),n.classTypeRef=r.createRef(),n.classTimeRef=r.createRef(),n.dayOfWeekRef=r.createRef(),n}return _()(t,e),j()(t,[{key:"componentWillMount",value:function(){this.props.getBjjStats()}},{key:"render",value:function(){var e=this.props,t=e.loading,n=e.hasError,a=e.errorMessage,s=this.state,o=s.menuVisible,i=s.sections;return r.createElement("div",{className:z(ut.root,K()({},ut.active,o))},r.createElement(ie,Q()({menuVisible:o,sections:i},{scrollTo:this.scrollTo,toggleVisibility:this.toggleMenu})),r.createElement("div",{onClick:this.handleContentClick},r.createElement("div",{className:ut.header,ref:this.headerRef},Mt,r.createElement("h2",null,this.currentRank())),r.createElement("div",{className:ut.content},t&&r.createElement("div",{className:ut.loader},St),n&&r.createElement(ae,{type:"danger",message:a,className:ut.error}),!t&&!n&&this.renderGraphs(),!t&&!n&&this.renderTable(),!t&&!n&&Pt)))}},{key:"renderGraphs",value:function(){if(null==this.props.stats)return null;var e=this.props,t=e.bjjClassTypeSeries,n=e.bjjClassTimeSeries,a=e.weeklyHours,s=e.weeklyHoursSma,o=e.dayOfWeekAgg,i=e.stats,l=i.typeBreakdown,c=l.giHours,u=l.noGiHours,d=i.timeBreakdown,m=d.morningHours,p=d.afternoonHours,h=d.eveningHours,f=i.promotions;return[r.createElement(De,Q()({key:"0"},{stats:i},{ref:this.overviewRef})),r.createElement(ot,{key:"1",stats:a,statsSma:s,ref:this.weeklyHoursRef}),r.createElement(qe,{promotions:f,key:"2",ref:this.promotionRef}),r.createElement(Oe,{key:"3",stats:t,totalGiHours:c,totalNoGiHours:u,ref:this.classTypeRef}),r.createElement(He,{key:"4",stats:n,totalMorningHours:m,totalAfternoonHours:p,totalEveningHours:h,ref:this.classTimeRef}),r.createElement(rt,{key:"5",stats:o,ref:this.dayOfWeekRef})]}},{key:"renderTable",value:function(){if(null==this.props.stats)return null;var e=this.props.stats.classes;return r.createElement(_t,{classes:e})}},{key:"currentRank",value:function(){if(null==this.props.stats)return"...";var e=this.props.stats.promotions;if(e.length<=1)return"White Belt";var t=e[e.length-2];return"".concat(I[t.color]," Belt ").concat(Array(t.stripes+1).join("I"))}}]),t}(r.PureComponent),Bt=Object(s.b)(function(e){var t=e.bjj,n=t.stats,r=t.loading,a=t.error,s=a.message;return{stats:n,loading:r,hasError:a.hasError,bjjClassTypeSeries:pe(e),bjjClassTimeSeries:Te(e),weeklyHours:Be(e),weeklyHoursSma:Le(e),dayOfWeekAgg:et(e),errorMessage:s}},Ct)(At),Lt=(n(552),function(e){var t=[u.a,R],n=(0,c.d)(c.a.apply(void 0,t));return Object(c.e)(f,e,n)}());a.render(r.createElement(s.a,{store:Lt},r.createElement(o.a,null,r.createElement(i.a,null,r.createElement(l.a,{exact:!0,path:"/",component:Bt}),r.createElement(l.a,{exact:!0,path:"/bjj",component:Bt}),r.createElement(l.a,{component:function(){return r.createElement("div",{className:W.error},r.createElement("div",{className:W.container},r.createElement("div",{className:W.clip},r.createElement("div",{className:W.shadow},r.createElement("span",{className:z(W.digit,W.thirdDigit)},"4"))),r.createElement("div",{className:W.clip},r.createElement("div",{className:W.shadow},r.createElement("span",{className:z(W.digit,W.secondDigit)},"0"))),r.createElement("div",{className:W.clip},r.createElement("div",{className:W.shadow},r.createElement("span",{className:z(W.digit,W.firstDigit)},"4"))),r.createElement("div",{className:W.msg},"OH!",r.createElement("span",{className:W.triangle}))),D)}})))),document.getElementById("root"))},67:function(e,t,n){e.exports={root:"_21eW",content:"_1Ne0",header:"_22QN",loader:"_1eE5",error:"_3r0G",active:"_2Qsh"}},76:function(e,t,n){e.exports={menu:"_2yZd",active:"FxE0",menuLink:"_2I-y"}},96:function(e,t,n){e.exports={spinner:"folV",doubleBounce1:"_1or5",doubleBounce2:"_2X9T","sk-bounce":"_13t5"}},97:function(e,t,n){e.exports={alert:"_3jhf",dismiss:"_3_M8","alert-success":"_2MkZ","alert-link":"xEtu","alert-info":"_2hq_","alert-warning":"_2Xlr","alert-danger":"f-oV","alert-mini-danger":"_1r3Z"}},98:function(e,t,n){e.exports={root:"ZbC6",collapsed:"SbSc",expanded:"_1_G6"}}});