System.register(["./index-legacy.3e487d44.js","./index-legacy.b291285f.js","./item_type-legacy.4bd28ded.js","./index-legacy.e1a1cc1b.js"],(function(e,r){"use strict";var t,n,l,u,g,i,a,d,c,o,h,s,v,y,b,p,f,k,m,w,C,x,D,O,E,T,$,A;return{setters:[e=>{t=e.a,n=e.i,l=e.S,u=e.bg,g=e.t,i=e.aq,a=e.Q,d=e.au,c=e.R,o=e.I,h=e.bs,s=e.T,v=e.bi,y=e.bj,b=e.bk,p=e.bl,f=e.bm,k=e.bn,m=e.bo,w=e.w,C=e.bp,x=e.bq,D=e.br,O=e.F,E=e.bt},e=>{T=e.F},e=>{$=e.T},e=>{A=e.p}],execute:function(){e("I",(e=>{const r=t();return n(E,{get w(){var r;return null!==(r=e.w)&&void 0!==r?r:"100%"},display:"flex",flexDirection:"column",get children(){return[n(l,{get when(){return!e.hideLabel},get children(){return n(u,{get for(){return e.key},display:"flex",alignItems:"center",get children(){return[g((()=>r(`settings.${e.key}`))),n(l,{get when(){return e.flag===T.DEPRECATED},get children(){return n(i,{ml:"$2",as:A,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:()=>{var r;null===(r=e.onDelete)||void 0===r||r.call(e)}})}})]}})}}),n(a,{get fallback(){return n(d,{get children(){return r("settings_other.unknown_type")}})},get children(){return[n(c,{get when(){return[$.String,$.Number].includes(e.type)},get children(){return n(o,{get type(){return e.type===$.Number?"number":""},get id(){return e.key},get value(){return e.value},onInput:r=>{var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,r.currentTarget.value)},get readOnly(){return e.flag===T.READONLY}})}}),n(c,{get when(){return e.type===$.Bool},get children(){return n(h,{get id(){return e.key},get defaultChecked(){return"true"===e.value},onChange:r=>{var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,r.currentTarget.checked?"true":"false")},get readOnly(){return e.flag===T.READONLY}})}}),n(c,{get when(){return e.type===$.Text},get children(){return n(s,{get id(){return e.key},get value(){return e.value},onChange:r=>{var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,r.currentTarget.value)},get readOnly(){return e.flag===T.READONLY}})}}),n(c,{get when(){return e.type===$.Select},get children(){return n(v,{get id(){return e.key},get defaultValue(){return e.value},onChange:r=>{var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,r)},get readOnly(){return e.flag===T.READONLY},get children(){return[n(y,{get children(){return[n(b,{get children(){return r("global.choose")}}),n(p,{}),n(f,{})]}}),n(k,{get children(){return n(m,{get children(){return n(w,{get each(){var r;return null===(r=e.options)||void 0===r?void 0:r.split(",")},children:t=>n(C,{value:t,get children(){return[n(x,{get children(){return r(`settings.${e.key}s.${t}`)}}),n(D,{})]}})})}})}})]}})}})]}}),n(O,{get children(){return g((()=>!!e.help))()?r(`settings.${e.key}-tips`):""}})]}})}))}}}));
