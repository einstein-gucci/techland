import{s as w,e as F,u as G,g as J,f as K,c as z}from"../chunks/scheduler.D0jLBuvl.js";import{S as Q,i as R,e as m,s as N,c as b,a as C,l as I,f as H,d as v,m as n,g as k,h as g,w as W,x as X,t as Y,b as Z,o as ee,j as te}from"../chunks/index.UB_LJHIo.js";import{a as ae,i as le,u as se}from"../chunks/auth.service.D09glovF.js";const ne=!1,ie=!0,de=Object.freeze(Object.defineProperty({__proto__:null,prerender:ie,ssr:ne},Symbol.toStringTag,{value:"Module"}));function B(o){let e,a='<a class="nav-link" aria-current="page" href="/vermieter">Vermieter</a>';return{c(){e=m("li"),e.innerHTML=a,this.h()},l(t){e=b(t,"LI",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-p3kpoc"&&(e.innerHTML=a),this.h()},h(){n(e,"class","nav-item")},m(t,_){k(t,e,_)},d(t){t&&v(e)}}}function P(o){let e,a='<a class="nav-link" href="/devices">Devices</a>';return{c(){e=m("li"),e.innerHTML=a,this.h()},l(t){e=b(t,"LI",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-1niefh9"&&(e.innerHTML=a),this.h()},h(){n(e,"class","nav-item")},m(t,_){k(t,e,_)},d(t){t&&v(e)}}}function $(o){let e,a=o[1].name+"",t,_,u,i="Log Out",p,x;return{c(){e=m("span"),t=Y(a),_=N(),u=m("button"),u.textContent=i,this.h()},l(s){e=b(s,"SPAN",{class:!0});var r=C(e);t=Z(r,a),r.forEach(v),_=H(s),u=b(s,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),I(u)!=="svelte-1xp36up"&&(u.textContent=i),this.h()},h(){n(e,"class","navbar-text me-2"),n(u,"type","button"),n(u,"class","btn btn-primary")},m(s,r){k(s,e,r),g(e,t),k(s,_,r),k(s,u,r),p||(x=ee(u,"click",ae.logout),p=!0)},p(s,r){r&2&&a!==(a=s[1].name+"")&&te(t,a)},d(s){s&&(v(e),v(_),v(u)),p=!1,x()}}}function re(o){let e,a,t,_="Techland",u,i,p='<span class="navbar-toggler-icon"></span>',x,s,r,V,S,L,A,y,E,f=o[0]&&B(),d=o[0]&&P(),c=o[0]&&$(o);const j=o[3].default,h=F(j,o,o[2],null);return{c(){e=m("nav"),a=m("div"),t=m("a"),t.textContent=_,u=N(),i=m("button"),i.innerHTML=p,x=N(),s=m("div"),r=m("ul"),f&&f.c(),V=N(),d&&d.c(),S=N(),L=m("div"),c&&c.c(),A=N(),y=m("div"),h&&h.c(),this.h()},l(l){e=b(l,"NAV",{class:!0});var T=C(e);a=b(T,"DIV",{class:!0});var M=C(a);t=b(M,"A",{class:!0,href:!0,"data-svelte-h":!0}),I(t)!=="svelte-nk3ulz"&&(t.textContent=_),u=H(M),i=b(M,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0,"data-svelte-h":!0}),I(i)!=="svelte-1nsq9qc"&&(i.innerHTML=p),x=H(M),s=b(M,"DIV",{class:!0,id:!0});var D=C(s);r=b(D,"UL",{class:!0});var O=C(r);f&&f.l(O),V=H(O),d&&d.l(O),O.forEach(v),S=H(D),L=b(D,"DIV",{class:!0});var q=C(L);c&&c.l(q),q.forEach(v),D.forEach(v),M.forEach(v),T.forEach(v),A=H(l),y=b(l,"DIV",{class:!0});var U=C(y);h&&h.l(U),U.forEach(v),this.h()},h(){n(t,"class","navbar-brand"),n(t,"href","/"),n(i,"class","navbar-toggler"),n(i,"type","button"),n(i,"data-bs-toggle","collapse"),n(i,"data-bs-target","#navbarNav"),n(i,"aria-controls","navbarNav"),n(i,"aria-expanded","false"),n(i,"aria-label","Toggle navigation"),n(r,"class","navbar-nav me-auto mb-2 mb-lg-0"),n(L,"class","d-flex"),n(s,"class","collapse navbar-collapse"),n(s,"id","navbarNav"),n(a,"class","container-fluid"),n(e,"class","navbar navbar-expand-lg bg-light"),n(y,"class","container mt-3")},m(l,T){k(l,e,T),g(e,a),g(a,t),g(a,u),g(a,i),g(a,x),g(a,s),g(s,r),f&&f.m(r,null),g(r,V),d&&d.m(r,null),g(s,S),g(s,L),c&&c.m(L,null),k(l,A,T),k(l,y,T),h&&h.m(y,null),E=!0},p(l,[T]){l[0]?f||(f=B(),f.c(),f.m(r,V)):f&&(f.d(1),f=null),l[0]?d||(d=P(),d.c(),d.m(r,null)):d&&(d.d(1),d=null),l[0]?c?c.p(l,T):(c=$(l),c.c(),c.m(L,null)):c&&(c.d(1),c=null),h&&h.p&&(!E||T&4)&&G(h,j,l,l[2],E?K(j,l[2],T,null):J(l[2]),null)},i(l){E||(W(h,l),E=!0)},o(l){X(h,l),E=!1},d(l){l&&(v(e),v(A),v(y)),f&&f.d(),d&&d.d(),c&&c.d(),h&&h.d(l)}}}function oe(o,e,a){let t,_;z(o,le,p=>a(0,t=p)),z(o,se,p=>a(1,_=p));let{$$slots:u={},$$scope:i}=e;return o.$$set=p=>{"$$scope"in p&&a(2,i=p.$$scope)},[t,_,i,u]}class ve extends Q{constructor(e){super(),R(this,e,oe,re,w,{})}}export{ve as component,de as universal};
