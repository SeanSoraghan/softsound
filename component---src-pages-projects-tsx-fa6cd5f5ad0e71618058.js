"use strict";(self.webpackChunksoft_sound=self.webpackChunksoft_sound||[]).push([[317],{6928:function(e,t,a){var n=a(7294),i=a(876);t.Z=e=>n.createElement(i.nt,null,n.createElement(i.dH,{src:e.embedURL,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:e.title}))},4952:function(e,t,a){a.r(t),a.d(t,{Head:function(){return h},default:function(){return p}});var n=a(7294),i=a(876),s=a(8032),o=a(6928);const r="I'm currently helping with technical sound design for the upcoming Baldur's Gate III, working with the fantastic audio team at Larian Studios. It's something of a dream project to work on for me; Divinity Original Sin II was one of my favourite games in recent memory.\n\nAs a technical sound designer on the project, I'm writing a lot of Python scripts for Wwise, helping smooth out the workflow of the asset generation pipeline. I'm also helping out with technical implementation both in Wwise and in Larian's in-house game engine, as well as working on sound design and sound systemics.",l="I worked on the C++ implementation for the Impacter Wwise plugin. This was an extremely fun project to work on, translating Python audio analysis and synthesis code into C++ using the Eigen library, and designing the simple plugin UI that exposes physics-inspired parameters to the user, allowing them to cross-synthesize impact sounds and simulate shrinking or enlarging objects, as well as altering the impact velocity and position.\n\nI also implemented a destructible demo environment in the Unreal engine in which all of the sound was implemented using Impacter, and the plugin parameters were driven by the game physics.",c="I worked a lot on the Wwise Unreal integration at Audiokinetic. This involved the 'componentization' of Spatial Audio features such as Rooms, Portals, Geometry and Acoustic Textures. In other words - creating individual components for these features such that they can be used in custom Blueprints, as well as through Spatial Audio Volumes. Building upon this componentization, I added functionality to the Unreal integration for estimating the reverb Decay and HF Damping values for a reverb effect automatically, when Reverb and Geometry Components are used, by analysing the geometry to which they are attached. I also updated the way that acoustic textures are assigned to surfaces on Spatial Audio Volume objects, as well as their display in the viewport.",d="I implemented the 3D Meter in Wwise by updating an existing prototype, and adding a pixel shader for faster and smoother graphics. Using the in-built Wwise ambisonic decoding functionality, the ambisonics channel data is decoded onto virtual speaker positions around a sphere in the local bus space. The pixel shader is used to construct a directionality heatmap from this data. The 3D Meter thus allows users to inspect the directional information contained in an ambisonics bus and how it is affected by the sources distributed around the listener.",u="My Engineering Doctorate focused on the analysis and representation of musical timbre. As part of this research, I developed a real-time audio feature extraction tool that was used to analyse audio in real time and extract timbre descriptors. These timbre descriptors could then be mapped to the parameters of a visualisation algorithm. I made use of this feature extractor tool in various large-scale live audiovisual installations, in collaboration with Analema Group - a London-based arts collective. The largest of these was held at the Roundhouse in London, and featured a 360 degree projection of audio-reactive visuals, driven by microphones that could be used by the attendees. For this installation, we used the 'Wekinator' machine learning tool to construct the mappings from timbre features to visualization parameters.";var m=a(1197);var p=()=>n.createElement(i.vs,null,n.createElement(m.Z,{currentItemName:"projects"}),n.createElement(i.zB,null,n.createElement(i.Ei,null,"Baldur's Gate III - Larian Studios"),n.createElement(i.c4,null,n.createElement(i.pU,null,n.createElement(s.S,{alt:"",src:"../images/bg3.jpg",aspectRatio:1920/1080,__imageData:a(8531)})),n.createElement(i.SO,null,r))),n.createElement(i.zB,null,n.createElement(i.Ei,null,"Impacter Wwise Plugin - Audiokinetic"),n.createElement(i.c4,{reverseImageTextOrder:!0},n.createElement(i.pU,null,n.createElement(o.Z,{title:"Impacter Plugin - Audiokinetic",embedURL:"https://www.youtube.com/embed/tSgAbM6N7lw"})),n.createElement(i.SO,null,l))),n.createElement(i.zB,null,n.createElement(i.Ei,null,"Wwise Unreal Spatial Audio Features - Audiokinetic"),n.createElement(i.c4,null,n.createElement(i.pU,null,n.createElement(o.Z,{title:"Wwise Unreal Integration - Audiokinetic",embedURL:"https://www.youtube.com/embed/mjzCPgUcjiA?start=28"})),n.createElement(i.SO,null,c))),n.createElement(i.zB,null,n.createElement(i.Ei,null,"Ambisonics 3D Meter - Audiokinetic"),n.createElement(i.c4,{reverseImageTextOrder:!0},n.createElement(i.pU,null,n.createElement(s.S,{alt:"",src:"../images/AK3DMeter.png",aspectRatio:1920/1080,__imageData:a(9194)})),n.createElement(i.SO,null,d))),n.createElement(i.zB,null,n.createElement(i.Ei,null,"KIMA - The Wheel - Analema Group"),n.createElement(i.c4,null,n.createElement(i.pU,null,n.createElement(o.Z,{title:"KIMA - Analema Group",embedURL:"https://www.youtube.com/embed/ySDcSYw5jC0"})),n.createElement(i.SO,null,u))));const h=()=>n.createElement("title",null,"Soft Sound | Projects")},9194:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#383838","images":{"fallback":{"src":"/static/c42b88e6224305817abfdf1da1ca890c/bb58a/AK3DMeter.png","srcSet":"/static/c42b88e6224305817abfdf1da1ca890c/22f21/AK3DMeter.png 475w,\\n/static/c42b88e6224305817abfdf1da1ca890c/5c258/AK3DMeter.png 949w,\\n/static/c42b88e6224305817abfdf1da1ca890c/bb58a/AK3DMeter.png 1898w","sizes":"(min-width: 1898px) 1898px, 100vw"},"sources":[{"srcSet":"/static/c42b88e6224305817abfdf1da1ca890c/0f7b4/AK3DMeter.webp 475w,\\n/static/c42b88e6224305817abfdf1da1ca890c/9899d/AK3DMeter.webp 949w,\\n/static/c42b88e6224305817abfdf1da1ca890c/7dc6e/AK3DMeter.webp 1898w","type":"image/webp","sizes":"(min-width: 1898px) 1898px, 100vw"}]},"width":1898,"height":1068}')},8531:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/92549a470d55c36f6edd9bf8d3d71ca8/d995f/bg3.jpg","srcSet":"/static/92549a470d55c36f6edd9bf8d3d71ca8/16865/bg3.jpg 365w,\\n/static/92549a470d55c36f6edd9bf8d3d71ca8/0afa1/bg3.jpg 730w,\\n/static/92549a470d55c36f6edd9bf8d3d71ca8/d995f/bg3.jpg 1460w","sizes":"(min-width: 1460px) 1460px, 100vw"},"sources":[{"srcSet":"/static/92549a470d55c36f6edd9bf8d3d71ca8/fa450/bg3.webp 365w,\\n/static/92549a470d55c36f6edd9bf8d3d71ca8/a0e37/bg3.webp 730w,\\n/static/92549a470d55c36f6edd9bf8d3d71ca8/5fcd0/bg3.webp 1460w","type":"image/webp","sizes":"(min-width: 1460px) 1460px, 100vw"}]},"width":1460,"height":821}')}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-fa6cd5f5ad0e71618058.js.map