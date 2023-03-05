"use strict";(self.webpackChunksoft_sound=self.webpackChunksoft_sound||[]).push([[317],{3204:function(e){const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,r=/[_.\- ]+/,o=new RegExp("^"+r.source),s=new RegExp(r.source+i.source,"gu"),l=new RegExp("\\d+"+i.source,"gu"),c=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const r=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),c=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?c(e):r(e);return e!==r(e)&&(e=((e,a,i)=>{let r=!1,o=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];r&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),r=!1,s=o,o=!0,l++):o&&s&&n.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=o,o=!1,r=!0):(r=a(c)===c&&i(c)!==c,s=o,o=i(c)===c&&a(c)!==c)}return e})(e,r,c)),e=e.replace(o,""),e=i.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,r):r(e),i.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,n)=>t(n))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,n){n.d(t,{L:function(){return g},M:function(){return E},P:function(){return x},S:function(){return H},_:function(){return s},a:function(){return o},b:function(){return d},g:function(){return u},h:function(){return l}});var a=n(7294),i=(n(3204),n(5697)),r=n.n(i);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t.indexOf(n=r[a])>=0||(i[n]=e[n]);return i}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,n){const a={};let i="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:a}}function d(e,t,n,a,i){return void 0===i&&(i={}),o({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},i,{opacity:t?1:0})})}function u(e,t,n,a,i,r,s,l){const c={};r&&(c.backgroundColor=r,"fixed"===n?(c.width=a,c.height=i,c.backgroundColor=r,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],m=function(e){let{layout:t,width:n,height:i}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,n=s(e,p);return a.createElement(a.Fragment,null,a.createElement(m,o({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],w=function(e){let{src:t,srcSet:n,loading:i,alt:r="",shouldLoad:l}=e,c=s(e,h);return a.createElement("img",o({},c,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:r}))},y=function(e){let{fallback:t,sources:n=[],shouldLoad:i=!0}=e,r=s(e,f);const l=r.sizes||(null==t?void 0:t.sizes),c=a.createElement(w,o({},r,t,{sizes:l,shouldLoad:i}));return n.length?a.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:r}=e;return a.createElement("source",{key:t+"-"+r+"-"+n,type:r,media:t,srcSet:i?n:void 0,"data-srcset":i?void 0:n,sizes:l})})),c):c};var b;w.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},y.displayName="Picture",y.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const v=["fallback"],x=function(e){let{fallback:t}=e,n=s(e,v);return t?a.createElement(y,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},n))};x.displayName="Placeholder",x.propTypes={fallback:i.string,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const E=function(e){return a.createElement(a.Fragment,null,a.createElement(y,o({},e)),a.createElement("noscript",null,a.createElement(y,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const I=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],S=e=>e.replace(/\n/g,""),C=function(e,t,n){for(var a=arguments.length,i=new Array(a>3?a-3:0),o=3;o<a;o++)i[o-3]=arguments[o];return e.alt||""===e.alt?r().string.apply(r(),[e,t,n].concat(i)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},_={image:r().object.isRequired,alt:C},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],A=new Set;let N,T;const z=function(e){let{as:t="div",image:i,style:r,backgroundColor:d,className:u,class:p,onStartLoad:m,onLoad:g,onError:h}=e,f=s(e,j);const{width:w,height:y,layout:b}=i,v=c(w,y,b),{style:x,className:E}=v,I=s(v,L),k=(0,a.useRef)(),S=(0,a.useMemo)((()=>JSON.stringify(i.images)),[i.images]);p&&(u=p);const C=function(e,t,n){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,w,y);return(0,a.useEffect)((()=>{N||(N=n.e(731).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(S);if(T&&A.has(S))return;let t,a;return N.then((e=>{let{renderImageToString:n,swapPlaceholderImage:s}=e;k.current&&(k.current.innerHTML=n(o({isLoading:!0,isLoaded:A.has(S),image:i},f)),A.has(S)||(t=requestAnimationFrame((()=>{k.current&&(a=s(k.current,S,A,r,m,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[i]),(0,a.useLayoutEffect)((()=>{A.has(S)&&T&&(k.current.innerHTML=T(o({isLoading:A.has(S),isLoaded:A.has(S),image:i},f)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,a.createElement)(t,o({},I,{style:o({},x,r,{backgroundColor:d}),className:E+(u?" "+u:""),ref:k,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},W=(0,a.memo)((function(e){return e.image?(0,a.createElement)(z,e):null}));W.propTypes=_,W.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:n,__imageData:i,__error:r}=t,l=s(t,P);return r&&console.warn(r),i?a.createElement(e,o({image:i},l)):(console.warn("Image not loaded",n),null)}}const D=R((function(e){let{as:t="div",className:n,class:i,style:r,image:l,loading:p="lazy",imgClassName:m,imgStyle:h,backgroundColor:f,objectFit:w,objectPosition:y}=e,b=s(e,I);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(n=i),h=o({objectFit:w,objectPosition:y,backgroundColor:f},h);const{width:v,height:C,layout:_,images:j,placeholder:L,backgroundColor:A}=l,N=c(v,C,_),{style:T,className:z}=N,W=s(N,k),P={fallback:void 0,sources:[]};return j.fallback&&(P.fallback=o({},j.fallback,{srcSet:j.fallback.srcSet?S(j.fallback.srcSet):void 0})),j.sources&&(P.sources=j.sources.map((e=>o({},e,{srcSet:S(e.srcSet)})))),a.createElement(t,o({},W,{style:o({},T,r,{backgroundColor:f}),className:z+(n?" "+n:"")}),a.createElement(g,{layout:_,width:v,height:C},a.createElement(x,o({},u(L,!1,_,v,C,A,w,y))),a.createElement(E,o({"data-gatsby-image-ssr":"",className:m},b,d("eager"===p,!1,P,p,h)))))})),M=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),U={src:r().string.isRequired,alt:C,width:M,height:M,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!O.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};D.displayName="StaticImage",D.propTypes=U;const H=R(W);H.displayName="StaticImage",H.propTypes=U},6928:function(e,t,n){var a=n(7294),i=n(8436);t.Z=e=>a.createElement(i.nt,null,a.createElement(i.dH,{src:e.embedURL,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:e.title}))},8436:function(e,t,n){n.d(t,{Fg:function(){return m},Pi:function(){return u},Pz:function(){return c},bU:function(){return l},dH:function(){return h},e2:function(){return d},h4:function(){return s},nt:function(){return g},vM:function(){return p},vs:function(){return o}});var a=n(2145),i=n(2788),r=n(1883);const o=i.default.div.withConfig({displayName:"styled-components__ContentWrapper",componentId:"sc-1n9n3a9-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:flex-start;min-height:100vh;padding:32px;gap:",";background-color:black;@media (min-width:","){gap:",";}"],a.St,a.oh,a.UO),s=i.default.h1.withConfig({displayName:"styled-components__Header",componentId:"sc-1n9n3a9-1"})(['text-align:left;color:white;margin:0;font-family:"Josefin Sans";font-weight:100;font-size:',";@media (min-width:","){font-size:",";}"],a.ky,a.oh,a.DN),l=i.default.div.withConfig({displayName:"styled-components__SubHeader",componentId:"sc-1n9n3a9-2"})(['text-align:left;width:100%;color:white;margin:0;font-family:"Heebo";font-weight:100;font-size:',";"],a.qA),c=i.default.div.withConfig({displayName:"styled-components__HeaderWrapper",componentId:"sc-1n9n3a9-3"})(["display:flex;flex-direction:column;align-items:bottom;justify-content:flex-start;width:100%;background-color:black;"]),d=i.default.h2.withConfig({displayName:"styled-components__SubpageSubheader",componentId:"sc-1n9n3a9-4"})(['color:white;margin:0;font-family:"Heebo";font-weight:100;font-size:',";@media (min-width:","){font-size:",";}"],a.$n,a.oh,a.RX),u=i.default.div.withConfig({displayName:"styled-components__SubpageHeaderWrapper",componentId:"sc-1n9n3a9-5"})(["display:flex;flex-direction:row;gap:24px;align-items:bottom;justify-content:flex-start;width:100%;background-color:black;"]),p=i.default.div.withConfig({displayName:"styled-components__VideoRowWrapper",componentId:"sc-1n9n3a9-6"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:32px;width:100%;background-color:black;color:white;@media (min-width:","){flex-direction:row;gap:0;}"],a.oh),m=(0,i.default)(r.rU).withConfig({displayName:"styled-components__StyledLink",componentId:"sc-1n9n3a9-7"})(["color:aqua;text-decoration:none;"]),g=i.default.div.withConfig({displayName:"styled-components__BorderlessIFrameWrapper",componentId:"sc-1n9n3a9-8"})(["width:100%;height:0;padding-bottom:56.25%;position:relative;"]),h=i.default.iframe.withConfig({displayName:"styled-components__BorderlessIFrame",componentId:"sc-1n9n3a9-9"})(["border:none;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;"])},4952:function(e,t,n){n.r(t),n.d(t,{Head:function(){return v},default:function(){return b}});var a=n(7294),i=n(2145),r=n(8436),o=n(2788),s=n(8032),l=n(6928);const c="I'm currently helping with technical sound design for the upcoming Baldur's Gate III, working with the fantastic audio team at Larian Studios. It's something of a dream project to work on for me because Divinity Original Sin II was one of my favourite games in recent memory.\n\nAs a technical sound designer on the project, I'm writing a lot of Python scripts for Wwise, helping smooth out the workflow of the asset generation pipeline. I'm also helping out with technical implementation both in Wwise and in Larian's in-house game engine, as well as working on sound design and sound systemics.",d="I worked on the C++ implementation for the Impacter Wwise plugin. This was an extremely fun project to work on, translating Python audio analysis and synthesis code into C++ using the Eigen library, and designing the simple plugin UI that exposes physics-inspired parameters to the user, allowing them to cross-synthesize impact sounds and simulate shrinking or enlarging objects, as well as altering the impact velocity and position.\n\nI also implemented a destructible demo environment in the Unreal engine in which all of the sound was implemented using Impacter, and the plugin parameters were driven by the game physics.",u="I worked a lot on the Wwise Unreal integration at Audiokinetic. This involved the 'componentization' of Spatial Audio features such as Rooms, Portals, Geometry and Acoustic Textures. In other words - creating individual components for these features such that they can be used in custom Blueprints, as well as through Spatial Audio Volumes. Building upon this componentization, I added functionality to the Unreal integration for estimating the reverb Decay and HF Damping values for a reverb effect automatically, when Reverb and Geometry Components are used, by analysing the geometry to which they are attached. I also updated the way that acoustic textures are assigned to surfaces on Spatial Audio Volume objects, as well as their display in the viewport.",p="I implemented the 3D Meter in Wwise by updating an existing prototype, and adding a pixel shader for faster and smoother graphics. Using the in-built Wwise ambisonic decoding functionality, the ambisonics channel data is decoded onto virtual speaker positions around a sphere in the local bus space. The pixel shader is used to construct a directionality heatmap from this data. The 3D Meter thus allows users to inspect the directional information contained in an ambisonics bus and how it is affected by the sources distributed around the listener.",m="My Engineering Doctorate focused on the analysis and representation of musical timbre. As part of this research, I developed a real-time audio feature extraction tool that was used to analyse audio in real time and extract timbre descriptors. These timbre descriptors could then be mapped to the parameters of a visualisation algorithm. I made use of this feature extractor tool in various large-scale live audiovisual installations, in collaboration with Analema Group - a London-based arts collective. The largest of these was held at the Roundhouse in London, and featured a 360 degree projection of audio-reactive visuals, driven by microphones that could be used by the attendees. For this installation, we used the 'Wekinator' machine learning tool to construct the mappings from timbre features to visualization parameters.",g=o.default.h2.withConfig({displayName:"projects__ProjectHeader",componentId:"sc-z6gpwa-0"})(['color:white;margin:0;font-family:"Heebo";font-weight:100;']),h=o.default.div.withConfig({displayName:"projects__ProjectImage",componentId:"sc-z6gpwa-1"})(["width:100%;@media (min-width:","){width:50%;}"],i.oh),f=o.default.h3.withConfig({displayName:"projects__ProjectText",componentId:"sc-z6gpwa-2"})(['color:white;margin:0;font-family:"Heebo";font-weight:100;white-space:pre-line;@media (min-width:',"){width:50%;}"],i.oh),w=o.default.div.withConfig({displayName:"projects__ProjectImageTextWrapper",componentId:"sc-z6gpwa-3"})(["display:flex;flex-direction:column;align-items:left;justify-content:center;gap:",";@media (min-width:","){flex-direction:",";width:100%;}"],i.Dx,i.oh,(e=>e.reverseImageTextOrder?"row-reverse":"row")),y=o.default.div.withConfig({displayName:"projects__ProjectWrapper",componentId:"sc-z6gpwa-4"})(["display:flex;flex-direction:column;align-items:left;justify-content:center;gap:",";width:100%;background-color:black;"],i.eV);var b=()=>a.createElement(r.vs,null,a.createElement(r.Pi,null,a.createElement(r.h4,null,a.createElement(r.Fg,{to:"/"},"softsound")),a.createElement(r.e2,null," / projects")),a.createElement(y,null,a.createElement(g,null,"Baldur's Gate III - Larian Studios"),a.createElement(w,null,a.createElement(h,null,a.createElement(s.S,{alt:"",src:"../images/bg3.jpg",aspectRatio:1920/1080,__imageData:n(8531)})),a.createElement(f,null,c))),a.createElement(y,null,a.createElement(g,null,"Impacter Wwise Plugin - Audiokinetic"),a.createElement(w,{reverseImageTextOrder:!0},a.createElement(h,null,a.createElement(l.Z,{title:"Impacter Plugin - Audiokinetic",embedURL:"https://www.youtube.com/embed/tSgAbM6N7lw"})),a.createElement(f,null,d))),a.createElement(y,null,a.createElement(g,null,"Wwise Unreal Spatial Audio Features - Audiokinetic"),a.createElement(w,null,a.createElement(h,null,a.createElement(l.Z,{title:"Wwise Unreal Integration - Audiokinetic",embedURL:"https://www.youtube.com/embed/mjzCPgUcjiA?start=28"})),a.createElement(f,null,u))),a.createElement(y,null,a.createElement(g,null,"Ambisonics 3D Meter - Audiokinetic"),a.createElement(w,{reverseImageTextOrder:!0},a.createElement(h,null,a.createElement(s.S,{alt:"",src:"../images/AK3DMeter.png",aspectRatio:1920/1080,__imageData:n(9194)})),a.createElement(f,null,p))),a.createElement(y,null,a.createElement(g,null,"KIMA - The Wheel - Analema Group"),a.createElement(w,null,a.createElement(h,null,a.createElement(l.Z,{title:"KIMA - Analema Group",embedURL:"https://www.youtube.com/embed/ySDcSYw5jC0"})),a.createElement(f,null,m))));const v=()=>a.createElement("title",null,"Soft Sound | Projects")},2145:function(e,t,n){n.d(t,{$n:function(){return c},DN:function(){return r},Dx:function(){return p},RX:function(){return d},St:function(){return s},UO:function(){return l},eV:function(){return u},ky:function(){return i},oh:function(){return a},qA:function(){return o}});const a="1280px",i="32px",r="64px",o="22px",s="80px",l="120px",c="12px",d="24px",u="24px",p="12px"},9194:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#383838","images":{"fallback":{"src":"/static/c42b88e6224305817abfdf1da1ca890c/bb58a/AK3DMeter.png","srcSet":"/static/c42b88e6224305817abfdf1da1ca890c/22f21/AK3DMeter.png 475w,\\n/static/c42b88e6224305817abfdf1da1ca890c/5c258/AK3DMeter.png 949w,\\n/static/c42b88e6224305817abfdf1da1ca890c/bb58a/AK3DMeter.png 1898w","sizes":"(min-width: 1898px) 1898px, 100vw"},"sources":[{"srcSet":"/static/c42b88e6224305817abfdf1da1ca890c/0f7b4/AK3DMeter.webp 475w,\\n/static/c42b88e6224305817abfdf1da1ca890c/9899d/AK3DMeter.webp 949w,\\n/static/c42b88e6224305817abfdf1da1ca890c/7dc6e/AK3DMeter.webp 1898w","type":"image/webp","sizes":"(min-width: 1898px) 1898px, 100vw"}]},"width":1898,"height":1068}')},8531:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/92549a470d55c36f6edd9bf8d3d71ca8/d995f/bg3.jpg","srcSet":"/static/92549a470d55c36f6edd9bf8d3d71ca8/16865/bg3.jpg 365w,\\n/static/92549a470d55c36f6edd9bf8d3d71ca8/0afa1/bg3.jpg 730w,\\n/static/92549a470d55c36f6edd9bf8d3d71ca8/d995f/bg3.jpg 1460w","sizes":"(min-width: 1460px) 1460px, 100vw"},"sources":[{"srcSet":"/static/92549a470d55c36f6edd9bf8d3d71ca8/fa450/bg3.webp 365w,\\n/static/92549a470d55c36f6edd9bf8d3d71ca8/a0e37/bg3.webp 730w,\\n/static/92549a470d55c36f6edd9bf8d3d71ca8/5fcd0/bg3.webp 1460w","type":"image/webp","sizes":"(min-width: 1460px) 1460px, 100vw"}]},"width":1460,"height":821}')}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-c3ff920cd608f53f8577.js.map