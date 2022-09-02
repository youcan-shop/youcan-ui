(function(_,M){typeof exports=="object"&&typeof module<"u"?M(exports,require("vue"),require("vue-demi")):typeof define=="function"&&define.amd?define(["exports","vue","vue-demi"],M):(_=typeof globalThis<"u"?globalThis:_||self,M(_["youcan-ui"]={},_.Vue,_.VueDemi))})(this,function(_,M,re){"use strict";var b="colors",$="sizes",s="space",oe={gap:s,gridGap:s,columnGap:s,gridColumnGap:s,rowGap:s,gridRowGap:s,inset:s,insetBlock:s,insetBlockEnd:s,insetBlockStart:s,insetInline:s,insetInlineEnd:s,insetInlineStart:s,margin:s,marginTop:s,marginRight:s,marginBottom:s,marginLeft:s,marginBlock:s,marginBlockEnd:s,marginBlockStart:s,marginInline:s,marginInlineEnd:s,marginInlineStart:s,padding:s,paddingTop:s,paddingRight:s,paddingBottom:s,paddingLeft:s,paddingBlock:s,paddingBlockEnd:s,paddingBlockStart:s,paddingInline:s,paddingInlineEnd:s,paddingInlineStart:s,top:s,right:s,bottom:s,left:s,scrollMargin:s,scrollMarginTop:s,scrollMarginRight:s,scrollMarginBottom:s,scrollMarginLeft:s,scrollMarginX:s,scrollMarginY:s,scrollMarginBlock:s,scrollMarginBlockEnd:s,scrollMarginBlockStart:s,scrollMarginInline:s,scrollMarginInlineEnd:s,scrollMarginInlineStart:s,scrollPadding:s,scrollPaddingTop:s,scrollPaddingRight:s,scrollPaddingBottom:s,scrollPaddingLeft:s,scrollPaddingX:s,scrollPaddingY:s,scrollPaddingBlock:s,scrollPaddingBlockEnd:s,scrollPaddingBlockStart:s,scrollPaddingInline:s,scrollPaddingInlineEnd:s,scrollPaddingInlineStart:s,fontSize:"fontSizes",background:b,backgroundColor:b,backgroundImage:b,borderImage:b,border:b,borderBlock:b,borderBlockEnd:b,borderBlockStart:b,borderBottom:b,borderBottomColor:b,borderColor:b,borderInline:b,borderInlineEnd:b,borderInlineStart:b,borderLeft:b,borderLeftColor:b,borderRight:b,borderRightColor:b,borderTop:b,borderTopColor:b,caretColor:b,color:b,columnRuleColor:b,fill:b,outline:b,outlineColor:b,stroke:b,textDecorationColor:b,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:$,minBlockSize:$,maxBlockSize:$,inlineSize:$,minInlineSize:$,maxInlineSize:$,width:$,minWidth:$,maxWidth:$,height:$,minHeight:$,maxHeight:$,flexBasis:$,gridTemplateColumns:$,gridTemplateRows:$,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},se=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,P=()=>{const e=Object.create(null);return(t,n,...i)=>{const o=(a=>JSON.stringify(a,se))(t);return o in e?e[o]:e[o]=n(t,...i)}},D=Symbol.for("sxs.internal"),H=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),J=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:le}=Object.prototype,F=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),ae=/\s+(?![^()]*\))/,C=e=>t=>e(...typeof t=="string"?String(t).split(ae):[t]),Z={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:C((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:C((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:C((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:C((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:C((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:C((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},G=/([\d.]+)([^]*)/,ce=(e,t)=>e.length?e.reduce((n,i)=>(n.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(i)&&/&.*&/.test(o)?`:is(${i})`:i):i+" "+o)),n),[]):t,de=(e,t)=>e in pe&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(n,i,o,a)=>i+(o==="stretch"?`-moz-available${a};${F(e)}:${i}-webkit-fill-available`:`-moz-fit-content${a};${F(e)}:${i}fit-content`)+a):String(t),pe={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},v=e=>e?e+"-":"",Y=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(i,o,a,p,c)=>p=="$"==!!a?i:(o||p=="--"?"calc(":"")+"var(--"+(p==="$"?v(t)+(c.includes("$")?"":v(n))+c.replace(/\$/g,"-"):c)+")"+(o||p=="--"?"*"+(o||"")+(a||"1")+")":"")),ue=/\s*,\s*(?![^()]*\))/,ge=Object.prototype.toString,E=(e,t,n,i,o)=>{let a,p,c;const r=(d,g,m)=>{let l,u;const f=S=>{for(l in S){const y=l.charCodeAt(0)===64,U=y&&Array.isArray(S[l])?S[l]:[S[l]];for(u of U){const I=/[A-Z]/.test(h=l)?h:h.replace(/-[^]/g,B=>B[1].toUpperCase()),A=typeof u=="object"&&u&&u.toString===ge&&(!i.utils[I]||!g.length);if(I in i.utils&&!A){const B=i.utils[I];if(B!==p){p=B,f(B(u)),p=null;continue}}else if(I in Z){const B=Z[I];if(B!==c){c=B,f(B(u)),c=null;continue}}if(y&&(k=l.slice(1)in i.media?"@media "+i.media[l.slice(1)]:l,l=k.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(B,x,z,T,R,W)=>{const w=G.test(x),N=.0625*(w?-1:1),[V,ne]=w?[T,x]:[x,T];return"("+(z[0]==="="?"":z[0]===">"===w?"max-":"min-")+V+":"+(z[0]!=="="&&z.length===1?ne.replace(G,(Ae,X,q)=>Number(X)+N*(z===">"?1:-1)+q):ne)+(R?") and ("+(R[0]===">"?"min-":"max-")+V+":"+(R.length===1?W.replace(G,(Ae,X,q)=>Number(X)+N*(R===">"?-1:1)+q):W):"")+")"})),A){const B=y?m.concat(l):[...m],x=y?[...g]:ce(g,l.split(ue));a!==void 0&&o(K(...a)),a=void 0,r(u,x,B)}else a===void 0&&(a=[[],g,m]),l=y||l.charCodeAt(0)!==36?l:`--${v(i.prefix)}${l.slice(1).replace(/\$/g,"-")}`,u=A?u:typeof u=="number"?u&&I in fe?String(u)+"px":String(u):Y(de(I,u==null?"":u),i.prefix,i.themeMap[I]),a[0].push(`${y?`${l} `:`${F(l)}:`}${u}`)}}var k,h};f(d),a!==void 0&&o(K(...a)),a=void 0};r(e,t,n)},K=(e,t,n)=>`${n.map(i=>`${i}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,fe={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},Q=e=>String.fromCharCode(e+(e>25?39:97)),j=e=>(t=>{let n,i="";for(n=Math.abs(t);n>52;n=n/52|0)i=Q(n%52)+i;return Q(n%52)+i})(((t,n)=>{let i=n.length;for(;i;)t=33*t^n.charCodeAt(--i);return t})(5381,JSON.stringify(e))>>>0),L=["themed","global","styled","onevar","resonevar","allvar","inline"],he=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},me=e=>{let t;const n=()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(a,p)=>{const{cssText:c}=a;let r="";if(c.startsWith("--sxs"))return"";if(o[p-1]&&(r=o[p-1].cssText).startsWith("--sxs")){if(!a.cssRules.length)return"";for(const d in t.rules)if(t.rules[d].group===a)return`--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${c}`;return a.cssRules.length?`${r}${c}`:""}return c}).join("")},i=()=>{if(t){const{rules:c,sheet:r}=t;if(!r.deleteRule){for(;Object(Object(r.cssRules)[0]).type===3;)r.cssRules.splice(0,1);r.cssRules=[]}for(const d in c)delete c[d]}const o=Object(e).styleSheets||[];for(const c of o)if(he(c)){for(let r=0,d=c.cssRules;d[r];++r){const g=Object(d[r]);if(g.type!==1)continue;const m=Object(d[r+1]);if(m.type!==4)continue;++r;const{cssText:l}=g;if(!l.startsWith("--sxs"))continue;const u=l.slice(14,-3).trim().split(/\s+/),f=L[u[0]];f&&(t||(t={sheet:c,reset:i,rules:{},toString:n}),t.rules[f]={group:m,index:r,cache:new Set(u)})}if(t)break}if(!t){const c=(r,d)=>({type:d,cssRules:[],insertRule(g,m){this.cssRules.splice(m,0,c(g,{import:3,undefined:1}[(g.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return r==="@media{}"?`@media{${[].map.call(this.cssRules,g=>g.cssText).join("")}}`:r}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:c("","text/css"),rules:{},reset:i,toString:n}}const{sheet:a,rules:p}=t;for(let c=L.length-1;c>=0;--c){const r=L[c];if(!p[r]){const d=L[c+1],g=p[d]?p[d].index:a.cssRules.length;a.insertRule("@media{}",g),a.insertRule(`--sxs{--sxs:${c}}`,g),p[r]={group:a.cssRules[g+1],index:g,cache:new Set([c])}}be(p[r])}};return i(),t},be=e=>{const t=e.group;let n=t.cssRules.length;e.apply=i=>{try{t.insertRule(i,n),++n}catch{}}},O=Symbol(),Se=P(),ye=(e,t)=>Se(e,()=>(...n)=>{let i={type:null,composers:new Set};for(const o of n)if(o!=null)if(o[D]){i.type==null&&(i.type=o[D].type);for(const a of o[D].composers)i.composers.add(a)}else o.constructor!==Object||o.$$typeof?i.type==null&&(i.type=o):i.composers.add(ke(o,e));return i.type==null&&(i.type="span"),i.composers.size||i.composers.add(["PJLV",{},[],[],{},[]]),$e(e,i,t)}),ke=({variants:e,compoundVariants:t,defaultVariants:n,...i},o)=>{const a=`${v(o.prefix)}c-${j(i)}`,p=[],c=[],r=Object.create(null),d=[];for(const l in n)r[l]=String(n[l]);if(typeof e=="object"&&e)for(const l in e){g=r,m=l,le.call(g,m)||(r[l]="undefined");const u=e[l];for(const f in u){const S={[l]:String(f)};String(f)==="undefined"&&d.push(l);const k=u[f],h=[S,k,!J(k)];p.push(h)}}var g,m;if(typeof t=="object"&&t)for(const l of t){let{css:u,...f}=l;u=typeof u=="object"&&u||{};for(const k in f)f[k]=String(f[k]);const S=[f,u,!J(u)];c.push(S)}return[a,i,p,c,r,d]},$e=(e,t,n)=>{const[i,o,a,p]=Be(t.composers),c=typeof t.type=="function"||t.type.$$typeof?(m=>{function l(){for(let u=0;u<l[O].length;u++){const[f,S]=l[O][u];m.rules[f].apply(S)}return l[O]=[],null}return l[O]=[],l.rules={},L.forEach(u=>l.rules[u]={apply:f=>l[O].push([u,f])}),l})(n):null,r=(c||n).rules,d=`.${i}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,g=m=>{m=typeof m=="object"&&m||xe;const{css:l,...u}=m,f={};for(const h in a)if(delete u[h],h in m){let y=m[h];typeof y=="object"&&y?f[h]={"@initial":a[h],...y}:(y=String(y),f[h]=y!=="undefined"||p.has(h)?y:a[h])}else f[h]=a[h];const S=new Set([...o]);for(const[h,y,U,I]of t.composers){n.rules.styled.cache.has(h)||(n.rules.styled.cache.add(h),E(y,[`.${h}`],[],e,x=>{r.styled.apply(x)}));const A=ee(U,f,e.media),B=ee(I,f,e.media,!0);for(const x of A)if(x!==void 0)for(const[z,T,R]of x){const W=`${h}-${j(T)}-${z}`;S.add(W);const w=(R?n.rules.resonevar:n.rules.onevar).cache,N=R?r.resonevar:r.onevar;w.has(W)||(w.add(W),E(T,[`.${W}`],[],e,V=>{N.apply(V)}))}for(const x of B)if(x!==void 0)for(const[z,T]of x){const R=`${h}-${j(T)}-${z}`;S.add(R),n.rules.allvar.cache.has(R)||(n.rules.allvar.cache.add(R),E(T,[`.${R}`],[],e,W=>{r.allvar.apply(W)}))}}if(typeof l=="object"&&l){const h=`${i}-i${j(l)}-css`;S.add(h),n.rules.inline.cache.has(h)||(n.rules.inline.cache.add(h),E(l,[`.${h}`],[],e,y=>{r.inline.apply(y)}))}for(const h of String(m.className||"").trim().split(/\s+/))h&&S.add(h);const k=u.className=[...S].join(" ");return{type:t.type,className:k,selector:d,props:u,toString:()=>k,deferredInjector:c}};return H(g,{className:i,selector:d,[D]:t,toString:()=>(n.rules.styled.cache.has(i)||g(),i)})},Be=e=>{let t="";const n=[],i={},o=[];for(const[a,,,,p,c]of e){t===""&&(t=a),n.push(a),o.push(...c);for(const r in p){const d=p[r];(i[r]===void 0||d!=="undefined"||c.includes(d))&&(i[r]=d)}}return[t,n,i,new Set(o)]},ee=(e,t,n,i)=>{const o=[];e:for(let[a,p,c]of e){if(c)continue;let r,d=0,g=!1;for(r in a){const m=a[r];let l=t[r];if(l!==m){if(typeof l!="object"||!l)continue e;{let u,f,S=0;for(const k in l){if(m===String(l[k])){if(k!=="@initial"){const h=k.slice(1);(f=f||[]).push(h in n?n[h]:k.replace(/^@media ?/,"")),g=!0}d+=S,u=!0}++S}if(f&&f.length&&(p={["@media "+f.join(", ")]:p}),!u)continue e}}}(o[d]=o[d]||[]).push([i?"cv":`${r}-${a[r]}`,p,g])}return o},xe={},Re=P(),Ie=(e,t)=>Re(e,()=>(...n)=>{const i=()=>{for(let o of n){o=typeof o=="object"&&o||{};let a=j(o);if(!t.rules.global.cache.has(a)){if(t.rules.global.cache.add(a),"@import"in o){let p=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let c of[].concat(o["@import"]))c=c.includes('"')||c.includes("'")?c:`"${c}"`,t.sheet.insertRule(`@import ${c};`,p++);delete o["@import"]}E(o,[],[],e,p=>{t.rules.global.apply(p)})}}return""};return H(i,{toString:i})}),ve=P(),ze=(e,t)=>ve(e,()=>n=>{const i=`${v(e.prefix)}k-${j(n)}`,o=()=>{if(!t.rules.global.cache.has(i)){t.rules.global.cache.add(i);const a=[];E(n,[],[],e,c=>a.push(c));const p=`@keyframes ${i}{${a.join("")}}`;t.rules.global.apply(p)}return i};return H(o,{get name(){return o()},toString:o})}),We=class{constructor(e,t,n,i){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=n==null?"":String(n),this.prefix=i==null?"":String(i)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+v(this.prefix)+v(this.scale)+this.token}toString(){return this.computedValue}},_e=P(),Te=(e,t)=>_e(e,()=>(n,i)=>{i=typeof n=="object"&&n||Object(i);const o=`.${n=(n=typeof n=="string"?n:"")||`${v(e.prefix)}t-${j(i)}`}`,a={},p=[];for(const r in i){a[r]={};for(const d in i[r]){const g=`--${v(e.prefix)}${r}-${d}`,m=Y(String(i[r][d]),e.prefix,r);a[r][d]=new We(d,m,r,e.prefix),p.push(`${g}:${m}`)}}const c=()=>{if(p.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const r=`${i===e.theme?":root,":""}.${n}{${p.join(";")}}`;t.rules.themed.apply(r)}return n};return{...a,get className(){return c()},selector:o,toString:c}}),je=P(),Ce=e=>{let t=!1;const n=je(e,i=>{t=!0;const o="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",a=typeof i.media=="object"&&i.media||{},p=typeof i.root=="object"?i.root||null:globalThis.document||null,c=typeof i.theme=="object"&&i.theme||{},r={prefix:o,media:a,theme:c,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...oe},utils:typeof i.utils=="object"&&i.utils||{}},d=me(p),g={css:ye(r,d),globalCss:Ie(r,d),keyframes:ze(r,d),createTheme:Te(r,d),reset(){d.reset(),g.theme.toString()},theme:{},sheet:d,config:r,prefix:o,getCssText:d.toString,toString:d.toString};return String(g.theme=g.createTheme(c)),g});return t||n.reset(),n};const{css:Ee,globalCss:De,keyframes:Ne,getCssText:Ve,theme:He,createTheme:Fe,config:Ge}=Ce({theme:{colors:{gray400:"red",gray500:"lightgray"}},media:{bp1:"(min-width: 480px)"},utils:{marginX:e=>({marginLeft:e,marginRight:e})}}),{className:we}=Ee({backgroundColor:"$gray400",borderRadius:"9999px",fontSize:"13px",lineHeight:"1",fontWeight:500,paddingTop:"10px",paddingBottom:"10px",paddingLeft:"16px",paddingRight:"16px",border:"0",":hover":{transform:"translateY(-2px)",boxShadow:"0 10px 25px rgba(0, 0, 0, .3)"}})(),Me=M.defineComponent({__name:"test",props:{name:{type:null,required:!0}},setup(e){const t=re.ref(0);return{__sfc:!0,count:t,testStyles:we}}});function Pe(e,t,n,i,o,a,p,c){var r=typeof e=="function"?e.options:e;t&&(r.render=t,r.staticRenderFns=n,r._compiled=!0),i&&(r.functional=!0),a&&(r._scopeId="data-v-"+a);var d;if(p?(d=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__<"u"&&(l=__VUE_SSR_CONTEXT__),o&&o.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(p)},r._ssrRegister=d):o&&(d=c?function(){o.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:o),d)if(r.functional){r._injectStyles=d;var g=r.render;r.render=function(u,f){return d.call(f),g(u,f)}}else{var m=r.beforeCreate;r.beforeCreate=m?[].concat(m,d):[d]}return{exports:e,options:r}}var te=function(){var t=this,n=t._self._c,i=t._self._setupProxy;return n("div",[n("span",{class:i.testStyles},[t._v("Hello: "+t._s(t.name))]),n("span",[t._v(t._s(i.count))])])},Le=[];te._withStripped=!0;var ie=Pe(Me,te,Le,!1,null,null,null,null);ie.options.__file="/var/dev/youcan-ui/src/Primitives/Test/test.vue";const Oe=ie.exports;_.Test=Oe,Object.defineProperties(_,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
