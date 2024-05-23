import{s as we,d as We,n as Se,r as Ze,c as ze,o as Fe}from"../chunks/scheduler.D0jLBuvl.js";import{S as Ye,i as Je,e as l,s as m,c as n,l as I,f as C,a as T,d as i,m as s,n as L,g as ee,h as e,q as Ve,o as de,r as Ke,u as Qe,t as se,b as ie,j as re,v as Xe}from"../chunks/index.UB_LJHIo.js";import{e as ke}from"../chunks/each.D6YF6ztN.js";import{a as qe}from"../chunks/axios.B4uVmeYG.js";import{p as $e}from"../chunks/stores.CgoKgi52.js";function je(r,a,E){const x=r.slice();return x[1]=a[E],x}function Ge(r){let a,E,x=r[1].name+"",d,N,c,b=r[1].description+"",k,q,f,S=r[1].deviceType+"",A,h,p,Y=r[1].mietpreis+"",J,y,j,g=r[1].deviceState+"",M,H,Q,G=r[1].vermieterId+"",u,P;return{c(){a=l("tr"),E=l("td"),d=se(x),N=m(),c=l("td"),k=se(b),q=m(),f=l("td"),A=se(S),h=m(),p=l("td"),J=se(Y),y=m(),j=l("td"),M=se(g),H=m(),Q=l("td"),u=se(G),P=m()},l(D){a=n(D,"TR",{});var o=T(a);E=n(o,"TD",{});var ce=T(E);d=ie(ce,x),ce.forEach(i),N=C(o),c=n(o,"TD",{});var R=T(c);k=ie(R,b),R.forEach(i),q=C(o),f=n(o,"TD",{});var ue=T(f);A=ie(ue,S),ue.forEach(i),h=C(o),p=n(o,"TD",{});var U=T(p);J=ie(U,Y),U.forEach(i),y=C(o),j=n(o,"TD",{});var ve=T(j);M=ie(ve,g),ve.forEach(i),H=C(o),Q=n(o,"TD",{});var B=T(Q);u=ie(B,G),B.forEach(i),P=C(o),o.forEach(i)},m(D,o){ee(D,a,o),e(a,E),e(E,d),e(a,N),e(a,c),e(c,k),e(a,q),e(a,f),e(f,A),e(a,h),e(a,p),e(p,J),e(a,y),e(a,j),e(j,M),e(a,H),e(a,Q),e(Q,u),e(a,P)},p(D,o){o&1&&x!==(x=D[1].name+"")&&re(d,x),o&1&&b!==(b=D[1].description+"")&&re(k,b),o&1&&S!==(S=D[1].deviceType+"")&&re(A,S),o&1&&Y!==(Y=D[1].mietpreis+"")&&re(J,Y),o&1&&g!==(g=D[1].deviceState+"")&&re(M,g),o&1&&G!==(G=D[1].vermieterId+"")&&re(u,G)},d(D){D&&i(a)}}}function et(r){let a,E="Create Device",x,d,N,c,b,k="Name",q,f,S,A,h,p,Y="Description",J,y,j,g,M,H,Q="Type",G,u,P,D="COMPUTER",o,ce="MOBIL",R,ue="AUDIOVIDEO",U,ve="HAUSHALT",B,ye="KÜCHENGERÄT",K,ge="BÜRO",w,Le="WERKZEUG",W,Ne="SMARTHOME",Ee,X,$,Ae="Mietpreis",be,V,Oe,Z,Me="Submit",pe,te,Pe="All Devices",_e,z,ne,He='<tr><th scope="col">Name</th> <th scope="col">Description</th> <th scope="col">Type</th> <th scope="col">Mietpreis</th> <th scope="col">State</th> <th scope="col">VermieterId</th></tr>',xe,oe,Ie,Re,ae=ke(r[0]),O=[];for(let t=0;t<ae.length;t+=1)O[t]=Ge(je(r,ae,t));return{c(){a=l("h1"),a.textContent=E,x=m(),d=l("form"),N=l("div"),c=l("div"),b=l("label"),b.textContent=k,q=m(),f=l("input"),S=m(),A=l("div"),h=l("div"),p=l("label"),p.textContent=Y,J=m(),y=l("input"),j=m(),g=l("div"),M=l("div"),H=l("label"),H.textContent=Q,G=m(),u=l("select"),P=l("option"),P.textContent=D,o=l("option"),o.textContent=ce,R=l("option"),R.textContent=ue,U=l("option"),U.textContent=ve,B=l("option"),B.textContent=ye,K=l("option"),K.textContent=ge,w=l("option"),w.textContent=Le,W=l("option"),W.textContent=Ne,Ee=m(),X=l("div"),$=l("label"),$.textContent=Ae,be=m(),V=l("input"),Oe=m(),Z=l("button"),Z.textContent=Me,pe=m(),te=l("h1"),te.textContent=Pe,_e=m(),z=l("table"),ne=l("thead"),ne.innerHTML=He,xe=m(),oe=l("tbody");for(let t=0;t<O.length;t+=1)O[t].c();this.h()},l(t){a=n(t,"H1",{class:!0,"data-svelte-h":!0}),I(a)!=="svelte-y69oy2"&&(a.textContent=E),x=C(t),d=n(t,"FORM",{class:!0});var v=T(d);N=n(v,"DIV",{class:!0});var _=T(N);c=n(_,"DIV",{class:!0});var le=T(c);b=n(le,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),I(b)!=="svelte-15kbfjq"&&(b.textContent=k),q=C(le),f=n(le,"INPUT",{class:!0,id:!0,type:!0}),le.forEach(i),_.forEach(i),S=C(v),A=n(v,"DIV",{class:!0});var Ue=T(A);h=n(Ue,"DIV",{class:!0});var fe=T(h);p=n(fe,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),I(p)!=="svelte-17hm1qu"&&(p.textContent=Y),J=C(fe),y=n(fe,"INPUT",{class:!0,id:!0,type:!0}),fe.forEach(i),Ue.forEach(i),j=C(v),g=n(v,"DIV",{class:!0});var he=T(g);M=n(he,"DIV",{class:!0});var me=T(M);H=n(me,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),I(H)!=="svelte-1dxyp2i"&&(H.textContent=Q),G=C(me),u=n(me,"SELECT",{class:!0,id:!0});var F=T(u);P=n(F,"OPTION",{"data-svelte-h":!0}),I(P)!=="svelte-t51rny"&&(P.textContent=D),o=n(F,"OPTION",{"data-svelte-h":!0}),I(o)!=="svelte-1b0ue8o"&&(o.textContent=ce),R=n(F,"OPTION",{"data-svelte-h":!0}),I(R)!=="svelte-pxvlee"&&(R.textContent=ue),U=n(F,"OPTION",{"data-svelte-h":!0}),I(U)!=="svelte-1tft5vy"&&(U.textContent=ve),B=n(F,"OPTION",{"data-svelte-h":!0}),I(B)!=="svelte-xv2j6c"&&(B.textContent=ye),K=n(F,"OPTION",{"data-svelte-h":!0}),I(K)!=="svelte-3e5oi2"&&(K.textContent=ge),w=n(F,"OPTION",{"data-svelte-h":!0}),I(w)!=="svelte-14raz66"&&(w.textContent=Le),W=n(F,"OPTION",{"data-svelte-h":!0}),I(W)!=="svelte-h955fy"&&(W.textContent=Ne),F.forEach(i),me.forEach(i),Ee=C(he),X=n(he,"DIV",{class:!0});var Ce=T(X);$=n(Ce,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),I($)!=="svelte-1s3g1s2"&&($.textContent=Ae),be=C(Ce),V=n(Ce,"INPUT",{class:!0,id:!0,type:!0}),Ce.forEach(i),he.forEach(i),Oe=C(v),Z=n(v,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),I(Z)!=="svelte-cekam5"&&(Z.textContent=Me),v.forEach(i),pe=C(t),te=n(t,"H1",{"data-svelte-h":!0}),I(te)!=="svelte-1rvac7q"&&(te.textContent=Pe),_e=C(t),z=n(t,"TABLE",{class:!0});var Te=T(z);ne=n(Te,"THEAD",{"data-svelte-h":!0}),I(ne)!=="svelte-qv3nav"&&(ne.innerHTML=He),xe=C(Te),oe=n(Te,"TBODY",{});var Be=T(oe);for(let De=0;De<O.length;De+=1)O[De].l(Be);Be.forEach(i),Te.forEach(i),this.h()},h(){s(a,"class","mt-3"),s(b,"class","form-label"),s(b,"for","name"),s(f,"class","form-control"),s(f,"id","name"),s(f,"type","text"),s(c,"class","col"),s(N,"class","row mb-3"),s(p,"class","form-label"),s(p,"for","description"),s(y,"class","form-control"),s(y,"id","description"),s(y,"type","text"),s(h,"class","col"),s(A,"class","row mb-3"),s(H,"class","form-label"),s(H,"for","type"),P.__value="COMPUTER",L(P,P.__value),o.__value="MOBIL",L(o,o.__value),R.__value="AUDIOVIDEO",L(R,R.__value),U.__value="HAUSHALT",L(U,U.__value),B.__value="KÜCHENGERÄT",L(B,B.__value),K.__value="BÜRO",L(K,K.__value),w.__value="WERKZEUG",L(w,w.__value),W.__value="SMARTHOME",L(W,W.__value),s(u,"class","form-select"),s(u,"id","type"),r[1].deviceType===void 0&&We(()=>r[5].call(u)),s(M,"class","col"),s($,"class","form-label"),s($,"for","mietpreis"),s(V,"class","form-control"),s(V,"id","mietpreis"),s(V,"type","number"),s(X,"class","col"),s(g,"class","row mb-3"),s(Z,"type","button"),s(Z,"class","btn btn-primary"),s(d,"class","mb-5"),s(z,"class","table")},m(t,v){ee(t,a,v),ee(t,x,v),ee(t,d,v),e(d,N),e(N,c),e(c,b),e(c,q),e(c,f),L(f,r[1].name),e(d,S),e(d,A),e(A,h),e(h,p),e(h,J),e(h,y),L(y,r[1].description),e(d,j),e(d,g),e(g,M),e(M,H),e(M,G),e(M,u),e(u,P),e(u,o),e(u,R),e(u,U),e(u,B),e(u,K),e(u,w),e(u,W),Ve(u,r[1].deviceType,!0),e(g,Ee),e(g,X),e(X,$),e(X,be),e(X,V),L(V,r[1].mietpreis),e(d,Oe),e(d,Z),ee(t,pe,v),ee(t,te,v),ee(t,_e,v),ee(t,z,v),e(z,ne),e(z,xe),e(z,oe);for(let _=0;_<O.length;_+=1)O[_]&&O[_].m(oe,null);Ie||(Re=[de(f,"input",r[3]),de(y,"input",r[4]),de(u,"change",r[5]),de(V,"input",r[6]),de(Z,"click",r[2])],Ie=!0)},p(t,[v]){if(v&2&&f.value!==t[1].name&&L(f,t[1].name),v&2&&y.value!==t[1].description&&L(y,t[1].description),v&2&&Ve(u,t[1].deviceType),v&2&&Ke(V.value)!==t[1].mietpreis&&L(V,t[1].mietpreis),v&1){ae=ke(t[0]);let _;for(_=0;_<ae.length;_+=1){const le=je(t,ae,_);O[_]?O[_].p(le,v):(O[_]=Ge(le),O[_].c(),O[_].m(oe,null))}for(;_<O.length;_+=1)O[_].d(1);O.length=ae.length}},i:Se,o:Se,d(t){t&&(i(a),i(x),i(d),i(pe),i(te),i(_e),i(z)),Qe(O,t),Ie=!1,Ze(Re)}}}function tt(r,a,E){let x;ze(r,$e,h=>E(7,x=h));const d=x.url.origin;let N=[],c={name:null,description:null,deviceType:null,mietpreis:null};Fe(()=>{b()});function b(){var h={method:"get",url:d+"/api/device",headers:{}};qe(h).then(function(p){E(0,N=p.data)}).catch(function(p){alert("Could not get devices"),console.log(p)})}function k(){var h={method:"post",url:d+"/api/device",headers:{"Content-Type":"application/json"},data:c};qe(h).then(function(p){alert("Device created"),b()}).catch(function(p){alert("Could not create device"),console.log(p)})}function q(){c.name=this.value,E(1,c)}function f(){c.description=this.value,E(1,c)}function S(){c.deviceType=Xe(this),E(1,c)}function A(){c.mietpreis=Ke(this.value),E(1,c)}return[N,c,k,q,f,S,A]}class it extends Ye{constructor(a){super(),Je(this,a,tt,et,we,{})}}export{it as component};
