!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function n(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=u(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw a}}}}function o(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */o=function(){return t};var t={},r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(L){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),c=new S(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return E()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=k(c,r);if(i){if(i===d)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,c),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=s;var d={};function h(){}function g(){}function p(){}var v={};l(v,c,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(O([])));y&&y!==r&&n.call(y,c)&&(v=y);var w=p.prototype=h.prototype=Object.create(v);function x(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(t,r){function o(a,c,i,u){var l=f(t[a],t,c);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==e(d)&&n.call(d,"__await")?r.resolve(d.__await).then((function(e){o("next",e,i,u)}),(function(e){o("throw",e,i,u)})):r.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return o("throw",e,i,u)}))}u(l.arg)}var a;this._invoke=function(e,t){function n(){return new r((function(r,n){o(e,t,r,n)}))}return a=a?a.then(n,n):n()}}function k(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function O(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return g.prototype=p,l(w,"constructor",p),l(p,"constructor",g),g.displayName=l(p,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},x(b.prototype),l(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new b(s(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},x(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var i=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(i&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=e,c.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function a(e,t,r,n,o,a,c){try{var i=e[a](c),u=i.value}catch(l){return void r(l)}i.done?t(u):Promise.resolve(u).then(n,o)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var c=e.apply(t,r);function i(e){a(c,n,o,i,u,"next",e)}function u(e){a(c,n,o,i,u,"throw",e)}i(void 0)}))}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(u){i=!0,o=u}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./index-legacy.19d63a0e.js","./Paginator-legacy.84e501f9.js"],(function(e){"use strict";var t,a,u,l,f,d,h,g,p,v,m,y,w,x,b,k,$,_,S,O,E,L,j,P,A,C,F,T,z,I,N,R,G,B,D,W,M,Y,q;return{setters:[function(e){t=e.ah,a=e.a,u=e.aW,l=e.b9,f=e.m,d=e.h,h=e.ae,g=e.ci,p=e.bP,v=e.S,m=e.aC,y=e.cn,w=e.co,x=e.b5,b=e.bQ,k=e.d9,$=e.C,_=e.ba,S=e.n,O=e.az,E=e.a4,L=e.d1,j=e.db,P=e.G,A=e.dc,C=e.cl,F=e.k,T=e.e,z=e.x,I=e.I,N=e.E,R=e.t,G=e.cq,B=e.aL,D=e.ca,W=e.dd,M=e.cb,Y=e.ai},function(e){q=e.P}],execute:function(){var K,Q;!function(e){e[e.Pending=0]="Pending",e[e.Running=1]="Running",e[e.Succeeded=2]="Succeeded",e[e.Canceling=3]="Canceling",e[e.Canceled=4]="Canceled",e[e.Errored=5]="Errored",e[e.Failing=6]="Failing",e[e.Failed=7]="Failed",e[e.WaitingRetry=8]="WaitingRetry",e[e.BeforeRetry=9]="BeforeRetry"}(Q||(Q={}));var U=(s(K={},Q.Failed,"danger"),s(K,Q.Succeeded,"success"),s(K,Q.Canceled,"neutral"),K),X=function(e){if(e.role<0)return null;var t=["info","neutral","accent"];return d(C,{get colorScheme(){return t[e.role]},css:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},get children(){return e.name}})},H=function(e){var t=a();return d(C,{get colorScheme(){var t;return null!==(t=U[e.state])&&void 0!==t?t:"info"},get children(){return t("tasks.state.".concat(e.state))}})},J=[{name:"name",textAlign:"left",w:2===t().role?"calc(100% - 660px)":"calc(100% - 560px)"},{name:"creator",textAlign:"center",w:2===t().role?"100px":"0"},{name:"state",textAlign:"center",w:"100px"},{name:"progress",textAlign:"left",w:"140px"},{name:"speed",textAlign:"center",w:"100px"},{name:"operation",textAlign:"right",w:"220px"}],V=function(e){return Math.floor(e).toString().padStart(2,"0")},Z=function(e){var r=a(),n="undone"===e.done?"cancel":"delete",s="done"===e.done&&e.state===Q.Failed,C=i(u((function(){return l.post("/task/".concat(e.type,"/").concat(n,"?tid=").concat(e.id))})),2),F=C[0],T=C[1],z=i(u((function(){return l.post("/task/".concat(e.type,"/retry?tid=").concat(e.id))})),2),I=z[0],N=z[1],R=i(f(!1),2),G=R[0],B=R[1],D=e.name.match(e.nameAnalyzer.regex),W=null===D?e.name:e.nameAnalyzer.title(D),M=null===e.start_time?-1:new Date(e.start_time).getTime(),Y=null===e.end_time?(new Date).getTime():new Date(e.end_time).getTime(),q="-",K=function(e,t){var r=t/e,n="bytes/s";return r>1024&&(r/=1024,n="KB/s"),r>1024&&(r/=1024,n="MB/s"),r>1024&&(r/=1024,n="GB/s"),"".concat(r.toFixed(2)," ").concat(n)};if(e.done){if(e.start_time!==e.end_time&&e.progress>0&&-1!==M){var U=(Y-M)/1e3,Z=e.total_bytes*e.progress/100;q=K(U,Z)}}else if(void 0!==e.prevProgress&&void 0!==e.prevFetchTime){var ee=(e.curFetchTime-e.prevFetchTime)/1e3,te=(e.progress-e.prevProgress)*e.total_bytes/100;q=K(ee,te)}return d(v,{get when(){return!G()},get children(){return[d(h,{w:"$full",p:"$2",get children(){return[d(h,{get w(){return J[0].w},spacing:"$1",get children(){return[d(g,{"on:click":function(e){e.stopPropagation()},get checked(){return e.local.selected},onChange:function(t){e.setLocal({selected:t.target.checked,expanded:e.local.expanded})}}),d(p,{size:"sm",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:W})]}}),d(v,{get when(){return 2===t().role},get children(){return d(m,{get w(){return J[1].w},get children(){return d(X,{get name(){return e.creator},get role(){return e.creator_role}})}})}}),d(m,{get w(){return J[2].w},get children(){return d(H,{get state(){return e.state}})}}),d(y,{get w(){return J[3].w},trackColor:"$info3",rounded:"$full",size:"sm",get value(){return e.progress},mr:"$1",get children(){return d(w,{color:"$info8",rounded:"$md"})}}),d(m,{get w(){return J[1].w},get children(){return d(x,{size:"sm",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:q})}}),d(b,{get w(){return J[5].w},gap:"$1",get children(){return[d(k,{}),d(v,{get when(){return e.canRetry},get children(){return d($,{size:"sm",disabled:!s,display:s?"block":"none",get loading(){return I()},onClick:(e=c(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,_(t,(function(){S.info(r("tasks.retry")),B(!0)}));case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)}),get children(){return r("tasks.retry")}});var e}}),d($,{size:"sm",colorScheme:"danger",get loading(){return F()},onClick:(t=c(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,_(t,(function(){S.success(r("global.delete_success")),B(!0)}));case 4:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)}),get children(){return r("global.".concat(n))}}),d($,{size:"sm",colorScheme:"neutral",onClick:function(){e.setLocal({selected:e.local.selected,expanded:!e.local.expanded})},get children(){return O((function(){return!!e.local.expanded}),!0)()?r("tasks.fold"):r("tasks.expand")}})];var t}})]}}),d(v,{get when(){return e.local.expanded},get children(){return d(E,{css:{wordBreak:"break-all",fontSize:"0.8em"},w:"$full",pl:"$2",pr:"$2",get children(){return[d(L,{templateColumns:"min-content 1fr",w:"$full",columnGap:"$4",mb:"$2",get children(){return[d(v,{when:-1!==M,get children(){return[d(j,{color:"$neutral9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return r("tasks.attr.time_elapsed")}}),d(j,{color:"$neutral9",get children(){return t=(e=Y-M)/1e3%60,r=e/1e3/60%60,"".concat(V(e/1e3/3600),":").concat(V(r),":").concat(V(t));var e,t,r}})]}}),d(v,{when:null!==D,get children(){return d(P,{get each(){return Object.entries(e.nameAnalyzer.attrs)},children:function(e){return[d(j,{color:"$neutral9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return e[0]}}),d(j,{color:"$neutral9",get children(){return e[1](D)}})]}})}}),d(j,{color:"$neutral9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return r("tasks.attr.status")}}),d(j,{color:"$neutral9",get children(){return e.status}}),d(v,{get when(){return e.error},get children(){return[d(j,{color:"$danger9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return r("tasks.attr.err")}}),d(j,{color:"$danger9",get children(){return e.error}})]}})]}}),d(A,{})]}})}})]}})},ee=function(e){var s=a(),m=i(u((function(){return l.get("/task/".concat(e.type,"/").concat(e.done))})),2),y=m[0],w=m[1],L=i(f([]),2),j=L[0],P=L[1],A=i(f("name"),2),C=A[0],G=A[1],B=i(f(!1),2),D=B[0],W=B[1],M={name:function(e,t){return e.name>t.name?1:-1},creator:function(e,t){return e.creator===t.creator?e.id>t.id?1:-1:e.creator>t.creator?1:-1},state:function(e,t){return e.state===t.state?e.id>t.id?1:-1:e.state>t.state?1:-1},progress:function(e,t){return e.progress===t.progress?e.id>t.id?1:-1:e.progress<t.progress?1:-1}},Y=F((function(){return function(e,t){return(D()?-1:1)*M[C()](e,t)}})),K=function(){var e=c(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,_(t,(function(e){var t,o,a=(new Date).getTime(),c={},i={},u={},l={},s={},f=n(j());try{for(f.s();!(o=f.n()).done;){var d=o.value;c[d.id]=d.curFetchTime,i[d.id]=d.prevFetchTime,u[d.id]=d.progress,l[d.id]=d.prevProgress,s[d.id]=d.local}}catch(h){f.e(h)}finally{f.f()}P(null!==(t=null==e?void 0:e.map((function(e){var t,n,o;e.progress===u[e.id]?(n=i[e.id],o=l[e.id]):(n=c[e.id],o=u[e.id]);var f=null!==(t=s[e.id])&&void 0!==t?t:{selected:!1,expanded:!1};return r(r({},e),{},{curFetchTime:a,prevFetchTime:n,prevProgress:o,local:f})})).sort(Y()))&&void 0!==t?t:[])}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(K(),"undone"===e.done){var Q=setInterval(K,2e3);T((function(){return clearInterval(Q)}))}var U=i(u((function(){return l.post("/task/".concat(e.type,"/clear_done"))})),2),X=U[0],H=U[1],V=i(u((function(){return l.post("/task/".concat(e.type,"/clear_succeeded"))})),2),ee=V[0],te=V[1],re=i(u((function(){return l.post("/task/".concat(e.type,"/retry_failed"))})),2),ne=re[0],oe=re[1],ae=i(f(""),2),ce=ae[0],ie=ae[1],ue=i(f(new RegExp("")),2),le=ue[0],se=ue[1],fe=i(f(!1),2),de=fe[0],he=fe[1];z((function(){try{se(new RegExp(ce())),he(!1)}catch(e){he(!0)}}));var ge=i(f(2!==t().role),2),pe=ge[0],ve=ge[1],me=F((function(){var e=le(),r=pe();return function(n){return e.test(n.name)&&(!r||n.creator===t().username)}})),ye=F((function(){return j().filter(me())})),we=F((function(){return ye().map((function(e){return e.local.selected})).every(Boolean)})),xe=F((function(){return ye().map((function(e){return e.local.selected})).some(Boolean)&&!we()})),be=F((function(){return ye().map((function(e){return e.local.expanded})).every(Boolean)})),ke=function(){return ye().filter((function(e){return e.local.selected})).map((function(e){return e.id}))},$e=i(u((function(){return l.post("/task/".concat(e.type,"/retry_some"),ke())})),2),_e=$e[0],Se=$e[1],Oe=i(u((function(){return l.post("/task/".concat(e.type,"/").concat(Fe,"_some"),ke())})),2),Ee=Oe[0],Le=Oe[1],je=function(e){Object.entries(e).forEach((function(e){var t=i(e,2),r=t[0],n=t[1];S.error("".concat(r,": ").concat(n))}))},Pe=i(f(1),2),Ae=Pe[0],Ce=Pe[1],Fe="undone"===e.done?"cancel":"delete",Te=F((function(){var e=20*(Ae()-1),t=e+20;return ye().slice(e,t)})),ze=function(e){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign}},Ie=function(e){return{cursor:"pointer",onClick:function(){C()===e.name?W(!D()):R((function(){G(e.name),W(!1)})),K()}}};return d(E,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[d(p,{size:"lg",get children(){return s("tasks.".concat(e.done))}}),d(h,{gap:"$2",flexWrap:"wrap",get children(){return[d(v,{get when(){return"done"===e.done},get children(){return[d($,{colorScheme:"accent",get loading(){return y()},onClick:K,get children(){return s("global.refresh")}}),d($,{get loading(){return ne()},onClick:(r=c(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe();case 2:t=e.sent,_(t,(function(){return K()}));case 4:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)}),get children(){return s("tasks.retry_failed")}}),d($,{colorScheme:"danger",get loading(){return X()},onClick:(t=c(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:t=e.sent,_(t,(function(){return K()}));case 4:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)}),get children(){return s("global.clear")}}),d($,{colorScheme:"success",get loading(){return ee()},onClick:(e=c(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:t=e.sent,_(t,(function(){return K()}));case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)}),get children(){return s("tasks.clear_succeeded")}})];var e,t,r}}),d(v,{get when(){return e.canRetry},get children(){return d($,{colorScheme:"primary",get loading(){return _e()},onClick:(e=c(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Se();case 2:t=e.sent,_(t,(function(e){je(e),K()}));case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)}),get children(){return s("tasks.retry_selected")}});var e}}),d($,{colorScheme:"warning",get loading(){return Ee()},onClick:(r=c(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Le();case 2:t=e.sent,_(t,(function(e){je(e),K()}));case 4:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)}),get children(){return s("tasks.".concat(Fe,"_selected"))}}),d(I,{width:"auto",get placeholder(){return s("tasks.filter")},get value(){return ce()},onInput:function(e){return ie(e.target.value)},get invalid(){return de()}}),d(v,{get when(){return 2===t().role},get children(){return d(g,{get checked(){return pe()},onChange:function(e){return ve(e.target.checked)},get children(){return s("tasks.show_only_mine")}})}})];var r}}),d(E,{w:{"@initial":"1024px","@lg":"$full"},overflowX:"auto",shadow:"$md",rounded:"$lg",spacing:"$1",p:"$1",get children(){return[d(h,{class:"title",w:"$full",p:"$2",get children(){return[d(h,{get w(){return J[0].w},spacing:"$1",get children(){return[d(g,{get disabled(){return 0===ye().length},get checked(){return we()},get indeterminate(){return xe()},onChange:function(e){return t=e.target.checked,P(j().map((function(e){return me()(e)&&(e.local.selected=t),e})));var t}}),d(x,N((function(){return ze(J[0])}),(function(){return Ie(J[0])}),{get children(){return s("tasks.attr.".concat(J[0].name))}}))]}}),d(v,{get when(){return 2===t().role},get children(){return d(x,N({get w(){return J[1].w}},(function(){return ze(J[1])}),(function(){return Ie(J[1])}),{get children(){return s("tasks.attr.".concat(J[1].name))}}))}}),d(x,N({get w(){return J[2].w}},(function(){return ze(J[2])}),(function(){return Ie(J[2])}),{get children(){return s("tasks.attr.".concat(J[2].name))}})),d(x,N({get w(){return J[3].w}},(function(){return ze(J[3])}),(function(){return Ie(J[3])}),{get children(){return s("tasks.attr.".concat(J[3].name))}})),d(x,N({get w(){return J[4].w}},(function(){return ze(J[4])}),{get children(){return s("tasks.attr.".concat(J[4].name))}})),d(b,{get w(){return J[5].w},gap:"$2",get children(){return[d(k,{}),d(x,N((function(){return ze(J[5])}),{get children(){return s("tasks.attr.".concat(J[5].name))}})),d($,{size:"xs",colorScheme:"neutral",onClick:function(){return e=!be(),P(j().map((function(t){return me()(t)&&(t.local.expanded=e),t})));var e},get disabled(){return 0===ye().length},get children(){return O((function(){return!!be()}),!0)()?s("tasks.fold_all"):s("tasks.expand_all")}})]}})]}}),O((function(){return Te().map((function(t){return d(Z,N(t,e,{get setLocal(){return e=t.id,function(t){return P(j().map((function(r){return r.id===e&&(r.local=t),r})))};var e}}))}))}))]}}),d(q,{get total(){return ye().length},defaultPageSize:20,onChange:function(e){Ce(e)}})]}})},te=(e("T",(function(e){var t=a();return d(E,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[d(p,{size:"xl",get children(){return t("tasks.".concat(e.type))}}),d(E,{w:"$full",spacing:"$2",get children(){return d(P,{each:["undone","done"],children:function(t){return d(ee,{get type(){return e.type},done:t,get canRetry(){return e.canRetry},get nameAnalyzer(){return e.nameAnalyzer}})}})}})]}})})),Y("<a></a>")),re=Y("<p></p>"),ne=Y('<a target="_blank"></a>'),oe=e("b",(function(e,r){var n,o,a=("/"===e?"":e)+r,c="/"===t().base_path?"":t().base_path,u=a.startsWith(c),l=i(f(!1),2),s=l[0],d=l[1];return u?((o=te.cloneNode(!0)).$$mouseout=function(){return d(!1)},o.$$mouseover=function(){return d(!0)},B(o,a),D((function(e){var t=s()?"text-decoration: underline":"",r=a.slice(c.length);return e._v$=W(o,t,e._v$),r!==e._v$2&&M(o,"href",e._v$2=r),e}),{_v$:void 0,_v$2:void 0}),o):(n=re.cloneNode(!0),B(n,a),n)}));e("g",(function(){var e,t=a(),r=i(f(!1),2),n=r[0],o=r[1];return{regex:/^download (.+) to \((.+)\)$/,title:function(e){return e[1]},attrs:(e={},s(e,t("tasks.attr.offline_download.url"),(function(e){return(t=ne.cloneNode(!0)).$$mouseout=function(){return o(!1)},t.$$mouseover=function(){return o(!0)},B(t,(function(){return e[1]})),D((function(r){var o=n()?"text-decoration: underline":"",a=e[1];return r._v$3=W(t,o,r._v$3),a!==r._v$4&&M(t,"href",r._v$4=a),r}),{_v$3:void 0,_v$4:void 0}),t;var t})),s(e,t("tasks.attr.offline_download.path"),(function(e){return oe("",e[2])})),e)}})),e("a",(function(){var e,t=a();return{regex:/^transfer ((?:.*\/)?(.+)) to \[(.+)]$/,title:function(e){return e[2]},attrs:(e={},s(e,t("tasks.attr.offline_download.transfer_src"),(function(e){return t=re.cloneNode(!0),B(t,(function(){return e[1]})),t;var t})),s(e,t("tasks.attr.offline_download.transfer_dst"),(function(e){return oe("",e[3])})),e)}}));G(["mouseover","mouseout"])}}}))}();
