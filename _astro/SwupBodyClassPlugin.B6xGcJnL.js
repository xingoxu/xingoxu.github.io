import{e as m}from"./index.modern.BC8Oj8jT.js";function p(){return p=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(s[o]=e[o])}return s},p.apply(this,arguments)}function l(s,{prefix:t=""}={}){return!!s&&s.startsWith(t)}function d(s,t=[]){const e=Array.from(s.attributes);return t.length?e.filter(({name:o})=>t.some(n=>n instanceof RegExp?n.test(o):o===n)):e}class b extends m{constructor(t={}){super(),this.name="SwupBodyClassPlugin",this.requires={swup:">=4.6"},this.defaults={prefix:"",attributes:[]},this.options=void 0,this.update=e=>{const{prefix:o,attributes:n}=this.options;(function(r,f,{prefix:a=""}={}){const c=[...r.classList].filter(u=>l(u,{prefix:a})),i=[...f.classList].filter(u=>l(u,{prefix:a}));r.classList.remove(...c),r.classList.add(...i)})(document.body,e.to.document.body,{prefix:o}),n!=null&&n.length&&function(r,f,a=[]){const c=new Set;for(const{name:i,value:u}of d(f,a))r.setAttribute(i,u),c.add(i);for(const{name:i}of d(r,a))c.has(i)||r.removeAttribute(i)}(document.body,e.to.document.body,n)},this.options=p({},this.defaults,t)}mount(){this.on("content:replace",this.update)}}export{b as default};
