import{s as J,g as K,u as Q,h as R,j as W,c as P}from"../chunks/scheduler.B2kig3xY.js";import{S as X,i as Y,e as b,s as M,c as p,a as y,l as N,f as H,d,m as n,g as L,h as T,x as Z,y as x,t as ee,b as te,o as ae,j as se}from"../chunks/index.DR8NClmD.js";import{i as le,u as ne}from"../chunks/store.cPuX3XdM.js";import{a as ie}from"../chunks/auth.service.Byoz8XuG.js";const re=!1,oe=!0,me=Object.freeze(Object.defineProperty({__proto__:null,prerender:oe,ssr:re},Symbol.toStringTag,{value:"Module"}));function $(i){let e,l='<a class="nav-link" aria-current="page" href="/vermieter">Vermieter</a>';return{c(){e=b("li"),e.innerHTML=l,this.h()},l(s){e=p(s,"LI",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-1u3rv4y"&&(e.innerHTML=l),this.h()},h(){n(e,"class","nav-item")},m(s,r){L(s,e,r)},d(s){s&&d(e)}}}function F(i){let e,l='<a class="nav-link" href="/devices">Devices</a>',s,r,u='<a class="nav-link" href="/account">Account</a>';return{c(){e=b("li"),e.innerHTML=l,s=M(),r=b("li"),r.innerHTML=u,this.h()},l(t){e=p(t,"LI",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-1niefh9"&&(e.innerHTML=l),s=H(t),r=p(t,"LI",{class:!0,"data-svelte-h":!0}),N(r)!=="svelte-1gjimj1"&&(r.innerHTML=u),this.h()},h(){n(e,"class","nav-item"),n(r,"class","nav-item")},m(t,f){L(t,e,f),L(t,s,f),L(t,r,f)},d(t){t&&(d(e),d(s),d(r))}}}function G(i){let e,l=i[1].name+"",s,r,u,t="Log Out",f,V;return{c(){e=b("span"),s=ee(l),r=M(),u=b("button"),u.textContent=t,this.h()},l(o){e=p(o,"SPAN",{class:!0});var c=y(e);s=te(c,l),c.forEach(d),r=H(o),u=p(o,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),N(u)!=="svelte-13o4gc3"&&(u.textContent=t),this.h()},h(){n(e,"class","navbar-text me-2"),n(u,"type","button"),n(u,"class","btn btn-primary")},m(o,c){L(o,e,c),T(e,s),L(o,r,c),L(o,u,c),f||(V=ae(u,"click",ie.logout),f=!0)},p(o,c){c&2&&l!==(l=o[1].name+"")&&se(s,l)},d(o){o&&(d(e),d(r),d(u)),f=!1,V()}}}function ue(i){let e,l,s,r="Techland",u,t,f='<span class="navbar-toggler-icon"></span>',V,o,c,S=i[0]&&i[1].user_roles&&i[1].user_roles.includes("admin"),j,q=i[0]&&i[1].user_roles&&(i[1].user_roles.includes("admin")||i[1].user_roles.includes("Vermieter")),U,k,A,C,E,v=S&&$(),m=q&&F(),_=i[0]&&G(i);const w=i[3].default,h=K(w,i,i[2],null);return{c(){e=b("nav"),l=b("div"),s=b("a"),s.textContent=r,u=M(),t=b("button"),t.innerHTML=f,V=M(),o=b("div"),c=b("ul"),v&&v.c(),j=M(),m&&m.c(),U=M(),k=b("div"),_&&_.c(),A=M(),C=b("div"),h&&h.c(),this.h()},l(a){e=p(a,"NAV",{class:!0});var g=y(e);l=p(g,"DIV",{class:!0});var I=y(l);s=p(I,"A",{class:!0,href:!0,"data-svelte-h":!0}),N(s)!=="svelte-nk3ulz"&&(s.textContent=r),u=H(I),t=p(I,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0,"data-svelte-h":!0}),N(t)!=="svelte-1nsq9qc"&&(t.innerHTML=f),V=H(I),o=p(I,"DIV",{class:!0,id:!0});var D=y(o);c=p(D,"UL",{class:!0});var O=y(c);v&&v.l(O),j=H(O),m&&m.l(O),O.forEach(d),U=H(D),k=p(D,"DIV",{class:!0});var z=y(k);_&&_.l(z),z.forEach(d),D.forEach(d),I.forEach(d),g.forEach(d),A=H(a),C=p(a,"DIV",{class:!0});var B=y(C);h&&h.l(B),B.forEach(d),this.h()},h(){n(s,"class","navbar-brand"),n(s,"href","/"),n(t,"class","navbar-toggler"),n(t,"type","button"),n(t,"data-bs-toggle","collapse"),n(t,"data-bs-target","#navbarNav"),n(t,"aria-controls","navbarNav"),n(t,"aria-expanded","false"),n(t,"aria-label","Toggle navigation"),n(c,"class","navbar-nav me-auto mb-2 mb-lg-0"),n(k,"class","d-flex"),n(o,"class","collapse navbar-collapse"),n(o,"id","navbarNav"),n(l,"class","container-fluid"),n(e,"class","navbar navbar-expand-lg bg-light"),n(C,"class","container mt-3")},m(a,g){L(a,e,g),T(e,l),T(l,s),T(l,u),T(l,t),T(l,V),T(l,o),T(o,c),v&&v.m(c,null),T(c,j),m&&m.m(c,null),T(o,U),T(o,k),_&&_.m(k,null),L(a,A,g),L(a,C,g),h&&h.m(C,null),E=!0},p(a,[g]){g&3&&(S=a[0]&&a[1].user_roles&&a[1].user_roles.includes("admin")),S?v||(v=$(),v.c(),v.m(c,j)):v&&(v.d(1),v=null),g&3&&(q=a[0]&&a[1].user_roles&&(a[1].user_roles.includes("admin")||a[1].user_roles.includes("Vermieter"))),q?m||(m=F(),m.c(),m.m(c,null)):m&&(m.d(1),m=null),a[0]?_?_.p(a,g):(_=G(a),_.c(),_.m(k,null)):_&&(_.d(1),_=null),h&&h.p&&(!E||g&4)&&Q(h,w,a,a[2],E?W(w,a[2],g,null):R(a[2]),null)},i(a){E||(Z(h,a),E=!0)},o(a){x(h,a),E=!1},d(a){a&&(d(e),d(A),d(C)),v&&v.d(),m&&m.d(),_&&_.d(),h&&h.d(a)}}}function ce(i,e,l){let s,r;P(i,le,f=>l(0,s=f)),P(i,ne,f=>l(1,r=f));let{$$slots:u={},$$scope:t}=e;return i.$$set=f=>{"$$scope"in f&&l(2,t=f.$$scope)},[s,r,t,u]}class he extends X{constructor(e){super(),Y(this,e,ce,ue,J,{})}}export{he as component,me as universal};
