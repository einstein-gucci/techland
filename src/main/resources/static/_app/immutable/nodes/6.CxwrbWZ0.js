import{s as Ee,n as me,r as ye,c as he}from"../chunks/scheduler.B2kig3xY.js";import{S as Te,i as Ae,e as d,s as x,c as _,l as R,f as L,a as A,d as u,m,g as D,h as s,n as Q,o as ee,u as de,t as le,b as ae,j as _e,v as ve}from"../chunks/index.DR8NClmD.js";import{e as W}from"../chunks/each.D6YF6ztN.js";import{j as Ve,a as te}from"../chunks/store.BdGEaHuh.js";import{p as ke}from"../chunks/stores.CYLICO2S.js";function pe(r,l,a){const o=r.slice();return o[12]=l[a],o[14]=a,o}function ge(r,l,a){const o=r.slice();return o[3]=l[a],o}function be(r){let l,a,o=r[3].email+"",i,v,n,c=r[3].name+"",V,p;return{c(){l=d("tr"),a=d("td"),i=le(o),v=x(),n=d("td"),V=le(c),p=x()},l(h){l=_(h,"TR",{});var C=A(l);a=_(C,"TD",{});var P=A(a);i=ae(P,o),P.forEach(u),v=L(C),n=_(C,"TD",{});var k=A(n);V=ae(k,c),k.forEach(u),p=L(C),C.forEach(u)},m(h,C){D(h,l,C),s(l,a),s(a,i),s(l,v),s(l,n),s(n,V),s(l,p)},p(h,C){C&4&&o!==(o=h[3].email+"")&&_e(i,o),C&4&&c!==(c=h[3].name+"")&&_e(V,c)},d(h){h&&u(l)}}}function Ce(r){let l,a,o=r[14]+1+"",i,v;return{c(){l=d("li"),a=d("a"),i=le(o),v=x(),this.h()},l(n){l=_(n,"LI",{class:!0});var c=A(l);a=_(c,"A",{class:!0,href:!0});var V=A(a);i=ae(V,o),V.forEach(u),v=L(c),c.forEach(u),this.h()},h(){m(a,"class","page-link"),m(a,"href","/vermieter?page="+(r[14]+1)),ve(a,"active",r[0]==r[14]+1),m(l,"class","page-item")},m(n,c){D(n,l,c),s(l,a),s(a,i),s(l,v)},p(n,c){c&1&&ve(a,"active",n[0]==n[14]+1)},d(n){n&&u(l)}}}function xe(r){let l,a="Create Vermieter",o,i,v,n,c,V="Email",p,h,C,P,k,j,E="Name",y,T,X,I,ne="Submit",F,w,re="All Vermieters",Y,N,S,oe='<tr><th scope="col">Email</th> <th scope="col">Name</th></tr>',Z,O,G,U,z,$,se,q=W(r[2]),g=[];for(let e=0;e<q.length;e+=1)g[e]=be(ge(r,q,e));let M=W(Array(r[1])),b=[];for(let e=0;e<M.length;e+=1)b[e]=Ce(pe(r,M,e));return{c(){l=d("h1"),l.textContent=a,o=x(),i=d("form"),v=d("div"),n=d("div"),c=d("label"),c.textContent=V,p=x(),h=d("input"),C=x(),P=d("div"),k=d("div"),j=d("label"),j.textContent=E,y=x(),T=d("input"),X=x(),I=d("button"),I.textContent=ne,F=x(),w=d("h1"),w.textContent=re,Y=x(),N=d("table"),S=d("thead"),S.innerHTML=oe,Z=x(),O=d("tbody");for(let e=0;e<g.length;e+=1)g[e].c();G=x(),U=d("nav"),z=d("ul");for(let e=0;e<b.length;e+=1)b[e].c();this.h()},l(e){l=_(e,"H1",{class:!0,"data-svelte-h":!0}),R(l)!=="svelte-1v3trnx"&&(l.textContent=a),o=L(e),i=_(e,"FORM",{class:!0});var f=A(i);v=_(f,"DIV",{class:!0});var t=A(v);n=_(t,"DIV",{class:!0});var B=A(n);c=_(B,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),R(c)!=="svelte-13xn7a2"&&(c.textContent=V),p=L(B),h=_(B,"INPUT",{class:!0,id:!0,type:!0}),B.forEach(u),t.forEach(u),C=L(f),P=_(f,"DIV",{class:!0});var ie=A(P);k=_(ie,"DIV",{class:!0});var J=A(k);j=_(J,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),R(j)!=="svelte-15kbfjq"&&(j.textContent=E),y=L(J),T=_(J,"INPUT",{class:!0,id:!0,type:!0}),J.forEach(u),ie.forEach(u),X=L(f),I=_(f,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),R(I)!=="svelte-118zbxv"&&(I.textContent=ne),f.forEach(u),F=L(e),w=_(e,"H1",{"data-svelte-h":!0}),R(w)!=="svelte-uxknpj"&&(w.textContent=re),Y=L(e),N=_(e,"TABLE",{class:!0});var K=A(N);S=_(K,"THEAD",{"data-svelte-h":!0}),R(S)!=="svelte-1ghw41m"&&(S.innerHTML=oe),Z=L(K),O=_(K,"TBODY",{});var ce=A(O);for(let H=0;H<g.length;H+=1)g[H].l(ce);ce.forEach(u),K.forEach(u),G=L(e),U=_(e,"NAV",{});var ue=A(U);z=_(ue,"UL",{class:!0});var fe=A(z);for(let H=0;H<b.length;H+=1)b[H].l(fe);fe.forEach(u),ue.forEach(u),this.h()},h(){m(l,"class","mt-3"),m(c,"class","form-label"),m(c,"for","email"),m(h,"class","form-control"),m(h,"id","email"),m(h,"type","email"),m(n,"class","col"),m(v,"class","row mb-3"),m(j,"class","form-label"),m(j,"for","name"),m(T,"class","form-control"),m(T,"id","name"),m(T,"type","text"),m(k,"class","col"),m(P,"class","row mb-3"),m(I,"type","button"),m(I,"class","btn btn-primary"),m(i,"class","mb-5"),m(N,"class","table"),m(z,"class","pagination")},m(e,f){D(e,l,f),D(e,o,f),D(e,i,f),s(i,v),s(v,n),s(n,c),s(n,p),s(n,h),Q(h,r[3].email),s(i,C),s(i,P),s(P,k),s(k,j),s(k,y),s(k,T),Q(T,r[3].name),s(i,X),s(i,I),D(e,F,f),D(e,w,f),D(e,Y,f),D(e,N,f),s(N,S),s(N,Z),s(N,O);for(let t=0;t<g.length;t+=1)g[t]&&g[t].m(O,null);D(e,G,f),D(e,U,f),s(U,z);for(let t=0;t<b.length;t+=1)b[t]&&b[t].m(z,null);$||(se=[ee(h,"input",r[7]),ee(T,"input",r[8]),ee(I,"click",r[4])],$=!0)},p(e,[f]){if(f&8&&h.value!==e[3].email&&Q(h,e[3].email),f&8&&T.value!==e[3].name&&Q(T,e[3].name),f&4){q=W(e[2]);let t;for(t=0;t<q.length;t+=1){const B=ge(e,q,t);g[t]?g[t].p(B,f):(g[t]=be(B),g[t].c(),g[t].m(O,null))}for(;t<g.length;t+=1)g[t].d(1);g.length=q.length}if(f&3){M=W(Array(e[1]));let t;for(t=0;t<M.length;t+=1){const B=pe(e,M,t);b[t]?b[t].p(B,f):(b[t]=Ce(B),b[t].c(),b[t].m(z,null))}for(;t<b.length;t+=1)b[t].d(1);b.length=M.length}},i:me,o:me,d(e){e&&(u(l),u(o),u(i),u(F),u(w),u(Y),u(N),u(G),u(U)),de(g,e),de(b,e),$=!1,ye(se)}}}let Le=4;function Pe(r,l,a){let o,i;he(r,Ve,E=>a(5,o=E)),he(r,ke,E=>a(6,i=E));const v=i.url.origin;let n,c=0,V=[],p={email:null,name:null};function h(){let E=`?pageSize=${Le}&pageNumber=${n}`;var y={method:"get",url:`${v}/api/vermieter${E}`,headers:{Authorization:`Bearer ${o}`}};te(y).then(function(T){a(2,V=T.data.content),a(1,c=T.data.totalPages)}).catch(function(T){alert("Could not get vermieters"),console.log(T)})}function C(){var E={method:"get",url:"https://disify.com/api/email/"+p.email};te(E).then(function(y){console.log("Validated email "+p.email),console.log(y.data),y.data.format&&!y.data.disposable&&y.data.dns?P():alert("Email "+p.email+" is not valid.")}).catch(function(y){alert("Could not validate email"),console.log(y)})}function P(){var E={method:"post",url:`${v}/api/vermieter`,headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},data:p};te(E).then(function(y){alert("Vermieter created"),h()}).catch(function(y){alert("Could not create vermieter"),console.log(y)})}function k(){p.email=this.value,a(3,p)}function j(){p.name=this.value,a(3,p)}return r.$$.update=()=>{if(r.$$.dirty&96&&o!==""){let E=i.url.searchParams;E.has("page")?a(0,n=E.get("page")):a(0,n="1"),h()}},[n,c,V,p,C,o,i,k,j]}class we extends Te{constructor(l){super(),Ae(this,l,Pe,xe,Ee,{})}}export{we as component};