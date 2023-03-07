"use strict";(self.webpackChunksoft_sound=self.webpackChunksoft_sound||[]).push([[470],{3204:function(e){const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,r=/[_.\- ]+/,o=new RegExp("^"+r.source),s=new RegExp(r.source+i.source,"gu"),l=new RegExp("\\d+"+i.source,"gu"),c=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const r=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),c=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?c(e):r(e);return e!==r(e)&&(e=((e,a,i)=>{let r=!1,o=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];r&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),r=!1,s=o,o=!0,l++):o&&s&&n.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=o,o=!1,r=!0):(r=a(c)===c&&i(c)!==c,s=o,o=i(c)===c&&a(c)!==c)}return e})(e,r,c)),e=e.replace(o,""),e=i.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,r):r(e),i.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,n)=>t(n))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,n){n.d(t,{L:function(){return g},M:function(){return N},P:function(){return v},S:function(){return q},_:function(){return s},a:function(){return o},b:function(){return d},g:function(){return u},h:function(){return l}});var a=n(7294),i=(n(3204),n(5697)),r=n.n(i);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t.indexOf(n=r[a])>=0||(i[n]=e[n]);return i}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,n){const a={};let i="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:a}}function d(e,t,n,a,i){return void 0===i&&(i={}),o({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},i,{opacity:t?1:0})})}function u(e,t,n,a,i,r,s,l){const c={};r&&(c.backgroundColor=r,"fixed"===n?(c.width=a,c.height=i,c.backgroundColor=r,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:n,height:i}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,n=s(e,m);return a.createElement(a.Fragment,null,a.createElement(p,o({},n)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:i,alt:r="",shouldLoad:l}=e,c=s(e,f);return a.createElement("img",o({},c,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:r}))},w=function(e){let{fallback:t,sources:n=[],shouldLoad:i=!0}=e,r=s(e,h);const l=r.sizes||(null==t?void 0:t.sizes),c=a.createElement(y,o({},r,t,{sizes:l,shouldLoad:i}));return n.length?a.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:r}=e;return a.createElement("source",{key:t+"-"+r+"-"+n,type:r,media:t,srcSet:i?n:void 0,"data-srcset":i?void 0:n,sizes:l})})),c):c};var b;y.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},w.displayName="Picture",w.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const x=["fallback"],v=function(e){let{fallback:t}=e,n=s(e,x);return t?a.createElement(w,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},n))};v.displayName="Placeholder",v.propTypes={fallback:i.string,sources:null==(b=w.propTypes)?void 0:b.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const N=function(e){return a.createElement(a.Fragment,null,a.createElement(w,o({},e)),a.createElement("noscript",null,a.createElement(w,o({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=w.propTypes;const E=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],_=e=>e.replace(/\n/g,""),I=function(e,t,n){for(var a=arguments.length,i=new Array(a>3?a-3:0),o=3;o<a;o++)i[o-3]=arguments[o];return e.alt||""===e.alt?r().string.apply(r(),[e,t,n].concat(i)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:r().object.isRequired,alt:I},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],T=new Set;let j,z;const M=function(e){let{as:t="div",image:i,style:r,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=s(e,L);const{width:y,height:w,layout:b}=i,x=c(y,w,b),{style:v,className:N}=x,E=s(x,S),C=(0,a.useRef)(),_=(0,a.useMemo)((()=>JSON.stringify(i.images)),[i.images]);m&&(u=m);const I=function(e,t,n){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,y,w);return(0,a.useEffect)((()=>{j||(j=n.e(731).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return z=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(_);if(z&&T.has(_))return;let t,a;return j.then((e=>{let{renderImageToString:n,swapPlaceholderImage:s}=e;C.current&&(C.current.innerHTML=n(o({isLoading:!0,isLoaded:T.has(_),image:i},h)),T.has(_)||(t=requestAnimationFrame((()=>{C.current&&(a=s(C.current,_,T,r,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[i]),(0,a.useLayoutEffect)((()=>{T.has(_)&&z&&(C.current.innerHTML=z(o({isLoading:T.has(_),isLoaded:T.has(_),image:i},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,a.createElement)(t,o({},E,{style:o({},v,r,{backgroundColor:d}),className:N+(u?" "+u:""),ref:C,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},O=(0,a.memo)((function(e){return e.image?(0,a.createElement)(M,e):null}));O.propTypes=k,O.displayName="GatsbyImage";const W=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:n,__imageData:i,__error:r}=t,l=s(t,W);return r&&console.warn(r),i?a.createElement(e,o({image:i},l)):(console.warn("Image not loaded",n),null)}}const A=R((function(e){let{as:t="div",className:n,class:i,style:r,image:l,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:w}=e,b=s(e,E);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(n=i),f=o({objectFit:y,objectPosition:w,backgroundColor:h},f);const{width:x,height:I,layout:k,images:L,placeholder:S,backgroundColor:T}=l,j=c(x,I,k),{style:z,className:M}=j,O=s(j,C),W={fallback:void 0,sources:[]};return L.fallback&&(W.fallback=o({},L.fallback,{srcSet:L.fallback.srcSet?_(L.fallback.srcSet):void 0})),L.sources&&(W.sources=L.sources.map((e=>o({},e,{srcSet:_(e.srcSet)})))),a.createElement(t,o({},O,{style:o({},z,r,{backgroundColor:h}),className:M+(n?" "+n:"")}),a.createElement(g,{layout:k,width:x,height:I},a.createElement(v,o({},u(S,!1,k,x,I,T,y,w))),a.createElement(N,o({"data-gatsby-image-ssr":"",className:p},b,d("eager"===m,!1,W,m,f)))))})),F=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},H=new Set(["fixed","fullWidth","constrained"]),P={src:r().string.isRequired,alt:I,width:F,height:F,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!H.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};A.displayName="StaticImage",A.propTypes=P;const q=R(O);q.displayName="StaticImage",q.propTypes=P},1197:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),i=n(876);var r=e=>{const t=e.currentItemName!=e.itemName;return a.createElement(a.Fragment,null,t?a.createElement(i.Fg,{to:"/"+("softsound"==e.itemName?"":e.itemName)},e.itemName):a.createElement(a.Fragment,null,e.itemName))};var o=e=>a.createElement(i._,null,a.createElement(i.cQ,null,a.createElement(r,{currentItemName:e.currentItemName,itemName:"softsound"})),a.createElement(i.k0,null,"/ ",a.createElement(r,{currentItemName:e.currentItemName,itemName:"about"}),a.createElement(r,{currentItemName:e.currentItemName,itemName:"projects"})))},876:function(e,t,n){n.d(t,{p4:function(){return f},Yh:function(){return h},Fo:function(){return y},dH:function(){return E},nt:function(){return N},vs:function(){return l},pU:function(){return p},Ei:function(){return m},SO:function(){return g},ob:function(){return w},c4:function(){return b},zB:function(){return x},cQ:function(){return c},k0:function(){return d},_:function(){return u},Fg:function(){return v}});const a="25px",i="30px",r="1280px";var o=n(2788),s=n(1883);const l=o.default.div.withConfig({displayName:"styled-components__ContentWrapper",componentId:"sc-1n9n3a9-0"})(["display:flex;flex-direction:column;align-items:left;justify-content:flex-start;min-height:calc(100vh - ",");padding:32px;gap:",";background-color:black;"],"64px","100px"),c=o.default.h1.withConfig({displayName:"styled-components__NavBarMainPage",componentId:"sc-1n9n3a9-1"})(['display:flex;text-align:left;color:white;margin:0;font-family:"Josefin Sans";font-weight:100;font-size:',";@media (min-width:","){font-size:",";}"],"48px",r,"48px"),d=o.default.h2.withConfig({displayName:"styled-components__NavBarSubPagesWrapper",componentId:"sc-1n9n3a9-2"})(['display:flex;flex-direction:row;justify-content:flex-start;gap:12px;width:100%;color:white;margin:0;font-family:"Heebo";font-weight:100;font-size:',";@media (min-width:","){font-size:",";}"],"22px",r,"22px"),u=o.default.div.withConfig({displayName:"styled-components__NavBarWrapper",componentId:"sc-1n9n3a9-3"})(["display:flex;flex-direction:column;gap:0px;align-items:bottom;justify-content:flex-start;width:100%;background-color:black;@media (min-width:","){flex-direction:row;gap:24px;}"],r),m=(o.default.div.withConfig({displayName:"styled-components__VideoRowWrapper",componentId:"sc-1n9n3a9-4"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:32px;width:100%;background-color:black;color:white;@media (min-width:","){flex-direction:row;gap:0;}"],r),o.default.h2.withConfig({displayName:"styled-components__MediaHeader",componentId:"sc-1n9n3a9-5"})(['color:white;margin:0;font-family:"Heebo";font-weight:100;font-size:',";"],i)),p=o.default.div.withConfig({displayName:"styled-components__Media",componentId:"sc-1n9n3a9-6"})(["width:100%;@media (min-width:","){width:50%;}"],r),g=o.default.h3.withConfig({displayName:"styled-components__MediaText",componentId:"sc-1n9n3a9-7"})(['color:white;margin:0;font-family:"Heebo";font-weight:100;white-space:pre-line;font-size:',";@media (min-width:","){width:50%;}"],"20px",r),f=o.default.h3.withConfig({displayName:"styled-components__AboutMediaText",componentId:"sc-1n9n3a9-8"})(['color:white;margin:0;font-family:"Heebo";font-weight:100;white-space:pre-line;font-size:',";"],a),h=o.default.h4.withConfig({displayName:"styled-components__AboutMediaTextBold",componentId:"sc-1n9n3a9-9"})(['color:white;margin:0;font-family:"Heebo";font-weight:400;white-space:pre-line;font-size:',";"],a),y=o.default.div.withConfig({displayName:"styled-components__AboutMediaTextEmailWrapper",componentId:"sc-1n9n3a9-10"})(["display:flex;flex-direction:column;@media (min-width:","){width:50%;}"],r),w=o.default.h3.withConfig({displayName:"styled-components__MediaTextCentredLarge",componentId:"sc-1n9n3a9-11"})(['display:flex;align-items:center;justify-content:left;color:white;margin:0;font-family:"Heebo";font-weight:100;white-space:pre-line;font-size:',";@media (min-width:","){width:50%;font-size:",";justify-content:center;}"],i,r,"48px"),b=o.default.div.withConfig({displayName:"styled-components__MediaTextWrapper",componentId:"sc-1n9n3a9-12"})(["display:flex;flex-direction:column;align-items:left;justify-content:center;gap:",";@media (min-width:","){flex-direction:",";width:100%;gap:",";}"],"48px",r,(e=>e.reverseImageTextOrder?"row-reverse":"row"),"152px"),x=o.default.div.withConfig({displayName:"styled-components__MediaWrapper",componentId:"sc-1n9n3a9-13"})(["display:flex;flex-direction:column;align-items:left;justify-content:center;gap:",";width:100%;background-color:black;"],"32px"),v=(o.default.h3.withConfig({displayName:"styled-components__Paragraph",componentId:"sc-1n9n3a9-14"})(['align-items:left;color:white;margin:0;font-family:"Heebo";font-weight:100;white-space:pre-line;']),(0,o.default)(s.rU).withConfig({displayName:"styled-components__StyledLink",componentId:"sc-1n9n3a9-15"})(["color:teal;text-decoration:none;font-weight:400;"])),N=o.default.div.withConfig({displayName:"styled-components__BorderlessIFrameWrapper",componentId:"sc-1n9n3a9-16"})(["width:100%;height:0;padding-bottom:56.25%;position:relative;"]),E=o.default.iframe.withConfig({displayName:"styled-components__BorderlessIFrame",componentId:"sc-1n9n3a9-17"})(["border:none;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;"])}}]);
//# sourceMappingURL=dc1285cab355474be83d3813747b4194f87adb54-f7cc6809827def9e92a3.js.map