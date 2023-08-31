import{s as He,n as fe,r as we,f as be}from"../chunks/scheduler.8b5db029.js";import{S as Me,i as Ne,g as v,s as R,m as C,h as b,c as w,j as H,n as g,f,y as G,k as T,a as p,x as o,z as Te,A as V,o as O,H as qe,B as Pe,C as Ie,D as Le,e as je}from"../chunks/index.44bf212c.js";function oe(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Ee(t,e,r){const l=t.slice();return l[19]=e[r],l[21]=r,l}function ke(t,e,r){const l=t.slice();return l[19]=e[r],l[23]=r,l}function Ce(t){let e,r="Problem",l,s;return{c(){e=v("button"),e.textContent=r,this.h()},l(i){e=b(i,"BUTTON",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1fomnwu"&&(e.textContent=r),this.h()},h(){T(e,"class","svelte-c3jtp0")},m(i,n){p(i,e,n),l||(s=V(e,"click",t[11]),l=!0)},p:fe,d(i){i&&f(e),l=!1,s()}}}function ge(t){let e,r,l,s,i=t[0]*(t[0]+1)/2+"",n,d,E=t[0]*(t[0]+1)/2%2?", it is odd => <i>There is no solution.</i>":", it is even => <b>There are solutions.</b>",h,m=t[0]*(t[0]+1)/4-Math.max(t[3],t[4])+"",k,S;return{c(){e=v("span"),r=C("🗝 "),l=v("span"),s=C(" = "),n=C(i),d=new qe(!1),h=C(", Target: "),k=C(m),S=C(" 🗝"),this.h()},l(u){e=b(u,"SPAN",{});var D=H(e);r=g(D,"🗝 "),l=b(D,"SPAN",{id:!0}),H(l).forEach(f),s=g(D," = "),n=g(D,i),d=Pe(D,!1),h=g(D,", Target: "),k=g(D,m),S=g(D," 🗝"),D.forEach(f),this.h()},h(){T(l,"id","mjxx"),d.a=h},m(u,D){p(u,e,D),o(e,r),o(e,l),o(e,s),o(e,n),d.m(E,e),o(e,h),o(e,k),o(e,S)},p(u,D){D&1&&i!==(i=u[0]*(u[0]+1)/2+"")&&O(n,i),D&1&&E!==(E=u[0]*(u[0]+1)/2%2?", it is odd => <i>There is no solution.</i>":", it is even => <b>There are solutions.</b>")&&d.p(E),D&25&&m!==(m=u[0]*(u[0]+1)/4-Math.max(u[3],u[4])+"")&&O(k,m)},d(u){u&&f(e)}}}function De(t){let e,r,l,s,i,n,d,E,h,m,k,S,u,D;function M(j,c){return j[3]+j[4]==j[0]*(j[0]+1)/2?Oe:ye}let N=M(t),B=N(t);return{c(){e=v("table"),r=v("td"),l=C(t[3]),s=R(),i=v("td"),n=R(),d=v("td"),B.c(),E=R(),h=v("td"),m=R(),k=v("td"),S=C(t[4]),this.h()},l(j){e=b(j,"TABLE",{class:!0});var c=H(e);r=b(c,"TD",{class:!0,id:!0});var U=H(r);l=g(U,t[3]),U.forEach(f),s=w(c),i=b(c,"TD",{class:!0}),H(i).forEach(f),n=w(c),d=b(c,"TD",{class:!0});var z=H(d);B.l(z),z.forEach(f),E=w(c),h=b(c,"TD",{class:!0}),H(h).forEach(f),m=w(c),k=b(c,"TD",{class:!0,id:!0});var A=H(k);S=g(A,t[4]),A.forEach(f),c.forEach(f),this.h()},h(){T(r,"class","s svelte-c3jtp0"),T(r,"id","h1"),T(i,"class","c2 svelte-c3jtp0"),T(d,"class","cont svelte-c3jtp0"),T(h,"class","c2 svelte-c3jtp0"),T(k,"class","s svelte-c3jtp0"),T(k,"id","h2"),T(e,"class","svelte-c3jtp0")},m(j,c){p(j,e,c),o(e,r),o(r,l),o(e,s),o(e,i),o(e,n),o(e,d),B.m(d,null),o(e,E),o(e,h),o(e,m),o(e,k),o(k,S),u||(D=[V(r,"dragover",Ye),V(r,"drop",t[16]),V(k,"dragover",Fe),V(k,"drop",t[18])],u=!0)},p(j,c){c&8&&O(l,j[3]),N===(N=M(j))&&B?B.p(j,c):(B.d(1),B=N(j),B&&(B.c(),B.m(d,null))),c&16&&O(S,j[4])},d(j){j&&f(e),B.d(),u=!1,we(D)}}}function ye(t){let e,r=oe(Array(t[8])),l=[];for(let s=0;s<r.length;s+=1)l[s]=Se(Ee(t,r,s));return{c(){e=v("table");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=b(s,"TABLE",{class:!0});var i=H(e);for(let n=0;n<l.length;n+=1)l[n].l(i);i.forEach(f),this.h()},h(){T(e,"class","svelte-c3jtp0")},m(s,i){p(s,e,i);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(e,null)},p(s,i){if(i&771){r=oe(Array(s[8]));let n;for(n=0;n<r.length;n+=1){const d=Ee(s,r,n);l[n]?l[n].p(d,i):(l[n]=Se(d),l[n].c(),l[n].m(e,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=r.length}},d(s){s&&f(e),Le(l,s)}}}function Oe(t){let e;function r(i,n){return i[3]==i[4]?ze:Ue}let l=r(t),s=l(t);return{c(){s.c(),e=je()},l(i){s.l(i),e=je()},m(i,n){s.m(i,n),p(i,e,n)},p(i,n){l===(l=r(i))&&s?s.p(i,n):(s.d(1),s=l(i),s&&(s.c(),s.m(e.parentNode,e)))},d(i){i&&f(e),s.d(i)}}}function Be(t){let e,r=t[9](t[23],t[21],t[8])+"",l,s,i,n,d,E;return{c(){e=v("td"),l=C(r),n=R(),this.h()},l(h){e=b(h,"TD",{draggable:!0,id:!0,class:!0});var m=H(e);l=g(m,r),m.forEach(f),n=w(h),this.h()},h(){T(e,"draggable","true"),T(e,"id",s="x"+t[9](t[23],t[21],t[8])),T(e,"class",i=be(t[9](t[23],t[21],t[8])>t[0]?"h e":"e")+" svelte-c3jtp0")},m(h,m){p(h,e,m),o(e,l),p(h,n,m),d||(E=V(e,"dragstart",t[17]),d=!0)},p(h,m){m&256&&r!==(r=h[9](h[23],h[21],h[8])+"")&&O(l,r),m&256&&s!==(s="x"+h[9](h[23],h[21],h[8]))&&T(e,"id",s),m&257&&i!==(i=be(h[9](h[23],h[21],h[8])>h[0]?"h e":"e")+" svelte-c3jtp0")&&T(e,"class",i)},d(h){h&&(f(e),f(n)),d=!1,E()}}}function Se(t){let e,r=oe(Array(t[8])),l=[];for(let s=0;s<r.length;s+=1)l[s]=Be(ke(t,r,s));return{c(){e=v("tr");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=b(s,"TR",{class:!0});var i=H(e);for(let n=0;n<l.length;n+=1)l[n].l(i);i.forEach(f),this.h()},h(){T(e,"class","svelte-c3jtp0")},m(s,i){p(s,e,i);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(e,null)},p(s,i){if(i&771){r=oe(Array(s[8]));let n;for(n=0;n<r.length;n+=1){const d=ke(s,r,n);l[n]?l[n].p(d,i):(l[n]=Be(d),l[n].c(),l[n].m(e,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=r.length}},d(s){s&&f(e),Le(l,s)}}}function Ue(t){let e,r="Unsolved";return{c(){e=v("code"),e.textContent=r,this.h()},l(l){e=b(l,"CODE",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-fmef9a"&&(e.textContent=r),this.h()},h(){T(e,"class","svelte-c3jtp0")},m(l,s){p(l,e,s)},p:fe,d(l){l&&f(e)}}}function ze(t){let e,r,l='<td colspan="2" class="svelte-c3jtp0"><b>Solved:</b></td>',s,i,n,d="Set 1:",E,h=t[5].sort(Ae).join(", ")+"",m,k,S,u,D="Set 2:",M,N=t[6].sort(Re).join(", ")+"",B;return{c(){e=v("table"),r=v("tr"),r.innerHTML=l,s=R(),i=v("tr"),n=v("td"),n.textContent=d,E=v("td"),m=C(h),k=R(),S=v("tr"),u=v("td"),u.textContent=D,M=v("td"),B=C(N),this.h()},l(j){e=b(j,"TABLE",{class:!0});var c=H(e);r=b(c,"TR",{"data-svelte-h":!0}),G(r)!=="svelte-ma82jq"&&(r.innerHTML=l),s=w(c),i=b(c,"TR",{});var U=H(i);n=b(U,"TD",{class:!0,"data-svelte-h":!0}),G(n)!=="svelte-1c8ryr1"&&(n.textContent=d),E=b(U,"TD",{class:!0});var z=H(E);m=g(z,h),z.forEach(f),U.forEach(f),k=w(c),S=b(c,"TR",{});var A=H(S);u=b(A,"TD",{class:!0,"data-svelte-h":!0}),G(u)!=="svelte-1qnr3g9"&&(u.textContent=D),M=b(A,"TD",{class:!0});var F=H(M);B=g(F,N),F.forEach(f),A.forEach(f),c.forEach(f),this.h()},h(){T(n,"class","l h1 svelte-c3jtp0"),T(E,"class","r h1 svelte-c3jtp0"),T(u,"class","l h2 svelte-c3jtp0"),T(M,"class","r h2 svelte-c3jtp0"),T(e,"class","sol svelte-c3jtp0")},m(j,c){p(j,e,c),o(e,r),o(e,s),o(e,i),o(i,n),o(i,E),o(E,m),o(e,k),o(e,S),o(S,u),o(S,M),o(M,B)},p(j,c){c&32&&h!==(h=j[5].sort(Ae).join(", ")+"")&&O(m,h),c&64&&N!==(N=j[6].sort(Re).join(", ")+"")&&O(B,N)},d(j){j&&f(e)}}}function Ve(t){let e,r,l,s,i,n,d,E,h="Your task is to divide the numbers 1,2,…,n into two sets of equal sum.",m,k,S,u,D,M,N,B=(t[8]-1)**2+"",j,c,U,z,A=t[8]**2+"",F,K,W,he,X,_e,Z,de,Q=t[8]**2==t[0]?"0) filled all":`${t[8]**2-t[0]} unused)`,$,ce,x,ee,te,y,le,se,ne,ae,re,J,ie,ue,Y,me="CSES Problem Set: Two Sets",pe,ve,q=t[2]&&Ce(t),P=t[7]&&ge(t),I=t[2]&&De(t);return{c(){e=v("br"),r=R(),l=v("h1"),s=C("Two Sets "),q&&q.c(),i=R(),n=v("br"),d=R(),E=v("code"),E.textContent=h,m=R(),k=v("br"),S=R(),u=v("div"),D=C("n = "),M=C(t[0]),N=C(`
	(`),j=C(B),c=C("≤"),U=C(t[0]),z=C("≤"),F=C(A),K=C(" ⇒ "),W=C(t[8]),he=C("x"),X=C(t[8]),_e=C(" - "),Z=C(t[0]),de=C(" = "),$=C(Q),ce=R(),P&&P.c(),x=R(),ee=v("br"),te=R(),y=v("input"),le=R(),se=v("br"),ne=R(),ae=v("br"),re=R(),I&&I.c(),J=R(),ie=v("br"),ue=R(),Y=v("a"),Y.textContent=me,this.h()},l(a){e=b(a,"BR",{}),r=w(a),l=b(a,"H1",{class:!0});var _=H(l);s=g(_,"Two Sets "),q&&q.l(_),_.forEach(f),i=w(a),n=b(a,"BR",{}),d=w(a),E=b(a,"CODE",{class:!0,"data-svelte-h":!0}),G(E)!=="svelte-z657w7"&&(E.textContent=h),m=w(a),k=b(a,"BR",{}),S=w(a),u=b(a,"DIV",{class:!0});var L=H(u);D=g(L,"n = "),M=g(L,t[0]),N=g(L,`
	(`),j=g(L,B),c=g(L,"≤"),U=g(L,t[0]),z=g(L,"≤"),F=g(L,A),K=g(L," ⇒ "),W=g(L,t[8]),he=g(L,"x"),X=g(L,t[8]),_e=g(L," - "),Z=g(L,t[0]),de=g(L," = "),$=g(L,Q),ce=w(L),P&&P.l(L),L.forEach(f),x=w(a),ee=b(a,"BR",{}),te=w(a),y=b(a,"INPUT",{type:!0,min:!0,max:!0,class:!0}),le=w(a),se=b(a,"BR",{}),ne=w(a),ae=b(a,"BR",{}),re=w(a),I&&I.l(a),J=w(a),ie=b(a,"BR",{}),ue=w(a),Y=b(a,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),G(Y)!=="svelte-1h121q6"&&(Y.textContent=me),this.h()},h(){T(l,"class","svelte-c3jtp0"),T(E,"class","svelte-c3jtp0"),T(u,"class","svelte-c3jtp0"),T(y,"type","range"),T(y,"min",3),T(y,"max",100),T(y,"class","svelte-c3jtp0"),T(Y,"href","https://cses.fi/problemset/task/1092"),T(Y,"target","_blank"),T(Y,"class","svelte-c3jtp0")},m(a,_){p(a,e,_),p(a,r,_),p(a,l,_),o(l,s),q&&q.m(l,null),p(a,i,_),p(a,n,_),p(a,d,_),p(a,E,_),p(a,m,_),p(a,k,_),p(a,S,_),p(a,u,_),o(u,D),o(u,M),o(u,N),o(u,j),o(u,c),o(u,U),o(u,z),o(u,F),o(u,K),o(u,W),o(u,he),o(u,X),o(u,_e),o(u,Z),o(u,de),o(u,$),o(u,ce),P&&P.m(u,null),p(a,x,_),p(a,ee,_),p(a,te,_),p(a,y,_),Te(y,t[0]),p(a,le,_),p(a,se,_),p(a,ne,_),p(a,ae,_),p(a,re,_),I&&I.m(a,_),p(a,J,_),p(a,ie,_),p(a,ue,_),p(a,Y,_),pe||(ve=[V(y,"change",t[12]),V(y,"input",t[12]),V(y,"input",t[13]),V(y,"mouseup",t[14]),V(y,"keyup",t[15])],pe=!0)},p(a,[_]){a[2]?q?q.p(a,_):(q=Ce(a),q.c(),q.m(l,null)):q&&(q.d(1),q=null),_&1&&O(M,a[0]),_&256&&B!==(B=(a[8]-1)**2+"")&&O(j,B),_&1&&O(U,a[0]),_&256&&A!==(A=a[8]**2+"")&&O(F,A),_&256&&O(W,a[8]),_&256&&O(X,a[8]),_&1&&O(Z,a[0]),_&257&&Q!==(Q=a[8]**2==a[0]?"0) filled all":`${a[8]**2-a[0]} unused)`)&&O($,Q),a[7]?P?P.p(a,_):(P=ge(a),P.c(),P.m(u,null)):P&&(P.d(1),P=null),_&1&&Te(y,a[0]),a[2]?I?I.p(a,_):(I=De(a),I.c(),I.m(J.parentNode,J)):I&&(I.d(1),I=null)},i:fe,o:fe,d(a){a&&(f(e),f(r),f(l),f(i),f(n),f(d),f(E),f(m),f(k),f(S),f(u),f(x),f(ee),f(te),f(y),f(le),f(se),f(ne),f(ae),f(re),f(J),f(ie),f(ue),f(Y)),q&&q.d(),P&&P.d(),I&&I.d(a),pe=!1,we(ve)}}}const Ye=t=>t.preventDefault(),Ae=(t,e)=>t-e,Re=(t,e)=>t-e,Fe=t=>t.preventDefault();function Ge(t,e,r){let l;var s={x:0,id:""},i=12,n=!0,d=0,E=0,h=[],m=[],k=!1;const S=(A,F,K)=>1+K*F+A;function u(A){r(2,n=!1),r(3,d=0),r(4,E=0),r(5,h=[]),r(6,m=[]),k&&umj(A)}const D=()=>{r(7,k=!k),setTimeout(()=>{k&&umj(i)},100)};function M(){i=Ie(this.value),r(0,i)}const N=()=>u(i),B=()=>r(2,n=!0),j=()=>r(2,n=!0),c=A=>{r(3,d+=s.x),h.push(s.x),document.getElementById(s.id).classList.add("h")},U=A=>r(1,s={x:Number(A.target.innerHTML),id:A.target.id}),z=A=>{r(4,E+=s.x),m.push(s.x),document.getElementById(s.id).classList.add("h")};return t.$$.update=()=>{t.$$.dirty&1&&r(8,l=Math.trunc(Math.sqrt(i)+.99999))},[i,s,n,d,E,h,m,k,l,S,u,D,M,N,B,j,c,U,z]}class Qe extends Me{constructor(e){super(),Ne(this,e,Ge,Ve,He,{})}}export{Qe as component};
