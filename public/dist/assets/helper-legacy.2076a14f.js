System.register(["./index-legacy.3e487d44.js","./index-legacy.bac7a682.js","./Folder-legacy.0bb81e98.js"],(function(e,t){"use strict";var s,i,o,l,n,r,a,c,h,d,u,_,p,m,v,g;return{setters:[e=>{s=e.cw,i=e.cb,o=e.e,l=e.l,n=e.h,r=e.as,a=e.aF,c=e.ds,h=e.aE,d=e.aG,u=e.dn,_=e.o,p=e.aV,m=e.U},e=>{v=e.c},e=>{g=e.b}],execute:function(){e({a:function(){const e=()=>!(c||"disabled"===l.select_with_mouse||h()),{show:t}=g({id:1});return{isMouseSupported:e,registerSelectContainer:()=>{n((()=>{if(!e())return;const t=new D({selectionAreaClass:"viselect-selection-area",startAreas:[".viselect-container"],boundaries:[".viselect-container"],selectables:[".viselect-item"]});t.on("start",(({event:e})=>{const s=e;t.clearSelection(!0,!0),t.select(".viselect-item.selected",!0),s.ctrlKey||s.metaKey||(d(!1),t.clearSelection())})),t.on("move",(({store:{changed:{added:e,removed:t}}})=>{for(const s of e)u(Number(s.getAttribute("data-index")),!0);for(const s of t)u(Number(s.getAttribute("data-index")),!1)})),_((()=>t.destroy()))}))},captureContentMenu:e=>{if(e.preventDefault(),a()&&!p()){const s=e.target.closest(".viselect-item"),i=Number(null==s?void 0:s.getAttribute("data-index"));if(Number.isNaN(i)||!m.objs[i].selected)return;e.stopPropagation(),t(e,{props:m.obj})}}}},u:function(){const[e,t]=o("direct"===l.open_item_on_checkbox),s=v("Alt",{preventDefault:!1}),i=v("Meta",{preventDefault:!1}),c=v("Control",{preventDefault:!1});return n((()=>{switch(l.open_item_on_checkbox){case"direct":t(!0);break;case"disable_while_checked":t(!a());break;case"with_ctrl":t(r?i():c());break;case"with_alt":t(s())}})),e}});/*! @viselect/vanilla v3.7.0 MIT | https://github.com/Simonwep/selection/tree/master/packages/vanilla */class t{constructor(){this._listeners=new Map,this.on=this.addEventListener,this.off=this.removeEventListener,this.emit=this.dispatchEvent}addEventListener(e,t){var s;const i=null!==(s=this._listeners.get(e))&&void 0!==s?s:new Set;return this._listeners.set(e,i),i.add(t),this}removeEventListener(e,t){var s;return null==(s=this._listeners.get(e))||s.delete(t),this}dispatchEvent(e,...t){let s=!0;for(const o of null!==(i=this._listeners.get(e))&&void 0!==i?i:[]){var i;s=!1!==o(...t)&&s}return s}unbindAllListeners(){this._listeners.clear()}}const f=(e,t="px")=>"number"==typeof e?e+t:e,b=({style:e},t,s)=>{if("object"==typeof t)for(const[i,o]of Object.entries(t))void 0!==o&&(e[i]=f(o));else void 0!==s&&(e[t]=f(s))},y=(e=0,t=0,s=0,i=0)=>{const o={x:e,y:t,width:s,height:i,top:t,left:e,right:e+s,bottom:t+i};return{...o,toJSON:()=>JSON.stringify(o)}},S=(e,t,s="touch")=>{switch(s){case"center":{const s=t.left+t.width/2,i=t.top+t.height/2;return s>=e.left&&s<=e.right&&i>=e.top&&i<=e.bottom}case"cover":return t.left>=e.left&&t.top>=e.top&&t.right<=e.right&&t.bottom<=e.bottom;case"touch":return e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}},E=e=>(t,s,i,o={})=>{t instanceof HTMLCollection||t instanceof NodeList?t=Array.from(t):Array.isArray(t)||(t=[t]),Array.isArray(s)||(s=[s]);for(const l of t)if(l)for(const t of s)l[e](t,i,{capture:!1,...o});return[t,s,i,o]},x=E("addEventListener"),A=E("removeEventListener"),T=e=>{var t,s;const{clientX:i,clientY:o,target:l}=null!==(t=null==(s=e.touches)?void 0:s[0])&&void 0!==t?t:e;return{x:i,y:o,target:l}},w=(e,t=document)=>{const s=Array.isArray(e)?e:[e];let i=[];for(let o=0,l=s.length;o<l;o++){const e=s[o];"string"==typeof e?i=i.concat(Array.from(t.querySelectorAll(e))):e instanceof Element&&i.push(e)}return i},{abs:L,max:C,min:M,ceil:k}=Math,B=(e=[])=>({stored:e,selected:[],touched:[],changed:{added:[],removed:[]}}),R=class extends t{constructor(e){var t,s,i,o,l;super(),this._selection=B(),this._targetBoundaryScrolled=!0,this._selectables=[],this._areaLocation={y1:0,x2:0,y2:0,x1:0},this._areaRect=y(),this._singleClick=!0,this._scrollAvailable=!0,this._scrollingActive=!1,this._scrollSpeed={x:0,y:0},this._scrollDelta={x:0,y:0},this.disable=this._toggleStartEvents.bind(this,!1),this.enable=this._toggleStartEvents,this._options={selectionAreaClass:"selection-area",selectionContainerClass:void 0,selectables:[],document:window.document,startAreas:["html"],boundaries:["html"],container:"body",...e,behaviour:{overlap:"invert",intersect:"touch",triggers:[0],...e.behaviour,startThreshold:null!=(t=e.behaviour)&&t.startThreshold?"number"==typeof e.behaviour.startThreshold?e.behaviour.startThreshold:{x:10,y:10,...e.behaviour.startThreshold}:{x:10,y:10},scrolling:{speedDivider:10,manualSpeed:750,...null==(s=e.behaviour)?void 0:s.scrolling,startScrollMargins:{x:0,y:0,...null==(o=null==(i=e.behaviour)?void 0:i.scrolling)?void 0:o.startScrollMargins}}},features:{range:!0,touch:!0,deselectOnBlur:!1,...e.features,singleTap:{allow:!0,intersect:"native",...null==(l=e.features)?void 0:l.singleTap}}};for(const c of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))"function"==typeof this[c]&&(this[c]=this[c].bind(this));const{document:n,selectionAreaClass:r,selectionContainerClass:a}=this._options;this._area=n.createElement("div"),this._clippingElement=n.createElement("div"),this._clippingElement.appendChild(this._area),this._area.classList.add(r),a&&this._clippingElement.classList.add(a),b(this._area,{willChange:"top, left, bottom, right, width, height",top:0,left:0,position:"fixed"}),b(this._clippingElement,{overflow:"hidden",position:"fixed",transform:"translate3d(0, 0, 0)",pointerEvents:"none",zIndex:"1"}),this._frame=(e=>{let t,s=-1,i=!1;return{next:(...o)=>{t=o,i||(i=!0,s=requestAnimationFrame((()=>{e(...t),i=!1})))},cancel:()=>{cancelAnimationFrame(s),i=!1}}})((e=>{this._recalculateSelectionAreaRect(),this._updateElementSelection(),this._emitEvent("move",e),this._redrawSelectionArea()})),this.enable()}_toggleStartEvents(e=!0){const{document:t,features:s}=this._options,i=e?x:A;i(t,"mousedown",this._onTapStart),s.touch&&i(t,"touchstart",this._onTapStart,{passive:!1})}_onTapStart(e,t=!1){var s;const{x:i,y:o,target:l}=T(e),{document:n,startAreas:r,boundaries:a,features:c,behaviour:h}=this._options,d=l.getBoundingClientRect();if(e instanceof MouseEvent&&!((e,t)=>{for(const s of t){if("number"==typeof s)return e.button===s;if("object"==typeof s){const t=s.button===e.button,i=s.modifiers.every((t=>{switch(t){case"alt":return e.altKey;case"ctrl":return e.ctrlKey||e.metaKey;case"shift":return e.shiftKey}}));return t&&i}}return!1})(e,h.triggers))return;const u=w(r,n),_=w(a,n);this._targetElement=_.find((e=>S(e.getBoundingClientRect(),d)));const p=e.composedPath(),m=u.find((e=>p.includes(e)));if(this._targetBoundary=_.find((e=>p.includes(e))),!this._targetElement||!m||!this._targetBoundary||!t&&!1===this._emitEvent("beforestart",e))return;this._areaLocation={x1:i,y1:o,x2:0,y2:0};const v=null!==(s=n.scrollingElement)&&void 0!==s?s:n.body;this._scrollDelta={x:v.scrollLeft,y:v.scrollTop},this._singleClick=!0,this.clearSelection(!1,!0),x(n,["touchmove","mousemove"],this._delayedTapMove,{passive:!1}),x(n,["mouseup","touchcancel","touchend"],this._onTapStop),x(n,"scroll",this._onScroll),c.deselectOnBlur&&(this._targetBoundaryScrolled=!1,x(this._targetBoundary,"scroll",this._onStartAreaScroll))}_onSingleTap(e){const{singleTap:{intersect:t},range:s}=this._options.features,i=T(e);let o;if("native"===t)o=i.target;else if("touch"===t){this.resolveSelectables();const{x:e,y:t}=i;o=this._selectables.find((s=>{const{right:i,left:o,top:l,bottom:n}=s.getBoundingClientRect();return e<i&&e>o&&t<n&&t>l}))}if(!o)return;for(this.resolveSelectables();!this._selectables.includes(o);){if(!o.parentElement)return void(this._targetBoundaryScrolled||this.clearSelection());o=o.parentElement}const{stored:l}=this._selection;if(this._emitEvent("start",e),e.shiftKey&&s&&this._latestElement){const e=this._latestElement,[t,s]=4&e.compareDocumentPosition(o)?[o,e]:[e,o],i=[...this._selectables.filter((e=>4&e.compareDocumentPosition(t)&&2&e.compareDocumentPosition(s))),t,s];this.select(i),this._latestElement=e}else l.includes(o)&&(1===l.length||e.ctrlKey||l.every((e=>this._selection.stored.includes(e))))?this.deselect(o):(this.select(o),this._latestElement=o)}_delayedTapMove(e){const{container:t,document:s,behaviour:{startThreshold:i}}=this._options,{x1:o,y1:l}=this._areaLocation,{x:n,y:r}=T(e);if("number"==typeof i&&L(n+r-(o+l))>=i||"object"==typeof i&&L(n-o)>=i.x||L(r-l)>=i.y){if(A(s,["mousemove","touchmove"],this._delayedTapMove,{passive:!1}),!1===this._emitEvent("beforedrag",e))return void A(s,["mouseup","touchcancel","touchend"],this._onTapStop);x(s,["mousemove","touchmove"],this._onTapMove,{passive:!1}),b(this._area,"display","block"),w(t,s)[0].appendChild(this._clippingElement),this.resolveSelectables(),this._singleClick=!1,this._targetRect=this._targetElement.getBoundingClientRect(),this._scrollAvailable=this._targetElement.scrollHeight!==this._targetElement.clientHeight||this._targetElement.scrollWidth!==this._targetElement.clientWidth,this._scrollAvailable&&(x(this._targetElement,"wheel",this._manualScroll,{passive:!1}),this._selectables=this._selectables.filter((e=>this._targetElement.contains(e)))),this._setupSelectionArea(),this._emitEvent("start",e),this._onTapMove(e)}this._handleMoveEvent(e)}_setupSelectionArea(){const{_clippingElement:e,_targetElement:t,_area:s}=this,i=this._targetRect=t.getBoundingClientRect();this._scrollAvailable?(b(e,{top:i.top,left:i.left,width:i.width,height:i.height}),b(s,{marginTop:-i.top,marginLeft:-i.left})):(b(e,{top:0,left:0,width:"100%",height:"100%"}),b(s,{marginTop:0,marginLeft:0}))}_onTapMove(e){const{_scrollSpeed:t,_areaLocation:s,_options:i,_frame:o}=this,{speedDivider:l}=i.behaviour.scrolling,n=this._targetElement,{x:r,y:a}=T(e);if(s.x2=r,s.y2=a,this._scrollAvailable&&!this._scrollingActive&&(t.y||t.x)){this._scrollingActive=!0;const i=()=>{if(!t.x&&!t.y)return void(this._scrollingActive=!1);const{scrollTop:r,scrollLeft:a}=n;t.y&&(n.scrollTop+=k(t.y/l),s.y1-=n.scrollTop-r),t.x&&(n.scrollLeft+=k(t.x/l),s.x1-=n.scrollLeft-a),o.next(e),requestAnimationFrame(i)};requestAnimationFrame(i)}else o.next(e);this._handleMoveEvent(e)}_handleMoveEvent(e){const{features:t}=this._options;(t.touch&&matchMedia("(hover: none), (pointer: coarse)").matches||this._scrollAvailable&&"safari"in window)&&e.preventDefault()}_onScroll(){var e;const{_scrollDelta:t,_options:{document:s}}=this,{scrollTop:i,scrollLeft:o}=null!==(e=s.scrollingElement)&&void 0!==e?e:s.body;this._areaLocation.x1+=t.x-o,this._areaLocation.y1+=t.y-i,t.x=o,t.y=i,this._setupSelectionArea(),this._frame.next(null)}_onStartAreaScroll(){this._targetBoundaryScrolled=!0,A(this._targetElement,"scroll",this._onStartAreaScroll)}_manualScroll(e){const{manualSpeed:t}=this._options.behaviour.scrolling,s=e.deltaY?e.deltaY>0?1:-1:0,i=e.deltaX?e.deltaX>0?1:-1:0;this._scrollSpeed.y+=s*t,this._scrollSpeed.x+=i*t,this._onTapMove(e),e.preventDefault()}_recalculateSelectionAreaRect(){const{_scrollSpeed:e,_areaLocation:t,_targetElement:s,_options:i}=this,{scrollTop:o,scrollHeight:l,clientHeight:n,scrollLeft:r,scrollWidth:a,clientWidth:c}=s,h=this._targetRect,{x1:d,y1:u}=t;let{x2:_,y2:p}=t;const{behaviour:{scrolling:{startScrollMargins:m}}}=i;_<h.left+m.x?(e.x=r?-L(h.left-_+m.x):0,_=_<h.left?h.left:_):_>h.right-m.x?(e.x=a-r-c?L(h.left+h.width-_-m.x):0,_=_>h.right?h.right:_):e.x=0,p<h.top+m.y?(e.y=o?-L(h.top-p+m.y):0,p=p<h.top?h.top:p):p>h.bottom-m.y?(e.y=l-o-n?L(h.top+h.height-p-m.y):0,p=p>h.bottom?h.bottom:p):e.y=0;const v=M(d,_),g=M(u,p),f=C(d,_),b=C(u,p);this._areaRect=y(v,g,f-v,b-g)}_redrawSelectionArea(){const{x:e,y:t,width:s,height:i}=this._areaRect,{style:o}=this._area;o.left=`${e}px`,o.top=`${t}px`,o.width=`${s}px`,o.height=`${i}px`}_onTapStop(e,t){var s;const{document:i,features:o}=this._options,{_singleClick:l}=this;A(this._targetElement,"scroll",this._onStartAreaScroll),A(i,["mousemove","touchmove"],this._delayedTapMove),A(i,["touchmove","mousemove"],this._onTapMove),A(i,["mouseup","touchcancel","touchend"],this._onTapStop),A(i,"scroll",this._onScroll),this._keepSelection(),e&&l&&o.singleTap.allow?this._onSingleTap(e):!l&&!t&&(this._updateElementSelection(),this._emitEvent("stop",e)),this._scrollSpeed.x=0,this._scrollSpeed.y=0,A(this._targetElement,"wheel",this._manualScroll,{passive:!0}),this._clippingElement.remove(),null==(s=this._frame)||s.cancel(),b(this._area,"display","none")}_updateElementSelection(){const{_selectables:e,_options:t,_selection:s,_areaRect:i}=this,{stored:o,selected:l,touched:n}=s,{intersect:r,overlap:a}=t.behaviour,c="invert"===a,h=[],d=[],u=[];for(let p=0;p<e.length;p++){const t=e[p];if(S(i,t.getBoundingClientRect(),r)){if(l.includes(t))o.includes(t)&&!n.includes(t)&&n.push(t);else{if(c&&o.includes(t)){u.push(t);continue}d.push(t)}h.push(t)}}c&&d.push(...o.filter((e=>!l.includes(e))));const _="keep"===a;for(let p=0;p<l.length;p++){const e=l[p];!h.includes(e)&&(!_||!o.includes(e))&&u.push(e)}s.selected=h,s.changed={added:d,removed:u},this._latestElement=void 0}_emitEvent(e,t){return this.emit(e,{event:t,store:this._selection,selection:this})}_keepSelection(){const{_options:e,_selection:t}=this,{selected:s,changed:i,touched:o,stored:l}=t,n=s.filter((e=>!l.includes(e)));switch(e.behaviour.overlap){case"drop":t.stored=[...n,...l.filter((e=>!o.includes(e)))];break;case"invert":t.stored=[...n,...l.filter((e=>!i.removed.includes(e)))];break;case"keep":t.stored=[...l,...s.filter((e=>!l.includes(e)))]}}trigger(e,t=!0){this._onTapStart(e,t)}resolveSelectables(){this._selectables=w(this._options.selectables,this._options.document)}clearSelection(e=!0,t=!1){const{selected:s,stored:i,changed:o}=this._selection;o.added=[],o.removed.push(...s,...e?i:[]),t||(this._emitEvent("move",null),this._emitEvent("stop",null)),this._selection=B(e?[]:i)}getSelection(){return this._selection.stored}getSelectionArea(){return this._area}cancel(e=!1){this._onTapStop(null,!e)}destroy(){this.cancel(),this.disable(),this._clippingElement.remove(),super.unbindAllListeners()}select(e,t=!1){const{changed:s,selected:i,stored:o}=this._selection,l=w(e,this._options.document).filter((e=>!i.includes(e)&&!o.includes(e)));return o.push(...l),i.push(...l),s.added.push(...l),s.removed=[],this._latestElement=void 0,t||(this._emitEvent("move",null),this._emitEvent("stop",null)),l}deselect(e,t=!1){const{selected:s,stored:i,changed:o}=this._selection,l=w(e,this._options.document).filter((e=>s.includes(e)||i.includes(e)));l.length&&(this._selection.stored=i.filter((e=>!l.includes(e))),this._selection.selected=s.filter((e=>!l.includes(e))),this._selection.changed.added=[],this._selection.changed.removed.push(...l.filter((e=>!o.removed.includes(e)))),this._latestElement=void 0,t||(this._emitEvent("move",null),this._emitEvent("stop",null)))}};R.version="3.7.0";let D=R;e("I",s(i,{baseStyle:{_before:{content:"",pos:"absolute",top:-10,right:-2,bottom:-10,left:-10}}}))}}}));
