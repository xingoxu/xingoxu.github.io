import{ax as Q,q as b,ay as W,M as X,az as Z,aA as m,aB as x,aC as rr,ad as j,aD as er,aE as tr,aF as sr,aG as fr,aH as ir,aI as ar,aJ as N,aK as ur,aL as O,Q as T,aM as or,aN as B,g as H,ah as lr,W as nr,$ as cr,N as vr}from"./render.BJfaa5jb.js";const dr="5";function k(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function q(e){var r,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var l=e.length;for(r=0;r<l;r++)e[r]&&(t=q(e[r]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function gr(){for(var e,r,t=0,n="",l=arguments.length;t<l;t++)(e=arguments[t])&&(r=q(e))&&(n&&(n+=" "),n+=r);return n}function _r(e){return"object"==typeof e?gr(e):e??""}typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(dr),Q();const D=[..." \t\n\r\f \v\ufeff"];function pr(e,r,t){var n=null==e?"":""+e;if(r&&(n=n?n+" "+r:r),t)for(var l in t)if(t[l])n=n?n+" "+l:l;else if(n.length)for(var s=l.length,a=0;(a=n.indexOf(l,a))>=0;){var u=a+s;0!==a&&!D.includes(n[a-1])||u!==n.length&&!D.includes(n[u])?a=u:n=(0===a?"":n.substring(0,a))+n.substring(u+1)}return""===n?null:n}function R(e,r=!1){var t=r?" !important;":";",n="";for(var l in e){var s=e[l];null!=s&&""!==s&&(n+=" "+l+": "+s+t)}return n}function M(e){return"-"!==e[0]||"-"!==e[1]?e.toLowerCase():e}function hr(e,r){if(r){var t,n,l="";if(Array.isArray(r)?(t=r[0],n=r[1]):t=r,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,u=!1,i=[];t&&i.push(...Object.keys(t).map(M)),n&&i.push(...Object.keys(n).map(M));var o=0,f=-1;const r=e.length;for(var c=0;c<r;c++){var v=e[c];if(u?"/"===v&&"*"===e[c-1]&&(u=!1):s?s===v&&(s=!1):"/"===v&&"*"===e[c+1]?u=!0:'"'===v||"'"===v?s=v:"("===v?a++:")"===v&&a--,!u&&!1===s&&0===a)if(":"===v&&-1===f)f=c;else if(";"===v||c===r-1){if(-1!==f){var b=M(e.substring(o,f).trim());if(!i.includes(b))";"!==v&&c++,l+=" "+e.substring(o,c).trim()+";"}o=c+1,f=-1}}}return t&&(l+=R(t)),n&&(l+=R(n,!0)),""===(l=l.trim())?null:l}return null==e?null:String(e)}function br(e,r,t,n,l,s){var a=e.__className;if(b||a!==t){var u=pr(t,n,s);(!b||u!==e.getAttribute("class"))&&(null==u?e.removeAttribute("class"):r?e.className=u:e.setAttribute("class",u)),e.__className=t}else if(s&&l!==s)for(var i in s){var o=!!s[i];(null==l||o!==!!l[i])&&e.classList.toggle(i,o)}return s}function $(e,r={},t,n){for(var l in t){var s=t[l];r[l]!==s&&(null==t[l]?e.style.removeProperty(l):e.style.setProperty(l,s,n))}}function Ar(e,r,t,n){var l=e.__style;if(b||l!==r){var s=hr(r,n);(!b||s!==e.getAttribute("style"))&&(null==s?e.removeAttribute("style"):e.style.cssText=s),e.__style=r}else n&&(Array.isArray(n)?($(e,t?.[0],n[0]),$(e,t?.[1],n[1],"important")):$(e,t,n));return n}const w=Symbol("class"),E=Symbol("style"),z=Symbol("is custom element"),G=Symbol("is html");function yr(e){if(b){var r=!1,t=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var t=e.value;y(e,"value",null),e.value=t}if(e.hasAttribute("checked")){var n=e.checked;y(e,"checked",null),e.checked=n}}};e.__on_r=t,m(t),x()}}function Nr(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function y(e,r,t,n){var l=K(e);b&&(l[r]=e.getAttribute(r),"src"===r||"srcset"===r||"href"===r&&"LINK"===e.nodeName)||l[r]!==(l[r]=t)&&("loading"===r&&(e[rr]=t),null==t?e.removeAttribute(r):"string"!=typeof t&&Y(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function Cr(e,r,t,n,l=!1){var s=K(e),a=s[z],u=!s[G];let i=b&&a;i&&j(!1);var o=r||{},f="OPTION"===e.tagName;for(var c in r)c in t||(t[c]=null);t.class?t.class=_r(t.class):t[w]&&(t.class=null),t[E]&&(t.style??=null);var v=Y(e);for(const l in t){let i=t[l];if(f&&"value"===l&&null==i)e.value=e.__value="",o[l]=i;else if("class"!==l)if("style"!==l){var d=o[l];if(i!==d){o[l]=i;var m=l[0]+l[1];if("$$"!==m)if("on"===m){const r={},t="$$"+l;let n=l.slice(2);var p=ar(n);if(er(n)&&(n=n.slice(0,-7),r.capture=!0),!p&&d){if(null!=i)continue;e.removeEventListener(n,o[t],r),o[t]=null}if(null!=i)if(p)e[`__${n}`]=i,sr([n]);else{let s=function(e){o[l].call(this,e)};o[t]=tr(n,e,s,r)}else p&&(e[`__${n}`]=void 0)}else if("style"===l)y(e,l,i);else if("autofocus"===l)fr(e,!!i);else if(a||"__value"!==l&&("value"!==l||null==i))if("selected"===l&&f)Nr(e,i);else{var h=l;u||(h=ir(h));var _="defaultValue"===h||"defaultChecked"===h;if(null!=i||a||_)_||v.includes(h)&&(a||"string"!=typeof i)?e[h]=i:"function"!=typeof i&&y(e,h,i);else if(s[l]=null,"value"===h||"checked"===h){let t=e;const n=void 0===r;if("value"===h){let e=t.defaultValue;t.removeAttribute(h),t.defaultValue=e,t.value=t.__value=n?e:null}else{let e=t.defaultChecked;t.removeAttribute(h),t.defaultChecked=e,t.checked=!!n&&e}}else e.removeAttribute(l)}else e.value=e.__value=i}}else Ar(e,i,r?.[E],t[E]),o[l]=i,o[E]=t[E];else br(e,"http://www.w3.org/1999/xhtml"===e.namespaceURI,i,n,r?.[w],t[w]),o[l]=i,o[w]=t[w]}return i&&j(!0),o}function K(e){return e.__attributes??={[z]:e.nodeName.includes("-"),[G]:e.namespaceURI===W}}var U=new Map;function Y(e){var r=U.get(e.nodeName);if(r)return r;U.set(e.nodeName,r=[]);for(var t,n=e,l=Element.prototype;l!==n;){for(var s in t=Z(n))t[s].set&&r.push(s);n=X(n)}return r}function Ir(e=!1){const r=N,t=r.l.u;if(!t)return;let n=()=>lr(r.s);if(e){let e=0,t={};const l=nr((()=>{let n=!1;const l=r.s;for(const e in l)l[e]!==t[e]&&(t[e]=l[e],n=!0);return n&&e++,e}));n=()=>H(l)}t.b.length&&ur((()=>{V(r,n),B(t.b)})),O((()=>{const e=T((()=>t.m.map(or)));return()=>{for(const r of e)"function"==typeof r&&r()}})),t.a.length&&O((()=>{V(r,n),B(t.a)}))}function V(e,r){if(e.l.s)for(const r of e.l.s)H(r);r()}function Sr(e){null===N&&k(),cr&&null!==N.l?Er(N).m.push(e):O((()=>{const r=T(e);if("function"==typeof r)return r}))}function Mr(e){null===N&&k(),Sr((()=>()=>T(e)))}function wr(e,r,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(e,{detail:r,bubbles:t,cancelable:n})}function $r(){const e=N;return null===e&&k(),(r,t,n)=>{const l=e.s.$$events?.[r];if(l){const s=vr(l)?l.slice():[l],a=wr(r,t,n);for(const r of s)r.call(e.x,a);return!a.defaultPrevented}return!0}}function Er(e){var r=e.l;return r.u??={a:[],b:[],m:[]}}export{br as a,Mr as b,$r as c,Cr as d,Ir as i,Sr as o,yr as r,y as s};