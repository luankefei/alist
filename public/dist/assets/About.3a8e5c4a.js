import{a as t,a6 as n,h as e,a9 as r,a8 as s}from"./index.b275eba1.js";import{b as o}from"./useTitle.34aaff4c.js";const i=async()=>await(await fetch("https://jsd.nn.ci/gh/alist-org/alist@main/README.md")).text(),m=()=>{t(),o("manage.sidemenu.about");const[a]=n(i);return e(s,{get loading(){return a.loading},get children(){return e(r,{get children(){return a()}})}})};export{m as default};
