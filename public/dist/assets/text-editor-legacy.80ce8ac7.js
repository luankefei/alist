System.register(["./index-legacy.3e487d44.js","./index-legacy.bac7a682.js"],(function(e,n){"use strict";var t,r,o,i,c,a,u,l,s,f,d,g,h,p,y,v,b,m,j,O,w,P,T,I,S,k;return{setters:[e=>{t=e.dD,r=e.e,o=e.i,i=e.a0,c=e.a5,a=e.h,u=e.o,l=e.$,s=e.dx,f=e.cr,d=e.t,g=e.b,h=e.dy,p=e.a,y=e.aP,v=e.b2,b=e.N,m=e.S,j=e.dz,O=e.U,w=e.aI,P=e.B,T=e.X,I=e.b3,S=e.n},e=>{k=e.a}],execute:function(){function n(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function E(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function D(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach((function(n){x(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function z(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return n.apply(t,[].concat(o,r))}}}function M(e){return{}.toString.call(e).includes("Object")}function $(e){return"function"==typeof e}var F=z((function(e,n){throw new Error(e[n]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),U={changes:function(e,n){return M(n)||F("changeType"),Object.keys(n).some((function(n){return t=e,r=n,!Object.prototype.hasOwnProperty.call(t,r);var t,r}))&&F("changeField"),n},selector:function(e){$(e)||F("selectorType")},handler:function(e){$(e)||M(e)||F("handlerType"),M(e)&&Object.values(e).some((function(e){return!$(e)}))&&F("handlersType")},initial:function(e){var n;e||F("initialIsRequired"),M(e)||F("initialType"),n=e,Object.keys(n).length||F("initialContent")}};function B(e,n){return $(n)?n(e.current):n}function _(e,n){return e.current=R(R({},e.current),n),n}function V(e,n,t){return $(n)?n(e.current):Object.keys(t).forEach((function(t){var r;return null===(r=n[t])||void 0===r?void 0:r.call(n,e.current[t])})),t}var N,X={create:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};U.initial(e),U.handler(n);var t={current:e},r=z(V)(t,n),o=z(_)(t),i=z(U.changes)(e),c=z(B)(t);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return U.selector(e),e(t.current)},function(e){!function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}}(r,o,i,c)(e)}]}},Y={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},G=(N=function(e,n){throw new Error(e[n]||e.default)},function e(){for(var n=this,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r.length>=N.length?N.apply(this,r):function(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return e.apply(n,[].concat(r,o))}})(Y),H={config:function(e){var n;return e||G("configIsRequired"),n=e,{}.toString.call(n).includes("Object")||G("configType"),e.urls?(console.warn(Y.deprecation),{paths:{vs:e.urls.monacoBase}}):e}};function J(e,n){return Object.keys(n).forEach((function(t){n[t]instanceof Object&&e[t]&&Object.assign(n[t],J(e[t],n[t]))})),C(C({},e),n)}var K={type:"cancelation",msg:"operation is manually canceled"};function L(e){var n=!1,t=new Promise((function(t,r){e.then((function(e){return n?r(K):t(e)})),e.catch(r)}));return t.cancel=function(){return n=!0},t}var Q,W,Z=X.create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}),ee=(W=2,function(e){if(Array.isArray(e))return e}(Q=Z)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}}(Q,W)||function(e,n){if(e){if("string"==typeof e)return D(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?D(e,n):void 0}}(Q,W)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),ne=ee[0],te=ee[1];function re(e){return document.body.appendChild(e)}function oe(e){var n,t,r=ne((function(e){return{config:e.config,reject:e.reject}})),o=(n="".concat(r.config.paths.vs,"/loader.js"),t=document.createElement("script"),n&&(t.src=n),t);return o.onload=function(){return e()},o.onerror=r.reject,o}function ie(){var e=ne((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],(function(n){ce(n),e.resolve(n)}),(function(n){e.reject(n)}))}function ce(e){ne().monaco||te({monaco:e})}var ae=new Promise((function(e,n){return te({resolve:e,reject:n})})),ue={config:function(e){var n=H.config(e),t=n.monaco,r=E(n,["monaco"]);te((function(e){return{config:J(e.config,r),monaco:t}}))},init:function(){var e=ne((function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}}));if(!e.isInitialized){if(te({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),L(ae);if(window.monaco&&window.monaco.editor)return ce(window.monaco),e.resolve(window.monaco),L(ae);!function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}}(re,oe)(ie)}return L(ae)},__getMonacoInstance:function(){return ne((function(e){return e.monaco}))}};let le;ue.config({paths:{vs:t}});const se=e=>{const[n,t]=r(!0);return ue.init().then((e=>{le=e,t(!1)})),o(i,{get loading(){return n()},get children(){return o(fe,e)}})},fe=e=>{let n,t,r;return c((()=>{t=le.editor.create(n,{value:e.value,theme:e.theme}),r=le.editor.createModel(e.value,e.language,e.path?le.Uri.parse(e.path):void 0),t.setModel(r),t.onDidChangeModelContent((()=>{var n;null===(n=e.onChange)||void 0===n||n.call(e,t.getValue())}))})),a((()=>{t.setValue(e.value)})),a((()=>{le.editor.setTheme(e.theme)})),u((()=>{r&&r.dispose(),t&&t.dispose()})),o(l,{w:"$full",h:"70vh",ref(e){"function"==typeof n?n(e):n=e}})};function de(e){const{colorMode:n}=f(),t=d((()=>"light"===n()?"vs":"vs-dark")),{pathname:i}=g(),{isString:c,text:u}=h(e.data),[l,s]=r("utf-8"),[A,C]=r(u(l())),E=p(),[D,x]=y((()=>v.put("/fs/put",A(),{headers:{"File-Path":encodeURIComponent(i()),"Content-Type":e.contentType||"text/plain"}})));async function q(){const e=await x();I(e,(()=>{S.success(E("global.save_success"))}))}return a(b(l,(e=>{C(u(e))}))),k(["Control","S"],q),o(T,{w:"$full",alignItems:"start",spacing:"$2",pos:"relative",get children(){return[o(m,{when:!c,get children(){return o(j,{get encoding(){return l()},setEncoding:s,get referenceText(){return e.data}})}}),o(se,{get value(){return u(l())},get theme(){return t()},get path(){return O.obj.name},onChange:e=>{C(e)}}),o(m,{get when(){return w("write")||O.write},get children(){return o(P,{get loading(){return D()},onClick:q,get children(){return E("global.save")}})}})]}})}e("default",(()=>{const[e]=s();return o(i,{get loading(){return e.loading},get children(){return o(de,{get data(){var n;return null===(n=e())||void 0===n?void 0:n.content},get contentType(){var n;return null===(n=e())||void 0===n?void 0:n.contentType}})}})}))}}}));
