const __vite__fileDeps=["../nodes/0.BbhsKaJf.js","../chunks/scheduler.Bnq60-53.js","../chunks/index.C1yCjPnJ.js","../assets/0.B_SY1GJM.css","../nodes/1.Dbwr8W3A.js","../chunks/stores.CfNqscpj.js","../chunks/entry.5SiHmgUP.js","../nodes/2.CDV99Gca.js","../nodes/3.D9bwvoLM.js","../chunks/axios.DKvEzI_x.js","../nodes/4.CAiKkxTg.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as N,f as q,o as U,h as S,t as j}from"../chunks/scheduler.Bnq60-53.js";import{S as z,i as W,s as F,w as h,f as G,g as k,v as p,x as A,u as g,d as w,e as H,c as J,a as K,l as I,y as d,t as Q,b as X,j as Y,z as D,A as E,B as y,C as O,D as R,E as P}from"../chunks/index.C1yCjPnJ.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},T={},L=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const u=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),r=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));s=Promise.all(n.map(o=>{if(o=M(o,i),o in T)return;T[o]=!0;const f=o.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!i)for(let b=u.length-1;b>=0;b--){const v=u[b];if(v.href===o&&(!f||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":Z,f||(_.as="script",_.crossOrigin=""),_.href=o,r&&_.setAttribute("nonce",r),document.head.appendChild(_),f)return new Promise((b,v)=>{_.addEventListener("load",b),_.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(u=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=u,window.dispatchEvent(t),!t.defaultPrevented)throw u})},re={};function $(a){let e,n,i;var s=a[1][0];function u(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,u(a)),a[12](e)),{c(){e&&y(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){D();const o=e;p(o.$$.fragment,1,0,()=>{P(o,1)}),A()}s?(e=E(s,u(t)),t[12](e),y(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&p(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[12](null),e&&P(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function u(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=E(s,u(a)),a[11](e)),{c(){e&&y(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){D();const o=e;p(o.$$.fragment,1,0,()=>{P(o,1)}),A()}s?(e=E(s,u(t)),t[11](e),y(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&8215&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&p(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[11](null),e&&P(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function u(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,u(a)),a[10](e)),{c(){e&&y(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,r){e&&R(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){D();const o=e;p(o.$$.fragment,1,0,()=>{P(o,1)}),A()}s?(e=E(s,u(t)),t[10](e),y(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(s){const o={};r&16&&(o.data=t[4]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&p(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[10](null),e&&P(e,t)}}}function V(a){let e,n=a[6]&&C(a);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=J(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=K(e);n&&n.l(s),s.forEach(w),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,s){k(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=C(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function C(a){let e;return{c(){e=Q(a[7])},l(n){e=X(n,a[7])},m(n,i){k(n,e,i)},p(n,i){i&128&&Y(e,n[7])},d(n){n&&w(e)}}}function te(a){let e,n,i,s,u;const t=[x,$],r=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=r[e]=t[e](a);let f=a[5]&&V(a);return{c(){n.c(),i=F(),f&&f.c(),s=h()},l(l){n.l(l),i=G(l),f&&f.l(l),s=h()},m(l,m){r[e].m(l,m),k(l,i,m),f&&f.m(l,m),k(l,s,m),u=!0},p(l,[m]){let _=e;e=o(l),e===_?r[e].p(l,m):(D(),p(r[_],1,1,()=>{r[_]=null}),A(),n=r[e],n?n.p(l,m):(n=r[e]=t[e](l),n.c()),g(n,1),n.m(i.parentNode,i)),l[5]?f?f.p(l,m):(f=V(l),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null)},i(l){u||(g(n),u=!0)},o(l){p(n),u=!1},d(l){l&&(w(i),w(s)),r[e].d(l),f&&f.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:u}=e,{components:t=[]}=e,{form:r}=e,{data_0:o=null}=e,{data_1:f=null}=e;q(i.page.notify);let l=!1,m=!1,_=null;U(()=>{const c=i.page.subscribe(()=>{l&&(n(6,m=!0),j().then(()=>{n(7,_=document.title||"untitled page")}))});return n(5,l=!0),c});function b(c){S[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function v(c){S[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function B(c){S[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,u=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,o=c.data_0),"data_1"in c&&n(4,f=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,u,r,o,f,l,m,_,i,s,b,v,B]}class oe extends z{constructor(e){super(),W(this,e,ne,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>L(()=>import("../nodes/0.BbhsKaJf.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>L(()=>import("../nodes/1.Dbwr8W3A.js"),__vite__mapDeps([4,1,2,5,6]),import.meta.url),()=>L(()=>import("../nodes/2.CDV99Gca.js"),__vite__mapDeps([7,1,2]),import.meta.url),()=>L(()=>import("../nodes/3.D9bwvoLM.js"),__vite__mapDeps([8,1,2,9,5,6]),import.meta.url),()=>L(()=>import("../nodes/4.CAiKkxTg.js"),__vite__mapDeps([10,1,2,9,5,6]),import.meta.url)],le=[],fe={"/":[2],"/devices":[3],"/vermieter":[4]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
