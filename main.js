!function(e){function t(t){for(var r,i,c=t[0],o=t[1],l=t[2],m=0,d=[];m<c.length;m++)i=c[m],a[i]&&d.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(u&&u(t);d.length;)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={1:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;s.push([74,2]),n()}({12:function(e,t,n){e.exports={root:"_21eW",content:"_1Ne0",header:"_22QN",loader:"_1eE5",active:"_2Qsh"}},18:function(e,t,n){e.exports={menu:"_2yZd",active:"FxE0",menuLink:"_2I-y"}},22:function(e,t,n){e.exports={spinner:"folV",doubleBounce1:"_1or5",doubleBounce2:"_2X9T","sk-bounce":"_13t5"}},23:function(e,t,n){e.exports={alert:"_3jhf",dismiss:"_3_M8","alert-success":"_2MkZ","alert-link":"xEtu","alert-info":"_2hq_","alert-warning":"_2Xlr","alert-danger":"f-oV","alert-mini-danger":"_1r3Z"}},3:function(e,t,n){e.exports={error:"_2yyZ",clip:"MKxW",shadow:"_397p",digit:"_21jO",msg:"_2czz",triangle:"_3Dm3",container:"_1lDU"}},71:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(31),s=n(21),i=n(76),c=n(77),o=n(78),l=n(11),u=n(35);function m(e){return e}var d={hasError:!1,code:null,message:null,details:null,time:null},p={stats:null,loading:!1,error:d};var f,h=Object(l.c)({bjj:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BJJ_STATS_REQUEST":return Object.assign({},e,{loading:!0});case"GET_BJJ_STATS_SUCCESS":return Object.assign({},e,{stats:t.payload.stats,loading:!1,error:Object.assign({},d)});case"GET_BJJ_STATS_FAILURE":return Object.assign({},e,{loading:!1,error:Object.assign({},t.payload)});default:return m(t),e}}}),v=n(5),E=n.n(v),g=n(8),y=n(9),b=n.n(y),N=n(10),_=n.n(N),k=n(15),w=n.n(k),j=n(13),x=n.n(j),S=n(16),T=n.n(S),O=n(19),A=n.n(O),B=n(36),J=function(e){function t(e,n){var r;return b()(this,t),r=w()(this,x()(t).call(this,e)),Object.setPrototypeOf(A()(A()(r)),t.prototype),r.response=n,r}return T()(t,e),_()(t,[{key:"getBody",value:function(){return g.a(this,void 0,void 0,E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.response.json();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}))}}]),t}(n.n(B)()(Error));!function(e){e[e.Unknown=0]="Unknown"}(f||(f={}));function U(e){return e&&e.type&&e.type.indexOf("UNHANDLED_API_ERROR")>=0}function D(e){return e&&e.type&&e.type.indexOf("UNHANDLED_CLIENT_ERROR")>=0}function M(e){return g.a(this,void 0,void 0,E.a.mark(function t(){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getBody();case 2:if(!(n=t.sent)||!n.message){t.next=6;break}return t.abrupt("return",{code:f.Unknown,details:n.message});case 6:return t.abrupt("return",{code:f.Unknown,details:null});case 7:case"end":return t.stop()}},t,this)}))}function P(e,t,n){return{type:e,payload:{code:t,details:n,time:new Date,message:function(e){switch(e){case f.Unknown:return"Something went wrong. Try again later.";default:return m(e),"Something went wrong. Try again later."}}(t),hasError:!0}}}var R=function(e){var t=e.dispatch;return function(e){return function(n){return g.a(void 0,void 0,void 0,E.a.mark(function r(){var a,s,i,c,o,l,u;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(a=e(n),!U(n)){r.next=16;break}if(s=n.payload,i=s.err,c=s.handledAction,!(n.payload.err instanceof J)){r.next=13;break}return r.next=7,M(i);case 7:o=r.sent,l=o.code,u=o.details,t(P(c,l,u)),r.next=14;break;case 13:t(P(c,f.Unknown));case 14:r.next=17;break;case 16:D(n)&&t(P(n.payload.handledAction,n.payload.code));case 17:return r.abrupt("return",a);case 18:case"end":return r.stop()}},r,this)}))}}};var C=n(3),V=n(7),G=r.createElement("h2",null,"Sorry! Page not found");var L=n(14),I=n.n(L),z=n(37),H=n(38),Q=n.n(H);n(17);function Z(e){if(e.status>=200&&e.status<300)return e;throw new J("".concat(e.status,": ").concat(e.statusText),e)}function F(e){return new Headers(Object.assign({"Content-Type":"application/json",Accept:"application/json"},null!=e?{Authorization:"".concat(e)}:{}))}function W(e){return e.json()}var X=new(function(){function e(){b()(this,e)}return _()(e,[{key:"getBjjStats",value:function(){return g.a(this,void 0,void 0,E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://27shtszeu6.execute-api.us-east-1.amazonaws.com/dev/calendars","/fitness/bjj"),{headers:F()}).then(Z).then(W);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}))}}]),e}());function q(e,t){return{type:"UNHANDLED_API_ERROR",payload:{err:e,handledAction:t}}}function K(e){return{type:"GET_BJJ_STATS_SUCCESS",payload:{stats:e}}}var Y=n(22);var $=n(23);function ee(e){var t=e.type,n=e.message,a=e.onDismiss,s=e.className;return r.createElement("div",{className:V($.alert,$["alert-".concat(t)],s)},n,a&&r.createElement("span",{className:$.dismiss,onClick:a},"Dismiss"))}var te=n(18),ne=r.createElement("span",null),re=r.createElement("div",{className:"pure-menu"},r.createElement("a",{className:"pure-menu-heading",href:"#"},"Jiu-Jitsu"),r.createElement("ul",{className:"pure-menu-list"},r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:"#",className:"pure-menu-link"},"Overview")),r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:"#",className:"pure-menu-link"},"Promotions")),r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:"#",className:"pure-menu-link menu-item-divided"},"Time Series")),r.createElement("li",{className:"pure-menu-item pure-menu-selected"},r.createElement("a",{href:"#",className:"pure-menu-link"},"Gi vs. NoGi")),r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:"#",className:"pure-menu-link"},"Time of day")),r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:"#",className:"pure-menu-link"},"Type of class")),r.createElement("li",{className:"pure-menu-item"},r.createElement("a",{href:"#",className:"pure-menu-link menu-item-divided"},"Day of week")))),ae=function(e){function t(){return b()(this,t),w()(this,x()(t).apply(this,arguments))}return T()(t,e),_()(t,[{key:"render",value:function(){var e=this.props,t=e.menuVisible,n=e.toggleVisibility;return[r.createElement("a",{href:"#",className:V(te.menuLink,I()({},te.active,t)),key:"1",onClick:n},ne),r.createElement("div",{key:"2",className:V(te.menu,I()({},te.active,t))},re)]}}]),t}(r.PureComponent),se=n(12);var ie={getBjjStats:function(){var e=this;return function(t){return g.a(e,void 0,void 0,E.a.mark(function e(){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_BJJ_STATS_REQUEST",payload:void 0}),e.prev=1,e.next=4,X.getBjjStats();case 4:n=e.sent,t(K(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(q(e.t0,"GET_BJJ_STATS_FAILURE"));case 11:case"end":return e.stop()}},e,this,[[1,8]])}))}}},ce=r.createElement("h2",null,"Breakdown"),oe=r.createElement(Q.a,{highcharts:z,options:{title:{text:"My chart"},series:[{data:[1,2,3]}],credits:{enabled:!1}}}),le=r.createElement("h1",null,"Jiu-Jitsu Analysis"),ue=r.createElement("h2",null,"My journey so far"),me=r.createElement(function(){return r.createElement("div",{className:Y.spinner},r.createElement("div",{className:Y.doubleBounce1}),r.createElement("div",{className:Y.doubleBounce2}))},null),de=function(e){function t(e){var n;return b()(this,t),(n=w()(this,x()(t).call(this,e))).toggleMenu=function(){console.log("toggling.. currently at ".concat(n.state.menuVisible)),n.setState(function(e){return{menuVisible:!e.menuVisible}})},n.state={menuVisible:!1},n}return T()(t,e),_()(t,[{key:"componentWillMount",value:function(){this.props.getBjjStats()}},{key:"render",value:function(){var e=this.props,t=e.loading,n=e.hasError,a=this.state.menuVisible;return t?this.loader():n?this.error():r.createElement("div",{className:V(se.root,I()({},se.active,a))},r.createElement(ae,{menuVisible:a,toggleVisibility:this.toggleMenu}),r.createElement("div",{onClick:this.toggleMenu},this.header(),r.createElement("div",{className:se.content},ce,oe)))}},{key:"header",value:function(){return r.createElement("div",{className:se.header},le,ue)}},{key:"loader",value:function(){return r.createElement("div",{className:se.root},this.header(),r.createElement("div",{className:se.loader},me))}},{key:"error",value:function(){var e=this.props.errorMessage;return r.createElement("div",{className:se.root},this.header(),r.createElement(ee,{type:"danger",message:e}))}}]),t}(r.PureComponent),pe=Object(s.b)(function(e){var t=e.bjj,n=t.stats,r=t.loading,a=t.error,s=a.message;return{stats:n,loading:r,hasError:a.hasError,errorMessage:s}},ie)(de),fe=(n(71),function(e){var t=[u.a,R],n=(0,l.d)(l.a.apply(void 0,t));return Object(l.e)(h,e,n)}());a.render(r.createElement(s.a,{store:fe},r.createElement(i.a,null,r.createElement(c.a,null,r.createElement(o.a,{exact:!0,path:"/bjj",component:pe}),r.createElement(o.a,{component:function(){return r.createElement("div",{className:C.error},r.createElement("div",{className:C.container},r.createElement("div",{className:C.clip},r.createElement("div",{className:C.shadow},r.createElement("span",{className:V(C.digit,C.thirdDigit)},"4"))),r.createElement("div",{className:C.clip},r.createElement("div",{className:C.shadow},r.createElement("span",{className:V(C.digit,C.secondDigit)},"0"))),r.createElement("div",{className:C.clip},r.createElement("div",{className:C.shadow},r.createElement("span",{className:V(C.digit,C.firstDigit)},"4"))),r.createElement("div",{className:C.msg},"OH!",r.createElement("span",{className:C.triangle}))),G)}})))),document.getElementById("root"))}});