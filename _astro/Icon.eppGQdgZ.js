import{S as Re,i as ze,s as Be,Q as A,j as R,R as re,g as _,w as He,T as Qe,U as D,V as ie,e as Ve,b as qe,d as ve,W as se,X as Ue,H as Ge,Y as Ke,z as We,Z as ce,_ as Je}from"./zh_TW.BOufjSof.js";function Se(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],c=e[i];if(c){for(const t in s)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[i]=c}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}const j=/^[a-z0-9]+(-[a-z0-9]+)*$/,z=(t,e,n,o="")=>{const r=t.split(":");if("@"===t.slice(0,1)){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const t=r.pop(),n=r.pop(),i={provider:r.length>0?r[0]:o,prefix:n,name:t};return e&&!F(i)?null:i}const i=r[0],s=i.split("-");if(s.length>1){const t={provider:o,prefix:s.shift(),name:s.join("-")};return e&&!F(t)?null:t}if(n&&""===o){const t={provider:o,prefix:"",name:i};return e&&!F(t,n)?null:t}return null},F=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(j)||!(e&&""===t.prefix||t.prefix.match(j))||!t.name.match(j)),Ie=Object.freeze({left:0,top:0,width:16,height:16}),N=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),B=Object.freeze({...Ie,...N}),U=Object.freeze({...B,body:"",hidden:!1});function Xe(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}function le(t,e){const n=Xe(t,e);for(const o in U)o in N?o in t&&!(o in n)&&(n[o]=N[o]):o in e?n[o]=e[o]:o in t&&(n[o]=t[o]);return n}function Ye(t,e){const n=t.icons,o=t.aliases||Object.create(null),r=Object.create(null);return Object.keys(n).concat(Object.keys(o)).forEach((function t(e){if(n[e])return r[e]=[];if(!(e in r)){r[e]=null;const n=o[e]&&o[e].parent,i=n&&t(n);i&&(r[e]=[n].concat(i))}return r[e]})),r}function Ze(t,e,n){const o=t.icons,r=t.aliases||Object.create(null);let i={};function s(t){i=le(o[t]||r[t],i)}return s(e),n.forEach(s),le(t,i)}function ke(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const o=Ye(t);for(const r in o){const i=o[r];i&&(e(r,Ze(t,r,i)),n.push(r))}return n}const $e={provider:"",aliases:{},not_found:{},...Ie};function V(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function _e(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons||!V(t,$e))return null;const n=e.icons;for(const t in n){const e=n[t];if(!t.match(j)||"string"!=typeof e.body||!V(e,U))return null}const o=e.aliases||Object.create(null);for(const t in o){const e=o[t],r=e.parent;if(!t.match(j)||"string"!=typeof r||!n[r]&&!o[r]||!V(e,U))return null}return e}const fe=Object.create(null);function et(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function k(t,e){const n=fe[t]||(fe[t]=Object.create(null));return n[e]||(n[e]=et(t,e))}function Z(t,e){return _e(e)?ke(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}function tt(t,e,n){try{if("string"==typeof n.body)return t.icons[e]={...n},!0}catch{}return!1}let E=!1;function Ce(t){return"boolean"==typeof t&&(E=t),E}function nt(t){const e="string"==typeof t?z(t,!0,E):t;if(e){const t=k(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}function ot(t,e){const n=z(t,!0,E);if(!n)return!1;return tt(k(n.provider,n.prefix),n.name,e)}function rt(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),E&&!e&&!t.prefix){let e=!1;return _e(t)&&(t.prefix="",ke(t,((t,n)=>{n&&ot(t,n)&&(e=!0)}))),e}const n=t.prefix;if(!F({provider:e,prefix:n,name:"a"}))return!1;return!!Z(k(e,n),t)}const Te=Object.freeze({width:null,height:null}),je=Object.freeze({...Te,...N}),it=/(-?[0-9.]*[0-9]+[0-9.]*)/g,st=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ue(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(it);if(null===o||!o.length)return t;const r=[];let i=o.shift(),s=st.test(i);for(;;){if(s){const t=parseFloat(i);isNaN(t)?r.push(i):r.push(Math.ceil(t*e*n)/n)}else r.push(i);if(i=o.shift(),void 0===i)return r.join("");s=!s}}function ct(t,e="defs"){let n="";const o=t.indexOf("<"+e);for(;o>=0;){const r=t.indexOf(">",o),i=t.indexOf("</"+e);if(-1===r||-1===i)break;const s=t.indexOf(">",i);if(-1===s)break;n+=t.slice(r+1,i).trim(),t=t.slice(0,o).trim()+t.slice(s+1)}return{defs:n,content:t}}function lt(t,e){return t?"<defs>"+t+"</defs>"+e:e}function ft(t,e,n){const o=ct(t);return lt(o.defs,e+o.content+n)}const ut=t=>"unset"===t||"undefined"===t||"none"===t;function at(t,e){const n={...B,...t},o={...je,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,o].forEach((t=>{const e=[],n=t.hFlip,o=t.vFlip;let s,c=t.rotate;switch(n?o?c+=2:(e.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),e.push("scale(-1 1)"),r.top=r.left=0):o&&(e.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),e.push("scale(1 -1)"),r.top=r.left=0),c<0&&(c-=4*Math.floor(c/4)),c%=4,c){case 1:s=r.height/2+r.top,e.unshift("rotate(90 "+s.toString()+" "+s.toString()+")");break;case 2:e.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:s=r.width/2+r.left,e.unshift("rotate(-90 "+s.toString()+" "+s.toString()+")")}c%2==1&&(r.left!==r.top&&(s=r.left,r.left=r.top,r.top=s),r.width!==r.height&&(s=r.width,r.width=r.height,r.height=s)),e.length&&(i=ft(i,'<g transform="'+e.join(" ")+'">',"</g>"))}));const s=o.width,c=o.height,a=r.width,l=r.height;let f,u;null===s?(u=null===c?"1em":"auto"===c?l:c,f=ue(u,a/l)):(f="auto"===s?a:s,u=null===c?ue(f,l/a):"auto"===c?l:c);const d={},p=(t,e)=>{ut(e)||(d[t]=e.toString())};p("width",f),p("height",u);const h=[r.left,r.top,a,l];return d.viewBox=h.join(" "),{attributes:d,viewBox:h,body:i}}const dt=/\sid="(\S+)"/g,ht="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let pt=0;function gt(t,e=ht){const n=[];let o;for(;o=dt.exec(t);)n.push(o[1]);if(!n.length)return t;const r="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof e?e(n):e+(pt++).toString(),i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")})),t=t.replace(new RegExp(r,"g"),"")}const G=Object.create(null);function mt(t,e){G[t]=e}function K(t){return G[t]||G[""]}function $(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const ee=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],L=[];for(;T.length>0;)1===T.length||Math.random()>.5?L.push(T.shift()):L.push(T.pop());function yt(t,e){const n=$(e);return null!==n&&(ee[t]=n,!0)}function te(t){return ee[t]}ee[""]=$({resources:["https://api.iconify.design"].concat(L)});const bt=()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch{}};let ae=bt();function wt(t,e){const n=te(t);if(!n)return 0;let o;if(n.maxURL){let t=0;n.resources.forEach((e=>{t=Math.max(t,e.length)}));const r=e+".json?icons=";o=n.maxURL-t-n.path.length-r.length}else o=0;return o}function xt(t){return 404===t}const vt=(t,e,n)=>{const o=[],r=wt(t,e),i="icons";let s={type:i,provider:t,prefix:e,icons:[]},c=0;return n.forEach(((n,a)=>{c+=n.length+1,c>=r&&a>0&&(o.push(s),s={type:i,provider:t,prefix:e,icons:[]},c=n.length),s.icons.push(n)})),o.push(s),o};function St(t){if("string"==typeof t){const e=te(t);if(e)return e.path}return"/"}const It=(t,e,n)=>{if(!ae)return void n("abort",424);let o=St(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");o+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;o+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let r=503;ae(t+o).then((t=>{const e=t.status;if(200===e)return r=501,t.json();setTimeout((()=>{n(xt(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{404===t?n("abort",t):n("next",r)}))})).catch((()=>{n("next",r)}))},kt={prepare:vt,send:It};function _t(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let o={provider:"",prefix:"",name:""};return t.forEach((t=>{if(o.name===t.name&&o.prefix===t.prefix&&o.provider===t.provider)return;o=t;const r=t.provider,i=t.prefix,s=t.name,c=n[r]||(n[r]=Object.create(null)),a=c[i]||(c[i]=k(r,i));let l;l=s in a.icons?e.loaded:""===i||a.missing.has(s)?e.missing:e.pending;const f={provider:r,prefix:i,name:s};l.push(f)})),e}function Ee(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}function Ct(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,r=t.prefix;e.forEach((e=>{const i=e.icons,s=i.pending.length;i.pending=i.pending.filter((e=>{if(e.prefix!==r)return!0;const s=e.name;if(t.icons[s])i.loaded.push({provider:o,prefix:r,name:s});else{if(!t.missing.has(s))return n=!0,!0;i.missing.push({provider:o,prefix:r,name:s})}return!1})),i.pending.length!==s&&(n||Ee([t],e.id),e.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),e.abort))}))})))}let Tt=0;function jt(t,e,n){const o=Tt++,r=Ee.bind(null,n,o);if(!e.pending.length)return r;const i={id:o,icons:e,callback:t,abort:r};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(i)})),r}function Et(t,e=!0,n=!1){const o=[];return t.forEach((t=>{const r="string"==typeof t?z(t,e,n):t;r&&o.push(r)})),o}var Ot={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Pt(t,e,n,o){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let s;if(t.random){let e=t.resources.slice(0);for(s=[];e.length>1;){const t=Math.floor(Math.random()*e.length);s.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}s=s.concat(e)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const c=Date.now();let a,l="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function m(t,e){e&&(p=[]),"function"==typeof t&&p.push(t)}function b(){l="failed",p.forEach((t=>{t(void 0,a)}))}function y(){d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function v(){if("pending"!==l)return;h();const o=s.shift();if(void 0===o)return d.length?void(u=setTimeout((()=>{h(),"pending"===l&&(y(),b())}),t.timeout)):void b();const r={status:"pending",resource:o,callback:(e,n)=>{!function(e,n,o){const r="success"!==n;switch(d=d.filter((t=>t!==e)),l){case"pending":break;case"failed":if(r||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void b();if(r)return a=o,void(d.length||(s.length?v():b()));if(h(),y(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}l="completed",p.forEach((t=>{t(o)}))}(r,e,n)}};d.push(r),f++,u=setTimeout(v,t.rotate),n(o,e,r.callback)}return"function"==typeof o&&p.push(o),setTimeout(v),function(){return{startTime:c,payload:e,status:l,queriesSent:f,queriesPending:d.length,subscribe:m,abort:g}}}function Oe(t){const e={...Ot,...t};let n=[];function o(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,r,i){const s=Pt(e,t,r,((t,e)=>{o(),i&&i(t,e)}));return n.push(s),s},find:function(t){return n.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:o}}function de(){}const q=Object.create(null);function Mt(t){if(!q[t]){const e=te(t);if(!e)return;const n={config:e,redundancy:Oe(e)};q[t]=n}return q[t]}function Ft(t,e,n){let o,r;if("string"==typeof t){const e=K(t);if(!e)return n(void 0,424),de;r=e.send;const i=Mt(t);i&&(o=i.redundancy)}else{const e=$(t);if(e){o=Oe(e);const n=K(t.resources?t.resources[0]:"");n&&(r=n.send)}}return o&&r?o.query(e,r,n)().abort:(n(void 0,424),de)}const he="iconify2",O="iconify",Pe=O+"-count",pe=O+"-version",Me=36e5,Lt=168,At=50;function W(t,e){try{return t.getItem(e)}catch{}}function ne(t,e,n){try{return t.setItem(e,n),!0}catch{}}function ge(t,e){try{t.removeItem(e)}catch{}}function J(t,e){return ne(t,Pe,e.toString())}function X(t){return parseInt(W(t,Pe))||0}const H={local:!0,session:!0},Fe={local:new Set,session:new Set};let oe=!1;function Dt(t){oe=t}let M=typeof window>"u"?{}:window;function Le(t){const e=t+"Storage";try{if(M&&M[e]&&"number"==typeof M[e].length)return M[e]}catch{}H[t]=!1}function Ae(t,e){const n=Le(t);if(!n)return;const o=W(n,pe);if(o!==he){if(o){const t=X(n);for(let e=0;e<t;e++)ge(n,O+e.toString())}return ne(n,pe,he),void J(n,0)}const r=Math.floor(Date.now()/Me)-Lt,i=t=>{const o=O+t.toString(),i=W(n,o);if("string"==typeof i){try{const n=JSON.parse(i);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>r&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch{}ge(n,o)}};let s=X(n);for(let e=s-1;e>=0;e--)i(e)||(e===s-1?(s--,J(n,s)):Fe[t].add(e))}function De(){if(!oe){Dt(!0);for(const t in H)Ae(t,(t=>{const e=t.data,n=k(t.provider,e.prefix);if(!Z(n,e).length)return!1;const o=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function Nt(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const n in H)Ae(n,(n=>{const o=n.data;return n.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e}));return!0}function Rt(t,e){function n(n){let o;if(!H[n]||!(o=Le(n)))return;const r=Fe[n];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=X(o),i>=At||!J(o,i+1))return;const s={cached:Math.floor(Date.now()/Me),provider:t.provider,data:e};return ne(o,O+i.toString(),JSON.stringify(s))}oe||De(),e.lastModified&&!Nt(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}function me(){}function zt(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,Ct(t)})))}function Bt(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,o=t.iconsToLoad;let r;delete t.iconsToLoad,o&&(r=K(e))&&r.prepare(e,n,o).forEach((n=>{Ft(e,n,(e=>{if("object"!=typeof e)n.icons.forEach((e=>{t.missing.add(e)}));else try{const n=Z(t,e);if(!n.length)return;const o=t.pendingIcons;o&&n.forEach((t=>{o.delete(t)})),Rt(t,e)}catch(t){console.error(t)}zt(t)}))}))})))}const Ht=(t,e)=>{const n=_t(Et(t,!0,Ce()));if(!n.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(n.loaded,n.missing,n.pending,me)})),()=>{t=!1}}const o=Object.create(null),r=[];let i,s;return n.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===s&&e===i)return;i=e,s=n,r.push(k(e,n));const c=o[e]||(o[e]=Object.create(null));c[n]||(c[n]=[])})),n.pending.forEach((t=>{const{provider:e,prefix:n,name:r}=t,i=k(e,n),s=i.pendingIcons||(i.pendingIcons=new Set);s.has(r)||(s.add(r),o[e][n].push(r))})),r.forEach((t=>{const{provider:e,prefix:n}=t;o[e][n].length&&Bt(t,o[e][n])})),e?jt(e,n,r):me};function Qt(t,e){const n={...t};for(const t in e){const o=e[t],r=typeof o;t in Te?(null===o||o&&("string"===r||"number"===r))&&(n[t]=o):r===typeof n[t]&&(n[t]="rotate"===t?o%4:o)}return n}const Vt=/[\s,]+/;function qt(t,e){e.split(Vt).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}function Ut(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r/=e,r%1==0?o(r):0)}}return e}function Gt(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const t in e)n+=" "+t+'="'+e[t]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Kt(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Wt(t){return"data:image/svg+xml,"+Kt(t)}function Jt(t){return'url("'+Wt(t)+'")'}const ye={...je,inline:!1},Xt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Yt={display:"inline-block"},Y={"background-color":"currentColor"},Ne={"background-color":"transparent"},be={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},we={"-webkit-mask":Y,mask:Y,background:Ne};for(const t in we){const e=we[t];for(const n in be)e[t+"-"+n]=be[n]}function Zt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}function $t(t,e){const n=Qt(ye,e),o=e.mode||"svg",r="svg"===o?{...Xt}:{};-1===t.body.indexOf("xlink:")&&delete r["xmlns:xlink"];let i="string"==typeof e.style?e.style:"";for(let t in e){const o=e[t];if(void 0!==o)switch(t){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[t]=!0===o||"true"===o||1===o;break;case"flip":"string"==typeof o&&qt(n,o);break;case"color":i=i+(i.length>0&&";"!==i.trim().slice(-1)?";":"")+"color: "+o+"; ";break;case"rotate":"string"==typeof o?n[t]=Ut(o):"number"==typeof o&&(n[t]=o);break;case"ariaHidden":case"aria-hidden":!0!==o&&"true"!==o&&delete r["aria-hidden"];break;default:if("on:"===t.slice(0,3))break;void 0===ye[t]&&(r[t]=o)}}const s=at(t,n),c=s.attributes;if(n.inline&&(i="vertical-align: -0.125em; "+i),"svg"===o){Object.assign(r,c),""!==i&&(r.style=i);let t=0,n=e.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),{svg:!0,attributes:r,body:gt(s.body,n?()=>n+"ID"+t++:"iconifySvelte")}}const{body:a,width:l,height:f}=t,u="mask"===o||"bg"!==o&&-1!==a.indexOf("currentColor"),d={"--svg":Jt(Gt(a,{...c,width:l+"",height:f+""}))},p=t=>{const e=c[t];e&&(d[t]=Zt(e))};p("width"),p("height"),Object.assign(d,Yt,u?Y:Ne);let h="";for(const t in d)h+=t+": "+d[t]+";";return r.style=h+i,{svg:!1,attributes:r}}if(Ce(!0),mt("",kt),typeof document<"u"&&typeof window<"u"){De();const t=window;if(void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!rt(t))&&console.error(n)}catch{console.error(n)}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(let t in e){const n="IconifyProviders["+t+"] is invalid.";try{const o=e[t];if("object"!=typeof o||!o||void 0===o.resources)continue;yt(t,o)||console.error(n)}catch{console.error(n)}}}}function en(t,e,n,o,r){function i(){e.loading&&(e.loading.abort(),e.loading=null)}if("object"==typeof t&&null!==t&&"string"==typeof t.body)return e.name="",i(),{data:{...B,...t}};let s;if("string"!=typeof t||null===(s=z(t,!1,!0)))return i(),null;const c=nt(s);if(!c)return n&&(!e.loading||e.loading.name!==t)&&(i(),e.name="",e.loading={name:t,abort:Ht([s],o)}),null;i(),e.name!==t&&(e.name=t,r&&!e.destroyed&&r(t));const a=["iconify"];return""!==s.prefix&&a.push("iconify--"+s.prefix),""!==s.provider&&a.push("iconify--"+s.provider),{data:c,classes:a}}function tn(t,e){return t?$t({...B,...t},e):null}function xe(t){let e;function n(t,e){return t[0].svg?on:nn}let o=n(t),r=o(t);return{c(){r.c(),e=A()},l(t){r.l(t),e=A()},m(t,n){r.m(t,n),R(t,e,n)},p(t,i){o===(o=n(t))&&r?r.p(t,i):(r.d(1),r=o(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){t&&_(e),r.d(t)}}}function nn(t){let e,n=[t[0].attributes],o={};for(let t=0;t<n.length;t+=1)o=D(o,n[t]);return{c(){e=Ve("span"),this.h()},l(t){e=qe(t,"SPAN",{}),ve(e).forEach(_),this.h()},h(){se(e,o)},m(t,n){R(t,e,n)},p(t,r){se(e,o=Se(n,[1&r&&t[0].attributes]))},d(t){t&&_(e)}}}function on(t){let e,n,o=t[0].body+"",r=[t[0].attributes],i={};for(let t=0;t<r.length;t+=1)i=D(i,r[t]);return{c(){e=Ue("svg"),n=new Ge(!0),this.h()},l(t){e=Ke(t,"svg",{});var o=ve(e);n=We(o,!0),o.forEach(_),this.h()},h(){n.a=null,ce(e,i)},m(t,r){R(t,e,r),n.m(o,e)},p(t,s){1&s&&o!==(o=t[0].body+"")&&n.p(o),ce(e,i=Se(r,[1&s&&t[0].attributes]))},d(t){t&&_(e)}}}function rn(t){let e,n=t[0]&&xe(t);return{c(){n&&n.c(),e=A()},l(t){n&&n.l(t),e=A()},m(t,o){n&&n.m(t,o),R(t,e,o)},p(t,[o]){t[0]?n?n.p(t,o):(n=xe(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:re,o:re,d(t){t&&_(e),n&&n.d(t)}}}function sn(t,e,n){const o={name:"",loading:null,destroyed:!1};let r,i=!1,s=0;const c=t=>{"function"==typeof e.onLoad&&e.onLoad(t),Je()("load",{icon:t})};function a(){n(3,s++,s)}return He((()=>{n(2,i=!0)})),Qe((()=>{n(1,o.destroyed=!0,o),o.loading&&(o.loading.abort(),n(1,o.loading=null,o))})),t.$$set=t=>{n(6,e=D(D({},e),ie(t)))},t.$$.update=()=>{{const t=en(e.icon,o,i,a,c);n(0,r=t?tn(t.data,e):null),r&&t.classes&&n(0,r.attributes.class=("string"==typeof e.class?e.class+" ":"")+t.classes.join(" "),r)}},e=ie(e),[r,o,i,s]}class ln extends Re{constructor(t){super(),ze(this,t,sn,rn,Be,{})}}export{ln as I};