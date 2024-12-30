import{a as _,b as y,aW as v,b9 as g,m as x,de as p,h as e,ae as h,C as o,a7 as T,df as B,dg as F,dh as f,G as m,di as b,dj as H,dk as s,ba as u,n as $,a4 as P,cl as R,aG as W,aH as D,ag as G}from"./index.b275eba1.js";import{b as I}from"./useTitle.34aaff4c.js";import{D as L}from"./DeletePopover.b0996a76.js";import{W as M}from"./Wether.bec9119d.js";const j=n=>{const t=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(R,{get colorScheme(){return t[n.role].color},get children(){return t[n.role].name}})},z=n=>{const t=_(),i=a=>`$${a?"success":"danger"}9`;return e(h,{spacing:"$0_5",get children(){return e(m,{each:W,children:(a,d)=>e(D,{get label(){return t(`users.permissions.${a}`)},get children(){return e(T,{boxSize:"$2",rounded:"$full",get bg(){return i(G.can(n.user,d()))}})}})})}})},A=()=>{const n=_();I("manage.sidemenu.users");const{to:t}=y(),[i,a]=v(()=>g.get("/admin/user/list")),[d,k]=x([]),l=async()=>{const r=await a();u(r,c=>k(c.content))};l();const[C,S]=p(r=>g.post(`/admin/user/delete?id=${r}`)),[U,w]=p(r=>g.post(`/admin/user/cancel_2fa?id=${r}`));return e(P,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(h,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return i()},onClick:l,get children(){return n("global.refresh")}}),e(o,{onClick:()=>{t("/@manage/users/add")},get children(){return n("global.add")}})]}}),e(T,{w:"$full",overflowX:"auto",get children(){return e(B,{highlightOnHover:!0,dense:!0,get children(){return[e(F,{get children(){return e(f,{get children(){return[e(m,{each:["username","base_path","role","permission","available"],children:r=>e(b,{get children(){return n(`users.${r}`)}})}),e(b,{get children(){return n("global.operations")}})]}})}}),e(H,{get children(){return e(m,{get each(){return d()},children:r=>e(f,{get children(){return[e(s,{get children(){return r.username}}),e(s,{get children(){return r.base_path}}),e(s,{get children(){return e(j,{get role(){return r.role}})}}),e(s,{get children(){return e(z,{user:r})}}),e(s,{get children(){return e(M,{get yes(){return!r.disabled}})}}),e(s,{get children(){return e(h,{spacing:"$2",get children(){return[e(o,{onClick:()=>{t(`/@manage/users/edit/${r.id}`)},get children(){return n("global.edit")}}),e(L,{get name(){return r.username},get loading(){return C()===r.id},onClick:async()=>{const c=await S(r.id);u(c,()=>{$.success(n("global.delete_success")),l()})}}),e(o,{colorScheme:"accent",get loading(){return U()===r.id},onClick:async()=>{const c=await w(r.id);u(c,()=>{$.success(n("users.cancel_2fa_success")),l()})},get children(){return n("users.cancel_2fa")}})]}})}})]}})})}})]}})}})]}})};export{A as default};
