import{_ as x}from"./nuxt-link.cc5e8f13.js";/* empty css                   */import{a as h,o as a,b as n,S as d,U as m,V as u,D as _,e as t,t as l,r as p}from"./entry.fb7881e6.js";import k from"./ContentQuery.e2e719ac.js";import"./query.4f594473.js";import"./utils.629df51e.js";import"./index.36486552.js";const f={class:"ul grid grid-cols-1 md--grid-cols-2 gap-4 text-typography_primary",id:"pinned-posts"},y={class:"wrapper"},v=["src","alt"],w={class:"pinned__title font-serif text-h3 leading-h3 font-semibold group-hover--text-brand_primary"},$={class:"pinned__excerpt"},B={__name:"pinned",props:{data:{type:Array,required:!0}},setup(o){return(r,c)=>{const s=x;return a(),n("div",f,[(a(!0),n(d,null,m(o.data,i=>(a(),n("li",{class:"relative rounded-md border-typography_primary hover--border-brand_primary group",key:i._path},[u(s,{class:"pr-4 block relative",to:i._path+"/"},{default:_(()=>[t("div",y,[t("img",{class:"rounded-md",src:i.socialImage.src,alt:i.excerpt},null,8,v),t("div",w,l(i.headline),1),t("div",$,l(i.excerpt),1)])]),_:2},1032,["to"])]))),128))])}}},L=h(B,[["__scopeId","data-v-dab1ca2d"]]),I={class:"page-index container px-4 py-8"},S=t("div",{class:"bio"},[t("h1",{class:"text-title leading-title mt-8 mb-4"},"Michael Paulukonis")],-1),C=t("div",{class:"sectionhead mt-8 inline-block bg-primary text-white leading-tight antialiased text-left font-bold p-2 text-2xl font-serif"},"I am a full-stack developer and digital artist living in Framingham, MA",-1),M={class:"inline-list list-none m-0 p-0"},N={class:"inline-block leading-none pl-5"},U=["href"],V=t("div",{class:"sectionhead mt-8 inline-block bg-primary text-white leading-tight antialiased text-left font-bold p-2 text-2xl font-serif"},"other web-projects",-1),A={class:"inline-list list-none m-0 p-0"},D=["href"],F={class:"pt-0-important mt-10",id:"main"};function P(o,r,c,s,i,q){const g=L,b=k;return a(),n("div",I,[S,C,t("ul",M,[(a(!0),n(d,null,m(s.accounts,e=>(a(),n("li",N,[t("a",{class:"site-link px-2 py-1 bg-secondary uppercase tracking-wide font-normal text-sm text-black",href:e.url},l(e.name),9,U)]))),256))]),V,t("ul",A,[(a(!0),n(d,null,m(s.projects,e=>(a(),n("li",{class:"inline-block leading-none pl-5",key:e.url},[t("a",{class:"site-link px-2 py-1 bg-secondary uppercase tracking-wide font-normal text-sm text-black",href:e.url},l(e.name),9,D)]))),128))]),t("div",F,[u(b,{path:"/blog",only:["headline","excerpt","date","tags","_path","image","socialImage"],where:{tags:{$contains:"pinned"}},sort:{date:-1}},{default:_(({data:e})=>[u(g,{data:e},null,8,["data"])]),_:1})])])}const j={mounted(){document.body.classList.add("index-page")},unmounted(){document.body.classList.remove("index-page")},setup(){const o=p([{url:"https://github.com/michaelpaulukonis",name:"github"},{url:"https://www.linkedin.com/in/michaelpaulukonis/",name:"linkedin"},{url:"https://www.instagram.com/michaelpaulukonis",name:"instagram"},{url:"https://bsky.app/profile/xradiographer.bsky.social",name:"Bluesky"}]),r=p([{url:"http://michaelpaulukonis.com",name:"michaelpaulukonis.com"}]),c=p([{url:"https://michaelpaulukonis.github.io/polychrome.p5/",name:"polychrometext"},{url:"https://michaelpaulukonis.github.io/imagetexter.p5/",name:"imagetexter"},{url:"https://michaelpaulukonis.github.io/obscurus/",name:"OBSCURUS"},{url:"http://poeticalbot.tumblr.com/",name:"poetical bot"},{url:"https://leanstooneside.tumblr.com/",name:"List Mania"},{url:"http://michaelpaulukonis.github.io/malepropp",name:"fairy tale generator"},{url:"http://michaelpaulukonis.github.io/poetrygen/",name:"poetry generators"}]);return{accounts:o,websites:r,projects:c}}},J=h(j,[["render",P]]);export{J as default};
