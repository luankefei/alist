System.register(["./index-legacy.3e487d44.js","./useTitle-legacy.b11995ec.js","./webauthn-json.browser-ponyfill-legacy.8ddd819a.js"],(function(e,t){"use strict";var r,n,o,i,a,l,s,c,u,d,g,p,h,f,m,w,b,C,v,y,x,_,$,k,I,S,G,z,j,U,E,R,P,T,D,K,M,B,J,L,Z,q,N,O,Q,X,A;return{setters:[e=>{r=e.c2,n=e.v,o=e.c3,i=e.c4,a=e.ab,l=e.K,s=e.i,c=e.$,u=e.aB,d=e.G,g=e.b,p=e.b_,h=e.c5,f=e.o,m=e.aq,w=e.b2,b=e.bQ,C=e.c6,v=e.c7,y=e.c8,x=e.c9,_=e.a,$=e.t,k=e.e,I=e.ca,S=e.aP,G=e.X,z=e.bJ,j=e.an,U=e.bI,E=e.S,R=e.I,P=e.cb,T=e.a_,D=e.a7,K=e.B,M=e.bd,B=e.be,J=e.cc,L=e.au,Z=e.bz,q=e.n,N=e.b3},e=>{O=e.a},e=>{Q=e.s,X=e.g,A=e.a}],execute:function(){var t=a('<svg version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink height=896 width=967.8852157128662><defs><path id=path-2 opacity=1 fill-rule=evenodd d="M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"></path><linearGradient id=linearGradient-3 x1=0.5 y1=0 x2=0.5 y2=1><stop offset=0 stop-opacity=1></stop><stop offset=1 stop-opacity=1></stop></linearGradient></defs><g opacity=1><use xlink:href=#path-2 fill=url(#linearGradient-3) fill-opacity=1>');const F=e=>{const r=n({startColor:"#28aff0",endColor:"#120fc4"},e);return a=t(),l=a.firstChild.firstChild.nextSibling.firstChild,s=l.nextSibling,o((e=>{var t=r.startColor,n=r.endColor;return t!==e.e&&i(l,"stop-color",e.e=t),n!==e.t&&i(s,"stop-color",e.t=n),e}),{e:void 0,t:void 0}),a;var a,l,s};var H=a('<svg height=1337 width=1337><defs><path id=path-1 opacity=1 fill-rule=evenodd d="M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"></path><linearGradient id=linearGradient-2 x1=0.79 y1=0.62 x2=0.21 y2=0.86><stop offset=0 stop-opacity=1></stop><stop offset=1 stop-opacity=1></stop></linearGradient></defs><g opacity=1><use xlink:href=#path-1 fill=url(#linearGradient-2) fill-opacity=1>');const V=e=>{const t=n({startColor:"#28aff0",endColor:"#120fc4"},e);return r=H(),a=r.firstChild.firstChild.nextSibling.firstChild,l=a.nextSibling,o((e=>{var r=t.startColor,n=t.endColor;return r!==e.e&&i(a,"stop-color",e.e=r),n!==e.t&&i(l,"stop-color",e.t=n),e}),{e:void 0,t:void 0}),r;var r,a,l},W=()=>{const e=l("#a9c6ff","#062b74");return s(c,{get bgColor(){return e()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh",get children(){return[s(c,{pos:"absolute",right:{"@initial":"-100px","@sm":"-300px"},top:{"@initial":"-1170px","@sm":"-900px"},get children(){return s(V,{})}}),s(c,{pos:"absolute",left:{"@initial":"-100px","@sm":"-200px"},bottom:{"@initial":"-760px","@sm":"-400px"},get children(){return s(F,{})}})]}})},Y=()=>{const e=u("sso_login_enabled"),t=d("sso_login_platform"),r=u("sso_compatibility_mode"),{searchParams:n,to:o}=g(),i=n.token;function a(e){const t=e.data;t.token&&(p(t.token),o(decodeURIComponent(n.redirect||h||"/"),!0))}if(null!=i&&""!=i&&(p(i),o(decodeURIComponent(n.redirect||h||"/"),!0)),window.addEventListener("message",a),f((()=>{window.removeEventListener("message",a)})),e){const e=()=>{const e=w.getUri()+"/auth/sso?method=sso_get_token";r?window.location.href=e:window.open(e,"authPopup","width=500,height=600")};let n;switch(t){case"Github":n=x;break;case"Microsoft":n=y;break;case"Google":n=v;break;case"Dingtalk":n=C;break;default:n=b}return s(m,{cursor:"pointer",boxSize:"$8",as:n,p:"$0_5",onclick:e})}};e("default",(()=>{const e=d("logo").split("\n"),t=l(e[0],e.pop()),n=_(),o=$((()=>`${n("login.login_to")} ${d("site_title")}`));O(o);const i=l("white","$neutral1"),[a,c]=k(localStorage.getItem("username")||""),[f,b]=k(localStorage.getItem("password")||""),[C,v]=k(""),[y,x]=k(!1),[F,H]=I("remember-pwd","false"),[V,ee]=k(!1),[te,re]=S((async()=>{return V()?w.post("/auth/login/ldap",{username:a(),password:f(),otp_code:C()}):w.post("/auth/login/hash",{username:a(),password:(e=f(),r(`${e}-https://github.com/alist-org/alist`)),otp_code:C()});var e})),[,ne]=S(((e,t,r)=>w.post("/authn/webauthn_finish_login?username="+r,JSON.stringify(t),{headers:{session:e}}))),[,oe]=S((e=>w.get("/authn/webauthn_begin_login?username="+e))),{searchParams:ie,to:ae}=g(),le=u("webauthn_login_enabled"),se=async()=>{x(!y())},ce=async()=>{if(y()){if(!Q())return void q.error(n("users.webauthn_not_supported"));p(),"true"===F()?localStorage.setItem("username",a()):localStorage.removeItem("username");const e=await oe(a());N(e,(async e=>{try{const t=X(e.options),r=await A(t),o=await ne(e.session,r,a());Z(o,(e=>{q.success(n("login.success")),p(e.token),ae(decodeURIComponent(ie.redirect||h||"/"),!0)}))}catch(t){t instanceof Error&&q.error(t.message)}}))}else{"true"===F()?(localStorage.setItem("username",a()),localStorage.setItem("password",f())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const e=await re();Z(e,(e=>{q.success(n("login.success")),p(e.token),ae(decodeURIComponent(ie.redirect||h||"/"),!0)}),((e,t)=>{ue()||402!==t?q.error(e):de(!0)}))}},[ue,de]=k(!1),ge=u("ldap_login_enabled"),pe=d("ldap_login_tips");return ge&&ee(!0),s(L,{zIndex:"1",w:"$full",h:"100vh",get children(){return[s(G,{get bgColor(){return i()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[s(z,{alignItems:"center",justifyContent:"space-around",get children(){return[s(j,{mr:"$2",boxSize:"$12",get src(){return t()}}),s(U,{color:"$info9",fontSize:"$2xl",get children(){return o()}})]}}),s(E,{get when(){return!ue()},get fallback(){return s(R,{id:"totp",name:"otp",get placeholder(){return n("login.otp-tips")},get value(){return C()},onInput:e=>v(e.currentTarget.value),onKeyDown:e=>{"Enter"===e.key&&ce()}})},get children(){return[s(R,{name:"username",get placeholder(){return n("login.username-tips")},get value(){return a()},onInput:e=>c(e.currentTarget.value)}),s(E,{get when(){return!y()},get children(){return s(R,{name:"password",get placeholder(){return n("login.password-tips")},type:"password",get value(){return f()},onInput:e=>b(e.currentTarget.value),onKeyDown:e=>{"Enter"===e.key&&ce()}})}}),s(z,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[s(P,{get checked(){return"true"===F()},onChange:()=>H("true"===F()?"false":"true"),get children(){return n("login.remember")}}),s(T,{as:"a",target:"_blank",get href(){return n("login.forget_url")},get children(){return n("login.forget")}})]}})]}}),s(D,{w:"$full",spacing:"$2",get children(){return[s(E,{get when(){return!y()},get children(){return s(K,{colorScheme:"primary",w:"$full",onClick:()=>{ue()?v(""):(c(""),b(""))},get children(){return n("login.clear")}})}}),s(K,{w:"$full",get loading(){return te()},onClick:ce,get children(){return n("login.login")}})]}}),s(E,{when:ge,get children(){return s(P,{w:"$full",get checked(){return!0===V()},onChange:()=>ee(!V()),children:pe})}}),s(K,{w:"$full",colorScheme:"accent",onClick:()=>{p(),ae(decodeURIComponent(ie.redirect||h||"/"),!0)},get children(){return n("login.use_guest")}}),s(z,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[s(M,{}),s(B,{}),s(Y,{}),s(E,{when:le,get children(){return s(m,{cursor:"pointer",boxSize:"$8",as:J,p:"$0_5",onclick:se})}})]}})]}}),s(W,{})]}})}))}}}));
