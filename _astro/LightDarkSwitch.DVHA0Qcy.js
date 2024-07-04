import{S as pe,i as he,s as ge,e as _,C as P,a as M,x as re,b as k,d as y,D as q,g as b,f as T,y as le,h as c,E as p,j as we,k as r,F as x,m as V,A as ie,t as N,q as U,G as B,v as be,w as ve}from"./index.Dnzg_utt.js";import{L as F,D as G,A as I,g as $e,s as _e,a as ke}from"./setting-utils._UXiQlVh.js";import{I as C}from"./Icon.Cl0VmTjV.js";function ye(e){let t,a,s,n,o,l,i,m,u,d,f,g,h,$,w,v,E,D,j,L,A,S,O,z,J,Q,X,H,K,R,W=e[0].lightMode+"",Y=e[0].darkMode+"",Z=e[0].systemMode+"";return n=new C({props:{icon:"material-symbols:wb-sunny-outline-rounded",class:"text-[1.25rem]"}}),i=new C({props:{icon:"material-symbols:dark-mode-outline-rounded",class:"text-[1.25rem]"}}),d=new C({props:{icon:"material-symbols:radio-button-partial-outline",class:"text-[1.25rem]"}}),w=new C({props:{icon:"material-symbols:wb-sunny-outline-rounded",class:"text-[1.25rem] mr-3"}}),L=new C({props:{icon:"material-symbols:dark-mode-outline-rounded",class:"text-[1.25rem] mr-3"}}),J=new C({props:{icon:"material-symbols:radio-button-partial-outline",class:"text-[1.25rem] mr-3"}}),{c(){t=_("div"),a=_("button"),s=_("div"),P(n.$$.fragment),o=M(),l=_("div"),P(i.$$.fragment),m=M(),u=_("div"),P(d.$$.fragment),f=M(),g=_("div"),h=_("div"),$=_("button"),P(w.$$.fragment),v=M(),E=re(W),D=M(),j=_("button"),P(L.$$.fragment),A=M(),S=re(Y),O=M(),z=_("button"),P(J.$$.fragment),Q=M(),X=re(Z),this.h()},l(e){t=k(e,"DIV",{class:!0,role:!0,tabindex:!0});var r=y(t);a=k(r,"BUTTON",{"aria-label":!0,role:!0,class:!0,id:!0});var c=y(a);s=k(c,"DIV",{class:!0});var p=y(s);q(n.$$.fragment,p),p.forEach(b),o=T(c),l=k(c,"DIV",{class:!0});var x=y(l);q(i.$$.fragment,x),x.forEach(b),m=T(c),u=k(c,"DIV",{class:!0});var M=y(u);q(d.$$.fragment,M),M.forEach(b),c.forEach(b),f=T(r),g=k(r,"DIV",{id:!0,class:!0});var I=y(g);h=k(I,"DIV",{class:!0});var V=y(h);$=k(V,"BUTTON",{class:!0});var _=y($);q(w.$$.fragment,_),v=T(_),E=le(_,W),_.forEach(b),D=T(V),j=k(V,"BUTTON",{class:!0});var N=y(j);q(L.$$.fragment,N),A=T(N),S=le(N,Y),N.forEach(b),O=T(V),z=k(V,"BUTTON",{class:!0});var U=y(z);q(J.$$.fragment,U),Q=T(U),X=le(U,Z),U.forEach(b),V.forEach(b),I.forEach(b),r.forEach(b),this.h()},h(){c(s,"class","absolute"),p(s,"opacity-0",e[1]!==F),c(l,"class","absolute"),p(l,"opacity-0",e[1]!==G),c(u,"class","absolute"),p(u,"opacity-0",e[1]!==I),c(a,"aria-label","Light/Dark Mode"),c(a,"role","menuitem"),c(a,"class","relative btn-plain h-11 w-11 rounded-lg active:scale-90"),c(a,"id","scheme-switch"),c($,"class","flex transition whitespace-nowrap items-center justify-start w-full btn-plain h-9 rounded-lg px-3 font-medium active:scale-95 mb-0.5 svelte-cwow1a"),p($,"current-setting",e[1]===F),c(j,"class","flex transition whitespace-nowrap items-center justify-start w-full btn-plain h-9 rounded-lg px-3 font-medium active:scale-95 mb-0.5 svelte-cwow1a"),p(j,"current-setting",e[1]===G),c(z,"class","flex transition whitespace-nowrap items-center justify-start w-full btn-plain h-9 rounded-lg px-3 font-medium active:scale-95 svelte-cwow1a"),p(z,"current-setting",e[1]===I),c(h,"class","card-base float-panel p-2"),c(g,"id","light-dark-panel"),c(g,"class","hidden lg:block absolute transition float-panel-closed top-11 -right-2 pt-5"),c(t,"class","relative z-50"),c(t,"role","menu"),c(t,"tabindex","-1")},m(c,p){we(c,t,p),r(t,a),r(a,s),x(n,s,null),r(a,o),r(a,l),x(i,l,null),r(a,m),r(a,u),x(d,u,null),r(t,f),r(t,g),r(g,h),r(h,$),x(w,$,null),r($,v),r($,E),r(h,D),r(h,j),x(L,j,null),r(j,A),r(j,S),r(h,O),r(h,z),x(J,z,null),r(z,Q),r(z,X),H=!0,K||(R=[V(a,"click",e[3]),V(a,"mouseenter",De),V($,"click",e[4]),V(j,"click",e[5]),V(z,"click",e[6]),V(t,"mouseleave",Ee)],K=!0)},p(e,[t]){(!H||2&t)&&p(s,"opacity-0",e[1]!==F),(!H||2&t)&&p(l,"opacity-0",e[1]!==G),(!H||2&t)&&p(u,"opacity-0",e[1]!==I),(!H||1&t)&&W!==(W=e[0].lightMode+"")&&ie(E,W),(!H||2&t)&&p($,"current-setting",e[1]===F),(!H||1&t)&&Y!==(Y=e[0].darkMode+"")&&ie(S,Y),(!H||2&t)&&p(j,"current-setting",e[1]===G),(!H||1&t)&&Z!==(Z=e[0].systemMode+"")&&ie(X,Z),(!H||2&t)&&p(z,"current-setting",e[1]===I)},i(e){H||(N(n.$$.fragment,e),N(i.$$.fragment,e),N(d.$$.fragment,e),N(w.$$.fragment,e),N(L.$$.fragment,e),N(J.$$.fragment,e),H=!0)},o(e){U(n.$$.fragment,e),U(i.$$.fragment,e),U(d.$$.fragment,e),U(w.$$.fragment,e),U(L.$$.fragment,e),U(J.$$.fragment,e),H=!1},d(e){e&&b(t),B(n),B(i),B(d),B(w),B(L),B(J),K=!1,be(R)}}}function De(){document.querySelector("#light-dark-panel")?.classList.remove("float-panel-closed")}function Ee(){document.querySelector("#light-dark-panel").classList.add("float-panel-closed")}function Me(e){const t=JSON.parse(e),a=e=>{if(!Array.isArray(e))return e;if(0===e[0]){if("object"!=typeof e[1])return e[1];const t={};for(const r in e[1])t[r]=a(e[1][r]);return t}return e[1].map((e=>a(e)))};for(const e in t)t[e]=a(t[e]);return t}function Te(e,t,a){const r=[F,G,I];let s=I,{text:n={lightMode:"",darkMode:"",systemMode:""}}=t;function o(e){a(1,s=e),_e(e)}function l(){const e=window.swup.cache.get(location.pathname)?.html;if(void 0===e)return;const t=(new DOMParser).parseFromString(e,"text/html").querySelector('astro-island[component-url*="/LightDarkSwitch."]')?.getAttribute("props");if("string"!=typeof t)return;const r=Me(t);a(0,n=r.text||n)}ve((()=>{a(1,s=$e());const e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{ke(s)};return e.addEventListener("change",t),window.swup.hooks?window.swup.hooks.before("content:replace",l):document.addEventListener("swup:enable",(()=>{window.swup.hooks.before("content:replace",l)})),()=>{e.removeEventListener("change",t),window.swup.hooks&&window.swup.hooks.off("content:replace",l)}}));return e.$$set=e=>{"text"in e&&a(0,n=e.text)},[n,s,o,function(){let e=0;for(;e<r.length&&r[e]!==s;e++);o(r[(e+1)%r.length])},()=>o(F),()=>o(G),()=>o(I)]}class Ae extends pe{constructor(e){super(),he(this,e,Te,ye,ge,{text:0})}}export{Ae as default};